import React, {useContext} from 'react'

import { TodoContext } from '../TodoContext';

import { ToDo } from './todo'

import Todo from './todo'

export default function TodoList() {
  const [todos, setTodos] = useContext(TodoContext);

  // toggle Done button
  const toggleDone = (todo: ToDo) => {
    todos.map(_todo: string => _todo === todo ? _todo.done = !todo.done : todo)
    setTodos([...todos])
  }

  // delete Todo
  const deleteTodo = (todo: ToDo) => {
    const _todos: string = todos.filter(_todo => _todo !== todo)
    setTodos(_todos)
  }

  return (
    <div>
      <div className="hero is-info">
        <div className="hero-body has-text-centered">
          <p className="title is-1">{todos.length} Todos</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo}/>
          ))}
        </div>
      </section>
    </div>
  )
}