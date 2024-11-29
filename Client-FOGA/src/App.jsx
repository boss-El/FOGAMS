import { BrowserRouter, Route, Router,  Routes } from 'react-router-dom'

import React from 'react'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Project from './pages/Project'
import Header from './components/Header'
import Footer from './components/Footer'
import Ministries from './pages/Ministries'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import DashDailyBibleMessage from './components/DashDailyBibleMessage'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/sign-in" element={<SignIn />} />  
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/project" element={<Project />} />
      <Route path="/ministries" element={<Ministries />} />
      <Route element={<PrivateRoute />}>
      <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route element={<OnlyAdminPrivateRoute />}>
      <Route path="/daily-bible-message" element={<DashDailyBibleMessage />} />
      </Route>
    </Routes>
     <Footer />
    </BrowserRouter>
  )
}
