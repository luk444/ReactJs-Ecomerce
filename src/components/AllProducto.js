import axios from 'axios';

const todosProductos = async (state) => {
const peticion = await axios.get('http://localhost:5000/products/')   
state(peticion.data.results)
}

const unicoProducto = async (id, state)=>{
    const peticion = await axios.get(`http://localhost:5000/products/${id}`)
    state(peticion.data)
}



export{todosProductos, unicoProducto
}