import React from 'react'

export default function Fragmento(props){
    return (
        /*
        desta primeira forma se pode passar propriedades

        <React.Fragment key="1">
            <h2>Fragmento</h2>
            <p>Cuidade com ewsse erro</p>
        </React.Fragment>
        */

        //desta forma não se pode passar propriedades mas normalmente não se passa propriedade...
        //...neste elemento fragmentado
       <>
            <h2>Fragmento</h2>
            <p>Cuidade com esse erro</p>
       </>
    )
}