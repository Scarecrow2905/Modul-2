function Header() {
    return `
         <h1 class="header">Dansken og meg - Vintage skatter</h1>
         `
 }
function searchfield(){
    return `
    <div>Søk etter varer her: <input type="text" oninput="searchCatalog()"</div>
    `
}

let dropDown = '';
function dropdownListe(){
for (let i = 0; i < model.categories.length; i++) {
    dropDown += /*html*/`
    <div class="drit" onclick="showSubCategories(${i})">${model.categories[i].name }</div>
    <div>${faen}</div>
    `
}
}
function showSubCategories(index) {
     for (let i = 0; i < model.categoriesSub.length; i++){
          for (let a = 0; a < model.categories.length; a++){
             if(model.categoriesSub[i].parentId == index){
                subLister = model.categoriesSub[i].categoriName

             }
         }
     }
    // if (index == model.categories[i].id) {
    //     subLister = model.catagoriesSub[a]

    // }
    //if (model.categoriesSub[a] === true) return;

    

    updateView();

    
}


    // if (index == model.categories[0].id) {
    //     subLister = `<div id='subListe'>${model.categoriesSub[0].categoriName}</div>`
   
    // console.log('er', subLister)
    // console.log('er',model.categories[index].id)
    // if(model.categories[index].id == 1){ faen = model.categoriesSub[0].categoriName}
    // console.log('er:', faen)

  
function visListe(fucka){
    let x = subLister;
    if(x == ''){
        subListe = `
        <ul>
            <li class="A1">1</li>
            <li class="A1">2</li>
            <li class="A1">3</li>
        </ul>
    `
    } else {
        subLister = ''
    }
}

function AutomatiseringAvBarneArbeid() {
    if (model.categories.length > 0) {

    }
}