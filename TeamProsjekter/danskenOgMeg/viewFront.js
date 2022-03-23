function updateViewFront() {
    
    let html = '';
   
    html += /*html*/`
    <div class="page">
        <div class="header">${Header()}</div>
        <div class="liteFelt">
            <ul>
                <li class="liteFeltLi">${searchfield()}</li>
                <li class="liteFeltLi"><button onclick="model.app.currentPage = 'Cart';updateView()">Handlevogn</button></li>
                <li class="liteFeltLi"><button onclick="model.app.currentPage = 'Login';updateView()">Login</button></li>
            <ul>
        </div>
        <div class="meny">
          ${meny()}
        </div>
        <div class="innhold" onclick="addToCart()">${model.products.name}</div>
        <div class="footer">footer</div>
    </div>
  `

  return html;
}

function meny(){
    let html = "";
    let liste = '';
    // for (let i = 0; i < model.categories.length;i++){
    //     liste +=  '<ul>'+ `<li class="dropDownList" onclick='showCategories(${model.categories[i].id})'>`
    //     + model.categories[i].name + '</li>'+ '</ul>'
    // }
    for (let i = 0; i < model.categories.length;i++){
        html +=  `<div class="dropDownList" onclick='underkategori(${i})'>${model.categories[i].name}</div>`
        
    }
    

    html += ` 
              <div onclick="showSubCategories()">${showSubLister}</div>`
    return html;
}
function underkategori(index){
    let html = "";
    for (let i = 0; i < 2;i++){
    html +=  `<div class="dropDownList" >${model.categoriesSub[i].categoriName}</div>`
    }

    model.text1 = html
    updateViewFront()
}
// ------------------------- Login ---------------------------
function updateViewLogin(){
    html = /*html*/`
    <div class="loginPage">
        <div class="headerL">header</div>
        <div class="smalLinje"><button onclick="model.app.currentPage='FrontPage';updateView()">Back to balls</button></div>
        <div class="menyL">
            <div><h2 class="h2Login">Logg inn</h2></div>
            <div><p class="paragraphLogin">E- POST</<p></div>
            <div class="usernamePosition">${username()}</div>
            <div class="passwordPosition">${password()}</div>
            <div><button class="loginButton">Log inn</button></div>
            <div><button class="forgotPasswordButton">Forgot your password?</button></div>
            <div><button class="createUserButton">Create User</button></div>

        </div>
        <div class="innholdL">innhold</div>
        <div class="innhold1L">innhold1</div>
        <div class="footerL">footer</div>
    </div>`
    return html;

}
// ${username()}
// ${password()}