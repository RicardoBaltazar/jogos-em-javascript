
//action creator
export function alterarNumeroAdd(novoNumero){
    return {
        type: 'NUM_ADD',
        payload: novoNumero + 1
    }
}

export function alterarNumeroSub(novoNumero){
    return {
        type: 'NUM_SUB',
        payload: novoNumero - 1
    }
}