let html = '';
let subLister = '';

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
        {name: 'Spiserom', id:2},
        {name: 'Kjøkken', id:3},
        {name: 'Soverom', id: 4},
        {name: 'Bad', id:5},
        {name: 'Gang', id:6},
        {name: 'Klær', id:7},
        {name: 'Sko', id:8},
    ],
    categoriesSub:[
        {categoriName:'Sofa', id:11,parentId:1},
        {categoriName: 'Bord', id:21, parentId:2},
        {categoriName: 'Stol', id:31, parentId:3},
        {categoriName: 'Seng', id:41, parentId:4},
        {categoriName: 'Badekar', id:51, parentId:5},
        {categoriName: 'Garderobe', id:61, parentId:6},
        {categoriName: 'Kjole', id:71, parentId:7},
        {categoriName: 'Støvler', id:81, parentId:8},   
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
    
}
      





