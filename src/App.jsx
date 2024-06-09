import CreateCustomer from './features/customers/CreateCustomer'
import Customer from './features/customers/Customer'
import AccountOperations from './features/accounts/AccountOperations'
import BalanceDisplay from './features/accounts/BalanceDisplay'
import { useSelector } from 'react-redux'
import './App.css'

const  App = ()=> {

const auth = useSelector((state) => state.customer.fullName)
  return (
    <>
       <h1>🏦 The React-Redux Bank ⚛️</h1>
      {
      !auth ?  <CreateCustomer /> : (
  <div>
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
  </div>
) }

    </>
  )
}

export default App
