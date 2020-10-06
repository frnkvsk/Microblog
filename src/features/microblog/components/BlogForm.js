import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewPost } from './../microblogPostsSlice';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormHelperText, OutlinedInput, TextField } from '@material-ui/core';
// import { v4 as uuid } from 'uuid';
import useFormInput from './../hooks/useFormInput';

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

const TodoForm = ({formTitle}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const title = useFormInput('');
  const description = useFormInput('');
  const body = useFormInput('');

  const handleSubmit = e => {   
    e.preventDefault();
    if(title.value.length && description.value.length && body.value.length) {
      const payload = {
        title: title.value, 
        description: description.value, 
        body: body.value
      }
      dispatch(addNewPost(payload))
      history.push('/');
    } 
  }

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <h1>{formTitle}</h1>
      <FormHelperText className={classes.label}>Title:</FormHelperText>      
      <OutlinedInput 
        className={classes.input} 
        variant="outlined" 
        {...title}
      />
      <FormHelperText className={classes.label}>Description:</FormHelperText>
      <OutlinedInput 
        className={classes.input} 
        variant="outlined" 
        {...description}
      />
      <FormHelperText className={classes.label}>Body:</FormHelperText>
      <TextField
        className={classes.input} 
        variant="outlined" 
        multiline
        rows={6}
        {...body}
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

export default TodoForm;