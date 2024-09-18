const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static("static"));

app.use(express.urlencoded({ extended: true }));


const router = require('./routeur');



app.use(router);




app.listen(3000, () => {
    console.log("listening on http://localhost:3000");
})