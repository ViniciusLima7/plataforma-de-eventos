import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4nl2sep09bo01xo2v3kduuu/master",
  cache: new InMemoryCache(),
});
