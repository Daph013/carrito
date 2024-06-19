import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import CardProductos from '../components/CardProductos';
const API='https://dummyjson.com/products/search?q=';

const Buscar = () => {
    const [datos, setDatos] = useState([])
    const location = useLocation();
    const valueSearch = location.state;
    const getDatos = async () =>{
        const URI=API+valueSearch
        try {
          const response = await fetch(URI);
          const data = await response.json();
          //console.log(data)
          setDatos(data.products);
        } catch (error) {
          console.error(error)
        }
      };
      useEffect(()=>{
        getDatos();
      },[valueSearch]);
  return (
    <div className="container">
    <h1 className="text-center py-3">Todos los Productos ({datos.length})</h1>
        <div className="row">
            {datos && datos.map((item, index)=>(
                <CardProductos key={index} item={item}/>
            
            ))}
        </div>
    </div>
  )
}

export default Buscar