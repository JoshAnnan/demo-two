import "./sidebar.css";
import { RssFeed } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarhr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            {/* <img classname="sidebarFriendImg" src="/person/p6.jpg" alt="" /> */}
            <span className="sidebarFriendName">Joshua Annan-Takyi</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
