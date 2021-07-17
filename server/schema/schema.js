const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString } = graphql;

//dummy data

var books = [
  { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
  { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
  { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' },
];

//Define book object type

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

//Query that tells how we initially jump into the graph

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //code to get dadta from db/other sources
        return _.find(books, { id: args.id });
      },
    },
  },
});

module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
});
