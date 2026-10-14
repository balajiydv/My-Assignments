import{test, expect} from '@playwright/test'
test('salesforce login using CSS Selectors', async({page})=>{
    await page.goto('https://login.salesforce.com/?locale=in')
    
    await page.locator('#username').fill('yuvarani.sekar@testleaf.com')
    await page.locator('input.button').click();

    await page.locator('#password').fill('TestLeaf@2028')
    await page.locator('input.button').click();
    
    //await expect(page.locator('#header')).toHaveText('Verify Your Identity');
    //await page.waitForTimeout(2000)

    

})