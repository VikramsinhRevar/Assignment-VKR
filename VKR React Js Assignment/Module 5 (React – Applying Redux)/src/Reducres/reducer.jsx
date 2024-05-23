const InitialData={
    details:[],
    isResponse:false,
    isDelete:false,
    idUpadte:false
}

const reducer=(state=InitialData,action)=>{
    switch(action.type)
    {
        case 'GETDETAILS':
            return{
                details:action.payload
            }
        case 'POSTDETAILS':
            return{
                isResponse:action.payload
            }
        case 'DELETEDETAILS':
            return{
                isDelete:action.payload
            }
            case 'UPDATEDETAILS':
            return{
                idUpadte:action.payload
            }
            default:return state;
    }

}
export default reducer;