let x = '';
let showSubLister = '';
const model = {
    text1:"",
    fuckLister0: '',
    fuckLister1: '',
    fuckLister2: '',
    fuckLister3: '',
    fuckLister4: '',

    shoppingCart: {
        // productPrice: 4000,
        // productImg: 'testSofa.jpg', // Midlertidig
        totalPrice: 0,
        cartProducts:[
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
        currentPage: 'createNewAccount', //FrontPage |  Product | LoginMail |LoginPhone | Cart | PaymentPage | 
        currentUser: '',
    },
    //Inputs -!-
    idIndex: 2,
    //Inputs for login og å lage nye brukere
    account: {
        users:[{firstName:'admin', lastName:'nordmann', phone: 0, email:'test@test.no', password:'abc123', id: 1  },
        // {firstName:'kåre', lastName:'nordmann', phone: 0, email:'fest@test.no', password:'abcd123', id: 3  },
        // {firstName: 'håre', lastName: 'nordmann', phone: 0, email: 'hest@test.no', password: 'abce123', id: 4 },
    ],
        // firstName:[],
        // lastName:[],
        phone: '',
        email: '', 
        password: '',
        //------
        newFirstName:'',
        newLastName:'',
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
    createCategory:[ 
        {name: '', id:'', sub:[]},
        {name: '', id:'', parentId: ''},
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
    activeSubCategory: [false,false,false,false,false,false,false,false],
    wasActiveSubCategory: [false, false, false, false, false, false, false, false]
    //OBS ::: Legge til False per kategori/Sub 
    ,
    categories:[
        {name: 'Stue', id: 1, sub: [{ categoriName: 'Sofa', id: 11, parentId: 1 }, { categoriName: 'Skjenk', id: 12, parentId: 1 },] },
        {name: 'Spiserom', id:2, sub:[{categoriName: 'Bord', id:21, parentId:2},  ]},
        {name: 'Kjøkken', id:3, sub:[{categoriName: 'Stol', id:31, parentId:3},   ]},
        {name: 'Soverom', id: 4, sub:[{categoriName: 'Seng', id:41, parentId:4},  ]},
        {name: 'Bad', id:5, sub:[ {categoriName: 'Badekar', id:51, parentId:5},   ]},
        {name: 'Gang', id:6, sub:[ {categoriName: 'Garderobe', id:61, parentId:6},]},
        {name: 'Klær', id:7, sub:[ {categoriName: 'Kjole', id:71, parentId:7},    ]},
        {name: 'Sko', id:8, sub:[{categoriName: 'Støvler', id:81, parentId:8},    ]},
    ],
   
    // categories:[
    //     {name:'Stue', id:1},
    //     {name: 'Spiserom', id:2},
    //     {name: 'Kjøkken', id:3},
    //     {name: 'Soverom', id: 4},
    //     {name: 'Bad', id:5},
    //     {name: 'Gang', id:6},
    //     {name: 'Klær', id:7},
    //     {name: 'Sko', id:8},
    // ],
    // categoriesSub:[
    //     {categoriName:'Sofa', id:11,parentId:1},
    //     {categoriName:'Skjenk', id:12,parentId:1},

    //     {categoriName: 'Bord', id:21, parentId:2},

    //     {categoriName: 'Stol', id:31, parentId:3},

    //     {categoriName: 'Seng', id:41, parentId:4},

    //     {categoriName: 'Badekar', id:51, parentId:5},

    //     {categoriName: 'Garderobe', id:61, parentId:6},

    //     {categoriName: 'Kjole', id:71, parentId:7},
        
    //     {categoriName: 'Støvler', id:81, parentId:8},   
    // ],
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
        password:'monkeyBusiness',
    }],
    
    //Alle produkter
    products:[
        
        // Stue
        {
            title: 'hore',
            price: 6000,
            stock: 69,
            category: 'Stue',
            categoryId: 11,
            subCategory: 'Store ting',
            img: 'testSofa.jpg',
            description: 'Godt brukt, men fortsatt en flott sofa. Stått lagret i bod siden 2005.',
            measures: 'Høyde 80cm. Dybde 50cm.',
            color: ['Oker Gul'],
            country: 'Danmark',
            year: '2006',
        },

        {
            title: 'Vintage Sofa',
            price: 11000,
            stock:54,
            category: 'Stue',
            categoryId: 12,
            subCategory: 'Store ting',
            img: 'testSofa.jpg',
            description: 'Sofa med 3 seter. Litt brukt, pent ivaretatt.',
            measures: 'Høyde 90cm. Dybde 89cm. Lengde 240cm.',
            color: ['Mørk grønn', ' Beige'],
            country: 'Sverige',
            year: '1961',
        },  
        // Spiserom
        {
            title: 'Sofa Bård',
            price: 8700,
            stock: 12,
            category: 'Stue',
            categoryId: 21,
            subCategory: 'Store ting',
            img: 'testSofa.jpg',
            description: 'Pent brukt, godt lagret.',
            color: ['Mørk grønn'],
            country: 'Italia',
            year: '1962',
            },
            
        // Kjøkken
        {   
            title: 'biff gardiner',
            price: 3000,
            stock: 5,
            category: 'Kjøkken',
            categoryId: 32,
            subCategory: '',
            img: 'testSofa.jpg',
            description: '',
            color: ['metall', 'svart'],
            country: 'Danmark',
            year: '1971',
        }, 
        {
            title: 'bortskjemt drittunge',
            price: 1,
            stock: 1,
            category: 'Stue',
            categoryId: 1781,
            subCategory: 'Store ting',
            img: 'testSofa.jpg',
            description: 'Godt brukt, men fortsatt en flott sofa. Stått lagret i bod siden 2005.',
            measures: 'Høyde 80cm. Dybde 50cm.',
            color: ['Oker Gul'],
            country: 'Danmark',
            year: '2017',
        },
        {
            title: 'Hobo´s Dildo',
            price: 6000,
            stock: 3,
            category: 'Stue',
            categoryId: 99,
            subCategory: 'Store ting',
            img: 'testSofa.jpg',
            description: 'Godt brukt, men fortsatt en flott sofa. Stått lagret i bod siden 2005.',
            measures: 'Høyde 80cm. Dybde 50cm.',
            color: ['Oker Gul'],
            country: 'Danmark',
            year: '2006',
        },
    ],
}