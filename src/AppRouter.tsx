import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ServicesPage from './pages/ServicesPage'
import SignUpPage from './pages/SignUpPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/services' element={<ServicesPage />} />
      <Route path='/signup' element={<SignUpPage />} />
    </Routes>
  )
}

export default AppRouter
