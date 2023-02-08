import './App.css';
import {useState} from 'react';

let tip;

function App() {
    const [bill, setBill] = useState(0);
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);

    const tipPercentage = (num) => {
        tip = (bill / 100) * num;
        return tip;
    }


    return (
        <div className="App">
            <div className="bill">
                <label>Bill</label>
                <input className='input' type="number"
                    value={bill}
                    onChange={
                        (e) => {
                            setTotal(Number(e.target.value))
                            setBill(e.target.value)

                        }
                    }
                    placeholder="$"/>
                <div className="btn-group">
                    <button type="button"
                        onClick={
                            () => {
                                tipPercentage(5)
                                setAmount(tip)
                                setTotal(total + Number(tip))
                            }
                        }
                        className='button'>5%</button>
                    <button type="button"
                        onClick={
                            () => {
                                tipPercentage(10)
                                setAmount(tip)
                                setTotal(total + Number(tip))
                            }
                        }
                        className='button'>10%</button>
                    <button type="button"
                        onClick={
                            () => {
                                tipPercentage(15)
                                setAmount(tip)
                                setTotal(total + Number(tip))
                            }
                        }
                        className='button'>15%</button>
                    <button type="button"
                        onClick={
                            () => {
                                tipPercentage(25)
                                setAmount(tip)
                                setTotal(total + Number(tip))
                            }
                        }
                        className='button'>25%</button>
                    <button type="button"
                        onClick={
                            () => {
                                tipPercentage(50)
                                setAmount(tip)
                                setTotal(total + Number(tip))
                            }
                        }
                        className='button'>50%</button>
                    <button type="button"
                        onClick={
                            () => {
                                tipPercentage(5)
                                setAmount(tip)
                                setTotal(total + Number(tip))
                            }
                        }
                        className='button'>CUSTOM</button>
                </div>
                <label>Number of people</label>
                <input className='input' type="number"/>
            </div>
            <div className="total">
                <div className="amount">
                    <p>Tip Amount</p>
                    <p id="amount">${amount}</p>
                </div>
                <div className="sum">
                    <p>Total</p>
                    <p id="total">${
                      Number(total)
                    }</p>
                </div>

                <button className='reset' type="button">RESET</button>
            </div>
        </div>
    );
}

export default App;
