import firebase from 'firebase'

try {
  var config = {
    apiKey: 'AIzaSyAZMd0iQXClf98XlV5_fFO8xG3vRqMWGfA',
    authDomain: 'adam-todo-app.firebaseapp.com',
    databaseURL: 'https://adam-todo-app.firebaseio.com',
    projectId: 'adam-todo-app',
    storageBucket: 'adam-todo-app.appspot.com',
    messagingSenderId: '463087146916'
  }

  firebase.initializeApp(config)
} catch (e) {

}

export var firebaseRef = firebase.database().ref()
export default firebase
