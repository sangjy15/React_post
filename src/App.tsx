import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { PostWrite } from './pages/PostWrite';
import { Post } from './pages/Post';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/post/write">쓰기</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/about/:id">
          <About />
        </Route>
        <Route path="/post/write/:postId?" exact>
          <PostWrite />
        </Route>
        <Route path="/post/:postId" exact>
          <Post />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
