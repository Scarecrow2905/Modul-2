function addToCart(index) {
    for (let i = 0; i < model.products.length; i++) {
        // console.log('index nr:', index)
        // if (model.products[i].includes(model.products[i].categoryId[index])){
        if (model.products[i].id == index) {
            if (model.products[i].stock == 0) {
                if (model.shoppingCart.cartProducts[i].id === current.id) {
                    model.shoppingCart.quantity++;
                }
                alert('Ikke igjen på lager');
            } else {
                model.products[i].stock--;
                model.shoppingCart.numberOfItems++;
                model.shoppingCart.totalPrice += model.products[i].price;
                model.shoppingCart.cartProducts.push(model.products[i]);
            }

        }
    }
    updateView();
};


function purchase(index) {
    if (model.shoppingCart[index] === 0) alert('Ingenting i handlekurv');
    else {
        alert('Takk for handelen!')
        updateViewCart();
    }
};

function removeCart(index) {

    for (let i = 0; i < model.shoppingCart.cartProducts.length; i++) {

        if (model.shoppingCart.cartProducts === 0) alert('Ingenting å fjerne');



        else {
            // for (let p = 0; p < model.shoppingCart[i].cartProducts.length; p++) {


            model.shoppingCart.numberOfItems--;
            model.products[i].stock++;
            model.shoppingCart.totalPrice -= model.products[i].price;
            model.shoppingCart.cartProducts.splice(index, 1)
        }
    }
    updateView();
};

//  (index < 1000:) Hvert meny valg har ett nr. de første 9 meny valgene har ett nr fra 0 - 8. De neste under aktegoriene vil ha nr fra 8 og oppover. make(1000) er for å sikre at det ikke vil skje en feil når man legger til mange nom varer. man kan ha opp til 1000 meny valg.
//  (if(model.activeSubCategory[i] == true ) Når man trykker på ett kategori valg, gjør vi index nummeret i activeSubCatergory om til true, når det fra før av ligger på false. Lukker man meny valget igjenn, gjør vi den om til false igjenn.
// Meny med dropdown
function make(index) {

    let html = "";
    model.viewMenyCategories = "";
    model.activeSubCategory[index] = !model.activeSubCategory[index];
    for (let i = 0; i < model.categories.length; i++) {
        if (model.activeSubCategory[i] == true && index < 100) {
            html += `<div class="dropDownList" onclick="make(${i});">${model.categories[i].name}</div>`

            for (let j = 0; j < model.categories[i].sub.length; j++) {
                html += `<div class="sublist" onclick="viewStuff(${model.categories[i].sub[j].id});">${model.categories[i].sub[j].categoriName}</div>`
            }
        }
        else {
            html += `<div class="dropDownList" onclick="make(${i});">${model.categories[i].name}</div>`
        }
        if (model.activeSubCategory[i] == true) {
        }
    }
    model.viewMenyCategories = html;
    updateView();
}
function addCategory() {
    // legg til verdier for å lage kategori (Id og navn på kategori)
    model.activeSubCategory.push(false);
    //model.categories.push({})
    // model.wasActiveSubCategory.push(false) 
}



function viewStuff(index) {
    // model.viewProductsHere = "";
    let html = "";
    for (let i = 0; i < model.products.length; i++) {
        let first = i % 3 == 0 ? 'first' : '';
        if (index === 100) {
            html += /*html*/
                `
    <div class="rows ${first}">
        <img class="front-item-image" src="${model.products[i].img}" onclick="modalWindowPopup(${model.products[i].id});updateView()"/>
        <div class="front-item-title">${model.products[i].title}</div>
        <div class="front-price">${model.products[i].price}kr</div>
        <div class="stock">stock: ${model.products[i].stock}</div>
        <button type="button" class="front-item-btn" onclick="addToCart(${model.products[i].id});updateView();">Legg til handlekurv</button>
    </div>`
        }
    }

    for (let i = 0; i < model.products.length; i++) {
        let first = i % 3 == 0 ? 'first' : '';
        if (index == model.products[i].parentId && model.products[i].price < model.sliderValueIs) {
            model.activeProduct = !model.activeProduct
            html += /*html*/
                `
            <div class="rows ${first}">
                <img class="front-item-image" src="${model.products[i].img}" onclick="model.app.currentPage = 'viewProduct';updateView()"/>
                <div class="front-item-title">${model.products[i].title}</div>
                <div class="front-price">${model.products[i].price}kr</div>
                <div class="stock">stock: ${model.products[i].stock}</div>
                <button type="button" class="front-item-btn" onclick="addToCart(${model.products[i].id});updateView()">Legg til handlekurv</button>
            </div>`
        }
        model.viewProductsHere = html;
        console.log('er ' + index)
        updateView();
    }
}

