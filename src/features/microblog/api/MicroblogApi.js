import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';

const request = async (endpoint, paramsOrData = {}, verb = "get") => {  
  
  console.debug("API Call:", endpoint, paramsOrData, verb);

  try {
    const res = await axios({
      method: verb,
      url: `${BASE_URL}${endpoint}`,
      [verb === "get" ? "params" : "data"]: paramsOrData});
    
    return res;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
  }catch(err) {
    let message = err.response ? err.response.data.message : err;
    throw Array.isArray(message) ? message : [message];
  }
}
// posts
const getPosts = async () => {
  return await request('posts');
}
const getPostById = async (id) => {
  return await request(`posts/${id}`);
}
const postPostVote = async (id, direction) => {
  return await request(`posts/${id}/vote/${direction}`, {}, 'post');
}
const postPostNew = async (title, description, body) => {
  const data = {
    title: title,
    description: description,
    body: body,    
  }
  return await request('posts/', data, 'post');
}
const putPostUpdate = async (id, title, description, body) => {
  const data = {
    title: title,
    description: description,
    body: body,    
  }
  return await request(`posts/${id}`, data, 'put');
}
const deletePost = async (id) => {
  return await request(`posts/${id}`, {}, 'delete');
}

// comments
const getComments = async (id) => {
  return await request(`posts/${id}/comments`)
}
const postCommentNew = async (id, text) => {
  return await request(`posts/${id}/comments/${id}`, {text: text}, 'post');
}
const putCommentUpdate = async (id, text) => {
  return await request(`posts/${id}/comments/${id}`, {text: text}, 'put');
}
const deleteComment = async (id) => {
  return await request(`posts/${id}/comments/${id}`, {}, 'delete');
}

export {
  getPosts,
  getPostById,
  postPostVote,
  postPostNew,
  putPostUpdate,
  deletePost,
  getComments,
  postCommentNew,
  putCommentUpdate,
  deleteComment,
};