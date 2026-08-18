# Exploratory Testing — Bug Report

## Session Summary

A 60-minute exploratory session was performed on SauceDemo, covering Login, Products, Cart, Checkout, and Order Completion. Testing included normal user flows, negative cases, input validation, cart behavior, and basic responsive checks.

## Test Environment

| Property         | Value               |
| ---------------- | ------------------- |
| Application      | SauceDemo           |
| Browser          | Google Chrome 150.x |
| OS               | Ubuntu 24.04 LTS    |
| Viewport         | 1920 × 1080         |
| Test Type        | Exploratory Testing |
| Session Duration | 60 minutes          |
| Tester           | QA Engineer         |
| Test Date        | 2026-08-17          |

---

# BUG-001 — Cart Icon Not Properly Positioned in Desktop and Mobile Views

### Environment

* **Browser:** Google Chrome 150.x
* **OS:** Ubuntu 24.04 LTS
* **Desktop Viewport:** 1920 × 1080
* **User:** `visual_user`
* **Mobile Viewport:** Mobile responsive view

### Preconditions

* User is logged in.
* User is on the Products page.

### Steps to Reproduce

1. Login with `visual_user`.
2. Open the **Products** page.
3. Check the position of the Cart icon on the top navigation bar in desktop view.
4. Switch to a mobile/responsive view.
5. Check the position of the Cart icon again.

### Expected Result

The Cart icon should be properly aligned in the top navigation bar in both desktop and mobile views, with consistent spacing and alignment with the other UI elements.

### Actual Result

The Cart icon is not properly positioned.

* In desktop view, the Cart icon appears too close to the sorting control and does not have proper spacing.
* In mobile view, the Cart icon position is also not properly aligned with the other navigation elements.

### Impact

The incorrect positioning makes the UI look unbalanced and less professional, especially when viewing the application on different screen sizes.

### Severity

**Low**

### Priority

**P3 — Low**

### Attachment

`manual-testing/evidence/bug-001-cart-icon-alignment.png`, `manual-testing/evidence/bug-0011-cart-icon-alignment.png`

---

# BUG-002 — Checkout Button Is Incorrectly Positioned on Cart Page

### Environment

* **Browser:** Google Chrome 150.x
* **OS:** Ubuntu 24.04 LTS
* **User:** `visual_user`
* **Viewport:** 1920 × 1080

### Preconditions

* User is logged in.
* At least one product is added to the cart.
* User is on the **Your Cart** page.

### Steps to Reproduce

1. Login with `visual_user`.
2. Add a product to the cart.
3. Open the **Your Cart** page.
4. Check the position of the **Checkout** button.

### Expected Result

The **Checkout** button should be properly positioned within the cart page layout, close to the cart content and aligned consistently with the other cart controls.

### Actual Result

The **Checkout** button is displayed at the top-right corner of the page, separated from the cart content. It does not appear to be positioned correctly within the cart page layout.

### Impact

The incorrect button positioning makes the cart page look unbalanced and may make the Checkout action less obvious to users.

### Severity

**Low**

### Priority

**P3 — Low**

### Attachment

`manual-testing/evidence/bug-0021-checkout-button-position.png`, `manual-testing/evidence/bug-0022-checkout-button-position.png`

---

# BUG-003 — Cancel Button Arrow Icon Is Misaligned

### Environment

* **Browser:** Google Chrome 150.x
* **OS:** Ubuntu 24.04 LTS
* **Viewport:** 1920 × 1080
* **User:** `visual_user`
* **Page:** Checkout: Your Information

### Preconditions

* User is logged in.
* At least one product is added to the cart.
* User is on the **Checkout: Your Information** page.

### Steps to Reproduce

1. Login with `visual_user`.
2. Add a product to the cart.
3. Open the Cart and click **Checkout**.
4. Navigate to the **Checkout: Your Information** page.
5. Check the **Cancel** button at the bottom-left of the page.
6. Observe the arrow icon and the **Cancel** text inside the button.

### Expected Result

The arrow icon should be properly aligned with the **Cancel** text and should have consistent spacing within the button.

### Actual Result

The arrow icon inside the **Cancel** button is not properly aligned with the **Cancel** text. The icon appears too far to the left, creating uneven spacing and making the button content look misaligned.

