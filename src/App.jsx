import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {ADD_CASH, GET_CASH} from "./Actions/actions";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
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
            <div className="display-info-balance">
                <h2 style={{margin: 2}}>Баланс:</h2>
                <h4 style={{margin: 2}}>{cash} RUB</h4>
                <p style={{margin: 2}}>$ {cash / 67}</p>
                <p style={{margin: 2}}>E {cash / 83}</p>
            </div>
            <hr />
        </div>
    </div>
  );
}

export default App;
