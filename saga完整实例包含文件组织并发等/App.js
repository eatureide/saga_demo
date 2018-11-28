import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, increment_Async } from './action/counter'
import { get_user } from './action/user'

class App extends Component {

  render() {
    const { isFetching, error, user } = this.props.user

    let data

    if(error) {
        data = error
    }else if(isFetching) {
        data = 'Loading...'
    }else {
        data = user && user.data[0].name
        // console.log(data.data[0].name)
    }

    

    return (
      <div className="App">
          <p>{ this.props.counter }</p>
          <button onClick = { this.props.increment }> + </button>
          <br/>
          <button onClick = { this.props.increment_Async }> async+ </button>
          <br/>
          <button onClick = { this.props.get_user }>Get User</button>
          <h1>{ data }</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        user: state.user
    }
}

export default connect(mapStateToProps,{ increment, increment_Async, get_user })(App)
