const http = require('http')
const express = require('express')
// const fetch = require('node-fetch')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', './views');

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})


// node fetch
const response = await fetch('www.google.com');

// if (response.status === 301 || response.status === 302) {
// 	const locationURL = new URL(response.headers.get('location'), response.url);
// 	const response2 = await fetch(locationURL, { redirect: 'manual' });
// 	console.dir(response2);
// }


// get homepage of index.ejs
// app.get('/', (req, res) => {
    
//     res.render('home', 
//     { title: 'Hey', message: 'Hello there!' })
//   })
