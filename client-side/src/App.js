import React from 'react';
import './App.css';
import API from './adapters/API';
import Index from './components/Index';
import { isUndefined } from 'util';

class App extends React.Component {

  state = {
    user: undefined
  }

  componentDidMount() {
    API.validateUser()
      .then(data => {
        if (data.error) {
          console.error(data.error)
        } else {
          this.setState({ user: data })
        }
      })
  }

  signUp = user => {
    API.signUp(user)
      .then(user => this.setState({ user }))
  }

  logIn = user => {
    API.logIn(user)
      .then(user => this.setState({ user }))
  }

  logOut = () => {
    API.clearToken()
    this.setState({ user: undefined })
  }

  render() {
    return (
      <div className="App">
        <Index user={this.state.user} signUp={this.signUp} logOut={this.logOut} logIn={this.logIn} />
      </div>
    )
  }
}

export default App;
