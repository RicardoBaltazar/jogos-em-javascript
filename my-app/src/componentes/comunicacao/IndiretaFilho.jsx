import React from 'react'

export default props => {
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                function(){
                    props.quandoClicar('João')
                }}>Fornecer informações</button>
        </div>
    )
}