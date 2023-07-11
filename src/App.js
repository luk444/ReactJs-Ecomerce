import React from "react";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ItemListContainer from "./components/ItemListContainer";
import {BrowserRouter,  Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"; 
import Error from "./components/Error";

function App() { 
  return (
     <div>     
        <BrowserRouter>
          <NavBar />
          <div className='text-center p-2 font-weight-bold' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>PRODUCTOS
          <hr></hr>
        </div>
          <Routes>
                <Route path={"/"} element={<ItemListContainer />} />
                <Route path={"/category/:id"} element={<ItemListContainer />} />
                <Route path= {"/item/:id"} element={<ItemDetailContainer />} />
                <Route path= '*' exact element={<Error />} />
          </Routes>           
        </BrowserRouter>
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>© 2023 Copyright : 
          <a className='text-reset fw-medium' href='#'>
            Luca Ventura
          </a>
        </div>
      </div>
    
  );
}

export default App;