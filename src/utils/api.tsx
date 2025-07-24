import axios from 'axios';

export async function postRequest({ url, auth = "", data } : { url:string, auth:string, data:any }) {
  return await axios.post(url, data, {
    headers: {
      'Authorization': auth,
      'Content-Type': 'application/json'
    }
  })
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (error) {
    console.error('Error fetching data: ', error);
    throw error;
  });
} 

export async function getRequest(url:string) {
  return await axios.get(url)
}