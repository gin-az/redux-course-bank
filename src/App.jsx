import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {ADD_CASH, GET_CASH} from "./Actions/actions";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash);
    console.log(cash);

    const addCash = (cash) => dispatch({
        type: ADD_CASH,
        payload: !!cash ? cash : 0,
    });
    const getCash = (cash) => dispatch({
            type: GET_CASH,
            payload: !!cash ? cash : 0,
        });

  return (
    <div className="App">
        <div className="menu">
            <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
            <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        </div>
        <div className="display-info">
            <div className="display-info-balance"><h3>{cash} RUB</h3></div>
            <div className="display-info-balance"><h3>$ {cash / 67}</h3></div>
            <div className="display-info-balance"><h3>E {cash / 83}</h3></div>
        </div>
    </div>
  );
}

export default App;
