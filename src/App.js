import React, { useState } from "react"
import Header from "./Header"
import Body from "./Body"

function App() {

  const [boxes, setBoxes] = useState()
  const [ID, setID] = useState()
  const [checked, setChecked] = useState()
  const [checkedBoxList, setCheckedBoxList] = useState([])
  

  return (
    <div className="App">
      <Header
      boxes={boxes} setBoxes={setBoxes}
      ID={ID} setID={setID}
      checked={checked} setChecked={setChecked}
      checkedBoxList={checkedBoxList} setCheckedBoxList={setCheckedBoxList}
      />
      <Body
      boxes={boxes} setBoxes={setBoxes}
      ID={ID} setID={setID}
      checked={checked} setChecked={setChecked}
      checkedBoxList={checkedBoxList} setCheckedBoxList={setCheckedBoxList}
      />
    </div>
  )
}

export default App
