function Flow(props) {
    const getOutcomeBalance = () =>{
        let outcomebalance = 0
        props.DataHistory.forEach((history) =>{
            if(history.type === "outcome"){
            outcomebalance += parseInt(history.balance)
            }
        }) 
        return outcomebalance
    }
    const getIncomeBalance = () =>{
        let incomebalance = 0
        props.DataHistory.forEach((history) =>{
            if(history.type === "income"){
            incomebalance += parseInt(history.balance)
            }
        }) 
        return incomebalance
    }
    return(
        <div className='outincontainer'>
            <div className='income'>
                <h4>INCOME</h4>
                <span className='green-accent'>IDR {getIncomeBalance()}</span>
            </div>
            <div className='outcome'>
                <h4>OUTCOME</h4>
                <span className='red-accent'>IDR {getOutcomeBalance()}</span>
            </div>
        </div>
    )
}

export default Flow