# SauceDemo Testing Demo

Playwright end-to-end tests and manual exploratory testing for [SauceDemo](https://www.saucedemo.com).

Manual QA Bugs Sheet: https://docs.google.com/spreadsheets/d/1jmeyah_DTBJvjLvS_wFGo9moyFju0qB-DjGRZiNdomc/edit?usp=sharing

## 1. How to install and run

The below steps are for setting up the project on a fresh machine with internet access.

### Prerequisites

- **Node.js** 18+ (LTS is recommended)
- **npm** (comes with Node.js)
- **Git** (to clone the repository)

### Setup

```bash
git clone https://github.com/parth-softeng/saucedemo-testing-demo.git
cd saucedemo-testing-demo

npm install
npx playwright install --with-deps chromium
```

### Run tests

```bash
# Run all tests in headless mode
npm test

# Run tests with the browser visible
npm run test:headed

# Open Playwright UI mode
npm run test:ui

# Run a specific test file
npm test -- automation/tests/login.spec.ts

# Open the HTML report from the last test run
npm run test:report
```

### Lint and format

```bash
npm run lint
npm run format:check
npm run format
```

## 2. Project structure

The project has two main parts: automated testing and manual testing.

The `automation/` folder contains the Playwright test cases, page objects, fixtures, and test data.

- `tests/` - Playwright test cases
- `pages/` - Page Object Model classes
- `fixtures/` - Common fixtures and test setup
- `playwright.config.ts` - Playwright configuration

The tests are currently running against the live SauceDemo website using Chromium.

The `manual-testing/` folder contains the exploratory testing results. Bugs are documented in `BUGS.md` and the screenshots are kept inside the `evidence/` folder.

The CI pipeline is available in `.github/workflows/playwright.yml`. It installs the dependencies, runs the Playwright tests and uploads the HTML report as a workflow artifact.

## 3. Design decisions and trade-offs

I have used the **Page Object Model** so that locators and page-related actions stay in one place. For example, pages like `LoginPage` and `InventoryPage` contain their own locators and actions. This keeps the actual test files easier to read and mainly focused on the test flow.

Playwright fixtures such as `auth.fixture.ts`, `checkout.fixture.ts`, and `inventory.fixture.ts` are used for different test areas. This keeps the setup smaller instead of having one large fixture file. There is some small amount of duplication between fixtures, but it makes the test setup easier to understand.

The tests run against the public SauceDemo website instead of a local application. This makes the setup easier and also gives a more real-world test environment. The downside is that the tests depend on the website being available and any changes on the live site can affect the tests.

For now, only **Chromium** is configured. This keeps the installation and CI execution time lower. Firefox and WebKit can be added later if cross-browser testing is required.

Playwright is configured to keep traces, screenshots and videos for failed tests. The CI pipeline also uploads the HTML report when tests fail, which makes it easier to check what went wrong without running the tests again locally.

## 4. Known limitations

- Tests are running against the live SauceDemo website (`https://www.saucedemo.com`). Network issues or changes to the website can cause test failures.
- Only **Chromium** is currently covered. Firefox and WebKit are not included.
- **BUG-016** (`inventory-sort.spec.ts`) is expected to fail because the `problem_user` has a known sorting issue. Because of this, the complete test suite will not be fully green until that application bug is fixed.
- Manual testing results and screenshots under `manual-testing/` are not executed or checked by the CI pipeline.