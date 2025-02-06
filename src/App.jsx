import { useState, version } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 p-8">
      {/* Logo-sektion */}
      <div className="flex items-center space-x-8 mb-10">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            alt="Vite logo"
            className="w-16 h-16 transition-transform transform hover:scale-110"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            alt="React logo"
            className="w-16 h-16 transition-transform transform hover:scale-110"
          />
        </a>
      </div>

      {/* Titel og React-version */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
        Vite + React
      </h1>
      <small className="text-sm text-gray-600 mb-6">
        React version: {version}
      </small>

      {/* Kort/Content-område */}
      <div className="bg-white p-6 rounded-md shadow-md text-center">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-700">
          Edit <code className="px-1 py-0.5 bg-gray-100 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Ekstra info */}
      <p className="text-gray-800 font-medium mt-6">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App