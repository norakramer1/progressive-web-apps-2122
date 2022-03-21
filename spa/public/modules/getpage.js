import {
    renderData
} from './render.js'
import {
    $
} from './selectel.js'

export function getPage() {
    const rijksApi = 'https://www.rijksmuseum.nl/api/nl/collection?key=VXCEr6jm&ps=25&imgonly=true';
    fetch(rijksApi)

        .then(function (response) {
            while (list.firstChild) {
                list.removeChild(list.firstChild);
                buttonNext.addEventListener('click', updatePage);
            }
            return response.json();

        }).then(function (collection) {
            updatePage++;
            console.log(collection)
            getAdditionalData(collection)
        })

        .catch((error) => {
            console.log(error);

            list.insertAdjacentHTML('beforeend',
                `<h3>Er ging iets mis, probeer het opnieuw</h3>`)


        });

}




function getAdditionalData(collection) {
    for (let i = 0; i < collection.artObjects.length; i++) {
        fetch('https://www.rijksmuseum.nl/api/nl/collection/' + collection.artObjects[i].objectNumber + '?key=VXCEr6jm&ps=25imgonly=true')
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