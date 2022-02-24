const express = require('express');
const app = express();
const cors=require('cors');
const mongoose=require('mongoose');
const { createServer } = require('http');
const { ApolloServer } = require('apollo-server-express');
// const { graphqlUploadExpress } = require('graphql-upload');
const { schema, resolver} = require('./graphql/resolver');
const bodyParser = require('body-parser');
const port = 5000;

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("debug", true);

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// app.use(graphqlUploadExpress);

const server = new ApolloServer({
  uploads: false,
  typeDefs: schema,
  resolvers: resolver,
  context: ({ req, connection }) => {
    if (connection) {
      // check connection for metadata
      return connection.context;
    } else {
      // check from req
      const token = req.header("authorization");
      if (token) {
        try {
          // const decoded = jwt.verify(token, JWT_SECRET);
          return { user: null };
        } catch (err) {
          if (DEV) console.error("JWT: Invalid Token.");
          return { user: null };
        }
      }
    }
  },
  subscriptions: {
    path: "/subscriptions",
    onConnect: async (connectionParams, webSocket, context) => {
      console.log(
      "Subscription client connected using Apollo servers built-in SubscriptionServer." 
      );
    },
    onDisconnect: async (webSocket, context) => {
      console.log("Subscription client disconnected.");
    },
  },
});
server.start()
server.applyMiddleware({app})

const httpServer = createServer(app);

// server.installSubscriptionHandlers(httpServer);

app.get('/', (req, res) => {
  console.log("req has arrived")
  res.send("heheheh")
})

httpServer.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})