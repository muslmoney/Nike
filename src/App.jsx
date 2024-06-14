import React, { Fragment } from 'react'
import {Link, Outlet } from 'react-router-dom'
import Header from './layout/Header'
import './App.css'
const App = () => {
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
          footer
        </footer>
      </Fragment>
    </div>
  )
}

export default App
