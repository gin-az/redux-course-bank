import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {ADD_CASH, GET_CASH} from "./Actions/actions";
import {Provider} from "react-redux";

const defaultState = {
    cash: 0,
}

// Reducer отвечает на вопрос - как должен измениться State.
// Reducer должен возвращать новый объект.
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CASH:
            return {...state, cash: state.cash + action.payload};
        case GET_CASH:
            return {...state, cash: state.cash - action.payload};
        default:
            return state;
    }
}

// Store первым параметром принимает Reducer
const store = createStore(reducer);

ReactDOM.render(
    // Provider позволяет прокидывать состояние в компоненты.
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

