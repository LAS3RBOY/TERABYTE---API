const express = require('express')
const app = express();
const cors = require('cors')
const connectDB = require('./DB/connect')

const PORT = process.env.PORT || 5000;

const product_routes = require('./routes/products')
app.use(cors())

app.get('/', (req, res) => {
    res.send("I am alive")
})

app.use("/api/course", product_routes)

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`${PORT} YES i am connected`);
        })
    } catch (error) {
        console.log("Error found", error)
    }
}

start();