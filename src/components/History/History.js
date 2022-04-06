import { useState } from 'react';
function History(props) {
    return(
        <div className='history'>
            <h3>History</h3>
            <ul>
                {
                props.DataHistory.map((history)=>{
                    if (history.type === "income") {
                        return <li className='bordergreen'><p className='leftp'>{history.description}</p><p className='rightp'>{history.balance}</p></li>
                    }else{
                        return <li className='borderred'><p className='leftp'>{history.description}</p><p className='rightp'>{history.balance}</p></li>
                    }
                })
                }
            </ul>
        </div>
    )
}

export default History;