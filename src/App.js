import React from 'react';
import ReactDOM from 'react-dom';
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


  // clear = e => {

  // }

  // completedTheTask = id => {
  //   const co
  //   todoList: {...this.state.todoList, }
  // }

  render() {
    return (
      <div className='app-wrapper'>
      <Todo />
       <TodoList
      value={this.state.todo}
      />
      <TodoForm
      task={this.state[0].task}
      addTodo={this.Todo}
      />
      </div>
    )
  }
  

}

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

export default App;
