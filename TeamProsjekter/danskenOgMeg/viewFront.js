function updateViewFront() {
    let liste = '';
    let html = '';
    for (let i = 0; i < model.categories.length;i++){
        liste +=  '<ul>'+ `<li class="dropDownList" onclick='showCategories(${model.categories[i].id})'>`
        + model.categories[i].name + '</li>'+ '</ul>'
    }
    html += /*html*/`
    <div class="page">
        <div class="header">${Header()}</div>
        <div class="liteFelt">
            <ul>
                <li class="liteFeltLi">${searchfield()}</li>
                <li class="liteFeltLi"><button onclick="model.app.currentPage = 'Cart';updateView()">Handlevogn ${model.shoppingCart.cartProducts.length} Pris: ${model.shoppingCart.totalPrice}</button></li>
                <li class="liteFeltLi"><button onclick="model.app.currentPage = 'Login';updateView()">Logg inn</button></li>
            <ul>
        </div>
        <div class="meny">
            <div>${liste}</div>
            <div  onclick="showSubCategories()">${showSubLister}</div>
        </div>
        <div class="innhold" onclick="addToCart()">${model.products.name}</div>
        <div class="footer">footer</div>
    </div>
  `

  return html;
}
// for (let i = 0; i < model.categories.length;i++){
    // liste += model.categories[i].name
    // }
//     html = 
//     <div class="page">
//         <div class="header">${Header()}</div>
//         <div class="meny">
//         <div class="innhold">innhold</div>
//         <div class="innhold1">innhold1</div>
//         <div class="footer">footer</div>
//     </div>




// /* <div class="col-1"> ${dropDown}${faen}</div> */

{/* <div class="row">
        <div class="col-1">
            <ul>
            <li onclick="showSubCategories(model.categories[0].id)">${model.categories[0].name}</li>
            ${subLister}
            <li onclick="showSubCategories(model.categories[1].id)">${model.categories[1].name}</li>
            <li onclick="showSubCategories(model.categories[2].id)">${model.categories[2].name}</li>
            <li onclick="showSubCategories(model.categories[3].id)">${model.categories[3].name}</li>
            <li onclick="showSubCategories(model.categories[4].id)">${model.categories[4].name}</li>
            <li onclick="showSubCategories(model.categories[5].id)">${model.categories[5].name}</li>
            <li onclick="showSubCategories(model.categories[6].id)">${model.categories[6].name}</li>
            <li onclick="showSubCategories(model.categories[7].id)">${model.categories[7].name}</li>
            </ul>
        </div>
    </div>   */}

//     html += /*html*/
//     `
// ${Header()}
// `
//     for(let i = 0; i < model.categories.length;i++){
//         html +=`
//         <div class="Cat-list">${model.categories[i].name}</div>`
//     }
//     html += /*html*/
//         `
//     <div class="col-2">Hei du</div>
//     <div class="col-3">Logg inn</div>
//     <div class="col-4" onclick="model.app.currentPage = 'Cart';updateView()">Handlevogn</div>
//     <button class="col-3> Cart </button>

//     `
// return html;