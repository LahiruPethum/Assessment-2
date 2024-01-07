import { test, expect } from '@playwright/test';

const Search_box = '//*[@id="searchField1"]';
const KeyWord = 'information';
const Search_result_text = '//*[@id="main-content"]/div/div/div[1]/div/div/div[2]/div/div/div[1]/div/div[1]';
const countTextLocater = '//*[@id="main-content"]/div/div/div[1]/div/div/div[2]/div/div/div[1]/div/div[1]/span[1]';
const filterLocater = '//*[@id="filter"]';
const searchButtonLocater = '//*[@id="main-content"]/div/div/div/div/div[1]/div/div/div[1]/div[1]/div/div/form/button'

// test case 1: Validate searching with an existing Keyword

  test('Validate searching with an existing Keyword', async ({ page }) => {

    await page.goto('https://onlinelibrary.wiley.com/');

    await expect(page).toHaveTitle('Wiley Online Library | Scientific research articles, journals, books, and reference works', { timeout: 10000 });

    await page.locator(Search_box).pressSequentially(KeyWord);

    await page.keyboard.press('Enter');

    const countText = await page.locator(countTextLocater).textContent();

    await expect(page.locator(Search_result_text)).toHaveText(`${countText}results for"${KeyWord}" anywhere`, { timeout: 30000 });

    await expect(page.locator(filterLocater)).toBeVisible();
  });

  //test case 2 : Validate searching without typing anything
  test('Validate searching without typing anything', async ({ page }) => {

    await page.goto('https://onlinelibrary.wiley.com/');

    await page.click(searchButtonLocater, { timeout: 10000 }); 

    const currentUrl = page.url();
    expect(currentUrl).toBe('https://onlinelibrary.wiley.com/search/advanced');
  });


