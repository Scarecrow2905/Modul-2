// Controller
function Login(){
    let ansattNavn = model.inputs.loginPage.username;
    let ansattPassord = model.inputs.loginPage.password;
    
    for (let i = 0; i < model.ansatt.length; i++) {
    if (model.ansatt[i].username.includes(ansattNavn) &&  model.ansatt[i].password.includes(ansattPassord)){
        model.app.currentUser = model.ansatt[i].username;
        model.app.currentUserID =  model.ansatt[i].id;
       return alert('Logga inn'), updateViewPanel()  
    }}
    return alert('Feil brukernavn/passord')
};

    
    
    
    
    
    
    



