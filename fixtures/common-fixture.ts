import {test as baseTest} from "./pom-fixture";
import CommonUtils from "../utils/CommonUtils";

type commonFixtureType={
    commonUtils:CommonUtils;
}

export const test=baseTest.extend<commonFixtureType>({
    commonUtils:async({},use)=>{
        use(new CommonUtils());
    }
})