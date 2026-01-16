import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;
  protected baseUrl: string = 'https://www.noon.com/egypt-en/';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Setup method - Navigate to the application URL
   */
  async setUp() {
    await this.page.goto(this.baseUrl);
  }

  /**
   * TearDown method - Close the browser
   */
  async tearDown() {
    await this.page.close();
  }

//   /**
//    * Navigate to URL
//    */
//   async navigateToUrl(url: string) {
//     await this.page.goto(url);
//   }

//   /**
//    * Get base URL
//    */
//   getBaseUrl(): string {
//     return this.baseUrl;
//   }
}
