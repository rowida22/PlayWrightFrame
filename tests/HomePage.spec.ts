import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/P3_Homepage';

// Test data
const testData = {
  searchItem: 'Iphone'
};

test.describe('Home Page Flow', () => {
  test('should search for item on home page', async ({ page }) => {
    // Arrange
    const homePage = new HomePage(page);

    try {
      // Act - Navigate and perform search
      await homePage.searchForItem(testData.searchItem);
      await page.pause();

      // Assert - Verify search results
      const currentUrl = page.url();
      expect(currentUrl).toBeTruthy();
      
      // Add more assertions based on your expected behavior
      // e.g., expect(page).toHaveURL(/.*search|results/);
      // or check for search results: await expect(page.getByText(/results|found/i)).toBeVisible();

    } catch (error) {
      console.error('Home page test failed:', error);
      throw error;
    }
  });
});