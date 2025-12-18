import { BasePage } from './BasePage';
import { CartLocators } from '../locators/cart.locators';

export class CartPage extends BasePage {

  async validateProduct(name: string, price: string) {
    await this.page.locator(CartLocators.productName).isVisible();
    await this.page.locator(CartLocators.productPrice).isVisible();
  }

  async checkout() {
    await this.page.click(CartLocators.checkoutButton);
  }
}