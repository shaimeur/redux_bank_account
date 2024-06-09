import { useSelector } from "react-redux";
import { useEffect } from "react";

const  Customer = ()=> {

  const customer = useSelector((store) => store.customer);

  useEffect(() => {
    console.log(customer);
  }, [customer]);

    return (
      <>
        <h2>👋 Welcome, {customer.fullName } </h2>
        <h3>NationalID , {customer.nationalID } </h3>
      </>
    )
  }

  export default Customer;