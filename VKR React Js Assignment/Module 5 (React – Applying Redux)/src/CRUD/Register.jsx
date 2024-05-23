import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PostAPIAction } from '../Action/index';


function Register(props) {
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[phone,setphone]=useState('')
    const[country,setcountry]=useState('')

    const NameHndl=(e)=>{
        setname(e.target.value)
    }
    const EmailHndl=(e)=>{
        setemail(e.target.value)
    }
    const phoneHndl=(e)=>{
        setphone(e.target.value)
    }
    const CountryHndl=(e)=>{
        setcountry(e.target.value)
    }
    const dispatch =useDispatch()
    const SubmitData=(e)=>{
        // e.prevenDefault();
        const Result = {
            name:name,
            email:email,
            moblie:phone,
            country:country,
        }
        dispatch(PostAPIAction(Result))
    }
    return (
        <>
            <div className="container mt-5">
                <table className='table'>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" id='name' className='form-control' onChange={(e)=>NameHndl(e)}/></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type="email" id='email' className='form-control' onChange={(e)=>EmailHndl(e)}/></td>
                    </tr>
                    <tr>
                        <td>phone:</td>
                        <td><input type="text" id='phone' className='form-control' onChange={(e)=>phoneHndl(e)} /></td>
                    </tr>
                    <tr>
                        <td>Country:</td>
                        <td><input type="text" id='country' className='form-control' onChange={(e)=>CountryHndl(e)} /></td>
                    </tr>
                    <tr>
                        <button type='button' className='btn btn-primary' onClick={(e)=>SubmitData(e)}>Submit</button>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default Register;