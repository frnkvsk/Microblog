import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

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

  return (
    <div className={classes.root}>
      <h1>`Post ${id}`</h1>
      
    </div>
  );
}