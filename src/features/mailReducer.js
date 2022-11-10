import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sendMessageIsOpen: false,
  selectMail: null,

  // user slice
  user: null,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    selectMail: (state, action) => {
      state.selectMail = action.payload;
    },
    sendMessageIsOpen: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessageIsOpen: (state) => {
      state.sendMessageIsOpen = false;
    },
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const {
  selectMail,
  sendMessageIsOpen,
  closeSendMessageIsOpen,
  login,
  logout,
} = mailSlice.actions;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectOpenMail = (state) => state.mail.selectMail;
export const selectUser = (state) => state.mail.user;

export default mailSlice.reducer;

// 4.47
