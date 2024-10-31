const { Builder, By } = require('selenium-webdriver');

(async function checkAltText() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://www.google.com'); 

        const images = await driver.findElements(By.css('img'));

        for (const img of images) {
            const altText = await img.getAttribute('alt');
            const src = await img.getAttribute('src');
            if (!altText) {
                console.log(`Image missing alt text: ${src}`);
            } else {
                console.log(`Image with alt text: ${src}, Alt: ${altText}`);
            }
        }
    } finally {
        await driver.quit();
    }
})();
