
import { renderDetails } from './details.js'


      export function getAdditionalDetails(collection) {
         for(let i = 0; i < collection.artObjects.length; i++) {
         fetch('https://www.rijksmuseum.nl/api/nl/collection/' + collection.artObjects[i].objectNumber + '?key=VXCEr6jm&ps=25imgonly=true')
                 .then(function(response) {
                     return response.json();
          }).then(function(details){
             renderDetails(details)
          })
          .catch((error) => {
             console.log(error);
           });
             }
         };
