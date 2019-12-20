import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { Route } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";


export default function App() {
  return (
    <main>
      <Header />
        <Route exact path={'/'}>
            <WelcomePage/>
        </Route>
        <Route path={'/search'}>
            <SearchForm/>
        </Route>
        <Route path={'/characters'}>
            <CharacterList/>
        </Route>
    </main>
  );
}
