import { useState } from 'react';

function AddTransaction(props) {
    let [getInputText, setInputText] = useState('')
    let [getInputAmount, setInputAmount] = useState('')
    const handleInputText = (event) =>{
        setInputText(event.target.value)
    }
    const handleInputAmount = (event) =>{
        setInputAmount(event.target.value)
    }
    const addNewTransaction = (event) =>{
        if(!(getInputAmount === '' && getInputText === '')){
            let isIncome = "income"
            if (parseInt(getInputAmount) < 0) {
                isIncome = "outcome"
            }
            const newTransaction = {
                balance: getInputAmount,
                type: isIncome,
                description: getInputText
            }
            props.DataTransaction(newTransaction)
            setInputText('')
            setInputAmount('')
        }

    }
    return(
        <div className='addnewtransaction'>
            <h3>Add new transaction</h3>
            <p>Text</p>
            <input value={getInputText} onChange={handleInputText} type='text'/>
            <p>Amount</p>
            <p>(negative -expense, positif +expense)</p>
            <input value={getInputAmount} onChange={handleInputAmount} type='text'/>
            <button onClick={addNewTransaction}>Add Transaction</button>
        </div>
    )
}

export default AddTransaction