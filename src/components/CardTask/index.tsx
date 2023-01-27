import { Trash } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import styles from './CardTask.module.css'

interface CardTaskProps {
    taskName: string,
    onDeleteTask: (task: string) => void,
    conclusedTasks: string[],
    setConclusedTasks: (tasks: string[]) => void
}

export function CardTask({ taskName, onDeleteTask, setConclusedTasks, conclusedTasks }: CardTaskProps) {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    function handleDeleteTask() {
        onDeleteTask(taskName)
    }

    function handleSetConclusedTasks(event: ChangeEvent<HTMLInputElement>) {
        setConclusedTasks([...conclusedTasks, event.target.value])
        setIsChecked(!isChecked)
    }

    return (
        <div className={styles.cardTaskContainer}>
            <input
                type="checkbox"
                name={taskName}
                checked={isChecked}
                disabled={isChecked}
                onChange={handleSetConclusedTasks}
            />
            <p>{taskName}</p>
            <div className={styles.trashContainer} onClick={handleDeleteTask}>
                <Trash />
            </div>
        </div>
    )
}