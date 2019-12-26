import React from 'react';
import './App.css';
import CartList from './Components/CartList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListPosts from "./Components/ListPosts"
import DetailsList from './Components/DetailsList';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={CartList} />
        <Route path="/posts/:id" component={ListPosts}/>
        <Route path="/details/:id" component={DetailsList}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
