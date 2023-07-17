import { createSlice } from "@reduxjs/toolkit";
import {reset} from '../actions';


//Create a reducer 
const songsSlice = createSlice({
    //IMP: we use 'name' while dispatching a action ex: refer line no:30
    name:"song",
    initialState:[],
    reducers:{
        //action creator automatically generates reducer object for these
        //try console logging.
        addSong(state,action) {
            state.push(action.payload);
        },
        removeSong(state,action){
            //first get the index by song name
            const index = state.indexOf(action.payload);
            state.splice(index,1); //at position: index, remove 1 item
        }
    },
    extraReducers(builder){
        builder.addCase(reset,(state,action)=>{
            return [];  //state will be updated to whatever we return in this case to []
        })
    }
});


// store.dispatch({type:'song/addSong',payload:"Munjane Manjalli"})


//export the action creator: that automatically creates action object for us
export const {addSong, removeSong} = songsSlice.actions;
export const songsReducer = songsSlice.reducer;