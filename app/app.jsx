var React = require('react')
var ReactDOM = require('react-dom')
var {Provider} = require('react-redux')

var TodoApp = require('TodoApp')

var actions = require('actions')
var store = require('configureStore').configure()

store.dispatch(actions.startAddTodos())

$(document).foundation()

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
)
