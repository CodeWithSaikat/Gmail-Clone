import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectMail } from "../features/mailReducer.js";
import "./EmailRow.css";

const EmailRow = ({ key, title, id, subject, description, time }) => {
  const dispatch = useDispatch();
  const OpenMail = () => {
    dispatch(
      selectMail({
        key,
        title,
        id,
        subject,
        description,
        time,
      })
    );
    Navigate("/mail");
  };
  const Navigate = useNavigate();
  return (
    <div onClick={OpenMail} className="emailRow">
      <div className="emailRow__otpions">
        {" "}
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>{" "}
      </div>
      <div className="emailRow__title">{title}</div>
      <div className="emailRow__message">
        <h5>
          {subject}
          <span className="emailRow__description"> - {description}</span>
        </h5>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
};

export default EmailRow;
