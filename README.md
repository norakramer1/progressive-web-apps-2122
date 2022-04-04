# Progressive Web Apps @cmda-minor-web · 2021/22

## Table of contents
- [About this project ](#About)
- [Install ](#Install)
- [User story](#User)
- [Features ](#User)
- [Client- vs. serverside rendering](#Client-)
- [Activity diagram](#Activity)
- [Service worker](#Service)
- [Enhancements for the critical rendering path](#Enhancements)
- [Feature checklist](#feature)
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
## Service worker
## Enhancements for the critical rendering path
## Feature checklist
## Sources
- [net ninja PWA](https://www.youtube.com/watch?v=4XT23X0Fjfk&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7)

## License
This project uses the [MIT](https://github.com/norakramer1/progressive-web-apps-2122/blob/main/LICENSE) license. 