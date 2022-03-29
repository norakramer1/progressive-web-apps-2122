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
        pageTitle: "Rijksmuseum",
        id: collection.artObjects.objectNumber
      })
  })
.catch(err =>res.send) 
}

// search
app.get("/search", (req, res) => {
  fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&ps=25&imgonly=true&q=${req.query.q}`)
  .then(async response => {
    const collection = await response.json();
    res.render('home', {
    data: collection.artObjects
      });
    })
    
    .catch(err => res.send(err))
} )


// detail page

app.get('/:id', function (req, res) {
  //console.log(req.params.id)
  fetch(`https://www.rijksmuseum.nl/api/nl/collection/${req.params.id}?key=${apiKey}&ps=25&imgonly=true`)

    .then(response => {
      return response.json();
    })
    .then(detailed => {
     // console.log(detailed.artObject)
      res.render('detail', {
        data: detailed.artObject,
        pageTitle: "Rijksmuseum",
      })
    })
})


app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})