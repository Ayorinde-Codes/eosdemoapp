import http from "./common/http-common";

const login = data => {

  return http.post("/login", data);
};

const signup = data => {

  return http.post("/register", data);
};

const forgot = data => {
  return http.post("/forgot", data)
}


const updatepassword = (data, config=null )=> {
  return http.post("/updatePassword", data, config)
}

const reset = data => {
  return http.post("/reset", data)
}

const transactions = () => {
  return http.get("/transaction/index")
}

const selftransactions = (config =null) => {
  return http.get("/transaction/self/", config)
}
const singletransaction = (id) => {
  return http.get(`/transaction/get/${id}`)
}

const initiate_transaction = (data, config =null) => {
  return http.post("/transaction/initiate/", data, config)

}

const updatePayment = (data, config =null) => {

  return http.post("/transaction/updatePayment/", data, config)
}

const updateArtisan = (data, config =null) => {

  return http.post("/artisan/information", data, config)
}

const updateUsers = (data, config =null) => {

  return http.post("/user/information", data, config)
}

const profilePicture = (data, config =null) => {

  return http.post("/profilepicture", data, config)
}

const updateProfilePicture = (data, config =null) => {

  return http.post("/profilepicture/update", data, config)
}

const topSearch = () => {

  return http.get("/topsearch")
}

const sendBroadcast = (data) => {
    
  return http.post("/send-bulk-mail", data);
};

const getLocations =() => {
  return http.get("/locations");
}

const getHandworks =() => {
  return http.get("/handwork");
}

const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};

export default {
  login,
  signup,
  forgot,
  reset,
  transactions,
  singletransaction,
  selftransactions,
  initiate_transaction,
  updatePayment,
  updatepassword,
  updateArtisan,
  profilePicture,
  updateProfilePicture,
  updateUsers,
  topSearch,
  sendBroadcast,
  getLocations,
  getHandworks,
  findByTitle
};