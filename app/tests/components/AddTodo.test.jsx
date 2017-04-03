var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')

var AddTodo = require('AddTodo')

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist()
  })

  it('should call onSubmit if valid string entered', () => {
    var spy = expect.createSpy()
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddNewTodo={spy} />)
    var $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todoText.value = 'Walk dog'
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toHaveBeenCalledWith('Walk dog')
  })

  it('should call NOT onSubmit if empty string entered', () => {
    var spy = expect.createSpy()
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddNewTodo={spy} />)
    var $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todoText.value = ''
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()
  })

})
