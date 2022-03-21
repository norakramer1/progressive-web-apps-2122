
import { renderData } from './render.js'
import { $ } from './selectel.js'




 export function getData() {

  
    const rijksApi = 'https://www.rijksmuseum.nl/api/nl/collection?key=VXCEr6jm&ps=25&imgonly=true';
    const list = $('section');
    const loadingState = $('section.loading ul');
    const loadingDetails = $('section.load-details ul');
   

        fetch(rijksApi)
            .then(function (response) {
                loadingDetails.remove();
                loadingState.remove();
                return response.json();
            }).then(function (collection) {
                console.log(collection)
                getAdditionalData(collection)
            })

            .catch((error) => {
                console.log(error);

                list.insertAdjacentHTML('beforeend',
                    `<h3>Er ging iets mis, probeer het opnieuw</h3>`)
            
                
            });

    }

export function getAdditionalData(collection) {
        for (let i = 0; i < collection.artObjects.length; i++) {
            fetch('https://www.rijksmuseum.nl/api/nl/collection/' + collection.artObjects[i].objectNumber + '?key=VXCEr6jm&ps=25&imgonly=true')
                .then(function (response) {
                    return response.json();
                }).then(function (detailed) {
                    renderData(detailed)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };
