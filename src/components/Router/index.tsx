import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { client } from "../../lib/apollo";
import Evento from "../../pages/Evento";

export default function Router() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}></Route>
          <Route path="/event/lesson/:slug" element={<Evento />}></Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}
