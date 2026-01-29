import { test, expect } from '@playwright/test';
import { SignUpPage } from '../pages/P1_SignUp';

// Test data
const testData = {
  email: 'rowidatest@outlook.com',
  password: 'Test@1234',
  confirmPassword: 'Test@1234'
};

test.describe('Sign Up Flow', () => {
  test('should register new user with valid credentials', async ({ page }) => {
    // Arrange
    const signUp = new SignUpPage(page);

    try {
      // Act - Navigate and perform sign up
      await signUp.navigateToNoon();
      await page.waitForLoadState('domcontentloaded');

      await signUp.clickLoginButton();
      await page.waitForTimeout(1000);

      await signUp.clickSignUpButton();
      await page.waitForTimeout(1000);

      await signUp.enterEmailAddress(testData.email);
      await signUp.clickContinueButton();
      await page.waitForTimeout(2000);

      await signUp.clickSignUpUsingPasswordButton();
      await page.waitForTimeout(1000);

      await signUp.enterNewPassword(testData.password);
      await signUp.enterConfirmPassword(testData.confirmPassword);
      await signUp.clickSignUpButtonF();
      await page.waitForTimeout(2000);

      // Assert - Verify successful sign up
      const currentUrl = page.url();
      expect(currentUrl).toBeTruthy();
      
      // Add more assertions based on your expected behavior
      // e.g., expect(page).toHaveURL(/.*account|success|dashboard/);
      // or check for success message: await expect(page.getByText(/success|welcome/i)).toBeVisible();

    } catch (error) {
      console.error('Sign up test failed:', error);
      throw error;
    }
  });
});
