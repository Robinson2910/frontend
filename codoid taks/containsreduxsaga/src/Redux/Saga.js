// import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { put, takeEvery, takeLatest } from "redux-saga/effects";
import { sagaActions } from "./Action";
import { ToastContainer, toast } from "react-toastify";
import {
  getUserErrorAction,
  getUserSuccessAction,
  getRegisterFormSuccessAction,
  getRegisterFormErrorAction,
  getJobDetailsSuccessAction,
  getJobDetailsErrorAction,
  userJobApplySuccessAction,
  userJobApplyErrorAction,
  getSignUpRoleSuccessAction,
  getSignUpRoleErrorAction,
  getHrJobDetailsSuccessAction,
  getHrJobDetailsErrorAction,
  jobCreatedSuccessAction,
  jobCreatedErrorAction,
  jobEditedSuccessAction,
  jobEditedErrorAction,
  getJobRetriveSuccessAction,
  getJobRetriveErrorAction,
  appliedCountsSuccessAction,
  appliedCountsErrorAction,
  getHrJobDetailsAction,
  getJobDetailsUserIdSuccessAction,
  getJobDetailsUserIdErrorAction,
  getSignupVerifySuccessAction,
  getSignupVerifyErrorAction,
  getSignupotpsendSuccessAction,
  getSignupotpsendErrorAction,
  getOtpVerifySuccessAction,
  getOtpVerifyErrorAction,
  getAllJobAdminSuccessAction,
  getAllJobAdminErrorAction,
  getAllJobAdminRetriveSuccessAction,
  getAllJobAdminRetriveErrorAction,
  getUserDetailsAdminSuccessAction,
  getUserDetailsAdminErrorAction,
  getJobApplyAdminSuccessAction,
  getJobApplyAdminErrorAction,
  getUserEditSuccessAction,
  getUserEditErrorAction,
  getUserGetSuccessAction,
  getUserGetErrorAction,
} from "./Slice";
import { store } from "./Store";
import { getLoaderAction } from "./LoaderSlice";
import { ShowErrorAction } from "./AlertSlice";
import {
  UserLoginApi,
  RegisterApi,
  SignUpRoleApi,
  GetJobDetails,
  GetAllJobDetailsStatus,
  UserApplyJob,
  HrJobList,
  JobCreated,
  AppliedJobList,
  JobEditApi,
  HrJobRetrive,
  JobDetailsUserId,
  signupverify,
  otpsend,
  otpverify,
  alljobdetails,
  userdetails,
  jobapply,
} from "../text/apidata";

// Generator function
// LOGIN
function* getUserSaga(payload) {
  try {
    // yield put(getLoaderAction(true));
    const response = yield axios({
      method: "post",
      url: UserLoginApi,
      data: payload.payload,
    });

    yield put(getUserSuccessAction(response.data));
    yield put(getLoaderAction(true));
    localStorage.setItem("token", response.data.session.token);
    localStorage.setItem("login_id", response.data.data.id);

    console.log("ttttt", response.data);
    //debugger;
    sessionStorage.setItem("tokensession", response.data.session.token);
    localStorage.setItem("login", "true");
    // window.location.href = "/";
  } catch (error) {
    yield put(getUserErrorAction(error));
    yield put(getLoaderAction(false));
    error.response.data.status.show = false;
    yield put(ShowErrorAction(error.response.data.status));
  }
}

