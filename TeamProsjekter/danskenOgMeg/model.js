
const model = {

    text1: "",
    fuckLister0: '',
    fuckLister1: '',
    fuckLister2: '',
    fuckLister3: '',
    fuckLister4: '',

    shoppingCart: {
        // productPrice: 4000,
        // productImg: 'testSofa.jpg', // Midlertidig
        totalPrice: 0,
        cartProducts: [
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
        currentPage: 'FrontPage', //FrontPage |  Product | LoginMail |LoginPhone | Cart | PaymentPage | 
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
            { firstName: 'admin', lastName: 'nordmann', phone: 0, email: 'test@test.no', password: 'abc123', id: 1 },
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
    //Kategorier med forskjellige id og parentId
    activeSubCategory: [false, false, false, false, false, false, false, false],
    wasActiveSubCategory: [false, false, false, false, false, false, false, false]
    //OBS ::: Legge til False per kategori/Sub 
    ,
    categories: [
        {
            name: 'Stue', id: 1,
            sub: [
                { categoriName: 'Sofa', id: 11, parentId: 1 },
                { categoriName: 'Sofabord', id: 12, parentId: 1 },
                { categoriName: 'Sjeselong', id: 14, parentId: 1 },
                { categoriName: 'Kommoder', id: 15, parentId: 1 },
                { categoriName: 'Hyller', id: 16, parentId: 1 },
                { categoriName: 'Reol', id: 17, parentId: 1 },
                { categoriName: 'Pyntegjenstander', id: 18, parentId: 1 },
                { categoriName: 'Tekstil', id: 19, parentId: 1 },
            ]
        },
        {
            name: 'Spiserom', id: 2,
            sub: [
                { categoriName: 'Spisebord', id: 21, parentId: 2 },
                { categoriName: 'Spisestuestoler', id: 22, parentId: 2 },
                { categoriName: 'Reol-ER', id: 23, parentId: 2 },
                { categoriName: 'Kommode', id: 24, parentId: 2 },
                { categoriName: 'Skjenk', id: 25, parentId: 2 },
                { categoriName: 'Kommode', id: 26, parentId: 2 },
                { categoriName: 'Tekstil', id: 27, parentId: 2 },

            ]
        },
        {
            name: 'Kjøkken', id: 3, sub: [
                { categoriName: 'Kjøkkenbord', id: 31, parentId: 3 },
                { categoriName: 'Kjøkkenstoler', id: 32, parentId: 3 },
                { categoriName: 'Hyller', id: 33, parentId: 3 },
                { categoriName: 'Pyntegjenstander', id: 35, parentId: 3 },
                { categoriName: 'Tekstil', id: 36, parentId: 3 },
            ]
        },
        {
            name: 'Soverom', id: 4, sub: [
                { categoriName: 'Leketøy', id: 41, parentId: 4 },// seng
                { categoriName: 'Nattbord', id: 42, parentId: 4 },
                { categoriName: 'Kommoder', id: 43, parentId: 4 },
                { categoriName: 'Garderobeskap', id: 44, parentId: 4 },
                { categoriName: 'Pyntegjenstander', id: 45, parentId: 4 },
                { categoriName: 'Tekstil', id: 46, parentId: 4 },
            ]
        },
        {
            name: 'Bad', id: 5, sub: [
                { categoriName: 'Badekar', id: 51, parentId: 5 },
                { categoriName: 'Vaskebrett', id: 52, parentId: 5 },
                { categoriName: 'Baderomsinnredning', id: 53, parentId: 5 },
                { categoriName: 'Pyntegjenstander', id: 54, parentId: 5 },
                { categoriName: 'Tekstil', id: 55, parentId: 5 },
            ]
        },
        {
            name: 'Gang', id: 6, sub: [
                { categoriName: 'Sko oppbevaring', id: 61, parentId: 6 },
                { categoriName: 'Garderobeskap', id: 62, parentId: 6 },
                { categoriName: 'Hattehyller', id: 63, parentId: 6 },
                { categoriName: 'Pyntegjenstander', id: 64, parentId: 6 },
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
                { categoriName: 'Pyntegjenstander', id: 94, parentId: 9 },
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
    products: [

        // Stue
        {
            title: 'Sofa',
            price: 8999,
            stock: 2,
            category: 'Stue',
            categoryId: 11,
            subCategory: 'Sofa',
            img: 'testBilder\Bilder til nettside\1 Stue\1 Sofa\vintagesofaoker.jpeg',
            description: 'Godt brukt, men fortsatt en flott sofa. Stått lagret i bod siden 2005.',
            measures: 'Høyde: 80cm. Dybde: 50cm. Lengde: 170cm',
            color: ['Oker Gul'],
            country: 'Danmark',
            year: '2006',
        },

        {
            title: 'Spisestuestol',
            price: 3499,
            stock: 4,
            category: 'Spiserom',
            categoryId: 12,
            subCategory: 'Spisestuestol',
            img: '/testBilder/habdulstol.png',
            description: 'Sofa med 3 seter. Litt brukt, pent ivaretatt.',
            measures: 'Høyde 90cm. Dybde 89cm. Lengde 240cm.',
            color: ['Mørk grønn', ' Beige'],
            country: 'Sverige',
            year: '1961',
        },
        // Spiserom
        {
            title: 'Kjøkkenbord',
            price: 6699,
            stock: 1,
            category: 'Kjøkken',
            categoryId: 21,
            subCategory: 'Kjøkkenbord',
            img: '/testBilder/grupper.png',
            description: 'Pent brukt, godt lagret.',
            color: ['Mørk grønn'],
            country: 'Italia',
            year: '1962',
        },

        // Kjøkken
        {
            title: 'Seng',
            price: 7899,
            stock: 2,
            category: 'Soverom',
            categoryId: 32,
            subCategory: 'Seng',
            img: '/testBilder/80svintagebord.jpeg',
            description: '',
            color: ['metall', 'svart'],
            country: 'Danmark',
            year: '1971',
        },
        {
            title: 'Badekar',
            price: 9799,
            stock: 3,
            category: 'Bad',
            categoryId: 51,
            subCategory: 'Badekar',
            img: '',
            description: 'Godt brukt, men fortsatt en flott sofa. Stått lagret i bod siden 2005.',
            measures: 'Høyde 80cm. Dybde 50cm.',
            color: ['Oker Gul'],
            country: 'Danmark',
            year: '2017',
        },
        {
            title: 'Garderobeskap',
            price: 8899,
            stock: 2,
            category: 'Gang',
            categoryId: 62,
            subCategory: 'Gardeobeskap',
            img: '',
            description: 'Godt brukt, men fortsatt en flott sofa. Stått lagret i bod siden 2005.',
            measures: 'Høyde 80cm. Dybde 50cm.',
            color: ['Oker Gul'],
            country: 'Danmark',
            year: '2006',
        },
        {
            title: 'Kjole',
            price: 2999,
            stock: 1,
            category: 'Klær',
            categoryId: 71,
            subCategory: 'Kjoler',
            img: '',
            description: 'Godt brukt, med fortsatt mye bruk igjen. Stått lagret i bod siden 2005.',
            measures: 'Lengde 39cm. Bredde 7cm.',
            color: ['Red', 'blue', 'green'],
            country: 'uganda',
            year: '1500~',
        },
        {
            title: 'Støvletter',
            price: 12500,
            stock: 1,
            category: 'Sko',
            categoryId: 101,
            subCategory: 'Støvletter',
            img: '',
            description: 'brukt et par ganger',
            measures: 'Lengde 2cm. Bredde 3cm.',
            color: ['white', 'grey', 'purple'],
            country: 'Denmark',
            year: '1990~',
        },
        {
            title: ' Globus 1',
            price: 4999,
            stock: 2,
            category: 'Lesesal',
            categoryId: 102,
            subCategory: '',
            img: '',
            description: 'Hele verden rundt siden 1880',
            measures: 'Høyde: 50cm ',
            color: ['black', 'brown', 'tan'],
            country: 'Denmark',
            year: '1880ca',
        },
    ],
}