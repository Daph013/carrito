import React from 'react'

const Carrusel = () => {
  return (
   <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="banner1.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="banner2.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="banner3.png" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

  )
}

export default Carrusel