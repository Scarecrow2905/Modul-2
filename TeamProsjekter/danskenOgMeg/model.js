let html = '';
let faen = '';

const model = {
    fuckLister0: '',
    fuckLister1: '',
    fuckLister2: '',
    fuckLister3: '',
    fuckLister4: '',

    shoppingCart: {
        totalPrice: 0,
        cartProducts:[],
        numberOfItems: 0,
    },
      
    //App -!-

    // Navn på de forskjellige sider.
    app: {
        currentPage: 'FrontPage', //FrontPage |  Product | Login | Cart | PaymentPage | 
        currentUser: '',
    },
    //Inputs -!-

    //Inputs for login og å lage nye brukere
    account: {
        userName: '',
        password: '',
        createNewUsername: '',
        createNewPassword: '',
    },
    //Søkefelt
    frontPage: {
        search: '',
    },
    //Legge til nye kategorier
    createCategory:[ 
        {name: '', id:''},
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
    categories:[
        {name:'Stue', id:1},
        //{categoriName:'Sofa', id:11,parentId:1},

        {name: 'Spiserom', id:2},
        //{categoriName: 'Bord', id:21, parentId:2},
        
        {name: 'Kjøkken', id:3},
        //{categoriName: 'Stol', id:31, parentId:3},
        
        {name: 'Soverom', id: 4},
        //{categoriName: 'Seng', id:41, parentId:4},

        {name: 'Bad', id:5},
        //{categoriName: 'Badekar', id:51, parentId:5},
        
        {name: 'Gang', id:6},
        // {categoriName: 'Garderobe', id:61, parentId:6},

        {name: 'Klær', id:7},
        //{categoriName: 'Kjole', id:71, parentId:7},
        
        {name: 'Sko', id:8},
        //{categoriName: 'Støvler', id:81, parentId:8},   
    ],

    // Oversikt over ulike kategorier og produkter
    // categories: [ Stue, Kjøkken, Spiserom, Soverom, Bad, Gang, Vaskerom,],   
    //     Stue:            [Sofa, sofabord, sjeselong, kommode, hylle, reol, pyntegjenstander],
    //     Spiserom:        [Spisebord, spisestuestol, reol, kommode, pyntegjenstander],
    //     Kjøkken:         [Kjøkkenbord, kjøkkenstol, hylle, pyntegjenstander],
    //     Soverom:         [Seng, nattbord, kommode, garderobeskap, pyntegjenstander],
    //     Bad:             [Badekar, vaskebrett, pyntegjenstander],
    //     Gang:            [Skohylle, garderobeskap, hattehylle, pyntegjenstander],
    //     Klær:            [Kjole, bukse, genser, jakke, cardigan, hatt, skjerf, øredobber],
    //     Sko:             [Støvletter, støvler, joggesko, platåsko, høyhælte],
       
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
            title: 'Sofa',
            price: 6000,
            stock: 1,
            category: 'Stue',
            categoryId: 11,
            subCategory: 'Store ting',
            img: 'blablabla',
            description: 'Godt brukt, men fortsatt en flott sofa. Stått lagret i bod siden 2005.',
            measures: 'Høyde 80cm. Dybde 50cm.',
            color: ['Oker Gul'],
            country: 'Danmark',
            year: '2006',
        },

        {
            title: 'Vintage Sofa',
            price: 11000,
            stock: 1,
            category: 'Stue',
            categoryId: 12,
            subCategory: 'Store ting',
            img: 'blablabla',
            description: 'Sofa med 3 seter. Litt brukt, pent ivaretatt.',
            measures: 'Høyde 90cm. Dybde 89cm. Lengde 240cm.',
            color: ['Mørk grønn', ' Beige'],
            country: 'Sverige',
            year: '1961',
        },  
        // Spiserom
        {
            title: 'Bord',
            price: 8700,
            stock: 1,
            category: 'Stue',
            categoryId: 21,
            subCategory: 'Store ting',
            img: 'blablabla',
            description: 'Pent brukt, godt lagret.',
            color: ['Mørk grønn'],
            country: 'Italia',
            year: '1962',
            },
            
        // Kjøkken
        {   
            title: 'Gammel kjøttkvern',
            price: 3000,
            stock: 1,
            category: 'Kjøkken',
            categoryId: 32,
            subCategory: '',
            img: '......',
            description: '',
            color: ['metall', 'svart'],
            country: 'Danmark',
            year: '1971',
        }, 
    ],
}
      





