import { test, expect, type Page } from '@playwright/test';
import { LoginPopup } from '../pages/LoginPopup'

const URL = 'https://onlinelibrary.wiley.com/';

let loginPopup: LoginPopup;

test.beforeEach(async ({ page }) => {
    await page.goto(URL);
    loginPopup = new LoginPopup(page)
});

async function clickLoginOption(page: Page) {
    await loginPopup.clickLoginOption();
}

test.describe('Test scenario 1', () => {
    // test case 1: Validate Register page loading
    test('Validate Register page loading', async ({ page }) => {

        await clickLoginOption(page);

        await page.click('//*[@id="pb-page-content"]/div/div[4]/div/div[2]/div[3]/a[1]', { timeout: 30000 });

        await expect(page.locator('//*[@id="main-content"]/div/div/div[1]/div/div/div/div[1]/div[1]/h1')).toHaveText('Register');

        const currentUrl = page.url();
        expect(currentUrl).toBe('https://onlinelibrary.wiley.com/action/registration?acdl-redirect=true');
    });

    // test case 1: Validate Register page loading
    test('Validate Institutional login page loading', async ({ page }) => {

        await clickLoginOption(page);

        await page.click('//*[@id="pb-page-content"]/div/div[4]/div/div[2]/div[3]/a[2]', { timeout: 30000 });

        await expect(page.locator('//*[@id="main-content"]/div/div/div[2]/div/div/div/div[1]/h1')).toHaveText('Institutional Login');

        const currentUrl = page.url();
        expect(currentUrl).toBe('https://onlinelibrary.wiley.com/action/ssostart?redirectUri=%2F');

    });
})
