import { useUnit } from "effector-react";
import { addTodo, removeTodo, todosStore } from "../store/itemsStore";
import { useState } from "react";

const TodoList = () => {

    const todo = useUnit(todosStore)

    const [inputValue, setInputVelue] = useState('')

    console.log(inputValue)

    const hendleAddTodo = () => {
        if (inputValue.trim()) {
            addTodo(inputValue)
            setInputVelue('')
        }
    }

    return (
        <div>
            <div className="flex gap-10 my-4 mx-10">
                <input
                    value={inputValue}
                    onChange={(e) => setInputVelue(e.target.value)}
                    className="flex-1 py-2 px-4 border border-grey-500 rounded" type="text" />
                <button
                    onClick={hendleAddTodo}
                    className="border rounded border-grey-500 p-2 transition-colors hover:bg-slate-500 hover:text-white shadow">Добавить</button>
            </div>
            <ul>
                {todo.map((todo, index) => (
                    <li key={index}
                        className="flex justify-between ite my-8">
                        {todo}
                        <button
                            onClick={() => removeTodo(index)}
                            className="border rounded border-grey-500 p-2 transition-colors hover:bg-slate-500 hover:text-white shadow"
                        >Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;