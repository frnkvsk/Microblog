import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import BlogForm from './../components/BlogForm';

import { useSelector, useDispatch } from 'react-redux';
import { 
  getPostDataById,
  removePost, 
  selectPosts, 
} from './../microblogPostsSlice';
import BlogComments from '../components/BlogComments';

const useStyles = makeStyles((theme) => ({
  root: {
    
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%', 
    fontSize: '22px',
    border: '1px solid red', 
  },
  display: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexWrap: 'wrap',
    // marginTop: '30px',
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    fontSize: '32px',
    fontWeight: '500',
    marginBottom: '0px',
    // border: '1px solid blue', 
  },
  title: {
    fontSize: '56px',
  },
  closeIcon: {
    color: 'red',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginRight: '10px',
  },
  editIcon: {
    color: '#2196f3',
    cursor: 'pointer',
    marginRight: '10px',
  },
  hr: {
    width: '100%',
    border: '1px solid #9e9e9e',
    // borderColor: 'black',
    // fontWeight: 'bold',
  },
  button: {
    width: '80px',
  }
}));

export default function Post({post}) {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = useState('display');
  const dispatch = useDispatch();
  const postList = useSelector(selectPosts);
  const {id} = useParams();
  useEffect(() => {
    dispatch(getPostDataById(id));
  }, [dispatch, id]);
  
  const handleEdit = () => {
    setState('edit');
  }
  const handleDelete = () => {
    dispatch(removePost({id: id}));
    history.push('/');
  }
  return (
    <div className={classes.root}>
      {/* {console.log('postList',postList)} */}
      {state === 'display' ? (
        postList && postList.data && (
          <>
          <div className={classes.titleWrapper}>
            <div className={classes.title}>{postList.data.title}</div>
            <div className={classes.iconWrapper}>
              <EditIcon className={classes.editIcon} onClick={handleEdit}/>
              <CloseIcon className={classes.closeIcon} onClick={handleDelete}/>
            </div>
          </div>
        
          <div>{postList.data.description}</div>
          <div>{postList.data.body}</div>
          <hr className={classes.hr}/>
          <div className={classes.titleWrapper}>Comments</div>
          {/* <Button className={classes.button} variant="contained" color="primary" >
              Add
          </Button> */}
          <BlogComments id={id} />
          </>
      )) : (
        <BlogForm data={postList.data}/>
      )}
     
      
    </div>
  );
}