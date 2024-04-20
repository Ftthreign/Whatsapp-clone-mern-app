import { Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { MoreVert, Chat, DonutLarge } from "@mui/icons-material";
import "./sidebar.css";

export default function SidebarHeader() {
  return (
    <div className="sidebar__header">
      <Avatar>F</Avatar>
      <div className="sidebar__headerRight">
        <IconButton>
          <DonutLarge />
        </IconButton>
        <IconButton>
          <Chat />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>
    </div>
  );
}
