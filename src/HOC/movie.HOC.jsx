import React from "react";
import { Route } from "react-router-dom";

//LAYOUT
import MovieLayout from "../layouts/movie.layout";

const MovieHOC = ({ component : Component, ...rest }) => {
    return (
    <>
        <Route
            {...rest} 
            component = {(props) => (
                <MovieLayout>
                    <Component { ...props }/>
                </MovieLayout>
            )}
        />
    </>
    );
};

export default MovieHOC;