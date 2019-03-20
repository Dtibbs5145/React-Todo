import React from 'react';

const TodoForm = props => {
    return (
        <div className='todo-form'>
            <form>
                <input
                    type='text'
                    placeholder='Add Item'
                    name='todo'
                    onChange={props.handleChanges}
                    value={props.value}
                />
                <h1>{props.task}</h1>
                <button onClick={props.handleAddTodo}>Add Item</button>
                <button onClick={props.handleClearTodos}>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;