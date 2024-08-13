import React, { Fragment, useEffect } from 'react'
import "./App.css";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './layout/Header'
import Footer from './layout/Footer'
import Background from 'three/src/renderers/common/Background.js';



const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/home');
    }
  }, [pathname, navigate]);

  return (
    <div className='app-container'>
      <Fragment>
        <header>
          <Header />
        </header>

        <main>
          <RouteTransition >
            <Outlet />
          </RouteTransition>
        </main>

        <footer>
          <Footer />
        </footer>
      </Fragment>
    </div>
  );
};





function RouteTransition({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence>

    <TransitionGroup>
      <CSSTransition 
        key={location.key}
        timeout={800}
        classNames="fade"
        
      >
        <motion.div key={location.key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}>

      <div className="route-container">
          <div className="overlay"></div>
          <div className="nike-overlay">
            <div className="nike-text"  data-glitch="NIKE">NIKE</div>
          </div>
          {children}
          
        </div>
        </motion.div>
      </CSSTransition>
    </TransitionGroup>
    </AnimatePresence>
  );
}
export default App