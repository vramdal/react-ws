import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxLogger from 'redux-logger';

import movieReducer from './movies/movie-reducer';
import Header from './header/header';
import MovieList from './movies/list-movies';

const myStore = createStore(
    movieReducer,
    applyMiddleware(reduxLogger())
);

class MyApp extends Component {
    handleAddMovie(movieName) {
        myStore.dispatch({
            type: 'ADD_MOVIE',
            payload: {
                name: movieName
            }
        });
    }

    render() {
        return (
            <Provider store={myStore}>
                <div>
                    <Header yourName="Kris-Mikael"/>
                    <MovieList handleAddMovie={this.handleAddMovie.bind(this)}/>
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(<MyApp/>, document.getElementById('my-app'));
