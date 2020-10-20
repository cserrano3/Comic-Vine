import React from 'react';
import getCharaterByName from './services/characters/getCharacterByName';

import '../src/components/atoms/input/Input';
import Characters from './pages/characters/Characters'

import Character from './pages/character/Character'
import CharacterList from './components/organisms/CharacterList/CharacterList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {


   return <Router>
      <Switch>
         <Route to="/">
            <Characters />
         </Route>
         <Route to="/:id">
            <Character />
         </Route>
      </Switch>

   </Router>;
}

export default App;