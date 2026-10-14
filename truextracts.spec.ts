
import{test, expect} from'@playwright/test';

test('add almond oil 200ml to cart', async({page})=>{

    await page.goto('https://truextracts.in');
    
    await page.locator('.te-cat-label', {hasText:'Oils'}).click();

    await page.locator('a[href*="almond-oil"]').first().click();

    await page.locator('#pa_package-of-size').selectOption({index : 1});
    
    await page.locator('#pa_pack-options').selectOption({index : 1});

    await page.locator('button.single_add_to_cart_button').click();

    await expect(page.locator('.woocommerce-message')).toContainText('has been added to your cart');

    await page.locator('a.button.wc-forward').click();

    await page.waitForTimeout(2000)

   // await page.locator('id="pa_package-of-size"').click

    //await expect(page).toHaveTitle(/Truextracts/);
});