import React from "react";
import NotificationComp from "./NotificationComp";
import "./NotificationMenu.css";

import angelaGray from "./images/avatar-angela-gray.webp";

const NOTIFS = [
  {
    status: "new",
    image: angelaGray,
    name: "Angela Gray",
    action: "followed you",
    object: "",
    time: "5m ago ",
  },
  {
    status: "new",
    image: "../public/images/avatar-mark-webber.webp",
    name: "Mark Webber",
    action: "reacted to your recent post",
    object: "My first tournament today!",
    time: "1m ago",
  },
  {
    status: "new",
    image: "../public/images/avatar-angela-gray.webp",
    name: "Jacob Thompson",
    action: "has joined your group",
    object: "Chess Club",
    time: "1 day ago",
  },
  {
    status: "",
    image: "../public/images/avatar-angela-gray.webp",
    name: "Rizky Hasanuddin",
    action: "sent you a private message",
    object: "",
    time: "5 days ago",
  },
  {
    status: "",
    image: "../public/images/avatar-angela-gray.webp",
    name: " Kimberly Smith ",
    action: "commented on your picture",
    object: "",
    time: "1 week ago",
  },
  {
    status: "",
    image: "../public/images/avatar-angela-gray.webp",
    name: " Nathan Peterson",
    action: "reacted to your recent post",
    object: "5 end-game strategies to increase your win rate",
    time: " 2 weeks ago",
  },
  {
    status: "",
    image: "../public/images/avatar-angela-gray.webp",
    name: "Anna Kim",
    action: "left the group Chess Club",
    object: "",
    time: "2 weeks ago",
  },
];

function NotificationMenu() {
  return (
    <div className="notif-menu">
      <div className="notif-menu__actions">
        <div className="notif-menu__lhs">
          <h1>Notifications</h1>
          <span className="notif-menu__new-notif">3</span>
        </div>
        <div className="notif-menu__lhs">
          <button className="notif-menu__mar-btn">Mark all as read</button>
        </div>
      </div>

      <div className="notif-menu__notifs">
        {NOTIFS.map((n) => (
          <NotificationComp
            imgPath={n.image}
            name={n.name}
            action={n.action}
            object={n.object}
            time={n.time}
            status={n.status}
          />
        ))}
      </div>
    </div>
  );
}

export default NotificationMenu;