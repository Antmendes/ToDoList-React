import React, { useState } from 'react';
import { v4 as uuid} from 'uuid';



import { Container, ToDoList, Input, Button, ListItem, Trash, Check } from './styles';

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');
  
  function inputChange(event){
    setTask(event.target.value)
  }

  function btnClick(){
    if(task){
      setList([...list,{id: uuid(), task, finished: false}])
    }
    
  }

  function taskFinished(id){
    
    const newList = list.map(item => (
      item.id === id ? {...item, finished: !item.finished} : item
    ))

    setList(newList)
  }

  function removeItem(id){
    const newList = list.filter(item => item.id !== id)

    setList(newList)
  }



  return (
    
      <Container>
        <ToDoList>
        <Input onChange={inputChange} placeholder="O que tem pra fazer..."/>
        <Button onClick={btnClick}>Adicionar</Button>

        <ul>
          {

            list.length > 0 ?(

            list.map((item ) => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Check onClick={() => taskFinished(item.id)}/>
                <li>{item.task}</li>
                <Trash onClick={() => removeItem(item.id)}/>
              </ListItem>
            ))
          
          ) : (
            <h3>Não há itens na lista</h3>
          )
        }
        </ul>
       </ToDoList>
      </Container>
    
    
  )
}

export default App
