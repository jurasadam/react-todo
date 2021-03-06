var expect = require('expect')
var df = require('deep-freeze-strict')

var reducers = require('reducers')

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      }
      var res = reducers.searchTextReducer(df(''), df(action))

      expect(res).toEqual(action.searchText)
    })
  })

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      }
      var res = reducers.showCompletedReducer(df(false), df(action))

      expect(res).toEqual(true)
    })
  })

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abs123',
          text: 'Something',
          completed: false,
          createdAt: 9293424
        }
      }
      var res = reducers.todosReducer(df([]), df(action))

      expect(res.length).toEqual(1)
      expect(res[0]).toEqual(action.todo)
    })
  })

  it('should toggle todo', () => {
    var todosArray = [{
      id: '1',
      text: 'Walk the dog',
      completed: true,
      createdAt: 123,
      completedAt: 125
    }]

    var updates = {
      completed: false,
      completedAt: null
    }

    var action = {
      type: 'UPDATE_TODO',
      id: todosArray[0].id,
      updates
    }

    var res = reducers.todosReducer(df(todosArray), df(action))

    expect(res[0].completed).toEqual(updates.completed)
    expect(res[0].completedAt).toEqual(updates.completedAt)
    expect(res[0].text).toEqual(todosArray[0].text)
  })

  it('should add existing todos', () => {
    var todos = [{
      id: '1',
      text: 'Walk the dog',
      completed: true,
      createdAt: 123,
      completedAt: 125
    }]

    var action = {
      type: 'ADD_TODOS',
      todos
    }

    var res = reducers.todosReducer(df([]), df(action))

    expect(res.length).toEqual(1)
    expect(res[0]).toEqual(todos[0])
  })

  it('should clear todos', () => {
    var todo = [{
        id: 'abs123',
        text: 'Something',
        completed: false,
        createdAt: 9293424
    }]
    var action = {
      type: 'LOGOUT'
    }
    var res = reducers.todosReducer(df(todo), df(action))

    expect(res.length).toEqual(0)
  })
})

describe('authReducer', () => {
  it('should set uid on LOGIN', () => {
    const action = {
      type: 'LOGIN',
      uid: '123'
    }
    const res = reducers.authReducer(undefined, df(action))

    expect(res).toEqual({uid: action.uid})
  })

  it('should unset uid on LOGOUT', () => {
    const authData = {
      uid: '123abc'
    }
    const action = {
      type: 'LOGOUT'
    }
    const res = reducers.authReducer(df(authData), df(action))

    expect(res).toEqual({})
  })
})
