// Login
 function updateViewLogin(){
    document.getElementById('app').innerHTML =/*html*/`
        <input type="text" placeholder="Username" value="${model.inputs.loginPage.username}" oninput="model.inputs.loginPage.username = this.value">

        <input type="password" placeholder="Password" value="${model.inputs.loginPage.password}" oninput="model.inputs.loginPage.password = this.value"><br>
        <button onclick="Login()">Logg inn</button>

        
    
        `;
    

}
// Panel
function updateViewPanel(){
    document.getElementById('app').innerHTML =/*html*/
        `
        ${navigasjon()}
        <button onclick="model.app.currentPage = 'LoginPage';updateView()">Logg ut</button> <br>
        <hr>
        ${knapper()}
       
        Velkommen ${model.inputs.loginPage.username} din hæstkuk
        `

};
// Kalender
function updateViewKalender(){
    document.getElementById('app').innerHTML =/*html*/
    `<button onclick="model.app.currentPage='panel'; updateView()">tilbake</button>
hei på deg`
}
