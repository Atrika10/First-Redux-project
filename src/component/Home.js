import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {actionCreators} from '../state/index';
import { bindActionCreators } from 'redux';

export default function Home() {
   const dispatch = useDispatch();
   const balance= useSelector(state => state.amount);
   const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
       <div className="container"> 
      <div>
        <h2>Buy Your Favorite Product</h2>
        <button className='btn btn-primary mx-3' onClick={()=>{depositMoney(100)}}>+ </button>
        Update Balance :{balance} {(balance == 0)?<button disabled={true} className='btn btn-primary mx-3'>- </button> : <button className='btn btn-primary mx-3' onClick={()=>{withdrawMoney(100)}}>- </button>}
        
      </div>
      </div>
    </div>
  )
}
