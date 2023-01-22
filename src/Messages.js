import { useState } from "react";
import MenuItem from "./MenuItem";
import classes from "./Messages.module.css";
import SavingsAccount from "./SavingsAccount";
import CreditCard from "./CreditCard";
import PersonalLoan from "./PersonalLoan";
import FixedDeposit from "./FixedDeposit";
import HomeLoan from "./HomeLoan";

const Messages = () => {
  const menuItem = (
    <MenuItem
      sa={savingsAccountHandler}
      cc={creditCardHandler}
      pl={personalLoanHandler}
      hl={homeLoanHandler}
      fd={fixedDepositHandler}
      key="menu"
    />
  );
  const [messages, setMessage] = useState([]);
  const [show, setShow] = useState(false);

  function Reply(reply) {
    setShow(true);
    setMessage((prevMessage) => {
      let newMessage = [...prevMessage];
      newMessage.push(
        <p key={newMessage.length} className={classes.reply}>
          {reply}
        </p>
      );
      newMessage.push(
        <p key={newMessage.length} className={classes.request}>
          We have noted down your problem and will get back to you
        </p>
      );

      return newMessage;
    });
  }
  function savingsAccountHandler() {
    setShow(true);
    setMessage((prevMessage) => {
      let newMessage = [...prevMessage];

      newMessage.push(
        <div key={newMessage.length} className={classes.reply}>
          {"Savings Account"}
        </div>
      );
      newMessage.push(
        <SavingsAccount key={newMessage.length} onClick={Reply} />
      );
      return newMessage;
    });
  }

  function creditCardHandler() {
    setShow(true);
    setMessage((prevMessage) => {
      let newMessage = [...prevMessage];

      newMessage.push(
        <div key={newMessage.length} className={classes.reply}>
          {"Credit Card"}
        </div>
      );
      newMessage.push(<CreditCard key={newMessage.length} onClick={Reply} />);
      return newMessage;
    });
  }

  function personalLoanHandler() {
    setShow(true);
    setMessage((prevMessage) => {
      let newMessage = [...prevMessage];

      newMessage.push(
        <div key={newMessage.length} className={classes.reply}>
          {"Personal Loan"}
        </div>
      );
      newMessage.push(<PersonalLoan key={newMessage.length} onClick={Reply} />);
      return newMessage;
    });
  }

  function fixedDepositHandler() {
    setShow(true);
    setMessage((prevMessage) => {
      let newMessage = [...prevMessage];

      newMessage.push(
        <div key={newMessage.length} className={classes.reply}>
          {"Fixed Deposit"}
        </div>
      );
      newMessage.push(<FixedDeposit key={newMessage.length} onClick={Reply} />);
      return newMessage;
    });
  }

  function homeLoanHandler() {
    setShow(true);
    setMessage((prevMessage) => {
      let newMessage = [...prevMessage];

      newMessage.push(
        <div key={newMessage.length} className={classes.reply}>
          {"Home Loan"}
        </div>
      );
      newMessage.push(<HomeLoan key={newMessage.length} onClick={Reply} />);
      return newMessage;
    });
  }

  function menuHandler() {
    setShow(false);
  }
  return (
    <div className={classes.messages}>
      {messages}
      {!show && menuItem}
      {show && (
        <button className={classes.menuButton} onClick={menuHandler}>
          Back to Menu
        </button>
      )}
    </div>
  );
};

export default Messages;
