import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Like from './common/Like';
import Table from './common/Table';

class MoviesTable extends Component {
    columns = [
        {
            path: "title",
            label: "Title",
            content: movie => <Link to={`/movies/${movie.title}`}>{movie.title}</Link>
        },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        {
            key: 'like',
            content: movie =>
                <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
        },
        {
            key: 'delete', content: (
                movie =>
                    <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(movie)}
                    >
                        Remove</button>
            )
        }
    ]

    render() {

        const { movies, onSort, sortColumn } = this.props;

        return (
            <Table
                columns={this.columns}
                data={movies}
                sortColumn={sortColumn}
                onSort={onSort}
            />
        );
    }
}

export default MoviesTable;
