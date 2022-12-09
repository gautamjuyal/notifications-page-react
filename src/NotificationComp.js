import "./NotificationComp.css";
import React, { useState } from "react";

function NotificationComp(props) {
  const [notifState, setNotifState] = useState(props.status);

  function notifStateHandler() {
    if (notifState === "new") setNotifState("");
  }

  const nStatus = notifState === "new" ? "new" : "";
  return (
    <div className={`notif-comp ${nStatus}`} onClick={notifStateHandler}>
      <div className="notif-comp__profile">
        <img src={props.imgPath} alt="profile-img" />
      </div>
      <div className="notif-comp__text">
        <div className="notif-comp__notif">
          <div>
            <strong>{props.name}</strong> {props.action}{" "}
            <strong>{props.object}</strong>
          </div>
          <div
            className={`notif-comp__dot ${
              nStatus === "new" ? "" : "invisible"
            }`}>
            <span>.</span>
          </div>
        </div>
        <div className="notif-comp__time">{props.time}</div>
      </div>
    </div>
  );
}

export default NotificationComp;
