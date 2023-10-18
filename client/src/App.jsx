import {} from 'react'
import './css/General.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import About from './pages/About'
import Header from './components/Header'
import PrivateRoute from './components/privateRoute'
import PrincipalPage from './pages/PrincipalPage'

export default function App() {
  return (
    <BrowserRouter>
      {/* header */}
      <Header/>
      <Routes>
        <Route path='/' element={<PrincipalPage/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/sign-in" element={<SignIn />} /> 
        <Route path="/sign-up" element={<SignUp />} /> 
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
