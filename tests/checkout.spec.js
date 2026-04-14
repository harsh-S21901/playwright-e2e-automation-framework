const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { CartPage } = require("../pages/CartPage");
const { CheckoutPage } = require("../pages/CheckoutPage");

test.use({ storageState: "storageState.json" });

test("User can checkout", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");

  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const productName = "Sauce Labs Bike Light";

  await expect(page.locator(".title")).toHaveText("Products");

  await cartPage.addToCart(productName);
  await cartPage.openCart();

  await cartPage.verifyProductInCart(productName);
  await checkoutPage.startCheckout();
  await checkoutPage.checkout("test", "test", "1111");
  await checkoutPage.finishOrder();
  await checkoutPage.verifyOrderConfirmed();
});
