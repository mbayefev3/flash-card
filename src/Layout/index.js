import React from "react";
import { Link, Route, Switch } from 'react-router-dom'
import HomePage from "./components/homepagecomponent/HomePage";
import MainRoutes from "./components/deckroutescomponent/MainRoutes";
import Header from "./Header";
import CreateDeck from "./components/deckroutescomponent/CreateDeck";
import NotFound from "./NotFound";


function Layout() {
  return (
    <main>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/decks/new" exact>
            <CreateDeck />
          </Route>
          <Route path='/decks/:deckId'>
            <MainRoutes />
          </Route>

          <NotFound />
        </Switch>
      </div>
    </main>
  );
}

export default Layout;
