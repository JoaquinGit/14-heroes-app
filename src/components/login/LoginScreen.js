import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {

        // muestra página donde se encontraba el user antes del Logout
        // si es la primera vez que el usuario ingresa o si el localStorage está vacío muestra '/'
        const lastPath = localStorage.getItem('lastPath') || '/';

        /* history.push('/'); */

        // remplaza la historia de accesos. Si vuelvo a la página anterior, esta ya no aparece
        //history.replace('/');

        dispatch({
            type: types.login,
            payload: {
                name: 'Joaquin'
            }
        });

        // remplaza la historia de accesos. Si vuelvo a la página anterior, esta ya no aparece
        history.replace( lastPath );


    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ handleLogin }
            >   
                Login
            </button>


        </div>
    )
}
