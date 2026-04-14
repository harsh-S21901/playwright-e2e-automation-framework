# 🚀 Playwright E2E Automation Framework

## 📌 Overview

This project is a **scalable End-to-End (E2E) test automation framework** built using Playwright with JavaScript. It demonstrates real-world QA automation practices including Page Object Model (POM), data-driven testing, authentication reuse, and CI/CD integration.

---

## 🧠 Key Features

* ✅ End-to-End test coverage (Login → Cart → Checkout)
* ✅ Page Object Model (POM) for maintainable code
* ✅ Data-driven testing using JSON
* ✅ Authentication reuse using storageState (skip UI login)
* ✅ Clean and scalable project structure
* ✅ Playwright HTML reporting
* ✅ CI/CD integration with GitHub Actions

---

## 🏗️ Project Structure

```
/tests        → Test specs
/pages        → Page Object classes
/api          → API helpers (if added)
/utils        → Utility/helper functions
/test-data    → Test data (JSON files)
```

---

## ⚙️ Tech Stack

* Playwright
* JavaScript (Node.js)
* GitHub Actions (CI/CD)

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```
git clone [<your-repo-url>](https://github.com/harsh-S21901/playwright-e2e-automation-framework.git)
cd playwright-e2e-automation-framework
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Install Playwright browsers

```
npx playwright install
```

---

## ▶️ Running Tests

### Run all tests

```
npx playwright test
```

### Run specific test

```
npx playwright test tests/login.spec.js
```

### Run in headed mode

```
npx playwright test --headed
```

---

## 📊 Test Reports

Generate and view HTML report:

```
npx playwright show-report
```

---

## 🔐 Authentication Handling

This framework uses **Playwright storageState** to reuse login sessions and avoid repeated UI login.

* Login is performed once
* Session is stored in `storageState.json`
* Tests run in an already authenticated state

---

## 🔄 Data-Driven Testing

Test data is stored in JSON format under `/test-data`.

Example:

```
[
  {
    "username": "standard_user",
    "password": "secret_sauce"
  }
]
```

---

## ⚡ CI/CD Integration

GitHub Actions is configured to:

* Run tests on every push
* Execute test suite automatically

Workflow file:

```
.github/workflows/playwright.yml
```

---

## 🎯 Test Scenarios Covered

* User login (valid & invalid)
* Add product to cart
* Verify cart items
* Complete checkout process
* Order confirmation validation

---

## 📈 Future Enhancements

* API test integration
* Docker support
* Parallel test execution optimization
* Cross-browser testing expansion

---

## 👨‍💻 Author

Harsh Patel

---

## ⭐ Notes

This project is built as part of QA Automation learning and demonstrates industry-level best practices for test automation frameworks.
