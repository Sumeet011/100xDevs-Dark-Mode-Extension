// Content script for 100xDevs Dark Mode Extension
// This script runs on harkirat.classx.co.in to enhance the dark mode experience

(function() {
  'use strict';

  // Initialize dark mode
  function initDarkMode() {
    console.log('100xDevs Dark Mode activated');
    
    // Add a custom attribute to track dark mode
    document.documentElement.setAttribute('data-dark-mode', 'true');
    
    // Handle dynamically loaded content
    observeNewContent();
    
    // Fix any white backgrounds that might appear
    fixBackgrounds();
    
    // Enhance images for dark mode
    enhanceImages();
  }

  // Observer for dynamically loaded content
  function observeNewContent() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
              fixBackgrounds();
              enhanceImages();
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  // Fix any remaining white backgrounds
  function fixBackgrounds() {
    // Target elements that might have inline white backgrounds
    const elements = document.querySelectorAll('[style*="background"]');
    elements.forEach(el => {
      const bg = window.getComputedStyle(el).backgroundColor;
      if (bg === 'rgb(255, 255, 255)' || bg === '#ffffff' || bg === '#fff') {
        el.style.setProperty('background-color', '#21262d', 'important');
      }
    });
  }

  // Enhance images for better dark mode visibility
  function enhanceImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Skip logos and icons (usually small)
      if (img.width < 100 || img.height < 100) {
        return;
      }
      
      // Add a subtle filter for better visibility on dark backgrounds
      if (!img.hasAttribute('data-dark-enhanced')) {
        img.setAttribute('data-dark-enhanced', 'true');
        img.style.filter = 'brightness(0.9) contrast(1.05)';
      }
    });
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDarkMode);
  } else {
    initDarkMode();
  }

  // Handle Next.js page transitions (if used)
  let lastUrl = location.href;
  new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      setTimeout(() => {
        fixBackgrounds();
        enhanceImages();
      }, 100);
    }
  }).observe(document, { subtree: true, childList: true });

})();
