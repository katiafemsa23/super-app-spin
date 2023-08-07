import { HistoryReducerActions } from "./types";

export const historyReducer = (state: HistoryItem[], action: HistoryReducerActions) => {
    switch(action.type){
        case "add-to-history":
            return [...state, action.payload];
        case "set-history":
            return [...action.payload];
        default:
            return state;
    }
};