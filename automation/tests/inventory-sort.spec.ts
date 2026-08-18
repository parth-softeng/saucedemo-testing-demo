import { expect, test } from '../fixtures/inventory.fixture';
import { PROBLEM_USER } from '../fixtures/users.fixture';
import { type ProductSortOption } from '../pages/InventoryPage';

type SortKind = 'name' | 'price';
type SortDirection = 'asc' | 'desc';

type SortCase = {
  option: ProductSortOption;
  label: string;
  kind: SortKind;
  direction: SortDirection;
};

const SORT_CASES: SortCase[] = [
  {
    option: 'za',
    label: 'Name (Z to A)',
    kind: 'name',
    direction: 'desc',
  },
  {
    option: 'lohi',
    label: 'Price (low to high)',
    kind: 'price',
    direction: 'asc',
  }
];

function sortedNames(names: string[], direction: SortDirection): string[] {
  return [...names].sort((a, b) =>
    direction === 'asc' ? a.localeCompare(b) : b.localeCompare(a),
  );
}

function sortedPrices(prices: number[], direction: SortDirection): number[] {
  return [...prices].sort((a, b) => (direction === 'asc' ? a - b : b - a));
}

// BUG-016: problem_user sorting feature is not working
test.describe('Problem User Cannot Sort Products', () => {
  test.use({ viewport: { width: 1920, height: 1080 } });

  test.beforeEach(async ({ page, loginPage }) => {
    await loginPage.login(PROBLEM_USER.username, PROBLEM_USER.password);
    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
  });

  for (const sortCase of SORT_CASES) {
    test(`applies ${sortCase.label} and reorders the product list`, async ({
      inventoryPage,
    }) => {
      const namesBefore = await inventoryPage.getProductNames();
      const pricesBefore = await inventoryPage.getProductPrices();
      expect(namesBefore.length).toBeGreaterThan(1);

      await inventoryPage.sortBy(sortCase.option);

      await expect(inventoryPage.sortSelect).toHaveValue(sortCase.option);

      switch (sortCase.kind) {
        case 'name':
          expect(await inventoryPage.getProductNames()).toEqual(
            sortedNames(namesBefore, sortCase.direction),
          );
          break;
        case 'price':
          expect(await inventoryPage.getProductPrices()).toEqual(
            sortedPrices(pricesBefore, sortCase.direction),
          );
          break;
        default: {
          const _exhaustive: never = sortCase.kind;
          throw new Error(`Unhandled sort kind: ${_exhaustive}`);
        }
      }
    });
  }
});