let html = '';
const model = {
    // *** Husk endTime/startTime og samme med Dato ***
    // Tilstand app
    app: {
        currentPage: 'panel', // LoginPage / panel
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
            addComment: [],
            addCheckmark: 0,
        },
    },
    // Data
    ansatt: [
        { id: 000, username: 'admin',      password: '1234' },
        { id: 000, username: 'Renee',      password: '4242' },
        { id: 000, username: 'Thorbjørn',  password: '3131' },
        { id: 000, username: 'Tommy',      password: '4141' },
        { id: 000, username: 'Trond Erik', password: '6969' },
        { id: 001, username: 'Erter',      password: '0001' },
    ],
    statistics: {
        nei: 0,
        ja: 0,
        kanskje: 0,
        besvart: 0,
        ubesvart: 0,
    },
}