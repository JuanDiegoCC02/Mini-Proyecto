import React, {useState} from 'react'

import { PostProducto } from '../services/llamados'


function ProductosCrud() {
    const [NombreProducto, setNombreProducto] = useState()
    const [DescripcionProducto, setDescripcionProducto] = useState()
    const [PrecioProducto, setPrecioProducto] = useState()
    const [CantidadProducto, setCantidadProducto] = useState()


    function nombre(e){
        setNombreProducto(e.target.value)
    }
    function descripcion(e){
        setDescripcionProducto(e.target.value)
    }
    function precio(e){
        setPrecioProducto(e.target.value)
    }
    function cantidad(e){
        setCantidadProducto(e.target.value)
    }
    async function publicar(){
    const  obj = {
        nombre: NombreProducto,
        descripcion: DescripcionProducto,
        precio: PrecioProducto,
        cantidad: CantidadProducto
    }
    const respuestaServer = await PostProducto(obj)
      console.log(respuestaServer);
       window.location.reload();
    }

  return (
    <div>
        <h2>Crud Productos</h2>

         <div>
            <h3>Post de Productos</h3>
         </div>

            <div>
            <label htmlFor="">Nombre: </label>
            <input value={NombreProducto} onChange={nombre} type="text" /><br />

            <label htmlFor="">Descripción: </label>
            <input value={DescripcionProducto} onChange={descripcion} type="text" /><br />

            <label htmlFor="">Precio: </label>
            <input value={PrecioProducto} onChange={precio} type="text" /><br />

            <label htmlFor="">Cantidad: </label>
            <input value={CantidadProducto} onChange={cantidad} type="text" /><br />

            <input type="button" onClick={publicar} value="Post" />

            </div>

    </div>
  )
}

export default ProductosCrud