### Impact

The incorrect icon alignment makes the Cancel button look visually inconsistent and reduces the overall UI quality of the checkout page.

### Severity

**Low**

### Priority

**P3 — Low**

### Attachment

`manual-testing/evidence/bug-003-cancel-button-icon-alignment.png`

---

# BUG-004 — Sidebar Does Not Close After Selecting Menu Options

### Environment

* **Browser:** Google Chrome 150.x
* **OS:** Ubuntu 24.04 LTS
* **Viewport:** 390 × 844
* **User:** `error_user`
* **Device:** iPhone 12 Pro

### Preconditions

* User is logged in.
* User is on the Products page.
* The navigation sidebar is open.

### Steps to Reproduce

1. Login with `error_user`.
2. Open the navigation menu.
3. Click **All Items**.
4. Check whether the sidebar closes and the Products page is displayed.
5. Open the navigation menu again.
6. Click **Reset App State**.
7. Check the sidebar and page content.

### Expected Result

After clicking **All Items** or **Reset App State**, the sidebar should close automatically and the corresponding page/content should be displayed.

### Actual Result

After selecting **All Items** or **Reset App State**, the sidebar remains open instead of closing automatically. The user has to manually close the sidebar using the **X** icon.

### Impact

The sidebar stays open after selecting an option, which makes the navigation flow less intuitive and requires an extra action from the user.

### Severity

**Medium**

### Priority

**P2 — Medium**

### Attachment

`manual-testing/evidence/bug-004-sidebar-not-closing.png`


---

# BUG-005 — Sorting Error Is Displayed as a Browser JavaScript Alert

### Environment

* **Browser:** Google Chrome 150.x
* **OS:** Ubuntu 24.04 LTS
* **Viewport:** 1920 × 1080
* **User:** `error_user`
* **Page:** Products / Inventory

### Preconditions

* User is logged in.
* User is on the **Products** page.
* Multiple products are displayed.

### Steps to Reproduce

1. Login with `error_user`.
2. Open the **Products** page.
3. Click the sorting dropdown.
4. Select a different sorting option.
5. Observe the error message displayed by the application.

### Expected Result

If sorting fails, the application should display a proper in-page error message, notification, or other UI component that matches the application's design.

The error should be presented in a user-friendly way without interrupting the browser session.

### Actual Result

A native browser JavaScript alert is displayed with the message:

> **"Sorting is broken! This error has been reported to Backtrace."**

The alert blocks the page until the user clicks **OK**.

### Impact

The browser alert interrupts the normal user experience and looks like a developer/debug message rather than a customer-facing error notification.

### Severity

**Medium**

### Priority

**P2 — Medium**

### Attachment

`manual-testing/evidence/bug-005-sorting-javascript-alert.png`

---

# BUG-006 — Same Dog Image Used for Different Products

### Environment

- **Browser:** Google Chrome 150.x
- **OS:** Ubuntu 24.04 LTS
- **Viewport:** 1920 × 1080
- **User:** `problem_user`

### Preconditions

- User is logged in.
- User is on the Products page.

### Steps to Reproduce

1. Login as `problem_user`.
2. Open Products.
3. Compare the images shown for different products.

### Expected Result

Each product should have its own image.

### Actual Result

The same dog image is shown for multiple products.

### Impact

Users cannot reliably identify products from their images.

### Severity

**Medium**

### Priority

**P2 — Medium**

### Attachment

`manual-testing/evidence/bug-006.png`

---

# BUG-007 — Checkout Fields Have Weak Validation

### Environment

- **Browser:** Google Chrome 150.x
- **OS:** Ubuntu 24.04 LTS
- **Viewport:** 1920 × 1080

### Preconditions

- User is logged in.
- A product is in the cart.
- User is on Checkout: Your Information.

### Steps to Reproduce

1. Login as any user.
2. Add a product to the cart.
3. Go to Checkout.
4. Enter invalid values in First Name, Last Name, and Postal Code.
5. Click **Continue**.

### Expected Result

Each field should validate its expected format, not just whether a value was entered.

### Actual Result

The fields mainly check whether the value meets basic length requirements. Invalid characters and formats can still be accepted.

### Impact

Invalid customer and address information can move through checkout.

### Severity

**Medium**

