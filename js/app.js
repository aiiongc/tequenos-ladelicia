const contenidoTienda = document.getElementById("contenidoTienda");
const contenidoClientes = document.getElementById("contenidoClientes");
const activarCarrito = document.getElementById("activarCarrito");
const carritoContenedor = document.getElementById("carritoContenedor");
const contadorCarrito = document.getElementById("contadorCarrito");
const toastBtn = document.querySelector("#toastify")

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


// Generador de productos en tienda
    productos.forEach((album)=> {
        let contenido = document.createElement("div");
        contenido.className = "tiendaCard"
        contenido.innerHTML = `
        <img class="productImg" src="${album.img}">
        <h3>${album.nombre}</h3>
        <p class="artista">${album.artista}<p>
        <p class="precio">$${album.precio}</p>
        `;

        contenidoTienda.append(contenido);

// Boton para añadir productos al carrito
        let botonCompra = document.createElement("button");
        botonCompra.className = "botonCarrito"
        botonCompra.innerText = "Agregar al carrito";

        contenido.append(botonCompra);

        botonCompra.addEventListener("click", () => {
            carrito.push({
                id : album.id,
                img: album.img,
                nombre : album.nombre,
                precio : album.precio,
            });

            Toastify({
                text: "Producto agregado al carro con éxito",
                className: "toastify",
                duration: 2000,
                gravity: "top",
                position: "left",
                style: {
                    background: "orange",
                    },
                }).showToast();
            carritoContador();
            almacenamientoLocal();
        });
    });

const almacenamientoLocal = () => {
localStorage.setItem("carrito", JSON.stringify(carrito));
};
carritoContador();


// SCROLL A SECCIONES
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
