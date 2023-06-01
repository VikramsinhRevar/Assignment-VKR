//  Create Increment decrement state change by button click? 

import React, { useState } from 'react';

function FuncCounter(props) {
    
        
        console.log("constructor called");
        const[counter,setCounter]=useState('0')

        const buttClickInc=()=>{
            setCounter(counter+1);
            console.log('incree');
        }

        const buttClickDec=()=>{
            setCounter(counter-1);
            console.log('decree');

        }

        const resetButton=()=>
        {
            setCounter(counter*0);
            console.log('reset');

        }
  
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                    <br></br>
                        <button className='btn btn-info' onClick={buttClickInc}>Increement +</button>
                    </div>
                    <div className="col text-center">
                    <h3>{counter}</h3><br></br>
                    <button className='btn btn-warning' onClick={resetButton}>Reset</button>

                        
                    </div>
                    <div className="col text-center">
                    <br></br>
                    <button className='btn btn-danger' onClick={buttClickDec}>Decreement -</button>
                        
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default FuncCounter;