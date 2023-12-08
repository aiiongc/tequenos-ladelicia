clientes.forEach((clientes)=> {
    let clientesCard = document.createElement("div");
    clientesCard.className = "cardClientes"
    clientesCard.innerHTML = `
    <img class="clientes-img" src="${clientes.img}">
    <p class="titulo-clientes">${clientes.nombre}</p>
    <p class="clientes-descripcion">${clientes.descripcion}<p>
    <img class="rating" src="${clientes.stars}">
    `;

    contenidoClientes.append(clientesCard)});