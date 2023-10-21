const mongoose = require("mongoose")

function connect(){
    const connectionParams={
        useNewUrlParser: true,
       
        useUnifiedTopology: true
        
    }
    mongoose.connect("mongodb+srv://username:password@cluster0.xn3xyfw.mongodb.net/project",connectionParams)
        .then( () => {
            console.log('Connected to database ')
        })
        .catch( (err) => {
            console.error(`Error connecting to the database. \n${err}`);
        })

}

module.exports= connect;
