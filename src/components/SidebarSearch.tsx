import SearchIcon from "@mui/icons-material/Search";
import "./sidebar.css";

export default function SidebarSearch() {
  return (
    <div className="sidebar__search">
      <div className="sidebar__searchContainer">
        <div className="search__icon">
          <SearchIcon />
        </div>
        <input placeholder="Search or start new chat" type="text" />
      </div>
    </div>
  );
}
