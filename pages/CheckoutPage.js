const { expect } = require("@playwright/test");
class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutBtn = page.locator('[data-test="checkout"]');
    this.firstNameInput = page.locator("#first-name");
    this.lastNameInput = page.locator("#last-name");
    this.postalCodeInput = page.locator("#postal-code");
    this.continueBtn = page.locator("#continue");
    this.finishBtn = page.locator("#finish");
    this.confirmationText = page.locator(".complete-header");
  }

  async startCheckout() {
    await this.checkoutBtn.click();
  }

  async checkout(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueBtn.click();
  }

  async finishOrder() {
    await this.finishBtn.click();
  }

  async verifyOrderConfirmed() {
    await expect(this.confirmationText).toHaveText("Thank you for your order!");
  }
}

module.exports = {
  CheckoutPage,
};
