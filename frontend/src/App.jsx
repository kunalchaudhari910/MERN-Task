import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import CreateProducts from '../pages/CreateProducts'
import ShowProduct from '../pages/ShowProduct'
import EditProduct from '../pages/EditProduct'
import DeleteProduct from '../pages/DeleteProduct'


const App = () => {
  return (
    
    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/products/create' element={<CreateProducts />} />
      <Route path='/products/details/:id' element={<ShowProduct />} />
      <Route path='/products/edit/:id' element={<EditProduct/>} />
      <Route path='/products/delete/:id' element={<DeleteProduct />} />
    </Routes>
  )
}

export default App