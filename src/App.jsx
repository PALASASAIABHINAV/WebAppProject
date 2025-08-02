import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Welcome to CI/CD Sec-112</h1>
        <p>Your professional continuous integration and deployment demo</p>
      </header>
      <main className="homepage-main">
        <h2>About This Project</h2>
        <p>
          This is a sample React application demonstrating a professional homepage layout.
          It is designed to showcase best practices in UI and code structure for CI/CD pipelines.
        </p>
        <ul>
          <li>Modern React with functional components</li>
          <li>Clean and responsive design</li>
          <li>Ready for integration with CI/CD tools</li>
        </ul>
      </main>
      <footer className="homepage-footer">
        &copy; {new Date().getFullYear()} Sec-112 CI/CD Demo. All rights reserved.
      </footer>
    </div>
  )
}

export default App