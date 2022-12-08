import "./NotificationComp.css";

function NotificationComp(props) {
  const nStatus = props.status === "new" ? "new" : "";
  console.log(props.imgPath);
  return (
    <div className={`notif-comp ${nStatus}`}>
      <div className="notif-comp__profile">
        <img src={`${props.imgPath}`} alt="profile-img" />
      </div>
      <div className="notif-comp__text">
        <div className="notif-comp__notif">
          <strong>{props.name}</strong> {props.action}{" "}
          <strong>{props.object}</strong>
        </div>
        <div className="notif-comp__time">{props.time}</div>
      </div>
      <div
        className={`notif-comp__dot ${nStatus === "new" ? "" : "invisible"}`}>
        <span>.</span>
      </div>
    </div>
  );
}

export default NotificationComp;
