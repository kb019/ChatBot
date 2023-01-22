import classes from "./SavingsAccount.module.css";

const SavingsAccount = ({ onClick }) => {
  return (
    <>
      <p
        className={classes.title}
        
      >
        Please Select an Option
      </p>
      <p
        className={classes.request}
        onClick={onClick.bind(null, "Open Savings Account")}
      >
        Open Savings Account Now
      </p>
      <p
        className={classes.request}
        onClick={onClick.bind(null, "How can i deactivate my Savings Account")}
      >
        How can i deactivate my Savings Account
      </p>
      <p
        className={classes.request}
        onClick={onClick.bind(null, "How to get my passbook")}
      >
        How to get my passbook
      </p>
    </>
  );
};

export default SavingsAccount;
