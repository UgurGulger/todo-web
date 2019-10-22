import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoListItem from './TodoListItem';
import './App.css';

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={TodoListItem}/>
          <Route path='/new/list' exact={true} component={TodoListItem}/>
        </Switch>
      </Router>
  );
}

export default App;

//123