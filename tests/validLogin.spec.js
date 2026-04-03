import { test } from '../fixtures/customFixture';
import { expect } from "@playwright/test";


test.describe.configure({ mode: "parallel", retries: 0})
test.describe('Swag Lab Login Test', () => {
    test.beforeEach(async({page}) => {
        await page.waitForURL('**/inventory.html')
    })


    test("Varify Successful Login", async({page}) => {
        await expect(page).toHaveURL('/inventory.html');
        await expect(page).toHaveTitle('Swag Labs');
    });
});
    