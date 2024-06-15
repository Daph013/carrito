
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import CardProductos from '../components/CardProductos';
const API='https://dummyjson.com/products/category/'
const Categorias = () => {
    const [datos, setDatos] = useState([])
    const params = useParams()
    let id=params.id;
    const getDatos = async () =>{
        const URI=API+id
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
      },[params.id]);
  return (
    <div className="container">
    <h1 className="text-center py-3">({datos.length})</h1>
        <div className="row">
            {datos && datos.map((item)=>(
                <CardProductos key={item.id} item={item}/>
            
            ))}
        </div>
    </div>
  )
}

export default Categorias