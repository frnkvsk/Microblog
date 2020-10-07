import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexGrow: 1,
    backgroundColor: '#eef0f1fb',
  },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    flexGrow: 1,
    color: 'black',
    textDecoration: 'none',
  },
  linkWrapper: {
    display: 'flex',
    fontWeight: 'bold',
  },
  links: {
    fontSize: '18px',
    marginRight: '20px',
    color: '#2196f3',
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Typography variant="h5" className={classes.title} component={Link} to={"/"} >
          <h2>Microblog</h2>
          <h4>Get in the Rithm of blogging!</h4>
        </Typography>
        <div className={classes.linkWrapper}>
          <Button className={classes.links} component={Link} to={"/"} >
            Blog
          </Button> 
          <Button className={classes.links} component={Link} to={"/new"} >
            Add a new post
          </Button>
        </div>                
      </Toolbar>
    </AppBar>
  );
}

