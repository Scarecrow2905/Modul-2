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
                <div> <button class="loginButton" onclick="DoThisMailPersonExist()">Log inn</button></div>
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
                <div><button class="loginButton" onclick="DoThisPhonePersonExist()">Log inn</button></div>
                <div class="paragraphLogin"> are you an robot?</div>
                <div><button  onclick="alert('1202 - Denne funksjonen fungerer ikke')" class="forgotPasswordButton">Forgot your password?</button></div>
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
            <div class="usernamePosition">${newMail()}          </div>
            <div class="usernamePosition">${newPhone()}         </div>
            <div class="passwordPosition">${newPassword()}      </div>
            <p class="paragraphLogin">Write your password again :</p>
            <div class="passwordPosition">${passwordCheck()} </div>
            <div><button class="loginButton" onclick="model.app.currentPage = 'viewNewAccount';checkPasswordAndMail()">Continue</button> </div>
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
// ------------------------- Account Information ----------------------------

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
        <div><h2 class="h2Login">Your Account Information</h2></div>
        <div>
            <div class="usernamePosition"> First Name:<br><b>${model.account.newFirstName}</b>    </div>
            <div class="usernamePosition"> Last Name:<br><b> ${model.account.newLastName}</b>     </div>
            <div class="usernamePosition"> Your E-Mail:<br><b>${model.account.createNewEmail}</b>          </div>
            <div class="usernamePosition"> Your Phone Nr:<br><b>${model.account.createNewPhoneNumber}</b>        </div>
            <div class="passwordPosition"> Your Password:<br><b>${model.account.createNewPassword}</b>      </div>
            <div><button class="loginButton" onclick="model.app.currentPage = 'viewNewAccount';addNewInforToModel();">Create and logg inn</button> </div>
        </div>
    </div>
    <div class="innholdL"></div>
    <div class="innhold1L"></div>
    <div class="footerL">footer</div>
</div>`
return html;
}


function updateViewLogin(){
    html = /*html*/
    `
    <div class="header"${Header()}</div>


<div class="Login-wrapper">
<input type="text" placeholder="Username"oninput=""/> 
<input type="text" placeholder="Password"oninput=""/>
<button onclick="">Login</button>
</div>
    
  
    ` 
    return html;
};



// Line 9 and 9 Requires oninputs
// Login require onclick => Login w/Username/PW => Welcome User === User: {user} [is Logged in.] => Login ~~ log out.