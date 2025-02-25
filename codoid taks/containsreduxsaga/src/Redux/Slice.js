import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "LoginData",
  initialState: {
    UserData: [],
    error: "",
  },
  reducers: {
    getUserAction: (state, payload) => {
      state.error = "";
      state.UserData = [];
    },
    getUserSuccessAction: (state, action) => {
      state.UserData = action.payload;
    },
    getUserErrorAction: (state, action) => {
      state.error = action.payload;
    },
  },
});

const RegisterFormSlice = createSlice({
  name: "RegisterFormList",
  initialState: {
    RegisterFormData: [],
    error: "",
  },
  reducers: {
    getRegisterForm: (state, action) => {
      state.error = "";
      state.RegisterFormData = [];
    },
    getRegisterFormSuccessAction: (state, action) => {
      state.RegisterFormData = action.payload;
    },
    getRegisterFormErrorAction: (state, action) => {
      state.error = action.payload;
    },
  },
});

const SignUpRoleSlice = createSlice({
  name: "SignUpRoleList",
  initialState: {
    SignUpRoleData: [],
    error: "",
  },
  reducers: {
    getSignUpRoleAction: (state, action) => {
      state.error = "";
      state.SignUpRoleData = [];
    },
    getSignUpRoleSuccessAction: (state, action) => {
      state.SignUpRoleData = action.payload;
    },
    getSignUpRoleErrorAction: (state, action) => {
      state.error = action.payload;
    },
  },
});

const JobDetailsSlice = createSlice({
  name: "JobDetailsList",
  initialState: {
    JobDetailsData: [],
    error: "",
  },
  reducers: {
    getJobDetailsAction: (state, action) => {
      state.error = "";
      state.JobDetailsData = [];
    },
    getJobDetailsSuccessAction: (state, action) => {
      state.JobDetailsData = action.payload;
    },
    getJobDetailsErrorAction: (state, action) => {
      state.error = action.payload;
    },
  },
});

const HrJobDetailsSlice = createSlice({
  name: "HrJobDetailsList",
  initialState: {
    HrJobDetailsData: [],
    error: "",
  },
  reducers: {
    getHrJobDetailsAction: (state, action) => {
      state.error = "";
      state.HrJobDetailsData = [];
    },
    getHrJobDetailsSuccessAction: (state, action) => {
      state.HrJobDetailsData = action.payload;
    },
    getHrJobDetailsErrorAction: (state, action) => {
      state.error = action.payload;
    },
  },
});

const JobCreateSlice = createSlice({
  name: "JobCreateList",
  initialState: {
    JobCreateData: [],
    error: "",
  },
  reducers: {
    getJobCreateAction: (state, action) => {
      console.log(action.payload, "rrrr");
      state.error = "";
      state.JobCreateData = [];
    },
    jobCreatedSuccessAction: (state, action) => {
      state.JobCreateData = action.payload;
    },
    jobCreatedErrorAction: (state, action) => {
      state.error = action.payload;
    },
  },
});

const JobEditedSlice = createSlice({
  name: "JobEditList",
  initialState: {
    JobEditData: [],
    error: "",
  },
  reducers: {
    getJobEditedAction: (state, action) => {
      console.log(action.payload, "rrrr");
      state.error = "";
      state.JobEditData = [];
    },
    jobEditedSuccessAction: (state, action) => {
      state.JobEditData = action.payload;
    },
    jobEditedErrorAction: (state, action) => {
      state.error = action.payload;
    },
  },
});

const JobRetriveSlice = createSlice({
  name: "JobRetriveList",
  initialState: {
    JobRetriveData: [],
    error: "",
  },
  reducers: {
    getJobRetriveAction: (state, action) => {
      console.log(action.payload, "rrrr");
      state.error = "";
      state.JobRetriveData = [];
    },
    getJobRetriveSuccessAction: (state, action) => {
      state.JobRetriveData = action.payload;
    },
    getJobRetriveErrorAction: (state, action) => {
      state.error = action.payload;
    },
  },
});

