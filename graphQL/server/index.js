import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import cors from "cors";
import express from "express";

async function startServer() {
  const app = express();
  const server = ApolloServer({
    typeDefs: ``,
    resolvers: {},
  });

  app.use(cors());

  await server.start();

  app.use("/graphQL", expressMiddleware(server));
  app.listen(3001, () => {
    console.log("server is listing on PORT 3001");
  });
}
startServer();
