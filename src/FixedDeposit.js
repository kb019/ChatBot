import classes from "./FixedDeposit.module.css";

const FixedDeposit = ({ onClick }) => {
  return (
    <>
      <p className={classes.title}>Please Select an Option</p>
      <p
        className={classes.request}
        onClick={onClick.bind(null, "Apply for FD online")}
      >
        Apply for FD online
      </p>
      <p
        className={classes.request}
        onClick={onClick.bind(null, "Closing Fixed Deposit Online")}
      >
        Closing Fixed Deposit Online
      </p>
      <p
        className={classes.request}
        onClick={onClick.bind(null, "FixedDeposit Interest rates")}
      >
        FixedDeposit Interest rates
      </p>
    </>
  );
};

export default FixedDeposit;
