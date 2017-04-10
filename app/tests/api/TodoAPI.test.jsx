var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

  //We have to clear local storage, because once we get to second test there will be an item in local storage
  //beforeEach is an except method, that does something before each test
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        text: 'Test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos); //When working with arrays or object, use toEqual instead of toBe
    });

    it('should not set invalid todos array', () => {
      var badTodo = {a: 'b'};
      TodoAPI.setTodos(badTodo);

      expect(localStorage.getItem('todos')).toBe(null);
    });

  });

  describe('getTodos', () => {
    it('should return empty array for bad localstorage data ', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todo if valid array in localstorage', () => {
      var todos = [{
        id: 23,
        text: 'Test all files',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);

    });
  });
});
