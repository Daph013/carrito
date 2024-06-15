import { useState } from "react";
import { CartFill, DashCircleFill, PlusSquareFill } from "react-bootstrap-icons";
import Swal from 'sweetalert2'
const Detalle = ({ item, carrito, setCarrito }) => {
  const [cantidad, setCantidad] = useState(1)
  
 
 
  return (
    <div
      className="modal fade"
      id={item.id}
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-theme="dark"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <ModalHeader item={item} />
          <ModalBody item={item} />
          <ModalFooter />
        </div>
      </div>
    </div>
  );
};

const ModalHeader = ({ item, carrito, setCarrito }) => {
  const [cantidad, setCantidad] = useState(1)
  return (
    <div className="modal-header">
      <h1 className="modal-title fs-5" id="exampleModalLabel">
        {item.title}
      </h1>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      />
    </div>
  );
};

const ModalBody = ({ item }) => {
  return (
    <div className="modal-body">
      <div className="row py-2">
        <div className="col-md-4">
          <img
            src={item.thumbnail}
            className="card-img-top img-thumbnail"
            alt="..."
            loading="lazy"
          />
        </div>
        <div className="col-md-8">
          <ProductDetails item={item} />
        </div>
      </div>
    </div>
  );
};
const onAddProduct = (item, carrito, setCarrito) => {
  const prod = item;
  prod["cant"] = cantidad;
  // Verificar si el producto ya está en el carrito
  const productoExistenteIndex = carrito.findIndex((item) => item.id === prod.id);
  if (productoExistenteIndex !== -1) {
    // Si el producto ya existe, reemplazarlo en el carrito
    const carritoActualizado = [...carrito];
    carritoActualizado[productoExistenteIndex] = prod;
    setCarrito(carritoActualizado);
    mostrarMensage("¡Actualizado!", "Producto actualizado en el carrito");
  } else {
    // Si el producto no existe, agregarlo al carrito
    setCarrito([...carrito, prod]);
    mostrarMensage("¡Agregado!", "Producto agregado al carrito");
  }
  
};
const verCarrito = () => {
  let totalCantidad = 0;
  let totalPrecio = 0;

  const carritoTabla = carrito.map((producto) => {
  const subtotal = producto.price * producto.cant;
  totalCantidad += producto.cant;
  totalPrecio += subtotal;

  const precioFormateado = formatearMoneda(producto.price);
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

const formatearMoneda = (valor) => {
  const resultado = valor.toLocaleString("es", {
    style: "currency",
    currency: "USD",
    useGrouping: true,
  });

  return resultado.replace("US$", "");
};

const ProductDetails = ({ item }) => {
  const [cantidad, setCantidad] = useState(1)
  function disminuirCant() {
    if (cantidad > 0) {
      setCantidad((cantidad) => cantidad - 1)
    }
  }
  function sumarCant() {
    setCantidad((cantidad) => cantidad + 1)
  }
  return (
    <>
      <h3>{item.category}</h3>
      <p>
        Marca: <span className="fw-light">{item.brand}</span>
      </p>
      <p>
        Stock: <span className="badge bg-info">{item.stock}</span>
      </p>
      <p>
        Garantia: <span className="fw-light">{item.warrantyInformation}</span>
      </p>
      <p>
        SKU: <span className="fw-light">{item.sku}</span>
      </p>
      <p>
        Rating: <span className="bg-success">{item.rating}</span>
      </p>
      <ul>
        Opiniones
        {item.reviews.map((rev) => (
          <li key={rev.id}>{rev.comment}</li>
        ))}
      </ul>
      <p className="lead fw-bold">
        Descripcion: <span className="fw-light">{item.description}</span>
      </p>
      <h3 className="text-danger">
        Precio: <span className="fw-bold">{item.price}$</span>
      </h3>
      <h5>Comprar</h5>
      <div className="d-flex">
        <h5 className='text-danger pt-1'><b>Cantidad : </b> </h5>
        <div className='d-flex justify-content-center mx-3 border-3 ' >
          <p className='p-1' type="button" onClick={() => disminuirCant()}>
            <DashCircleFill color="red" size={23} />
          </p>

          <h4 className='p-1'>{cantidad}</h4>
          <p className=' bi p-1 icon-50' type="button" onClick={() => sumarCant()}>
            <PlusSquareFill color="green" size={23} />
          </p>

        </div>
        <button className='btn btn-danger me-2' onClick={() => onAddProduct(item)}>  <CartFill size={30} /> Agregar al Carrito</button>
        <button className='btn btn-info me-2' onClick={() => verCarrito()}>  <CartFill size={30} /> Ver Carrito</button>

      </div>
    </>
  );
};

const ModalFooter = () => {
  return (
    <div className="modal-footer">
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-dismiss="modal"
      >
        Cerrar
      </button>
    </div>
  );
};
function mostrarMensage(titulo, texto) {
  Swal.fire({
    title: titulo,
    text: texto,
    icon: "success"
  });
}




export default Detalle;