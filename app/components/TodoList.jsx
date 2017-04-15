var React = require('react');
var Todo = require('Todo');


var TodoList = React.createClass({
    render: function() {
        var {todos} = this.props;
        
        var renderTodos = () => {
            return todos.map((todo) => {
                return (
                    //When iterating through the array and generating multiple instances of same component 
                    //it is required to give it a unique key prop. It is being used by react to keep truck
                    //of individual components
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/> // The spread operator {...} lets to spread out all the properties of an object as an individual prop of a component
                )
            });
        };
        
        return (
          <div>
            {renderTodos()}
          </div>  
        )
    }
})

module.exports = TodoList;