import{test, expect} from '@playwright/test' ;

test("Assignment 2 Edit Lead", async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main');

    await page.locator('//input[@type = "text" and @id="username"]').fill('democsr');

    await page.waitForTimeout(2000)
})