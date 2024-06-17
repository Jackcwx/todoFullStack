import TodoForm from './TodoForm.tsx'
import TodoList from './TodoList.tsx'

function App() {
  return (
    <>
      <header className="header">
        <h1 id="newTodo">todos</h1>
        <TodoForm />
      </header>
      <section className="main">
        <TodoList />
      </section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
