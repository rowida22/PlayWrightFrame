import test from '@playwright/test';
import { LogoutPage } from '../pages/P2_Logout';
test('Logout Test', async ({ page }) => {
  const logout = new LogoutPage(page);
  await logout.clickonProfileMenu();
  await logout.clickonLogoutButton();
});