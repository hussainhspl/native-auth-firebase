/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react'
import { View, SafeAreaView } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/common';
import LoginForm from './src/LoginForm';
// import AlbumList from './src/AlbumList';

const style = {
  viewStyle: {
    fontSize: 32,
    backgroundColor: 'yellow',
    height: 60
  }
};
// type Props = {};
export default class App extends Component {
  state= { loggedIn: null };
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBlr4N4OjM2ptH3CEu4SJ3sx280wunGUkI',
      authDomain: 'auth-aa846.firebaseapp.com',
      databaseURL: 'https://auth-aa846.firebaseio.com',
      projectId: 'auth-aa846',
      storageBucket: '',
      messagingSenderId: '750834417920',
      appId: '1:750834417920:web:f00859db6e53f5e1',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true: 
        return (
          <View style={{height: 50 }}>
            <Button onPress={() => firebase.auth().signOut()}> Sign out </Button>
          </View>
        );
      case false: 
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
    
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ flex: 1 }}>
          <Header style={style.viewStyle} headerName="authentication" />
          {this.renderContent()}
        </View>
      </SafeAreaView>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
