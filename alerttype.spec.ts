/*Classroom 2: 

Launch the URL: https://www.leafground.com/alert.xhtml
Click on Prompt Dialog.
Switch to the JavaScript prompt alert.
Enter a value using accept("Playwright")*/


import test from "@playwright/test";

test('Handling Prompt Alert', async({page})=>{

    await page.goto('https://www.leafground.com/alert.xhtml')

    page.once('dialog', async(alert)=>{
        console.log('Dialog Type: ', alert.type());
        console.log('Dialog Message: ', alert.message());
        await alert.accept("Playwright");

    });
    await page.locator("(//span[text()='Show'])[5]").click();
    await page.waitForTimeout(2000)

})