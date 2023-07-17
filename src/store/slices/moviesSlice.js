import {createSlice} from '@reduxjs/toolkit';
import {reset} from '../actions';


// NOTE: when an action is dispatched it will go through all the slices actions. Here we are taking
// advantage of that to create a manual action that empties out both states.

const moviesSlice = createSlice({
    name:'movie',
    initialState:[],
    reducers:{
        addMovie(state,action) {
            state.push(action.payload)
        },
        removeMovie(state,action){
            const index = state.indexOf(action.payload);
            state.splice(index,1)
        }
    },
    extraReducers(builder){
        builder.addCase(reset,(state,action)=>{
            return [];  //so that movies state will be set to empty
        })
    }
});


//export the action creator: that automatically creates action object for us
export const {addMovie, removeMovie} = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;