import React, { useState } from "react";
import "./styles.css";
export default function App() {
  const [money, setMoney] = useState("");
  const [amount, setAmount] = useState(0);
  const [history, setHistory] = useState(["Balance : 0 "]);
  const changeMoney = (event) => {
    setMoney(event.currentTarget.value);
  };
  const creditClicked = () => {
    let newMoney = parseInt(money);
    if (!isNaN(newMoney)) {
      let newAmount = amount + newMoney;
      setAmount(newAmount);
      let transaction = "Deposit : " + money + " , Balance : " + newAmount;
      setHistory([...history, transaction]);
      setMoney("");
    }
    setMoney("");
  };
  const debitClicked = () => {
    let newMoney = parseInt(money);
    if (!isNaN(newMoney)) {
      if (amount < newMoney) {
        alert("Balance is less than the money to be withdrawn");
      } else {
        let newAmount = amount - newMoney;
        setAmount(newAmount);
        let transaction = "Withdraw : " + money + " , Balance : " + newAmount;
        setHistory([...history, transaction]);
      }
    }
    setMoney("");
  };
  const resetClicked = () => {
    setMoney("");
    setHistory([]);
  };
  return (
    <div className="container">
      <div className="container1">
        <h1>Debbie's Bank App</h1>
        <h2>Enter the amount</h2>
        <input value={money} onChange={changeMoney} />
        <br />
        <button style={{margin: 5}} onClick={creditClicked}>
          {" "}
          Deposit{" "}
        </button>
        <button style={{ margin: 5 }} onClick={debitClicked}>
          {" "}
          Withdraw{" "}
        </button>
        <button style={{ margin: 5 }} onClick={resetClicked}>
          {" "}
          Reset{" "}
        </button>
      </div>
      <div className="balance">
        <p> Balance : {amount} </p>
      </div>
      <div className="summary">
        <h2> Transaction History</h2>
        <ul className="transactionStatus">
          {history.map((element) => (
            <li> {element} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
