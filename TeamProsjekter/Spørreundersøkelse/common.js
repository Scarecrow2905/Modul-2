function navigasjon(){
    return /*html*/ `
    <button onclick="model.app.currentPage='analyse'; updateView()">Analyse og Arkiv</button>
    <button onclick="model.app.currentPage='panel'; updateView()">Aktiv undersøkelse</button>
    <button onclick="model.app.currentPage='aktivUndersøkelse'; updateView()">Lag ny analyse</button>


    `;
}

function knapper(){
    return `
    <div id="adminPanel"> 
    <button onclick="model.app.currentPage='kalender'; updateView();">kalender</button><br>
    <button>personallister</button><br>
    <button>Oversikt</button><br>
    <button>Ny spørreundersøkelse</button>
    </div>`
};
