import axios from "axios";
export async function AxiosRequest(url,method,headers,params)
{
    return params?axios({
        url:url,
        method:method,
        headers:headers,
        data:params
    }):axios({
        url:url,
        method:method,
        headers:headers,
        data:{}
    })
}

const GetAPIDetails=()=>{
    const headers={
        'Content-Type':'application/json'
    }
    return AxiosRequest('http://localhost:3000/details','GET',headers,{})
}
//submit data
const PostAPIDetails=(data)=>{
    return axios.post('http://localhost:3000/details',data)
}
//Delte data
const DeleteAPIDetails=(id)=>{
    const headers={
        'Content-Type':'application/json'
    }
    return AxiosRequest('http://localhost:3000/details/'+id,'DELETE',headers,{})
}

//edit data
const EditAPIDetails=(id)=>{
    const headers={
        'Content-Type':'application/json'
    }
    return AxiosRequest('http://localhost:3000/details/'+id,'GET',headers,{})
}

//update 

const UpdateAPIDetails=(data,id)=>{
    const headers={
        'Content-Type':'application/json'
    }
    return AxiosRequest('http://localhost:3000/details/'+id,'PUT',headers,data)
}




export {GetAPIDetails,PostAPIDetails,DeleteAPIDetails,EditAPIDetails,UpdateAPIDetails};