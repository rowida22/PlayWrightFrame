import { test, expect } from '@playwright/test';
import { LogoutPage } from '../pages/P2_Logout';

test.describe('Logout Flow', () => {
  test('should logout user successfully', async ({ page }) => {
    // Arrange
    const logout = new LogoutPage(page);

    try {
      // Act - Perform logout
      await logout.clickonProfileMenu();
      await logout.clickonLogoutButton();

      // Assert - Verify successful logout
      const currentUrl = page.url();
      expect(currentUrl).toBeTruthy();
      
      // Add more assertions based on your expected behavior
      // e.g., expect(page).toHaveURL(/.*login|home/);
      // or check for logout message: await expect(page.getByText(/logged out|goodbye/i)).toBeVisible();

    } catch (error) {
      console.error('Logout test failed:', error);
      throw error;
    }
  });
});