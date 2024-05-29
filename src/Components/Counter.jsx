import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../Redux/Slices/CounterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value); 
    const dispatch = useDispatch();
 
    return ( 
        <>
            <div className=" h-100 d-flex justify-content-around align-items-center w-100    " style={{height:'400px',width:'400px'}}  >
                <div >
                    <button className="btn btn-primary" onClick={() => dispatch(increment())}>
                        Increment
                    </button>
                </div>
                <div className="px-4" style={{ color: 'black' }}>
                    {count}
                </div>
                <div>
                    <button className="btn btn-danger" onClick={() => dispatch(decrement())}>
                        Decrement
                    </button>
                </div>
            </div>
        </>
    );
};

export default Counter;
