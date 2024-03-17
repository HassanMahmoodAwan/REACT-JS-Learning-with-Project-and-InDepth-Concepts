import express from "express"

const app = express()
const PORT = process.env.PORT ?? 3000

const products = [
    {
        id: 1,
        name: "Shah Chat Masla",
        price: 70,
        qty: 150
    },{
        id: 2,
        name: "tepal Chai",
        price: 500,
        qty: 60
    },{
        id: 3,
        name: "Malmo Bread",
        price: 220,
        qty: 30
    },{
        id: 4,
        name: "Sufi Chicken Poppers",
        price: 1120,
        qty: 15
    }, {
        id: 5,
        name: "sparx s20 edge",
        price: 55000,
        qty: 15
    }
]

app.get("/", (req, res)=>{
    res.send("Hello World to Server")
})

app.get("/app/Products", (req, res)=>{
    res.send(products)
})


app.listen(PORT, ()=>{
    console.log(`Server is Running on PORT: ${PORT}`)
})
