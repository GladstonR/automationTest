// cypress/support/pages/HomePage.js

class HomePage {
  visit() {
    cy.visit('https://automationexercise.com/');
  }

  verifyTitle() {
    cy.title().should('include', 'Automation Exercise');
  }

  verifyLogo() {
    cy.get('img[alt="Website for automation practice"]').should('be.visible');
  }

  clickSignupLogin() {
    cy.contains('Signup / Login').click();
  }
}

export default new HomePage();