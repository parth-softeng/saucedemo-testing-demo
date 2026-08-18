import { existsSync } from 'node:fs';
import { expect, test } from '../fixtures/checkout.fixture';
import { STANDARD_USER } from '../fixtures/users.fixture';

test.describe('Checkout flow', () => {
  test('completes a full order and downloads the order PDF', async (
    {
      page,
      loginPage,
      inventoryPage,
      cartPage,
      checkoutPage,
    },
    testInfo,
  ) => {
    await loginPage.login(STANDARD_USER.username, STANDARD_USER.password);
    await expect(page).toHaveURL(/inventory\.html/);

    await inventoryPage.addBackpackToCart();
    await expect(inventoryPage.cartBadge).toHaveText('1');

    await inventoryPage.openCart();
    await expect(page).toHaveURL(/cart\.html/);

    await cartPage.checkout();
    await expect(page).toHaveURL(/checkout-step-one\.html/);

    await checkoutPage.fillInformation('Jane', 'Doe', '90210');
    await checkoutPage.continueCheckout();
    await expect(page).toHaveURL(/checkout-step-two\.html/);

    await checkoutPage.finishCheckout();
    await expect(page).toHaveURL(/checkout-complete\.html/);
    await expect(checkoutPage.completeHeader).toHaveText(
      'Thank you for your order!',
    );

    const download = await checkoutPage.downloadOrderPdf();
    const downloadPath = testInfo.outputPath('order.pdf');
    await download.saveAs(downloadPath);

    expect(existsSync(downloadPath)).toBe(true);
  });
});