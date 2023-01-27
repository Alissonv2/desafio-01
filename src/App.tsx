import { useState } from 'react'
import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header/Header'
import { FormAddTask } from './components/Form'
import { TaskList } from './components/TaskList'

function App() {
  const [taskList, setNewTaskList] = useState<string[]>([])
  const [conclusedTasks, setConclusedTasks] = useState<string[]>([])

  return (
    <div>
      <Header />
      <div className={styles.App}>

        <FormAddTask
          setNewTask={setNewTaskList}
          taskList={taskList}
        />

        <TaskList
          taskList={taskList}
          setTaskList={setNewTaskList}
          conclusedTasks={conclusedTasks}
          setConclusedTasks={setConclusedTasks}
        />
      </div>
    </div>
  )
}

export default App
