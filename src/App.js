import React from 'react';
//import {  Routes, Route } from "react-router-dom";
import {Space} from 'antd';
//{Navbar,Homepage,Cryptocurrencies,Exchanges,CryptoDetails,News}
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Cryptocurrencies from './components/Cryptocurrencies';
import Exchanges from './components/Exchanges';
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';
import './App.css';
import 'antd/dist/reset.css';




import {  Route, BrowserRouter as Router,Routes, Link } from "react-router-dom";
import { Typography } from 'antd';


const App=()=> {
  console.log("entered");
  return (
    <div className='app'>
      <div className='navbar'>
        <Router>
        <Navbar/>
        </Router>
      </div>
      <div className='main'>
      <Router >
        <div className='routes'>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
          <Route exact path="/cryptoDetails" element={<CryptoDetails/>}/>
          <Route exact path="/exchanges" element={<Exchanges/>}/>
          <Route exact path="/news" element={<News/>}/>
        </Routes>
        </div>
      </Router>
     
        <div className='footer' >
        <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
         Cryptoverse <br/>
         All rights reserved
        </Typography.Title>
        <Space>
          <Router>
          <Link  className='f-link' to='/'>Home</Link>
          <Link className='f-link' to='/exchanges'>Exchanges</Link>
          <Link className='f-link' to='/news'>News</Link>
          </Router>
        </Space>
        </div> 
      </div>

      </div>
       );
      }
    
    
    
 

export default App;