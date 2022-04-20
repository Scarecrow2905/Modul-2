


let test = '';
function viewCreateProduct() {
    let html = /*html*/
        `

<div class="header">${Header()}</div>

    <div class="cart-navigation">
        <button class="btn-cart-navigation" onclick="model.app.currentPage = 'FrontPage';updateView()">Tilbake</button>
    </div>


    <div class="createProduct-wrapper">
        <input class="create-Product" id="c.title" onchange="model.createItems.title = this.value" value="${model.createItems.title}"      placeholder="Produkt navn" type="text"> <br>

        <input class="create-Product" id="c.price" onchange="model.createItems.price = this.value" value="${model.createItems.price}"      placeholder="Pris" type="number"> <br>

        <input class="create-Product" id="c.img"onchange="model.createItems.img = this.value"    value="${model.createItems.img}"     placeholder="bilde" type="file"> <br>

        <input class="create-Product" id="c.stock" onchange="model.createItems.stock = this.value"    value="${model.createItems.stock}"   placeholder="Antall" type="number"> <br>

        <input class="create-Product"  id="c.description"onchange="model.createItems.description = this.value" value="${model.createItems.description}"placeholder="Beskrivelse" type="text"> <br>

        <input class="create-Product" id="c.measures" onchange="model.createItems.measures = this.value" value="${model.createItems.measures}"   placeholder="Mål" type="text"> <br>

        <input class="create-Product" id="c.country" onchange="model.createItems.country = this.value"   value="${model.createItems.country}"  placeholder="Land" type="text"> <br>

        <input class="create-Product" id="c.year" onchange="model.createItems.year = this.value"    value="${model.createItems.year}"    placeholder="Års-tall"type="text"> <br>
        ${viewCreateCategories()} <br>
        ${test} <br>
        
        <div>Farge <input class="createProduct-input-color" onchange="model.createItems.color = this.value" value="${model.createItems.color}" placeholder="Produkt Farge"type="color"></div>
        

        <button onclick='createProduct();'>Legg til produkt</button>

    `

    // html += "<button onclick='createProduct()'>"
    return html;

    //
}

function viewCreateCategories() {

    html = '';


    html = /*html*/
        ` 
                <select name="kategori" id="m.cat" class="create-Product-kategori-input" onchange="model.createItems.category = this.value; viewCreateSubCategories(this.value)">
                     <option selected disabled hidden>Velg Kategori..</option> 
                    
        `

    for (let i = 0; i < model.categories.length; i++) {

        // var mainCategory = model.categories[i];

        if (model.createItems.category == model.categories[i].name) {
            html += /*html*/
                `<option selected value="${model.categories[i].name}">${model.categories[i].name}</option>`
            // Denne skal poppe opp som verdi
        }
        else {
            html += /*html*/
                `<option value="${model.categories[i].name}">${model.categories[i].name}</option>`
            // Denne skal poppe opp som verdi
        }
    }

    html += `</select>`
    // model.createItems.category = mainCategory.name;


    // console.log(mainCategory);
    return html;


    33
}
//Når du velger en Hovedkategori så skal kategorien være den kategorieen.

// var temp = 0;
// model.createItems.id = 1000;
// for (let i = 0; i < 1000; i++) {
//     temp = id;
//     id = temp + 1;

// }

