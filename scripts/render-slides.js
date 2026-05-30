#!/usr/bin/env node
/**
 * Rattrap Story Slide Rendering Script
 * Uses the /allslides route to render all slides at once,
 * then crops each .slide div into a separate 4K PNG.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SLIDE_BASE_URL = process.env.SLIDE_URL || 'http://localhost:5173';
const OUTPUT_DIR = path.join(__dirname, '../slide-outputs');

const SLIDE_WIDTH = 1920;
const SLIDE_HEIGHT = 1080;
const DEVICE_SCALE = 2;

async function renderSlides() {
  console.log('🎬 Starting Rattrap Story slide rendering...');
  console.log(`📍 Target URL: ${SLIDE_BASE_URL}/allslides`);

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`✅ Created output directory: ${OUTPUT_DIR}`);
  }

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--font-render-hinting=none',
      ],
    });

    const page = await browser.newPage();

    await page.setViewport({
      width: SLIDE_WIDTH,
      height: SLIDE_HEIGHT,
      deviceScaleFactor: DEVICE_SCALE,
    });

    // Log all browser console messages and errors
    page.on('console', msg => console.log(`[browser ${msg.type()}] ${msg.text()}`));
    page.on('pageerror', err => console.error(`[browser error] ${err.message}`));
    page.on('requestfailed', req => console.error(`[request failed] ${req.url()} — ${req.failure()?.errorText}`));

    console.log('🌐 Navigating to /allslides...');
    const response = await page.goto(`${SLIDE_BASE_URL}/allslides`, {
      waitUntil: 'networkidle0',
      timeout: 60000,
    });

    console.log(`📡 HTTP status: ${response?.status()}`);

    // Wait extra for JS to hydrate
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Dump the full page HTML for diagnosis
    const html = await page.content();
    console.log(`📄 Page HTML (first 3000 chars):\n${html.slice(0, 3000)}`);

    // Take a debug screenshot to see what Puppeteer actually sees
    const debugPath = path.join(OUTPUT_DIR, '_debug.png');
    await page.screenshot({ path: debugPath, fullPage: true });
    console.log(`🔍 Debug screenshot saved to: ${debugPath}`);

    // Try multiple selectors to find slides
    const divCount = await page.$$eval('div', els => els.length);
    console.log(`Total divs on page: ${divCount}`);

    const slideCount = await page.$$eval('.slide', els => els.length);
    console.log(`📊 .slide elements found: ${slideCount}`);

    // Also check for the bg-black wrapper from AllSlides
    const bgBlackCount = await page.$$eval('.bg-black', els => els.length);
    console.log(`bg-black elements found: ${bgBlackCount}`);

    if (slideCount === 0) {
      throw new Error('No .slide elements found — see debug output above');
    }

    const slideNames = [
      'Title', 'StorySetting', 'ThemePlotCharacters', 'CharacterSketches',
      'ThemesSymbols', 'TitleSymbolism', 'Analogy', 'AssertionReasoning',
      'KeyPoints', 'LiteraryDevicesOne', 'LiteraryDevicesTwo',
      'ExtractOne', 'ExtractTwo', 'VocabularyOne', 'VocabularyTwo',
      'Summary', 'AuthorProfile', 'Conclusion', 'ThankYou',
    ];

    for (let i = 0; i < slideCount; i++) {
      const slideNumber = i + 1;
      const slideName = slideNames[i] || `Slide${slideNumber}`;

      const boundingBox = await page.$$eval('.slide', (els, idx) => {
        const el = els[idx];
        const rect = el.getBoundingClientRect();
        return { x: rect.left, y: rect.top, width: rect.width, height: rect.height };
      }, i);

      const outputPath = path.join(
        OUTPUT_DIR,
        `slide-${String(slideNumber).padStart(2, '0')}-${slideName}.png`
      );

      console.log(`\n📖 Rendering slide ${slideNumber}/${slideCount} (${slideName})...`);

      await page.screenshot({
        path: outputPath,
        type: 'png',
        clip: {
          x: boundingBox.x,
          y: boundingBox.y,
          width: boundingBox.width,
          height: boundingBox.height,
        },
      });

      const fileSize = (fs.statSync(outputPath).size / 1024 / 1024).toFixed(2);
      console.log(`✅ → ${path.basename(outputPath)} (${fileSize} MB)`);
    }

    console.log(`\n🎉 All ${slideCount} slides rendered!`);
    console.log(`📁 Output: ${OUTPUT_DIR}`);

  } catch (error) {
    console.error('❌ Rendering failed:', error);
    process.exit(1);
  } finally {
    if (browser) await browser.close();
  }
}

const isMain = process.argv[1] === fileURLToPath(import.meta.url);
if (isMain) {
  renderSlides().catch(error => {
    console.error(error);
    process.exit(1);
  });
}

export { renderSlides };
