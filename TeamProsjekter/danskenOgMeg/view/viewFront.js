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
          ${model.viewMenyCategories}
        </div>
        <div class="innhold">

        ${model.viewProductsHere}
        
        </div>
        <div class="footer">footer</div>
    </div>
  `

  return html;
};

// ---------------- FrontPage (Produkter) ---------------&&



