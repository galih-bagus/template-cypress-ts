# Cypress Automation Testing Project

End-to-end (E2E) test automation using **Cypress v15**, **TypeScript**, **XPath**, and **Allure Report**.

---

## 📦 Tech Stack

- **Cypress** `v15.8.1`
- **TypeScript**
- **Node.js** `v22`
- **Allure Report (allure-cypress)**
- **cypress-xpath**
- **dotenv**

---

## 📁 Project Structure

```
├── cypress/
│ ├── screenshots/ # Failure screenshots
│ ├── support/
│ │ ├── commands.ts # Custom Cypress commands
│ │ └── e2e.ts # Global support (Allure, XPath)
│
├── test/
│ ├── helper/ # Reusable helpers (xpath actions, asserts)
│ ├── page/ # Page Objects (selectors)
│ └── scenario/ # Test scenarios (*.cy.ts / *.test.ts)
│
├── allure-results/ # Generated after test run
├── cypress.config.ts
├── tsconfig.json
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone repository

```bash
git clone <your-repo-url>
cd test-cypress
```

### 2️⃣ Install dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory or copy paste from file `.env.example`

---

### ▶️ Running Tests

Run tests (headless – default)

```bash
npx cypress run
```

Run with Chrome (headless)

```bash
npx cypress run --browser chrome
```

Open Cypress UI (headed)

```bash
npx cypress open
```

---

### 📸 Screenshots

- Screenshots are automatically captured on failure

- Stored in:

```
cypress/screenshots/
```

ℹ️ Screenshots are only auto-generated in cypress run, not cypress open

---

## 📝 License

This project is for testing and personal purposes.

If you want, I can also:

- add **badges** (Cypress, Node, Allure)
- tailor this README for **GitHub / GitLab**
- add **CI instructions**
- simplify for non-technical users

Just tell me 👍
