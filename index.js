var bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 3000;
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
class vesselDetail {
    constructor(id, Arrival_at_Terminal_Road, Notice_of_readiness_Tendered,
                Drop_Anchor, Anchor_Aweight, Pilot_on_Board_In, Commenced_Mooring, First_line, Completed_mooring,
                All_Fast, Pilot_Off, Agent_and_authorities_on_board, Free_practise_granted, Notice_of_readiness_accepted,
                Tank_inspection_Start, Tank_inspection_End, Hose_connection_Start, Hose_connection_End) {
        this.id = id;
        this.Arrival_at_Terminal_Road = Arrival_at_Terminal_Road;
        this.Notice_of_readiness_Tendered = Notice_of_readiness_Tendered;
        this.Drop_Anchor = Drop_Anchor;
        this.Anchor_Aweight = Anchor_Aweight;
        this.Pilot_on_Board_In = Pilot_on_Board_In;
        this.Commenced_Mooring = Commenced_Mooring;
        this.First_line = First_line;
        this.Completed_mooring = Completed_mooring;
        this.All_Fast = All_Fast;
        this.Pilot_Off = Pilot_Off;
        this.Agent_and_authorities_on_board = Agent_and_authorities_on_board;
        this.Free_practise_granted = Free_practise_granted;
        this.Notice_of_readiness_accepted = Notice_of_readiness_accepted;
        this.Tank_inspection_Start = Tank_inspection_Start;
        this.Tank_inspection_End = Tank_inspection_End;
        this.Hose_connection_Start = Hose_connection_Start;
        this.Hose_connection_End = Hose_connection_End;
        // console.log(this);
    }
}

class oneVessel {
    constructor(checked, date, name) {
        this.checked = checked;
        this.date = date;
        this.name = name;
    }
}
class User {
    constructor(id, firstName, lastName, selected) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.selected = selected;
        console.log(this);
    }
}

let users = [
    new User(1, 'wajih', 'elleuch', false),
    new User(2, 'dali', 'jallouli', false),
    new User(3, 'amin', 'ammami', false),
    new User(4, 'helmi', 'reguiag', false),
    new User(5, 'issam', 'ayadi', false),
]

class vessel {
    constructor(id, name, HTA, icon, details) {
        this.id = id;
        this.name = name;
        this.HTA = HTA;
        this.icon = icon;
        this.details = details;
       // console.log(this);
    }
}

