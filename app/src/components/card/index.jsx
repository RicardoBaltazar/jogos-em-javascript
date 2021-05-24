import './style.css';

//Connect é usado para conectar on componente com o estado.
import { connect } from 'react-redux';

const Card = (props) => {
    return (
        <div className='card'>
            <span>{props.num}</span>
        </div>
    )
}

function mapStateToProPS(state){
    return {
        num: state.numeros.num
    }
}

export default connect(mapStateToProPS)(Card);