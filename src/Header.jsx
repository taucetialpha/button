import React, { useState, useEffect } from 'react'
import BoxData from "./BoxData"
import Box from "./Box"
import "./Style.css"


export default function Header( { boxes, setBoxes, checked, setChecked, checkedBoxList, setCheckedBoxList }) {
    
    async function buttonAction() {
        let tmpentries = BoxData.boxes
        console.log("tmpentries:",tmpentries)
        const sets = tmpentries.map(item =>
            <Box
                id={item.id}
                checked={item.checked}
                setChecked={setChecked}
                checkedBoxList={checkedBoxList}
                setCheckedBoxList={setCheckedBoxList}
            />
        );
    
        return (
            setBoxes(sets)
        )

    }

    return (
        <div className="header">
            <div className="button" onClick={() => buttonAction()}>CLICK ME TO BRING UP BOXES</div>
        </div>
    )
}
