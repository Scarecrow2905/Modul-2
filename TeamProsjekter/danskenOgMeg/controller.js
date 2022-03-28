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
                console.log(model.shoppingCart.cartProducts)
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
// ------------- Login information ------------
function addNewInforToModel(){
    model.account.users.push({firstName: model.account.newFirstName,
        lastName: model.account.newLastName,
        phone: model.account.createNewPhoneNumber,
        email: model.account.createNewEmail,
        password: model.account.createNewPassword,
        id: model.idIndex,})
    model.idIndex++;
   model.app.currentPage = ''; 
updateView();
}

function DoThisMailPersonExist(){
    for (let i = 0; i < model.account.users.length; i++) {
    if(model.account.email == model.account.users[i].email &&  model.account.password == model.account.users[i].password  ){
        alert('yippi det finnes!')
    } else{
        alert('Noooo finnes ikke!..')
    }}
    updateView();
}
function DoThisPhonePersonExist(){
    for (let i = 0; i < model.account.users.length; i++) {
        if(model.account.phone == model.account.users[i].phone &&  model.account.password == model.account.users[i].password ){
            alert('yippi det finnes!')
        } else{
            alert('Noooo finnes ikke!..')
        }}
        updateView();
}
function checkPasswordAndMail(){
if (model.account.createNewPassword != model.account.createNewPasswordCheck){
    return alert('Password is not the same. Please fix it you stupid');
} else if(model.account.createNewEmail.includes('@') == false){
    alert('You have forgotten the "@" you dumbass!')
} else if(model.account.createNewPassword == model.account.createNewPasswordCheck && model.account.createNewEmail.includes('@')) {
    updateView();
}
}