import { useState } from 'react'
import './App.css'
import headerLogo from './assets/logo.svg'
import emptyList from './assets/emptyList.svg'

//import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { TodoInfo } from './components/TodoInfo/TodoInfo'

function App() {
  const [todoList, setTodoList] = useState([])
  const [newTodo, setNewTodo] = useState('')


  function createTodo() {
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
    }] as any)

    setNewTodo('')
  }

  function deleteTodo(id: string) {
    const filteredTodo = todoList.filter((todo: any) => todo.id !== id)
    setTodoList(filteredTodo)
  }

  function doneTodo(id: string) {
    const findTodo = todoList.map((todo: any) => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
      return todo
    }
    ) as any

    setTodoList(findTodo)






  }



  const handleCompletedTodo = () => {
    const completedTodo = todoList.filter((todo: any) => todo.done)
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
          <button onClick={() => createTodo()}>Criar</button>
        </div>

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
          <div>
            {
              todoList.length > 0 ? todoList.map((item: any) => (
                <div key={item.id} className='todoItem'>
                  <div onClick={() => doneTodo(item.id)}>
                    <input type="checkbox" checked={item.done} />
                    <p>{`${item.todo} • ${item.createdAt}`}</p>
                  </div>
                  <button onClick={() => deleteTodo(item.id)}>Remover</button>
                </div>
              )) :
                <div className='emptyTodoCard'>
                  <img src={emptyList} alt="" />
                  <h4>Você ainda não tem tarefas cadastradas</h4>
                  <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
            }
          </div>
        </div>
      </main>
      {/*
       <Footer>
        Developed by Manuel Molina • 2024
      </Footer>
      */}
    </>
  )
}

export default App
