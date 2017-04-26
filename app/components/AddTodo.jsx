var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

//To export component that is not connected to store
export var AddTodo = React.createClass({
    onFormSubmit: function(e) {
       e.preventDefault();
       var {dispatch} = this.props;
       var todoText = this.refs.todo.value;
        
        if(todoText.length > 0) {
            this.refs.todo.value = '';
            dispatch(actions.addTodo(todoText));
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

//To export component, that is connected to store
export default connect()(AddTodo);