interface TodoProps {
    id: string | number
    done: boolean
    createdAt: string
    todo: string
}

interface TodoListProps {
    todoList: TodoProps[]
    deleteTodo: (id: string | number) => void
    doneTodo: (id: string | number) => void
    trash: string
    emptyList: string
}

export function TodoList({ todoList, deleteTodo, doneTodo, trash, emptyList }: TodoListProps) {
    return (
        <div className='todoContainer'>
            {
                todoList.length > 0 ? todoList.map((item) => (
                    <div key={item.id} className={`todoItem ${item.done ? 'isDone' : 'notDone'}`}>
                        <div onClick={() => doneTodo(item.id)}>
                            <input type="checkbox" checked={item.done} />
                            <p>{`${item.todo} • ${item.createdAt}`}</p>
                        </div>
                        <div onClick={() => deleteTodo(item.id)}>
                            <img src={trash} alt="" />
                        </div>
                    </div>
                )) :
                    <div className='emptyTodoCard'>
                        <img src={emptyList} alt="" />
                        <h4>Você ainda não tem tarefas cadastradas</h4>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
            }
        </div>
    )
}