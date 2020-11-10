import { createForms } from "react-redux-form";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { login } from "./form";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            ...createForms({
                login: login
            })
        }),
        applyMiddleware(thunk, logger)
    );
    
    return store;
}