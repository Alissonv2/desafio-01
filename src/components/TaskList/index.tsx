import { CardTask } from '../CardTask';
import styles from './TaskList.module.css'
import IsVoidTasksIcon from '../../assets/Clipboard.svg'

interface TaskListProps {
    taskList: string[];
    conclusedTasks: string[],
    setConclusedTasks: (conclusedTasksArray: string[]) => void
    setTaskList: (list: string[]) => void
}

function TaskListVoid() {
    return (
        <div className={styles.isVoidTasksInformation}>
            <img className={styles.imgIsVoidTasks} src={IsVoidTasksIcon} alt="" />
            <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>

        </div>
    )
}

export function TaskList({ taskList, conclusedTasks, setTaskList, setConclusedTasks }: TaskListProps) {

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeleteOne = taskList.filter(task => {
            return task !== taskToDelete
        })

        const tasksConclusedsWithoutDeleteOne = conclusedTasks.filter(task => {
            return task !== taskToDelete
        })

        console.log(tasksConclusedsWithoutDeleteOne)

        setTaskList(tasksWithoutDeleteOne)

    }

    return (
        <div className={styles.containerTaskList}>
            <header>
                <span>Tarefas criadas <div>{taskList.length}</div></span>
                <span>Concluídas
                    <div>
                        {taskList.length > 0 ? `${conclusedTasks.length} de ${taskList.length}` : conclusedTasks.length}
                    </div>
                </span>
            </header>

            <div className={styles.tasksList}>

                {
                    taskList.length ? taskList.map((task: string) => (
                        <CardTask
                            key={task}
                            taskName={task}
                            onDeleteTask={deleteTask}
                            conclusedTasks={conclusedTasks}
                            setConclusedTasks={setConclusedTasks}
                        />)) : <TaskListVoid />
                }
            </div>
        </div>
    )
}