let vessels = [
    new vessel(1, 'M/T PANTELIS', '01/01/2019', 'https://photos.marinetraffic.com/ais/showphoto.aspx?shipid=122285&size=thumb300&stamp=false',
        new vesselDetail(1,
            new oneVessel(false, '', 'Arrival at Terminal Road'),
            new oneVessel(false, '', 'Notice of readiness Tendered'),
            new oneVessel(false, '', 'Drop Anchor'),
            new oneVessel(false, '', 'Anchor Aweight'),
            new oneVessel(false, '', 'Pilot on Board In'),
            new oneVessel(false, '', 'Commenced Mooring'),
            new oneVessel(false, '', 'First line'),
            new oneVessel(false, '', 'Completed mooring'),
            new oneVessel(false, '', 'All Fast'),
            new oneVessel(false, '', 'Pilot Off'),
            new oneVessel(false, '', 'Agent and authorities on board'),
            new oneVessel(false, '', 'Free practise granted'),
            new oneVessel(false, '', 'Notice of readiness accepted'),
            new oneVessel(false, '', 'Tank inspection Start'),
            new oneVessel(false, '', 'Tank inspection End'),
            new oneVessel(false, '', 'Hose connection Start'),
            new oneVessel(false, '', 'Hose_connection_End')),),
    new vessel(2, 'AHT ERACLEA', '01/02/2019', 'https://photos.marinetraffic.com/ais/showphoto.aspx?shipid=280372&size=thumb300&stamp=false',
        new vesselDetail(2,
            new oneVessel(false, '', 'Arrival at Terminal Road'),
            new oneVessel(false, '', 'Notice of readiness Tendered'),
            new oneVessel(false, '', 'Drop Anchor'),
            new oneVessel(false, '', 'Anchor Aweight'),
            new oneVessel(false, '', 'Pilot on Board In'),
            new oneVessel(false, '', 'Commenced Mooring'),
            new oneVessel(false, '', 'First line'),
            new oneVessel(false, '', 'Completed mooring'),
            new oneVessel(false, '', 'All Fast'),
            new oneVessel(false, '', 'Pilot Off'),
            new oneVessel(false, '', 'Agent and authorities on board'),
            new oneVessel(false, '', 'Free practise granted'),
            new oneVessel(false, '', 'Notice of readiness accepted'),
            new oneVessel(false, '', 'Tank inspection Start'),
            new oneVessel(false, '', 'Tank inspection End'),
            new oneVessel(false, '', 'Hose connection Start'),
            new oneVessel(false, '', 'Hose_connection_End'))),
    new vessel(3, 'Development Driller III', '05/06/2019', 'https://www.offshoreenergytoday.com/wp-content/uploads/2019/12/development-driller-iii-image-by-u-s-coast-guard-photo-by-petty-officer-3rd-class-patrick-kelley-620x330.jpg',
        new vesselDetail(3,
            new oneVessel(false, '', 'Arrival at Terminal Road'),
            new oneVessel(false, '', 'Notice of readiness Tendered'),
            new oneVessel(false, '', 'Drop Anchor'),
            new oneVessel(false, '', 'Anchor Aweight'),
            new oneVessel(false, '', 'Pilot on Board In'),
            new oneVessel(false, '', 'Commenced Mooring'),
            new oneVessel(false, '', 'First line'),
            new oneVessel(false, '', 'Completed mooring'),
            new oneVessel(false, '', 'All Fast'),
            new oneVessel(false, '', 'Pilot Off'),
            new oneVessel(false, '', 'Agent and authorities on board'),
            new oneVessel(false, '', 'Free practise granted'),
            new oneVessel(false, '', 'Notice of readiness accepted'),
            new oneVessel(false, '', 'Tank inspection Start'),
            new oneVessel(false, '', 'Tank inspection End'),
            new oneVessel(false, '', 'Hose connection Start'),
            new oneVessel(false, '', 'Hose_connection_End'))),
    new vessel(4, 'ISLA DE BIOKO', '11/10/2019', 'data:image/jpeg;base64,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',
        new vesselDetail(4,
            new oneVessel(false, '', 'Arrival at Terminal Road'),
            new oneVessel(false, '', 'Notice of readiness Tendered'),
            new oneVessel(false, '', 'Drop Anchor'),
            new oneVessel(false, '', 'Anchor Aweight'),
            new oneVessel(false, '', 'Pilot on Board In'),
            new oneVessel(false, '', 'Commenced Mooring'),
            new oneVessel(false, '', 'First line'),
            new oneVessel(false, '', 'Completed mooring'),
            new oneVessel(false, '', 'All Fast'),
            new oneVessel(false, '', 'Pilot Off'),
            new oneVessel(false, '', 'Agent and authorities on board'),
            new oneVessel(false, '', 'Free practise granted'),
            new oneVessel(false, '', 'Notice of readiness accepted'),
            new oneVessel(false, '', 'Tank inspection Start'),
            new oneVessel(false, '', 'Tank inspection End'),
            new oneVessel(false, '', 'Hose connection Start'),
            new oneVessel(false, '', 'Hose_connection_End'))
        )

]



