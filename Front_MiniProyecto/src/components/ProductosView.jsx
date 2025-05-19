
import React, { useEffect, useState } from 'react'
import { DeleteProducto, GetProducto, UpdateProducto } from '../services/llamados'

function ProductosView() {

    const [productos, setProductos] = useState([])
    const [reload, setReload] = useState (false)

    //   CONST para realizar el update
    const [mostrar, setMostrar] = useState(false)
    const [editNombre, setEditNombre] = useState("")
    const [editDescripcion, setEditDescripcion] = useState ("")
    const [editPrecio, setEditPrecio] = useState ("")
    const [editCantidad, setEditCantidad] = useState ("")

    function newNombre(e) {
        setEditNombre(e.target.value)
    }
    function newDescripcion(e) {
        setEditDescripcion(e.target.value)
    }
    function newPrecio(e) {
        setEditPrecio(e.target.value)
    }
    function newCantidad(e) {
        setEditCantidad(e.target.value)
    }
    // Funcion de Eliminar Producto 
    function eliminar(id) {
         console.log("Eliminando producto con ID:", id);
        DeleteProducto(id)
        setReload (!reload)
    }
    // Funcion de EDITAR Producto
    function edit(id) {
        const productoEdit = {
            "nombre" : editNombre,
            "descripcion" : editDescripcion,
            "precio" : editPrecio,
            "cantidad" : editCantidad
        }
        UpdateProducto(productoEdit, id)
        setReload(!reload)
    }

    useEffect (()=>{
        async function list () {
            const datos = await GetProducto("productos")
            setProductos(datos)
        }
        list()
    },[reload])

  return (
    <div>
        <h2>Vista de los productos creados</h2><br />
        
        <div>
            <h3>Lista de productos</h3>
            <ul>
                {productos
                .map((producto, index)=>(
                <li key={index} >
                    <strong>Nombre</strong> {producto.nombre} <br />
                    <strong>Descripcion</strong> {producto.descripcion} <br />
                    <strong>Precio</strong> {producto.precio} <br />
                    <strong>Cantidad</strong> {producto.cantidad} <br /><br />

                    <button className='btnDelete' onClick={() => eliminar(producto.id)}>Delete</button>
                    <button className='btnEdit' onClick={() => setMostrar(!mostrar)}>Edit</button><br />
                    {mostrar &&
                    <>
                    <input onChange={newNombre} type="text" placeholder='Nombre'/><br />
                    <input onChange={newDescripcion} type="text" placeholder='Descricion'/><br />
                    <input onChange={newPrecio} type="text" placeholder='Precio'/><br />
                    <input onChange={newCantidad} type="text" placeholder='Cantidad'/><br />
                    <button onClick={() => edit(producto.id)}>Completado</button>
                    </>
                    }
                </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default ProductosView