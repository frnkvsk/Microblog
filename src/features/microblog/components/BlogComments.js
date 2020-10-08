import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  getCommentsDataById,
  addNewComment,
  removeComment,
  selectPosts,
 } from '../microblogPostsSlice';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormHelperText, OutlinedInput } from '@material-ui/core';
// import { v4 as uuid } from 'uuid';
// import useFormInput from './../hooks/useFormInput';

// import {
//   createTodo,
//   persistDataToLocalStorage,
// } from './todosSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '30px 0 20px 0',
  },
  input: {
    width: '100%',
    backgroundColor: '#ffffff',
    marginRight: '5px',
  },
  title: {

  },
  label: {

  },
  delete: {
    color: 'red',
    fontSize: '32px',
  }
}));

const BlogComments = ({id}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const postList = useSelector(selectPosts);
  // const [id, setId] = useState('');
  const [comment, setComment] = useState('');
  // const [comments, setComments] = useState([]);
  
  useEffect(() => {
    dispatch(getCommentsDataById(id));
  }, [dispatch, id])

  const handleSubmit = e => {   
    e.preventDefault();
    if(comment.length) {
      const payload = {
        id: id,
        comment: comment, 
      }
      dispatch(addNewComment(payload));
      
      history.push('/');
    } 
  }
  const handleChange = e => {
    setComment(e.target.value);
  }
  const handleDelete = id => {
    dispatch(removeComment({id: id}))
  }
  return (
    <>
      <div>
        {console.log('comments',postList.data.comments)}
        {postList.data.comments && postList.data.comments.map(e => (
          <div key={e.id}><div className={classes.delete} onClick={() => handleDelete(e.id)}>X</div>{e.text}</div>
        ))}
      </div>
      <form className={classes.form} noValidate autoComplete="off">      
        <FormHelperText className={classes.label}>Title:</FormHelperText>      
        <OutlinedInput 
          name="title"
          className={classes.input} 
          placeholder="New Comment"
          variant="outlined" 
          value={comment}
          onChange={handleChange}
        />        
        <Button variant="contained" color="primary" onClick={handleSubmit} >
            Add
        </Button>      
      </form>
    </>
    
  );
}

export default BlogComments;