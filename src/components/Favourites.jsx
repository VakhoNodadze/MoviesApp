import React, { Component } from 'react';
import MoviesTable from './MoviesTable';
import { getMovies } from "../services/fakeMovieService";

class Favourites extends Component {
    state = {
        movies: [],
        genres: [],
        sortColumn: { path: "title", order: "asc" }
    }

    componentDidMount() {

        this.setState({ movies: getMovies().filter(movie => movie.liked) });
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie);
        this.setState({ movies });
        console.log(movie);
    };

    handleSort = sortColumn => {
        this.setState({ sortColumn });
    }

    handleLike = movie => {
        const movies = this.state.movies;
        const index = movies.indexOf(movie);
        movies[index].liked = !movies[index].liked;
        this.setState({ movies: movies.filter(m => m.liked) });
    };

    render() {
        const { movies, sortColumn } = this.state;
        return (
            <div className="favourites">
                <MoviesTable
                    movies={movies}
                    sortColumn={sortColumn}
                    onLike={this.handleLike}
                    onDelete={this.handleDelete}
                    onSort={this.handleSort}
                />
            </div>
        );
    }
}

export default Favourites;