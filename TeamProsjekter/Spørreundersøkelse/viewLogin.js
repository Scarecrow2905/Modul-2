// Login
 function updateViewLogin(){
     document.getElementById('app').innerHTML =/*html*/`
       <div class="Login-box"> <input type="text" placeholder="Username" value="${model.inputs.loginPage.username}" oninput="model.inputs.loginPage.username = this.value">

        <input type="password" placeholder="Password" value="${model.inputs.loginPage.password}" oninput="model.inputs.loginPage.password = this.value"><br>
        <button onclick="Login()">Logg inn</button>
        </div>
        `;
}
// Panel
function updateViewPanel(){
    document.getElementById('app').innerHTML =/*html*/
        `
        <button onclick="model.app.currentPage = 'LoginPage';updateView()">Logg ut</button> <br>
        <hr>
        ${knapper()}
       
        Velkommen ${model.inputs.loginPage.username} 
        `
};
// Kalender
function updateViewKalender(){
    document.getElementById('app').innerHTML =/*html*/
    `<button onclick="model.app.currentPage='panel'; updateView()">tilbake</button>
    <h2>Kalender</<h2>`
}
//Ny undersøkelse
function updateViewUndersøkelse(){
    document.getElementById('app').innerHTML =/*html*/
    `<button onclick="model.app.currentPage='panel'; updateView()">tilbake</button>
    <h2>Lag en spørreunderøkelse</<h2><br>
    Skriv inn spørsmål: <input onchange = "model.spm = this.value" type ="text"><br>
    svar alternativ:  <input onchange="model.spmSvar = this.value" type ="text"><br>
    <button onclick="sendInnSpm()";>Send inn Spørsmål</button>
    <button onclick="sendInnSvarAlt()";> Send inn svar alternativer</button><br>
    Spørsmål: ${svar}<br>
    alternativer:${spmsvar}
    `
}
// Stastistikker
function updateViewStatistics() {
    document.getElementById('app').innerHTML =/*html*/
    `<button onclick="model.app.currentPage='panel'; updateView()">tilbake</button>
    <h2>Statistikk. Denne statistikken er bare feil, ikke stol på den</h2>
    <div id="container">

    
    <div id="progress-bar" role="progress-bar" aria-valuenow="10"
    aria-valuemin="0" aria-valuemax="100" style="width:70%">
    <div class="progress-bar" id="progressBesvart" ${model.statistics.besvart}>Antall besvart</div><br>
    <div class="progress-bar" id="progressJa" ${model.statistics.ja}>Besvart: Ja</div><br>
    <div class="progress-bar" id="progressNei" ${model.statistics.nei}>Besvart: Nei</div><br>
    <div class="progress-bar" id="progressKanskje" ${model.statistics.kanskje}>Besvart: Kanskje</div><br>
    <div class="progress-bar" id="progressUbesvart" ${model.statistics.ubesvart}>Antall ubesvart</div><br>
    </div>
    
    <br><hr>
    <button onclick="progressBar()">Klikk her?</button>
    
    
    `
}
//    <progress id="playerhealth"value="${model.player[chosenPlayer].health}" max="${model.player[chosenPlayer].maxhealth}">
