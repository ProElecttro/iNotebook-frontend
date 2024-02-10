import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state'

const Test = () => {
    const dispatch = useDispatch()
    const { withdrawAmount, depositAmount } = bindActionCreators(actionCreators, dispatch)
    return (
        <div className="container d-flex justify-content-center">
            <button className="btn btn-danger mx-2" onClick={() => withdrawAmount(100)} >-</button>
            <button className='btn btn-primary mx-2'>Withdraw/Deposit</button>
            <button className="btn btn-success mx-2" onClick={() => depositAmount(100)} >+</button>
        </div>
    )
}

export default Test
