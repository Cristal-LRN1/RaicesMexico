//Para saber si alguien inició sesión
if  (localStorage.getItem("login_success")){
  usuarioLogged = true
}else{
  usuarioLogged = false
}

  //Not logged in
  function headerRM(){
    return `<header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <nav class="navbar"> <!-- navbar para el link del logo -->
          <section> 
            <a class="navbar-brand" href="/index.html">
              <img src="/assets/Images/caco.png" alt="Raíces México" width="100"> <!---->
            </a> 
          </section>        
          <section class="container-flex">
            <span class="navbar-brand1 mb-0 fs-2">Raíces  México</span>
          </section>
        </nav>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <section class="container d-flex flex-column align-items-end h-50 mt-3 " style="
  margin-right: 0px;">  
          <ul class="navbar-nav my-2 my-lg-0" style="--bs-scroll-height: 100px;">
          <!--Permanecera oculto y solo sera visible para los artesanos-->
          <li class="nav-item me-2">
            <a class="nav-link" id="oculto" href="#">Agregar Productos</a>
          </li>
            <li class="nav-item me-2">
              <a class="nav-link" href="/pages/Lista de productos/catalogo.html">Productos</a>
            </li>
            <li class="nav-item me-2">
              <a class="nav-link" href="/pages/Contactanos/contactanos.html">Contáctanos</a>
            </li>
            <li class="nav-item me-2">
              <a class="nav-link" href="/pages/Sobre Nosotros/nosotros.html">Nosotros</a>
            </li>
            <!---->
            <li>

              <a class="nav-item me-2" id="cerrarSesion">
                <button type="button" style="display: none" class="btn btn-light align-items-end mb-2 rounded-pill"style=" width: 126px">Cerrar sesión</button>
              </a>
            </li>
            <li>
              <a class="nav-item me-2" href="/pages/Login/login.html">
                <button type="button" class="btn btn-light align-items-end mb-2 rounded-pill"style="
    width: 126px">Iniciar sesión</button>
              </a> </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="
      padding-top: 0px;">
                  <button type="button" class="btn btn-dark align-items-end mb-2 rounded-pill" style="
    width: 126px"> 
                  Registrate
                </button>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/pages/Formulario/Artesano/artesano.html">Soy artesano </a></li>
                  <li><a class="dropdown-item" href="/pages/Formulario/Compradores/formulario.html">Soy comprador </a></li>
                </ul>
              </li>
          </ul>
            
      <section >
          <form class="d-flex" role="search">
            <input class="form-control me-2 rounded-pill" id="input" type="search" placeholder="Buscar..." aria-label="Search">
            <button class="btn btn-light rounded-pill" type="submit">Buscar</button>
          </form>
        
        </div>
        </div>
      </section></section>
    </nav>
      
    </header>`

  }
    
  //CLIENTE logged in
    function clienteLoggedHeader(){
      return `<header>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <nav class="navbar"> <!-- navbar para el link del logo -->
            <section> 
              <a class="navbar-brand" href="/index.html">
                <img src="/assets/Images/caco.png" alt="Raíces México" width="100"> <!---->
              </a> 
            </section>        
            <section class="container-flex">
              <span class="navbar-brand1 mb-0 fs-2">Raíces  México</span>
            </section>
          </nav>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <section class="container d-flex flex-column align-items-end h-50 mt-3 " style="
    margin-right: 0px;">  
            <ul class="navbar-nav my-2 my-lg-0" style="--bs-scroll-height: 100px;">
            <!--Permanecera oculto y solo sera visible para los artesanos-->
            <li class="nav-item me-2">
              <a class="nav-link" href="/pages/Lista de productos/catalogo.html">Carrito compras</a>
            </li>
              <li class="nav-item me-2">
                <a class="nav-link" href="/pages/Lista de productos/catalogo.html">Productos</a>
              </li>
              <li class="nav-item me-2">
                <a class="nav-link" href="/pages/Contactanos/contactanos.html">Contáctanos</a>
              </li>
              <li class="nav-item me-2">
                <a class="nav-link" href="/pages/Sobre Nosotros/nosotros.html">Nosotros</a>
              </li>
              <!---->
              <li>

                <a class="nav-item me-2" id="cerrarSesion">
                  <button type="button" class="btn btn-light align-items-end mb-2 rounded-pill"style=" width: 126px">Cerrar sesión</button>
                </a>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="
      padding-top: 0px;">
                  <button type="button" class="btn btn-dark align-items-end mb-2 rounded-pill" style="
    width: 126px"> 
                  Registrate
                </button>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/pages/Formulario/Artesano/artesano.html">Soy artesano </a></li>
                  <li><a class="dropdown-item" href="/pages/Formulario/Compradores/formulario.html">Soy comprador </a></li>
                </ul>
              </li>
          </ul>
             
        <section>
            <form class="d-flex" role="search">
              <input class="form-control me-2 rounded-pill" id="input" type="search" placeholder="Buscar..." aria-label="Search">
              <button class="btn btn-light rounded-pill" type="submit">Buscar</button>
            </form>
          
          </div>
          </div>
        </section></section>
      </nav>
        
      </header>`
  }

  //ARTESANO logged in
  function artesanoLoggedHeader(){
    return `<header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <nav class="navbar"> <!-- navbar para el link del logo -->
          <section> 
            <a class="navbar-brand" href="/index.html">
              <img src="/assets/Images/caco.png" alt="Raíces México" width="100"> <!---->
            </a> 
          </section>        
          <section class="container-flex">
            <span class="navbar-brand1 mb-0 fs-2">Raíces  México</span>
          </section>
        </nav>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <section class="container d-flex flex-column align-items-end h-50 mt-3 " style="
  margin-right: 0px;">  
          <ul class="navbar-nav my-2 my-lg-0" style="--bs-scroll-height: 100px;">
          <!--Permanecera oculto y solo sera visible para los artesanos-->
          <li class="nav-item me-2">
            <a class="nav-link" href="/pages/Lista de productos/FormularioProductos/formularioProduct.html">Agregar Productos</a>
          </li>
            <li class="nav-item me-2">
              <a class="nav-link" href="/pages/Lista de productos/catalogo.html">Productos</a>
            </li>
            <li class="nav-item me-2">
              <a class="nav-link" href="/pages/Contactanos/contactanos.html">Contáctanos</a>
            </li>
            <li class="nav-item me-2">
              <a class="nav-link" href="/pages/Sobre Nosotros/nosotros.html">Nosotros</a>
            </li>
            <!---->
            <li>

              <a class="nav-item me-2" id="cerrarSesion">
                <button type="button" class="btn btn-light align-items-end mb-2 rounded-pill"style=" width: 126px">Cerrar sesión</button>
              </a>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="
    padding-top: 0px;">
                <button type="button" class="btn btn-dark align-items-end mb-2 rounded-pill" style="
  width: 126px"> 
                Registrate
              </button>
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/pages/Formulario/Artesano/artesano.html">Soy artesano </a></li>
                <li><a class="dropdown-item" href="/pages/Formulario/Compradores/formulario.html">Soy comprador </a></li>
              </ul>
            </li>
        </ul>
           
      <section>
          <form class="d-flex" role="search">
            <input class="form-control me-2 rounded-pill" id="input" type="search" placeholder="Buscar..." aria-label="Search">
            <button class="btn btn-light rounded-pill" type="submit">Buscar</button>
          </form>
        
        </div>
        </div>
      </section></section>
    </nav>
      
    </header>`
}


