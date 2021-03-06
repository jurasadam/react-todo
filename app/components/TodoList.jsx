import React from 'react'
import {connect} from 'react-redux'
import Todo from 'Todo'
import TodoAPI from 'TodoAPI'

export class TodoList extends React.Component {
  render () {
    var {todos, showCompleted, searchText} = this.props // works because of connect at EOF
    var renderTodos = () => {
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)

      if (filteredTodos.length === 0) {
        return (
          <p className='container__message'>Nothing To Do</p>
        )
      } else {
        return filteredTodos.map((todo) => {
          return (
            <Todo key={todo.id} {...todo} />
          )
        })
      }
    }

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
}

export default connect(
  (state) => {
    return state // return all 3, searchText, showCompleted, todos
  }
)(TodoList)
