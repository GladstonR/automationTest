Cypress Automation Project - AutomationExercise.com

This repository contains automated UI tests for Automation Exercise using Cypress with JavaScript and the Page Object Model (POM) design pattern. The project demonstrates modern QA practices including website automation, API testing, and data analysis integration.

Project Structure

cypress/
  e2e/
    automationExercise.cy.js   # Test cases
  support/
    pages/
      HomePage.js              # Page Object for homepage
      LoginPage.js             # Page Object for login page

Setup Instructions

Clone the repository:

git clone https://github.com/GladstonR/automationTest.git
cd automationTest

Install dependencies:

npm install

Open Cypress Test Runner:

npx cypress open

or

npm run cypress:open

Run tests headlessly:

npx cypress run

Test Scenarios

Homepage validation (title, logo visibility).

Navigation to login page.

Login with invalid credentials (error validation).

Login with valid credentials (successful login check).


Notes

Replace test credentials in LoginPage.js with valid ones before running login success tests.


GitHub portfolio link: [to be added].

Author

GladstonR