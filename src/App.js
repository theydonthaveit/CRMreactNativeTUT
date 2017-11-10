import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'

// own states
import reducers from './reducers/PeopleReducer'

// own components
import Login from './components/Login'
import Loader from './components/Loader'
import Navigation from './components/Navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

const store = createStore(reducers)

export default class App extends Component<{}> {
  state = {
    loggedIn: null
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAITy5_dSlbADJiBNCplcOpC9mzRxipv7g",
      authDomain: "crm-tut-89f8e.firebaseapp.com",
      databaseURL: "https://crm-tut-89f8e.firebaseio.com",
      projectId: "crm-tut-89f8e",
      storageBucket: "crm-tut-89f8e.appspot.com",
      messagingSenderId: "485343547582"  
    })

    firebase
      .auth()
      .onAuthStateChanged((user) => {
        if(user) {
          this.setState({loggedIn: true})
        }
        else {
          this.setState({loggedIn: false})
        }
      })
  }

  renderInitialView() {
    switch(this.state.loggedIn) {
      case true:
        return <Navigation />
      case false:
        return <Login />
      default:
        <Loader size="large" />
    }
  }

  render() {
    return (
      <Provider
        store={store} >
        <View
          style={styles.container} >
          {this.renderInitialView()}
        </View>
      </Provider>
    );
  }
}
