import React from "react"
import { useState } from "react"
import { Item } from "./types/Item"
import { Container, Area, Header } from "./App.styles"

const App = () => {

  const [ list, setList ] = useState<Item[]>([
    {id: 1, name: "Macarrão", done: false},
    {id: 2, name: "Farinha de trigo", done: true},
  ])
  return(
    
      <Container> 
        <Area> 
          <Header> Lista de tarefas </Header>

          {list.map((item, index) => {

          })}

        </Area>
       </Container>
    
  )
}

export default App