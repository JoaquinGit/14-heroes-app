import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    // recordar la pantalla donde me encontraba al momento de hacer el Logout, para luego aparecer en ella al volver a hacer Login
    localStorage.setItem('lastPath', rest.location.pathname);

    return (
        <Route { ...rest }
            component={ (props) => (    /* props = history, location y params */
                ( isAuthenticated )
                    ? <Component { ...props } />
                    : <Redirect to="/login" />

            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
