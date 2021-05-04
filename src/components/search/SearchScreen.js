import React, { useMemo } from 'react'
import queryString from 'query-string'; // instalar librería
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';


export const SearchScreen = ( { history } ) => {

    const location = useLocation();

    // si es undefined devuelve ''
    const {q = ''} = queryString.parse(location.search)

    const [state, handleInputChange] = useForm({
        searchField: q
    });
    const { searchField } = state;

    // useMemo para evitar que la búsqueda se ejecute con cada tecla presionada
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q]);

    const handleSearch = (e) => {

        e.preventDefault();

        // QueryString
        history.push(`?q=${ searchField }`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input
                            name="searchField"
                            type="text"
                            placeholder="Find your hero ..."
                            className="form-control"
                            autoComplete="off"
                            value={ searchField }
                            onChange= { handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn btn-block btn-outline-primary mt-1"
                        >
                            Search...
                        </button>    

                    </form>

                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        (q === '')  

                    &&
                        <div className="alert alert-secondary">
                            Search a hero ...
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0)  

                    &&
                        <div className="alert alert-danger">
                            There is no hero with { q } ...
                        </div>
                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>


            </div>




        </div>
    )
}
