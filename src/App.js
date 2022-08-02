import { useState } from 'react'
import './App.css'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link, Routes, Route } from 'react-router-dom'
import Pagina2 from './Pages/Pagina2';

import Products from './Pages/Products';
import PaginaForm from './Pages/PagForm';
import Carrito from './Pages/PagCarrito';

function App () {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const [shoppingCart, setShoppingCart] = useState([])

  const addToCart = product =>{
    setShoppingCart ([...shoppingCart, product])
  }
  return (
    <div className='App'>
      <Navbar expand='md' color='primary' container='m' dark>
        <NavbarBrand href='/'>Púchale acá para el inicio</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
          <NavItem>
              <Link to='/productos' className='nav-link'>
                Productos en venta
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/carrito-de-compras' className='nav-link'>
                Carrito de compras
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/tu-historial-de-compra' className='nav-link'>
                Estas son tus compras del día de hoy
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/agregar-producto' className='nav-link'>
                Agrega un nuevo producto al catalogo
              </Link>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
      <div className='container-fluid'>
        <div className='row'>
        {/* //  */}
          <div className='col-6'> 
            <Routes>
              <Route path='/' element={<h1>Página de prueba</h1>} />
              <Route path='productos' element={<Products addToCart/>} />
              <Route path='carrito-de-compras' element={<Carrito />} />
              <Route path='tu-historial-de-compra' element={<Pagina2 />} />
              <Route path='agregar-producto' element={<PaginaForm />} /> 
              
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App