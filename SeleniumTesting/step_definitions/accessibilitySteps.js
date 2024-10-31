const { Given, Then } = require('cucumber');
const { Builder, By } = require('selenium-webdriver');
const AxeBuilder = require('@axe-core/webdriverjs');
const assert = require('assert');

let driver;

Given('I am on the homepage', async function () {
    driver = await new Builder().forBrowser('chrome').build();
    console.log("Navigating to the Mars demo page...");
    await driver.get('https://dequeuniversity.com/demo/mars/');
});

Then('the page should have no accessibility violations', async function () {
    console.log("Running Axe accessibility tests...");
    const results = await new AxeBuilder(driver).analyze();
    console.log(results.violations);
    assert.strictEqual(results.violations.length, 0, 'Accessibility violations found');
    console.log("Test completed with no violations.");
    await driver.quit();
});

