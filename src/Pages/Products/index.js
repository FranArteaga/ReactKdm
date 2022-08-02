import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CardCustom from '../../Components/Card'


const Products = () => {
  const [products, setProducts] = useState([])
  const [newProductKey, setNewProductKey] = useState()
  useEffect(() => {
    const getProducts = async () => {
      let productsList = await fetch('https://minireto-9af37-default-rtdb.firebaseio.com/.json')
      productsList = await productsList.json()
      setProducts(productsList)
    }
    getProducts()
  }, [])

  return (
    
      <div className='col-12 col-md-12'>
        <div className='row row-cols-1 row-cols-md-2 g-4'>
          { Object.keys(products).map(productoKey => {
            
           //const { nombre, descripcion, imagen, precio } = products[productoKey]
           
            return (
              
              <CardCustom product={products[productoKey]} productKey={productoKey}/>
              
            )
          })}
        </div>
      </div>
  )
}

export default Products