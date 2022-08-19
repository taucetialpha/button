import React from "react"

export default function DataSet({ boxes, setBoxes, id, checked, setChecked, checkedBoxList, setCheckedBoxList }) {

    
    
    function toggleCheck(id) {
        // create temp vals
        var tmplist = checkedBoxList
        var tmpchecked = checked
        console.log("before:",tmplist, tmpchecked)
        // make changes to temp vals
        if (!checked) {tmplist.push(id)} else {tmplist = tmplist.filter((val) => val!==id)}
        tmpchecked = !tmpchecked
        // make changes to state
        setChecked(!tmpchecked)
        setCheckedBoxList(tmplist)
        console.log(boxes)
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