import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface fileState {
    notChosen: boolean,
    currentFile: string | null,
}

const initialState: fileState = {
    notChosen: true,
    currentFile: null,
};

const slice = createSlice({
    name: 'currentFile',
    initialState,
    reducers: {
        setCurrentFileState: (state, action: PayloadAction<string>, ) => {
            state.currentFile = action.payload;
            state.notChosen = false;
        },
        resetCurrentFileState: (state) => {
            state.currentFile = null;
            state.notChosen = true;
        },
    }
});

const { setCurrentFileState,  resetCurrentFileState} = slice.actions;

export const actionSetOtherUser = (username:string) => async (dispatch: any) => {
    dispatch(setCurrentFileState(username));
}

export const actionResetOtherUser = () => async (dispatch: any) => {
    dispatch(resetCurrentFileState());
}


export default slice.reducer;
