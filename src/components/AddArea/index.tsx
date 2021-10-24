import React from "react"
import * as C from "./styles"
import { useState } from "react"

export const AddArea = () => {

  const [ inputText, setInputText ] = useState("")

  return(
    <C.Container>
      <div className="image">➕</div>
      <input className="text"
      placeholder="Adicione um item"
      value={inputText}
      onChange={e => setInputText(e.target.value)}
      />
    </C.Container>
  )
}