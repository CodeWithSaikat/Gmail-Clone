import React, { useRef, useState } from "react";
import "./SendMail.css";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessageIsOpen } from "../features/mailReducer.js";
import { db } from "../firebase.js";
import firebase from "firebase/compat/app";

const SendMail = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  // this is a react hook form  get form data
  const handelSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());

    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessageIsOpen());
  };
  return (
    <div className="sendmail">
      <div className="sendMail__header">
        <p>New Message</p>
        <div className="sendMail__headerIcon">
          <IconButton>
            <MinimizeIcon />
          </IconButton>
          <IconButton>
            <CloseFullscreenIcon />
          </IconButton>
          <IconButton>
            <CloseIcon onClick={() => dispatch(closeSendMessageIsOpen())} />
          </IconButton>
        </div>
      </div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="to"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="errors__to">To is required!</p>}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        <input
          type="text"
          name="message"
          placeholder="Message"
          className="sendMail__message"
          {...register("message", { required: true })}
        />
        <div className="sendMail__options">
          <Button className="sendMail__button" type="submit">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;

// https://youtu.be/KzcPKB9SOEk
// 5.9
