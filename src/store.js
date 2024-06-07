import {legacy_createStore as  createStore,combineReducers} from 'redux';




const initialStateAccount = {
    balance: 0,
    loan : 0,
    loanPurpose: '',
}

const initialStateCustomer = {
    fullName: '',
    nationalID: '',
    cretedAt: '',
}

function accountReducer (state=initialStateAccount,action){
    switch (action.type) {
        case "account/deposit":
            return {
                ...state,
                balance: state.balance + action.payload
            };
        case "account/withdraw":
            return {
                ...state,
                balance: state.balance - action.payload
            };

        case "account/requestLoan":
            if(state.loan > 0) return state
            return {
                ...state,
                loan:action.payload.amount,
                loanPurpose : action.payload.purpose,
                balance : state.balance +  action.payload.amount
            }

            case "account/payLoan":
                return {
                    ...state,
                    loan : 0,
                    loanPurpose   : '',
                    balance:state.balance - state.loan
                };



        default:
            return state
    }

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


const rootReducer = combineReducers({
    account : accountReducer,
    customer : customerReducer
})




const store = createStore(rootReducer)

// store.dispatch({type : "account/deposit" ,payload : 500})
// console.log(store.getState())
// store.dispatch({type : "account/withdraw",payload : 200})
// console.log(store.getState())
// store.dispatch({type :"account/requestLoan",payload : {amount :2000000,purpose :"Buy a car"}})
// console.log(store.getState())
// store.dispatch({type:"account/payLoan"})
// console.log(store.getState())



function deposit(amount){
    return {type : "account/deposit" ,payload : amount}
}
store.dispatch(deposit(500))
console.log(store.getState())

function withdraw(amount){
    return {type : "account/withdraw",payload : amount}
}
store.dispatch(withdraw(200))
console.log(store.getState())
function requestLoan(amount,purpose){
    return {type :"account/requestLoan",payload : {amount ,purpose }}
}
store.dispatch(requestLoan(10000000,"buy an Iphone"))
console.log(store.getState())
function payLoan(){
    return {type:"account/payLoan"}
}
store.dispatch(payLoan(200))
console.log(store.getState())

// export default

function createCustomer (fullName,nationalID){
    return {type : "customer/createCustomer",payload : {fullName,nationalID,createdAt : new Date().toISOString()}}
}

function updateName (fullName){
    return {type : "customer/updateName",payload : fullName}
}

store.dispatch(createCustomer("John Doe","123456789"))
console.log(store.getState())
store.dispatch(updateName("John Smith"))
console.log(store.getState())