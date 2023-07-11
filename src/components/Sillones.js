import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';

const Sillones = () => {
  const [prods, setProds] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products=Sillones') //solicitamos los datos
      .then((res) => res.json()) //lo traducimos
      .then((respuesta) => setProds(respuesta)) //los almacenamos
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
        
      <ItemList prods={prods} />
      <Link to='/'>Volver al Home</Link>
    </>
  );
};

export default Sillones