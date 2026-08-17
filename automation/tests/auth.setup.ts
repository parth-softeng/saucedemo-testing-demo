import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { STANDARD_USER } from '../fixtures/users.fixture';

const AUTH_FILE = 'automation/.auth/user.json';

setup(
  'authenticate as standard_user and save storage state',
  async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(STANDARD_USER.username, STANDARD_USER.password);

    await expect(page).toHaveURL(/inventory\.html/);

    await page.context().storageState({ path: AUTH_FILE });
  },
);
