import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './features/microblog/components/Navbar'; 
import Home from './features/microblog/pages/Home';
import NewPost from './features/microblog/pages/NewPost';
import Login from './features/microblog/pages/Login';
import Post from './features/microblog/pages/Post';
import { 
  // AuthProvider, 
  AuthContext,
} from './features/microblog/context/AuthContext';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '20px',
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
  },
}));
function App() {
  const classes = useStyles();
  const auth = useContext(AuthContext);
  console.log('App auth',auth)
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
        <Navbar auth={auth}/>
          <div className={classes.root}>
            <main className={classes.main}>
            <Switch>        
              <Route exact path="/">
                <Home auth={auth}/>        
              </Route>
              <Route exact path="/login">
                <Login auth={auth}/>        
              </Route>
              <Route exact path="/new">
                <NewPost auth={auth}/>        
              </Route>
              <Route exact path="/:id">
                <Post auth={auth}/>        
              </Route>                 
            </Switch> 
            </main>        
          </div>
      {/* </AuthProvider>              */}
    </BrowserRouter>
  );
}

export default App;
