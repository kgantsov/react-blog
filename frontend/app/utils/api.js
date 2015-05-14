import axios from 'axios';


const HOST = 'http://0.0.0.0:8000/api/v1';

const get = (url) => {
  return axios({
      url: HOST + url
    }).then(function(res) {
      return res.data;
    });
};

const post = (url, data) => {
  return axios({
    method: 'post',
    data: data,
    url: HOST + url
  }).then(function(res) {
    return res.data;
  });
};

export default {get, post};
