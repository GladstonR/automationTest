// cypress/support/pages/LoginPage.js

class LoginPage {
  verifyLoginFormVisible() {
    cy.get('form[action="/login"]').should('be.visible');
  }

  login(email, password) {
    cy.get('input[data-qa="login-email"]').type(email);
    cy.get('input[data-qa="login-password"]').type(password);
    cy.get('button[data-qa="login-button"]').click();
  }

  verifyErrorMessage() {
    cy.contains('Your email or password is incorrect!').should('be.visible');
  }

  verifySuccessfulLogin() {
    cy.contains('Logged in as').should('be.visible');
  }
}

export default new LoginPage();