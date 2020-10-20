import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { 
  getPostsData,
  selectVotes,
  vote,
 } from '../microblogVotesSlice';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '99.2%',
    margin: '0px',
    backgroundColor: '#eef0f1fb',
    padding: '3px',
  },
  votesWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '5px',
  },
  votes: {
    margin: '5px',
  }, 
  thumbUp: {
    color: 'green',
    margin: '5px',
    cursor: 'pointer',
  },
  thumbDown: {
    color: 'red',
    margin: '5px',
    cursor: 'pointer',
  }
}));

const BlogVotes = ({id}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const votesList = useSelector(selectVotes);
  const [votes, setVotes] = useState(0);
  
  useEffect(() => {
    dispatch(getPostsData());
  }, [dispatch]);

  useEffect(() => {
    if(votesList && votesList.status === 'fulfilled') {
      setVotes(votesList.data.find(e => e.id === id).votes)
    } 
    // eslint-disable-next-line   
  }, [votesList.status]);  

  const handleUpVote = e => {   
    e.preventDefault();
    dispatch(vote({id: id, direction: 'up'}));
    setTimeout(() => {
      dispatch(getPostsData());
    }, 100);
  }
  const handleDownVote = e => {
    e.preventDefault();
    dispatch(vote({id: id, direction: 'down'}));
    setTimeout(() => {
      dispatch(getPostsData());
    }, 100);
  }
  
  return (
    <form className={classes.root} noValidate autoComplete="off">  
      <div className={classes.votesWrapper}>
        <div className={classes.votes}>{votes} votes</div>
        <ThumbUpIcon className={classes.thumbUp} onClick={handleUpVote}/>
        <ThumbDownIcon className={classes.thumbDown} onClick={handleDownVote}/>
      </div>            
    </form>
  );
}

export default BlogVotes;