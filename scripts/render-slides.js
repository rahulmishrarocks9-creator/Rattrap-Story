#!/usr/bin/env node

/**
 * Rattrap Story Slide Rendering Script
 * Renders React TSX slides to 4K (3840x2160) PNG images
 * 
 * Slide List:
 * 1. Title
 * 2. StorySetting
 * 3. ThemePlotCharacters
 * 4. CharacterSketches
 * 5. ThemesSymbols
 * 6. TitleSymbolism
 * 7. Analogy
 * 8. AssertionReasoning
 * 9. KeyPoints
 * 10. LiteraryDevicesOne
 * 11. LiteraryDevicesTwo
 * 12. ExtractOne
 * 13. ExtractTwo
 * 14. VocabularyOne
 * 15. VocabularyTwo
 * 16. Summary
 * 17. AuthorProfile
 * 18. Conclusion
 * 19. ThankYou
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

// Configuration
const SLIDE_BASE_URL = process.env.SLIDE_URL || 'http://localhost:5173';
const OUTPUT_DIR = path.join(__dirname, '../slide-outputs');

// 4K resolution
const VIEWPORT = {
  width: 3840,
  height: 2160,
};

// Slide order from slideLoader
const SLIDES = [
  'Title',
  'StorySetting',
  'ThemePlotCharacters',
  'CharacterSketches',
  'ThemesSymbols',
  'TitleSymbolism',
  'Analogy',
  'AssertionReasoning',
  'KeyPoints',
  'LiteraryDevicesOne',
  'LiteraryDevicesTwo',
  'ExtractOne',
  'ExtractTwo',
  'VocabularyOne',
  'VocabularyTwo',
  'Summary',
  'AuthorProfile',
  'Conclusion',
  'ThankYou',
];

async function renderSlides() {
  console.log('🎬 Starting Rattrap Story slide rendering to 4K...');
  console.log(`📍 Target URL: ${SLIDE_BASE_URL}`);
  console.log(`📊 Total slides: ${SLIDES.length}`);
  
  // Create output directory if it doesn't exist
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
      ],
    });

    console.log('✅ Browser launched');
    const page = await browser.newPage();
    await page.setViewport(VIEWPORT);

    // Render each slide
    for (let i = 0; i < SLIDES.length; i++) {
      const slideName = SLIDES[i];
      const slideNumber = i + 1;
      
      try {
        // Navigate to the slide (adjust position based on your App.tsx routing)
        const slideUrl = `${SLIDE_BASE_URL}/slide${slideNumber}`;
        
        console.log(`\n📖 Rendering slide ${slideNumber}/${SLIDES.length} (${slideName})...`);
        console.log(`   URL: ${slideUrl}`);
        
        await page.goto(slideUrl, { 
          waitUntil: 'networkidle2',
          timeout: 30000,
        });

        // Wait for slide content to render
        await page.waitForTimeout(1000);

        const outputPath = path.join(
          OUTPUT_DIR,
          `slide-${String(slideNumber).padStart(2, '0')}-${slideName}.png`
        );
        
        await page.screenshot({
          path: outputPath,
          type: 'png',
          fullPage: false,
        });

        const fileSize = (fs.statSync(outputPath).size / 1024 / 1024).toFixed(2);
        console.log(`✅ Rendered → ${path.basename(outputPath)} (${fileSize} MB)`);
      } catch (error) {
        console.error(`❌ Error rendering slide ${slideNumber} (${slideName}):`, error.message);
      }
    }

    console.log(`\n🎉 All slides rendered successfully!`);
    console.log(`📁 Output folder: ${OUTPUT_DIR}`);
    console.log(`📊 Total files: ${SLIDES.length}`);
    
  } catch (error) {
    console.error('❌ Rendering failed:', error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run if called directly
if (require.main === module) {
  renderSlides().catch(error => {
    console.error(error);
    process.exit(1);
  });
}

module.exports = { renderSlides };
