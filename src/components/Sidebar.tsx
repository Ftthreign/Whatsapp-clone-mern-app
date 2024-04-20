import SidebarHeader from "./SidebarHeader";
import SidebarSearch from "./SidebarSearch";
import SidebarChat from "./SidebarChat";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarHeader />
      <SidebarSearch />
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}
