import { useSelector } from "react-redux";

function formatCurrency(value) {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }

  const  BalanceDisplay = () => {
    const account = useSelector((state) => state.account);
    const balance = account.balance;
    return <div className="balance">{formatCurrency(balance)}</div>;
  }

  export default BalanceDisplay;