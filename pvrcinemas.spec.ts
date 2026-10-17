import test, { expect } from "@playwright/test";
import { info, log } from "node:console";
import { hasUncaughtExceptionCaptureCallback } from "node:process";

test('PVR Cinemas', async({page})=>{

    await page.goto('https://www.pvrcinemas.com/');

    await page.getByText('Delhi').nth(1).click();
    await page.locator('h6.cities-name',{hasText: 'Bengaluru'}).click();

    await page.locator("//span[text()='Cinema']").click();
    await page.locator("//span[text()='Select Cinema']").click();
    await page.locator("//span[text()='INOX Shree Garuda Swagath Mall, Jayanagar Bengaluru']").click();
    await page.locator("//span[contains(text(),'Tomorrow')]").click();
    await page.getByRole('listbox').locator('li').filter({ hasText: 'JAILER 2' }).click();
    await page.getByRole('listbox').locator('li').filter({hasText: '10:30 PM' }).click();
    await page.getByRole('button', {name:'Submit'}).click();

    await page.getByRole('button', {name:'Accept'}).click();

    await page.locator("//span[@id='QR.PRIME ROWS|A:2']").click();

    const seat = await page.locator("//span[@id='QR.PRIME ROWS|A:2']").innerText();
    const selectedseat = await page.locator('.seat-number', {hasText: 'A2'}).innerText();
    expect(selectedseat).toContain(seat);
    console.log("Selected Seat : ", selectedseat);    
    
    const Total = await page.locator('.grand-prices').innerText();
    await expect(page.locator('.grand-prices')).toHaveText('519.62')
    console.log("Grand Total : ", Total);
      
    const title = await page.title();
    console.log(title);
    expect(title).toBe('PVR Cinemas'); 

    await page.getByRole('button', {name:'Proceed'}).click();
    
    await page.waitForTimeout(3000)
})