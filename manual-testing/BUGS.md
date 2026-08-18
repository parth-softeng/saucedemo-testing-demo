# Exploratory Testing — Bug Report

## Session Summary

A 60-minute exploratory session was performed on SauceDemo, covering Login, Products, Cart, Checkout, and Order Completion. Testing included normal user flows, negative cases, input validation, cart behavior, and basic responsive checks.

## Test Environment

| Property | Value |
|---|---|
| Application | SauceDemo |
| Browser | Google Chrome 150.x |
| OS | Ubuntu 24.04 LTS |
| Viewport | 1920 × 1080 |
| Test Type | Exploratory Testing |
| Session Duration | 60 minutes |
| Tester | QA Engineer |
| Test Date | 2026-08-17 |

---

# BUG-001 — Technical Text Shown in Backpack Description

### Environment

- **Browser:** Google Chrome 150.x
- **OS:** Ubuntu 24.04 LTS
- **Viewport:** 1920 × 1080

### Preconditions

- User is logged in.
- Backpack is added to the cart.

### Steps to Reproduce

1. Login.
2. Add **Sauce Labs Backpack** to the cart.
3. Open the Cart.
4. Check the product description.

### Expected Result

The description should contain normal customer-facing product text.

### Actual Result

The description contains **`carry.allTheThings()`**.

### Impact

Looks like internal/developer text and makes the product information look unfinished.

### Severity

**Low**

### Priority

**P3 — Low**

### Attachment

`manual-testing/evidence/bug-001.png`

---

# BUG-002 — Cannot Increase Product Quantity in Cart

### Environment

- **Browser:** Google Chrome 150.x
- **OS:** Ubuntu 24.04 LTS
- **Viewport:** 1920 × 1080

### Preconditions

- User is logged in.
- A product is available.

### Steps to Reproduce

1. Login.
2. Add a product to the cart.
3. Open the Cart.
4. Try to increase its quantity.

### Expected Result

The cart should provide a way to increase the quantity of an item.

### Actual Result

There is no quantity control. Each item stays at quantity **1**.

### Impact

Users cannot buy more than one unit of the same product in one order.

### Severity

**Medium**

### Priority

**P2 — Medium**

### Attachment

`manual-testing/evidence/bug-002.png`

---

# BUG-003 — Technical Text Shown in Product Name

### Environment

- **Browser:** Google Chrome 150.x
- **OS:** Ubuntu 24.04 LTS
- **Viewport:** 1920 × 1080

### Preconditions

- User is logged in.
- User is on the Products page.

### Steps to Reproduce

1. Login.
2. Open the Products page.
3. Check the product names.
4. Find **`Test.allTheThings() T-Shirt (Red)`**.

### Expected Result

Product names should contain normal customer-facing text.

### Actual Result

The product name contains **`Test.allTheThings()`**, which looks like developer/test text.

### Impact

Makes the product catalog look unfinished.

### Severity

**Low**

### Priority

**P3 — Low**

### Attachment

`manual-testing/evidence/bug-003.png`

---

# BUG-004 — Unprofessional Text in Locked User Error

### Environment

- **Browser:** Google Chrome 150.x
- **OS:** Ubuntu 24.04 LTS
- **Viewport:** 1920 × 1080

### Preconditions

- User is on the login page.
- Locked user account is available.

### Steps to Reproduce

1. Open the login page.
2. Enter `locked_out_user`.
3. Enter the valid password.
4. Click **Login**.
5. Check the error message.

### Expected Result

The user should see a clear message explaining that the account is locked.

### Actual Result

The message says:

> **"Epic sadface: Sorry, this user has been locked out."**

### Impact

"Epic sadface" is unnecessary and does not look like normal customer-facing wording.

### Severity

**Low**

### Priority

**P3 — Low**

### Attachment

`manual-testing/evidence/bug-004.png`

---

# BUG-005 — Cart Items Carry Over to Another User

### Environment

- **Browser:** Google Chrome 150.x
- **OS:** Ubuntu 24.04 LTS
- **Viewport:** 1920 × 1080

### Preconditions

- Two valid user accounts are available.
- Both users use the same browser.

### Steps to Reproduce

1. Login as User A.
2. Add a product to the cart.
3. Logout.
4. Login as User B.
5. Open the Cart.

### Expected Result

User B should see only their own cart items.

### Actual Result

The product added by User A is still present after User B logs in.

### Impact

One user can see another user's cart data and could potentially place an incorrect order.

### Severity

**High**

### Priority

**P1 — High**

### Attachment

`manual-testing/evidence/bug-005.png`

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

1. Login.
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