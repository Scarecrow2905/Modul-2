function viewProduct() {
    html = `
<div class="product-main">

    <div class="product-main-header">${Header()}</div>

    <div class="product-navigation">
    <button class="btn-product-navigation" onclick="model.app.currentPage = 'FrontPage'; updateView()">Tilbake</button>
    <button class="btn-product-navigation" onclick="checkLoginStatus();updateView();">${model.app.showStatus}</button>

    </div>

    <div class="currentProduct">
    ${viewProductItem()}
    </div>

    <div class="product-quantity product-column">
    <input class="product-quantity-input" type="number"


</div>
    `

    return html;
};

function viewProductItem() {
    let result = '';
    for (let i = 0; i < model.products.length; i++)
    result = `<section class="showProduct">
            <h2 class ="product-header"> ${model.products[i].title}</h2>
            <div class="product-row">

                <div class="product-item product-column">
                <span class="product-item-image" src="${model.products.img}"</span>
                <span class="prduct-item-description"${model.products.description}"</span>
                </div>
    
            </div>

               

    `
    return result;
}

function modalWindowPopup(index){
    model.modalPopupInformation = index;
    model.app.currentPage = 'viewProduct';
    updateView();
}