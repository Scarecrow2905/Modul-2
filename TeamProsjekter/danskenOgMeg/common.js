function visListe(fucka){
    let x = fucka;
    if(x == ''){
        faen = `
        <ul>
            <li class="A1">1</li>
            <li class="A1">2</li>
            <li class="A1">3</li>
        </ul>
    `
    } else {
        faen = ''
    }
    // updateView();
}
let apekatt = '';
drit();
function drit(){
for (let i = 0; i < model.categories.length; i++) {
    apekatt += /*html*/`
    <div class="drit" onclick="visListe(${i})">${model.categories[i].name}</div>`
}

}