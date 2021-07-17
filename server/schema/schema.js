const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

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
      },
    },
  },
});

module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
});
