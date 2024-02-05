import { expect, test } from "@playwright/test";

test("Product Page Add to Basket", async ({ page }) => {
    await page.goto("localhost:2221");

    const addToBasketButton = page.locator('[data-qa="product-button"]').first();
    const basketCount = page.locator('[data-qa="header-basket-count"]');
    
    await addToBasketButton.waitFor();
    await expect(addToBasketButton).toHaveText("Add to Basket");
    await expect(basketCount).toHaveText("0");
    await addToBasketButton.click();
    await expect(addToBasketButton).toHaveText("Remove from Basket");

    await expect(basketCount).toHaveText("1");

    await page.pause();
});
