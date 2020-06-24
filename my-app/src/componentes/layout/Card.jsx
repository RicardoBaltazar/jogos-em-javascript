import React from 'react'

import "./Card.css"


//acessando um componente dendro de um card com props.children e no app.jsx coloca um componente dentro do outro
export default function Card(props) {
    return (
        <div className="card">
            <div className="title">{props.titulo}</div>
            
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}