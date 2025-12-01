 import { test, expect } from '../fixtures/hooks-fixture';
import pimDate from '../data/pim-module-data.json';


test('PIM|Verify that a new employee is successfully created under the PIM module.',{ 
    tag:['@UI','@UAT'],
    annotation:{
        type:"jira test case link",
        description:"https://jira.company.com/PROJ-101"
    }
},async ({ gotoUrl, leftNavigationPage, pimPage }) => {

   await test.step("Open PIM module",async()=>{
       await leftNavigationPage.openPimModule();
    })

   await test.step("Add Employee in PIM module and verifying it", async()=>{
      await pimPage.addEmployee(pimDate.first_name, pimDate.middle_name, pimDate.last_name);
      expect(pimPage.newEmployeeNameHeading).toHaveText(`${pimDate.first_name} ${pimDate.last_name}`)
    })

});
