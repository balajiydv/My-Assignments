import{test, expect} from '@playwright/test';

test('Class Activity', async({page})=>{

    await page.goto('https://login.salesforce.com/?locale=in');

    await page.locator('//input[@type="email" and @id="username"]').fill('dilipkumar.rajendran@testleaf.com');

    await page.locator('//input[contains(@class,"button") and @type="submit"]').click();

    await page.locator('//input[@type="password" and @id="password"]').fill('TestLeaf@2025');

    await page.locator('//input[@value="Log In"]').click();

    await page.waitForTimeout(2000);

})



/*TESTLEAF TRAINER 12-10-2026 12:03 • 
Classroom Activity:
-------------------
Write the typescript code to login to Salesforce application using Advanced Xpaths.


https://login.salesforce.com/?locale=in
Sample credentials :
Username:dilipkumar.rajendran@testleaf.com
Password: TestLeaf@2025


username: yuvarani.sekar@testleaf.com
password: TestLeaf@2028*/
