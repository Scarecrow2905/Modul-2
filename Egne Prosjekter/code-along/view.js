function updateNetflix () {
    let html = '';
    for (let i = 0; i < model.titles.length; i++) {
        html += ` ${model.titles[i].name} `
    };

    document.getElementById('app').innerHTML = html;
    
    
}

updateNetflix()