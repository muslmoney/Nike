import React, { Fragment, useEffect } from 'react'
import "./App.css";
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from './layout/Header'
import './App.css'
import Footer from './layout/Footer'


const App = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  useEffect(() => {
    if (pathname === '/') {
      navigate('/home')
    }
  }, [pathname])





  return (
    <div>
      <Fragment>
        <header>
            <Header/>
        </header>
        
        <main>
          <Outlet/>
        </main>
        
        <footer>
          <Footer/>
        </footer>
      </Fragment>
    </div>
  )
}

export default App
