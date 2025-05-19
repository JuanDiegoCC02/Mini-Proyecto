// Llamado Get de Productos
async function GetProducto() {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/productos/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error fetching productos");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching productos", error);
    throw error;
  }
}



// Llamado Post de Productos

async function PostProducto(obj) {
    try {
        const response = await fetch ("http://127.0.0.1:8000/api/productos/",{
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(obj)
        });
        if (!response.ok){
            throw new Error("Error fetching productos")
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching productos", error);
        throw error;
    }
}



// Llamado Uptade de Productos
async function UpdateProducto(obj, id) 
{
    try {
        const response = await fetch("http://127.0.0.1:8000/api/productos/"+id+"/", {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}



//  Llamado Delete de Productos
async function DeleteProducto(id) {
    try {
        
        const response = await fetch(`http://127.0.0.1:8000/api/productos/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting producto with id ${id}`);
        }

        return { message: `Producto with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting Producto:', error);
        throw error;
    }
}



export{
    GetProducto,
    PostProducto,
    UpdateProducto,
    DeleteProducto,
}




