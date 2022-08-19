import React from 'react'
import BoxData from "./BoxData"
import Box from "./Box"


export default function Header( { boxes, setBoxes, checkedBoxList, setCheckedBoxList }) {
    
    async function buttonAction() {
        let tmpentries = BoxData.boxes
        let tmplist = tmpentries.map(item => {
            return item.checked ?? item.id
        })
        setCheckedBoxList(tmplist)
        console.log("tmpentries:",tmpentries)
        console.log("tmplist:",tmplist)
        const sets = tmpentries.map(item =>
            <Box
                key={item.id}
                id={item.id}
                checkedBoxList={checkedBoxList}
                setCheckedBoxList={setCheckedBoxList}
            />
        )

        setBoxes(sets)

    
    }

    return (
        <div className="header">
            <div className="button" onClick={() => buttonAction()}>CLICK ME TO BRING UP BOXES</div>
        </div>
    )
}
