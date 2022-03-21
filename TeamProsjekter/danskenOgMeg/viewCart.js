
function updateViewCart(){
    html =
    `
    


<div class="pageCart">

    <div class="header">${Header()}</div>
    <div class="liteFelt">
            <ul>
                <li class="liteFeltLi">${searchfield()}</li>
                <li class="liteFeltLi"><button onclick="model.app.currentPage = 'FrontPage';updateView()">Tilbake</button></li>
                <li class="liteFeltLi"><button onclick="model.app.currentPage = 'Login';updateView()">Logg inn</button></li>
            </ul>
    </div>

    <div class="product">
    <img class="productImg" src="${model.shoppingCart.productImg}">
    ${model.shoppingCart.cartProducts} "Navn på produkt"
    </div>

    <div class="price">
    ${model.shoppingCart.productPrice} Kr 
    </div>

    
    <div class="quantity">
    <input class="quantityInput" type="number" value=${model.shoppingCart.cartProducts}>
    </div>

    <div class="removeBtn">
    <button class="removeBtn" onclick" >REMOVE</button>
    </div>

    <div class="buyBtn">
    <button class="buyBtn" onclick="purchase()"> Kjøp</button>
    </div>

    <div class="footer"> Footer </div>


</div>


    ` 
    return html;
};

/*shoppingCart: {
    totalPrice: 0,
    cartProducts:[],
    numberOfItems: 0, */