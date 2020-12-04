const express = require('express');
const app = express();
const PORT = 5000

const custumMiddleware = (req, res, next) => {
	console.log("Middleware executed!!!")
	next()
}

app.get('/', (req, res) => {
	console.log("home")
	res.send("Hello world")
})


app.get('/about', custumMiddleware, (req, res) => {
	console.log("about")
	res.send("about page")
})

app.listen(PORT, () => {
	console.log("server is running on", PORT)
})