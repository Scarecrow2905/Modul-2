// ----------------------- Fram Side ----------------------------------
function updateViewFront() {
    
    let html = '';
   // model.app.currentPage = 'LoginMail'
    html += /*html*/`
    <div class="page">
        <div class="header">${Header()}</div>
        <div class="liteFelt">
            <ul>
                <li class="liteFeltLi">${searchfield()}</li>
                <li class="liteFeltLi"><button onclick="model.app.currentPage = 'Cart';updateView()">Handlevogn ${model.shoppingCart.cartProducts.length} Pris: ${model.shoppingCart.totalPrice}</button></li>
                <li class="liteFeltLi"><button onclick="checkLoginStatus();updateView();">${model.app.showStatus}</button></li> 
            <ul>
        </div>
        <div class="meny">
          ${model.fuckLister0}
        </div>
        <div class="innhold">

        ${productsMain()}
        
        </div>
        <div class="footer">footer</div>
    </div>
  `

  return html;
};

// ---------------- FrontPage (Produkter) ---------------&&


function productsMainA(){
    var result = '';

    for (let i = 0; i < model.products.length; i++){
    result += /*html*/`
    
        <div class="front-item front-column">
            <div> 
                <img class="front-item-image" src="${model.products[i].img}"/>
                <span class="front-item-title">${model.products[i].title}</span>
                <p>stock: ${model.products[i].stock}</p>
            </div>
                <span class="front-price front-column">${model.products[i].price}kr</span>
                <button type="button" class="front-item-btn" onclick="addToCart(${model.products[i].categoryId})">Legg til handlekurv</button>
        </div>

    `
    }
    
    return result;
};
function productsMain(){
    var result = '';

    for (let i = 0; i < model.products.length; i++){
        let first = i % 3 == 0 ? 'first' : '';
    result += /*html*/`
    
        <div class="rows ${first}">
            <div> 
                <img class="front-item-image" src="${model.products[i].img}"/>
                <div class="front-item-title">${model.products[i].title}</div>
                <div class="front-price">${model.products[i].price}kr</div>
                <div class="stock">stock: ${model.products[i].stock}</div>
                <button type="button" class="front-item-btn" onclick="addToCart(${model.products[i].categoryId})">Legg til handlekurv</button>
            </div>
        </div>

    `
    }
    
    return result;
};


