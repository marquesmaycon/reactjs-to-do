import { useState } from 'react';
import { TaskType } from '../../types/TaskType';
import * as C from './styles'

type Props = {
    task: TaskType,
    onChange: (id: number, done: boolean) => void
}

export const Task = ({ task, onChange }: Props) => {

    return (
        <C.Container done={task.done}>
            <input
                type="checkbox"
                checked={task.done}
                onChange={e => onChange(task.id, e.target.checked)}
            />
            <label htmlFor="">{task.name}</label>
        </C.Container>
    );
}