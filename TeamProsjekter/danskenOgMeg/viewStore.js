function viewStore(){
    let html = '';
    html = `
    <div> Hei </div>
    
    `;appDiv.innerHTML = html};




    for(let i = 0; i < model.products.length; i++){

        if(model.products[i].categoryId == model.selectedCategory ){
            html += model.products[i].title + "text her " + model.products[i].price
            html += `<img src="${model.products[i].img}/>`; 
        }
        }