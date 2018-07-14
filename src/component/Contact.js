import React, { Component } from 'react';
// import Navigation from"./Navbar";
import firebase from './firebase';


class Contactpage extends Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] }; // <- set up react state
      }
      componentWillMount() {
        /* Create reference to messages in Firebase Database */
        let messagesRef = firebase
        .database()
        .ref('Contact Form')
        .orderByKey()
        .limitToLast(100);
        // messagesRef.on("child_added", snapshot => {
        //    /* Update React state when message is added at Firebase Database */
        //   let message = { text: snapshot.val(), id: snapshot.key };
        //   this.setState({ messages: [message].concat(this.state.messages) });
        // });
      }
      onAddMessage(event) {
        event.preventDefault(); // <- prevent form submit from reloading the page
        /* Send the message to Firebase */
    
        const userInfo = {
          name: this.name.value,
          email: this.email.value,
          phone: this.phone.value,
         
          message: this.message.value
        };
    
        firebase
          .database()
          .ref("Contact Form")
          .push(userInfo)
          .then(() => this.props.history.push("/"))
          .catch(err => console.log("ERROR", err));
      }
    render() {
      return (
        <div id="Contactpage"className="App">
        
 <header className="Contact-header">
 {/* <img src={gedehLogo} className="App-logo" alt="logo" /> */}
  <h1 className="App-title">We Care About Your Opinion</h1>
        </header>
        {/* <Navigation>{Navigation}</Navigation> */}

     <div  id="container"className="container">
            <div className="wrapper animated bounceInLeft">
            <div className="company-info">
            <h3>E.M Bible Chat Contact Form</h3>
            <ul>   
          <li id="road"><i  className="fa fa-road"></i> 44 Something st</li>
          <li id="road"><i className="fa fa-phone"></i>(602) 419-0457</li>
          <li id="road"><i className="fa fa-envelope"></i> evolvetheprophet2@gmail.com</li>
        </ul>
            </div>
            <div className="contact">
            <h2>Contact Our Administrators </h2>
              <form id="form" onSubmit={this.onAddMessage.bind(this)}>
         
                <div className="col-lg-6 col-md-6">
                  <div id="input" className="input-group input-group-lg">
                    <span className="input-group-addon" id="sizing-addon1">
                    </span>
                    <input
                      ref={el => (this.name = el)}
                      type="text"
                      name="name"
                      className="form-control"
                      aria-describedby="sizing-addon1"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <br/>
                  <div id="input" className="input-group input-group-lg">
                    <span className="input-group-addon" id="sizing-addon1">
                    </span>
                    <input
                       ref={el => (this.email = el)}
                       type="email"
                       name="email"
                      className="form-control"
                      aria-describedby="sizing-addon1"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <br/>
                  <div id="input" className="input-group input-group-lg">
                  <p className="full">
                    <span className="input-group-addon" id="sizing-addon1">
                    </span>
                    <input
                      ref={el => (this.phone = el)}
                      type="text"
                      name="phone"
                      className="form-control"
                      aria-describedby="sizing-addon1"
                      placeholder="Phone Number"
                      required
                    />
                     </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div id="input-M" className="input-group">
                  <p className="full">
                    <textarea
                      ref={el => (this.message = el)}
                      name="message"
                      id="sizing-addon1"
                      cols="100"
                      rows="6"
                      className="form-control"
                      placeholder="Message"
                    />
                     </p>
                  </div>
                  </div>
                  <p className="full">
                    <button id="submit-button" type="submit">Submit</button>
                  </p>
                <ul>
                {/* Render the list of messages */
               this.state.messages.map(message => {
                return (
                  <ul>
                    <li key={message.id}>{message.text.email}</li>
                    <li key={message.id}>{message.text.message}</li>
                    <li key={message.id}>{message.text.name}</li>
                    <li key={message.id}>{message.text.phone}</li>
                  </ul>   
                )
              })}
              </ul>
              </form>
              </div>
          </div>
          </div>
          <br/>
          <br/>
        </div>


    );
  }
}

export default  Contactpage;