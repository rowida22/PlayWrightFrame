import { test } from '@playwright/test';
import { SignUpPage } from '../pages/P1_SignUp';

test('has title', async ({ page }) => {
  const signUp = new SignUpPage(page);
  await signUp.navigateToNoon();
  await signUp.clickLoginButton();
  await signUp.clickSignUpButton();
  await signUp.enterEmailAddress('rowidatest@gmail.com');
  await signUp.clickContinueButton();
  await signUp.clickSignUpUsingPasswordButton();
  await signUp.enterNewPassword('Test@1234');
  await signUp.enterConfirmPassword('Test@1234');
  await signUp.clickSignUpButtonF();
  // await page.pause();
});
