import { useState } from 'react'
import * as C from './App.styles';
import { Task } from './components/Task';
import { TaskType } from './types/TaskType';
import { AddArea } from './components/AddArea';

export const App = () => {

  const [list, setList] = useState<TaskType[]>([
    { id: 1, name: 'Comprar pão', done: true },
    { id: 2, name: 'Estudar', done: false },
  ]);

  function handleAddTask(taskName: string) {
    let newList = [...list]
    newList.push({
      id: list.length++,
      name: taskName,
      done: false
    });
    setList(newList)
  }

  function handleTaskChange(id: number, done: boolean) {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done
      }
    }
    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>

        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <Task
            key={index}
            task={item} 
            onChange={handleTaskChange}
          />
        ))}

      </C.Area>
    </C.Container>
  );
}