const mongoose = require("mongoose");
require("dotenv/config");
const Sneaker = require("../models/Sneaker");

const sneakers =[

    {   name: "Nike dunklow",  
        ref: 520,  
        size: 8,  
        description: "very in vogue",  
        price: 100,  
        category: "men",  
        
    },
    {   name: "Converse",  
        ref: 520,  
        size: 8,  
        description: "look like the classic but have a platform",  
        price: 78,  
        category: "women",  
        
    },
]


mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    Sneaker.create(sneakers)
      .then((createdSneakers) => {
        console.log(createdSneakers.length);
      })
      .catch(e=>console.log(e));
  })
  .catch(e=>console.log(e));
