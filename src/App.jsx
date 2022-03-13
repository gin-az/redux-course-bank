import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {ADD_CASH, ADD_CUSTOMER, GET_CASH, REMOVE_CUSTOMER} from "./Actions/actions";
import {type} from "@testing-library/user-event/dist/type";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers);
    // console.log(customers);

    const addCash = (cash) => dispatch({
        type: ADD_CASH,
        payload: !!cash ? cash : 0,
    });
    const getCash = (cash) => dispatch({
            type: GET_CASH,
            payload: !!cash ? cash : 0,
        });

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch({type: ADD_CUSTOMER, payload: customer })
    }

    const removeCustomer = (id) => {
        dispatch({type: REMOVE_CUSTOMER, payload: id})
    }

  return (
    <div className="App">
        <div className="menu">
            <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
            <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
            <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        </div>
        <div className="display-info">
            <div className="display-info-balance">
                <h2 style={{margin: 2}}>Баланс:</h2>
                <h4 style={{margin: 2}}>{cash} RUB</h4>
                <p style={{margin: 2}}>$ {cash / 67}</p>
                <p style={{margin: 2}}>E {cash / 83}</p>
            </div>
            <hr />
            <div>
                {customers.length > 0
                    ? <div> Клиенты:
                        {customers.map(customer =>
                            <p style={{margin: 2}} onClick={() => removeCustomer(customer.id)}>{customer.name}</p>
                        )}
                    </div>
                    : <div>
                        <h4>Клиенты отсутствуют!</h4>
                    </div>}
            </div>
        </div>
    </div>
  );
}

export default App;
