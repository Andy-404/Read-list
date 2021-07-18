const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');

const schema = require('./schema/schema');

const app = express();

mongoose
  .connect(
    'mongodb+srv://Andy:UYGWFPuhdkH3XHKF@cluster0.3nv6s.mongodb.net/read-list?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .catch(err => console.log(err));
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => console.log('Running at port 4000'));
