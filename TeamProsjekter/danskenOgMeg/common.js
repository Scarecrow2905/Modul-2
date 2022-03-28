// ------------ oversikrift --------------
function Header() {
    return `
         <h1 class="header">Dansken og meg - Hobo´s skatter</h1>
         `
};




// ---------------- Søkefelt ---------------
function searchfield(){
    return `
    <div><b>Søk etter varer her:</b> <input type="text" oninput="searchCatalog()"/></div>
    `
}
// ------------ LOGIN----------------
function mail(){
    return `
    <div><input class="username" value="${model.account.email}" placeholder="E-post*" type="email" oninput="model.account.email = this.value"/></div>
`
}
function phone(){
    return `
    <div><input class="username" value="${model.account.phone}" placeholder="Phone*" type="email" oninput="model.account.phone = this.value"/></div>
`
}
function password(){
    return `
    <div><input class="username" value="${model.account.password}" placeholder="Password*" type="email" oninput="model.account.password = this.value"/></div>
`
}

// ----------- Create New -----------------------------
function newMail(){
    return `
    <div><input class="username" value="${model.account.createNewEmail}" placeholder="E-post*" type="email" oninput="model.account.createNewEmail = this.value"/></div>
`
}
function newPhone(){
    return `
    <div><input class="username" value="${model.account.createNewPhoneNumber}" placeholder="Phone Number*" type="tel" oninput="model.account.createNewPhoneNumber = this.value"/></div>
`
}
function newPassword(){
    return `
    <div><input class="password" value="${model.account.createNewPassword}"  placeholder="Password*" type="password" oninput="model.account.createNewPassword = this.value"/></div>
    `
}
function passwordCheck(){
    return `
    <div><input class="password" value="${model.account.createNewPasswordCheck}" placeholder="Password*" type="password" oninput="model.account.createNewPasswordCheck = this.value"/></div>
    `
}
function firstName(){
    return `
    <div><input class="password"  value="${model.account.newFirstName}" placeholder="First name*" type="text" oninput="model.account.newFirstName = this.value"/></div>
    `
}
function lastName(){
    return `
    <div><input class="password" value="${model.account.newLastName}" placeholder="Last name*" type="text" oninput="model.account.newLastName = this.value"/></div>
    `
}

function login() {
// if model.account.users[i].email === Input.value = "true" && model.account.users[i].password === input.value = "true"
// active.user === model.account.users[i]
}






    
