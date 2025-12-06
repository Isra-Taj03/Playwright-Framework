
import {test} from '../../fixtures/common-fixture.ts';
import{expect} from "@playwright/test";


test('Global setup for login',async({page,loginPageFixture,commonUtils,dashboardPageFixture})=>{
//passing decryted data    
const decryptedUsername=commonUtils.decryptData(process.env.USER_NAME!);
const decryptedPassword=commonUtils.decryptData(process.env.PASSWORD!);

 page.setDefaultNavigationTimeout(120000); // 2 minutes
  page.setDefaultTimeout(120000);

await loginPageFixture.gotoOrangeHrm();
await loginPageFixture.loginOrangeHrm(decryptedUsername,decryptedPassword);

await page.waitForURL(`${process.env.BASE_URL}/web/index.php/dashboard/index`)
await expect(dashboardPageFixture.dashboardTitleText).toHaveText("Dashboard");
/**
 * This command saves the current browser session (cookies + localStorage) into a JSON file.
 */

//Playwright calls it storage state.

//So:

//After login is successful
//Playwright extracts cookies, tokens, localStorage values, etc.
//Saves them into auth.json
//That file can then be reused to skip login in future tests.

await page.context().storageState({
     path:'./playwright/.auth/auth.json'
});

});



