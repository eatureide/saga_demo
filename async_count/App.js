import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, increment_Async } from './action/counter'

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>{ this.props.counter }</p>
          <button onClick = {this.props.increment}> + </button>
          <button onClick = {this.props.increment_Async}> async+ </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps,{ increment, increment_Async })(App)
