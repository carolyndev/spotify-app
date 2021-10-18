import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Category from './Category';
import PlaylistPage from '../pages/PlaylistPage';

const Main = () => {
  return (
    <div className="body">
      <div className="body__inner">
        <header className="header">
          <div className="arrow">arrow</div>
          <div className="buttons">
            <button>SIGN UP</button>
            <button>LOG IN</button>
          </div>
        </header>

        <main className="main">
          <Switch>
            <Route path="/" exact component={Category}></Route>
            <Route path="/search">Search</Route>
            <Route path="/your-library">Library</Route>

            <Route path="/playlist/:id" component={PlaylistPage}></Route>
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default Main;
