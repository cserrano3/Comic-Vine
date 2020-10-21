import React from 'react';

import '../src/components/atoms/input/Input';
import Characters from './pages/characters/Characters'
import Character from './pages/character/Character'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {


   return <Router>
      <Switch>
         <Route path="/" exact>
            <Characters />
         </Route>
         <Route path="/:id" children={<Character />} />
      </Switch>

   </Router>;
}

export default App;