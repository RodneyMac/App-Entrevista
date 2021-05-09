import {createStore} from 'redux';

import estadoInicial from '../services/database/usuarios.json';

function reducers(state = estadoInicial){

    console.log(state);

    return state
}

export default () => {
    return{
        ...createStore(reducers)
    }
} 