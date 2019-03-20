import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './components/TodoComponents/TodoList';
// import TodoForm from './components/TodoComponents/TodoForm';
// import Todo from './components/TodoComponents/Todo';

const App = props => {
  return (
    <div className='App'>
      {/* <TodoList /> */}
      {/* <TodoForm /> */}
      {/* <Todo /> */}
    </div>
  );
}
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
