import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { HomePageLocators } from './Locators/homePageL';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async searchForItem(item: string) {
    await this.page.getByPlaceholder(HomePageLocators.searchInput).fill(item);
    await this.page.getByPlaceholder(HomePageLocators.searchInput).press('Enter');
    await this.page.locator('[role="link"]').filter({ hasText: HomePageLocators.itemSelect.hasText }).first().click();
    await this.page.getByRole('button', HomePageLocators.addToCartButton).click();
  }
}