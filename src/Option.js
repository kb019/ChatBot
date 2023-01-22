import classes from "./Option.module.css";

const Option = ({ option, onClick, optKey }) => {
  return (
    <div onClick={onClick} className={classes.option} key={optKey}>
      {option}
    </div>
  );
};

export default Option;
