// import React from 'react';
// import { Button, makeStyles } from '@material-ui/core';
// import CloseIcon from '@material-ui/icons/Close';
// import EditIcon from '@material-ui/icons/Edit';

// const useStyles = makeStyles((theme) => ({
//   root: {
    
//     display: 'flex',
//     flexDirection: 'column',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     width: '100%', 
//     fontSize: '22px',
//     border: '1px solid red', 
//   },
//   display: {
//     // display: 'flex',
//     // flexDirection: 'column',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     // flexWrap: 'wrap',
//     // marginTop: '30px',
//   },
//   titleWrapper: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '100%',
//     fontSize: '32px',
//     fontWeight: '500',
//     marginBottom: '20px',
//     border: '1px solid blue', 
//   },
//   closeIcon: {
//     color: 'red',
//     fontWeight: 'bold',
//   },
//   editIcon: {
//     color: '#2196f3',
//   },
//   hr: {
//     width: '100%',
//     border: '1px solid #9e9e9e',
//     // borderColor: 'black',
//     // fontWeight: 'bold',
//   },
//   button: {
//     width: '80px',
//   }
// }));

// export default function Blog() {
//   const classes = useStyles();
//   const title = 'Why is the Sky Blue?';
//   const description = 'A treatise on color theory.';
//   const body = 'Facilisi viverra curae; fermentum iaculis convallis tortor accumsan semper inceptos venenatis euismod. Ornare semper eleifend hac ullamcorper leo enim cras nec aliquam aenean fusce quis. Nibh mi molestie senectus. Sapien arcu ridiculus justo orci proin torquent mauris auctor auctor. Pretium quisque vivamus magnis? Habitasse quis lacus morbi potenti mollis platea. Elit libero nam risus fringilla magna aenean morbi interdum. Laoreet ultricies curabitur vehicula condimentum. Dapibus habitasse aenean nullam ornare tellus litora, viverra sem mauris venenatis sociis. Fermentum feugiat aptent commodo. Nostra rutrum consequat mauris vitae massa ipsum lectus molestie. Nullam dui pulvinar velit eget facilisi at. Habitasse suspendisse sem.';
//   return (
//     <div className={classes.root}>
//       <div className={classes.titleWrapper}>
//         <h1>{title}</h1>
//         <div className={classes.iconWrapper}>
//           <EditIcon className={classes.editIcon}/>
//           <CloseIcon className={classes.closeIcon}/>
//         </div>
//       </div>
      
//       <div>{description}</div>
//       <div>{body}</div>
//       <hr className={classes.hr}/>
//       <div className={classes.titleWrapper}>Comments</div>
//       <Button className={classes.button} variant="contained" color="primary" >
//           Add
//         </Button>
//     </div>
//   );
// }