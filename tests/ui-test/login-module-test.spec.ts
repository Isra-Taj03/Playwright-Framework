import { expect } from '@playwright/test';
import {test} from '../../fixtures/hooks-fixture.ts';

import loginModuleData from '../../data/ui-data/login-module-data.json';

console.log("we make cookies and orgins empty so that it will not take the storage state that we have saved....")
test.use({
  storageState: {
    cookies: [],
    origins: []
  },
});



test.describe("Invalid login Test",{
tag:['@Invalidlogin'],
annotation:{
type:'Story Link',
description:'Link of Story https://dev.azure.com/wishinfinite/WishInfinite/_workitems/edit/1/'
}
},()=>{
test('test [Login] Verify that the user can not log in with an invalid password.',{ tag:['@UI','@UAT']}, async({ loginPageFixture,commonUtils,gotoUrl })=> {
  const username = commonUtils.decryptData(process.env.USER_NAME!);
  await loginPageFixture.loginOrangeHrm(username, loginModuleData.wrong_password);
  await expect(loginPageFixture.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
  await expect(loginPageFixture.userNameInput).toBeVisible();
});

test('test [Login] Verify that the user can not log in with an invalid username.',{ 
  tag:['@UI','@UAT']
}, async ({gotoUrl, loginPageFixture, commonUtils }) => {
  const password = commonUtils.decryptData(process.env.PASSWORD!);
  await loginPageFixture.loginOrangeHrm(loginModuleData.wrong_username, password);
  await expect(loginPageFixture.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
  await expect(loginPageFixture.userNameInput).toBeVisible();
});

});

test('test [Login] Verify that the user can not log in with both an invalid username and password.', { tag:['@UI','@UAT','@DEV']},async ({ gotoUrl, loginPageFixture, commonUtils }) => {
  await loginPageFixture.loginOrangeHrm(loginModuleData.wrong_username, loginModuleData.wrong_password);
  await expect(loginPageFixture.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text);
  await expect(loginPageFixture.userNameInput).toBeVisible();
});

test('[Login] Verify that the user can log in with valid username and password.', {
    tag: ['@VISUAL', '@UAT'],
    annotation: {
        type: 'Test Case Link',
        description: 'https://dev.azure.com/wishinfinite/WishInfinite/_workitems/edit/7/'
    }
}, async ({ gotoUrl, loginPageFixture, commonUtils, leftNavigationPage }) => {
    const username = commonUtils.decryptData(process.env.USER_NAME!);
    const password = commonUtils.decryptData(process.env.PASSWORD!);
    await loginPageFixture.loginOrangeHrm(username, password);

    await expect(leftNavigationPage.orangeHrmLogo).toHaveScreenshot('OrangeHrmBrandLogo.png');
    await expect(leftNavigationPage.leftNavigationPanel).toHaveScreenshot('LeftNavPanel.png');
});