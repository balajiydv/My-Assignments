import test, { expect } from "@playwright/test";

test('Handled Nested Frame', async({page})=>{

    await page.goto('https://www.leafground.com/frame.xhtml');

    let parentframe = page.frameLocator('//iframe[@src="page.xhtml"]');
    const childframe = parentframe.frameLocator('//iframe[@id="frame2"]');

    await childframe.locator("#Click").click()

    const afterclick = await childframe.locator("#Click").innerText();
    console.log(afterclick);

    await expect(childframe.locator("#Click")).toContainText('Hurray!')

    await page.waitForTimeout(2000)

})