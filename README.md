# Playwright POM (Page Object Model) - Noon.com E-Commerce Tests

This project is a test automation framework for the Noon.com e-commerce platform using **Playwright** with the **Page Object Model (POM)** design pattern.

## Project Structure

```
PW_POM1/
├── pages/
│   ├── BasePage.ts          # Base page class with common setup/teardown methods
│   ├── P1_SignUp.ts         # Sign Up page object
│   ├── P2_Logout.ts         # Logout page object
│   └── P3_Homepage.ts       # Home page object
├── tests/
│   ├── signUp.spec.ts       # Sign Up test cases
│   ├── Logout.spec.ts       # Logout test cases
│   └── HomePage.spec.ts     # Home page test cases
├── playwright.config.ts     # Playwright configuration
├── package.json             # Project dependencies
└── README.md               # This file
```

## Page Descriptions

### 1. **BasePage.ts**
Base class that all page objects inherit from.

**Methods:**
- `setUp()` - Navigates to the base URL (https://www.noon.com/egypt-en/)
- `tearDown()` - Closes the browser session
- `page` - Protected property to access the Playwright Page object
- `baseUrl` - Protected property containing the application URL

**Purpose:** Provides common functionality and setup/teardown logic for all page objects.

---

### 2. **P1_SignUp.ts** (SignUpPage)
Handles all user sign-up interactions on the Noon.com platform.

**Locators:**
- `loginButton` - Sign in/Login button in header
- `signUpButton` - Sign up button in overlay modal
- `emailAddressInput` - Email input field
- `continueButton` - Continue button
- `signUpUsingPasswordButton` - Password option button
- `newPasswordInput` - New password input field
- `confirmPasswordInput` - Confirm password input field
- `signUpButtonF` - Final submit button for sign up form
- `confirmationButton` - Confirmation button

**Methods:**
- `navigateToNoon()` - Navigate to Noon.com homepage
- `clickLoginButton()` - Click the login button
- `clickSignUpButton()` - Click the sign up button
- `enterEmailAddress(email)` - Enter email address
- `clickContinueButton()` - Click continue button
- `clickSignUpUsingPasswordButton()` - Select password signup option
- `enterNewPassword(password)` - Enter new password
- `enterConfirmPassword(password)` - Confirm password
- `clickSignUpButtonF()` - Submit sign up form

**Purpose:** Encapsulates all sign-up page interactions and locators for user registration.

---

### 3. **P2_Logout.ts** (LogoutPage)
Handles user logout functionality.

**Locators:**
- `profileMenuButton` - Profile/Account menu button in header
- `logoutButton` - Logout button in the profile menu

**Methods:**
- `clickonProfileMenu()` - Click the profile menu
- `clickonLogoutButton()` - Click the logout button

**Purpose:** Manages logout flow by clicking profile menu and logout option.

---

### 4. **P3_Homepage.ts** (HomePage)
Handles home page interactions like searching and adding items to cart.

**Locators:**
- `searchInput` - Search input field
- `itemSelect` - Product item to select from search results
- `addToCartButton` - Add to cart button

**Methods:**
- `searchForItem(item)` - Search for an item by name, click first result, and add to cart

**Purpose:** Provides functionality for browsing, searching, and purchasing items on the home page.

---

## Test Files

### **signUp.spec.ts**
Tests the complete user sign-up flow.

**Test Case:** `has title`
1. Navigate to Noon.com
2. Click login button
3. Click sign up button
4. Enter email address
5. Click continue
6. Choose password signup
7. Enter new password
8. Confirm password
9. Submit sign up form
10. Pause for verification

---

### **Logout.spec.ts**
Tests the user logout flow.

**Test Case:** `Logout Test`
1. Click profile menu
2. Click logout button

---

### **HomePage.spec.ts**
Tests home page search and cart functionality.

**Test Case:** `Home Page Test`
1. Search for "Iphone"
2. Add item to cart
3. Pause for verification

---

## Technology Stack

- **Playwright** - Web automation framework
- **TypeScript** - Programming language
- **Page Object Model (POM)** - Design pattern for test organization
- **Node.js** - Runtime environment

## Setup & Installation

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in headed mode
npm run test:headed

# Run specific test file
npm test signUp.spec.ts
```

## Best Practices Used

✅ **Page Object Model** - Locators and methods separated from tests  
✅ **Inheritance** - All pages extend BasePage for common functionality  
✅ **Accessibility Selectors** - Using `getByRole()`, `getByLabel()`, etc. instead of XPath  
✅ **CSS Selectors** - Using CSS IDs for specific elements  
✅ **Regex Patterns** - Flexible element matching with regex in selectors  
✅ **Setup/Teardown** - Base page handles browser initialization and cleanup  

## Future Enhancements

- Add more test cases for edge cases
- Implement explicit waits
- Add reporting and screenshots
- Create data-driven tests with multiple test data sets
- Add API testing integration
- Implement CI/CD pipeline integration
