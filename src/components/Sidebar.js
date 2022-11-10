import { Button } from "@material-ui/core";
import { Inbox, Send, Star } from "@material-ui/icons";
import AddIcon from "@mui/icons-material/Add";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendMessageIsOpen } from "../features/mailReducer.js";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <Button
        size="large"
        startIcon={<AddIcon />}
        className="sidebar__compose"
        onClick={() => dispatch(sendMessageIsOpen())}
      >
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true} />
      <SidebarOption Icon={Star} title="Starred" number={4} />
      <SidebarOption Icon={AccessTimeFilledIcon} title="Snoozed" number={6} />
      <SidebarOption Icon={Send} title="Sent" number={6} />
      <SidebarOption
        Icon={SummarizeOutlinedIcon}
        title="Draft"
        number={9}
        selectedText={true}
      />
      <SidebarOption Icon={ExpandMoreIcon} title="More" />

      <div className="sidebar__footer">
        <p>Meet</p>
        <div className="sidebar__footerIcon">
          <div className="footer__icon">
            <VideocamIcon />
            <p>New meeting</p>
          </div>{" "}
          <div className="footer__icon">
            <KeyboardIcon />
            <p>Join a meeting</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
