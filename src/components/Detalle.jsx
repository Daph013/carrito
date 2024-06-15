import { useEffect, useState } from 'react';

import { PlusSquareFill } from 'react-bootstrap-icons';
import { DashCircleFill } from 'react-bootstrap-icons';
import { CartFill } from 'react-bootstrap-icons';


import Swal from 'sweetalert2'

function Detalle({show, handleClose, item, carrito, setCarrito}) {
  const pv=parseFloat(item.price-((item.price*item.discountPercentage)/100));
  const [cantidad, setCantidad] = useState(1)
  function disminuirCant(){
    if(cantidad>0){
        setCantidad((cantidad)=>cantidad-1)
    }   
}
function sumarCant(){
    setCantidad((cantidad)=>cantidad+1)
}
useEffect(()=>{
    setCantidad(1) 
},[])

function mostrarMensage(titulo,texto){
  Swal.fire({
      title: titulo,
      text: texto,
      icon: "success"
    });
}
const formatearMoneda = (valor) => {
  const resultado = valor.toLocaleString("es", {
    style: "currency",
    currency: "USD",
    useGrouping: true,
  });

  return resultado.replace("US$", "");
};

 /* en este caso si el producto esta lo sustituye */
 const onAddProduct = (item) => {
    const prod = item;
    prod["cant"] = cantidad;
    // Verificar si el producto ya está en el carrito
    const productoExistenteIndex = carrito.findIndex((item) => item.id === prod.id);
    if (productoExistenteIndex !== -1) {
      // Si el producto ya existe, reemplazarlo en el carrito
      const carritoActualizado = [...carrito];
      carritoActualizado[productoExistenteIndex] = prod;
      setCarrito(carritoActualizado);
      mostrarMensage("¡Actualizado!","Producto actualizado en el carrito");
    } else {
      // Si el producto no existe, agregarlo al carrito
      setCarrito([...carrito, prod]);
      mostrarMensage("¡Agregado!","Producto agregado al carrito");
    }
  };
  const verCarrito = () => {
    let totalCantidad = 0;
    let totalPrecio = 0;

    const carritoTabla = carrito.map((item) => {
    const subtotal = item.price * item.cant;
    totalCantidad += item.cant;
    totalPrecio += subtotal;

    const precioFormateado = formatearMoneda(item.price);
    const subtotalFormateado = formatearMoneda(subtotal);

    return `
        <tr>
            <td><img src="${producto.thumbnail}" alt="" class="imgCarrito"/> </td>
            <td>${producto.title}</td>
            <td>${producto.cant.toLocaleString("es", { useGrouping: true })}</td>
            <td>${precioFormateado}</td>
            <td>${subtotalFormateado}</td>
        </tr>
    `;
    }).join("");

    const totalPrecioFormateado = formatearMoneda(totalPrecio);

    const tablaHTML = `
    <div class="text-center">
        <table class="table table-striped table-bordered table-hover table-sm tablaCarrito" >
        <thead class="table-dark">
            <tr>
              <th>Imagen</th>
              <th>Título</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Total</th>

            </tr>
        </thead>
        <tbody>
            ${carritoTabla}
            <tr>
            <td colspan="2"></td>
            <td>${totalCantidad.toLocaleString("es", { useGrouping: true })}</td>
            <td></td>
            <td>${totalPrecioFormateado}</td>
           
            </tr>
        </tbody>
        </table>
    </div>
    `;

    Swal.fire({
    position: "top-end",
    title: "Carrito",
    html: tablaHTML,
    width:'700px',
    });
}
  return (
    <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Detalle del Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-md-6'>
              <img src={item.thumbnail} alt={item.title} className="img-fluid img-thumbnail" />
            </div>
            <div className='col-md-6'>
              <h3>{item.title}</h3>
             
              <p className="lead">
                <b>Marca: </b>{item.brand}
                <br/><b>Categoria: </b>{item.category}
                <br/><b>Stock: </b>{item.stock}
                <br/><b>Clasificación: </b>{item.rating}
                </p>
              <p className='lead small'><b>Descripción: </b>{item.description}</p> 

              <h3 className="text-danger"><b>Precio: </b>{item.price.toFixed(0).toLocaleString()}$</h3>

              <h5>Comprar</h5>
                        <div className='d-flex'>
                            <h5 className='text-danger pt-1'><b>Cantidad : </b> </h5>
                            <div className='d-flex justify-content-center mx-3 border-3 ' >
                                    <p className='p-1' type = "button" onClick={() => disminuirCant()}>
                                        <DashCircleFill color="red" size={30} />
                                    </p>
                                    <h4 className='p-1'>{cantidad}</h4>
                                    <p className='p-1' type = "button" onClick={() => sumarCant()}>
                                        <PlusSquareFill color="green" size={30}/>
                                    </p>
                            </div>
                        </div>
                        <button className='btn btn-danger me-2' onClick={() => onAddProduct(item)}>  <CartFill  size={30} /> Agregar al Carrito</button>
                        <button className='btn btn-info me-2'   onClick={() =>  verCarrito() }>  <CartFill  size={30} /> Ver Carrito</button> 
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
    </Modal>
  );
}

export default Detalle;