const app = require('./app');

require("dotenv").config()
const PORT = process.env.PORT;

//start server
app.listen(PORT, ()=>
    console.log(`listening on ${PORT}`));