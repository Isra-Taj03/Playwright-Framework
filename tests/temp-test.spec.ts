//import { test, expect } from '@playwright/test';
//import {test} from '../fixtures/pom-fixture.ts'
import CommonUtils from '../utils/CommonUtils.ts';
import {test} from '../fixtures/hooks-fixture.ts';
import { LoginPage } from '../pages/LoginPage.ts';
import { expect } from '@playwright/test';
//import { LoginPage } from '../pages/LoginPage';


// //-----beforeEach hook
// test.beforeEach("BefireEach Hook", async({page,loginPageFixture})=>{
//     await loginPageFixture.gotoOrangeHrm();
// })



//----------------------- Test ----------------------------

test('Temp test',async({page,loginPageFixture,commonUtils,gotoUrl})=>{
// const loginpage=new LoginPage(page);
// await loginpage.gotoOrangeHrm();
// await loginpage.loginOrangeHrm('Admin','admin123');

//----after adding fixcture------------
// await loginPageFixture.gotoOrangeHrm();
// await loginPageFixture.loginOrangeHrm('Admin','admin123');

//---env variable
console.log(process.env.BASE_URL);

//--------after encryption
//const CommonUtilsObj=new CommonUtils();
// CommonUtilsObj.encryptData("Admin");
// CommonUtilsObj.encryptData("admin123");

//-----decrypting data keeeoin for refrence used already in global-setup.ts
// const decryptedUsername=commonUtils.decryptData(process.env.USER_NAME!);
// const decryptedPassword=commonUtils.decryptData(process.env.PASSWORD!);

//-used this code in before each --> await loginPageFixture.gotoOrangeHrm();
//here we are removing this line for now iam actully ommentig it as we use uthenticatio state so that why
//await loginPageFixture.loginOrangeHrm(decryptedUsername,decryptedPassword);

console.log(await page.title);
});

test("validating Title",async({page,gotoUrl,logout})=>{
   await expect(page).toHaveTitle("OrangeHRM");
})


//------Test End----------------------------------------

//--------After Each Hook
// test.afterEach("afterEch Hook",async({page,userPageFixture})=>{
//     await userPageFixture.logout();
    
// })
//login-module.spec.ts
// import {test,expect} from "../fixtures/hooks-fixture.ts"
// import loginModuleData from "../data/login-module-data.json"

// test("validate login with invalid password",async({page, loginPageFixture,commonUtils})=>{
// //-----beforeEach hook
// test.beforeEach("BefireEach Hook", async({page,loginPageFixture})=>{
//     await loginPageFixture.gotoOrangeHrm();
// })

//     const Username=commonUtils.decryptData(process.env.USER_NAME!);
//     await loginPageFixture.loginOrangeHrm(Username,loginModuleData.wrong_password);


//})
