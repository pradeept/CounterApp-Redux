import { configureStore } from "@reduxjs/toolkit";
import {songsReducer, addSong,removeSong} from './slices/songsSlice';
import {moviesReducer, addMovie, removeMovie} from './slices/moviesSlice';


const store = configureStore({
    reducer:{
        songs:songsReducer,
        movies:moviesReducer
    }
});

//export the store so to use in provider in index.js
export {store}


//export the action creator: that automatically creates action object for us
export {addSong, removeSong, addMovie, removeMovie};
 