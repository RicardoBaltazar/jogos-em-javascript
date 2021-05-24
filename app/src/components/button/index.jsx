import './style.css';
import { connect } from 'react-redux';
import { alterarNumeroAdd, alterarNumeroSub } from '../../store/actions/numeros';

const Button = (props) => {

    return (
        <>
            <button onClick={e => props.addNumero(+e.target.value)}>{props.button1}</button>
            <button onClick={e => props.subNumero(+e.target.value)}>{props.button2}</button>
            {/* <button >{props.button1}</button> */}
            {/* <button>{props.button2}</button> */}
        </>
    )
}

function maoDispatchToProps(dispatch){
    return {
        addNumero(novoNumero){
            const action = alterarNumeroAdd(novoNumero);
            dispatch(action);
        },
        subNumero(novoNumero){
            const action = alterarNumeroSub(novoNumero);
            dispatch(action);
        }
    }
}

export default connect(null, maoDispatchToProps)(Button);