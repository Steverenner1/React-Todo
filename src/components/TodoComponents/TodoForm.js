import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input
                onChange={props.handleTodoChange}
                type="text"
                name="todo"
                value={props.value}
                placeholder="Enter Todo"
            />
            <button onClick={props.handleAddTodo}>Add Todo</button>
            <button onClick={props.handleClearTodos}>Complete</button>
        </form>
    );
};
    
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentTask: ""
//         };
//     }

//     handleChange = e => {
//         this.setState({
//             currentTask : e.target.value
//         });
//     };

//     submitItem = e => {
//         e.preventDefault();
//         this.props.addTask(this.state.currentTask);
//         this.setState({
//             currentTask: ""
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <input 
//                     onChange={this.handleChange}
//                     type="text"
//                     name="item"
//                 />
//                 <button onClick={this.submitClick}>Add ToDo</button>
            
//             <TodoList items={this.state.items} />
//             </div>
//         );
//     }
// }

export default TodoForm;