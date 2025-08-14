import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
    return (
        <div>
            <h3>Movies</h3>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
            <Link to="movies/new">Add New Movie</Link>
        </div>
    );
}

export default MovieList
