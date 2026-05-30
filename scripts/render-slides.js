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

// Matches manifest order exactly
const slideNames = [
  'Title', 'AuthorProfile', 'ThemePlotCharacters', 'CharacterSketches',
  'TitleSymbolism', 'ThemesSymbols', 'StorySetting', 'KeyPoints',
  'Summary', 'VocabularyOne', 'VocabularyTwo', 'LiteraryDevicesOne',
  'LiteraryDevicesTwo', 'Conclusion', 'ExtractOne', 'ExtractTwo',
  'AssertionReasoning', 'Analogy', 'ThankYou',
];

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

    page.on('console', msg => console.log(`[browser ${msg.type()}] ${msg.text()}`));
    page.on('pageerror', err => console.error(`[browser error] ${err.message}`));

    // ── Render each slide individually via /slide<N> ──────────────────────
    // This avoids AllSlides crashing due to one bad component affecting all.
    // Each slide is isolated in its own navigation.

    for (let i = 0; i < slideNames.length; i++) {
      const position = i + 1; // manifest positions are 1-based
      const slideName = slideNames[i];
      const slideUrl = `${SLIDE_BASE_URL}/slide${position}`;

      console.log(`\n📖 Rendering slide ${position}/${slideNames.length} (${slideName})...`);
      console.log(`   URL: ${slideUrl}`);

      try {
        await page.goto(slideUrl, {
          waitUntil: 'networkidle0',
          timeout: 30000,
        });

        // Wait for fonts and animations
        await new Promise(resolve => setTimeout(resolve, 1500));

        // The SlideEditor renders slides as display:block/none.
        // Find the visible (display:block) slide div and screenshot it.
        const slideHandle = await page.$('.select-none > div[style*="display: block"]');

        if (!slideHandle) {
          console.warn(`⚠️  Could not find visible slide div for ${slideName}, falling back to full viewport`);
          const outputPath = path.join(OUTPUT_DIR, `slide-${String(position).padStart(2, '0')}-${slideName}.png`);
          await page.screenshot({ path: outputPath, type: 'png' });
        } else {
          const outputPath = path.join(OUTPUT_DIR, `slide-${String(position).padStart(2, '0')}-${slideName}.png`);
          await slideHandle.screenshot({ path: outputPath, type: 'png' });
        }

        const outputPath = path.join(OUTPUT_DIR, `slide-${String(position).padStart(2, '0')}-${slideName}.png`);
        if (fs.existsSync(outputPath)) {
          const fileSize = (fs.statSync(outputPath).size / 1024 / 1024).toFixed(2);
          console.log(`✅ → ${path.basename(outputPath)} (${fileSize} MB)`);
        }
      } catch (slideError) {
        console.error(`❌ Failed slide ${position} (${slideName}): ${slideError.message}`);
      }
    }

    console.log(`\n🎉 Done! Output: ${OUTPUT_DIR}`);

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
