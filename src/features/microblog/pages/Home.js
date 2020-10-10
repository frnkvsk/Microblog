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
import BlogVotes from './../components/BlogVotes';
// import Blog from './../components/Blog';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: '100%', 
       
    margin: '15px 0 0 0' ,
    // border: '1px solid blue',
  },
  title: {
    // display: 'flex',
    fontSize: '32px',
    width: '100%',
    paddingRight: '10px',
    // border: '1px solid orange',
  },
  display: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: '20px',
    paddingRight: '10px',
    // padding: '10px',
    // border: '1px solid pink',
  },
  blog: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    minWidth: '400px',
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },
    [theme.breakpoints.up('md')]: {
      width: '48%'
    },
    // width: '48%',
    height: '120px',
    margin: '10px 0 10px 0',
    flexWrap: 'wrap',
    border: '1px solid #e0e0e0',
    
  },
  link: {
   textDecoration: 'none', 
   color: '#2196f3',
   padding: '7px',
  },
  description: {
    width: '93%',
    padding: '7px',
    flexWrap: 'wrap',
    overflow: 'hidden',
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
        Welcome to <b> Microblog</b>, our innovative site for communicating on the information superhighway.
      </div>
      <div className={classes.display}>
        {(postList && postList.status === 'fulfilled' && postList.data.length) && postList.data.map(e => (
          <div className={classes.blog} key={e.id}>
            <a className={classes.link} href={`/${e.id}`}>{e.title}</a>
            <div className={classes.description}>{e.description}</div>
            {/* <div>{e.body}</div> */}
            <BlogVotes id={e.id}/>
          </div>
        ))}
      </div>
    </div>
  );
}