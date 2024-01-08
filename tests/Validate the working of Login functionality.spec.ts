import { test, expect, type Page } from '@playwright/test';
import { LoginPopup } from '../pages/LoginPopup'

const EmailLocater = '//*[@id="username"]';
const PasswordLocater = '//*[@id="password"]';
const validEmail = 'pethum013@gmail.com';
const invalidEmail = 'pethum@gmail.com';
const validPassword = '123456789PETpet@#';
const invalidPassword = '123456789PETpet';
const LoginBtn = '//*[@id="pb-page-content"]/div/div[4]/div/div[2]/div[2]/form/div[5]/span/input';
const userLocater = '//*[@id="indivLogin"]/span[2]';
const ErrorMsgLocator = '//*[@id="login-error-message"]';

const URL = 'https://onlinelibrary.wiley.com/';

let loginPopup: LoginPopup;

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
  loginPopup = new LoginPopup(page)
});

async function clickLoginOption(page: Page) {
  await loginPopup.clickLoginOption();
}

test.describe('Test scenario 2', () => {

  // test case 1: Verify logging into the Site using valid credentials.

  test('Verify logging into the Site using valid credentials.', async ({ page }) => {

    await clickLoginOption(page);

    await page.locator(EmailLocater).pressSequentially(validEmail);

    await page.locator(PasswordLocater).pressSequentially(validPassword);

    await page.keyboard.press('Enter');

    await expect(page.locator(userLocater)).toHaveText(`Lahiru`, { timeout: 30000 });

  });

  //test case 2 : Verify logging into the Site using invalid credentials.(invalid email and valid password)

  test('Verify logging into the Site using invalid email and valid password.', async ({ page }) => {

    await clickLoginOption(page);

    await page.locator(EmailLocater).pressSequentially(invalidEmail);

    await page.locator(PasswordLocater).pressSequentially(validPassword);

    await page.keyboard.press('Enter');

    await expect(page.locator(ErrorMsgLocator)).toHaveText(`Your email or password is incorrect. Please try again.`, { timeout: 30000 });

  });

  //test case 3 : Verify logging into the Site using invalid credentials.(valid email and invalid password)

  test('Verify logging into the Site using valid email and invalid password.', async ({ page }) => {

    await clickLoginOption(page);

    await page.locator(EmailLocater).pressSequentially(validEmail);

    await page.locator(PasswordLocater).pressSequentially(invalidPassword);

    await page.keyboard.press('Enter');

    await expect(page.locator(ErrorMsgLocator)).toHaveText(`Your email or password is incorrect. Please try again.`, { timeout: 30000 });

  });


  //   test case 4 : Verify logging into the Site using invalid credentials.

  test('Verify logging into the Site using invalid email and password.', async ({ page }) => {

    await clickLoginOption(page);

    await page.locator(EmailLocater).pressSequentially(invalidEmail);

    await page.locator(PasswordLocater).pressSequentially(invalidPassword);

    await page.keyboard.press('Enter');

    await expect(page.locator(ErrorMsgLocator)).toHaveText(`Your email or password is incorrect. Please try again.`, { timeout: 30000 });

  });

  //testcase 5 : Verify logging into the Site without using credentials.

  test('Verify logging into the  Site without using credentials.', async ({ page }) => {

    await clickLoginOption(page);

    const isButtonDisabled = await page.$eval(LoginBtn, (button) => button.hasAttribute('disabled'));

    expect(isButtonDisabled).toBeTruthy();

  });

});

