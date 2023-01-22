import classes from "./CreditCard.module.css";

const CreditCard = ({ onClick }) => {
  return (
    <>
      <p className={classes.title}>Please Select an Option</p>
      <p
        className={classes.request}
        onClick={onClick.bind(null, "Apply for credit card")}
      >
        Apply for credit card
      </p>
      <p
        className={classes.request}
        onClick={onClick.bind(null, "Upgrade your Credit Card")}
      >
        Upgrade your Credit Card
      </p>
      <p
        className={classes.request}
        onClick={onClick.bind(null, "Block Credit Card")}
      >
        Block Credit Card
      </p>
      <p
        className={classes.request}
        onClick={onClick.bind(null, "UnBlock Credit Card")}
      >
        UnBlock Credit Card
      </p>
    </>
  );
};

export default CreditCard;
