import firebase from 'firebase';
import { ref, firebaseAuth,  firebaseDB, username } from './firebase';
import UserInfo from './UserInfo';

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw).then( (user) => {
  
    // TODO: Cloud function
    if(user){
        // Set the user's username.
        firebaseDB.ref('userinfo/'+user.uid).update({username:username});
    }
  }).catch((error)=>{
    // errorCB(error);
  });
}

export const addPost = function( postMessage ) {
  var newPostRef = firebaseDB.ref('/posts/'+firebaseAuth.currentUser.uid).push();
  // TODO: we need to move time tracking to the server...
  var date = Date.now();
  newPostRef.set({
    "timeStamp":date,
    "content":postMessage
  });
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}

export const getPosts = function() {

}

const removeDots = function(item) {
  return item.replace(/\./g,"_DOT_");
}
