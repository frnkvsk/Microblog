import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { 
  addNewPost,
  editPost,
 } from './../microblogPostsSlice';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormHelperText, OutlinedInput, TextField } from '@material-ui/core';
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

  }
}));

const BlogForm = ({data}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  
  useEffect(() => {
    const {id, title, description, body} = data;
    console.log(id, title, description, body)
    if(id !== undefined) setId(id);
    if(title !== undefined) setTitle(title);
    if(description !== undefined) setDescription(description);
    if(body !== undefined) setBody(body);
  }, []);

  const handleSubmit = e => {   
    e.preventDefault();
    if(title.value.length && description.value.length && body.value.length) {
      const payload = {
        title: title.value, 
        description: description.value, 
        body: body.value
      }
      if(id !== '') {
        payload[id] = id;
        dispatch(editPost(payload));
      } else {
        dispatch(addNewPost(payload));
      }
      
      history.push('/');
    } 
  }
  const handleChange = e => {
    if(e.target.name === 'title') {
      setTitle(e.target.value);
    } else if(e.target.name === 'description') {
      setDescription(e.target.value);
    } else {
      setBody(e.target.value)
    }
  }
  return (
    <form className={classes.form} noValidate autoComplete="off">
      
      <FormHelperText className={classes.label}>Title:</FormHelperText>      
      <OutlinedInput 
        name="title"
        className={classes.input} 
        variant="outlined" 
        value={title}
        onChange={handleChange}
      />
      <FormHelperText className={classes.label}>Description:</FormHelperText>
      <OutlinedInput 
        name="description"
        className={classes.input} 
        variant="outlined" 
        value={description}
        onChange={handleChange}
      />
      <FormHelperText className={classes.label}>Body:</FormHelperText>
      <TextField
        name="body"
        className={classes.input} 
        variant="outlined" 
        multiline
        rows={6}
        value={body}
        onChange={handleChange}
      />
      <div className={classes.root}>
        <Button variant="contained" color="primary" onClick={handleSubmit} >
          Save
        </Button>
        <Button onClick={() => history.push('/')} variant="contained" color="default" >
          Cancel
        </Button>
      </div>      
    </form>
  );
}

export default BlogForm;