// Funcion para mostrar el carrito
const funcionCarrito = () => {
    carritoContenedor.innerHTML = "";
    carritoContenedor.style.display = "flex";
    const carritoHeader = document.createElement ("div");
    carritoHeader.className = "carrito-header";
    carritoHeader.innerHTML = `
        <h2 class="carrito-header-titulo">Tus compras<h2>
    `;
    
    carritoContenedor.append(carritoHeader);
    
    const cerrarCarrito = document.createElement("p");
    cerrarCarrito.innerText = "X";
    cerrarCarrito.className = "x-carrito";

    cerrarCarrito.addEventListener("click", () => {
        carritoContenedor.style.display = "none";
    });

    carritoHeader.append(cerrarCarrito);

// Generador de productos en carrito
    if (carrito.length > 0){
    carrito.forEach((album) => {
        let carritoContenido = document.createElement("div");
        carritoContenido.className = "carrito-contenido";
        carritoContenido.innerHTML = `
            <img class="album-cover" src="${album.img}">
            <p class="nombre-album">${album.nombre}<p>
            <p class= "precio-album">$ ${album.precio}</p>
            <img class= "eliminar-producto" src="./assets/img/eliminar.png"> 
        `;
        carritoContenedor.append(carritoContenido);
        
// Eliminar producto del carrito
        let eliminar = carritoContenido.querySelector(".eliminar-producto");
        eliminar.addEventListener("click", ()=> {
            eliminarDisco(album.id);
            Toastify({
                text: "X Producto eliminado",
                className: "toastify",
                duration: 2000,
                gravity: "top",
                position: "left",
                style: {
                    background: "red",
                    },
                
                }).showToast();
            })
        });
    
// Botón para vaciar el carrito
    let vaciarCarrito = document.createElement("button");
    vaciarCarrito.className = "vaciar-btn";
    vaciarCarrito.innerText = "Vaciar carrito";
    carritoContenedor.append(vaciarCarrito);

    vaciarCarrito.addEventListener("click", ()=>{
        carrito = [];
        funcionCarrito();
        localStorage.clear();
        carritoContador();
    });

// Calcular total a pagar
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    const totalCompra = document.createElement("div")
    totalCompra.className = "total-contenido"
    totalCompra.innerHTML = `Total a pagar: $ ${total}`;
    carritoContenedor.append(totalCompra);

// Condicional para mensaje de carrito vacío
    } else {
    const carritoTexto = document.createElement ("p");
    carritoTexto.className = "carrito-texto";
    carritoTexto.innerText = "Tu carrito está vacío"
    carritoContenedor.append(carritoTexto);
}
};

activarCarrito.addEventListener("click", funcionCarrito);

const eliminarDisco = (id) => {
    const foundId = carrito.find((element) => element.id === id);
    
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoContador();
    almacenamientoLocal()
    funcionCarrito();
};

// Contador de productos en icono de carrito
const carritoContador = () => {
    contadorCarrito.style.display = "block";

    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
    contadorCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
};

