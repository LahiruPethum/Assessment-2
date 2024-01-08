import { type Locator, type Page } from '@playwright/test';

export class LoginPopup{

    readonly page:Page;

    readonly loginPopupOption : Locator;

    constructor(page:Page){
        this.page=page;
        this.loginPopupOption = page.locator('//*[@id="pb-page-content"]/div/div[1]/header/div/div[2]/div/div/div/div[2]/div/div[2]/div/div/a/span[2]');
    }

    async clickLoginOption(){
        await this.loginPopupOption.click();
    }
}

export default LoginPopup;