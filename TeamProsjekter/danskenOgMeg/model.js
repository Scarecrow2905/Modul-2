
const model = {

    text1: "",
    shoppingCart: {

        totalPrice: 0,
        cartProducts: [
        ],
        quantity: 0,
        numberOfItems: 0,
        typeOfDelivery: '',
    },

    //App -!-

    // Navn på de forskjellige sider.
    app: {
        currentPage: 'FrontPage', //FrontPage |  Product | LoginMail |LoginPhone | Cart | viewProduct |PaymentPage | 
        currentUser: 0,
        status: false,
        showStatus: 'Logg inn',
        click: 0,
    },
    //Inputs -!-
    idIndex: 2,
    //Inputs for login og å lage nye brukeretest
    account: {
        users: [
            { firstName: 'admin', lastName: 'nordmann', phone: 12121212, email: 'test@test.no', password: 'abc123', id: 1 },
            { firstName: 'kåre', lastName: 'nordmann', phone: 0, email: 'fest@test.no', password: 'abcd123', id: 3 },
            { firstName: 'håre', lastName: 'nordmann', phone: 0, email: 'hest@test.no', password: 'abce123', id: 4 },
        ],
        // firstName:[],
        // lastName:[],
        phone: '',
        email: '',
        password: '',
        //------
        newFirstName: '',
        newLastName: '',
        createNewPhoneNumber: '',
        createNewEmail: '',
        createNewPassword: '',
        createNewPasswordCheck: '',
    },
    //Søkefelt
    frontPage: {
        search: '',
    },
    //Legge til nye kategorier
    createCategory: [
        { name: '', id: '', sub: [] },
        { name: '', id: '', parentId: '' },
    ],
    createSubCategory: [
        { categoriName: '', id: '', parentId: '' },

    ],

    //Legge til nye produkter
    createItems: {
        title: '',
        price: 0,
        stock: 1,
        category: '',
        categoryId: '',
        subCategory: '',
        img: '',
        description: '',
        measures: '',
        color: [],
        country: '',
        year: '',
    },
    // Viser kategori og sub katergori menyen
    viewMenyCategories: '',
    //Kategorier med forskjellige id og parentId
    activeSubCategory: [false, false, false, false, false, false, false, false],
    test: false,
    //OBS ::: Legge til False per kategori/Sub 

    categories: [
        {
            name: 'Stue', id: 1,
            sub: [
                { categoriName: 'Sofa', id: 11, parentId: 1 },
                { categoriName: 'Sofabord', id: 12, parentId: 1 },
                { categoriName: 'Sjeselong', id: 14, parentId: 1 },
                { categoriName: 'Kommoder', id: 15, parentId: 1 },
                { categoriName: 'Hyller', id: 16, parentId: 1 },
                { categoriName: 'Reoler', id: 17, parentId: 1 },
                { categoriName: 'Interiør', id: 18, parentId: 1 },
                { categoriName: 'Tekstil', id: 19, parentId: 1 },
            ]
        },
        {
            name: 'Spiserom', id: 2,
            sub: [
                { categoriName: 'Spisebord', id: 21, parentId: 2 },
                { categoriName: 'Spisestuestoler', id: 22, parentId: 2 },
                { categoriName: 'Reoler', id: 23, parentId: 2 },
                { categoriName: 'Kommode', id: 24, parentId: 2 },
                { categoriName: 'Skjenk', id: 25, parentId: 2 },
                { categoriName: 'Kommode', id: 26, parentId: 2 },
                { categoriName: 'Interiør', id: 27, parentId: 2 },
                { categoriName: 'Tekstil', id: 28, parentId: 2 },

            ]
        },
        {
            name: 'Kjøkken', id: 3, sub: [
                { categoriName: 'Kjøkkenbord', id: 31, parentId: 3 },
                { categoriName: 'Kjøkkenstoler', id: 32, parentId: 3 },
                { categoriName: 'Hyller', id: 33, parentId: 3 },
                { categoriName: 'Interiør', id: 35, parentId: 3 },
                { categoriName: 'Tekstil', id: 36, parentId: 3 },
            ]
        },
        {
            name: 'Soverom', id: 4, sub: [
                { categoriName: 'Seng', id: 41, parentId: 4 },// seng
                { categoriName: 'Nattbord', id: 42, parentId: 4 },
                { categoriName: 'Kommoder', id: 43, parentId: 4 },
                { categoriName: 'Garderobeskap', id: 44, parentId: 4 },
                { categoriName: 'Interiør', id: 45, parentId: 4 },
                { categoriName: 'Tekstil', id: 46, parentId: 4 },
            ]
        },
        {
            name: 'Bad', id: 5, sub: [
                { categoriName: 'Badekar', id: 51, parentId: 5 },
                { categoriName: 'Vaskebrett', id: 52, parentId: 5 },
                { categoriName: 'Innredning', id: 53, parentId: 5 },
                { categoriName: 'Interiør', id: 54, parentId: 5 },
                { categoriName: 'Tekstil', id: 55, parentId: 5 },
            ]
        },
        {
            name: 'Gang', id: 6, sub: [
                { categoriName: 'Sko oppbevaring', id: 61, parentId: 6 },
                { categoriName: 'Garderobeskap', id: 62, parentId: 6 },
                { categoriName: 'Hattehyller', id: 63, parentId: 6 },
                { categoriName: 'Interiør', id: 64, parentId: 6 },
                { categoriName: 'Tekstil', id: 65, parentId: 6 },
            ]
        },
        {
            name: 'Klær', id: 7, sub: [
                { categoriName: 'Kjole', id: 71, parentId: 7 },
                { categoriName: 'Bukser', id: 72, parentId: 7 },
                { categoriName: 'Gensere', id: 73, parentId: 7 },
                { categoriName: 'Jakker', id: 74, parentId: 7 },
                { categoriName: 'Cardigans', id: 75, parentId: 7 },
                { categoriName: 'Hatter', id: 76, parentId: 7 },
                { categoriName: 'Skjerf', id: 77, parentId: 7 },
                { categoriName: 'Øredobber', id: 78, parentId: 7 },
            ]
        },
        {
            name: 'Sko', id: 8, sub: [
                { categoriName: 'Støvletter', id: 81, parentId: 8 },
                { categoriName: 'Støvler', id: 82, parentId: 8 },
                { categoriName: 'Joggesko', id: 83, parentId: 8 },
                { categoriName: 'Platåsko', id: 84, parentId: 8 },
                { categoriName: 'Høyhælte sko', id: 85, parentId: 8 },
            ]
        },
        {
            name: 'Lesesal', id: 9, sub: [
                { categoriName: 'Godstol', id: 91, parentId: 9 },
                { categoriName: 'Bokhyller', id: 92, parentId: 9 },
                { categoriName: 'Avlastningsbord', id: 93, parentId: 9 },
                { categoriName: 'Interiør', id: 94, parentId: 9 },
                { categoriName: 'Tekstil', id: 95, parentId: 9 },
            ]
        },
    ],


    // Data -!-

    //Betalingsløsninger
    payment: {
        vipps: false,
        card: false,
        delivery: false,
        pickupPoint: false,
    },
    

    //Alle produkter
    randomNumbers: [2, 5, 7, 9, 0, 10],
    activeProduct: false,
    midlertidlig: '',
    viewProductsHere: '',
    sliderValueIs: 20000,
    clickedOnProducts: false,
    modalPopupInformation: '',

    products:[],

}

