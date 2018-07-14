import React, { Component } from 'react';
// import './Dashboard.css';
import axios from 'axios'

export default class WorkoutApi extends Component {
    state = {
        exercise: null
    }

    handleSubmit = (e) => {
        let data;
        e.preventDefault();
        const ta = this.refs.textarea.value;
        const exerciseUrl = `https://wger.de/api/v2/exercise/search/?term=${ta}`
        console.log("URLLLL", exerciseUrl);
        const axiosReq = axios.get(exerciseUrl).then(res => {
            data = res.data.suggestions
            this.setState({ data });
        }).catch(error => console.log('error', error));
        console.log('AXXXX', axiosReq);
        // console.log("QUERY", )
        this.refs.textarea.value = ''
    }

    renderPage = () => {

    }

    render() {
        const exercise = this.state.exercise;
        console.log("STATE", this.state)
        return (
            <div className='ryanIsGay'>
                <div className='workoutApi'>
                    <h1>Exercise image search</h1>
                    <p>Don't know how to do a specific exercise? Try entering the name of the exercise in our search and get an image of what the exercise looks like.</p>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type='textarea' ref='textarea' />
                        {/* ref allows you to id the input and reset it in the handleSubmit function */}
                        <button>Search Exercises</button>
                    </form>
                    <br />
                    {this.state.data && this.state.data.map(a => {
                        return (
                            <div className='workoutRender'>
                                <label>{a.value}</label>
                                <br />
                                <img src={a.data.image} />
                                <br />
                                {/* <label>{a.data.category}</label> */}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}