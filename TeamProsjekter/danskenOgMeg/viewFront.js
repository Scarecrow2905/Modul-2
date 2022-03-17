function updateViewFront() {
    html = `
    ${Header()}
    <div class="col-1"> ${apekatt}</div>
    <div class="col-2">Hei du</div>
    <div class="col-3">Logg inn</div>
    <div class="col-4" onclick="model.app.currentPage = 'Cart';updateView()">Handlevogn</div>
    <button class="col-3> Cart </button>

    `
return html;

}
