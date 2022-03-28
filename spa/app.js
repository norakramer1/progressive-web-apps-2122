const http = require('http')
const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 3000
require('dotenv').config()

const apiKey = process.env.API_KEY;
app.set('view engine', 'ejs');
// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', './views');

app.use(express.static(__dirname + '/public'));

app.get("/", renderPagina)

function renderPagina (req, res){
  fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&ps=25&imgonly=true`)
  .then(async response => {
      const collection = await response.json();
      res.render('home', {
        data: collection.artObjects,
        pageTitle: "Rijksmuseum"
      })
  })
.catch(err =>res.send) 
}

// detail page
// app.get('/kunst/:id', (req, res) => {
//     fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=${API_KEY}`)
//         .then(async response => {
//             const artWorks = await response.json()
//             const result = artWorks.artObjects.filter((item) => item.id === req.params.id)
//             res.render('detail', {
//                 pageTitle: `Kunstwerk: ${req.params.id}`,
//                 data: result
//             })
//         })
//         .catch(err => res.send(err))
// })


app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

// async function fetchJson(url) {
//  return await fetch(url)
//    .then((response) => response.json())
//    .then((body) => body.data)
//    .catch((error) => error)
// }