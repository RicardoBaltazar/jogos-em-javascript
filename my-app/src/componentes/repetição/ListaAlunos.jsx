import React from 'react'
import alunos from "../../data/alunos"

export default function ListaAlunos(props){
    console.log(alunos)
    return (
        <div>
            <ul>
                <li>Ana - 10.0</li>
                <li>Carlos - 8.5</li>
                <li>Maria - 9.0</li>

            </ul>
        </div>
    )
}