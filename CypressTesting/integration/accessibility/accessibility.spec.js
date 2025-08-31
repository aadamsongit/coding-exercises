// cypress/integration/accessibility/accessibility.spec.js

import 'cypress-axe';

describe('Accessibility Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.amazon.com'); 
    cy.injectAxe(); // Injects axe-core into the page
  });

  it('should have images with alt text', () => {
    cy.get('img').each(($img) => {
      const altText = $img.prop('alt');
      expect(altText).to.not.be.empty;  // Ensure alt text is not empty
      console.log(`Image src: ${$img.prop('src')}, alt text: ${altText}`);
    });
  });
});
