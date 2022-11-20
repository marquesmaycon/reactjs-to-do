import { useState, useEffect } from 'react'
import * as C from './App.styles';
import { Task } from './components/Task';
import { TaskType } from './types/TaskType';
import { AddArea } from './components/AddArea';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Theme';
import { SwitchThemeBtn } from './components/SwitchThemeBtn';

export const App = () => {

  useEffect(() => {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setList(tasks)
  }, [])

  const [list, setList] = useState<TaskType[]>([
    { id: 1, name: 'Comprar pão', done: true },
    { id: 2, name: 'Estudar', done: false },
  ]);

  const [theme, setTheme] = useState(darkTheme);

  function handleAddTask(taskName: string) {
    let newList = [...list]

    newList.push({
      id: list.length++,
      name: taskName,
      done: false
    });
    setList(newList)

    localStorage.setItem('tasks', JSON.stringify(newList))

    console.log(newList)
  }

  function handleTaskChange(id: number, done: boolean) {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done
      }
    }
    setList(newList)
  }

  function handleSwitchTheme(){
    setTheme(theme === darkTheme ? lightTheme : darkTheme)
  }

  return (
    <ThemeProvider theme={theme}>
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

          <SwitchThemeBtn 
            text={theme === darkTheme ? 'Tema Claro' : 'Tema Escuro'} 
            switchTheme={handleSwitchTheme} 
          />

        </C.Area>
      </C.Container>
    </ThemeProvider>
  );
}