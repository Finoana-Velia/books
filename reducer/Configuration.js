import { combineReducers } from "redux";
import ToggleFavorite from "./Reducer";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    favorite : ToggleFavorite
    // additionnal reducer here
});

export const store = configureStore({reducer : rootReducer});