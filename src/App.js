import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './features/microblog/components/Navbar'; 
import Home from './features/microblog/pages/Home';
import NewPost from './features/microblog/pages/NewPost';
import Post from './features/microblog/pages/Post';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '85%'
    },
    [theme.breakpoints.up('xl')]: {
      width: '75%'
    },
    border: 'none',
    // border: '1px solid #eeeeee',
  },
}));
function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Navbar />
      <div className={classes.root}>
        <main className={classes.main}>
        <Switch>        
          <Route exact path="/">
            <Home />        
          </Route>
          <Route exact path="/new">
            <NewPost />        
          </Route>
          <Route exact path="/:id">
            <Post />        
          </Route>                 
        </Switch> 
        </main>        
      </div>       
    </BrowserRouter>
  );
}

export default App;
