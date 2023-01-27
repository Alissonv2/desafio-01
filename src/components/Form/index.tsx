import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './Form.module.css'

interface TaskProps {
    taskList: string[];
    setNewTask: (task: string[]) => void;
}

export function FormAddTask({ taskList, setNewTask }: TaskProps) {
    const [handleTask, setHandleTask] = useState<string>('')

    function handdleCreateNewTask(event: FormEvent) {
        event.preventDefault()

        setNewTask([...taskList, handleTask])
        setHandleTask('')
    }

    function handdleTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setHandleTask(event.target.value)
    }


    return (
        <form onSubmit={handdleCreateNewTask} className={styles.form}>
            <input
                type="text"
                placeholder='Adicione uma nova tarefa'
                value={handleTask}
                onChange={handdleTaskChange}
            />
            <button type="submit">Criar <PlusCircle size={40} /></button>
        </form>
    )
}