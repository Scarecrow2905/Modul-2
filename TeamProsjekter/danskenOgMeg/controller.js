// Legg til i Handlekurv
function addToCart(index) {
    if (model.product[index].stock == 0) alert('Ikke på lager');
    else {
        model.products[index].stock --;
        model.shoppingCart.numberOfItems ++;
        model.shoppingCart.totalPrice += model.products[index].price;
        model.shoppingCart.push(model.products[index].title)
        updateViewCart()
    }
    
    
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
        updateViewCart()
    }
};

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
// function randomNumerGitt(){
// let randomNumber = Math.round(Math.random() * 3);
// return randomNumber;
// }

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