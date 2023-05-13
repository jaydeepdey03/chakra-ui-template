import { Router, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={<Home />} />
      </Router>
    </>
  )
}

export default App
