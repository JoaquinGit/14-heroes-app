import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

// Sistema de rutas principal
export default function AppRouter() {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>

                    {/* Porque usar public Route? Si estoy autenticado y se me permite acceder a pantalla de login, podría pensar por error que ya estoy deslogueado y no es así*/}
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component= { LoginScreen } 
                        isAuthenticated={ user.logged }
                    />

                    {/* Necesito proteger este componente que contiene las rutas privadas renderizándolo de manera condicional */}
                    {/* <Route path="/" component={ DashboardRouter }/> */}

                    <PrivateRoute 
                        path="/"
                        component={ DashboardRouter }
                        isAuthenticated={ user.logged }
                    />

                </Switch>
            </div>
        </Router>
    );
}
