import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import FooterBar from './Components/FooterBar';
import './styles.css';

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Home/>}/>
            </Routes>
            <FooterBar/>
        </BrowserRouter>
    )
}

export default App;