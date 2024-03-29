import { test } from "@playwright/test";
import { ProductsPage } from "../page-objects/ProductsPage.js";

test.only("New user full end-to-end journey", async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.visit();
    await productsPage.addProductToBasket(0);
    await productsPage.addProductToBasket(1);
    await productsPage.addProductToBasket(2);
    await page.pause(); 
});
