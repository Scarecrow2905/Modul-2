// ------------ oversikrift --------------
function Header() {
    return `
         <h1 class="header" onclick="model.app.currentPage='FrontPage'; viewStuff(100);">Dansken og meg<h1>
         <h2 class="smallerHeader" onclick="model.app.currentPage='FrontPage'; viewStuff(100);">Vintage Skatter</h2>
         `
};

// ---------------- Søkefelt ---------------
function searchfield() {
    return `
    <div class="Searchfield"> <input placeholder="Søkeord" type="text" onchange="searchCatalog(this.value)"/></div>
    `
}
function slider() {
    return `
    <div><input type="range" class="slider" value="${model.sliderValueIs}" step="1000 "min="0" max="20000" onchange="sliderValue(this.value);updateView();">

    `
}

// ------------ LOGIN----------------onchange="sliderValue(this.value)"
function mail() {
    return `
    <div><input class="username" value="${model.account.email}" placeholder="E-post*" type="email" oninput="model.account.email = this.value"/></div>
`
}
function phone() {
    return `
    <div><input class="username" value="${model.account.phone}" placeholder="Phone*" type="email" oninput="model.account.phone = this.value"/></div>
`
}
function password() {
    return `
    <div><input class="username" value="${model.account.password}" placeholder="Password*" type="email" oninput="model.account.password = this.value"/></div>
`
}

// ----------- Create New Login User -----------------------------
function newMail() {
    return `
    <div><input class="username" value="${model.account.createNewEmail}" placeholder="E-post*" type="email" oninput="model.account.createNewEmail = this.value"/></div>
`
}
function newPhone() {
    return `
    <div><input class="username" value="${model.account.createNewPhoneNumber}" placeholder="Phone Number*" type="tel" oninput="model.account.createNewPhoneNumber = this.value"/></div>
`
}
function newPassword() {
    return `
    <div><input class="password" value="${model.account.createNewPassword}"  placeholder="Password*" type="password" oninput="model.account.createNewPassword = this.value"/></div>
    `
}
function passwordCheck() {
    return `
    <div><input class="password" value="${model.account.createNewPasswordCheck}" placeholder="Password*" type="password" oninput="model.account.createNewPasswordCheck = this.value"/></div>
    `
}
function firstName() {
    return `
    <div><input class="password"  value="${model.account.newFirstName}" placeholder="First name*" type="text" oninput="model.account.newFirstName = this.value"/></div>
    `
}
function lastName() {
    return `
    <div><input class="password" value="${model.account.newLastName}" placeholder="Last name*" type="text" oninput="model.account.newLastName = this.value"/></div>
    `
}

// Hener ut info om brukeren som er innlogget
function accountInfo(){
    for (let i = 0; i < model.account.users.length; i++) {
        if (model.app.currentUser == model.account.users[i].id) {
            return `
            <div>
                <ul>
                    <li><b>First Name: </b>${model.account.users[i].firstName}</li>
                    <li><b> Last Name: </b>${model.account.users[i].lastName}</li>
                    <li><b>Mail adress: </b>${model.account.users[i].email}</li>
                    <li><b>Your Password: </b>${model.account.users[i].password}</li>
                </ul>
            </div>
            <br><hr>
            <button>Edit payment information</button><br><hr>
            <button>Edit first/Last name</button><br><hr>
            <button>Edit mail adress</button><br><hr>
            <button>Edit password</button><br><hr>
            <button>Watch your order</button><br><hr>
            <button>Your receipts</button><hr>






       
    `
        }
    }
}
function AddPaymentInformation(){
    for (let i = 0; i < model.payment.length; i++) {
            return `
       <div>Your Card Number: ${model.payment[i].cardNumberInput}</div>;
       <div>your Cardholder Name:${model.payment[i].cardUsersName}</div>
    `
        
    }
}

function login() {
    // if model.account.users[i].email === Input.value = "true" && model.account.users[i].password === input.value = "true"
    // active.user === model.account.users[i]
}


//



    






