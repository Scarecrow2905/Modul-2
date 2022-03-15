let html = '';


const model = {
    shoppingCart: {
        totalPrice:'',
        CartProducts:[],
    },
    
    
// App
    app: {
        currentPage: 'FrontPage', //FrontPage |  ProductPage | LoginPage | ShoppingCart | PaymentPage | 
        currentUser: '',
    },
    // Inputs
    account: {
        userName: '',
        password: '',
        createNew: '',
    },
    frontPage: {
        search: '',
    },

    createCategory: {
        
    },
    categories:[
        //{name:'TV, lyd & bilde', id:1},
        //{name:'Hodetelefoner', id:2, parentId:1},
        //{name:'Trådløse hodetelefoner', id:3, parentId:2}, 
        
        {name: 'Stue', id:1},
        {name:"Sofa", id:11,parentId:1},
        {name:"Kommode", id:13,parentId:1},
        {name:"SofaPute", id:12,parentId:11},

        {name: 'Spiserom', id:2},
        {name: 'Kjøkken', id:3},
        {name: 'Soverom', id:4},
        {name: 'Bad', id:5},
        {name: 'Gang', id:6},
        {name: 'Klær', id:7},
        {name: 'Sko', id:8},


        
    ],

    

    // Data
selectedCategory = 14,

    // categories: [ Stue, Kjøkken, Spiserom, Soverom, Bad, Gang, Vaskerom,],
        
    //     Stue:            [Sofa, sofabord, sjeselong, kommode, hylle, reol, pyntegjenstander],
    //     Spiserom:        [Spisebord, spisestuestol, reol, kommode, pyntegjenstander],
    //     Kjøkken:         [Kjøkkenbord, kjøkkenstol, hylle, pyntegjenstander],
    //     Soverom:         [Seng, nattbord, kommode, garderobeskap, pyntegjenstander],
    //     Bad:             [Badekar, vaskebrett, pyntegjenstander],
    //     Gang:            [Skohylle, garderobeskap, hattehylle, pyntegjenstander],
    //     Klær:            [Kjole, bukse, genser, jakke, cardigan, hatt, skjerf, øredobber],
    //     Sko:             [Støvletter, støvler, joggesko, platåsko, høyhælte],
        
        
    payment: {
        vipps: false,
        card: false,
        delivery: false,
        pickupPoint: false,
    },
    
    admin: [
        {name: 'Elin',
        password:'monkeyBusiness'},
    ],
 
    products:[
        {
            title: 'Gammel stol',
            price: '6000kr',
            category: 'Stue',
            categoryId: 14,
            subCategory: 'Store ting',
            img: 'blablabla',
            description: 'Godt brukt, men fortsatt en flott sofa. Stått lagret i bod siden 2005.',
            measures: 'Høyde 80cm. Dybde 50cm.',
            color: ['Oker Gul'],
            country: 'Danmark',
            year: '1971',
        },

        {
            title: 'Sjeselong',
            price: '8700kr',
            category: 'Stue',
            subCategory: 'Store ting',
            img: 'img img img',
            description: 'Pent brukt, godt lagret.',
            color: ['Mørk grønn'],
            country: 'Italia',
            year: '1962',
            },
                
            
                

        {
        title: 'Vintage sofa',
        price: '11.000kr',
        category: 'stue',
        subCatagory: 'store ting',
        img: '......',
        description: 'Sofa med 3 seter. Litt brukt, pent ivaretatt.',
        measures: 'Høyde 90cm. Dybde 89cm. Lengde 240cm.',
        color: ['Mørk grønn', ' Beige'],
        country: 'Sverige',
        year: '1961',
    },],

    kjøkken: [
    {
        title: 'Gammel kjøttkvern',
        price: '3000kr',
        category: '',
        subCatagory: '',
        img: '......',
        description: '',
        color: ['metall', 'svart'],
        country: 'Danmark',
        year: '1021',
    },
            





