import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div className="row text-center" id="itemdetail">
      <div className="col-md-4 offset-md-4">
        <hr></hr>
        <img src={item.Img} className="img-fluid" alt={item.Descrip} />
        <h1>{item.Marca}</h1>
        <h4>{item.Modelo}</h4>
        <h6>{item.Descrip}</h6>
        <h3>${item.Precio}</h3>
        <div className="d-flex justify-content-center">
          <ItemCount stockItems={10} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
