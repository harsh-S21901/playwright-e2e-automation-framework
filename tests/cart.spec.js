const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { CartPage } = require("../pages/CartPage");

test("User can add product to cart and verify it in cart", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);
  const productName = "Sauce Labs Bike Light";

  await loginPage.login("standard_user", "secret_sauce");
  await expect(page.locator(".title")).toHaveText("Products");

  await cartPage.addToCart(productName);
  await cartPage.openCart();

  await cartPage.verifyOrderInCart(productName);
});