### Priority

**P2 — Medium**

### Attachment

`manual-testing/evidence/bug-0071.png`  
`manual-testing/evidence/bug-0072.png`  
`manual-testing/evidence/bug-0073.png`

---

# BUG-008 — Invalid Postal Code Is Accepted

### Environment

- **Browser:** Google Chrome 150.x
- **OS:** Ubuntu 24.04 LTS
- **Viewport:** 1920 × 1080

### Preconditions

- User is logged in.
- A product is in the cart.

### Steps to Reproduce

1. Login.
2. Add a product to the cart.
3. Open the Cart.
4. Click **Checkout**.
5. Enter valid first and last names.
6. Enter `ABC` as the postal code.
7. Click **Continue**.

### Expected Result

The application should reject an invalid postal code and show a validation message.

### Actual Result

`ABC` is accepted and the user can continue.

### Severity

**Medium**

### Priority

**P2 — Medium**

### Attachment

`manual-testing/evidence/bug-008.png`

---

# BUG-009 — Empty Cart Can Be Checked Out

### Environment

- **Browser:** Google Chrome 150.x
- **OS:** Ubuntu 24.04 LTS
- **Viewport:** 1920 × 1080

### Preconditions

- User is logged in.
- Cart is empty.

### Steps to Reproduce

1. Login.
2. Add a product to the cart.
3. Open the Cart.
4. Remove the product.
5. Confirm the cart is empty.
6. Click **Checkout**.
7. Enter valid checkout details.
8. Continue to the Overview page.
9. Click **Finish**.
10. Generate the order PDF.

### Expected Result

Checkout should not be available for an empty cart. The user should not be able to complete or generate an order with no products.

### Actual Result

The user can complete checkout with an empty cart.

The Overview page shows **$0.00**, the user reaches **"Checkout: Complete!"**, and an order PDF can also be generated.

### Impact

The application allows an empty order to be completed and documented.

### Severity

**High**

### Priority

**P1 — High**

### Attachment

`manual-testing/evidence/bug-0091.png`  
`manual-testing/evidence/bug-0092.png`  
`manual-testing/evidence/bug-0093.png`

---

# BUG-010 — Product Card Has Poor Mobile Spacing

### Environment

- **Browser:** Google Chrome 150.x
- **OS:** Android
- **Device:** Samsung Galaxy Z Fold 5
- **Viewport:** 344 × 882

### Preconditions

- User is logged in.
- Products page is open.

### Steps to Reproduce

1. Open SauceDemo.
2. Enable mobile emulation.
3. Select **Galaxy Z Fold 5**.
4. Open Products.
5. Check the product cards.

### Expected Result

Product details and buttons should have consistent spacing and alignment.

### Actual Result

There is a large gap between the description and price. The **Add to cart** button also has extra space on the right.

### Impact

The product cards look uneven and use the mobile screen inefficiently.

### Severity

**Low**

### Priority

**P3 — Low**

### Attachment

`manual-testing/evidence/bug-010.png`

---

# BUG-011 — Sorting Icon Is Misaligned

### Environment

- **Browser:** Google Chrome 150.x
- **OS:** Ubuntu 24.04 LTS
- **Viewport:** 1920 × 1080

### Preconditions

- User is logged in.
- Products page is open.

### Steps to Reproduce

1. Login.
2. Open Products.
3. Locate the sorting control.
4. Check the icon inside the control.

### Expected Result

The icon should be centered with equal spacing around it.

### Actual Result

The icon is slightly off-center and has uneven spacing inside the box.

### Impact

Minor visual inconsistency in the product controls.

### Severity

**Low**

### Priority

**P3 — Low**

### Attachment

`manual-testing/evidence/bug-011.png`

---

# BUG-012 — "QTY" Label Is Inconsistent With Other Cart Labels

### Environment

- **Browser:** Google Chrome 150.x
- **OS:** Ubuntu 24.04 LTS
- **Viewport:** 1920 × 1080

### Preconditions

- User is logged in.
- At least one product is in the cart.

### Steps to Reproduce

1. Login.
2. Add a product to the cart.
3. Open **Your Cart**.
4. Check the column headers.

### Expected Result

The column should use **"Quantity"** for consistency with labels such as **"Description"**.

### Actual Result

