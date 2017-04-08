var React = require('react')
var {connect} = require('react-redux')
var actions = require('actions')

export var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault()
    var {dispatch} = this.props
    var todoText = this.refs.todoText.value

    if (typeof todoText === 'string' && todoText.length > 0) {
      this.refs.todoText.value = ''
      dispatch(actions.startAddTodo(todoText))
    } else {
      this.refs.todoText.focus()
    }
  },
  render: function () {
    return (
      <div className='container__footer'>
        <form onSubmit={this.onSubmit}>
          <input type='text' placeholder='Start typing todo title ...' ref='todoText' />
          <button className='button expanded'>Add New Todo</button>
        </form>
      </div>
    )
  }
})

export default connect()(AddTodo)
