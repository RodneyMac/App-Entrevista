import {createStore} from 'redux';

import listaUsuarios from '../services/database/usuarios.json';

const initialState = {
    listaUsuarios: listaUsuarios,
    showModalLogs: false,
    selectedUser: 1,
    userDefault: {userName: 'admin', password: 123456}
}

function reducers(state = initialState, action){

    switch (action.type) {
        case 'DELETE_USER' :
            return {
                ...state,
                listaUsuarios: state.listaUsuarios.filter((el) => el.id !== action.payload.id)
            }

        case 'SAVE_USER' :
            return {
                ...state,
                listaUsuarios: state.listaUsuarios.map( oldMenu => oldMenu.id === action.payload.id ? action.payload : oldMenu )
            }
            
        case 'SHOW_GRAPHIC' :
            return {
                ...state,
                showModalLogs: action.payload.showModal,
                selectedUser: action.payload.id
            }

        case 'CLOSE_GRAPHIC' :
            return {
                ...state,
                showModalLogs: action.payload.showModal
            }

        default:
            return state
    }
}

export default () => {
    return {
        ...createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    }
} 