import{test, expect} from '@playwright/test'

test('Learn Playwright Locators', async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main');

    await page.getByRole('textbox', { name : 'Username', exact : true}).fill('Demosalesmanager');

    await page.getByRole('textbox', {name : 'Password', exact : true}).fill('crmsfa');

    await page.getByRole('button', {name : 'Login', exact : true}).click();

    await page.getByRole('link', {name : 'CRM/SFA', exact : true}).click();

    await page.getByRole('link', {name : 'Leads', exact : true}).click();
    await page.getByRole('link', {name : 'Create Lead', exact : true}).click();

    await page.locator('#createLeadForm_companyName').fill('Truextracts LLP');
    await page.locator('#createLeadForm_firstName').fill('Balaji');
    await page.locator('#createLeadForm_lastName').fill('Yadav');
    await page.locator('#createLeadForm_personalTitle').fill('Mr.');
    await page.locator('#createLeadForm_generalProfTitle').fill('Founder');
    await page.locator('#createLeadForm_annualRevenue').fill('1000000');
    await page.locator('#createLeadForm_departmentName').fill('Sales & Marketing');
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9876543210');

    await page.getByRole('button', {name : 'Create Lead', exact:true}).click();

})