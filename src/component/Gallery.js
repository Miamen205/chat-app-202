import React, { Component } from 'react';
// import './gallery.css';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  renderImages = imageList => {
    const renderList = imageList.map(a => {
      return <img src={a} alt="userimage" />;
    });

    return renderList[this.state.index];
  };

  increment = () => {
    const newIndex = this.state.index + 1;
    this.setState({
      index: newIndex
    });
  };

  decrement = () => {
    const newIndex = this.state.index - 1;
    this.setState({
      index: newIndex
    });
  };

  render() {
    let currentIndex = this.state.index;
    let imageList = [];
    let numImages = 0;

    if (this.props.imageList) {
      imageList = this.props.imageList.map(a => {
        if (a.userImage) {
          return a.userImage;
        } else if (a.profileImage) {
          return a.profileImage;
        }
        numImages = this.props.imageList.length;
      });
    }

    return (
      <div className="image-gallery">
        {imageList.length > 0 && (
          <div className="gallery-image">{this.renderImages(imageList)}</div>
        )}

        {imageList.length !== this.state.index + 1 && (
          <button onClick={() => this.increment()}>Next &raquo;</button>
        )}

        {this.state.index !== 0 && (
          <button onClick={() => this.decrement()}>&laquo; Previous</button>
        )}
      </div>
    );
  }
}
