const { test } = require("@playwright/test");
const users = require("../test-data/users.json");

test("login and save state", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.locator("#user-name").fill(users[0].username);
  await page.locator("#password").fill(users[0].password);
  await page.locator("#login-button").click();
  await page.context().storageState({ path: "storageState.json" });
});
