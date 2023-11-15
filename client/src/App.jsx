import {} from 'react'
import './css/General.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import About from './pages/About'
import Header from './components/Header'
import PrivateRoute from './components/privateRoute'
import PrincipalPage from './pages/PrincipalPage'
import Nosotros from './pages/About/About'
import BookList from './components/BookList/BookList'
import BookDetails from './components/BookDetails/BookDetails'
import Casa from "./pages/Home/Home"

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<PrincipalPage/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/sign-in" element={<SignIn />} /> 
          <Route path="/sign-up" element={<SignUp />} /> 
          <Route path="/casa" element={<Casa />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>

  );
}
