import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
//import './App.css'
//https://minireto-9af37-default-rtdb.firebaseio.com/



function Form () {
  //const [name, setName] = useState('')
  //const [nameHasError, setNameHasError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async data => {
    console.log(data)
    console.log(errors)
    let result = await fetch(
      'https://minireto-9af37-default-rtdb.firebaseio.com/.json',
      {
        method: 'POST',
        body: JSON.stringify(data)
      }
    )
    console.log(await result.json())
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='bg-dark text-white p-3 border rounded'
            >
               <div className='form-group mb-3'>
                <label htmlFor=''>Coloca la url de tu imagen</label>
                <input
                  type='url'
                  id = 'website'
                  className='form-control'
                  name='name'
                  {...register('imagen', { required: true })}
                />
                {errors.imagen && errors.imagen.type === 'required' && (
                  <div className='alert alert-danger mt-3' role='alert'>
                    Este campo es requerido!
                  </div>
                )}
              </div>
              <div className='form-group mb-3'>
                <label htmlFor=''>Nombre del producto</label>
                <input
                  type='text'
                  className='form-control'
                  name='name'
                  placeholder='Nombre del producto'
                  {...register('nombre', { required: true, maxLength: 30 })}
                />
                {errors.nombre && errors.nombre.type === 'required' && (
                  <div className='alert alert-danger mt-3' role='alert'>
                    Este campo es requerido!
                  </div>
                )}
                {errors.nombre && errors.nombre.type === 'maxLength' && (
                  <div className='alert alert-danger mt-3' role='alert'>
                    El límite de caracteres es de 30
                  </div>
                )}
              </div>
              <div className='form-group mb-3'>
                <label htmlFor=''>Describe tu producto</label>
                <input
                  type='text'
                  className='form-control'
                  name='name'
                  {...register('descripcion', { required: true, maxLength: 100})}
                />
                {errors.descripcion && errors.descripcion.type === 'required' && (
                  <div className='alert alert-danger mt-3' role='alert'>
                    Este campo es requerido!
                  </div>
                )}
                {errors.descripcion && errors.descripcion.type === 'maxLength' && (
                  <div className='alert alert-danger mt-3' role='alert'>
                    El límite de caracteres es de 100
                  </div>
                )}
              </div>
              <div className='form-group mb-3'>
                <label htmlFor=''>Precio</label>
                <input
                  type='number'
                  className='form-control'
                  name='name'
                  {...register('precio', { required: true})}
                  />
                  {errors.precio && errors.precio.type === 'required' && (
                    <div className='alert alert-danger mt-3' role='alert'>
                      Este campo es requerido!
                    </div>
                  )}   
              </div>
              /**asignar alerta onClick de exito al subir el producto  */
              <button type='submit' className='btn btn-primary'> 
                Guardar Producto
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form 