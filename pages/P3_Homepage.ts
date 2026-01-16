import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  // Locators
  private searchInput = this.page.getByPlaceholder(/search/i);
  private itemSelect = this.page.locator('[role="link"]').filter({ hasText: /product|item/i }).first();
  private addToCartButton = this.page.getByRole('button', { name: /add to cart|add to bag/i });

  constructor(page: Page) {
    super(page);
  }

  async searchForItem(item: string) {
    await this.searchInput.fill(item);
    await this.searchInput.press('Enter');
    await this.itemSelect.click();
    await this.addToCartButton.click();
  }
}