// ------------- Login information ------------------ Login information  ------------------ Login information ------------------ Login information ------------------ Login information ------------------

// Pusher ny bruker inn i modellen.
function addNewInforToModel() {
    model.account.users.push({
        firstName: model.account.newFirstName,
        lastName: model.account.newLastName,
        phone: model.account.createNewPhoneNumber,
        email: model.account.createNewEmail,
        password: model.account.createNewPassword,
        id: model.idIndex,
    })
    model.idIndex++;
    alert('You can now login with your new account. good luck!')
    model.app.currentPage = 'LoginMail';
    resettInformation();
    updateView();
}
//Sjekker at personens mail  og passord finnes i modellen.
function DoThisMailPersonExist() {
    let foundUser = false;
    for (let i = 0; i < model.account.users.length; i++) {
        if (model.account.email == model.account.users[i].email && model.account.password == model.account.users[i].password) {
            model.app.currentUser = model.account.users[i].id;
            alert('logged inn');
            foundUser = true;
            model.app.status = true;
            model.app.currentPage = 'FrontPage';
        }
    }
    if (foundUser === false) {
        alert('User account do not exist.')
    }
    loggedInnOrNot()
}
//Sjekker at personens telefon nummer og passord finnes i modellen.
function DoThisPhonePersonExist() {
    for (let i = 0; i < model.account.users.length; i++) {
        if (model.account.phone == model.account.users[i].phone && model.account.password == model.account.users[i].password) {
            model.app.currentUser = model.account.users[i].id;
            alert('logged inn');
            foundUser = true;
            model.app.status = true;
            model.app.currentPage = 'FrontPage';
        }
    }
    if (foundUser === false) {
        alert('User account do not exist.')
    }
    loggedInnOrNot()
}
// Sjekker at alt er riktig når man lager en ny bruker.
function checkEverything() {
    if (model.account.newFirstName == '') {
        return alert('You have forgotten you´re first name')
    } else if (model.account.newLastName == '') {
        return alert('You have forgotten you´re last name')
    } else if (model.account.createNewEmail.includes('@', '.com', '.no', 'hotmail', 'gmail') == false) { //
        return alert('Please enter a right mail adress.')
    } else if (model.account.createNewPhoneNumber.length < 8) {
        return alert('Too few digital numbers')
    } else if (model.account.createNewPassword.length < 4) {
        return alert('password need to be at least 4 digits long')
    } else if (model.account.createNewPassword != model.account.createNewPasswordCheck) {
        return alert('Password is not the same. Please fix it you stupid');
    } else if (model.account.createNewPassword == model.account.createNewPasswordCheck) {
        updateView();
    }
}
// Nullstill informasjonen om ny bruker.
function resettInformation() {
    model.account.newFirstName = '';
    model.account.newLastName = '';
    model.account.createNewPhoneNumber = '';
    model.account.createNewEmail = '';
    model.account.createNewPassword = '';
    model.account.createNewPasswordCheck = '';
    updateView();
}
// Sjekker om du er logget inn, og hvilken  som er currentUser, for hvilket navn som skal komme opp.
function loggedInnOrNot() {
    for (let i = 0; i < model.account.users.length; i++) {
        if (model.app.status == false) {
            model.app.showStatus = 'Logg inn';
        } else if (model.app.status == true) {
            if (model.app.currentUser == model.account.users[i].id) {
                model.app.showStatus = model.account.users[i].firstName + ' ' + model.account.users[i].lastName;
            }
        }
    }
    updateView();
}
function checkLoginStatus() {
    if (model.app.status == false) {
        model.app.currentPage = 'LoginMail';
    } else if (model.app.status == true) {
        model.app.currentPage = 'accountInfo';
    }
    // model.app.currentPage = 'FrontPage'
    updateView();
}
function logOut() {
    if (model.app.click == 1) {
        alert('Are you sure you want to log out? klick again..')
    } if (model.app.click > 1) {
        model.app.click = 0;
        model.app.status = false;
        model.app.showStatus = 'Logg inn';
        model.app.currentPage = 'FrontPage';

    }
    updateView();
}


function searchCatalog(indexValue) {
    model.midlertidlig = '';
    // model.viewProductsHere = '';
    for (let i = 0; i < model.products.length; i++) {
        // for(let i in model.products){
        let first = i % 3 == 0 ? 'first' : '';
        // if(model.products[i].title == indexValue){
        if (model.products[i].title.includes(indexValue) || model.products[i].category.includes(indexValue)) {
            if (model.products[i].price < model.sliderValueIs) {
                model.midlertidlig += `
                <div class="rows ${first}">
                    <img class="front-item-image" src="${model.products[i].img}"/>
                    <div class="front-item-title">${model.products[i].title}</div>
                    <div class="front-price">${model.products[i].price}kr</div>
                    <div class="stock">stock: ${model.products[i].stock}</div>
                    <button type="button" class="front-item-btn" onclick="addToCart(${model.products[i].id});updateView()">Legg til handlekurv</button>
                </div>`
            }
        }
    }
    UpdateViewProductsHere();
}

