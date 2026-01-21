// cypress/e2e/automationExercise.cy.js
import HomePage from '../support/HomePage';
import LoginPage from '../support/LoginPage';

describe('Automation Exercise Website - POM', () => {

  beforeEach(() => {
    HomePage.visit();
  });

  it('Verify homepage loads correctly', () => {
    HomePage.verifyTitle();
    HomePage.verifyLogo();
  });

  it('Navigate to Login page', () => {
    HomePage.clickSignupLogin();
    LoginPage.verifyLoginFormVisible();
  });

  it('Login with invalid credentials', () => {
    HomePage.clickSignupLogin();
    LoginPage.login('invalid@test.com', 'wrongpassword');
    LoginPage.verifyErrorMessage();
  });

  it('Login with valid credentials', () => {
    HomePage.clickSignupLogin();
    LoginPage.login('validuser@test.com', 'validpassword');
    LoginPage.verifySuccessfulLogin();
  });

});