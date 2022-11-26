exports.index = function (req, res, next) {
    res.status(200).json({
        data:[
            {
            id:1,
            name:'Kojima Productions',
            address:{
              province:'Shinagawa',
              postalcode:'140-8715',
            },
        },
        {
            id:2,
            name:'Pearl Abyss',
            address:{
              province:'Shinagawa',
              postalcode:'13900',
            },
        },
        {
            id:3,
            name:'GRAVITY GAME TECH',
            address:{
              province:'Bangkok',
              postalcode:'10500',
            },
        }
    ]

    });
};
  