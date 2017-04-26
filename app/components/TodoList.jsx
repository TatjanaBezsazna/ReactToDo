var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';


export var TodoList = React.createClass({
    render: function() {
        var {todos} = this.props;
        
        var renderTodos = () => {
            if(todos.length === 0) {
                    return (
                        <p className='container__message'>Nothing to do</p>
                    )
                }
            
            return todos.map((todo) => {

                return (
                    //When iterating through the array and generating multiple instances of same component 
                    //it is required to give it a unique key prop. It is being used by react to keep truck
                    //of individual components
                    <Todo key={todo.id} {...todo}/> // The spread operator {...} lets to spread out all the properties of an object as an individual prop of a component
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

export default connect(
    (state) => {
        return {
          todos: state.todos  
        };
    }
)(TodoList);