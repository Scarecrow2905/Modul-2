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
    return alert("Feil brukernavn/passord. Du må nesten skrive riktig, dickhead!")
};

function sendInnSpm(){
    model.inputs.questionsPage.addQuestions.push(model.spm)
    svar += model.inputs.questionsPage.addQuestions[0];
        updateViewUndersøkelse();
}
function sendInnSvarAlt(){
    model.inputs.questionsPage.question.push(model.spmSvar)
    for(let i = 0; i < model.inputs.questionsPage.question.length; i++)
    spmsvar = model.inputs.questionsPage.question[i] + ': ' + '<input type="checkbox">' 
    updateViewUndersøkelse();

}    

    
    
    
    



