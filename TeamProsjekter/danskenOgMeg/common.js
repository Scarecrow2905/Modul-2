function Header() {
    return `
         <h1 class="header">Dansken og meg - Vintage skatter</h1>
         `
 }
function searchfield(){
    return `
    <div><b>Søk etter varer her:</b> <input type="text" oninput="searchCatalog()"/></div>
    `
}

function showCategories(index) {
    let subLister = '';
     for (let i = 0; i < model.categoriesSub.length; i++){
          for (let a = 0; a < model.categories.length; a++){
                 if(model.categoriesSub[i].parentId == index ){
                    subLister += '<ul>' + '<li class="sublist" onclick="${model.categoriesSub[i].id}">' + model.categoriesSub[i].categoriName + '</li>' + '</ul>';
                    showSubLister = subLister;
                    
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

// function SC() { 
//     let toggle = () => {
//     let element = document.getElementById('Sub-cat');
//         let hidden = element.getAttribute('hidden');
            
//         if (hidden) { 
//             element.removeAttribute('hidden');
//         }
//         else {
//             element.setAttribute('hidden', 'hidden');
//         }
//     }
// <button onclick="toggle();">My button</button>
//}
