import './App.css';

function App() {
    return (
        <div className="App">
            <div className="bill">
                <label>Bill</label>
                    <input className='input' type="text" placeholder="$"/>
                    <div className="btn-group">
                <button className='button'>5%</button>
                <button className='button'>10%</button>
                <button className='button'>15%</button>
                <button className='button'>25%</button>
                <button className='button'>50%</button>
                <button className='button'>CUSTOM</button>
                </div>
                <label>Number of people</label>
                <input className='input' type="text" />
            </div>
            <div className="total">
                <p>Tip Amount</p>
                <p>Total</p>
                <button type="button">RESET</button>
            </div>
        </div>
    );
}

export default App;
