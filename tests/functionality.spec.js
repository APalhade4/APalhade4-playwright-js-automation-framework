import { test } from "../fixtures/customFixture";;
import { expect } from "@playwright/test";
import HomePage from "../pages/homePage";
import CommonElements from "../pages/commonElements";



test.describe("Validate Extra Functionalities of Home Page", () => {
    let hp;
    let ce;
    
    test.beforeEach(async ({ page }) => {
        hp = new HomePage(page);
        ce = new CommonElements(page);
    });


    test("03_1_Validate index menu options", async({ page }) =>{
        await hp.openIndexMenuBar();
        const actualMenus = await hp.getIndexMenuList();
        const expectedMenus = ['All Items', 'About', 'Logout', 'Reset App State']
        expect(actualMenus).toEqual(expectedMenus);
    });


    test("03_2_Validate close button index menu", async({ page }) =>{
        await hp.openIndexMenuBar();
        await expect(ce.closeButton).toBeVisible();
        await expect(ce.closeButton).toBeEnabled();
        await expect(ce.closeButton).toHaveText('Close Menu');
        await ce.clickCloseButton();
        await expect(ce.closeButton).toBeHidden();
        
    });


    test("03_3_Validate the filter dropdown", async({page}) => {
        await hp.clickDropdownMenu();
        const actualOptions = await hp.getDropdownOptionsList();
        const expectedOptions = [ 'Name (A to Z)', 'Name (Z to A)', 'Price (low to high)', 'Price (high to low)' ]
        expect(actualOptions).toEqual(expectedOptions);
    });


    test("03_4_Validate all dropdown options are clickable", async({page}) => {
        await hp.clickDropdownMenu();
        const values = await hp.getDropdownOptionsValues();
        for(let value of values){
            await hp.selectDropdownByValue(value)
            const selectedValue = await hp.getSelectedValue()
            expect(selectedValue).toBe(value)
        }
    });
});
