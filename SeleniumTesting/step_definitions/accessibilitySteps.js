// Import the Cucumber framework

const { Given, Then } = require('cucumber');
const { Builder } = require('selenium-webdriver');
const AxeBuilder = require('@axe-core/webdriverjs');
const assert = require('assert');

// Declare the global variables

let driver;

// Implement the step definitions

Given('I am on the homepage', async function () {
    // Initialize the webdriver
    driver = await new Builder().forBrowser('chrome').build();

    // Navigate to the Mars demo page
    console.log("Navigating to the Mars demo page...");
    await driver.get('https://dequeuniversity.com/demo/mars/');
});

// Run the accessibility tests

Then('the page should have no accessibility violations', async function () {
    console.log("Running Axe accessibility tests...");
    // Print the violations
    const results = await new AxeBuilder(driver).analyze();
    console.log(results.violations);
    assert.strictEqual(results.violations.length, 0, 'Accessibility violations found');
    console.log("Test completed with no violations.");
    await driver.quit();
});

