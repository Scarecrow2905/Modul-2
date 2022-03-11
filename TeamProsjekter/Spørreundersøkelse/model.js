let html = '';
let svar = '';
let spmsvar = '';
const model = {
    spm: '',
    spmSvar:'',
    // *** Husk endTime/startTime og samme med Dato ***
    // Tilstand app
    app: {
        currentPage: 'Spørreundersøkelse', // LoginPage / panel / statistikk / Spørreundersøkelse / kalender
        currentUser: '',
        currentUserID: '',
    },
    // Input felter til hver side
    inputs: {
        loginPage: {
            username: '',
            password: '',
        },
        questionsPage: {
            addQuestions: [],
            question:[],
            addComment: [],
            addCheckmark: 0,
        },
    },
    // Data
    ansatt: [
        { id: 000, groupID: 'admin', username: 'admin',      password: '1234' },
        { id: 000, groupID: 'admin', username: 'Renee',      password: '4242' },
        { id: 000, groupID: 'admin', username: 'Thorbjørn',  password: '3131' },
        { id: 000, groupID: 'admin', username: 'Tommy',      password: '4141' },
        { id: 000, groupID: 'admin', username: 'Trond Erik', password: '6969' },
        { id: 001, groupID: 'user', username: 'Erter',      password: '0001' },
    ],
    statistics: {
        nei: 0,
        ja: 0,
        kanskje: 0,
        besvart: 0,
        ubesvart: 0,
    },
}