import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Booking from './Pages/Booking';
import FooterBar from './Components/FooterBar';
import './styles.css';

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/booking' element={<Booking/>}/>
            </Routes>
            <FooterBar/>
        </BrowserRouter>
    )
}

export default App;