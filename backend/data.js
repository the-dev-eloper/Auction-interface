import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
            name: 'Gokul',
            email: 'imgnath28@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Naveen',
            email: 'naveen@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],

    players: [

        {
            name: 'Virat Kohli',
            category: 'Batsmen',
            image: '/images/d1.png',
            basePrice: 2,
            sellPrice: 17,
            country: 'India',
            international: 'capped',
            ranking: 1,
            description: 'Indian Captain',
            soldTo: 'RCB'
        },

        {
            name: 'MS Dhoni',
            category: 'Keeper',
            image: '/images/d2.png',
            basePrice: 2,
            sellPrice: 15,
            country: 'India',
            international: 'retired',
            ranking: 0,
            description: 'Ex Indian Captain',
            soldTo: 'CSK'
        },

        {
            name: 'Rohit Sharma',
            category: 'Batsmen',
            image: '/images/d3.png',
            basePrice: 2,
            sellPrice: 2,
            country: 'India',
            international: 'capped',
            ranking: 2,
            description: 'Indian Vice Captain',
            soldTo: 'Yet to buy'
        },

        {
            name: 'Eoin Morgan',
            category: 'Batsmen',
            image: '/images/d4.png',
            basePrice: 1.5,
            sellPrice: 1.5,
            country: 'England',
            international: 'overseas',
            ranking: 3,
            description: 'English Captain',
            soldTo: 'Yet to buy'
        },

        {
            name: 'Steve Smith',
            category: 'Batsmen',
            image: '/images/d5.png',
            basePrice: 1.5,
            sellPrice: 1.5,
            country: 'Australia',
            international: 'overseas',
            ranking: 4,
            description: 'Ex Aus Captain',
            soldTo: 'Yet to buy'
        },

        {
            name: 'David Warner',
            category: 'Batsmen',
            image: '/images/d6.png',
            basePrice: 2,
            sellPrice: 2,
            country: 'Australia',
            international: 'overseas',
            ranking: 5,
            description: 'Ex Aus Vice Captain',
            soldTo: 'Yet to buy'
        },
    ]
}

export default data