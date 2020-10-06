import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Blog from './../components/Blog';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',    
  },
  display: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '30px',
  },
}));

export default function Post() {
  const classes = useStyles();
  const {id} = useParams();
  console.log(id)
  return (
    <div className={classes.root}>
      <Blog />
      
    </div>
  );
}