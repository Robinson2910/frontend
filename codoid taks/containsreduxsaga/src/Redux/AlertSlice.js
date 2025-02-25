import { createSlice } from "@reduxjs/toolkit";

const AlertSlice = createSlice({
  name: "Alert",
  initialState: {
    Content: "",
    isShow: false,
  },
  reducers: {
    ShowErrorAction: (state, action) => {
      console.log(typeof action.payload.code, action.payload.show);
      if (action.payload.code == 401 && action.payload.show != false) {
        //debugger
        localStorage.clear();
        window.location.href = "/";
      } else {
        state.Content = action.payload.message;
        state.isShow = true;
      }
    },
    HideErrorAction: (state) => {
      state.Content = "";
      state.isShow = false;
    },
  },
});

export const { ShowErrorAction, HideErrorAction } = AlertSlice.actions;

export default AlertSlice.reducer;
