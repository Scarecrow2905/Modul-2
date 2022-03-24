// ------------ oversikrift --------------
function Header() {
    return `
         <h1 class="header">Dansken og meg - Vintage Julefinger</h1>
         `
}

// ---------------- Søkefelt ---------------
function searchfield(){
    return `
    <div><b>Søk etter varer her:</b> <input type="text" oninput="searchCatalog()"/></div>
    `
}
// ------------ LOGIN----------------
function mail(){
    return `
    <div><input class="username" placeholder="E-post*" type="email" oninput="${model.account.userName}"/></div>
`
}
function phone(){
    return `
    <div><input class="username" placeholder="Phone Number*" type="tel" oninput="${model.account.userName}"/></div>
`
}
function password(){
    return `
    <div><input class="password" placeholder="Password*" type="password" oninput="${model.account.password}"/></div>
    `

}







    