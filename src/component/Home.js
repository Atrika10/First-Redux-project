import React from 'react'
import { useDispatch } from 'react-redux';
import {actionCreators} from '../state/index'

export default function Home() {
   const dispatch = useDispatch();
  return (
    <div>
       <div className="container"> 
      <div>
        <h2>Buy Your Favorite Product</h2>
        <button className='btn btn-primary mx-3' onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>- </button>
        Update Balance
        <button className='btn btn-primary mx-3' onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+ </button>
      </div>
      </div>
    </div>
  )
}
