import {createStore, combineReducers} from "redux";
import {cashReducer} from "./cashReduser";
import {customerReducer} from "./customerReducer";
import {composeWithDevTools} from "redux-devtools-extension";

 const rootReducer = combineReducers({
     cash: cashReducer,
     customer: customerReducer,
     // cashReducer,
     // customerReducer
 })

// Store первым параметром принимает Reducer
// для удобства отслеживания состояния вторым аргументом передаем инструменты разработчика

// Можно передать MiddleWare
export const store = createStore(rootReducer, composeWithDevTools());