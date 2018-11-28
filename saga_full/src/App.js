import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment_Async, decrement_Async } from './actions/counter'
import { get_User_Async } from './actions/user'

class App extends Component {
  render() {
    let userName = ''
    const { user } = this.props
    if(user.isFetching){
        userName = 'Loading'
    }else if(user.error){
        userName = user.error
    }else{
        userName = user.user ? user.user.data[0].name : ''
    }
    return (
        <div className="App" >
            <p>{ this.props.counter }</p>
            <button onClick = { this.props.increment_Async }> async+ </button> <br/>
            <button onClick = { this.props.decrement_Async }> async- </button> 
            <br />
            <br />
            <hr />
            <h1>{ userName }</h1>
            <button onClick = { this.props.get_User_Async }> asyncUser </button>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        user: state.user
    }
}

const mapdispatchtoprops = {
    increment_Async,
    decrement_Async,
    get_User_Async
}

export default connect(mapStateToProps, mapdispatchtoprops)(App)