const UserJobApplySlice = createSlice({
  name: "UserJobApplyList",
  initialState: {
    UserJobApplyData: [],
    error: "",
  },
  reducers: {
    userJobApplyAction: (state, action) => {
      console.log(action.payload, "sep18");
      state.error = "";
      state.UserJobApplyData = [];
    },
    userJobApplySuccessAction: (state, action) => {
      state.UserJobApplyData = action.payload;
    },
    userJobApplyErrorAction: (state, action) => {
      state.error = action.payload;
    },
  },
});

const AppliedJobsCountSlice = createSlice({
  name: "AppliedJobsCountList",
  initialState: {
    AppliedJobsCountData: [],
    error: "",
  },
  reducers: {
    getAppliedJobsCount: (state, action) => {
      console.log(action.payload, "rrrr");
      state.error = "";
      state.AppliedJobsCountData = [];
    },
    appliedCountsSuccessAction: (state, action) => {
      state.AppliedJobsCountData = action.payload;
    },
    appliedCountsErrorAction: (state, action) => {
      state.error = action.payload;
    },
  },
});

const JobDetailsUserIdSlice = createSlice({
  name: "JobDetailsByUserIdList",
  initialState: {
    JobDetailsByUserIdData: [],
    error: "",
  },
  reducers: {
    getJobDetailsUserIdAction: (state, action) => {
      console.log(action.payload, "rrrr");
      state.error = "";
      state.JobDetailsByUserIdData = [];
    },
    getJobDetailsUserIdSuccessAction: (state, action) => {
      state.JobDetailsByUserIdData = action.payload;
    },
    getJobDetailsUserIdErrorAction: (state, action) => {
      state.error = action.payload;
    },
  },
});

const SignupVerify = createSlice({
  name: "signupverify",
  initialState: {
    SignupVerifyData: [],
    error: "",
  },
  reducers: {
    getSignupVerifyAction: (state, action) => {
      state.SignupVerifyData = [];
      state.error = "";
    },
    getSignupVerifySuccessAction: (state, action) => {
      state.SignupVerifyData = action.payload;
    },
    getSignupVerifyErrorAction: (state, action) => {
      state.error = action.payload;
    },
    getSignupVerifyEmptyAction: (state, action) => {
      state.SignupVerifyData = action.payload;
    },
  },
});

const Signupotpsend = createSlice({
  name: "otpsend",
  initialState: {
    SignupotpsendData: [],
    error: "",
  },
  reducers: {
    getSignupotpsendAction: (state, action) => {
      state.SignupotpsendData = [];
      state.error = "";
    },
    getSignupotpsendSuccessAction: (state, action) => {
      state.SignupotpsendData = action.payload;
    },
    getSignupotpsendErrorAction: (state, action) => {
      state.error = action.payload;
    },
    getSignupotpsendEmptyAction: (state, action) => {
      state.SignupotpsendData = action.payload;
    },
  },
});

const OtpVerify = createSlice({
  name: "otpverify",
  initialState: {
    OtpVerifyData: [],
    error: "",
  },
  reducers: {
    getOtpVerifyAction: (state, action) => {
      state.OtpVerifyData = [];
      state.error = "";
    },
    getOtpVerifySuccessAction: (state, action) => {
      state.OtpVerifyData = action.payload;
    },
    getOtpVerifyErrorAction: (state, action) => {
      state.error = action.payload;
    },
    getOtpVerifyEmptyAction: (state, action) => {
      state.OtpVerifyData = action.payload;
    },
  },
});
//superadmin
const AllJobAdmin = createSlice({
  name: "AllJobAdmin",
  initialState: {
    AllJobAdminData: [],
    error: "",
  },
  reducers: {
    getAllJobAdminAction: (state, action) => {
      state.AllJobAdminData = [];
      state.error = "";
    },
    getAllJobAdminSuccessAction: (state, action) => {
      state.AllJobAdminData = action.payload;
    },
    getAllJobAdminErrorAction: (state, action) => {
      state.error = action.payload;
    },
    getAllJobAdminEmptyAction: (state, action) => {
      state.AllJobAdminData = action.payload;
    },
  },
});

const AllJobAdminRetrive = createSlice({
  name: "AllJobAdminRetrive",
  initialState: {
    AllJobAdminRetriveData: [],
    error: "",
  },
  reducers: {
    getAllJobAdminRetriveAction: (state, action) => {
      state.AllJobAdminRetriveData = [];
      state.error = "";
    },
    getAllJobAdminRetriveSuccessAction: (state, action) => {
      state.AllJobAdminRetriveData = action.payload;
    },
    getAllJobAdminRetriveErrorAction: (state, action) => {
      state.error = action.payload;
    },
    getAllJobAdminRetriveEmptyAction: (state, action) => {
      state.AllJobAdminRetriveData = action.payload;
    },
  },
});

