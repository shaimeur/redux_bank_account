import {legacy_createStore as  createStore} from 'redux';




const initialState = {
    balance: 0,
    loan : 0,
    loanPurpose: '',
}

function reducer (state=initialState,action){
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

const store = createStore(reducer)

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
console.log(store.dispatch(deposit(500)))
console.log(store.getState())

function withdraw(amount){
    return {type : "account/withdraw",payload : amount}
}
console.log(store.dispatch(withdraw(200)))
console.log(store.getState())
function requestLoan(amount,purpose){
    return {type :"account/requestLoan",payload : {amount ,purpose }}
}
console.log(store.dispatch(requestLoan(10000000,"buy an Iphone")))
console.log(store.getState())
function payLoan(){
    return {type:"account/payLoan"}
}
console.log(store.dispatch(payLoan(200)))
console.log(store.getState())

// export default
