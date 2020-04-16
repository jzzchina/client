import axios from 'axios';

var instance = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock/161631/api',
  timeout: 3000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${apiToken}`,
    }
});

//Show Loading 
instance.interceptors.request.use((config)=>{
 
//   store.dispatch(actions.showLoading(true))
  return config;
})

//Hide Loading
instance.interceptors.response.use(
  (response)=>{
    // store.dispatch(actions.showLoading(false))
    return response;
  },
  (error)=>{
    return Promise.reject(error);
  }
)


/**
 * get request
 */
var get = function(url, params) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
/**
 * post request
 */
var post = function(url, data) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data)
      .then(res => {
        //console.log(res);
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default { get, post };