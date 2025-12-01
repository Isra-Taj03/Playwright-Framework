//this fixture file iam crearing so that i dnt have to agin and agin to imort the pom class and making ibject of the clas again and agin
import {test as baseTest} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { UserPage } from "../pages/UserPage";
import { LeftNavigationPage } from "../pages/LeftNavigationPage";
import { PimPage } from "../pages/PimPage";

type PomFixtureType={
    loginPageFixture:LoginPage;
    dashboardPageFixture:DashboardPage;
    userPageFixture:UserPage;
    leftNavigationPage:LeftNavigationPage;
    pimPage:PimPage;

}
export const test = baseTest.extend<PomFixtureType>({
    loginPageFixture:async({page},use)=>{
        //const logiPpageObj=new LoginPage(page);
        //use(logiPpageObj);
        //********or******** 
        use(new LoginPage(page));
    },
    dashboardPageFixture:async({page},use)=>{
        use(new DashboardPage(page));
    },
    userPageFixture:async({page},use)=>{
        use(new UserPage(page));
    },
   leftNavigationPage:async({page},use)=>{
        use(new LeftNavigationPage(page));
    },
    pimPage:async({page},use)=>{
        use(new PimPage(page));
    }
    
})
