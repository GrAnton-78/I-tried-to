import TodoList from "./components/TodoList"
function App() {

  return (
    <div className="conteiner bg-white my-20 mx-auto p-6 rounded-3xl">
      <h1 className="text-3xl font-bold underline">
        Список дел
      </h1>
      <TodoList />
    </div>

  )
}

export default App
