import CreateCustomer from './features/customers/CreateCustomer'
import Customer from './features/customers/Customer'
import AccountOperations from './features/accounts/AccountOperations'
import BalanceDisplay from './features/accounts/BalanceDisplay'
import './App.css'

const  App = ()=> {


  return (
    <>
       <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </>
  )
}

export default App
