function viewProduct() {
    for (let i = 0; i < model.products.length; i++) {
        let html = '';
        // model.app.currentPage = 'LoginMail'
        html += /*html*/`
        </div>
        < class="produkt">
        <div>   ${model.products[i].title}</div>
          <div>  ${model.products[i].price}</div>
          <div>  ${model.products[i].stock}</div>
        <img class="" src="${model.products[i].img}"/>
        <p>morra puller fungerer du nå?</p>

  `

        return html;
    };
    console.log(p)
}

