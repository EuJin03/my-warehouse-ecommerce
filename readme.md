notes

1. package.json -> start script swap to node server.js to run on npm start
2. frontend -> package.json -> "proxy": "http://127.0.0.1:5000" to listen on node backend
3. axios to fetch routes api
4. react-router-dom to chain up routes
5. npm i -D nodemon concurrently // -D flag is install as devDependencies
6. package.json -> start script add "server": "nodemon backend/server", "client": "npm start --prefix frontend". nodemon -> run the server, client -> fetch the client in the frontend with "--prefix"
7. concurrently allows scripts to run simultaneously
8. include "type": "module" in package.json to runs es6 modules in node
