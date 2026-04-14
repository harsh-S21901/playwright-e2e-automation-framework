const { expect } = require("@playwright/test");
class CartPage {
  constructor(page) {
    this.page = page;
    this.item = page.locator(".inventory_item");
    this.cartBtn = page.locator('[data-test="shopping-cart-link"]');
    this.cartItems = page.locator(".cart_item");
  }

  async addToCart(productName) {
    const product = this.item.filter({ hasText: productName });
    await product.getByRole("button", { name: "Add to cart" }).click();

    await expect(product).toContainText("Remove");
  }

  async openCart() {
    await this.cartBtn.click();
  }

  async verifyProductInCart(productName) {
    await expect(this.cartItems).toContainText(productName);
  }
}

module.exports = { CartPage };
