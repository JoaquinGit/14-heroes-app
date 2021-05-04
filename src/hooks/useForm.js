import { useState } from 'react'

export const useForm = (initialState = {}) => {

    const [state, setState] = useState(initialState);

    // método para resetear campos. (Creado para usar 1era vez en 08-useReducer)
    const reset = () => {
        setState( initialState );
    }

    const handleInputChange = ( {target}) => {

        setState({
            ...state,

            // sobreescribe el estado anterior donde se modifique
            [target.name]: target.value,
        })
    }

    return [
        state,
        handleInputChange,
        reset
    ];
}
