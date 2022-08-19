const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?cs=srgb&dl=pexels-pixabay-276517.jpg&fm=jpg",
});
productList.push({
  name: "Camisa",
  price: 100,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?cs=srgb&dl=pexels-pixabay-276517.jpg&fm=jpg",
});
productList.push({
  name: "Pantalon",
  price: 200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?cs=srgb&dl=pexels-pixabay-276517.jpg&fm=jpg",
});

function renderProducts(arr) {
  for (product of productList) {
    //Se crea elemento div
    const productCard = document.createElement("div");
    //Se crea la clase product-card del elemento div
    productCard.classList.add("product-card");
    //Se crea la etiqueta img
    const productImg1 = document.createElement("img");
    //Se establece el atributo src con el valor de clave product.image
    productImg1.setAttribute("src", product.image);
    //Se crea el hijo del div product card, que es un img
    productCard.appendChild(productImg1);
    //Se crea el elemento div de product info
    const productInfo = document.createElement("div");
    //Se crea la clase product-Info del div
    productInfo.classList.add("product-info");
    //Se crea el hijo div con clase product-info del padre div con clase product-cart
    productCard.appendChild(productInfo);
    //Se crea un elemento contenedor div vacio que no tiene clase
    const productInfoDiv = document.createElement("div");
    //Se agrega ese elemento vacio div como hijo del div con clase product-info
    productInfo.appendChild(productInfoDiv);
    //Se crea el elemento parrafo
    const productPrice = document.createElement("p");
    //Se agrega como clave product.price para obtener de valor el precio
    productPrice.innerText = "$" + product.price;
    //Se crea el elemento parrafo para el nombre del producto
    const productName = document.createElement("p");
    //Se agrega el nombre del producto
    productName.innerText = product.name;
    //Se hace hijo la etiqueta parrafo para el precio del div vacio
    productInfoDiv.appendChild(productPrice);
    //Se hace hijo la etiqueta parrafo para el nombre del div vacio
    productInfoDiv.appendChild(productName);
    //Se crea la etiqueta figure sin clase
    const productFigure = document.createElement("figure");
    //Se crea la etiqueta para imagen img
    const productImg2 = document.createElement("img");
    //Se asigna de atributo el logo de agregar al carrito
    productImg2.setAttribute("src", "./assets/icons/bt_add_to_cart.svg");
    //Se agrega como hijo de la etiqueta figure a la imagen
    productFigure.appendChild(productImg2);
    //Se agrega como hijo del div con clase product-info a la etiqueta figure
    productInfo.appendChild(productFigure);
    //Se crea como hijo el div particular con clase product-card y se agrega al
    // div padre que tiene como clase card-container
    cardContainer.appendChild(productCard);
  }
}
renderProducts(productList);
