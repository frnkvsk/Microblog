import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { 
//   getCommentsDataById,
//   addNewComment,
//   removeComment,
//   selectPosts,
//  } from '../microblogPostsSlice';
import { 
  getCommentsDataById,
  addNewComment,
  removeComment,
  selectComments,
 } from '../microblogCommentsSlice';
// import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Button, OutlinedInput } from '@material-ui/core';
// import { v4 as uuid } from 'uuid';
// import useFormInput from './../hooks/useFormInput';

// import {
//   createTodo,
//   persistDataToLocalStorage,
// } from './todosSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0px',
    // border: '1px solid pink',
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
  delete: {
    color: 'red',
    fontSize: '22px',
    fontWeight: '700',
    padding: '0 10px 0 5px',
    cursor: 'pointer',
  },
  deleteWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '5px',
  },
  button: {
    width: '60px',
    marginTop: '10px',
  }
}));

const BlogComments = ({id}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const history = useHistory();
  const commentList = useSelector(selectComments);
  // const [id, setId] = useState('');
  const [comment, setComment] = useState('');
  // const [comments, setComments] = useState([]);
  
  // useEffect(() => {
  //   dispatch(getCommentsDataById(id)); 
  // }, [dispatch, id]);

  useEffect(() => {
    
    dispatch(getCommentsDataById(id)); 
    // setComments(() => commentList.data);
    console.log('--useEffect',commentList.status)
    // eslint-disable-next-line
  }, [dispatch, id]);

  

  const handleSubmit = async e => {   
    e.preventDefault();
    if(comment.length) {
      const payload = {
        id: id,
        comment: comment, 
      }
      await dispatch(addNewComment(payload));
      dispatch(getCommentsDataById(id)); 
      setComment('');
      
    } 
  }
  const handleChange = e => {
    setComment(e.target.value);
  }
  const handleDelete = deleteId => {
    dispatch(removeComment({id: deleteId}));
    setTimeout(() => {
      dispatch(getCommentsDataById(id)); 
    }, 100);
  }
  return (
    <>
      <div className={classes.root}>
        {/* {console.log('comments',comments)} */}
        {/* {console.log('comments',comments)} */}
        {commentList.data.length ? commentList.data.map(e => (
          <div key={e.id} className={classes.deleteWrapper}>
            <div className={classes.delete} onClick={() => handleDelete(e.id)}>x</div>{e.text}</div>
        )) : ''}
      </div>
      <form className={classes.form} noValidate autoComplete="off">     
              
        <OutlinedInput 
          name="title"
          className={classes.input} 
          placeholder="New Comment"
          variant="outlined" 
          autoFocus
          value={comment}          
          onChange={handleChange}
        />        
        <Button className={classes.button} variant="contained" color="primary" onClick={handleSubmit} >
            Add
        </Button>      
      </form>
    </>
    
  );
}

export default BlogComments;