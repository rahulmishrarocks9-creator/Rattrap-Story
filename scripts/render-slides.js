#!/usr/bin/env node

/**
 * Slide Rendering Script
 * Renders slides to 4K (3840x2160) PNG images
 * Supports HTML/CSS slides and screenshot-based rendering
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const SLIDES_DIR = path.join(__dirname, '../slides');
const OUTPUT_DIR = path.join(__dirname, '../slide-outputs');
const SLIDES_HTML = path.join(SLIDES_DIR, 'index.html');

// 4K resolution
const VIEWPORT = {
  width: 3840,
  height: 2160,
};

async function renderSlides() {
  console.log('🎬 Starting slide rendering process...');
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`✅ Created output directory: ${OUTPUT_DIR}`);
  }

  // Check if slides exist
  if (!fs.existsSync(SLIDES_HTML)) {
    console.warn(`⚠️  Slides not found at ${SLIDES_HTML}`);
    console.log('Create your slides HTML file at: slides/index.html');
    return;
  }

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setViewport(VIEWPORT);

    const slideUrl = `file://${SLIDES_HTML}`;
    console.log(`📖 Loading slides from: ${slideUrl}`);
    
    await page.goto(slideUrl, { waitUntil: 'networkidle2' });

    // Get slide count - adjust selector based on your slide framework
    // Common selectors: .slide, [role="presentation"], .swiper-slide, etc.
    const slideCount = await page.evaluate(() => {
      const slides = document.querySelectorAll(
        '.slide, [data-slide], .swiper-slide, section'
      );
      return slides.length;
    });

    console.log(`📊 Found ${slideCount} slides`);

    // Render each slide
    for (let i = 0; i < slideCount; i++) {
      try {
        // Navigate to specific slide (adjust based on your framework)
        await page.evaluate((slideIndex) => {
          const slides = document.querySelectorAll(
            '.slide, [data-slide], .swiper-slide, section'
          );
          if (slides[slideIndex]) {
            slides[slideIndex].scrollIntoView({ behavior: 'smooth' });
          }
        }, i);

        await page.waitForTimeout(500); // Wait for animations

        const outputPath = path.join(OUTPUT_DIR, `slide-${String(i + 1).padStart(2, '0')}.png`);
        
        await page.screenshot({
          path: outputPath,
          type: 'png',
        });

        console.log(`✅ Rendered slide ${i + 1}/${slideCount} → ${path.basename(outputPath)}`);
      } catch (error) {
        console.error(`❌ Error rendering slide ${i + 1}:`, error.message);
      }
    }

    console.log(`\n🎉 All slides rendered successfully to: ${OUTPUT_DIR}`);
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
