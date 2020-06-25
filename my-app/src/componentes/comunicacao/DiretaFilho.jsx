import React from 'react'

export default props => {
    return (
        <div>
            <div>
                {props.texto}
                {props.numero}
                {props.bool}
            </div>
        </div>
    )
}