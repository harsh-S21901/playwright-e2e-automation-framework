const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
});

test("Valid Login", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login("standard_user", "secret_sauce");

  await expect(page.locator(".title")).toHaveText("Products");
});
test("Invalid Login", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login("standard_user", "Wrong Password");

  await expect(page.locator('[data-test="error"]')).toContainText(
    "Username and password do not match"
  );
});
