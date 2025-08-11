const mongoose = require('mongoose');
//importing Mongoose 
//to connect and work with MongoDB

const connectDB = async () => {//takes time
    try{
        await mongoose.connect(//until the connection is complete
            "your-connection-string",
            { dbName: "Books" }
        );
        console.log('database connection successful');

    } catch(error){//if connextion fails
        console.log(`error in connection with DB. ${error}`);
    }};
    module.exports = connectDB;//use this function in other files