import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import Schema from "./schema.js";
import resolvers from "./resolver.js";
const server = new ApolloServer({
    typeDefs : Schema,
    resolvers : resolvers,
    plugins : [ApolloServerPluginLandingPageGraphQLPlayground()]
})
server.listen().then((params) => {
  console.log(params,'params')
  console.log(`server listening at `)
})