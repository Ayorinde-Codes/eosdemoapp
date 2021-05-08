import http from "./common/http-common";

const user = (config =null) => {
    
    return http.get("/user/show", config);
};

const getAll = () => {
  return http.get("/allUsers");
};
  
const block = (data) => {
  return http.post(`/block/${data}`);
};

const unblock = (data) => {
  return http.post(`/unblock/${data}`);
};

const approve = (data) => {
  return http.post(`/approve/${data}`);
};

const unapprove = (data) => {
  return http.post(`/unapprove/${data}`);
};

const kycUpload = (data, config= null) => {
  return http.post(`/kyc/`, data, config);
};


const getCurrentUser = () => {
  const config = {
    headers: {
      Authorization : 'Bearer '+ localStorage.getItem('token')
    }
  }
  return http.get(`/user`, config)
};

  export default {
    user,
    getAll,
    block,
    unblock,
    approve,
    unapprove,
    kycUpload,
    getCurrentUser
  };