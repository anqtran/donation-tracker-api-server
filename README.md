# donation-tracker-ios-server-api

This project is the API for donation tracker which is an ios app managing item donation at different location.

##### Dependencies
*  npm - the `package.json` file lists all of the npm dependencies

#### REST API with ES6 and Express.

- ES6 support via [babel](https://babeljs.io)
- Express is Node.js web application framework via [express](https://github.com/expressjs/express)
- Passport authentication for Node.js via [passport](https://github.com/passport)
- Socket.IO enables real-time bidirectional event-based communication via [socket.io](https://github.com/socketio/socket.io)
- Mongoose is a MongoDB object modeling tool via [mongoose](https://github.com/Automattic/mongoose)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)

Getting Started
---------------
#### Run a local instance
* Go to `src/config/index.js` 
* change port to `"port": 3005`
* change mongoUrl to `"mongoUrl": "mongodb://localhost:27017/chat-api"`
```sh
# Install dependencies
npm install

# Start local development live-reload server port 3005:
npm run dev

# Requests made in the form http://localhost:3005/v1/endpoint

# To build ES6 code
npm run build

```

#### Run a live online instance 
* Go to `src/config/index.js` 
* change port to `"port": process.env.PORT`
* change mongoUrl to `"mongoUrl": process.env.MONGODB_URI`