function UpdateViewProductsHere() {
    model.viewProductsHere = model.midlertidlig
    updateView();
}

function sliderValue(indexValue) {
    model.sliderValueIs = indexValue;
    // document.getElementById('sliderValue').innerHTML = indexValue;
    updateView();
}




function viewCreateProduct() {
    let html = /*html*/
        `
    <div class="cart-navigation">
    <button class="btn-cart-navigation" onclick="model.app.currentPage = 'FrontPage';updateView()">Tilbake</button>

    <div class="">
    <input class="create-Product" onchange="model.createItems.title = this.value" placeholder="Produkt navn"type="text"><br>
    <input class="create-Product" onchange="model.createItems.price = this.value" placeholder="Pris" type="number"> <br>
    <input class="create-Product" onchange="model.createItems.img = this.value" placeholder="bilde" type="file"> <br>
    <input class="create-Product" onchange="model.createItems.stock = this.value" placeholder="Antall" type="number"><br>
    <input class="create-Product" onchange="model.createItems.description = this.value" placeholder="Beskrivelse" type="text"><br>
    <input class="create-Product" onchange="model.createItems.measures = this.value" placeholder="Mål" type="text"><br>
    <input class="create-Product" onchange="model.createItems.country = this.value" placeholder="Land" type="text"><br>
    <input class="create-Product" onchange="model.createItems.year = this.value" placeholder="Års-tall"type="text"><br>
    
    
    <input class="" onchange="model.createItems.color = this.value" placeholder="Produkt Farge"type="color"> <br>

    <div class="velgKategori">
        <span>Velg Kategori</span>

                ${createViewProduct()}

        <button onclick='createProduct();'>Create Product</button>

   
    </div>
    `
    // html += "<button onclick='createProduct()'>"
    return html;

}

function createViewProduct(){
    var result = '';

    for (let i = 0; i < model.categories.name; i++) {
    result +=  `
    <select name="" id="" class="kategori-input" ${model.categories.name[i]}>
                    <option value="Kategori" selected disabled>Kategori</option>
                    <option value="01">Stue</option>
                    <option value="02">Spiserom</option>
                    <option value="03">Kjøkken</option>
                    <option value="04">Soverom</option>
                    <option value="05">Bad</option>
                    <option value="06">Gang</option>
                    <option value="07">Klær</option>
                    <option value="08">Sko</option>
                    <option value="09">Lesesal</option>
                </select>

    `
    }
    return result;
}


/*
<div class="velgKategori">
                <span>Velg Kategori</span>
                <select name="" id="" class="kategori-input">
                    <option value="Kategori" selected disabled>Kategori</option>
                    <option value="01">${model.categories.name[1]}</option>
                    <option value="02">Spiserom</option>
                    <option value="03">Kjøkken</option>
                    <option value="04">Soverom</option>
                    <option value="05">Bad</option>
                    <option value="06">Gang</option>
                    <option value="07">Klær</option>
                    <option value="08">Sko</option>
                    <option value="09">Lesesal</option>
                </select>

                <form action="/action_page.php">
  <input type="file" id="myFile" name="filename">
  <input type="submit">
</form>
*/


//Lage Produkter.
function createProduct() {
    let test = ""
    if (model.createItems.title ||
        model.createItems.price ||
        model.createItems.stock ||

        model.createItems.description ||
        model.createItems.measures ||
        model.createItems.color ||
        model.createItems.country ||
        model.createItems.year == "") {
        alert("Fyll ut alle feltene")
        
    }
    else {
    // let newproduct = {}

    // model.createItems.title = '${input.value}';
    // model.createItems.price = '${input.value}';
    // model.createItems.stock = '${input.value}';
    // model.createItems.category = '${input.value}';
    // model.createItems.categoryId = '${input.value}';
    // model.createItems.img = '${input.value}';
    // model.createItems.description = '${input.value}';
    // model.createItems.measures = '${input.value}';
    // model.createItems.color = '${input.value}';
    // model.createItems.country = '${input.value}';
    // model.createItems.year = '${input.value}';

    model.products.push({
        title: model.createItems.title,
        price: model.createItems.price,
        stock: model.createItems.stock,
        category: model.createItems.category,
        categoryId: model.createItems.categoryId,
        img: model.createItems.img,
        description: model.createItems.description,
        measures: model.createItems.measures,
        color: model.createItems.color,
        country: model.createItems.country,
        year: model.createItems.year,


    })
    blankInput();

    model.products.push(newproduct)
    // blanckInput()
    // updateview()
}
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
