// function navigasjon(){
//     return /*html*/ `
//     <button onclick="model.app.currentPage='analyse'; updateView()">Analyse og Arkiv</button>
//     <button onclick="model.app.currentPage='panel'; updateView()">Aktiv undersøkelse</button>
//     <button onclick="model.app.currentPage='aktivUndersøkelse'; updateView()">Lag ny analyse</button>
//     `;
// }

function knapper(){
    return `
    <div id="adminPanel"> 
    <button onclick="model.app.currentPage='kalender'; updateView();">kalender</button><br>
    <button>personallister</button><br>
    <button  onclick="model.app.currentPage='statistikk'; updateView()";>statistikk</button><br>
    <button onclick="model.app.currentPage='Spørreundersøkelse'; updateView()";>Ny spørreundersøkelse</button>
    </div>`
};
var i = 0;
function progressBar() {
    if (i == 0) {
        i = 1;
        var elem = model.statistics.ja;
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = + "%";
                elem.innerHTML = width + "%";
            }   
        }
    }
}
