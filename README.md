# Progressive Web Apps @cmda-minor-web · 2021/22

## Table of contents
- [About this project ](#About)
- [Install ](#Install)
- [User story](#User-story)
- [Features ](#Features)
- [Client- vs. serverside rendering](#Client-vs.-serverside-rendering)
- [Activity diagram](#Activity-diagram)
- [Service worker](#Service-worker)
- [Enhancements for the critical rendering path](#Enhancements-for-the-critical-rendering-path)
- [Feature checklist](#feature-checklist)
- [Sources](#Sources)
- [License](#License)


## About
For this course we rebuilt our Single Page App into a serverside-rendered Progressive Web App. Using Node.js, express and EJS we rendered the app serverside. After this I implemented a service worker to install the app and use it locally. 

## Install
I started by updating my version of Node.JS and NPM using Node Version Manager. If you want to install from scratch go to the [Node](https://nodejs.org/en/) website. Once Node was installed I followed the Node [Getting Started Guide](https://nodejs.org/en/docs/guides/getting-started-guide/), which helps you through setting up a simple https server and displaying 'Hello World' on localhost {port}.

After that I started with Express. I navigated to my project directory to `npm init`. This makes a `package.json` file to store, among other things, dependencies. I installed Express using `npm install express`. After that i added a render function to my app.js to render the `index.html` file in my directory.


## User story
> As an art lover, I want to be able to search and view art from the Rijksmuseum at home, so that I can still enjoy art during a lockdown.

## Features
In this app you can view artworks from the Rijksmuseum in Amsterdam. You can search through their collection and fond the artwork you are looking for. If you search a term in the searchbar it will return objects that match those terms. If you search for 'Amsterdam' you get works called Amsterdam but also works made in Amsterdam.

Besides viewing the artworks you can install the app and use it when you have a bad network. It is a progressive Web App, meaning you can install it from your browser window and view it on you desktop. The app will be visible in your application folder, or dock on Mac. If you load some images and browse around while you have a good network connection, you can cache them and view them when you don't have connection to a network.

## Client- vs. serverside rendering
this app used to be a client side rendered application. Meaning the fetching of the api, converting that to json and rendering it in to HTML was all done using clientside Javascript. This worked well but it had some issues. For one you never have control over the network, if the user's network connection is spotty the app would never work. Also loading all the data client side was slower then doing it server side. 

## Activity diagram

### Activity diagram Home/details
![Home activity diagram](https://github.com/norakramer1/progressive-web-apps-2122/blob/main/spa/public/images/home-activity-diagram.png)

### Activity diagram Search
![Search activity diagram](https://github.com/norakramer1/progressive-web-apps-2122/blob/main/spa/public/images/search-activity-diagram.png)

## Service worker
Ik heb een service worker toegevoegd om bij netwerkproblemen of een fout in de server ook files te kunnen serveren. Als je voor het eerst op de website wordt er een cache aangemaakt en geopend. Daarna wordt er content ingeladen. De service worker luistert naar een aantal events (install, activate en fetch), als er iets veranderd of geïnstalleerd wordt gaat het dit opslaan in de cache om het met netwerkproblemen te laten werken. De cache zet alle assets die op de '/' (home) route gebruikt worden erin en ook de CSS.

## Enhancements for the critical rendering path
Om de loading time te verbeteren heb ik een aantal optimalisaties gedaan aan de critical rendering path.

### Lighthouse
Ik ben begonnen om een Lighthouse een report te genereren om de laadtijd te checken. Hier kwamen een aantal punten voor verbetering uit.

1. Image grootte
Ik wilde grote images laten zien op de homepagina dus ik heb ze eerst niet verkleind. Omdat ik 25 images op de homepagina wilde laten zien was dit niet echt handig. Ik heb ervoor gekozen om de images te verkleinen in de API met slice en `s=300` pixels. 

2. Reduce initial server response time
Ik heb gekeken om de response van de server te versnellen maar dit is lastig omdat ik niet expliciet weet waar het vandaan komt was het lastig. Ook schommelt dit heel erg. Soms is de server response time geen probleem en is de laadtijd een stuk beter, en soms niet. 


3. Image elements do not have explicit width and height
Ik had geen width en height meegegeven aan de images en dit heb ik later aangepast zodat dit punt verbeterd zou worden.

### Compression package
Op NPM kun je een Compression package downloaden. Dit pakketje zorgt ervoor dat de response body vn de server gecompressed wordt zodat het sneller van de server naar de client laad, en de user minder lang hoeft te wachten. Ik heb dit geïmplementeerd door het pakketje te requiren en `app.use(compression)`.

### Caching headers
Met hulp van dit artikel heb ik caching headers geïmplementeerd. Zorgt ervoor dat het serveren en opslaan van de cache beter afgehandeld wordt. Met `res.set` set je een caching header die na een bepaalde tijd, die je zelf kan bepalen, weer verwijderd wordt.

- [MDN on caching headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)
- [REGbrain on caching headers](https://regbrain.com/article/cache-headers-express-js)


### Image slice
Ik wilde grote images laten zien op de homepagina dus ik heb ze eerst niet verkleind. Omdat ik 25 images op de homepagina wilde laten zien was dit niet echt handig. Ik heb ervoor gekozen om de images te verkleinen in de API met slice en `s=300` pixels. 

## Feature checklist
- Betere styling
- Als de app offline is nuttigere dingen serveren. Misschien aan de gebruiker laten zien waar ze nog wel heen kunnen navigeren
- Error/ loading states

## Sources
- [net ninja PWA](https://www.youtube.com/watch?v=4XT23X0Fjfk&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7)
- [MDN on caching headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)
- [REGbrain on caching headers](https://regbrain.com/article/cache-headers-express-js)

## License
This project uses the [MIT](https://github.com/norakramer1/progressive-web-apps-2122/blob/main/LICENSE) license. 