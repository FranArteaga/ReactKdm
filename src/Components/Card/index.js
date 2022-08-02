import { CardBody, CardTitle, CardText, img, Button, Card } from "reactstrap"
import { Link } from 'react-router-dom'

const CardCustom = (productProps) => {

const {imagen, nombre, descripcion, precio } = productProps.product
const { productId } = productProps.productKey
   

return(
      <div className='col' key={productId}>
      <Link to='/'>
        <div className='card h-100 '>
          <img src={imagen} className='card-img-top h-50' alt='...' />
          <div className='card-body '>
            <h5 className='card-title'>{nombre}</h5>
            <p className='card-text'>{`${descripcion!==undefined ? descripcion.substring(0,55): ""}`}</p>
            <p className='card-text'>{precio}</p>
            <button type="button" className=' btn btn-primary'>Agregar al carrito</button>

          </div>
        </div>
      </Link>
    </div>
    )
}
export default CardCustom