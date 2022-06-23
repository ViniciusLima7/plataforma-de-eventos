import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { client } from "../../lib/apollo";
import Evento from "../../pages/Evento";
import Inscricao from "../../pages/Inscricao";

export default function Router() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inscricao />}></Route>
          <Route path="/event" element={<Evento />}></Route>
          <Route path="/event/lesson/:slug" element={<Evento />}></Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}
