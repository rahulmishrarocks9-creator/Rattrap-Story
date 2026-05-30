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

// Each slide is rendered at 1920x1080 per App.tsx contract.
// We screenshot at 2x device scale for 4K output (3840x2160).
const SLIDE_WIDTH = 1920;
const SLIDE_HEIGHT = 1080;
const DEVICE_SCALE = 2; // results in 3840x2160 per slide

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

    // Set viewport to exactly one slide width so layout is correct.
    // DeviceScaleFactor=2 gives us 4K output when we crop each slide.
    await page.setViewport({
      width: SLIDE_WIDTH,
      height: SLIDE_HEIGHT,
      deviceScaleFactor: DEVICE_SCALE,
    });

    console.log('🌐 Navigating to /allslides...');
    await page.goto(`${SLIDE_BASE_URL}/allslides`, {
      waitUntil: 'networkidle0',
      timeout: 60000,
    });

    // Extra wait for fonts and animations to settle
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Find all .slide elements
    const slideCount = await page.$$eval('.slide', els => els.length);
    console.log(`📊 Found ${slideCount} slides`);

    if (slideCount === 0) {
      throw new Error('No .slide elements found on /allslides — check the route is working');
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

      // Get the bounding box of this specific .slide element
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

      // Screenshot just this slide's region
      // Multiply by deviceScaleFactor for actual pixel coords
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
