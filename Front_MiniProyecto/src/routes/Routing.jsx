import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductosPages from '../pages/ProductosPages';

function Routing() {
  return (
    <Router>
        <Routes>
            <Route path='/productos' element={<ProductosPages/>}/>
        </Routes>
    </Router>
  )
}

export default Routing