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
    <div><input class="username" value="${model.account.phone}" placeholder="Telefon*" type="email" oninput="model.account.phone = this.value"/></div>
`
}
function password() {
    return `
    <div><input class="username" value="${model.account.password}" placeholder="Passord*" type="email" oninput="model.account.password = this.value"/></div>
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
    <div><input class="username" value="${model.account.createNewPhoneNumber}" placeholder="Telefonnummer*" type="tel" oninput="model.account.createNewPhoneNumber = this.value"/></div>
`
}
function newPassword() {
    return `
    <div><input class="password" value="${model.account.createNewPassword}"  placeholder="Passord*" type="password" oninput="model.account.createNewPassword = this.value"/></div>
    `
}
function passwordCheck() {
    return `
    <div><input class="password" value="${model.account.createNewPasswordCheck}" placeholder="Passord*" type="password" oninput="model.account.createNewPasswordCheck = this.value"/></div>
    `
}
function firstName() {
    return `
    <div><input class="password"  value="${model.account.newFirstName}" placeholder="Fornavn*" type="text" oninput="model.account.newFirstName = this.value"/></div>
    `
}
function lastName() {
    return `
    <div><input class="password" value="${model.account.newLastName}" placeholder="Etternavn*" type="text" oninput="model.account.newLastName = this.value"/></div>
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
            <button onclick="model.app.whatInfoIsShowed = 'editPaymentInfo' ;ShowAccountInfo()">Endre betalingsinformasjon</button><br><hr>
            <button onclick="model.app.whatInfoIsShowed = 'editFirstAndLastname' ;ShowAccountInfo()">Endre fornavn/Etternavn</button><br><hr>
            <button onclick="model.app.whatInfoIsShowed = 'editMail' ;ShowAccountInfo()">Endre e-post adresse</button><br><hr>
            <button onclick="model.app.whatInfoIsShowed = 'editPassword' ;ShowAccountInfo()">Endre passord</button><br><hr>
            <button onclick="model.app.whatInfoIsShowed = 'seeOrder' ;ShowAccountInfo()">Ordrehistorikk</button><br><hr>
            <button onclick="model.app.whatInfoIsShowed = 'seeReceipts' ;ShowAccountInfo()">Dine kvitteringer</button><hr>






       
    `
        }
    }
}
function ShowAccountInfo(){
    for (let i = 0; i < model.account.users.length; i++) {
         if (model.app.whatInfoIsShowed == 'editPaymentInfo'){
            model.app.showInfoForAccount = `
            <ul>
                <li>Your Card Number: ${model.account.users[i].cardnumber}</li>
                <li>your Cardholder Name:${model.account.users[i].cardname}</li>
                <li>New card number: <input type="number" value="${model.payment.cardNumberInput}" oninput="model.payment.cardNumberInput = this.value"</li>
                <li>New card name: <input type="text" value="${model.payment.cardUsersName}" oninput="model.payment.cardUsersName = this.value"</li>
                <li><button onclick="UpdateChange(${i})">Save changes</button></li>
                <li><button onclick="deleteCardInformation(${i})">Delete information</button></li>

            </ul>`
        }
        else if (model.app.whatInfoIsShowed == 'editFirstAndLastname'){
            model.app.showInfoForAccount = `
            <ul>
                <li>Your first name: ${model.account.users[i].firstName}</li>
                <li>your last name:${model.account.users[i].lastName}</li>
                <li>New first name: <input type="text" value="${model.account.newFirstName}" oninput="model.account.newFirstName = this.value"</li>
                <li>New last name: <input type="text" value="${model.account.newLastName}" oninput="model.account.newLastName = this.value"</li>
                <li><button onclick="UpdateChange(${i})">Save changes</button></li>


            </ul>`
        }
        else if (model.app.whatInfoIsShowed == 'editMail'){
            model.app.showInfoForAccount = `
            <ul>
                <li>Current mail: ${model.account.users[i].email}</li>
                <li>New mail: <input type="text" value="${model.account.createNewEmail}" oninput="model.account.createNewEmail = this.value"</li>
                <li><button onclick="UpdateChange(${i})">Save changes</button></li>

            </ul>`
        }
        else if (model.app.whatInfoIsShowed == 'editPassword'){
            model.app.showInfoForAccount = `
            <ul>
                <li>Your password: ${model.account.users[i].password}</li>
                <li>New Password: <input type="text" value="${model.account.createNewPassword}" oninput="model.account.createNewPassword = this.value"</li>
                <li>New Password (again): <input type="text" value="${model.account.createNewPasswordCheck}" oninput="model.account.createNewPasswordCheck = this.value"</li>

                <li><button onclick="UpdateChange(${i})">Save changes</button></li>
            </ul>`
        }
        else if (model.app.whatInfoIsShowed == 'seeOrder'){
            model.app.showInfoForAccount = `
            <ul>
                <li>Your order(s):  ${model.app.showAccountOrders}</li>
            </ul>`
        }
        else if (model.app.whatInfoIsShowed == 'seeReceipts'){
            model.app.showInfoForAccount = `
            <ul>
                <li>Your receipt(s):  ${model.app.showAccountReceipts}</li>
            </ul>`
        }
    }
    console.log('info som skal vises: ' + model.app.whatInfoIsShowed);
    console.log('showInfoForAccount er: ' + model.app.showInfoForAccount);

    updateView();
}

{/* <li>Your Card Number: ${model.payment[i].cardNumberInput}</li>
<li>your Cardholder Name:${model.payment[i].cardUsersName}</li> */}



    






