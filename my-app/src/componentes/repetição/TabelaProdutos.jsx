import React from 'react'
import produtos from "../../data/produtos"

export default function Produtos(props) {

    function getLinhas() {
        return produtos.map(produtos =>{
            return (
                <tr key={produtos.id}>
                    <th>{produtos.id}</th>
                    <th>{produtos.nome}</th>
                    <th>{produtos.preco}</th>
                </tr>
            )
        })
    }

    return (
        <div>
            <table border="1">
                <tr>
                    <thead>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </thead>
                    <tbody >
                        {getLinhas()}
                    </tbody>
                </tr>
            </table>
        </div>
    )
}