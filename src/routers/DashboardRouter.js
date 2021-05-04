import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';

// funciona igual que un router con la única diferencia de que no tiene un <Router /> propiamente
export const DashboardRouter = () => {
    return (

        <>
            {/* como el Navbar no es una ruta en si misma (sí lo es el Dashboard) no tiene acceso a history por defecto */}
            <Navbar />

            <div className="container mt-4">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen }/>
                    <Route exact path="/hero/:heroeId" component={ HeroScreen } />
                    <Route exact path="/dc" component={ DcScreen }/>
                    <Route exact path='/search' component={ SearchScreen } />

                    <Redirect to="/marvel" />
                </Switch>
            </div>  
        </>
    )
}