function footerRM(){
    return `<footer class="footer">
      <div class="container">
          <div class="footer-row" id="pie">
              <div class="footer-links">
                  <h4>Sobre Nosotros</h4>
                  <ul role="navigation">
                      <li><a href="/pages/Sobre Nosotros/nosotros.html">¿Quiénes somos?</a></li>
                      <li><a target="_blank" href="/assets/Images/MVV.png">Misión y visión</a></li>
                      <li><a href="/pages/Contactanos/contactanos.html">Involúcrate</a></li>
                      <li><a href="/pages/Sobre Nosotros/nosotros.html#equipoChicatana">Conoce al equipo</a></li>
                  </ul>
              </div>
              <div class="footer-links">
                  <h4>Politíca de privacidad</h4>
                  <ul>
                      <li><a target="_blank" href="/assets/PDFs/POLÍTICA DE PRIVACIDAD.pdf">Política de privacidad</a></li>
                      <li><a target="_blank" href="/assets/PDFs/como funcionamos.pdf">¿Cómo funcionamos?</a></li>
                      <li><a target="_blank" href="/assets/PDFs/Asuntos Economicos.pdf">Asuntos económicos</a></li>
                  </ul>
              </div>
              <div class="footer-links">
                  <h4>Servicio al cliente</h4>
                  <ul>
                      <li><a target="_blank" href="/assets/PDFs/Terminos_condiciones.pdf">Términos y Condiciones</a></li>
                      <li><a href="/pages/Contactanos/contactanos.html">¿Necesitas ayuda?</a></li>
                      <li><a target="_blank"href="/assets/PDFs/Métodos_pago.pdf">Métodos de pago</a></li>
                  </ul>
              </div>
              <div class="footer-links">
                  <h4>Aviso de copyright</h4>
                  <ul>
                      <li><a target="_blank" href="/assets/PDFs/AVISO DE COPYRIGHT.pdf">©2024 Todos los derechos reservados. Raíces-MX® es una marca registrada de E-MX-HANDS.</a></li>
                  </ul>
              </div>
              <div class="footer-links">
                  <h4>Síguenos</h4>
                  <div class="social-link">
                      <a target="_blank" href="https://www.facebook.com/profile.php?id=61569948054140"><i class="fab fa-facebook"></i></a>
                      <a target="_blank" href="https://www.instagram.com/e.mex.hands.raicesmexico/"><i class="fab fa-instagram"></i></a>
                      <a target="_blank" href="https://x.com/RaicesMexico_E"><i class="fab fa-twitter"></i></a>
                  </div>
              </div>
          </div>
      </div>
    </footer>`
}

if (!usuarioLogged){//Para cuando un usuarix no ha iniciado sesión
  console.log("not logged")
  document.getElementById('Header').innerHTML= headerRM();
}else{
  console.log("Usuario logged")

  if((localStorage.getItem("login_success")) == "cliente"){ //Header de cliente
    document.getElementById('Header').innerHTML= clienteLoggedHeader();
  }else{ //Header de artesano
    document.getElementById('Header').innerHTML= artesanoLoggedHeader();
  }   
}

document.getElementById('Footer').innerHTML= footerRM();

//Para cerrar sesión, trae el header con la opción de iniciar sesión
//y remueve opciones de compra o agregar porductos.
const cerrarSesion = document.getElementById("cerrarSesion");

cerrarSesion.onclick = () => {
  console.log("cerrando sesión")
  localStorage.removeItem("login_success");
  localStorage.removeItem("user_logged");

    Swal.fire({
        icon: "success",
        title: "Cerrando sesión",
        showConfirmButton: false,
        timer: 1800,
    });

    setTimeout(() => {
        window.location.href = "/index.html";
    }, 1800);
}
