import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Routing from './route/Routing'
import LoginPage from './components/LoginPage'
import LoginDashboard from './components/loginuser/LoginDashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routing />
    </>
  )
}

export default App


