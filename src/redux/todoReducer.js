import { createAction, createReducer } from "@reduxjs/toolkit";
import todosDB from '../todos';

export const ADD_TODO = createAction('ADD_TODO');
export const DELETE_TODO = createAction('DELETE_TODO');
export const CHANGE_FAVORITE_TODO = createAction('CHANGE_FAVORITE_TODO');
export const CHANGE_COMPLETED_TODO = createAction('CHANGE_COMPLETED_TODO');

const initialState = todosDB

export const todoReducer = createReducer(initialState, (builder) => {
   builder
        .addCase(ADD_TODO, (state, action) => {
            state.push(action.payload)
        })
            
        .addCase (DELETE_TODO, (state, action) => {
            return state.filter((todo, index) => index !== action.payload)
        })

        .addCase(CHANGE_FAVORITE_TODO, (state, action) => {
            const todo = state[action.payload]
            todo.favorite = !todo.favorite
        })
            
        .addCase(CHANGE_COMPLETED_TODO, (state, action) => {
            const todo = state[action.payload]
            todo.completed = !todo.completed
        })
});

export default todoReducer.reducer;