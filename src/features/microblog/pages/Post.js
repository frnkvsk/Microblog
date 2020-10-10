import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import { makeStyles, Tooltip } from '@material-ui/core';
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
    padding: '7px',
    border: '1px solid #e0e0e0', 
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
  },
  button: {
    width: '80px',
  },
  description: {
    fontSize: '22px',
    fontStyle: 'italic',
    margin: '12px 0 5px 0',
    
  },
  body: {
    fontSize: '22px',

    margin: '25px 0 5px 0',
  },
  
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
                <Tooltip title="Edit Post">
                  <EditIcon className={classes.editIcon} onClick={handleEdit}/>
                </Tooltip>
                <Tooltip title="Delete Post">
                  <CloseIcon className={classes.closeIcon} onClick={handleDelete}/>
                </Tooltip>                
              </div>
            </div>
          
            <div className={classes.description}>{postList.data.description}</div>
            <div className={classes.body}>{postList.data.body}</div>
            <hr className={classes.hr}/>
            <div className={classes.titleWrapper}>Comments</div>
            <BlogComments id={id} />
          </>
      )) : (
        <BlogForm data={postList.data}/>
      )}
     
      
    </div>
  );
}