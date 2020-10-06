/**
 create a post (title, description, body)
read a post
update a post
delete a post

create a comment on a post (from post-detail page)
vote on a post (from home, post-detail pages)


categories for posts
multiple blogs, where each blog has many posts (this would be an ambitious change!)
editing comments
a page listing “most recent comments”
pagination for the homepage, so it shows batches of titles, rather than all
authentication and authorization
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPostsData, selectPosts } from './../microblogPostsSlice';

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
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginTop: '30px',
    padding: '10px',
  },
  blog: {
    width: '45%',
    margin: '10px',
    border: '1px solid #e0e0e0',
    
  },
  link: {
   textDecoration: 'none', 
   color: '#2196f3',
  }
}));

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const postList = useSelector(selectPosts);
  useEffect(() => {
    dispatch(getPostsData());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        Welcome to<b>&nbsp;Microblog</b>, our innovative site for communicating on the information superhighway.
      </div>
      <div className={classes.display}>
        {console.log('postList.data',postList)}
        {(postList && postList.status === 'fulfilled' && postList.data.length) && postList.data.map(e => (
          <div className={classes.blog} key={e.id}>

            <div>{e.id}</div>
            <a className={classes.link} href={`/${e.id}`}>{e.title}</a>
            <div>{e.description}</div>
            <div>{e.body}</div>
            <div>{e.votes}</div>
          </div>
        ))}
      </div>
    </div>
  );
}