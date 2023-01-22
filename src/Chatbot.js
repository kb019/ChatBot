import classes from "./ChatBot.module.css";
// import { useState } from "react";
import MenuItem from "./MenuItem";
import Messages from "./Messages";

const ChatBot = () => {
  return (
    <div className={classes.box}>
      <div className={classes.header}>
        <div className={classes.chatStatusBox}>
          <div>
            <ion-icon
              name="logo-reddit"
              style={{ fontSize: "25px" }}
            ></ion-icon>
          </div>
          <div className={classes.status}></div>
        </div>
        <div>
          <ion-icon
            name="close-outline"
            style={{ fontSize: "25px" }}
          ></ion-icon>
        </div>
      </div>
      <div className={classes.chat}>
        <div className={classes.welcomeMessage}>
          <h2 className={classes.hello}>Hello :)</h2>
          <p className={classes.desc}>Heres what you can ask me</p>
        </div>
        <Messages />
      </div>
      <div className={classes.footer}></div>
    </div>
  );
};

export default ChatBot;
