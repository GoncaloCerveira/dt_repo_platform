import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import fileReducer, {fileState} from "./currentFile";

export interface GlobalState {
    fileState: fileState;
}

export const store = configureStore({
    reducer: {
        fileState: fileReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
})