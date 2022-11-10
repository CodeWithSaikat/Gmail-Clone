import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmailList from "./components/EmailList.js";
import Mail from "./components/Mail.js";
import SendMail from "./components/SendMail.js";
import {
  login,
  selectSendMessageIsOpen,
  selectUser,
} from "./features/mailReducer.js";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login.js";
import { auth } from "./firebase.js";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // if user is login
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      }
    });
  }, []);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="header__body">
              <Sidebar />
              <Routes>
                <Route path="/" element={<EmailList />} />
                <Route path="/mail" element={<Mail />} />
              </Routes>
            </div>
            {sendMessageIsOpen && <SendMail />}
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
