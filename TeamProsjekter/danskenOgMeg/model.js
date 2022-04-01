
const model = {

    text1: "",
    shoppingCart: {

        totalPrice: 0,
        cartProducts: [
            // {
            //     title: 'Sofa',
            //     price: 6000,
            //     s tock: 69,
            //     category: 'Stue',
            //     categoryId: 11,
            //     subCategory: 'Store ting',
            //     img: 'testSofa.jpg',
            //     description: 'Godt brukt, men fortsatt en flott sofa. Stått lagret i bod siden 2005.',
            //     measures: 'Høyde 80cm. Dybde 50cm.',
            //     color: ['Oker Gul'],
            //     country: 'Danmark',
            //     year: '2006',
            // },
            // {
            //     title: 'Sofa',
            //     price: 6000,
            //     stock: 69,
            //     category: 'Stue',
            //     categoryId: 11,
            //     subCategory: 'Store ting',
            //     img: 'testSofa.jpg',
            //     description: 'Godt brukt, men fortsatt en flott sofa. Stått lagret i bod siden 2005.',
            //     measures: 'Høyde 80cm. Dybde 50cm.',
            //     color: ['Oker Gul'],
            //     country: 'Danmark',
            //     year: '2006',
            // },
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
    // wasActiveSubCategory: [false, false, false, false, false, false, false, false]
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
                { categoriName: 'Leketøy', id: 41, parentId: 4 },// seng
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
    // Admin og nye brukere
    members: [{
        username: 'Elin',
        password: 'monkeyBusiness',
        userlevel: 'admin'
    },
    {
        username: 'fake',
        password: 'gay',
        userlevel: 'user'
    },
    ],

    //Alle produkter
    randomNumbers: [2, 5, 7, 9, 0, 10],
    activeProduct: false,
    viewProductsHere: '',
    clickedOnProducts: false,
    products: [

        // Stue
        {
            title: 'Midlertidlig-Produkt 1',
            price: 9999,
            stock: 2,
            category: 'Stue',
            id: 111,
            parentId: 11,
            subCategory: 'Sofa',
            img: 'TempBilder/1Stue/1Sofa/vintagesofaoker.jpeg',
            description: 'Godt brukt, men fortsatt en flott sofa. Stått lagret i bod siden 2005.',
            measures: 'Høyde: 80cm. Dybde: 50cm. Lengde: 170cm',
            color: ['Oker Gul'],
            country: 'Danmark',
            year: '2006',
        },
        {
            title: 'Rød Sofa',
            price: 8999,
            stock: 2,
            category: 'Stue',
            id: 112,
            parentId: 11,
            subCategory: 'Sofa',
            img: 'TempBilder/1Stue/1Sofa/vintagesofaoker.jpeg',
            description: 'Godt brukt, men fortsatt en flott sofa. Stått lagret i bod siden 2005.',
            measures: 'Høyde: 80cm. Dybde: 50cm. Lengde: 170cm',
            color: ['Oker Gul'],
            country: 'Danmark',
            year: '2006',
        },
        {
            title: 'Grønn Sofa',
            price: 8999,
            stock: 2,
            category: 'Stue',
            id: 113,
            parentId: 11,
            subCategory: 'Sofa',
            img: 'TempBilder/1Stue/1Sofa/vintagesofaoker.jpeg',
            description: 'Godt brukt, men fortsatt en flott sofa. Stått lagret i bod siden 2005.',
            measures: 'Høyde: 80cm. Dybde: 50cm. Lengde: 170cm',
            color: ['Oker Gul'],
            country: 'Danmark',
            year: '2006',
        },
        {
            title: 'Midlertidlig-Produkt 2',
            price: 8888,
            stock: 4,
            category: 'Spiserom',
            id: 122,
            parentId: 22,
            subCategory: 'Spisestuestol',
            img: 'TempBilder/2Spiserom/1stoler/habdulstol.png',
            description: 'Sofa med 3 seter. Litt brukt, pent ivaretatt.',
            measures: 'Høyde 90cm. Dybde 89cm. Lengde 240cm.',
            color: ['Mørk grønn', ' Beige'],
            country: 'Sverige',
            year: '1961',
        },
        // Spiserom
        {
            title: 'Midlertidlig-Produkt 3',
            price: 44444,
            stock: 5,
            category: 'Kjøkken',
            id: 131,
            parentId: 31,
            subCategory: 'Kjøkkenbord',
            img: 'TempBilder/3Kjøkken/Tempkitchentable/8729f31b63ae4f033a520009b94acd6048-removebg-preview.png',
            description: 'Bardisk med plass til både flasker og glass, også med kjøleboks. Stamme i svart metall med fine kontraster til den gyldne fargen. Topplate av mangotre.',
            color: ['gold', 'gylden'],
            country: 'Canada',
            year: '2002',
        },

        // Kjøkken

        {
            title: 'Midlertidlig-Produkt 4',
            price: 8888,
            stock: 12,
            category: 'Soverom',
            id: 142,
            parentId: 41,
            subCategory: 'Seng',
            img: 'TempBilder/1Stue/2Sofabord/80svintagebord.jpeg',
            description: '',
            color: ['metall', 'svart'],
            country: 'Danmark',
            year: '1971',
        },
        {
            title: 'Midlertidlig-Produkt 5',
            price: 8888,
            stock: 3,
            category: 'Bad',
            id: 151,
            parentId: 51,
            subCategory: 'Badekar',
            img: 'TempBilder/1Stue/4Kommoder/kommodevin.jpeg',
            description: 'Godt brukt, men fortsatt en flott sofa. Stått lagret i bod siden 2005.',
            measures: 'Høyde 80cm. Dybde 50cm.',
            color: ['Oker Gul'],
            country: 'Danmark',
            year: '2017',
        },
        {
            title: 'Midlertidlig-Produkt 6 ',
            price: 8899,
            stock: 2,
            category: 'Gang',
            id: 162,
            parentId: 62,
            subCategory: 'Gardeobeskap',
            img: 'TempBilder/1Stue/4Kommoder/retroskjenk.jpeg',
            description: 'Godt brukt, men fortsatt en flott sofa. Stått lagret i bod siden 2005.',
            measures: 'Høyde 80cm. Dybde 50cm.',
            color: ['Oker Gul'],
            country: 'Danmark',
            year: '2006',
        },
        {
            title: 'Midlertidlig-Produkt 7',
            price: 2999,
            stock: 1,
            category: 'Klær',
            id: 171,
            parentId: 71,
            subCategory: 'Kjoler',
            img: 'TempBilder/1Stue/2Sofabord/vintagemosaikkbord.jpeg',
            description: 'Godt brukt, med fortsatt mye bruk igjen. Stått lagret i bod siden 2005.',
            measures: 'Lengde 39cm. Bredde 7cm.',
            color: ['Red', 'blue', 'green'],
            country: 'uganda',
            year: '1500~',
        },
        {
            title: 'Midlertidlig-Produkt 8',
            price: 12500,
            stock: 1,
            category: 'Sko',
            id: 181,
            parentId: 81,
            subCategory: 'Støvletter',
            img: 'TempBilder/1Stue/3Sjeselong/vintagesjesbrownleather.jpeg',
            description: 'brukt et par ganger',
            measures: 'Lengde 2cm. Bredde 3cm.',
            color: ['white', 'grey', 'purple'],
            country: 'Denmark',
            year: '1990~',
        },
        {
            title: ' Midlertidlig-Produkt 9',
            price: 4999,
            stock: 2,
            category: 'Lesesal',
            id: 191,
            parentId: 91,
            subCategory: '',
            img: 'TempBilder/2Spiserom/5Pyntegjenstander/vintagekaraffel.jpeg',
            description: 'Hele verden rundt siden 1880',
            measures: 'Høyde: 50cm ',
            color: ['black', 'brown', 'tan'],
            country: 'Denmark',
            year: '1880ca',
        },
    ],
}