import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { deposit, withdraw ,requestLoan,payLoan} from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");
  const dispatch = useDispatch();
  const {
    loan :currentLoan,
    loanPurpose : currentLoanPurpose,
    balance

  } = useSelector((store) => store.account)


  function handleDeposit() {
    if(!depositAmount ) return
    if(depositAmount < 0 ) return setDepositAmount("")
    dispatch(deposit(depositAmount,currency));
    setDepositAmount("");
    setCurrency("");
  }

  function handleWithdrawal() {
    if(!withdrawalAmount || balance <=0) return
    if(withdrawalAmount < 0 ) return setWithdrawalAmount("")
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    if(!loanAmount && !loanPurpose) return
    if(loanAmount < 0 ) return setLoanAmount("")
    dispatch(requestLoan(loanAmount,loanPurpose))
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    dispatch(payLoan())
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit}>Deposit </button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        <div>
          {
            currentLoan > 0 && (
              <div>
                <span>Pay back ${currentLoan} for {currentLoanPurpose}  </span>
                <button onClick={handlePayLoan}>Pay loan</button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default AccountOperations;