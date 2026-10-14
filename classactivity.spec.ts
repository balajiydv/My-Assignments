import{test, expect} from '@playwright/test'

test('Loading Homepage', async ({page}) => {

    await page.goto('https://www.redbus.in')
    await expect(page).toHaveTitle('Bus Booking Online and Train Tickets at Lowest Price - redBus')

    await page.goto('https://www.flipkart.com')
    await expect(page).toHaveTitle('Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com')
    
})