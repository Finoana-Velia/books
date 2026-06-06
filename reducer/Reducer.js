import { createSlice } from "@reduxjs/toolkit";

const favoriteBookSlice = createSlice({
    name : 'favoriteBooks',
    initialState : {
        books : []
    },
    reducers : {
        toggleFavorite : (state, action) => {
            /**
             * action : { payload : item}
             * state : { books : initalState}
             */
            const favoriteIndex = state.books.findIndex(item => item.id === action.payload.id);
            if(favoriteIndex !== -1) {
                state.books = state.books.filter((item,index) => index !== favoriteIndex);
            }else {
                state.books.push(action.payload);
            }
            console.log(state.books);
        }
    }
});

export const { toggleFavorite } = favoriteBookSlice.actions;
export default favoriteBookSlice.reducer;