const UserDetailsAdmin = createSlice({
  name: "UserDetailsAdmin",
  initialState: {
    UserDetailsAdminData: [],
    error: "",
  },
  reducers: {
    getUserDetailsAdminAction: (state, action) => {
      state.UserDetailsAdminData = [];
      state.error = "";
    },
    getUserDetailsAdminSuccessAction: (state, action) => {
      state.UserDetailsAdminData = action.payload;
    },
    getUserDetailsAdminErrorAction: (state, action) => {
      state.error = action.payload;
    },
    getUserDetailsAdminEmptyAction: (state, action) => {
      state.UserDetailsAdminData = action.payload;
    },
  },
});

const JobApplyAdmin = createSlice({
  name: "Adminjobapply",
  initialState: {
    JobApplyAdminData: [],
    error: "",
  },
  reducers: {
    getJobApplyAdminAction: (state, action) => {
      state.JobApplyAdminData = [];
      state.error = "";
    },
    getJobApplyAdminSuccessAction: (state, action) => {
      state.JobApplyAdminData = action.payload;
    },
    getJobApplyAdminErrorAction: (state, action) => {
      state.error = action.payload;
    },
    getJobApplyAdminEmptyAction: (state, action) => {
      state.JobApplyAdminData = action.payload;
    },
  },
});

const UserEdit = createSlice({
  name: "UserEdit",
  initialState: {
    UserEditData: [],
    error: "",
  },
  reducers: {
    getUserEditAction: (state, action) => {
      state.UserEditData = [];
      state.error = "";
    },
    getUserEditSuccessAction: (state, action) => {
      state.UserEditData = action.payload;
    },
    getUserEditErrorAction: (state, action) => {
      state.error = action.payload;
    },
    getUserEditEmptyAction: (state, action) => {
      state.UserEditData = action.payload;
    },
  },
});

const UserGet = createSlice({
  name: "UserGet",
  initialState: {
    UserGetData: [],
    error: "",
  },
  reducers: {
    getUserGetAction: (state, action) => {
      state.UserGetData = [];
      state.error = "";
    },
    getUserGetSuccessAction: (state, action) => {
      state.UserGetData = action.payload;
    },
    getUserGetErrorAction: (state, action) => {
      state.error = action.payload;
    },
    getUserGetEmptyAction: (state, action) => {
      state.UserGetData = action.payload;
    },
  },
});
const Stateid = createSlice({
  name: "IdData",
  initialState: {
    jobid: "",
    applicantid: "",
    hrid: "",
    popupalert: false,
    otpid: "",
    adminjobid: "",
    appliedid: "",
  },
  reducers: {
    jobid: (state, payload) => {
      console.log(payload, "lklk");
      state.jobid = payload;
    },
    applicantid: (state, payload) => {
      state.applicantid = payload;
      console.log(payload, "appp");
    },
    hrid: (state, payload) => {
      state.hrid = payload;
      console.log(payload, "hhii");
    },
    popupalert: (state, payload) => {
      state.popupalert = payload;
    },
    otpid: (state, payload) => {
      state.otpid = payload;
    },
    adminjobid: (state, payload) => {
      state.adminjobid = payload;
    },
    appliedid: (state, payload) => {
      state.appliedid = payload;
    },
  },
});

export const { getUserAction, getUserSuccessAction, getUserErrorAction } = usersSlice.actions;

export const { getSignUpRoleAction, getSignUpRoleSuccessAction, getSignUpRoleErrorAction } =
  SignUpRoleSlice.actions;

export const { getRegisterForm, getRegisterFormSuccessAction, getRegisterFormErrorAction } =
  RegisterFormSlice.actions;

export const { getJobDetailsAction, getJobDetailsSuccessAction, getJobDetailsErrorAction } =
  JobDetailsSlice.actions;

export const { getHrJobDetailsAction, getHrJobDetailsSuccessAction, getHrJobDetailsErrorAction } =
  HrJobDetailsSlice.actions;

