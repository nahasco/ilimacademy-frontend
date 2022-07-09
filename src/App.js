import React from 'react';
import Navbar from './components/navbar'
import Header from './components/header'
import Dashboard from './pages/dashboard';
import { Route, Routes } from 'react-router-dom';
import Practice from './pages/practice';
import History from './pages/history';


function App() {
  return (
    <>
      <div className='container'>
        <Navbar/>
        <div className='body'>
          <Header />
          <Routes>
            <Route path='' element={<Dashboard />}/>
            <Route path='/practice' element={<Practice />}/>
            <Route path='history' element={<History />}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
 