import classes from "./HomeLoan.module.css";

const HomeLoan = ({ onClick }) => {
  return (
    <>
      <p className={classes.title}>Please Select an Option</p>
      <p
        className={classes.request}
        onClick={onClick.bind(null, "Apply for HomeLoan")}
      >
        Apply for HomeLoan
      </p>
      <p
        className={classes.request}
        onClick={onClick.bind(null, "Home Loan Balance Transfer")}
      >
        Home Loan Balance Transfer
      </p>
      <p
        className={classes.request}
        onClick={onClick.bind(null, "Interest Rates for HomeLoan")}
      >
        Interest Rates for HomeLoan
      </p>
    </>
  );
};

export default HomeLoan;
