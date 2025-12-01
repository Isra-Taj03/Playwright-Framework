import {test as baseTest} from "./common-fixture";
type HookFixtureType={
    gotoUrl:any;
    logout:any;
}

export const test=baseTest.extend<HookFixtureType>({
    gotoUrl:async({loginPageFixture},use)=>{
      await loginPageFixture.gotoOrangeHrm();
      await use();
    },
    logout:async({userPageFixture},use)=>{
        await use();
        await userPageFixture.logout();
    }
})

export {expect} from "@playwright/test";