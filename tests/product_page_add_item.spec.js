import { expect, test } from "@playwright/test";

test("Product Page Add to Basket", async ({ page }) => {
    // change baseURL in config file 
    await page.goto("/");

    const addToBasketButton = page.locator('[data-qa="product-button"]').first();
    const basketCount = page.locator('[data-qa="header-basket-count"]');
    
    await addToBasketButton.waitFor();
    await expect(addToBasketButton).toHaveText("Add to Basket");
    await expect(basketCount).toHaveText("0");
    await addToBasketButton.click();
    await expect(addToBasketButton).toHaveText("Remove from Basket");

    await expect(basketCount).toHaveText("1");

    const checkoutLink = page.getByRole('link', {name: 'Checkout'});
    
    await checkoutLink.waitFor();
    await checkoutLink.click();

    await page.pause();
});
