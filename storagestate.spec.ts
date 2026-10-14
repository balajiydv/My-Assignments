import test from "@playwright/test"

test('Learn StorageState', async({page})=>{

    await page.goto('https://leaftaps.com/opentaps/control/main');

    await page.getByRole("textbox", {name : 'Username', exact:true}).fill('Demosalesmanager');

    await page.getByRole("textbox", {name : 'Password', exact:true}).fill('crmsfa');

    await page.getByRole("button", {name : 'Login', exact:true}).click();

    await page.waitForTimeout(2000);

    await page.context().storageState({path:'Data/ltapslogin.jason'});

})