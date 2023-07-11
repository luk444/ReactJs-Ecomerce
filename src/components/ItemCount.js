import React from "react";
import { useState } from "react";

const ItemCount = ({ stockItems }) => {
  const [counter, setCounter] = useState(1);
  const [stock, setStock] = useState(stockItems);

  const incrementarStock = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decrementarStock = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const onAdd = () => {
    if (counter <= stock) {
      setStock(stock - counter);
      setCounter(1);
    }
  };

  return (
    <div className="container" id="itemcount">
      <div className="row mb-3">
        <div className="col-md-6 offset-md-3">
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-primary btn-sm" onClick={decrementarStock}>
              -
            </button>
            <button type="button" className="btn btn-outline-primary btn-sm">
              {counter}
            </button>
            <button type="button" className="btn btn-outline-primary btn-sm" onClick={incrementarStock}>
              +
            </button>
          </div>
          <button type="button" className="btn btn-outline-primary btn-sm mt-2" onClick={onAdd}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
