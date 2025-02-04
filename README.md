# React 19 with Vite Setup Guide

This guide explains how to set up a React 19 project using Vite. Follow these steps to create a project, update React to version 19, and customize your development server.

---

## Prerequisites

Make sure you have the latest versions of the following installed:

- **Node.js**
- **npm**

You can verify your versions using:

```bash
node -v
npm -v

Steps to Set Up React 19 with Vite

1️⃣ Create the Project
	1.	Create a folder on your desktop and name it whatever you like.
	2.	Drag and drop the folder into Visual Studio Code.
	3.	Open a new terminal inside VS Code (use Cmd + J to toggle the terminal).

2️⃣ Initialize a Vite Project

Run the following command:

npm create vite@latest

You will be prompted to:
	•	Enter a project name (default: vite-project).
	•	Choose a framework: Select React.
	•	Choose the language: Select JavaScript.

Navigate into the project folder:

cd vite-project

3️⃣ Install Dependencies

Install the project dependencies:

npm install

Verify React Version
	1.	Open src/App.jsx.
	2.	Add the following code to verify the React version:

import { useState, version } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Vite + React</h1>
      <small>{version}</small>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
    </div>
  );
}

export default App;


	3.	Run the project:

npm run dev


	4.	By default, you’ll notice that the React version displayed is 18.

Upgrade to React 19

To upgrade React and React DOM to version 19, run the following command:

npm i react@19 react-dom@19

Verify the Upgrade
	1.	Open package.json and check that the dependencies reflect React 19:

"dependencies": {
  "react": "^19.0.0",
  "react-dom": "^19.0.0"
}


	2.	Restart the project:

npm run dev



	NOTE: If it still shows 18.x.x, run the following command in the terminal:

npm install

	3.	The React version displayed in the browser should now be 19.

Change the Default Development Port

By default, Vite uses port 5173. To change it to port 3000:
	1.	Open vite.config.js and update it as follows:

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});


	2.	Restart the project to apply the changes:

npm run dev


	3.	Access your app at:

http://localhost:3000

# Next Steps

You can now start building your React 19 app using the latest features, because this guide ensures your project is set up correctly with React 19 and Vite. 
# Happy coding! 


