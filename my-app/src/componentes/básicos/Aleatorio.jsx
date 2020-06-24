import React from 'react'

export default function (props) {
    const max = props.max
    const min = props.min
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <h2>Vlor aleatório</h2>
            <p><strong>Valor mínimo: </strong> {min}</p>
            <p><strong>Valor máximo: </strong> {max}</p>
            <p><strong>Valor escolhido: </strong> {aleatorio}</p>
        </div>
    )
}