import { expect, test as base, type Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export type AuthFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<AuthFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },
});

export { expect };
