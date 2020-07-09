import React, { Component } from 'react'

//no componente baseado em classe sempre utiliza o this

class Contador extends Component {

    //Definir estado dentro do componente baseado em classe
    state = {
        numero: this.props.numeroInicial

    }

    //função para incrementar o valor do contador
    inc = () => {
        //alterar o stado (valor do número)
        this.setState({
            numero: this.state.numero + 1
        })
    }

    dec = () => {
        //alterar o stado (valor do número)
        this.setState({
            numero: this.state.numero - 1
        })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <button onClick={this.inc}> + </button>
                <button onClick={this.dec}> - </button>
            </div>
        )
    }
}

export default Contador