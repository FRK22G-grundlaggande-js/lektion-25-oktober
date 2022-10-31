let shoppingCart = [];
let products = document.querySelectorAll('button');

for(let i = 0; i < products.length; i++) {
    products[i].addEventListener('click', function(event) {
        let product = event.target.parentNode.getAttribute('data-product');
        shoppingCart.push(product);
        updateCart();
        listProductsInCart();
    });
}

function updateCart() {
    document.getElementById('productsInCart').innerHTML = shoppingCart.length;   
}

document.getElementById('open-cart').addEventListener('click', function() {
    listProductsInCart()
    document.getElementById('cart').classList.toggle('hide');
});

function listProductsInCart() {
    let cartProducts = '';
    for(let i = 0; i < shoppingCart.length; i++) {
        cartProducts += `<li><span class="product-title">Titel: </span>${shoppingCart[i]}</li>`;
    }
    document.getElementById('products').innerHTML = cartProducts;        
}