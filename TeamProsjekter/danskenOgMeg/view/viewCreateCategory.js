function viewCreateCategory() {

    for (let i = 0; i < model.createCategory.length; i++) {
        const category = model.createCategory[i];

        html += /*html*/
            `
        <input class="" id="" onchange="category.name = this.value" value="${category.name}" placeholder="Kategori Navn" type= "text">
        <button onclick="idCountCategory();">mekk ny Categori</button>
        `

    }
    return html;
}

function idCountCategory() {
    for (let i = 0; i < model.categories.length; i++) {
        let = newCategory;
        model.categories[i].id = newCategory;
        
        newCategory +1;
        
    }
    
    console.log(idCountCategory + newCategory)
}


    // <input class="" id="" onchange="category.sub = this.value" value="${category.sub}" placeholder="Underkategori" type="text">
    //<input class="" id="" onchange="category.id = this.value" value="${category.id}" placeholder="Kategori ID" type="number">