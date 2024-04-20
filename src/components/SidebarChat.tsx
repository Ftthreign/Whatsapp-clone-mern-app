import { Avatar } from "@mui/material";
import "./sidebar.css";

export default function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar>F</Avatar>
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  );
}
