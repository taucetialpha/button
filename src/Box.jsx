import React, { useState } from "react"

export default function DataSet({ id, checkedBoxList, setCheckedBoxList }) {

    const [checked, setChecked] = useState(checkedBoxList[id-1])
  
    useState(()=> {
        console.log("Box #",checkedBoxList)
    },[])
    
    function toggleCheck(id) {
        // create temp vals
        var tmplist = checkedBoxList
        var tmpchecked = checkedBoxList[id-1]===true
        console.log("before:",tmplist, tmpchecked)
        // make changes to temp vals
        if (!checked) {tmplist.push(id)} else {tmplist = tmplist.filter((val) => val!==id)}
        tmpchecked = !tmpchecked
        // make changes to state
        setChecked(!tmpchecked)
        setCheckedBoxList(tmplist)
        console.log("after:",tmplist, tmpchecked)
    }

    return (
        <div>
            <div >{ id.toString() }</div>
            <div className="button"
                onClick={() => toggleCheck(id)}>{checked ? "☑" : "☐"}</div>
        </div>
        
    )
}