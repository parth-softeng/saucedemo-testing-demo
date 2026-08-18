import { expect, test } from '../fixtures/auth.fixture';
import {
  ERROR_USER,
  INVALID_PASSWORD,
  LOCKED_OUT_USER,
  PERFORMANCE_GLITCH_USER,
  PROBLEM_USER,
  STANDARD_USER,
  VISUAL_USER,
} from '../fixtures/users.fixture';

const MISSING_USERNAME_ERROR = 'Epic sadface: Username is required';
const MISSING_PASSWORD_ERROR = 'Epic sadface: Password is required';
const INVALID_CREDENTIALS_ERROR =
  'Epic sadface: Username and password do not match any user in this service';
const LOCKED_OUT_ERROR = 'Epic sadface: Sorry, this user has been locked out.';

test.describe('Login page', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto();
  });

  // 1 data-driven scenario (parameterized inputs)
  test.describe('Positive login scenarios', () => {
    test('logs in successfully with standard_user', async ({
      page,
      loginPage,
    }) => {
      await loginPage.login(STANDARD_USER.username, STANDARD_USER.password);

      await expect(page).toHaveURL(/inventory\.html/);
      await expect(page.locator('[data-test="title"]')).toHaveText('Products');
    });

    test('logs in successfully with problem_user', async ({
      page,
      loginPage,
    }) => {
      await loginPage.login(PROBLEM_USER.username, PROBLEM_USER.password);

      await expect(page).toHaveURL(/inventory\.html/);
    });

    test('logs in successfully with performance_glitch_user', async ({
      page,
      loginPage,
    }) => {
      await loginPage.login(
        PERFORMANCE_GLITCH_USER.username,
        PERFORMANCE_GLITCH_USER.password,
      );

      await expect(page).toHaveURL(/inventory\.html/);
    });

    test('logs in successfully with error_user', async ({
      page,
      loginPage,
    }) => {
      await loginPage.login(ERROR_USER.username, ERROR_USER.password);

      await expect(page).toHaveURL(/inventory\.html/);
    });

    test('logs in successfully with visual_user', async ({
      page,
      loginPage,
    }) => {
      await loginPage.login(VISUAL_USER.username, VISUAL_USER.password);

      await expect(page).toHaveURL(/inventory\.html/);
    });
  });

  // 1 negative auth scenario
  test.describe('Negative login scenarios', () => {
    test('shows validation error when username is empty', async ({
      loginPage,
    }) => {
      await loginPage.login('', STANDARD_USER.password);

      await expect(loginPage.errorMessage).toHaveText(MISSING_USERNAME_ERROR);
      await expect(loginPage.errorMessage).toBeVisible();
    });

    test('shows validation error when password is empty', async ({
      loginPage,
    }) => {
      await loginPage.login(STANDARD_USER.username, '');

      await expect(loginPage.errorMessage).toHaveText(MISSING_PASSWORD_ERROR);
      await expect(loginPage.errorMessage).toBeVisible();
    });

    test('shows validation error when both fields are empty', async ({
      loginPage,
    }) => {
      await loginPage.login('', '');

      await expect(loginPage.errorMessage).toHaveText(MISSING_USERNAME_ERROR);
      await expect(loginPage.errorMessage).toBeVisible();
    });

    test('shows error for invalid username', async ({ loginPage }) => {
      await loginPage.login('unknown_user', STANDARD_USER.password);

      await expect(loginPage.errorMessage).toHaveText(
        INVALID_CREDENTIALS_ERROR,
      );
    });

    test('shows error for invalid password', async ({ loginPage }) => {
      await loginPage.login(STANDARD_USER.username, INVALID_PASSWORD);

      await expect(loginPage.errorMessage).toHaveText(
        INVALID_CREDENTIALS_ERROR,
      );
    });

    test('shows error for locked_out_user', async ({ loginPage }) => {
      await loginPage.login(LOCKED_OUT_USER.username, LOCKED_OUT_USER.password);

      await expect(loginPage.errorMessage).toHaveText(LOCKED_OUT_ERROR);
      await expect(loginPage.errorMessage).toBeVisible();
    });
  });

});
