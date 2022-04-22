function viewCreateCategory() {
    let html = /*html*/
        `

<div class="header">${Header()}</div>

    <div class="cart-navigation">
        <button class="btn-cart-navigation" onclick="model.app.currentPage = 'FrontPage';updateView()">Tilbake</button>
    </div>
    `
    for (let i = 0; i < model.createCategory.length; i++) {
        const category = model.createCategory[i];
        
        
    }
    html = /*html*/
        `
        <div class="create-Category-wrapper">
        <input class="" id="" onchange="category.name = this.value" value="${category.name}" placeholder="Kategori Navn" type= "text">
       
  



        </div>
        `
    return html;
}




    // <input class="" id="" onchange="category.sub = this.value" value="${category.sub}" placeholder="Underkategori" type="text">
    //<input class="" id="" onchange="category.id = this.value" value="${category.id}" placeholder="Kategori ID" type="number">