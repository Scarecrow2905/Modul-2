// Legg til i Handlekurv
function addToCart(index) {
    if (model.product[index].stock == 0) alert('Ikke på lager');
    else {
        model.products[index].stock --;
        model.shoppingCart.numberOfItems ++;
        model.shoppingCart.totalPrice += model.products[index].price;
        model.shoppingCart.push(model.products[index].title)
    }
    viewStore();
    
}

function purchase(index) {
    if (model.shoppingCart[index] === 0) alert('Ingenting i handlekurv');
    else {
        alert('Takk for handelen!')
    }
}

function removeCart(index) {
    if (model.shoppingCart.cartProducts === 0) alert('Ingenting å fjerne');
    else {
        model.shoppingCart.cartProducts --;
    }
}