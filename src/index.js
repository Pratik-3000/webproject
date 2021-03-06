const express = require("express")
const path = require("path")
const app = express()
const port = process.env.PORT || 3000

const staticPath = path.join(__dirname, "../public")
app.use(express.static(staticPath))


app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log("Connection Successfull");
})
