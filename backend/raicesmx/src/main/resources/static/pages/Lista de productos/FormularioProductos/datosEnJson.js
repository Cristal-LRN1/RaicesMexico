// Lista de productos obtenida del localStorage o vacía
//let listaDeProductos = JSON.parse(localStorage.getItem('productos')) || [];

/*-----------------------------------------------------------------------------------*/
// Función para obtener los datos del formulario y convertirlos en formato JSON
/*-----------------------------------------------------------------------------------*/
// Agregar el event listener al botón de envío
const btnEnviar = document.getElementById('enviar');
btnEnviar.addEventListener('click', obtenerDatosFormulario);

// Función para obtener los datos del formulario y convertirlos en formato JSON
function obtenerDatosFormulario(event) {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    // Recuperar los datos del formulario
    const id = document.getElementById('id').value;
    const imagen = document.getElementById('imagen').value;
    const name = document.getElementById('name').value;
    const precio = document.getElementById('precio').value;
    const inventario = document.getElementById('inventario').value;
    const categoria = document.getElementById('categoria').value;
    const estado = document.getElementById('estado').value;
    const descripcion = document.getElementById('descripcion').value;

    // Validación básica para evitar campos vacíos
    if (id===""){
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Ingresa id";
        return;
    }
    else if (imagen===""){
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Ingresa imagen";
        return;
    }
    else if(name==="" || name.match(/[0-9]/g)){
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Ingresa un nombre valido para tu producto";
        return;
    }
    else if(precio==="" || precio.match(/[a-z]/g)){
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Ingresa un precio valido";
        return;
    }
    
    else if(inventario===""){
        
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Ingresa numero de inventario";
        return;
    }
    else if(categoria==="EligeUnaOpcion"){
        
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Por favor elige una categoría ";
        return;
    }
    else if(estado==="EligeUnaOpcion"){
        
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Por favor elige un estado ";
        return;
    }
    else if(descripcion===""){
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Ingresa una descripción";
        return;
    } else {
      // Crear un objeto con los datos
    const datosProducto = {
        
        id_artesano:id,
        imagen_url: imagen,
        nombre: name,
        precio: parseFloat(precio), // Convertir el precio a número
        stock: parseInt(inventario), // Convertir inventario a número
        descripcion: descripcion,
        id_categorias: categoria,
        id_status: estado,
        id_pedido: 1 //Momentaneamente


    };

    // Comenzar con la llamada de la API (fetch, asynch-await, axios)
    const url = `http://3.137.210.18/api/v1/producto/new-producto`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosProducto)
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            console.log('Guardado', data)
        })
        .catch(error => {
            console.error(error);
        })

        //Ya lo guarda en postman

    // Guardar el producto en la lista de productos
    //listaDeProductos.push(datosProducto);
    // Guardar la lista de productos en localStorage
    //localStorage.setItem('productos', JSON.stringify(listaDeProductos));
    // Limpiar el formulario
    document.getElementById('formProduct').reset();
    location.reload();
    // Mostrar los productos actualizados
    mostrarProductos();
}}
/*-----------------------------------------------------------------------------------*/
// Función para consumir una Api get Obtener los datos de productos
/*-----------------------------------------------------------------------------------*/
const url = "http://3.137.210.18/api/v1/producto/getall";
console.log("antes del fetch");
//Función para consumir una Api
function obtenerProductos() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la red');
            }
            return response.json();
        })
        .then(data => {
            mostrarProductos(data); // Llama a mostrarProductos con los datos obtenidos
        })
        .catch(error => {
            console.error("Error al obtener los productos:", error);
        });
}
//----------------------
fetch(url, {
    method: 'GET'
}).then((response) => {
    // El primer .then recibe la respuesta 
    // Es una promesa respuesta
    return response.json();
}).then((data) => {
    // Trabaja con la data de la respuesta
    console.log(data);
    //localStorage.setItem("nombrePokemon", data.name);
    //listaDeProductoslistaDeProductos = data;
    // Llama a peleaPokemon aquí, después de que se haya almacenado el nombre
    mostrarProductos(data);
    //peleaPokemon();
}).catch((error) => {
    console.error("ups no se que paso", error);
});

console.log("Prueba del fetch");

//function peleaPokemon() {
   // const miPrimerPokemon = localStorage.getItem("nombrePokemon");
    // técnicamente la clave del valor clave-valor
  //  console.log("primerContrincante:" + miPrimerPokemon);
//}

/*-----------------------------------------------------------------------------------*/
// Función para mostrar los productos guardados
/*-----------------------------------------------------------------------------------*/
function mostrarProductos(listaDeProductos) {
    const productosContainer = document.querySelector('.productos-container');
    productosContainer.innerHTML = ''; // Limpiar el contenedor antes de mostrar nuevos productos

    listaDeProductos.forEach(producto => {

        const productoDiv = document.createElement('div');
        productoDiv.classList.add('card');
        productoDiv.innerHTML = ` 
            <div class="card" style="width: 18rem;">
                <img src="${producto.imagen_url}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <center><h5 class="card-title">${producto.nombre}</h5></center>
                    <p class="card-text">${producto.descripcion}</p>
                    <center>
                        <p class="card-text">Precio: $${producto.precio}</p>
                        <p class="card-text">Inventario: ${producto.stock}</p> 
                        <a href="#" class="btn btn-primary" onclick="updateData(${producto.id_producto})">Editar</a>                    
                        <a href="#" class="btn btn-danger" onclick="eliminarProducto(${producto.id_producto})">Eliminar</a>  
                    </center>
                </div>
            </div>
        `;
        productosContainer.appendChild(productoDiv);
    });
}
obtenerProductos();

