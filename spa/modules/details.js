
import { $ } from './selectel.js'

export function renderDetails(details) {

    console.log(details)

    const list = $('section');
    list.insertAdjacentHTML('beforeend',
        
    ` <ul class='details'>
        <li>
            <img src="${details.artObject.webImage.url.slice(0, -3) + "=s1000"}" alt="${details.artObject.title}">
                <div>
                    <h2>${details.artObject.longTitle}</h2>
                        <p>${details.artObject.plaqueDescriptionEnglish}</p>
                            <h3> Created: ${details.artObject.dating.sortingDate}</h3>
                            <h3> Materials: ${details.artObject.materials}</h3>
                            <h3> Place: ${details.artObject.dating.productionPlaces}</h3>
                 </div>
        </li>
    </ul> `
    )

};