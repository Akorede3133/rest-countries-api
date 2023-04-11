import { useState } from 'react';
import Home from './components/Home';
import CountryDetail from './components/CountryDetail';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App h-full md:h-screen dark:text-white text-[hsl(200, 15%, 8%)] dark:bg-neutral-very-dark-blue-dark-bg">
      <Nav />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/countrydetail/:id' element={<CountryDetail />} />
      </Routes>
    </div>
  )
}

export default App
