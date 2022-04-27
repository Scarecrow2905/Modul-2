function viewCreateCategory() {

    for (let i = 0; i < model.createCategory.length; i++) {
        const category = model.createCategory[i];

        html = /*html*/
            `
        <input class="" id="" onchange="category.name = this.value" value="${category.name}" placeholder="Kategori Navn" type= "text">
        <button onclick="createCategory();">mekk ny Categori</button>
        `

    }
    return html;
}

function idCountCategory() {
    for (let i = 0; i < model.categories.length; i++) {
        let newCategory = model.categories[i];
        newCategory ++;
        model.categories[i].id = newCategory;
        let newId = 0;
        newId = model.categories.length++;
        
        
    }
    
    console.log(idCountCategory + newCategory)
}


    // <input class="" id="" onchange="category.sub = this.value" value="${category.sub}" placeholder="Underkategori" type="text">
    //<input class="" id="" onchange="category.id = this.value" value="${category.id}" placeholder="Kategori ID" type="number">


function createCategory() {
    NewCategory = {}
    NewCategory.name = model.createCategory.name;
    NewCategory.id = model.categories.length+1;
    NewCategory.sub = model.createCategory.sub;
    addImg(PictureInPictureWindow);
    model.category.push(NewCategory);
    console.log(NewCategory)

}