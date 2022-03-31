function updateViewCart(){
    html = `
<div class="cart-main">

    <div class="cart-main-header">${Header()}</div>

    <div class="cart-navigation">
    <button class="btn-cart-navigation" onclick="model.app.currentPage = 'FrontPage';updateView()">Tilbake</button>
    <button class="btn-cart-navigation" onclick="model.app.currentPage = 'LoginMail';updateView()">Logg inn</button>
    </div>

    <div class="newProduct">
    ${createCartItems()}
    </div>


    <div class="cart-total">
    <strong class="cart-total-title">Totalt</strong>
    <span class="cart-total-price">${model.shoppingCart.totalPrice} kr </span>

    <button class="btn-buy" onclick="model.app.currentPage = 'PayPage';updateView()"> Kjøp</button>
    </div>

</div>
` 
return html;
};

function createCartItems(){
    var result = '';

    for (let i = 0; i < model.shoppingCart.cartProducts.length; i++) {
    result += `<section class="newProduct">
                    <h2 class="cart-header"> Handlekurv </h2>
                    <div class="cart-row">
                        <span class="cart-item cart-header cart-column">ITEM </span>
                        <span class="cart-price cart-header cart-column">PRICE </span>
                        <span class="cart-quantity cart-header cart-column"> QUANTITY </span>
                    </div>

                    <div class="cart-row"> 
                        <div class="cart-item cart-column">
                            <img class="cart-item-image" src="${model.shoppingCart.cartProducts[i].img}">
                            <span class="cart-item-title"> ${model.shoppingCart.cartProducts[i].title} </span>
                        </div>
                            <span class="cart-price cart-column">${model.shoppingCart.cartProducts[i].price} kr </span>
                        <div class="cart-quantity cart-column">
                            <input class="cart-quantity-input" type="number" value="${model.shoppingCart.quantity}">
                            <button class="btn btn-danger cart-quantity-button" type"button">REMOVE</button>
                    </div>

                </div> `
    }
    return result;
}

