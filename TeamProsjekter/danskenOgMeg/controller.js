// Legg til i Handlekurv
function addToCart(index) {
    categoryId = '';
    for (let i = 0; i < model.products.length; i++) {
        // console.log('index nr:', index)
        // if (model.products[i].includes(model.products[i].categoryId[index])){
            if (model.products[i].categoryId == index) {
            if (model.products[i].stock == 0){
                alert ('Fuck you, det er tomt');
            } else {
                model.products[i].stock --;
                model.shoppingCart.numberOfItems ++;
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
     if (model.shoppingCart.cartProducts === 0) alert('Ingenting å fjerne');
     else {
        model.shoppingCart.cartProducts --;
         updateViewCart();
    }
};

// -------------------tiss---------bæsj----cart---ting---------------prom-p------------------


// Meny med dropdown
function make(index){

    let html = "";
    model.fuckLister0 = "";
    model.activeSubCategory[index] = !model.activeSubCategory[index];
    model.wasActiveSubCategory[index] = !model.wasActiveSubCategory[index];
    
    for(let i = 0; i < model.categories.length; i++){      
        if(model.activeSubCategory[i] == true && index < 1000){
            html += `<div class="dropDownList" onclick="make(${i});">${model.categories[i].name}</div>`
         for(let j = 0; j <model.categories[i].sub.length; j++){
            html += `<div class="sublist"  onclick="updateViewFront()">${model.categories[i].sub[j].categoriName}</div>`
            }
        }
        else{
            html += `<div class="dropDownList" onclick="make(${i});">${model.categories[i].name}</div>`
        }

    }
    model.fuckLister0 = html;
    updateView();
       
      
    }
function addCategory(){
    // legg til verdier for å lage kategori (Id og navn på kategori)

    model.activeSubCategory.push(false) 
    model.wasActiveSubCategory.push(false) 
    //update view

}















// ------------- Login information ------------------ Login information  ------------------ Login information ------------------ Login information ------------------ Login information ------------------

// Pusher ny bruker inn i modellen.
function addNewInforToModel(){
    model.account.users.push({firstName: model.account.newFirstName,
        lastName: model.account.newLastName,
        phone: model.account.createNewPhoneNumber,
        email: model.account.createNewEmail,
        password: model.account.createNewPassword,
        id: model.idIndex,})
    model.idIndex++;
    alert('You can now login with your new accunt. good luck!')
    model.app.currentPage = 'LoginMail';
    resettInformation();
    updateView();
}
//Sjekker at personens mail  og passord finnes i modellen.
function DoThisMailPersonExist(){
    let foundUser = false;
    for (let i = 0; i < model.account.users.length; i++) {
    if(model.account.email == model.account.users[i].email &&  model.account.password == model.account.users[i].password){
        model.app.currentUser = model.account.users[i].id;
        alert('logged inn');
        foundUser = true;
        model.app.status = true;
        model.app.currentPage = 'FrontPage';
    } }
    if (foundUser === false){
        alert('User account do not exist.')    
    }
    loggedInnOrNot()
}
//Sjekker at personens telefon nummer og passord finnes i modellen.
function DoThisPhonePersonExist(){
    for (let i = 0; i < model.account.users.length; i++) {
        if(model.account.phone == model.account.users[i].phone &&  model.account.password == model.account.users[i].password ){
            model.app.currentUser = model.account.users[i].id;
            alert('logged inn');
            foundUser = true;
            model.app.status = true;
            model.app.currentPage = 'FrontPage';
        } }
        if (foundUser === false){
            alert('User account do not exist.')    
        }
        loggedInnOrNot()
}
// Sjekker at alt er riktig når man lager en ny bruker.
function checkEverything(){
    if (model.account.newFirstName == ''){
        return alert('You have forgotten you´re first name')
    } else if (model.account.newLastName == ''){
        return alert('You have forgotten you´re last name')
    } else if (model.account.createNewEmail.includes('@', '.com','.no','hotmail','gmail') == false){ //
        return alert('Please enter a right mail adress.')
    } else if (model.account.createNewPhoneNumber.length < 8){
        return alert('Too few digital numbers')
    }  else if (model.account.createNewPassword.length < 4 ){
        return alert('password need to be at least 4 digits long')
    }else if (model.account.createNewPassword != model.account.createNewPasswordCheck){
        return alert('Password is not the same. Please fix it you stupid');
    }else if(model.account.createNewPassword == model.account.createNewPasswordCheck) {
        updateView();
    }
}
// Nullstill informasjonen om ny bruker.
function resettInformation(){
    model.account.newFirstName = '';
    model.account.newLastName = '';
    model.account.createNewPhoneNumber = '';
    model.account.createNewEmail = '';
    model.account.createNewPassword = '';
    model.account.createNewPasswordCheck = '';
    updateView();
}
// Sjekker om du er logget inn, og hvilken  som er currentUser, for hvilket navn som skal komme opp.
function loggedInnOrNot(){
    for (let i = 0; i < model.account.users.length; i++) {        
    if (model.app.status == false){
        model.app.showStatus = 'Logg inn';  
    } else if (model.app.status == true){
        if (model.app.currentUser == model.account.users[i].id){
        model.app.showStatus = model.account.users[i].firstName + ' ' + model.account.users[i].lastName;
        }
    }
}
 updateView();
}
function checkLoginStatus(){
    if(model.app.status == false){
        model.app.currentPage = 'LoginMail';
    } else if (model.app.status == true){
        model.app.currentPage = 'accountInfo';
    }
    // model.app.currentPage = 'FrontPage'
    updateView();
}
function logOut(){
    if (model.app.click == 1){
        alert('Are you sure you want to log out?')
    }if(model.app.click > 1){
        model.app.click = 0;
            model.app.status = false;
            model.app.showStatus = 'Logg inn'; 
            model.app.currentPage ='FrontPage';

        } 
        updateView();
    }