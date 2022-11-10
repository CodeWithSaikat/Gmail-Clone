import { Checkbox } from "@material-ui/core";
import { IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import GroupIcon from "@mui/icons-material/Group";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import React, { useEffect, useState } from "react";
import "./EmailList.css";
import { Inbox } from "@material-ui/icons";
import EmailListSection from "./EmailListSection.js";
import EmailRow from "./EmailRow.js";
import { db } from "../firebase.js";

const EmailList = () => {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot);
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.ic,
            data: doc.data(),
          }))
        );
      });
  }, []);
  return (
    <div className="emaillist">
      <div className="emailList__setting">
        <div className="emailList__settings__Left">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>{" "}
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settings__Right">
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
      <div className="emailList__sections">
        <EmailListSection Icon={Inbox} title="Primary" color="red" selected />
        <EmailListSection Icon={GroupIcon} title="Social" color="#1a73e8" />
        <EmailListSection
          Icon={LocalOfferIcon}
          title="Promotions"
          color="#188038"
        />
      </div>

      <div className="emailList__rows">
        {emails.map(({ id, data: { to, message, subject, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
};

export default EmailList;
