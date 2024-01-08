import { test, expect } from '@playwright/test';

// test case 1: Validate Register page loading
test('Validate Register page loading', async ({ page }) => {
    
    await page.goto('https://onlinelibrary.wiley.com/');

    
    await page.click('//*[@id="pb-page-content"]/div/div[1]/header/div/div[2]/div/div/div/div[2]/div/div[2]/div/div/a/span[2]');

   
    await page.click('//*[@id="pb-page-content"]/div/div[4]/div/div[2]/div[3]/a[1]',{timeout:10000});

    await expect(page.locator('//*[@id="main-content"]/div/div/div[1]/div/div/div/div[1]/div[1]/h1')).toHaveText('Register');
  
   
});

// test case 1: Validate Register page loading
test.only('Validate Institutional login page loading', async ({ page }) => {
    
    await page.goto('https://onlinelibrary.wiley.com/');

    
    await page.click('//*[@id="pb-page-content"]/div/div[1]/header/div/div[2]/div/div/div/div[2]/div/div[2]/div/div/a/span[2]');

   
    await page.click('//*[@id="pb-page-content"]/div/div[4]/div/div[2]/div[3]/a[2]',{timeout:10000});

    await expect(page.locator('//*[@id="main-content"]/div/div/div[2]/div/div/div/div[1]/h1')).toHaveText('Institutional Login');
   
});