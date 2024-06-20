const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors")
const sessions = require("express-session")
const cookie = require("cookie-parser")
const app = express();
const port = 3000;
const twoDay = 1000 * 60 * 60 * 24 * 2;

const dataProducts = [
  {
    id: 1,
    category: "Sweater",
    name: "Standard Cloth Faux Leather Moto Jacket",
    price: 99,
    imgSrc:
      "https://images.urbndata.com/is/image/UrbanOutfitters/86690773_001_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720",
    description:
      "Racing style paneled moto jacket by Standard Cloth in faux leather. Mock neck style with a zippered front and a snap closure at the neck. Urban Outfitters exclusive.",
  },
  {
    id: 2,
    category: "Sweater",
    name: "Standard Cloth Frosty Crew Neck Sweater",
    price: 69,
    imgSrc:
      "https://images.urbndata.com/is/image/UrbanOutfitters/85944288_018_d?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720",
    description:
      "Stripe pattern knit sweater by Standard Cloth. Pullover style with a crew neck & ribbed knit trims. Urban Outfitter exclusive.",
  },
  {
    id: 3,
    category: "Sweater",
    name: "BDG Waterloo Ribbed Crew Neck Sweater",
    price: 79,
    imgSrc:
      "https://images.urbndata.com/is/image/UrbanOutfitters/84344209_001_d?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720",
    description:
      "Ribbed knit poly sweatshirt by the essential BDG label. Pullover style with a crew neck. Urban Outfitters exclusive.",
  },
  {
    id: 4,
    category: "T-shirt",
    name: "UO Overdyed Black Billie Eilish T-Shirt",
    price: 38,
    imgSrc:
      "https://imageseu.urbndata.com/is/image/UrbanOutfittersEU/0214016590305_001_d?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720",
    description:
      "Washed print Billie Eilish tee, cut from a washed cotton fabrication. Complete with a crew neck, drop shoulders, short sleeves and pop icon singer graphics to chest.",
  },
  {
    id: 5,
    category: "T-shirt",
    name: "UO Nomad Textured Stripe Long-Sleeved T-Shirt",
    price: 49,
    imgSrc:
      "https://imageseu.urbndata.com/is/image/UrbanOutfittersEU/0213347820137_020_b?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720",
    description:
      "Soft tonal texture shirt in an easy stripe print, by UO Nomad. Relaxed jersey tee with a round neck, drop shoulders and long sleeves, finished with an embroidered motif to chest.",
  },
  {
    id: 6,
    category: "T-shirt",
    name: "UO Teddy Don't Be A D*ck T-Shirt",
    price: 29,
    imgSrc:
      "https://imageseu.urbndata.com/is/image/UrbanOutfittersEU/0241579930241_012_e?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=720",
    description:
      "Add some playful graphics to your everyday rotation with this printed tee, complete with a teddy and 'don't be a d*ck' slogan to the chest. Cut from a soft cotton fabrication Ft. a crew neck, drop shoulders and short sleeves.",
  },
];

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
    allowedHeaders: "Content-Type",
  })
);
app.use(express.json());
app.use(cookie())
app.use(bodyParser.json());
app.use(
  sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: false,
    cookie: { maxAge: twoDay },
    resave: true,
  })
);



app.get("/all-products", (req, res) => {
    res.status(200).json(dataProducts)
});
app.get("/products/:category", (req, res) => {
    res.status(200).json(dataProducts.filter(curr=>curr.category === req.params.category))
})

app.post("/cart", (req, res) => {
  const cart = req.body.cart
  req.session.userCart = cart
  res.status(200).json("added");
})

app.get("/cart", (req, res) => {
  res.status(200).json({data: req.session.userCart});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
