// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import Blog from './routes/Blog';
import { Routes, Route } from 'react-router-dom';
import Practice from './routes/Practice';


function App() {
  return (
       <>
        <Routes>
          <Route exact path="/" element={<Home/>}  />

          <Route exact path="/home" element={<Home/>}  />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route exact path="/blog" element={<Blog/>} />
          <Route exact path="/contact" element={<Contact/>}/>

        </Routes>
       </>




    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
      
    // </div>
  );
}

export default App;
