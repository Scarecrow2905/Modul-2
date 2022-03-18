
function updateViewCart(){
    html =
    `${Header()}


    <div class="col-1h">
    
    <img class="productImg" src="${model.shoppingCart.productImg}">
    <div>${model.shoppingCart.cartProducts} "Navn på produkt" </div>
    <hr>
    </div>

    <div class="col-2h">
    ${model.shoppingCart.productPrice} Kr 
    <hr>
    </div>

    <div class="col-3h">

    <input class="quantityInput" type="number" value=${model.shoppingCart.cartProducts}>
    <hr>
    </div>

    <div class="col-4h">

    <button class="removeBtn" onclick" >REMOVE</button>
    <hr>
    </div>

    <div class="col-5h">

    <button class="buyBtn" onclick="purchase()"> KJØP </button>

    </div>



    ` 
    return html;
};

/*shoppingCart: {
    totalPrice: 0,
    cartProducts:[],
    numberOfItems: 0, */