import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { increment, incrementAsync, photosAsync } from './actions/counter'

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
      </div>
    );
  }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, {increment, incrementAsync, photosAsync})(App)
