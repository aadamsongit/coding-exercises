Feature: Accessibility Testing

  Scenario: Check full page accessibility
    Given I am on the homepage
    Then the page should have no accessibility violations
