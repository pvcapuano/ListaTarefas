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
  return(
    
      <Container> 
        <Area> 
          <Header> Lista de compras </Header>

          <AddArea />

          {list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}

        </Area>
       </Container>
    
  )
}

export default App