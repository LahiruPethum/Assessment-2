import { test, expect } from '@playwright/test';

const Login = '//*[@id="pb-page-content"]/div/div[1]/header/div/div[2]/div/div/div/div[2]/div/div[2]/div/div/a/span[2]';
const EmailLocater = '//*[@id="username"]';
const PasswordLocater = '//*[@id="password"]';
const validEmail = 'pethum013@gmail.com';
const invalidEmail = 'pethum@gmail.com';
const validPassword = '123456789PETpet@#';
const invalidPassword = '123456789PETpet';
const LoginBtn = '//*[@id="pb-page-content"]/div/div[4]/div/div[2]/div[2]/form/div[5]/span/input';
const userLocater = '//*[@id="indivLogin"]/span[2]';
const ErrorMsgLocator = '//*[@id="login-error-message"]';

// test case 1: Verify logging into the Site using valid credentials.(UI Automation)

  test('Verify logging into the Site using valid credentials.', async ({ page }) => {

    await page.goto('https://onlinelibrary.wiley.com/');

    await expect(page).toHaveTitle('Wiley Online Library | Scientific research articles, journals, books, and reference works', { timeout: 10000 });

    await page.click(Login,{timeout:10000});

    await page.locator(EmailLocater).pressSequentially(validEmail);

    await page.locator(PasswordLocater).pressSequentially(validPassword);

    await page.keyboard.press('Enter');

    await expect(page.locator(userLocater)).toHaveText(`Lahiru`, { timeout: 30000 });

  });

  //test case 2 : Verify logging into the Site using invalid credentials.(invalid email and valid password)-(UI Automation)

  test('Verify logging into the Site using invalid email and valid password.', async ({ page }) => {

    await page.goto('https://onlinelibrary.wiley.com/');

    await expect(page).toHaveTitle('Wiley Online Library | Scientific research articles, journals, books, and reference works', { timeout: 10000 });

    await page.click(Login,{timeout:10000});

    await page.locator(EmailLocater).pressSequentially(invalidEmail);

    await page.locator(PasswordLocater).pressSequentially(validPassword);

    await page.keyboard.press('Enter');

    await expect(page.locator(ErrorMsgLocator)).toHaveText(`Your email or password is incorrect. Please try again.`, { timeout: 30000 });

  });

  //test case 3 : Verify logging into the Site using invalid credentials.(valid email and invalid password)(UI Testing)

  test('Verify logging into the Site using valid email and invalid password.', async ({ page }) => {

    await page.goto('https://onlinelibrary.wiley.com/');

    await expect(page).toHaveTitle('Wiley Online Library | Scientific research articles, journals, books, and reference works', { timeout: 10000 });

    await page.click(Login,{timeout:10000});

    await page.locator(EmailLocater).pressSequentially(validEmail);

    await page.locator(PasswordLocater).pressSequentially(invalidPassword);

    await page.keyboard.press('Enter');

    await expect(page.locator(ErrorMsgLocator)).toHaveText(`Your email or password is incorrect. Please try again.`, { timeout: 30000 });

  });


//   test case 4 : Verify logging into the Site using invalid credentials.(Ui testing)

  test('Verify logging into the Site using invalid email and password.', async ({ page }) => {

    await page.goto('https://onlinelibrary.wiley.com/');

    await expect(page).toHaveTitle('Wiley Online Library | Scientific research articles, journals, books, and reference works', { timeout: 10000 });

    await page.click(Login,{timeout:10000});

    await page.locator(EmailLocater).pressSequentially(invalidEmail);

    await page.locator(PasswordLocater).pressSequentially(invalidPassword);

    await page.keyboard.press('Enter');

    await expect(page.locator(ErrorMsgLocator)).toHaveText(`Your email or password is incorrect. Please try again.`, { timeout: 30000 });

  });

  //testcase 5 : Verify logging into the Site without using credentials.(UI Automation)

  test('Verify logging into the  Site without using credentials.', async ({ page }) => {

    await page.goto('https://onlinelibrary.wiley.com/');

    await expect(page).toHaveTitle('Wiley Online Library | Scientific research articles, journals, books, and reference works', { timeout: 10000 });

    await page.click(Login,{timeout:10000});

    const isButtonDisabled = await page.$eval(LoginBtn, (button) => button.hasAttribute('disabled'));

    expect(isButtonDisabled).toBeTruthy();

  });