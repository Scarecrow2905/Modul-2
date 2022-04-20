


let test = '';
function viewCreateProduct() {
    let html = /*html*/
        `

<div class="header">${Header()}</div>

    <div class="cart-navigation">
        <button class="btn-cart-navigation" onclick="model.app.currentPage = 'FrontPage';updateView()">Tilbake</button>
    </div>


    <div class="createProduct-wrapper">
        <input class="create-Product" onchange="model.createItems.title = this.value"       placeholder="Produkt navn" type="text"> <br>
        <input class="create-Product" onchange="model.createItems.price = this.value"       placeholder="Pris" type="number"> <br>
        <input class="create-Product" onchange="model.createItems.img = this.value"         placeholder="bilde" type="file"> <br>
        
        <input class="create-Product" onchange="model.createItems.stock = this.value"       placeholder="Antall" type="number"> <br>
        <input class="create-Product" onchange="model.createItems.description = this.value" placeholder="Beskrivelse" type="text"> <br>
        <input class="create-Product" onchange="model.createItems.measures = this.value"    placeholder="Mål" type="text"> <br>
        <input class="create-Product" onchange="model.createItems.country = this.value"     placeholder="Land" type="text"> <br>
        <input class="create-Product" onchange="model.createItems.year = this.value"        placeholder="Års-tall"type="text"> <br>
        ${viewCreateCategories()} <br>
        ${test} <br>
        
        <div>Farge <input class="createProduct-input-color" onchange="model.createItems.color = this.value" placeholder="Produkt Farge"type="color"></div>
        

        <button onclick='createProduct();'>Legg til produkt</button>

    `
   
    console.log(model.createItems.img);
    // html += "<button onclick='createProduct()'>"
    return html;

    //
}

function viewCreateCategories(id) {

    html = '';


    html = /*html*/
        ` 
                <select name="kategori" id="mainCategory" class="create-Product-kategori-input" onchange="viewCreateSubCategories(this.value)">
                     <option value="" disabled selected hidden>Velg Kategori..</option> 
                    
        `

    for (let i = 0; i < model.categories.length; i++) {

        var mainCategory = model.categories[i];


        html += /*html*/
            `<option value="${mainCategory.name}">${mainCategory.name}</option>`
    }
    html += `</select>`
    model.createItems.category == mainCategory.name;

   
    console.log(mainCategory);
    return html;



}

var temp = 0;
model.createItems.id = 1000;
for (let i = 0; i < 1000; i++) {
    temp = id;
    id = temp + 1;

}

function viewCreateSubCategories(mainCategory) {
    // result = '';
    let html = '';

    for (let i = 0; i < model.categories.length; i++) {
        if (model.categories[i].name == mainCategory) {

            html =/*html*/ `<select name="subCategory"  class="create-Product-sub-input">`

            for (let j = 0; j < model.categories[i].sub.length; j++) {
                html += /*html*/ `<option value="${model.categories[i].sub[j].categoriName}">${model.categories[i].sub[j].categoriName}</option>`
            }
        }



        html += `</select>`


        test = html;
        updateView();
    }

}


//Lage Produkter.
function createProduct() {
    let test = ""
    // if (model.createItems.title
    //     && model.createItems.price
    //     && model.createItems.stock
    //     && model.createItems.description
    //     && model.createItems.color
    //     && model.createItems.year
    //     && model.createItems.measures
    //     && model.createItems.img
    //     == "") {
    //     alert("Fyll ut alle feltene")

    // }
    // else {

    model.products.push({
        title: model.createItems.title,
        price: model.createItems.price,
        stock: model.createItems.stock,
        category: model.createItems.category,
        categoryId: model.createItems.id,
        img: model.createItems.img,
        description: model.createItems.description,
        measures: model.createItems.measures,
        color: model.createItems.color,
        country: model.createItems.country,
        year: model.createItems.year,
    })
    console.log(model.products)
    //blankInput();

    //  model.products.push(newproduct);
    // blanckInput()
    // updateview()
}

function blankInput() {
    model.createItems.title = '';
    model.createItems.title = '';
    model.createItems.price = 0;
    model.createItems.stock = 0;
    model.createItems.category = '';
    model.createItems.categoryId = '';
    model.createItems.img = '';
    model.createItems.description = '';
    model.createItems.measures = '';
    model.createItems.color = [];
    model.createItems.country = '';
    model.createItems.year = '';
    // må nulle ut alle verdier, husk at noen er tall
}



// Ikke tenk på det. ~ thorbjoern

// let apiverdi = {
//     values: [{
//         title: 'Sofa',
//         price: 9999,
//         stock: 2,
//         category: 'Stue',
//         id: 111,
//         parentId: 11,
//         subCategory: 'Sofa',
//         img: 'TempBilder/1Stue/1Sofa/vintagesofapattern.jpeg',
//         description: 'Godt brukt, men fortsatt en flott sofa. Stått lagret i bod siden 2005.',
//         measures: 'Høyde: 80cm. Dybde: 50cm. Lengde: 170cm',
//         color: ['Oker Gul'],
//         country: 'Danmark',
//         year: '2006',
//     },],
// };

// async function getdata() {
//     let response = await fetch("https://pokeapi.co/api/v2")
//     let data = await response.json()

//     let response2 = await fetch(data.ability)
//     let data2 = await response2.json()
//     console.log(data2)
//     let response3 = await fetch(data2.results[17].url)
//     let data3 = await response3.json()
//     console.log(data3)
// }

// function addListOfProducts(apiVerdi) {

//     for (let i = 0; i < newProducts.length; i++) {
//         model.products.push(newProducts[i])
//     }
// }



