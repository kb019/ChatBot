import classes from "./PersonalLoan.module.css";

const PersonalLoan = ({ onClick }) => {
  return (
    <>
      <p className={classes.title}>Please Select an Option</p>
      <p
        className={classes.request}
        onClick={onClick.bind(null, "Apply for personal loan")}
      >
        Apply for personal loan
      </p>
      <p
        className={classes.request}
        onClick={onClick.bind(null, "Closure of personal loan")}
      >
        Closure of personal loan
      </p>
      <p
        className={classes.request}
        onClick={onClick.bind(null, "Interest for personal loan")}
      >
        Interest for personal loan
      </p>
    </>
  );
};

export default PersonalLoan;