export const { getJobCreateAction, jobCreatedSuccessAction, jobCreatedErrorAction } =
  JobCreateSlice.actions;

export const { getJobEditedAction, jobEditedSuccessAction, jobEditedErrorAction } =
  JobEditedSlice.actions;

export const { getJobRetriveAction, getJobRetriveSuccessAction, getJobRetriveErrorAction } =
  JobRetriveSlice.actions;

export const { getAppliedJobsCount, appliedCountsSuccessAction, appliedCountsErrorAction } =
  AppliedJobsCountSlice.actions;

export const {
  getJobDetailsUserIdAction,
  getJobDetailsUserIdSuccessAction,
  getJobDetailsUserIdErrorAction,
} = JobDetailsUserIdSlice.actions;

export const { userJobApplyAction, userJobApplySuccessAction, userJobApplyErrorAction } =
  UserJobApplySlice.actions;

export const {
  getSignupVerifyAction,
  getSignupVerifySuccessAction,
  getSignupVerifyErrorAction,
  getSignupVerifyEmptyAction,
} = SignupVerify.actions;

export const {
  getSignupotpsendAction,
  getSignupotpsendSuccessAction,
  getSignupotpsendErrorAction,
  getSignupotpsendEmptyAction,
} = Signupotpsend.actions;

export const {
  getOtpVerifyAction,
  getOtpVerifySuccessAction,
  getOtpVerifyErrorAction,
  getOtpVerifyEmptyAction,
} = OtpVerify.actions;

export const {
  getAllJobAdminAction,
  getAllJobAdminSuccessAction,
  getAllJobAdminErrorAction,
  getAllJobAdminEmptyAction,
} = AllJobAdmin.actions;

export const {
  getAllJobAdminRetriveAction,
  getAllJobAdminRetriveSuccessAction,
  getAllJobAdminRetriveErrorAction,
  getAllJobAdminRetriveEmptyAction,
} = AllJobAdminRetrive.actions;

export const {
  getUserDetailsAdminAction,
  getUserDetailsAdminSuccessAction,
  getUserDetailsAdminErrorAction,
  getUserDetailsAdminEmptyAction,
} = UserDetailsAdmin.actions;

export const {
  getJobApplyAdminAction,
  getJobApplyAdminSuccessAction,
  getJobApplyAdminErrorAction,
  getJobApplyAdminEmptyAction,
} = JobApplyAdmin.actions;

export const {
  getUserEditAction,
  getUserEditSuccessAction,
  getUserEditErrorAction,
  getUserEditEmptyAction,
} = UserEdit.actions;

export const {
  getUserGetAction,
  getUserGetSuccessAction,
  getUserGetErrorAction,
  getUserGetEmptyAction,
} = UserGet.actions;

export const { jobid, applicantid, hrid, popupalert, otpid, adminjobid, appliedid } =
  Stateid.actions;

export default {
  IdReducer: Stateid.reducer,
  userDataReducer: usersSlice.reducer,
  RegisterFormReducer: RegisterFormSlice.reducer,
  SignUpRoleReducer: SignUpRoleSlice.reducer,
  JobDetailsReducer: JobDetailsSlice.reducer,
  UserJobApplySliceReducer: UserJobApplySlice.reducer,
  HrJobDetailsReducer: HrJobDetailsSlice.reducer,
  JobCreateReducer: JobCreateSlice.reducer,
  JobRetriveReducer: JobRetriveSlice.reducer,
  JobEditedReducer: JobEditedSlice.reducer,
  AppliedJobsCountReducer: AppliedJobsCountSlice.reducer,
  JobDetailsUserIdReducer: JobDetailsUserIdSlice.reducer,
  SignupVerifyReducer: SignupVerify.reducer,
  SignupotpsendReducer: Signupotpsend.reducer,
  OtpVerifyReducer: OtpVerify.reducer,
  AllJobAdminReduer: AllJobAdmin.reducer,
  AllJobAdminRetriveReducer: AllJobAdminRetrive.reducer,
  UserDetailsAdminReducer: UserDetailsAdmin.reducer,
  JobApplyAdminReducer: JobApplyAdmin.reducer,
  UserEditReducer: UserEdit.reducer,
  UserGetReducer: UserGet.reducer,
};
