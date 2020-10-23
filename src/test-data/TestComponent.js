// import React, { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';

// const TestComponent = () => {
//   const auth = useContext(AuthContext);
//   const setAuth2 = async () =>
//     await auth.setAuthState({
//       token: 'testtoken',
//       userInfo: {
//       username: 'testuser',
//       first_name: 'testfirst',
//       last_name: 'testlast',
//       email: 'test@test.com',
//       photo_url: null
//     }});
//   (async () => await setAuth2())();
//   console.log('-------auth.authState',auth.authState)
//   return (
//     <div>
//       <div>{auth.authState.userInfo.username}</div>
//       <div>{auth.authState.userInfo.first_name}</div>
//       <div>{auth.authState.userInfo.last_name}</div>
//       <div>{auth.authState.userInfo.email}</div>
//       <div>{auth.authState.userInfo.photo_url}</div>
//     </div>
//   )
// }
// export default TestComponent;

