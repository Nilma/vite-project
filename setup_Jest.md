# Setting Up Jest for React 19 with Vite and Running Tests

This guide explains how to set up **Jest** for a React 19 project created with **Vite** and ensure that the test environment works properly.

---

## **Steps to Set Up Jest and Run Tests**

### 1️⃣ Install Jest and Required Packages

Run the following command to install Jest and the necessary testing libraries:
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @babel/preset-env @babel/preset-react babel-jest jest-environment-jsdom util

2️⃣ Configure Babel

Create a .babelrc file in the root of your project with the following content:

{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}

This ensures that Jest can process modern JavaScript and JSX.

3️⃣ Add Jest Configuration

Update your jest.config.js file with the following:

export default {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom", "./jest.setup.js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};

4️⃣ Add Polyfills for TextEncoder and TextDecoder

Create a file called jest.setup.js in the root of your project and add the following:

import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

This fixes the TextEncoder and TextDecoder issue when using libraries like react-router-dom in Jest.

5️⃣ Add a Test Script to package.json

Open your package.json file and add the following "test" script under "scripts":

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "test": "jest"
}

6️⃣ Write Your Test

Create a folder named __tests__ in the root of your project, and inside it, create a file called HomePage.test.jsx. Add the following test code:

import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "../src/pages/HomePage";
import { BrowserRouter } from "react-router-dom";

test("renders homepage with blog posts", () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );

  // Check if the "Blog Posts" heading is rendered
  expect(screen.getByText("Blog Posts")).toBeInTheDocument();
});

7️⃣ Run the Test

Run the following command to execute your test suite:

npm test

Expected Output

If everything is set up correctly, you should see:

PASS  __tests__/HomePage.test.jsx
  ✓ renders homepage with blog posts (14 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.38 s, estimated 1 s
Ran all test suites.

What We Fixed Along the Way
	1.	Installed Jest and related testing libraries.
	2.	Configured Babel to process modern JavaScript and JSX.
	3.	Added polyfills for TextEncoder and TextDecoder.
	4.	Imported React in the test file to avoid ReferenceError: React is not defined.
	5.	Configured Jest to transform files with Babel (babel-jest).

Next Steps
	1.	Add More Tests:
	•	Test navigation links, dynamic routing, and API integrations.
	2.	Test Other Components:
	•	Write tests for PostPage.jsx and other components.
	3.	Mock API Calls:
	•	Use libraries like MSW or Jest mocks to simulate API responses.
	4.	Automate Tests in CI/CD:
	•	Integrate your Jest tests into your GitHub Actions workflow.

