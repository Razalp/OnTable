import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/UserSide/Login/Login'
import Home from './Pages/UserSide/Home/Home'


function App() {

  return (
    <Routes>
       <Route path="/" element={<Login />}/>
       <Route path="/home" element={<Home />}/>
    </Routes>
  )
}

export default App
