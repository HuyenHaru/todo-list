import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from '../../features/todoSlice';

const rootReducer = combineReducers({
  todo: todoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type TodoState = ReturnType<typeof todoReducer>;

export default rootReducer;
