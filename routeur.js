const { Router } = require('express'); 
const app = Router();

/*
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/integration/index.html')
})
*/

const jsonData = require('./data/articles.json')


app.get('/', (req, res) => {
    res.render('index', {articles: jsonData})
})

app.get('/article/:id', (req, res) => {

    const article = jsonData.find((article) => article.id === Number(req.params.id))
    
    res.render('article', {article})
    
})






module.exports = app;