import React from 'react';
// import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  constructor() {
    super();
      this.state = {
        todos: [
          {
            task: 'Organize Garage',
            id: 1528817077286,
            completed: false
          },
          {
            task: 'Bake Cookies',
            id: 1528817084358,
            completed: false
          }
        ],
        todo: ''
      };
  }

  addTodo = e => {
    e.preventDefault()
    const newTodo = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ''
    });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  toggleTodoCompleted = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };


 clearCompletedTodos = e => {
   e.preventDefault();
   let todos = this.state.todos.filter(todo => !todo.completed);
   this.setState({ todos });
 };

  render() {
    return (
      <div className='app-wrapper'>
      <Todo />
       <TodoList
       handleToggleComplete={this.toggleTodoCompleted}
        todos={this.state.todos}
      />
      <TodoForm
      value={this.state.todo}
      handleTodoChange={this.changeTodo}
      handleAddTodo={this.addTodo}
      handleClearCompleted={this.clearCompletedTodos}
      />
      </div>
    );
  }
}

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

export default App;
