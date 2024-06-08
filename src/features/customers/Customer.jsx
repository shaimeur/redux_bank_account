import { useSelector } from "react-redux";

const  Customer = ()=> {

  const customer = useSelector((state) => state.customer);


    return (
      <>
        <h2>👋 Welcome, {customer.fullName}</h2>
      </>
    )
  }

  export default Customer;