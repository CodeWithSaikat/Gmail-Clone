import { IconButton } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import ArchiveIcon from "@mui/icons-material/Archive";
import ReportIcon from "@mui/icons-material/Report";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import LabelIcon from "@mui/icons-material/Label";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import PrintIcon from "@mui/icons-material/Print";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Mail.css";
import { useSelector } from "react-redux";
import { selectMail } from "../features/mailReducer.js";

const Mail = () => {
  // console.log(selectOpenMail);
  const navigate = useNavigate();
  const selectedMail = useSelector(selectMail);
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <ArchiveIcon />
          </IconButton>{" "}
          <IconButton>
            <ReportIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <span className="rightLine"></span>
          <IconButton>
            <MarkAsUnreadIcon />
          </IconButton>
          <IconButton>
            <AccessTimeOutlinedIcon />
          </IconButton>
          <IconButton>
            <AddTaskIcon />
          </IconButton>
          <span className="rightLine"></span>
          <IconButton>
            <DriveFileMoveIcon />
          </IconButton>
          <IconButton>
            <LabelIcon />
          </IconButton>{" "}
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>{" "}
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <div className="mail__subject">
            <h3>{selectedMail.title}</h3>
            <div>
              <IconButton>
                <PrintIcon />
              </IconButton>
              <IconButton>
                <OpenInNewIcon />
              </IconButton>
            </div>
          </div>
          <div className="mail__bodyHeaderTop">
            <div className="mail__bodyHeaderLeft">
              <p>
                Title - <span> Sender mail </span>{" "}
              </p>
            </div>
            <div className="mail__bodyHeaderRight">
              <p>time</p>
              <IconButton>
                <ReplyAllIcon />
              </IconButton>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="mail__message">Description</div>
      </div>
    </div>
  );
};

export default Mail;
