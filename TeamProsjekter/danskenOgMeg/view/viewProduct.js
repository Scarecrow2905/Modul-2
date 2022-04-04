function viewProduct () {
    html = `
<div class="product-main">

    <div class="product-main-header">${Header()}</div>

    <div class="product-navigation">
    <button class="btn-product-navigation" onclick="model.app.currentPage = 'FrontPage'; updateView()">Tilbake</button>
    <button class="btn-product-navigation" onclick="checkLoginStatus();updateView();">${model.app.showStatus}</button>

    </div>

    <div class="currentProduct">
    ${createProductItem()}
    </div>

    <div class="product-quantity product-column">
        <input class="product-quantity-input" type="number"


</div>
    `

return html;
};






