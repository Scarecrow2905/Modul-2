// ----------------------- Fram Side ----------------------------------
function updateViewFront() {
    
    let html = '';
   
    html += /*html*/`
    <div class="page">
        <div class="header">${Header()}</div>
        <div class="liteFelt">
            <ul>
                <li class="liteFeltLi">${searchfield()}</li>
                <li class="liteFeltLi"><button onclick="model.app.currentPage = 'Cart';updateView()">Handlevogn ${model.shoppingCart.cartProducts.length} Pris: ${model.shoppingCart.totalPrice}</button></li>
                <li class="liteFeltLi"><button onclick="model.app.currentPage = 'LoginMail';updateView()">Logg inn</button></li>
            <ul>
        </div>
        <div class="meny">
          ${model.fuckLister0}
        </div>
        <div class="innhold" onclick="addToCart()">${model.products.name}</div>
        <div class="footer">footer</div>
    </div>
  `

  return html;
}

// ------------------------- Login Mail ---------------------------
function updateViewLoginWithMail(){
    html = /*html*/`
    <div class="loginPage">
        <div class="headerL">${Header()}</div>
        <div  class="smalLinje">
            <ul>
                <li class="backLogin"><button onclick="model.app.currentPage='FrontPage';updateView()">Back to main</button></li>
                <li class="cartLogin"><button onclick="model.app.currentPage = 'Cart';updateView()">Handlevogn ${model.shoppingCart.cartProducts.length} Pris: ${model.shoppingCart.totalPrice}</button></li></li>
            </ul> 
        </div>
        <div class="menyL">
            <div><h2 class="h2Login">Logg inn..</h2></div>
            <div>
                <div> <p class="paragraphMail">E-MAIL</p>
                      <p class="paragraphLogin">OR</p>
                      <p onclick="model.app.currentPage = 'LoginPhone'; updateView()" class="Phone">PHONE</p></div>
                <div  class="usernamePosition">${mail()}</div>
                <div  class="passwordPosition">${password()}</div>
                <div> <button class="loginButton">Log inn</button></div>
                <div class="paragraphLogin"> are you an robot?</div>
                <div> <button onclick="alert('1202 - Denne funksjonen fungerer ikke')" class="forgotPasswordButton">Forgot your password?</button></div>
                <div> <p class="paragraphLogin"> Or, are you a new user?</p></div>
                <div> <button class="createUserButton" onclick="model.app.currentPage = 'createNewAccount'; updateView()">Create new account</button></div>
            </div>
        </div>
        <div class="innholdL"></div>
        <div class="innhold1L"></div>
        <div class="footerL">footer</div>
    </div>`
    return html;
}
// ------------------------- Login Phone ---------------------------

function updateViewLoginWithPhone(){
    html = /*html*/`
    <div class="loginPage">
        <div class="headerL">${Header()}</div>
        <div  class="smalLinje">
            <ul>
                <li class="backLogin"><button onclick="model.app.currentPage='FrontPage';updateView()">Back to main</button></li>
                <li class="cartLogin"><button onclick="model.app.currentPage = 'Cart';updateView()">Handlevogn ${model.shoppingCart.cartProducts.length} Pris: ${model.shoppingCart.totalPrice}</button></li></li>
            </ul> 
        </div>
        <div class="menyL">
            <div><h2 class="h2Login">Logg inn..</h2></div>
            <div>
                <div><p onclick="model.app.currentPage = 'LoginMail'; updateView()"  class="Phone">E- MAIL</p>
                <p class="paragraphLogin">OR</p>
                <p class="paragraphMail">PHONE</p></div>
                <div class="usernamePosition">${phone()}</div>
                <div class="passwordPosition">${password()}</div>
                <div><button class="loginButton">Log inn</button></div>
                <div class="paragraphLogin"> are you an robot?</div>
                <div><button class="forgotPasswordButton">Forgot your password?</button></div>
                <div><p class="paragraphLogin"> Or, are you a new user?</<p></div>
                <div><button class="createUserButton" onclick="model.app.currentPage = 'createNewAccount'; updateView()">Create new account</button></div>
            </div>
        </div>
        <div class="innholdL"></div>
        <div class="innhold1L"></div>
        <div class="footerL">footer</div>
    </div>`
    return html;

}
// ------------------------- Create Account ----------------------------
function updateViewCreateAccount(){
    html =/*hmtl*/ `
    <div class="loginPage">
    <div class="headerL">${Header()}</div>
    <div  class="smalLinje">
        <ul>
            <li class="backLogin"><button onclick="model.app.currentPage = 'FrontPage';updateView()">Back to main</button></li>
            <li class="cartLogin"><button onclick="model.app.currentPage = 'Cart';updateView()">Handlevogn ${model.shoppingCart.cartProducts.length} Pris: ${model.shoppingCart.totalPrice}</button></li></li>
        </ul> 
    </div>
    <div class="menyL">
        <div><h2 class="h2Login">Create new account</h2></div>
        <div>
            <div class="usernamePosition">${firstName()}     </div>
            <div class="usernamePosition">${lastName()}      </div>
            <div class="usernamePosition">${mail()}          </div>
            <div class="usernamePosition">${phone()}         </div>
            <div class="passwordPosition">${password()}      </div>
            <p class="paragraphLogin">Write your password again :</p>
            <div class="passwordPosition">${passwordCheck()} </div>
            <div><button class="loginButton" onclick="model.app.currentPage = 'viewNewAccoust';updateView()">Continue</button> </div>
            <br>
            <div class="paragraphLogin">Already have an account?</div>
            <div><button class="loginButton" onclick="model.app.currentPage = 'LoginMail';updateView()">Login</div>
        </div>
    </div>
    <div class="innholdL"></div>
    <div class="innhold1L"></div>
    <div class="footerL">footer</div>
</div>`
return html;
}
function updateViewNewAccount(){
    html =/*hmtl*/ `
    <div class="loginPage">
    <div class="headerL">${Header()}</div>
    <div  class="smalLinje">
        <ul>
            <li class="backLogin"><button onclick="model.app.currentPage = 'FrontPage';updateView()">Back to main</button></li>
            <liclass="backLogin"><button onclick="model.app.currentPage = 'createNewAccount';updateView()">Back</button></li>
            <li class="cartLogin"><button onclick="model.app.currentPage = 'Cart';updateView()">Handlevogn ${model.shoppingCart.cartProducts.length} Pris: ${model.shoppingCart.totalPrice}</button></li></li>
        </ul> 
    </div>
    <div class="menyL">
        <div><h2 class="h2Login">Your Account</h2></div>
        <div>
            <div class="usernamePosition"> First Name: ${model.account.newFirstName}     </div>
            <div class="usernamePosition"> Last Name: ${model.account.newLastName}      </div>
            <div class="usernamePosition"> Your E-Mail:${model.account.createNewEmail}          </div>
            <div class="usernamePosition"> Your Phone Nr:${model.account.createNewPhoneNumber}         </div>
            <div class="passwordPosition"> Your Password:${model.account.createNewPassword}      </div>
            <div><button class="loginButton" onclick="model.app.currentPage = 'viewNewAccoust';updateView()">Create and logg inn</button> </div>
        </div>
    </div>
    <div class="innholdL"></div>
    <div class="innhold1L"></div>
    <div class="footerL">footer</div>
</div>`
return html;
}