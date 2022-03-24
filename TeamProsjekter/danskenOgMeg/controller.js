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
    }
}

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