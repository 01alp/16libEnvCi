# Tallinn Delivery UI — Lesson 16

## Objective

This homework assignment focuses on practicing the use of libraries, environment variables, and CI workflows in the context of the Tallinn Delivery UI project.

## Features Implemented

- Integration of [Faker.js](https://www.npmjs.com/package/@faker-js/faker) to generate random usernames and passwords
- Application URL management through environment variables
- Continuous Integration (CI) configured using GitHub Actions
- All code tracked and reviewed through GitHub

---

## Project Setup

1. **Clone the Repository:**

   ```
   git clone https://github.com/username/repo-name.git
   cd repo-name
   ```

2. **Install Dependencies:**

   ```
   npm install
   ```

3. **Install Faker.js:**

   ```
   npm install @faker-js/faker
   ```

4. **Set Environment Variables:**
   - Create a `.env` file in your project root:
     ```
     APP_URL=https://app-url.com
     ```
   - The application retrieves the URL using `process.env.APP_URL`.

---

## Running the Application

To start the app in development mode:

```
npm start
```

To run all tests (including those required for CI):

```
npm test
```

---

## Continuous Integration (CI)

- The CI workflow is defined in `.github/workflows/playwright.yml`.
- All tests are automatically run on each push or pull request.
- To ensure secure management of sensitive data, set your application URL as a secret:
  1. In your repository, go to **Settings > Secrets and variables > Actions**.
  2. Click **New repository secret**.
  3. Name the secret `APP_URL` and provide your application’s URL as the value.

---

## Using Faker.js

Random usernames and passwords are generated as follows:

```
import { faker } from '@faker-js/faker';

const randomUsername = faker.internet.userName();
const randomPassword = faker.internet.password();
```

These are used to populate relevant fields in the application for testing and development.

---

## Submission Process

1. **Push your code and open a Pull Request (PR).**
2. **Confirm that all CI tests pass.**
3. **Share the PR link in the chat and request a code review.**
4. **Once reviewed and approved, merge your PR.**

---

**Good luck and happy coding!**

---
