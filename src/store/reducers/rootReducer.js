import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";
import { filterReducer } from "./filterReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers(
    {
        // state : name : reducers that will control it
        todosState: todosReducer,
        filterState: filterReducer,
        // Async eample (LOGIN USER)
        userState: userReducer
        // add more states and reducers to include them in the store
    }
)