let vesselDetails = [
    new vesselDetail(1,
        new oneVessel(false, '', 'Arrival at Terminal Road'),
        new oneVessel(false, '', 'Notice of readiness Tendered'),
        new oneVessel(false, '', 'Drop Anchor'),
        new oneVessel(false, '', 'Anchor Aweight'),
        new oneVessel(false, '', 'Pilot on Board In'),
        new oneVessel(false, '', 'Commenced Mooring'),
        new oneVessel(false, '', 'First line'),
        new oneVessel(false, '', 'Completed mooring'),
        new oneVessel(false, '', 'All Fast'),
        new oneVessel(false, '', 'Pilot Off'),
        new oneVessel(false, '', 'Agent and authorities on board'),
        new oneVessel(false, '', 'Free practise granted'),
        new oneVessel(false, '', 'Notice of readiness accepted'),
        new oneVessel(false, '', 'Tank inspection Start'),
        new oneVessel(false, '', 'Tank inspection End'),
        new oneVessel(false, '', 'Hose connection Start'),
        new oneVessel(false, '', 'Hose_connection_End')),
    new vesselDetail(2,
        new oneVessel(false, '', 'Arrival at Terminal Road'),
        new oneVessel(false, '', 'Notice of readiness Tendered'),
        new oneVessel(false, '', 'Drop Anchor'),
        new oneVessel(false, '', 'Anchor Aweight'),
        new oneVessel(false, '', 'Pilot on Board In'),
        new oneVessel(false, '', 'Commenced Mooring'),
        new oneVessel(false, '', 'First line'),
        new oneVessel(false, '', 'Completed mooring'),
        new oneVessel(false, '', 'All Fast'),
        new oneVessel(false, '', 'Pilot Off'),
        new oneVessel(false, '', 'Agent and authorities on board'),
        new oneVessel(false, '', 'Free practise granted'),
        new oneVessel(false, '', 'Notice of readiness accepted'),
        new oneVessel(false, '', 'Tank inspection Start'),
        new oneVessel(false, '', 'Tank inspection End'),
        new oneVessel(false, '', 'Hose connection Start'),
        new oneVessel(false, '', 'Hose_connection_End')),
    new vesselDetail(3,
        new oneVessel(false, '', 'Arrival at Terminal Road'),
        new oneVessel(false, '', 'Notice of readiness Tendered'),
        new oneVessel(false, '', 'Drop Anchor'),
        new oneVessel(false, '', 'Anchor Aweight'),
        new oneVessel(false, '', 'Pilot on Board In'),
        new oneVessel(false, '', 'Commenced Mooring'),
        new oneVessel(false, '', 'First line'),
        new oneVessel(false, '', 'Completed mooring'),
        new oneVessel(false, '', 'All Fast'),
        new oneVessel(false, '', 'Pilot Off'),
        new oneVessel(false, '', 'Agent and authorities on board'),
        new oneVessel(false, '', 'Free practise granted'),
        new oneVessel(false, '', 'Notice of readiness accepted'),
        new oneVessel(false, '', 'Tank inspection Start'),
        new oneVessel(false, '', 'Tank inspection End'),
        new oneVessel(false, '', 'Hose connection Start'),
        new oneVessel(false, '', 'Hose_connection_End')),
    new vesselDetail(4,
        new oneVessel(false, '', 'Arrival at Terminal Road'),
        new oneVessel(false, '', 'Notice of readiness Tendered'),
        new oneVessel(false, '', 'Drop Anchor'),
        new oneVessel(false, '', 'Anchor Aweight'),
        new oneVessel(false, '', 'Pilot on Board In'),
        new oneVessel(false, '', 'Commenced Mooring'),
        new oneVessel(false, '', 'First line'),
        new oneVessel(false, '', 'Completed mooring'),
        new oneVessel(false, '', 'All Fast'),
        new oneVessel(false, '', 'Pilot Off'),
        new oneVessel(false, '', 'Agent and authorities on board'),
        new oneVessel(false, '', 'Free practise granted'),
        new oneVessel(false, '', 'Notice of readiness accepted'),
        new oneVessel(false, '', 'Tank inspection Start'),
        new oneVessel(false, '', 'Tank inspection End'),
        new oneVessel(false, '', 'Hose connection Start'),
        new oneVessel(false, '', 'Hose_connection_End'))

]

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
 * find all product
 */
app.get(BASE_URL, (req, res) => res.send(products.sort((a, b) => a.name.localeCompare(b.name))));
/**
 * find all veselle
 */
app.get(BASE_URL + 'vessels', (req, res) => res.send(vessels));
/**
 * find vessel detail id
 */
app.get(BASE_URL + 'vessels' + '/:id', function (req, res) {
    const id = req.params.id;
    //console.log(id);
   // console.log(vesselDetails);
    const vesselById = vessels.find(vessel => vessel.id == id);
    //console.log(vesselDetail);
    if (!vesselById) {
        res.status(404).send({message: `vessel with id : ${id} not found`});
    }
    res.send(vesselById);
});
/**
 * edit vessel
 */
app.put(BASE_URL + 'vessels/edit', function (req, res) {
    let body = req.body;
    let index = vessels.findIndex(value => {
        return value.id === body.id;
    });
    if (index === -1) {
        res.status(404).send({message: `vessel ${body.id} not found`})
    } else {
        let vessel = vessels[index];
        Object.assign(vessel, body);
        vessels.splice(index, 1, vessel);
        res.send(vessel);
    }
});
/**
 * find all users
 */
app.get(BASE_URL + 'users', (req, res) => res.send(users.sort((a, b) => a.firstName.localeCompare(b.firstName))));

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
    const product = products.filter(product => product.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) >= 0);
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
 * edit user
 */
app.put(BASE_URL + 'users/edit', function (req, res) {
    let body = req.body;
    let index = users.findIndex(value => {
        return value.id === body.id;
    });
    if (index === -1) {
        res.status(404).send({message: `user ${body.firstName} not found`})
    } else {
        let user = users[index];
        Object.assign(user, body);
        users.splice(index, 1, user);
        res.send(user);
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
app.get(BASE_URL + 'basket/all', (req, res) => res.send(basket));

/**
 * edit item , <b> add </b> if not existed
 * example : {
 *     product : Product,
 *     qte : 5
 * }
 */
app.put(BASE_URL + 'basket', function (req, res) {
    let body = req.body;
    let index = products.findIndex(value => value.id === body.product.id);
    if (index === -1) {
        res.status(404).send({message: `product ${body.product.name} not found`})
    } else if (!body.qte || body.qte < 0) {
        res.status(400).send({message: `qte should be positive`})
    } else {
        let prodInBasketIndex = basket.findIndex(value => value.product.id === body.product.id);
        if (prodInBasketIndex === -1) {
            basket.push(body);
        } else {
            basket.splice(prodInBasketIndex, 1, body);
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
