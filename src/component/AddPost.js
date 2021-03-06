//----------------------------------------------------------------------
// Auther: Christopher Bate
// Description: AddPost Component
// Adds a post to the currentUser's post set
//----------------------------------------------------------------------
import React from 'react';
import {firebaseDB, addPost} from './Auth';

export default class AddPost extends React.Component {
  constructor(props) {
    super(props);
  }

  submitPost(e) {
    e.preventDefault();
    addPost(this.refs.message.value);
    this.refs.message.value = '';
  }
  

  render() {
    return (
      // Renders a posting form
      <div className="AddPostContainer">
        <h3 className="AddPostTitle">Add Post</h3>
        <form onSubmit={this.submitPost.bind(this)}>
          <textarea cols="25" rows="7" ref="message"></textarea>
          <br/>
          <button className="NewPostButton">Post</button>
        </form>
      </div>
    );
  }
}
