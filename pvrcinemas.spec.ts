import test, { expect } from "@playwright/test";
import { info, log } from "node:console";
import { hasUncaughtExceptionCaptureCallback } from "node:process";

test('Movie ticket booking in PVR Cinemas', async({page})=>{

    await page.goto('https://www.pvrcinemas.com/');  //Launch the browser and open

    await page.getByText('Delhi').nth(1).click(); 
    await page.locator('h6.cities-name',{hasText: 'Bengaluru'}).click();  //Select the city as “Bengaluru”

    await page.locator("//span[text()='Cinema']").click(); 
    await page.locator("//span[text()='Select Cinema']").click(); 
    await page.locator("//span[text()='INOX Shree Garuda Swagath Mall, Jayanagar Bengaluru']").click();  //Choose cinema from the available list
    await page.locator("//span[contains(text(),'Tomorrow')]").click();  //Select movie date
    await page.getByRole('listbox').locator('li').filter({ hasText: 'JAILER 2' }).click();  //Choose any available movie
    await page.getByRole('listbox').locator('li').filter({hasText: '10:30 PM' }).click();  //Select available show time
    await page.getByRole('button', {name:'Submit'}).click();  //Click on Book button

    await page.getByRole('button', {name:'Accept'}).click();  //Click on Accept for Terms & Conditions

    await page.locator("//span[@id='QR.PRIME ROWS|A:2']").click();  //Select the available seat

    const seat = await page.locator("//span[@id='QR.PRIME ROWS|A:2']").innerText();  // Verify seat information and total ticket amount using assertions
    const selectedseat = await page.locator('.seat-number', {hasText: 'A2'}).innerText();
    expect(selectedseat).toContain(seat);
    console.log("Selected Seat : ", selectedseat);    
    
    const Total = await page.locator('.grand-prices').innerText();  //Verify the total amount
    await expect(page.locator('.grand-prices')).toHaveText('519.62')
    console.log("Grand Total : ", Total);
      
    const title = await page.title();
    console.log(title);
    expect(title).toBe('PVR Cinemas');   //Verify the Title of the page

    await page.getByRole('button', {name:'Proceed'}).click();  //Proceed to booking
    
    await page.waitForTimeout(3000)
})
