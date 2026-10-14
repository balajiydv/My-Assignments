import test, { expect } from "@playwright/test";

test.use({storageState: 'Data/ltapslogin.jason'});

test('Skip Login Test', async({page})=>{

    await page.goto('https://leaftaps.com/opentaps/control/main');

    await expect(page.getByRole("link", {name:'CRM/SFA'})).toBeVisible();

    await page.getByRole("link", {name:'CRM/SFA'}).click();

    await page.getByRole("img", {name : 'opentaps CRM', exact:true}).click();

    await page.getByRole("button", {name : 'Logout', exact:true}).click();

    await page.waitForTimeout(2000)

})