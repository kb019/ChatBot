import Option from "./Option";
import classes from "./MenuItem.module.css";
const MenuItem = ({ sa, cc, hl, pl, fd }) => {
  return (
    <div className={classes.menuItem}>
      <Option optKey="SavingsAccount" option="Savings Account" onClick={sa} />
      <Option optKey="CreditCard" option="Credit Card" onClick={cc} />
      <Option optKey="PersonalLoan" option="Personal Loan" onClick={pl} />
      <Option optKey="FixedDeposit" option="Fixed Deposit" onClick={fd} />
      <Option optKey="HomeLoan" option="Home Loan" onClick={hl} />
    </div>
  );
};

export default MenuItem;
