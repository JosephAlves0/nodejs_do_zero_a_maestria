import express from "express";
import exphbs from "express-handlebars";

const app = express();

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

const produtos = [
    {
        id: 1,
        name: "Lápis",
        brand: "Faber",
        price: 1.50
    },
    {
        id: 2,
        name: "Borracha",
        brand: "Jive",
        price: 0.50
    },
    {
        id: 3,
        name: "Caneta",
        brand: "Bic",
        price: 2.00
    }
]

app.get('/', (req, res) => {

    res.render('home', {produtos});
});

app.get('/produto/:id', (req, res) => {

    const produto = produtos[parseInt(req.params.id) - 1];

    res.render('produto', {produto});
});

app.listen(3000, () => {
    console.log('App funcionando!');
})