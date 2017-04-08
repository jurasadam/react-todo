import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAZMd0iQXClf98XlV5_fFO8xG3vRqMWGfA',
  authDomain: 'adam-todo-app.firebaseapp.com',
  databaseURL: 'https://adam-todo-app.firebaseio.com',
  projectId: 'adam-todo-app',
  storageBucket: 'adam-todo-app.appspot.com',
  messagingSenderId: '463087146916'
}
firebase.initializeApp(config)

var firebaseRef = firebase.database().ref()
firebaseRef.set({
  appName: 'Todo App',
  isRunning: true,
  user: {
    name: 'Adam',
    age: 29
  }
}).then(() => {
  console.log('Set worked')
}, (e) => {
  console.log('Set failed')
})

firebaseRef.child('user').set({
  name: 'Mike'
})
