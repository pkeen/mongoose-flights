// config for database
const mongoose = require('mongoose');

// connect to database (url stored in .env)
mongoose.connect(process.env.DATABASE_URL); 


// shortcut to mongoose.connection object
const db = mongoose.connection;

// Testing connection 
db.on(
    'connected',
    () => {
        console.log(`Conected to MongoDB ${db.name} at ${db.
            host}:${db.port}`)
    }
)