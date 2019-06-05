## The Movie Database Challenge
Api made with **[express.js](https://github.com/expressjs/express)** that consumes [The Movie Database Api](https://www.themoviedb.org/documentation/api)

You can see the api docs  at: [http://52.67.174.10:5000/api-docs](http://52.67.174.10:5000/api-docs)

# Architecture
The application is separated by modules, this approach made easy to change from monolithic to micro services approach and made easy to use technologies like aws lambda (BaaS).

# How to Run

**Requirements**
 - Node  v.8

### With Node
> $ cd tmdb-api
> $ npm install 
> $ npm start

### With Docker

> $ docker build -t tmdb/api .
> $ docker run -d -p 5000:5000 tmdb/api

# Thid-party Libraries

 - [axios](https://github.com/axios/axios)  - Promise based HTTP client for the browser and node.js
 - [cors](https://github.com/expressjs/cors) to enable cors in api
 - [express.js](https://github.com/expressjs/express)  - Fast, unopinionated, minimalist web framework for [Node.js](https://nodejs.org/en/)
 - [morgan](https://github.com/expressjs/morgan) - HTTP request logger middleware for node.js
- [nodemon](https://github.com/remy/nodemon/) - Monitor for any changes in your node.js application and automatically restart the server
