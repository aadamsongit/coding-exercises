# Accessibility Testing Documentation

# Overview
This documentation outlines the structure and implementation of automated accessibility tests using Selenium, Cucumber, and Axe-core. The aim is to ensure web pages comply with accessibility standards, thereby improving usability for individuals relying on assistive technologies.

# Folder Structure
The project is organized in the following manner:

SeleniumTesting: The root directory containing all Selenium-related test files.
accessibility.feature: Defines scenarios for accessibility testing using a behavior-driven development (BDD) format.
step_definitions/accessibilitySteps.js: Contains JavaScript functions that implement the steps outlined in the accessibility.feature file.
support/cucumber.js: Configuration file for Cucumber, integrating with Selenium to enable feature files written in BDD style. This file specifies test execution options.

# Code Explanation
Importing Required Modules
The necessary modules are imported at the beginning of the test scripts to facilitate the functionality of the tests:

Cucumber Keywords: The Given and Then keywords from Cucumber allow the definition of steps in a BDD format, making the tests more readable and maintainable.

Selenium WebDriver: The Builder class from Selenium WebDriver is used to configure and control a web browser (e.g., Chrome) for testing.

Axe-core: The AxeBuilder from the @axe-core/webdriverjs package serves as the accessibility testing tool, which identifies accessibility violations on web pages.

Assertions: The assert module is used to validate the outcomes of the tests, ensuring they meet the expected results.

Step Definitions

Given Step: This step initializes a browser session and navigates to the designated web page. It logs the navigation process, which aids in debugging.

Then Step: This step executes the accessibility analysis using the Axe testing tool. It collects the results and checks for any accessibility violations. If violations are found, the test fails, providing an assertion message. Finally, it closes the browser session.

# JSON Output Explanation
The results from the Axe accessibility tests are presented in a JSON format, which details the types of accessibility violations detected on the page. Each violation object typically includes:

ID: A unique identifier for the violation type (e.g., 'button-name' for buttons lacking accessible text).
Impact: The severity of the violation, categorized as critical, serious, or moderate.
Tags: References to relevant accessibility standards (e.g., WCAG compliance levels).
Description and Help URL: Provides details about the issue and links to resources for further information.
Common accessibility issues identified may include:

Missing alternative text on images (image-alt).
Color contrast problems (color-contrast).
Missing language attributes on HTML elements (html-has-lang).
These elements are critical for ensuring that web content is accessible to users with disabilities.

Conclusion
This documentation provides an overview of the setup and execution of automated accessibility tests using Selenium, Cucumber, and Axe-core. By maintaining a structured approach, the project ensures that web applications meet accessibility standards, improving user experience for everyone.
