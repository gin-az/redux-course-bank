import {ADD_CASH, GET_CASH} from "../Actions/actions";

const defaultState = {
    cash: 0,
}

// Reducer отвечает на вопрос - как должен измениться State.
// Reducer должен возвращать новый объект.
export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CASH:
            return {...state, cash: state.cash + action.payload};
        case GET_CASH:
            return {...state, cash: state.cash - action.payload};
        default:
            return state;
    }
}