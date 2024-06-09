const initialStateAccount = {
    balance: 0,
    loan : 0,
    loanPurpose: '',
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
export function deposit(amount,curency){

   if(curency === "USD")  return {type : "account/deposit" ,payload : amount}

   return async  function(dispatch,getState) {

    const res = await fetch(`https://api.frankfurter.app/latest?${amount}&from=${curency}&to=USD`)
    const data = await res.json()
    // console.log(data.rates.USD)
    // alert(`${amount} ${curency} is equal to ${amount * data.rates.USD} USD`)
    const convertedAmount = amount * data.rates.USD
    console.log(convertedAmount)
    dispatch(  {type : "account/deposit" ,payload : convertedAmount})
   }

}


export function withdraw(amount){
    return {type : "account/withdraw",payload : amount}
}

export function requestLoan(amount,purpose){
    return {type :"account/requestLoan",payload : {amount ,purpose }}
}

export function payLoan(){
    return {type:"account/payLoan"}
}

export default accountReducer