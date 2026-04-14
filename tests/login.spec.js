const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const users = require("../test-data/users.json");

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
});

test("Valid Login", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(users[0].username, users[0].password);

  await expect(page.locator(".title")).toHaveText("Products");
});
test("Invalid Login", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login("standard_user", "Wrong Password");

  await expect(page.locator('[data-test="error"]')).toContainText(
    "Username and password do not match"
  );
});
