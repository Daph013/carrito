import React from 'react'

const HeroInicio = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src="/bannerhero1.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
    </div>
    <div className="col-lg-6">
        <hr />
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">REACT</h1>
      <p className="lead">React (también conocido como React.js o ReactJS) es una biblioteca de JavaScript de código abierto y gratuita para construir interfaces de usuario basadas en componentes. Es mantenida por Meta (anteriormente Facebook) y una comunidad de desarrolladores individuales y empresas. React se utiliza para desarrollar aplicaciones de una sola página, móviles o renderizadas en el servidor con frameworks como Next.js. Se centra únicamente en la interfaz de usuario y en renderizar componentes en el DOM. Además, se puede utilizar en una amplia variedad de aplicaciones web, como aplicaciones de una sola página (SPA) e incluso aplicaciones móviles, con un ecosistema completo de módulos, herramientas y componentes que pueden ayudar en el desarrollo 
.
React se destaca por su enfoque en componentes, que son piezas de código lógicas y autocontenidas que describen una parte de la interfaz de usuario. Además, utiliza JSX, una extensión de la sintaxis de JavaScript que simplifica las estructuras de código complejas al permitir a los desarrolladores incrustar código HTML en objetos JavaScript. JSX también ayuda a combatir los ataques de Cross-Site Scripting (XSS) al convertir los valores incrustados en cadenas antes de renderizarlos 
 
.
En resumen, React es una biblioteca de JavaScript que se utiliza para construir interfaces de usuario de manera eficiente, con un enfoque en componentes y un amplio alcance de aplicaciones en el desarrollo web y móvil.</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
      <a href='https://es.react.dev/' type="button" className="btn btn-primary btn-lg px-4 me-md-2">Ir A La Pagina Web</a>
      </div>
    </div>
  </div>
  <div className="row flex-lg-row align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src="/heroinicio2.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
    </div>
    <div className="col-lg-6">
        <hr />
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">DummyJson</h1>
      <p className="lead">DummyJSON es una herramienta que proporciona una API REST falsa de datos JSON para el desarrollo, pruebas y prototipos. Con DummyJSON, puedes obtener rápidamente datos realistas para tus proyectos de front-end sin tener que configurar un servidor complicado. Es perfecto para el desarrollo de front-end, la enseñanza, las pruebas y la creación de prototipos. Puedes explorar la documentación detallada en DummyJSON/Docs para obtener ejemplos rápidos.
    </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Ir A La Pagina Web</button>
        
      </div>
    </div>
  </div>
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src="/heroinicio3.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
    </div>
    <div className="col-lg-6">
        <hr />
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">BOOTSTRAP</h1>
      <p className="lead">Bootstrap es un framework de desarrollo web gratuito y de código abierto que facilita el proceso de creación de sitios web responsivos y orientados a dispositivos móviles. Proporciona una colección de sintaxis para diseños de plantillas y estilos para una amplia variedad de componentes y elementos de interfaz. Bootstrap es ampliamente utilizado debido a su facilidad de uso, su estructura de archivos sencilla y su capacidad para adaptarse a diferentes tamaños de pantalla. Permite a los desarrolladores y diseñadores web crear sitios web de manera eficiente y garantiza que los elementos de la interfaz funcionen de manera óptima en todos los dispositivos.

</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
      <button  type="button" className="btn btn-primary btn-lg px-4 me-md-2">Ir A La Pagina Web</button>
      </div>
    </div>
  </div>
</div>


  )
}

export default HeroInicio