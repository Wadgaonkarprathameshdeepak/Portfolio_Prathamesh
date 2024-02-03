import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import All from "./All";




function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<All/>} />
      </Routes>
    </Router>
  )
}

export default App