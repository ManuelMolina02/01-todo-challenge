import { useState } from 'react'
import './App.css'
import headerLogo from './assets/logo.svg'
import emptyList from './assets/emptyList.svg'
import trash from './assets/trash.svg'

import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { TodoInfo } from './components/TodoInfo/TodoInfo'
import { TodoList } from './components/TodoList/TodoList'

interface TodoProps {
  id: string | number
  todo: string
  done: boolean
  createdAt: string
}

function App() {
  const [todoList, setTodoList] = useState<TodoProps[]>([])
  const [newTodo, setNewTodo] = useState('')
  const [showError, setShowError] = useState(false)


  function createTodo() {

    if (!newTodo) {
      setShowError(true)
      return
    } else {
      setShowError(false)
    }

    setTodoList([...todoList, {
      id: new Date().getTime(),
      todo: newTodo,
      done: false,
      createdAt: new Date().toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }
      )
    }])

    setNewTodo('')
  }

  function deleteTodo(id: string | number) {
    const filteredTodo = todoList.filter((todo: TodoProps) => todo.id !== id)
    setTodoList(filteredTodo)
  }

  function doneTodo(id: string | number) {
    const findTodo = todoList.map((todo: TodoProps) => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
      return todo
    })

    setTodoList(findTodo)
  }

  const handleCompletedTodo = () => {
    const completedTodo = todoList.filter((todo: TodoProps) => todo.done)
    return `${completedTodo.length} de ${todoList.length}`
  }

  return (
    <>
      <Header>
        <img src={headerLogo} alt="Header Logo" />
      </Header>
      <main>
        <div className='inputGroup'>
          <input
            type="text"
            value={newTodo}
            placeholder='Adicione uma nova tarefa'
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={() => createTodo()}
          >Criar</button>
        </div>

        {
          showError && <span className='messageError'>Por favor, digite a tarefa antes de inserir o dado na lista</span>
        }


        <div>
          <div className='todoCard'>
            <TodoInfo
              title='Tarefas Criadas'
              value={todoList.length}
              color='#4EA8DE'
            />
            <TodoInfo
              title='Concluídas'
              value={handleCompletedTodo()}
              color='#8284FA'
            />
          </div>
          <TodoList
            todoList={todoList}
            deleteTodo={deleteTodo}
            doneTodo={doneTodo}
            trash={trash}
            emptyList={emptyList}
          />
        </div>
      </main>
      <Footer>
        Developed by Manuel Molina • 2024
      </Footer>
    </>
  )
}

export default App
