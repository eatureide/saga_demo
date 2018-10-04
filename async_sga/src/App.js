import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { increment, incrementAsync, photosAsync, decrement } from './actions/counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>{this.props.counter}</p>
        <button onClick={ this.props.increment }>+</button>
        <br/>
        <button onClick={ this.props.incrementAsync }>async +</button>
        <br/>
        <button onClick={ this.props.photosAsync }>async photos</button>
        <br/>
        <button onClick={ this.props.decrement }>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, {increment, incrementAsync, photosAsync,decrement})(App)
