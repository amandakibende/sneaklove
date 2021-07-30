const mongoose = require("mongoose");
require("dotenv/config");
const User = require("../models/User"); 


const users = [
    {
    name: "James",  
    lastname: "Bond",  
    email: "james@bond.gmail.fr",
    password: "007",
    }, 

    {
        name: "jinjoo",  
        lastname: "Hardy",  
        email: "jinjoo@hardy.fr",
        password: "1234",
        },
]


mongoose.connection.on("connected", () => {
    User.create(users)
      .then((usersCreated) => console.log(usersCreated.length))
      .catch(e=>console.log(e));
    console.log("yay mongodb connected :)");
  });
  mongoose.connection.on("error", () =>
    console.log("nay db connection error :(")
  );
