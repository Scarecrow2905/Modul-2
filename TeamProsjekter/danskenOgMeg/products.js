var newProducts = [

    // Stue
    {
        title: 'Sofa',
        price: 9999,
        stock: 2,
        category: 'Stue',
        id: 111,
        parentId: 11,
        subCategory: 'Sofa',
        img: 'TempBilder/1Stue/1Sofa/vintagesofapattern.jpeg',
        description: 'Godt brukt, men fortsatt en flott sofa. Stått lagret i bod siden 2005.',
        measures: 'Høyde: 80cm. Dybde: 50cm. Lengde: 170cm',
        color: ['Oker Gul'],
        country: 'Danmark',
        year: '2006',
    },
    {
        title: 'Spisestuestol',
        price: 8999,
        stock: 2,
        category: 'Spisestue',
        id: 112,
        parentId: 11,
        subCategory: 'Spisestuestol',
        img: 'TempBilder/1Stue/1Sofa/vintagesofabrownleather.jpeg',
        description: 'Godt brukt, men fortsatt en flott sofa. Stått lagret i bod siden 2005.',
        measures: 'Høyde: 80cm. Dybde: 50cm. Lengde: 170cm',
        color: ['Oker Gul'],
        country: 'Danmark',
        year: '2006',
    },
    {
        title: 'Kjøkkenbord',
        price: 8999,
        stock: 2,
        category: 'Kjøkken',
        id: 113,
        parentId: 11,
        subCategory: 'Kjøkkenbord',
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
    {
        title: 'Sofabord 2',
        price: 9999,
        stock: 2,
        category: 'Stue',
        id: 191,
        parentId: 91,
        subCategory: 'Sofabord',
        img: 'TempBilder/1Stue/2Sofabord/vintagemosaikkbord.jpeg',
        description: 'nydelig sofabord fra en eller annen kul plass',
        measures: 'Høyde: 50cm ',
        color: ['black', 'brown', 'tan'],
        country: 'Denmark',
        year: '1880ca',
    },
    {
        title: 'Sofabord 1',
        price: 4999,
        stock: 2,
        category: 'Stue',
        id: 191,
        parentId: 91,
        subCategory: 'Sofabord',
        img: 'TempBilder/1Stue/2Sofabord/loungebordvintage.jpeg',
        description: 'et lite bord, med fire bein.',
        measures: 'Høyde: 34cm ',
        color: ['black', 'brown', 'tan'],
        country: 'Denmark',
        year: '1996ca',
    },
    {
        title: 'Sjelong 1',
        price: 8999,
        stock: 3,
        category: 'Stue',
        id: 191,
        parentId: 91,
        subCategory: 'Sjeselong',
        img: 'TempBilder/1Stue/3Sjeselong/vintagesjesbrownleather.jpeg',
        description: 'et lite bord, med fire bein.',
        measures: 'Høyde: 34cm ',
        color: ['black', 'brown', 'tan'],
        country: 'Denmark',
        year: '1996ca',
    },
    {
        title: 'Sjelong 2',
        price: 8999,
        stock: 2,
        category: 'Stue',
        id: 191,
        parentId: 91,
        subCategory: 'Sjeselong',
        img: 'TempBilder/1Stue/3Sjeselong/sjespattern.jpeg',
        description: 'et lite bord, med fire bein.',
        measures: 'Høyde: 34cm ',
        color: ['black', 'brown', 'tan'],
        country: 'Denmark',
        year: '1996ca',
    },
    {
        title: 'Sjelong 3',
        price: 2999,
        stock: 7,
        category: 'Stue',
        id: 191,
        parentId: 91,
        subCategory: 'Sjeselong',
        img: 'TempBilder/1Stue/3Sjeselong/sjesredold.jpeg',
        description: 'et lite bord, med fire bein.',
        measures: 'Høyde: 34cm ',
        color: ['black', 'brown', 'tan'],
        country: 'Denmark',
        year: '1996ca',
    },
    {
        title: 'Kommoder 1',
        price: 6999,
        stock: 7,
        category: 'Stue',
        id: 191,
        parentId: 91,
        subCategory: 'Kommoder',
        img: 'TempBilder/1Stue/4Kommoder/retroskjenk.jpeg',
        description: 'et lite bord, med fire bein.',
        measures: 'Høyde: 34cm ',
        color: ['black', 'brown', 'tan'],
        country: 'Denmark',
        year: '1996ca',
    },
    {
        title: 'Kommoder 2',
        price: 5599,
        stock: 7,
        category: 'Stue',
        id: 191,
        parentId: 91,
        subCategory: 'Kommoder',
        img: 'TempBilder/1Stue/4Kommoder/vintagekommodeskuffer.webp',
        description: 'et lite bord, med fire bein.',
        measures: 'Høyde: 34cm ',
        color: ['black', 'brown', 'tan'],
        country: 'Denmark',
        year: '1996ca',
    },
    {
        title: 'Kommoder 3',
        price: 8999,
        stock: 7,
        category: 'Stue',
        id: 191,
        parentId: 91,
        subCategory: 'Kommoder',
        img: 'TempBilder/1Stue/4Kommoder/whitesjenk.jpeg',
        description: 'et lite bord, med fire bein.',
        measures: 'Høyde: 34cm ',
        color: ['black', 'brown', 'tan'],
        country: 'Denmark',
        year: '1996ca',
    }
];