The column is labelled **"QTY"**, while the next column uses the full word **"Description"**.

### Impact

Minor UI consistency issue. "QTY" is understandable, but "Quantity" is clearer.

### Severity

**Low**

### Priority

**P3 — Low**

### Attachment

`manual-testing/evidence/bug-012.png`

---

# BUG-013 — User Is Logged Out When Opening Cart

### Environment

- **Browser:** Google Chrome 150.x
- **OS:** Ubuntu 24.04 LTS
- **Viewport:** 1920 × 1080

### Preconditions

- User is logged in.
- Session is active.
- User is actively using the application.

### Steps to Reproduce

1. Login with valid credentials.
2. Browse the Products page.
3. Add or interact with products.
4. Without logging out or being idle, click the **Cart** icon.

### Expected Result

The user should remain logged in and be taken to the Cart.

### Actual Result

Clicking the Cart icon logs the user out unexpectedly.

### Impact

The active shopping session is interrupted and the user has to log in again.

### Severity

**Critical**

### Priority

**P1 — Critical**

### Attachment

`manual-testing/evidence/bug-013-unexpected-logout-cart.png`

---

# BUG-014 — Last Name Field Does Not Accept Input for Problem User

### Environment

- **Browser:** Google Chrome 150.x
- **OS:** Ubuntu 24.04 LTS
- **Viewport:** 1920 × 1080
- **User:** `problem_user`
- **Page:** Checkout: Your Information

### Preconditions

- Logged in as `problem_user`.
- A product is in the cart.
- Checkout information page is open.

### Steps to Reproduce

1. Login as `problem_user`.
2. Add a product to the cart.
3. Open the Cart and click **Checkout**.
4. Enter `Parth` in First Name.
5. Enter `Patel` in Last Name.
6. Try to continue.

### Expected Result

Both names should remain in their respective fields and the user should be able to continue.

### Actual Result

Entering the Last Name causes the First Name value to be replaced/repeated. The Last Name field stays empty and the application reports that Last Name is required.

### Impact

`problem_user` cannot complete the checkout form or place an order.

### Severity

**High**

### Priority

**P1 — Critical**

### Attachment

`manual-testing/evidence/bug-014-problem-user-last-name.png`

---

# BUG-015 — Problem User Cannot Add Some Products to Cart

### Environment

- **Browser:** Google Chrome 150.x
- **OS:** Ubuntu 24.04 LTS
- **Viewport:** 1920 × 1080
- **User:** `problem_user`
- **Page:** Products/Inventory

### Preconditions

- Logged in as `problem_user`.
- Products page is open.

### Steps to Reproduce

1. Login as `problem_user`.
2. Open Products.
3. Try adding these products:
   - Sauce Labs Bolt T-Shirt
   - Sauce Labs Fleece Jacket
   - Test.allTheThings() T-Shirt (Red)
4. Check the buttons and cart count.

### Expected Result

Each selected product should be added to the cart and its button should change to **Remove**.

### Actual Result

The three products cannot be added. Their buttons remain **Add to cart** and the cart is not updated.

### Impact

The affected user cannot purchase these products.

### Severity

**High**

### Priority

**P1 — Critical**

### Attachment

`manual-testing/evidence/bug-015-problem-user-cannot-add-products.png`

---

# BUG-016 — Problem User Cannot Sort Products

### Environment

- **Browser:** Google Chrome 150.x
- **OS:** Ubuntu 24.04 LTS
- **Viewport:** 1920 × 1080
- **User:** `problem_user`
- **Page:** Products/Inventory

### Preconditions

- Logged in as `problem_user`.
- Multiple products are displayed.

### Steps to Reproduce

1. Login as `problem_user`.
2. Open Products.
3. Open the sorting control.
4. Try options such as:
   - Name (Z to A)
   - Price (low to high)
   - Price (high to low)
5. Check the product list.

### Expected Result

The selected sort option should be applied and the products should be reordered.

### Actual Result

`problem_user` cannot select/use the sorting options, so the product list cannot be sorted.

### Impact

The user cannot use a basic product-listing feature to find products by name or price.

### Severity

**Critical**

### Priority

**P1 — Critical**

### Attachment

`manual-testing/evidence/bug-015-problem-user-cannot-add-products.png`
