import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { SignUpLocators } from './Locators/signUpL';

export class SignUpPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToNoon() {
    await this.setUp();
  }

  async clickLoginButton() {
    await this.page.getByRole('button', SignUpLocators.loginButton).click();
  }

  async clickSignUpButton() {
    await this.page.getByRole('button', SignUpLocators.signUpButton).first().click();
  }

  async enterEmailAddress(email: string) {
    await this.page.getByPlaceholder(SignUpLocators.emailAddressInput).click();
    await this.page.getByPlaceholder(SignUpLocators.emailAddressInput).fill(email);
  }

  async clickContinueButton() {
    await this.page.getByRole('button', SignUpLocators.continueButton).click();
  }

  async clickSignUpUsingPasswordButton() {
    await this.page.getByRole('button', SignUpLocators.signUpUsingPasswordButton).click();
  }

  async enterNewPassword(password: string) {
    await this.page.getByLabel(SignUpLocators.newPasswordInput).first().click();
    await this.page.getByLabel(SignUpLocators.newPasswordInput).first().fill(password);
  }

  async enterConfirmPassword(password: string) {
    await this.page.locator(SignUpLocators.confirmPasswordInput).click();
    await this.page.locator(SignUpLocators.confirmPasswordInput).fill(password);
  }

  async clickSignUpButtonF() {
    await this.page.locator(SignUpLocators.signUpButtonF).click();
  }

  async clickConfirmationButton() {
    await this.page.getByRole('button', SignUpLocators.confirmationButton).last().click();
  }
}