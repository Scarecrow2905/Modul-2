// Shopping Cart, Purchase and Remove items for cart
function addToCart(index) {
    for (let i = 0; i < model.products.length; i++) {
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
        if (model.shoppingCart.cartProducts === 0){
             alert('Ingenting å fjerne');
        }else {
            model.shoppingCart.numberOfItems--;
            model.products[i].stock++;
            model.shoppingCart.totalPrice -= model.products[i].price;
            model.shoppingCart.cartProducts.splice(index, 1)
        }
    }
    updateView();
};

// Meny og dropdown for categorier og subcategorier
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
            html += `<div class="dropDownList" onclick="make(${i});">${model.categories[i].name}</div>
            `
        }
    }
    model.viewMenyCategories = html;
    updateView();
}

function viewStuff(index) {
    let html = "";
    let first = '';
    for (let i = 0; i < model.products.length; i++) {
            first = i % 4 == 0 ? 'first' : '';
        if (index === 100) {
            html += /*html*/`
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
        let first = i % 4 == 0 ? 'first' : '';
        if (index == model.products[i].parentId && model.products[i].price < model.sliderValueIs) {
            model.activeProduct = !model.activeProduct
            html += /*html*/`
            <div class="rows ${first}">
                <img class="front-item-image" src="${model.products[i].img}" onclick="model.app.currentPage = 'viewProduct';updateView()"/>
                <div class="front-item-title">${model.products[i].title}</div>
                <div class="front-price">${model.products[i].price}kr</div>
                <div class="stock">stock: ${model.products[i].stock}</div>
                <button type="button" class="front-item-btn" onclick="addToCart(${model.products[i].id});updateView()">Legg til handlekurv</button>
            </div>`
        }
        model.viewProductsHere = html;
        updateView();
    }
}

//Alt som har med Login, Ny bruker, Resette ny bruker informasjon, og som sjekker hvem som er logget inn.


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
//addNewInforToModel
function addNewInfoToModel() {
    model.account.users.push({
        firstName: model.account.newFirstName,
        lastName: model.account.newLastName,
        phone: model.account.createNewPhoneNumber,
        email: model.account.createNewEmail,
        password: model.account.createNewPassword,
        cardnumber: 0000000000000000,
        cardname: 'No name',
        id: model.idIndex,
    })
    model.idIndex++;
    alert('You can now login with your new account. good luck!')
    model.app.currentPage = 'LoginMail';
    resettInformation();
    updateView();
}
//checkEverything
function checkNewAccountInformation() {
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

function resettInformation() {
    model.account.newFirstName = '';
    model.account.newLastName = '';
    model.account.createNewPhoneNumber = '';
    model.account.createNewEmail = '';
    model.account.createNewPassword = '';
    model.account.createNewPasswordCheck = '';
    updateView();
}

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
    isAdminLoggedIn();
    updateView();
}

function isAdminLoggedIn(){
    if(model.app.currentUser == 1){
        model.app.adminLoggedInn = true;
    }
    checkAdmin();
}

function checkAdmin(){
    if(model.app.adminLoggedInn == false){
        model.app.admin = '';
    }
    if(model.app.adminLoggedInn == true){
        model.app.admin =  `<button onclick="model.app.currentPage = 'viewCreateProduct'; updateView()">Legg til produkt</button></li>`;
    }
    updateView();
}

function checkLoginStatus() {
    if (model.app.status == false) {
        model.app.currentPage = 'LoginMail';
    } else if (model.app.status == true) {
        model.app.currentPage = 'accountInfo';
    }
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
        model.app.adminLoggedInn = false;

    }
    checkAdmin();
    updateView();
}

// Søkerfunksjonen og pris justering
function searchCatalog(indexValue) {
    model.midlertidlig = '';
    for (let i = 0; i < model.products.length; i++) {
        let first = i % 3 == 0 ? 'first' : '';
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
    updateView();
}

// Endring av bruker informasjon og/eller legge til
function UpdateChange(index) {
    for (let i = 0; i < model.account.users.length; i++) {
        if (model.app.whatInfoIsShowed == 'editPaymentInfo') {
            if (model.payment.cardNumberInput.length < 17 && model.payment.cardNumberInput.length > 15) {
                model.account.users[index].cardnumber = model.payment.cardNumberInput;
                model.account.users[index].cardname = model.payment.cardUsersName;

            }
            else {
                alert('Card number must be at 16 digits');
                return;
            }
        }
        else if (model.app.whatInfoIsShowed == 'editFirstAndLastname') {
            model.account.users[index].firstName = model.account.newFirstName;
            model.account.users[index].lastName = model.account.newLastName;
            if (model.account.newFirstName == '' || model.account.newLastName == '') {
                alert('Please enter first name and/or last name');
                return;
            }
        }
        else if (model.app.whatInfoIsShowed == 'editMail') {
            model.account.users[index].email = model.account.createNewEmail;
            if (model.account.createNewEmail.includes('@', '.com', '.no', 'hotmail', 'gmail') == false) { //
                alert('Please enter a right mail adress.');
                return;
            }
        }
        else if (model.app.whatInfoIsShowed == 'editPassword') {
            if (model.account.createNewPassword.length < 4) {
                alert('password must be at minimum 4 numers or digits');
                return;
            }
            else if (model.account.createNewPassword != model.account.createNewPasswordCheck) {
                alert('The password´s is not the same');
                return;
            }
            else if (model.account.createNewPassword == model.account.createNewPasswordCheck) {
                model.account.users[index].password = model.account.createNewPassword;
            }
        }
    }
    resett();
}

function resett() {
    model.account.createNewPassword = '';
    model.account.createNewPasswordCheck = '';
    model.account.createNewEmail = '';
    model.account.newFirstName = '';
    model.account.newLastName = '';
    showDetailedAccountInformation();
}
function deleteCardInformation(index) {
    model.account.users[index].cardnumber = 0;
    model.account.users[index].cardname = '';
    showDetailedAccountInformation();
}

function viewPayUserType(){
    for (let i = 0; i < model.account.users.length; i++) {
        if (model.app.currentUser == model.account.users[i].id){
            if(model.app.currentUser != 0){
                model.app.viewPayUserCard = model.account.users[i].cardnumber;
                model.app.viewPayUserName = model.account.users[i].cardname;
            }
            else {
                model.app.viewPayUserCard = model.payment.cardNumberInput;
                model.app.viewPayUserName = model.payment.cardUsersName;
            }
}}
updateView();
}

// Funksjoner for å legge til kategorier eller subkategorier
function addCategory() {
    model.activeSubCategory.push(false); 
}

