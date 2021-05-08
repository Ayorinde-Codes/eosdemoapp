import http from "./common/http-common";


const getAll = () => {
  return http.get("/artisans");
};

const getArtisan = (data) => {
    return http.get(`/viewUser/${data}`);
};

const block = (data) => {
  return http.post(`/block/${data}`);
};

const unblock = (data) => {
  return http.post(`/unblock/${data}`);
};

const confirmorder= (data, config= null) => {
  return http.post('/confirmorder',data, config);
}

const getArtisanOffers = (config=null) => {
  return http.get(`/offers/`, config);
};

const searchArtisan = (data) => {
  return http.post(`/search`, data)
}


  export default {
    getAll,
    getArtisan,
    block,
    unblock,
    confirmorder,
    getArtisanOffers,
    searchArtisan,
  };