// ----------------------- Fram Side ----------------------------------
function updateViewFront() {

  let html = '';
  // model.app.currentPage = 'LoginMail'
  html += /*html*/`
    <div class="page">
        <div id="toTop" class="header">${Header()}</div>
        <div class="liteFelt">
            <ul>
                <li class="liteFeltLi1">${searchfield()}</li>
                <li class="liteFeltLi2"><button class="search-icon" onclick="searchfield();"><i class="fas fa-search"></i></button></li>
                <li class="liteFeltLi3">${slider()}Min/Max price: ${model.sliderValueIs}</li>
                <li class="liteFeltLi3"><button onclick="model.app.currentPage = 'Cart';updateView()">Handlevogn ${model.shoppingCart.cartProducts.length} Pris: ${model.shoppingCart.totalPrice}</button></li>
                <li class="liteFeltLi3"><button onclick="checkLoginStatus();updateView();">${model.app.showStatus}</button></li>
                <li class="liteFeltLi3"><button onclick="model.app.currentPage = 'viewCreateProduct'; updateView()">Legg til Produkt</button></li> 
            <ul>
        </div>
        <div class="meny">
          ${model.viewMenyCategories}
        </div>
        <div class="innhold">

        ${model.viewProductsHere}
        
        </div>
          <br>
          <div class="footer"><a class="toTopButton" href="#toTop">Back to top</a>
        </div>
    </div>
  `

  return html;
};




