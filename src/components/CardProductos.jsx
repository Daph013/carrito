import Detalle from "./Detalle"


const CardProductos = ({item, carrito, setCarrito}) => {
  return (
    <div className=' col-sm-6 col-md-4 col-lg-3 mb-4'>
                <div className='card h-100'>
                    <div className='card-header'><img src={item.thumbnail} className='img-fluid' alt="" />
                        </div>
                            <div className='card-body text-center'><p>{item.title}</p>
                                <p>{item.stock}</p>
                            </div>
                                <div className='card-footer text-center'>
                                    <a className='btn btn-info' data-bs-toggle="modal" data-bs-target={`#${item.id}`}>Detalles</a>
                                </div>
                 </div>
              <Detalle key={item.id} item={item}/>

            </div>
            
  )
}

export default CardProductos