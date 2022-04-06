import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Flow from './components/Flow/Flow';
import History from './components/History/History';
import AddTransaction from './components/AddTransaction/AddTransaction';

function App() {
  let [getHistory, setHistory] = useState([
    {balance: "+1000", type: "income",description: "Uang Kas"},
    {balance: "+1000", type: "income",description: "Dikasih Orang"},
    {balance: "-1000", type: "outcome",description: "Jajan Boba"}
  ])
  
  const eventCreateTransaction = (transaction) =>{
    setHistory(getHistory.concat(transaction))
  }

  const getOutcomeBalance = () =>{
    let outcomebalance = 0
    getHistory.forEach((history) =>{
        if(history.type === "outcome"){
        outcomebalance += parseInt(history.balance)
        }
    }) 
    return outcomebalance
  }
  const getIncomeBalance = () =>{
    let incomebalance = 0
    getHistory.forEach((history) =>{
        if(history.type === "income"){
        incomebalance += parseInt(history.balance)
        }
    }) 
    return incomebalance
  }

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <h3>Your Balance</h3>
      <h2>IDR {getIncomeBalance() + getOutcomeBalance()}</h2>
      <Flow DataHistory={getHistory}/>
      <History DataHistory={getHistory} />
      <AddTransaction DataTransaction={eventCreateTransaction} />
    </div>
  );
}

export default App;
