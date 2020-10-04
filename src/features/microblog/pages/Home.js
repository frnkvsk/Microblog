import React from 'react';

import { makeStyles } from '@material-ui/core';
// import Blog from './../components/Blog';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: '100%', 
    border: '1px solid blue',   
  },
  title: {
    display: 'flex',
    fontSize: '22px',
    width: '100%',
    border: '1px solid orange',
  },
  display: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '30px',
  },
  blog: {
    width: '40%',
    border: '1px solid red',
  }
}));

export default function Home() {
  const classes = useStyles();
  const temp = [
    {
      name: 'Why Does the Sun Shine?',
      description: 'An examination of physics.',
      upVotes: 1,
      downVotes: 3,
    },
    {
      name: 'Why is the Sky Blue?',
      description: 'A treatise on color theory.',
      upVotes: 2,
      downVotes: 3,
    },
    {
      name: 'How to code.',
      description: 'This is how to code.',
      upVotes: 3,
      downVotes: 3,
    },
  ]
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        Welcome to<b>&nbsp;Microblog</b>, our innovative site for communicating on the information superhighway.
      </div>
      <div className={classes.display}>
        {temp.map(e => (
          <div className={classes.blog}>
            <div>{e.name}</div>
            <div>{e.description}</div>
            <div>{e.upVotes+' '+e.downVotes}</div>
          </div>
        ))}
      </div>
    </div>
  );
}