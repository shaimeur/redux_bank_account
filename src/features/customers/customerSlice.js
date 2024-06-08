const initialStateCustomer = {
    fullName: 'Haimeur saad',
    nationalID: '',
    cretedAt: '',
}


function customerReducer (state= initialStateCustomer,action){
    switch (action.type){
        case "customer/createCustomer" :
        return {
            ...state ,
            fullName : action.payload.fullName,
            nationalID : action.payload.nationalID,
            cretedAt : action.payload.createdAt
        }
        case "customer/updateName" :
            return {
                ...state,
                fullName : action.payload

    }
        default :
        return state
}}

export function createCustomer (fullName,nationalID){
    return {type : "customer/createCustomer",payload : {fullName,nationalID,createdAt : new Date().toISOString()}}
}

export function updateName (fullName){
    return {type : "customer/updateName",payload : fullName}
}

export default customerReducer