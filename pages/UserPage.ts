import { Locator, Page } from "@playwright/test";

export class UserPage{
    readonly page:Page;
    readonly userMenueButton:Locator;
    readonly logoutButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.userMenueButton=page.locator('.class="oxd-userdropdown-tab"');
        this.logoutButton=page.getByRole('menuitem',{name:'Logout'})
    }

    async logout(){
        this.userMenueButton.click();
        this.logoutButton.click();
    }
}