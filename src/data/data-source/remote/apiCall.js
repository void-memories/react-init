import axios from "axios";

export async function postRequest(URI, params) {
  var response = axios
    .post(`https://api-codeclock.herokuapp.com/${URI}`,
      params);
  return response.data;
}

export async function postRequestLocal(URI, params) {
  var toReturn = await axios.post(URI,
    params);

  return toReturn.data;
}

export async function getRequest(URI) {
  const response = await axios
    .get(`https://api-codeclock.herokuapp.com/${URI}`,
  );

  return response.data;
}
