//todos os reducers gerando a store
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
    numeros: function(state, action){

        switch(action.type){
            case 'NUM_ADD':
            return {
                ...state,
                num: action.payload
            };
            case 'NUM_SUB':
            return {
                ...state,
                num: action.payload
            };
            default: 
                return {
                    num: 1
                }
        }

    }
});

//fução que vai configurar o novo etado a partir dos reducers
function storeConfig(){
    return createStore(reducer);
}

export default storeConfig;