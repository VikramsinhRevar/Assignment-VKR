import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PostAPIAction,UpdateAPIAction } from '../Action/index';
import { useParams } from 'react-router-dom';
import GetDetailId from '../Action/index';

function Update(props) {
    const{id} = useParams();
    console.log("get data id",id);
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[phone,setphone]=useState('')
    const[country,setcountry]=useState('')


    const[getdetails]= GetDetailId(id)

    useEffect(()=>{
        const data=()=>{
            if(getdetails.data)
            {
                setname(getdetails.data.name)
                setemail(getdetails.data.email)
                setphone(getdetails.data.moblie)
                setcountry(getdetails.data.country)
            }
        }
        data();
    },[getdetails.data])

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
        dispatch(UpdateAPIAction(Result,id))
    }
    return (
        <>
            <div className="container mt-5">
                <table className='table'>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" id='name' className='form-control' defaultValue={name} onChange={(e)=>NameHndl(e)}/></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type="email" id='email' className='form-control' defaultValue={email} onChange={(e)=>EmailHndl(e)}/></td>
                    </tr>
                    <tr>
                        <td>phone:</td>
                        <td><input type="text" id='phone' defaultValue={phone} className='form-control' onChange={(e)=>phoneHndl(e)} /></td>
                    </tr>
                    <tr>
                        <td>Country:</td>
                        <td><input type="text" defaultValue={country} id='country' className='form-control' onChange={(e)=>CountryHndl(e)} /></td>
                    </tr>
                    <tr>
                        <button type='button' className='btn btn-primary' onClick={(e)=>SubmitData(e)}>Submit</button>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default Update;