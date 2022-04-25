function viewCreateCategory() {

    for (let i = 0; i < model.createCategory.length; i++) {
        const category = model.createCategory[i];

        html += /*html*/
            `
        <input class="" id="" onchange="category.name = this.value" value="${category.name}" placeholder="Kategori Navn" type= "text">

        `

    }
    return html;
}




    // <input class="" id="" onchange="category.sub = this.value" value="${category.sub}" placeholder="Underkategori" type="text">
    //<input class="" id="" onchange="category.id = this.value" value="${category.id}" placeholder="Kategori ID" type="number">