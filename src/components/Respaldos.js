import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';


const Respaldos = () => {
  const [prods, setProds] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products/?Categoria=Respaldos') //pido los datos
      .then((res) => res.json()) //lo traduzco
      .then((respuesta) => setProds(respuesta)) //los almacenamos
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
       <div className="container">
       <h2>Productos</h2>
        <div className="btn-group">
          <Link to='/'>Volver al Home</Link> 
          <ItemList prods={prods} />
        </div>
      </div> 
    </>
  );
};

export default Respaldos