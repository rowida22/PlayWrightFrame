import {test} from '@playwright/test';
import { HomePage } from '../pages/P3_Homepage';
test('Home Page Test', async ({page})=>{
    const homePage = new HomePage(page);
    await homePage.searchForItem('Iphone');
    await page.pause();
});