/*-----------------------------------------------------------------*/
//Función para Eliminar todos los productos
/*-----------------------------------------------------------------*/
const btnEliminarTodos = document.getElementById('eliminarTodos');
btnEliminarTodos.addEventListener('click', eliminarTodosLosProductos);
// Función para eliminar todos los productos
function eliminarTodosLosProductos() {
    // Limpiar el localStorage
    localStorage.removeItem('productos');
    
    // Vaciar la lista de productos en el array
    listaDeProductos = [];
    
    // Actualizar la interfaz de usuario
    mostrarProductos();
}
/*-----------------------------------------------------------------*/
// Función para editar producto
/*-----------------------------------------------------------------*/
const btnUpdate = document.getElementById('Update');
btnUpdate.style.display = "none"; 
const btnCancelar = document.getElementById('Cancelar');
btnCancelar.style.display = "none"; 
// Función para editar producto
function updateData(id_producto) {
    const url = `http://3.137.210.18/api/v1/producto/get/${id_producto}`;
    console.log(url, id_producto);
    fetch(url, {
        method: 'GET'
    }).then((response) => {

        return response.json();
    }).then((data) => {
        
    //document.getElementById('id').value = data.id_artesano;
    document.getElementById('imagen').value = data.imagen_url;
    document.getElementById('name').value = data.nombre;
    document.getElementById('precio').value = data.precio;
    document.getElementById('inventario').value = data.stock;
    //document.getElementById('categoria').value = data.id_categorias;
    //document.getElementById('estado').value = data.id_status;
    document.getElementById('descripcion').value = data.descripcion;
           }).catch((error) => {
        console.error(":( ", error);
    });
    // Ocultar el botón de Enviar y mostrar el de Actualizar
    document.getElementById("enviar").style.display = "none";
    btnUpdate.style.display = "block";
    btnCancelar.style.display = "block";

    // Agregar evento al botón de actualización
    btnUpdate.addEventListener('click', function () {
    // Recuperar los datos del formulario
    const id = document.getElementById('id').value;
    const imagen = document.getElementById('imagen').value;
    const name = document.getElementById('name').value;
    const precio = document.getElementById('precio').value;
    const inventario = document.getElementById('inventario').value;
    const categoria = document.getElementById('categoria').value;
    const estado = document.getElementById('estado').value;
    const descripcion = document.getElementById('descripcion').value;
        // Validación básica para evitar campos vacíos
    if (id===""){
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Ingresa id";
        return;
    }
    else if (imagen===""){
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Ingresa imagen";
        return;
    }
    else if(name==="" || name.match(/[0-9]/g)){
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Ingresa un nombre valido para tu producto";
        return;
    }
    else if(precio==="" || precio.match(/[a-z]/g)){
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Ingresa un precio valido";
        return;
    }
    else if(categoria==="EligeUnaOpcion"|| categoria===""){
        
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Por favor elige una categoría ";
        return;
    }
    else if(estado==="EligeUnaOpcion"|| estado===""){
        
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Por favor elige un estado ";
        return;
    }
    else if(descripcion===""){
        document.getElementById("uno").className= "alert alert-danger";
        document.getElementById("uno").setAttribute("role","alert");
        document.getElementById("uno").textContent="Ingresa una descripción";
        return;
    } else {
        const editProducto = {
            id_producto:id_producto,
            imagen_url: imagen,
            nombre: name,
            precio: parseFloat(precio), // Convertir el precio a número
            stock: parseInt(inventario), // Convertir inventario a número
            descripcion: descripcion         
    
        };
          
        // Comenzar con la llamada de la API (fetch, asynch-await, axios)
        const url = `http://3.137.210.18/api/v1/producto/update/${id_producto}`;
        
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editProducto)
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)

            })
            .catch(error => {
                console.error(error);
            })


        
        // Ocultar el botón de Actualizar y mostrar el de Enviar nuevamente
        document.getElementById("enviar").style.display = "block";
        btnUpdate.style.display = "none";
            // Agregar evento al botón de cancelar
        btnCancelar.addEventListener('click', function () {
            location.reload();
        
        });
        
    }
    location.reload();
    });
    } 

/*-----------------------------------------------------------------*/


/*-----------------------------------------------------------------*/
// Función para eliminar un producto de la lista
/*-----------------------------------------------------------------*/
function eliminarProducto(id_producto) {
    const url = `http://3.137.210.18/api/v1/producto/delete/${id_producto}`;
console.log("antes del fetch");
//Función para consumir una Api
//----------------------
fetch(url, {
    method: 'DELETE'
}).then((response) => {
    // El primer .then recibe la respuesta 
    // Es una promesa respuesta
    console.log("función de eliminar");
    return response.json();
}).then((data) => {
    // Trabaja con la data de la respuesta
    
    console.log(data);
    //localStorage.setItem("nombrePokemon", data.name);
    //listaDeProductoslistaDeProductos = data;
    // Llama a peleaPokemon aquí, después de que se haya almacenado el nombre
    //mostrarProductos(data);
    //peleaPokemon();
    

}).catch((error) => {
    console.error("ups no se que paso", error);
});

console.log("Despues del fetch");
    // Filtrar el producto que no se desea eliminar
    //listaDeProductos = listaDeProductos.filter(producto => producto.id !== id);

    // Actualizar el localStorage
    //localStorage.setItem('productos', JSON.stringify(listaDeProductos));

    // Mostrar los productos actualizados
    
    location.reload();
}
