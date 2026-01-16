import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LogoutPage extends BasePage {
  // Locators
  private profileMenuButton = this.page.getByRole('button', { name: /profile|account|my account/i });
  private logoutButton = this.page.getByRole('button', { name: /logout|sign out|exit/i });

  constructor(page: Page) {
    super(page);
  }

  async clickonProfileMenu() {
    await this.profileMenuButton.click();
  }

  async clickonLogoutButton() {
    await this.logoutButton.click();
  }
}