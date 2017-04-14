import React from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions'

export class AddTodo extends React.Component {
  onSubmit (e) {
    e.preventDefault()
    var {dispatch} = this.props
    var todoText = this.refs.todoText.value

    if (typeof todoText === 'string' && todoText.length > 0) {
      this.refs.todoText.value = ''
      dispatch(actions.startAddTodo(todoText))
    } else {
      this.refs.todoText.focus()
    }
  }
  render () {
    return (
      <div className='container__footer'>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type='text' placeholder='Start typing todo title ...' ref='todoText' />
          <button className='button expanded'>Add New Todo</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo)
