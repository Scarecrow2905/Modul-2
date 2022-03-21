function Header() {
    return `
         <h1 class="header">Dansken og meg - Vintage skatter</h1>
         `
}
 
//Søkefelt
function searchfield(){
    return `
    <div><b>Søk etter varer her:</b> <input type="text" oninput="searchCatalog()"/></div>
    `
}


// let dropDown = '';
// function dropdownListe(){
// for (let i = 0; i < model.categories.length; i++) {
//     dropDown += /*html*/`
//     <div class="drit" onclick="showCategories(${i})">${model.categories[i].name }</div>
//     <div>${faen}</div>
//     `
// }
//}

function showCategories(index) {
    let subLister = '';
     for (let i = 0; i < model.categoriesSub.length; i++){
          for (let a = 0; a < model.categories.length; a++){
                 if(model.categoriesSub[i].parentId == index ){
                    subLister += '<ul>' + '<li class="sublist" onclick="${model.categoriesSub[i].id}">' + model.categoriesSub[i].categoriName + '</li>' + '</ul>';
                    showSubLister = subLister;
                    if (subLister.length == 2){
                        return showSubLister;
                    }
                    //  x = subLister ;
                    //     if(x == ''){
                    //         subLister = model.categoriesSub[i].categoriName;
                    //     } else {
                    //         subLister = '';
                    //     }
                    }
                } 
            }
        console.log('sub', subLister)
        console.log('x', x)
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


function SC() { 
    let toggle = () => {
    let element = document.getElementById('Sub-cat');
        let hidden = element.getAttribute('hidden');
            
        if (hidden) { 
            element.removeAttribute('hidden');
        }
        else {
            element.setAttribute('hidden', 'hidden');
        }
    }
// <button onclick="toggle();">My button</button>
    
}