// register form
function* RegisterForm(payload) {
  console.log(payload, "posting");

  try {
    yield put(getLoaderAction(true));
    // debugger
    const response = yield axios({
      method: "post",
      url: RegisterApi,
      data: payload.payload,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    yield put(getRegisterFormSuccessAction(response.data));
    console.log(response.data, "sign up");
    yield put(getLoaderAction(false));

    toast.success("Profile Created Successfully.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    window.location.href = "/";
  } catch (error) {
    // debugger
    yield put(getRegisterFormErrorAction(error));
    yield put(getLoaderAction(false));
    yield put(ShowErrorAction(error.response.data.status));
  }
}

// signup role api

// hr details
function* getSignUpRoleData() {
  try {
    yield put(getLoaderAction(true));
    const response = yield axios({
      method: "get",
      url: SignUpRoleApi,
      headers: {
        Authorization: "Bearer " + store.getState().LoginData.UserData.session.token,
      },
    });
    console.log(response);

    yield put(getSignUpRoleSuccessAction(response.data));
    yield put(getLoaderAction(false));
  } catch (error) {
    console.log(error);
    yield put(getSignUpRoleErrorAction(error));
    yield put(getLoaderAction(false));
    yield put(ShowErrorAction(error.response.data.status));
  }
}

// hr job list
function* getHrJobDetailsData() {
  // console.log(payload, "ididid");
  try {
    yield put(getLoaderAction(true));
    // Retrieve login_id from local storage
    const loginId = localStorage.getItem("login_id");

    const response = yield axios({
      method: "get",
      url: HrJobList + loginId,
      headers: {
        Authorization: "Bearer " + store.getState().LoginData.UserData.session.token,
      },
    });
    yield put(getHrJobDetailsSuccessAction(response.data));
    yield put(getLoaderAction(false));
  } catch (error) {
    console.log(error);
    yield put(getHrJobDetailsErrorAction(error));
    yield put(getLoaderAction(false));
    yield put(ShowErrorAction(error.response.data.status));
  }
}

// job details
function* getJobDetailsData(payload) {
  console.log(payload.payload, "dtae");
  try {
    yield put(getLoaderAction(true));

    const loginId = localStorage.getItem("login_id");
    const response = yield axios({
      method: "get",
      // url: GetJobDetails,
      url: GetAllJobDetailsStatus + loginId,
      headers: {
        Authorization: "Bearer " + store.getState().LoginData.UserData.session.token,
      },
    });
    yield put(getJobDetailsSuccessAction(response.data));
    yield put(getLoaderAction(false));
  } catch (error) {
    console.log(error);
    yield put(getJobDetailsErrorAction(error));
    yield put(getLoaderAction(false));
    yield put(ShowErrorAction(error.response.data.status));
  }
}

// job created
function* hrJobCreated(payload) {
  try {
    yield put(getLoaderAction(true));
    console.log(payload.payload, "qwerty main");

    const response = yield axios({
      method: "post",
      url: JobCreated,
      data: payload.payload,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + store.getState().LoginData.UserData.session.token,
      },
    });
    yield put(jobCreatedSuccessAction(response.data.data));
    console.log(response.data.data, "down");
    yield put(getLoaderAction(false));
    // debugger

    toast.success("Job Created Successfully.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    window.location.href = "/";
  } catch (error) {
    //debugger;
    yield put(jobCreatedErrorAction(error));
    yield put(getLoaderAction(false));
    yield put(ShowErrorAction(error.response.data.status));
  }
}

// job retrive
function* getJobRetriveData(payload) {
  console.log(payload.payload.payload.job_id, "editpay");

  try {
    yield put(getLoaderAction(true));
    const response = yield axios({
      method: "get",
      url: HrJobRetrive + payload.payload.payload.job_id,
      headers: {
        Authorization: "Bearer " + store.getState().LoginData.UserData.session.token,
      },
    });
    yield put(getJobRetriveSuccessAction(response.data.data));
    console.log(response.data.data, "qwer");
    yield put(getLoaderAction(false));
  } catch (error) {
    console.log(error);
    yield put(getJobRetriveErrorAction(error));
    yield put(getLoaderAction(false));
    yield put(ShowErrorAction(error.response.data.status));
  }
}

// job edit
function* hrJobEdited(payload) {
  // debugger;
  try {
    yield put(getLoaderAction(true));

    // console.log(payload.payload, "lll")
    const response = yield axios({
      method: "put",
      url: JobEditApi + payload.payload.id + "/",
      data: payload.payload.pay,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + store.getState().LoginData.UserData.session.token,
      },
    });
    yield put(jobEditedSuccessAction(response.data.data));
    // console.log(response.data.data, "down");
    yield put(getHrJobDetailsAction());
    yield put(getLoaderAction(false));
    // debugger

    toast.success("Job Edited Successfully.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    window.location.href = "/";
  } catch (error) {
    //debugger;
    yield put(jobEditedErrorAction(error));
    yield put(getLoaderAction(false));
    yield put(ShowErrorAction(error.response.data.status));
  }
}

// user job apply
function* userJobApply(payload) {
  //debugger;
  try {
    yield put(getLoaderAction(true));
    console.log(payload.payload, "qwerty main2");

    const response = yield axios({
      method: "post",
      url: UserApplyJob,
      data: payload.payload,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + store.getState().LoginData.UserData.session.token,
      },
    });
    yield put(userJobApplySuccessAction(response.data.data));
    console.log(response.data.data, "down2");
    yield put(getLoaderAction(false));
    // debugger

    toast.success("Job Applied Successfully.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    window.location.href = "/";
  } catch (error) {
    //debugger;
    yield put(userJobApplyErrorAction(error));
    yield put(getLoaderAction(false));
    yield put(ShowErrorAction(error.response.data.status));
  }
}

// applied counts
function* appliedCounts(payload) {
  //debugger;
  try {
    yield put(getLoaderAction(true));
    // console.log(payload.payload, "app cou");

    const response = yield axios({
      method: "post",
      url: AppliedJobList,
      data: { applied_id: payload.payload },
      // data: payload.payload,
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + store.getState().LoginData.UserData.session.token,
      },
    });
    yield put(appliedCountsSuccessAction(response.data.data));
    console.log(response.data.data, "apply-id");
    yield put(getLoaderAction(false));
    //debugger;
  } catch (error) {
    //debugger;
    yield put(appliedCountsErrorAction(error));
    yield put(getLoaderAction(false));
    yield put(ShowErrorAction(error.response.data.status));
  }
}

// job details by user id
function* getJobDetailsUserIdData() {
  try {
    yield put(getLoaderAction(true));
    const loginId = localStorage.getItem("login_id");
    const response = yield axios({
      method: "get",
      url: JobDetailsUserId + loginId,
      headers: {
        Authorization: "Bearer " + store.getState().LoginData.UserData.session.token,
      },
    });
    yield put(getJobDetailsUserIdSuccessAction(response.data));
    yield put(getLoaderAction(false));
  } catch (error) {
    console.log(error);
    yield put(getJobDetailsUserIdErrorAction(error));
    yield put(getLoaderAction(false));
    yield put(ShowErrorAction(error.response.data.status));
  }
}

function* getSignUpVerify(payload) {
  try {
    yield put(getLoaderAction(true));
    const response = yield axios({
      method: "post",
      url: signupverify,
      data: payload.payload.data,
    });

    yield put(getSignupVerifySuccessAction(response.data));
    yield put(getLoaderAction(false));
  } catch (error) {
    console.log(error);
    yield put(getSignupVerifyErrorAction(error.response.data));
    yield put(getLoaderAction(false));
    // yield put(ShowErrorAction(error.response.data.status));
  }
}

function* getSignUpOtpsend(payload) {
  try {
    yield put(getLoaderAction(true));
    const response = yield axios({
      method: "post",
      url: otpsend,
      data: payload.payload,
    });

    yield put(getSignupotpsendSuccessAction(response.data));
    yield put(getLoaderAction(false));
  } catch (error) {
    console.log(error);
    yield put(getSignupotpsendErrorAction(error.response.data));
    yield put(getLoaderAction(false));
    // yield put(ShowErrorAction(error.response.data.status));
  }
}

function* getotpverify(payload) {
  console.log(payload.payload);
  try {
    yield put(getLoaderAction(true));
    const response = yield axios({
      method: "put",
      url: otpverify,
      data: payload.payload.data,
    });

    yield put(getOtpVerifySuccessAction(response.data));
    yield put(getLoaderAction(false));
  } catch (error) {
    console.log(error);
    yield put(getOtpVerifyErrorAction(error.response.data));
    yield put(getLoaderAction(false));
    yield put(ShowErrorAction(error.response.data.status));
  }
}

//superadmin
function* getalljobadmin(payload) {
  try {
    yield put(getLoaderAction(true));
    const response = yield axios({
      method: "get",
      url: alljobdetails,
      headers: {
        Authorization: "Bearer " + store.getState().LoginData.UserData.session.token,
      },
    });

    yield put(getAllJobAdminSuccessAction(response.data));
    yield put(getLoaderAction(false));
  } catch (error) {
    console.log(error);
    yield put(getAllJobAdminErrorAction(error.response.data));
    yield put(getLoaderAction(false));
    yield put(ShowErrorAction(error.response.data.status));
  }
}

function* getalljobadminid(payload) {
  try {
    yield put(getLoaderAction(true));
    const response = yield axios({
      method: "get",
      url: alljobdetails + payload.payload.id + "/",
      headers: {
        Authorization: "Bearer " + store.getState().LoginData.UserData.session.token,
      },
    });

    yield put(getAllJobAdminRetriveSuccessAction(response.data));
    yield put(getLoaderAction(false));
  } catch (error) {
    console.log(error);
    yield put(getAllJobAdminRetriveErrorAction(error.response.data));
    yield put(getLoaderAction(false));
    yield put(ShowErrorAction(error.response.data.status));
  }
}

function* getuserdetailsadmin(payload) {
  try {
    yield put(getLoaderAction(true));
    const response = yield axios({
      method: "get",
      url: userdetails + payload.payload.id + "/",
      headers: {
        Authorization: "Bearer " + store.getState().LoginData.UserData.session.token,
      },
    });

    yield put(getUserDetailsAdminSuccessAction(response.data));
    yield put(getLoaderAction(false));
  } catch (error) {
    console.log(error);
    yield put(getUserDetailsAdminErrorAction(error.response.data));
    yield put(getLoaderAction(false));
    yield put(ShowErrorAction(error.response.data.status));
  }
}

function* getjobapplyadmin(payload) {
  console.log(payload.payload);
  try {
    yield put(getLoaderAction(true));
    const response = yield axios({
      method: "post",
      url: jobapply,
      headers: {
        Authorization: "Bearer " + store.getState().LoginData.UserData.session.token,
      },
      data: payload.payload,
    });

    yield put(getJobApplyAdminSuccessAction(response.data));
    yield put(getLoaderAction(false));
  } catch (error) {
    console.log(error);
    yield put(getJobApplyAdminErrorAction(error.response.data));
    yield put(getLoaderAction(false));
    yield put(ShowErrorAction(error.response.data.status));
  }
}

function* useredit(payload) {
  console.log(payload.payload);
  try {
    yield put(getLoaderAction(true));
    const response = yield axios({
      method: "put",
      url: SignUpRoleApi + payload.payload.id + "/",
      headers: {
        Authorization: "Bearer " + store.getState().LoginData.UserData.session.token,
      },
      data: payload.payload.data,
    });

    yield put(getUserEditSuccessAction(response.data));
    yield put(getLoaderAction(false));
  } catch (error) {
    console.log(error);
    yield put(getUserEditErrorAction(error.response.data));
    yield put(getLoaderAction(false));
    yield put(ShowErrorAction(error.response.data.status));
  }
}

function* userget(payload) {
  console.log(payload.payload);
  try {
    yield put(getLoaderAction(true));
    const response = yield axios({
      method: "get",
      url: SignUpRoleApi + payload.payload.id + "/",
      headers: {
        Authorization: "Bearer " + store.getState().LoginData.UserData.session.token,
      },
    });

    yield put(getUserGetSuccessAction(response.data));
    yield put(getLoaderAction(false));
  } catch (error) {
    console.log(error);
    yield put(getUserGetErrorAction(error.response.data));
    yield put(getLoaderAction(false));
    yield put(ShowErrorAction(error.response.data.status));
  }
}
// Generator function
// LOGIN
function* watchGetUser() {
  yield takeLatest(sagaActions.FETCH_DATA_SAGA + "/getUserAction", getUserSaga);

  yield takeLatest(sagaActions.FETCH_REGISTER_FORM + "/getRegisterForm", RegisterForm);

  yield takeLatest(sagaActions.FETCH_SIGNUP_ROLE_SAGA + "/getSignUpRoleAction", getSignUpRoleData);

  yield takeLatest(sagaActions.FETCH_JOB_DETAILS_DATA + "/getJobDetailsAction", getJobDetailsData);

  yield takeLatest(sagaActions.FETCH_HR_JOB_LIST + "/getHrJobDetailsAction", getHrJobDetailsData);

  yield takeLatest(
    sagaActions.FETCH_POST_USER_JOB_APPLY_DATA + "/userJobApplyAction",
    userJobApply
  );

  yield takeLatest(sagaActions.FETCH_POST_JOB_CREATE_DATA + "/getJobCreateAction", hrJobCreated);

  yield takeLatest(sagaActions.FETCH_JOB_RETRIVE_DATA + "/getJobRetriveAction", getJobRetriveData);

  yield takeLatest(sagaActions.FETCH_POST_JOB_EDIT_DATA + "/getJobEditedAction", hrJobEdited);

  yield takeLatest(sagaActions.FETCH_APPLIED_JOBS_COUNT + "/getAppliedJobsCount", appliedCounts);

  yield takeLatest(
    sagaActions.FETCH_JOBDETAILS_USERID + "/getJobDetailsUserIdAction",
    getJobDetailsUserIdData
  );

  yield takeLatest(sagaActions.FETCH_SIGNUPVERIFY + "/getSignupVerifyAction", getSignUpVerify);

  yield takeLatest(sagaActions.FETCH_OTPSEND + "/getSignupotpsendAction", getSignUpOtpsend);

  yield takeLatest(sagaActions.FETCH_OTPVERIFY + "/getOtpVerifyAction", getotpverify);

  yield takeLatest(sagaActions.FETCH_ALLJOBADMIN + "/getAllJobAdminAction", getalljobadmin);

  yield takeLatest(
    sagaActions.FETCH_ALLJOBADMINID + "/getAllJobAdminRetriveAction",
    getalljobadminid
  );

  yield takeLatest(
    sagaActions.FETCH_USERDETAILS + "/getUserDetailsAdminAction",
    getuserdetailsadmin
  );

  yield takeLatest(sagaActions.FETCH_JOBAPPLY + "/getJobApplyAdminAction", getjobapplyadmin);

  yield takeLatest(sagaActions.FETCH_USEREDIT + "/getUserEditAction", useredit);

  yield takeLatest(sagaActions.FETCH_USERGET + "/getUserGetAction", userget);
}
export default watchGetUser;
