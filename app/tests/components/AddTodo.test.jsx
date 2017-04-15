var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');


var AddTodo = require('AddTodo');

describe('AddTodo', () => {
    
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call onNewTodoAdd if valid todo is entered', () => {
        var spy = expect.createSpy();
        var addTodoForm = TestUtils.renderIntoDocument(<AddTodo onNewTodoAdd={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodoForm));
        
        addTodoForm.refs.todo.value = "new todo";
        
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toHaveBeenCalledWith("new todo");
        
    });
    
    it('should not call onNewTodoAdd if invalid todo is entered', () => {
        var spy = expect.createSpy();
        var addTodoForm = TestUtils.renderIntoDocument(<AddTodo onNewTodoAdd={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodoForm));
        
        addTodoForm.refs.todo.value = "";
        
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toNotHaveBeenCalled();
    });
});