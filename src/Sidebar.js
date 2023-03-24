import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from '@mui/icons-material/Tag';
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Button } from "@mui/material";
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';

function Sidebar() {
  return (
    <div className="sidebar">
      {/*  Twitter icon  */}
      <TwitterIcon className="sidebar_twitterIcon" />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={TagIcon} text="Explore" />
      <SidebarOption Icon={NotificationsActiveIcon} text="Notification" />
      <SidebarOption Icon={MarkunreadOutlinedIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltOutlinedIcon} text="Lists" />
      <SidebarOption Icon={PersonOutlineOutlinedIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizOutlinedIcon} text="More" />


      {/* Button -> Tweet*/}
       <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>
    </div>
  );
}

export default Sidebar;
