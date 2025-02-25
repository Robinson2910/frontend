// import { useReducer } from "react";
import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "./Slice";
// import  from './ProjectSlice';
import LoaderReducer from "./LoaderSlice";
import AlertReducer from "./AlertSlice";
// import { useReducer } from "react";

const rootReducer = combineReducers({
  LoginData: usersReducer.userDataReducer,
  IdData: usersReducer.IdReducer,
  Loader: LoaderReducer,
  Alert: AlertReducer,
  RegisterFormList: usersReducer.RegisterFormReducer,
  SignUpRoleList: usersReducer.SignUpRoleReducer,
  JobDetailsList: usersReducer.JobDetailsReducer,
  UserJobApplyList: usersReducer.UserJobApplySliceReducer,
  HrJobDetailsList: usersReducer.HrJobDetailsReducer,
  JobCreateList: usersReducer.JobCreateReducer,
  JobRetriveList: usersReducer.JobRetriveReducer,
  JobEditList: usersReducer.JobEditedReducer,
  AppliedJobsCountList: usersReducer.AppliedJobsCountReducer,
  JobDetailsByUserIdList: usersReducer.JobDetailsUserIdReducer,
  Signupverifydata:usersReducer.SignupVerifyReducer,
  Signupotpsenddata:usersReducer.SignupotpsendReducer,
  OtpVerifyData:usersReducer.OtpVerifyReducer,
  AllJobAdminData:usersReducer.AllJobAdminReduer,
  AllJobAdminRetriveData:usersReducer.AllJobAdminRetriveReducer,
  UserDetailsAdminData:usersReducer.UserDetailsAdminReducer,
  JobApplyAdminData:usersReducer.JobApplyAdminReducer,
  UserEditData:usersReducer.UserEditReducer,
  UserGetData:usersReducer.UserGetReducer

});

export default rootReducer;
