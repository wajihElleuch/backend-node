var bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = 8080;
const BASE_URL = '/';


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', '*');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.setHeader('Content-Type', 'application/json');

    // Pass to next layer of middleware
    next();
});

let CATEGORIES = {
    it: 'IT',
    clothes: 'CLOTHES',
    sport: 'SPORT'
}

class Product {

    constructor(name, price, category, img) {
        this.id = this.makeid(20);
        this.name = name;
        this.price = price;
        this.category = category;
        this.img = img;
        console.log(this);
    }

    makeid(length) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789=(){}-_&<>:;.,!*';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

}


let products = [
    // *** IT ***
    new Product('Hp Imprimante Jet d\'encre DeskJet 2632 3en1 Couleur Wifi - Garantie 1 An',
        102,
        CATEGORIES.it,
        'https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/47/9631/1.jpg?3005'),

    new Product('Asus VivoBook Max - X541NA - Dual-Core - 15.6" - 4 Go - 500 Go - Noir - Garantie 1 An',
        689,
        CATEGORIES.it,
        'https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/85/6251/1.jpg?7391'),

    new Product('Info Sec Onduleur 2 Sorties 700 VA - Noir- Onduleur',
        184,
        CATEGORIES.it,
        'https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/1431/1.jpg?2510'),

    // *** CLOTHES ***
    new Product('Sweat à Capuche Noir #',
        39,
        CATEGORIES.clothes,
        'https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/33/362/1.jpg?6843'),

    new Product('Adidas Performance Tennis - CE1426',
        63,
        CATEGORIES.clothes,
        'https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/2121/1.jpg?7649'),

    new Product('Hummel Sac de sport-Hummel-980036-2001',
        80,
        CATEGORIES.clothes,
        'https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/4781/1.jpg?1842'),

    // *** SPORT ***
    new Product('Body Force Bandage - Gallant - Compression - Stabilisateur',
        60,
        CATEGORIES.sport,
        'https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/1411/1.jpg?5145'),

    new Product('Molten Volleyball - V5M4000',
        100,
        CATEGORIES.sport,
        'https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/17/395/1.jpg?2226'),

    new Product('Balance Numérique Personnelle - 180 KG',
        57,
        CATEGORIES.sport,
        'https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/90/576/1.jpg?8859'),

];

let basket = [];

/**
 * find all
 */
app.get(BASE_URL, (req, res) => res.send(products.sort((a, b) => a.name.localeCompare(b.name))));

/**
 * find by id
 */
app.get(BASE_URL + ':id', function (req, res) {
    const id = req.params.id;
    const product = products.find(product => product.id === id);
    if (!product) {
        res.status(404).send({message: `product with id : ${id} not found`});
    }
    res.send(product);
});

/**
 * filter by name
 */
app.get(BASE_URL + 'filter/:name', function (req, res) {
    const name = req.params.name;
    const product = products.filter(product => product.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) >= 0 );
    res.send(product ? product : null);
});

/**
 * find by category
 */
app.get(BASE_URL + 'category/:category', function (req, res) {
    const category = req.params.category;
    if (!Object.values(CATEGORIES).find(value => value === category)) {
        res.status(400).send({message: `category ${category} not defined`});
    }
    let filteredProduct = products.filter(value => value.category === category);
    res.send(filteredProduct);
});

/**
 * add product
 */
app.post(BASE_URL, function (req, res) {
    const body = req.body;
    console.log(req.body);
    if (!Object.values(CATEGORIES).find(value => value === body.category)) {
        res.status(400).send({message: `category ${body.category} not defined`});
    }
    let product = new Product(
        body.name,
        body.price,
        body.category,
        `http://lorempixel.com/400/400/`);
    products.push(product);
    res.send(product)
});

/**
 * edit product
 */
app.put(BASE_URL, function (req, res) {
    let body = req.body;
    let index = products.findIndex(value => {
        return value.id === body.id;
    });
    if (index === -1) {
        res.status(404).send({message: `product ${body.name} not found`})
    } else {
        let prod = products[index];
        Object.assign(prod, body);
        products.splice(index, 1, prod);
        res.send(prod);
    }
});

/**
 *  delete product
 */
app.delete(BASE_URL + ':id', function (req, res) {
    let id = req.params.id;
    products = products.filter((value, index, array) => value.id !== id);
    res.send(products);
});

// ********************* basket

/**
 * find all items
 */
app.get(BASE_URL+ 'basket/all', (req, res) => res.send(basket));

/**
 * edit item , <b> add </b> if not existed
 * example : {
 *     product : Product,
 *     qte : 5
 * }
 */
app.put(BASE_URL+ 'basket', function (req, res) {
    let body = req.body;
    let index = products.findIndex(value => value.id === body.product.id);
    if (index === -1) {
        res.status(404).send({message: `product ${body.product.name} not found`})
    } else if (!body.qte || body.qte < 0) {
        res.status(400).send({message: `qte should be positive`})
    } else {
        let prodInBasketIndex = basket.findIndex(value => value.product.id === body.product.id);
        if(prodInBasketIndex === -1) {
            basket.push(body);
        }else {
            basket.splice(prodInBasketIndex,1,body);
        }
        res.send(body);
    }
});

/**
 *  delete item
 */
app.delete(BASE_URL + '/basket/:id', function (req, res) {
    let id = req.params.id;
    basket = basket.filter(value => value.product.id === id);
    res.send(basket);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
