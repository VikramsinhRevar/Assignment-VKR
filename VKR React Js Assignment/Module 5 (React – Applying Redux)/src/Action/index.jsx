import { useEffect, useState } from "react";
import { GetAPIDetails,PostAPIDetails,DeleteAPIDetails, EditAPIDetails,UpdateAPIDetails } from "../CRUD/API";


export const GetAPiAction=()=>{
    return function(dispatch)
    {
        return GetAPIDetails().then((res)=>{
            console.log(res,"fromAction");
            dispatch({
                type:'GETDETAILS',
                payload:res.data

            })
        })
    }
}

//post data
export const PostAPIAction=(request)=>{
    return function(dispatch)
    {
        return PostAPIDetails(request).then((res)=>{
            console.log(res,"from response data");
            dispatch({
                type:'POSTDETAILS',
                payload:'',

            })
        })
    }
}
//Delete data
export const DeleteAPIAction=(id)=>{
    return function(dispatch)
    {
        return DeleteAPIDetails(id).then((res)=>{
            console.log(res,"from delete data");
            dispatch({
                type:'DELETEDETAILS',
                payload:true,

            })
        })
    }
}

//edit data
export default(props)=>{
    const [detailsbyid,setdetailsbyid]=useState({})
    const GetDetailId = (request,id)=>{
        console.log("edit id",request,id);
        return EditAPIDetails(request,id).then((res)=>{
            console.log(res);
            setdetailsbyid(res)
        })
    }
    useEffect(()=>{
        GetDetailId(props)
    },[])
    return [detailsbyid]
}


//update data

export const UpdateAPIAction=(request,id)=>{
    return function(dispatch)
    {
        dispatch({
            type:'UPDATEDETAILS',
            payload:false,

        })
        return UpdateAPIDetails(request,id).then((res)=>{
            console.log(res,"from response updatedata");
            dispatch({
                type:'UPDATEDETAILS',
                payload:true,

            })
        })
    }
}













