import React from "react"
import { useState } from "react"
import { Item } from "./types/Item"
import { Container, Area, Header } from "./App.styles"
import { ListItem } from "./components/ListItem"
import { AddArea } from "./components/AddArea"


const App = () => {

  const [ list, setList ] = useState<Item[]>([
    {id: 1, name: "Macarrão", done: false},
    {id: 2, name: "Farinha de trigo", done: true},
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.lenght + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }


  return(
    
      <Container> 
        <Area> 
          <Header> Lista de compras </Header>

          <AddArea onEnter={handleAddTask} />

          {list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}

        </Area>
       </Container>
    
  )
}

export default App