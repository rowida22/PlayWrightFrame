import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { LogoutLocators } from './Locators/logOutL';

export class LogoutPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async clickonProfileMenu() {
    await this.page.getByRole('button', LogoutLocators.profileMenuButton).click();
  }

  async clickonLogoutButton() {
    await this.page.getByRole('button', LogoutLocators.logoutButton).click();
  }
}