function viewCreateSubCategories(mainCategory) {
    // result = '';
    let html = '';

    html =/*html*/ `<select  name="subCategory"  class="create-Product-kategori-input" onchange="model.createItems.subCategory = this.value; console.log(this.value)">
    <option selected disabled hidden>Velg underkategori.</option> 
    `

    for (let i = 0; i < model.categories.length; i++) {
        if (model.categories[i].name == mainCategory) {



            for (let j = 0; j < model.categories[i].sub.length; j++) {
                html += /*html*/ `<option value="${model.categories[i].sub[j].categoriName}">${model.categories[i].sub[j].categoriName}</option>`
            }
        }



        html += `</select>`


    }
    test = html;
    updateView();

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
    setProductId();
    let newproduct = {}


    newproduct.title = model.createItems.title;
    newproduct.price = model.createItems.price;
    newproduct.stock = model.createItems.stock;
    newproduct.category = model.createItems.category;
    newproduct.parentId = model.createItems.id;
    newproduct.img = model.createItems.img;
    newproduct.description = model.createItems.description;
    newproduct.measures = model.createItems.measures;
    newproduct.color = model.createItems.color;
    newproduct.country = model.createItems.country;
    newproduct.year = model.createItems.year;
    model.products.push(newproduct);
    console.log(newproduct);

    //blankInput();

    //  model.products.push(newproduct);

    blankInput();

    updateView();
}
function setProductId() {
    /*-------------------------------stue-------------------------------------*/
    if (model.createItems.category = 1){  
        if (model.createItems.subCategory == 'Sofa') model.createItems.id = 11;
        if (model.createItems.subCategory == 'Sofabord') model.createItems.id = 12;
        if (model.createItems.subCategory == 'Sjeselong') model.createItems.id = 13;
        if (model.createItems.subCategory == 'Kommoder') model.createItems.id = 14;
        if (model.createItems.subCategory == 'Hyller') model.createItems.id = 15;
        if (model.createItems.subCategory == 'Reoler') model.createItems.id = 16;
        if (model.createItems.subCategory == 'Interiør') model.createItems.id = 17;
        if (model.createItems.subCategory == 'Tekstil') model.createItems.id = 18;
    }
    /*-----------------------------Spiserom-----------------------------------*/
    if (model.createItems.category = 2) {
        if (model.createItems.subCategory == 'Spisebord') model.createItems.id = 21;
        if (model.createItems.subCategory == 'Spisestuestoler') model.createItems.id = 22;
        if (model.createItems.subCategory == 'Reoler') model.createItems.id = 23;
        if (model.createItems.subCategory == 'Kommode') model.createItems.id = 24;
        if (model.createItems.subCategory == 'Skjenk') model.createItems.id = 25;
        if (model.createItems.subCategory == 'Interiør') model.createItems.id = 27;
        if (model.createItems.subCategory == 'Tekstil') model.createItems.id = 28;
    }
    /*-----------------------------Kjøkken------------------------------------*/
    if (model.createItems.category = 3) {
        if (model.createItems.subCategory == 'Kjøkkenbord') model.createItems.id = 31;
        if (model.createItems.subCategory == 'Kjøkkenstoler') model.createItems.id = 32;
        if (model.createItems.subCategory == 'Hyller') model.createItems.id = 33;
        if (model.createItems.subCategory == 'Interiør') model.createItems.id = 35;
        if (model.createItems.subCategory == 'Tekstil') model.createItems.id = 36;
    }
    /*-----------------------------Soverom------------------------------------*/
    if (model.createItems.category = 4) {
        if (model.createItems.subCategory == 'Seng') model.createItems.id = 41;
        if (model.createItems.subCategory == 'Nattbord') model.createItems.id = 42;
        if (model.createItems.subCategory == 'Kommoder') model.createItems.id = 43;
        if (model.createItems.subCategory == 'Garderobeskap') model.createItems.id = 44;
        if (model.createItems.subCategory == 'Interiør') model.createItems.id = 45;
        if (model.createItems.subCategory == 'Tekstil') model.createItems.id = 46;
    }
    /*-----------------------------Bad------------------------------------*/
    if (model.createItems.category = 5) {
        if (model.createItems.subCategory == 'Badekar') model.createItems.id = 51;
        if (model.createItems.subCategory == 'Vaskebrett') model.createItems.id = 52;
        if (model.createItems.subCategory == 'Innredning') model.createItems.id = 53;
        if (model.createItems.subCategory == 'Interiør') model.createItems.id = 54;
        if (model.createItems.subCategory == 'Tekstil') model.createItems.id = 55;
    }
    /*-----------------------------gang------------------------------------*/
    if (model.createItems.category = 6) {
        if (model.createItems.subCategory == 'Sko oppbevaring') model.createItems.id = 61;
        if (model.createItems.subCategory == 'Garderobeskap') model.createItems.id = 62;
        if (model.createItems.subCategory == 'Hattehyller') model.createItems.id = 63;
        if (model.createItems.subCategory == 'Interiør') model.createItems.id = 64;
        if (model.createItems.subCategory == 'Tekstil') model.createItems.id = 65;
    }
    /*-----------------------------klær------------------------------------*/
    if (model.createItems.category = 7) {
        if (model.createItems.subCategory == 'Kjole') model.createItems.id = 71;
        if (model.createItems.subCategory == 'Bukser') model.createItems.id = 72;
        if (model.createItems.subCategory == 'Gensere') model.createItems.id = 73;
        if (model.createItems.subCategory == 'Jakker') model.createItems.id = 74;
        if (model.createItems.subCategory == 'Cardigans') model.createItems.id = 75;
        if (model.createItems.subCategory == 'Hatter') model.createItems.id = 76;
        if (model.createItems.subCategory == 'Skjerf') model.createItems.id = 77;
        if (model.createItems.subCategory == 'Øredobber') model.createItems.id = 78;
    }
    /*-----------------------------Sko------------------------------------*/
    if (model.createItems.category = 8) {
        if (model.createItems.subCategory == 'Støvletter') model.createItems.id = 81;
        if (model.createItems.subCategory == 'Støvler') model.createItems.id = 82;
        if (model.createItems.subCategory == 'Joggesko') model.createItems.id = 83;
        if (model.createItems.subCategory == 'Platåsko') model.createItems.id = 84;
        if (model.createItems.subCategory == 'Høyhælte sko') model.createItems.id = 85;
    }
    /*-----------------------------Lesesal------------------------------------*/
    if (model.createItems.category = 9) {
        if (model.createItems.subCategory == 'Godstol') model.createItems.id = 91;
        if (model.createItems.subCategory == 'Bokhyller') model.createItems.id = 92;
        if (model.createItems.subCategory == 'Avlastningsbord') model.createItems.id = 93;
        if (model.createItems.subCategory == 'Interiør') model.createItems.id = 94;
        if (model.createItems.subCategory == 'Tekstil') model.createItems.id = 95;
    }
}

function blankInput() {
    model.createItems.title = '';
    model.createItems.title = '';
    model.createItems.price = null;
    model.createItems.stock = null;
    model.createItems.category = '';
    model.createItems.categoryId = '';
    model.createItems.img = '';
    model.createItems.description = '';
    model.createItems.measures = '';
    model.createItems.color = [];
    model.createItems.country = '';
    model.createItems.year = '';
    // må nulle ut alle verdier; husk at noen er tall
}



// Ikke tenk på det. ~ thorbjoern

// let apiverdi = {
//     values: [{
//         title: 'Sofa';
//         price: 9999;
//         stock: 2;
//         category: 'Stue';
//         id: 111;
//         parentId: 11;
//         subCategory: 'Sofa';
//         img: 'TempBilder/1Stue/1Sofa/vintagesofapattern.jpeg';
//         description: 'Godt brukt; men fortsatt en flott sofa. Stått lagret i bod siden 2005.';
//         measures: 'Høyde: 80cm. Dybde: 50cm. Lengde: 170cm';
//         color: ['Oker Gul'];
//         country: 'Danmark';
//         year: '2006';
//     };];
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



