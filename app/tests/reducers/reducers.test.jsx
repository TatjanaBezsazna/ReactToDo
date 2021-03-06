var expect = require('expect');
var df = require('deep-freeze-strict'); // to make sure that all reducers are pure functions and do not update any external data
var moment = require('moment');

var reducers = require('reducers');


describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set serach text', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };
            
            var res = reducers.searchTextReducer(df(''), df(action));
            expect(res).toEqual(action.searchText);
        });
    });
    describe('showCompletedReducer', () => {
        it('should toggle show completed', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            
            var res = reducers.showCompletedReducer(df(false), df(action));
            expect(res).toEqual(true);
        });
    });
    describe('todosReducer', () => {
        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                text: 'Walk the dog'
            };
            
            var res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toBe(1);
            expect(res[0].text).toEqual(action.text);
        });
        it('should toggle todo', () => {
            var action = {
                type: 'TOGGLE_TODO',
                id: 1
            };
            
            var state = [
                {
                 id: 1,
                 text: 'walk the dog',
                 completed: false,
                 createdAt: moment().unix(),
                 completedAt: null
                }
            ]
            
            var res = reducers.todosReducer(df(state), df(action));
            
            expect(res[0].completed).toEqual(true);
            expect(res[0].completedAt).toExist();
        });
        
        it('should add existing todos', () => {
           var todos = [{
            id: '111',
            text: 'anything',
            completed: false, 
            completedAt: undefined, 
            createdAt: 33000
        }];
        
        var action = {
            type: 'ADD_TODOS',
            todos
        };
        
        var res = reducers.todosReducer(df([]), df(action));
            
        expect(res.length).toEqual(1);
        expect(res[0]).toEqual(todos[0]);
            
        });
    });
});