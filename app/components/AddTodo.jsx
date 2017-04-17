var React = require('react');

var AddTodo = React.createClass({
    onFormSubmit: function(e) {
        
        e.preventDefault();
        
       var todoText = this.refs.todo.value;
        
        if(todoText.length > 0) {
            this.refs.todo.value = '';
            this.props.onNewTodoAdd(todoText);
        } else {
            this.refs.todo.focus();
        }
        
    }, 
    render: function() {
        return (
            <div className='container__footer'>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="todo"/>
                    <input className="button expanded" type="submit" value="Add Todo"/>
                </form>
            </div>
        )
    }  
})

module.exports = AddTodo;