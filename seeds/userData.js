const { User } = require('../models')
const userData = [
    {
        username: 'Ramin',
        password: '12345password'
    },
    {
        username: 'Sonic',
        password: '12345password'
    },
    {
        username: 'Hegdhog',
        password: '12345password'
    },
]
const seedUser = () => 
    User.bulkCreate(userData, {
        individualHooks: true,

    }) 

module.exports = seedUser
