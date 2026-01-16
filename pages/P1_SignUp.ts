import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SignUpPage extends BasePage {
  // Locators
  private loginButton = this.page.getByRole('button', { name: /sign in|login/i });
  private signUpButton = this.page.getByRole('button', { name: /sign up/i }).first();
  private emailAddressInput = this.page.getByPlaceholder(/email|e-mail/i);
  private continueButton = this.page.getByRole('button', { name: /continue/i });
  private signUpUsingPasswordButton = this.page.getByRole('button', { name: /password|create password/i });
  private newPasswordInput = this.page.getByLabel(/new password|password/i).first();
  private confirmPasswordInput = this.page.locator('#confirmpasswordInput');
  private signUpButtonF = this.page.locator('.SignupWithPasswordV2-module-scss-module__gXx8ca__signupButton')
  private confirmationButton = this.page.getByRole('button', { name: /confirm|yes/i }).last();

  constructor(page: Page) {
    super(page);
  }

  async navigateToNoon() {
    await this.setUp();
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async clickSignUpButton() {
    await this.signUpButton.click();
  }

  async enterEmailAddress(email: string) {
    await this.emailAddressInput.click();
    await this.emailAddressInput.fill(email);
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }

  async clickSignUpUsingPasswordButton() {
    await this.signUpUsingPasswordButton.click();
  }

  async enterNewPassword(password: string) {
    await this.newPasswordInput.click();
    await this.newPasswordInput.fill(password);
  }

  async enterConfirmPassword(password: string) {
    await this.confirmPasswordInput.click();
    await this.confirmPasswordInput.fill(password);
  }

  async clickSignUpButtonF() {
    await this.signUpButtonF.click();
  }
}
