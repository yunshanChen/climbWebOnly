import { getAuthToken } from "../component/utils";

const fetchUrl = "http://10.0.11.24:8080/";

//登入
export function fetchLogin(account, password) {
  const loginUrl = fetchUrl + "user/v1/login";

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: account /* ccc@gmail.com */,
    password: password /* ccc */,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  return fetch(loginUrl, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
}

//身份認證
export function getMe() {
  const token = getAuthToken();
  const getMeUrl = fetchUrl + "user/v1/me";

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  return fetch(getMeUrl, requestOptions)
    .then((response) => response.json())
    .catch((error) => {
      console.log("error", error);
    });
}

//樓梯列表stairList
export function getStairInfo() {
  const token = getAuthToken();
  const stairInfoUrl = fetchUrl + "stairinfo/v1/list";

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  return fetch(stairInfoUrl, requestOptions)
    .then((response) => response.json())
    .catch((error) => {
      console.log("error", error);
    });
}

//樓梯記錄表stairEditor
export function getStairInfoById(stairId) {
  const token = getAuthToken();
  const stairInfoByIdUrl =
    fetchUrl + "stairinfo/v1/stairinfo?stairid=" + stairId;

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  return fetch(stairInfoByIdUrl, requestOptions)
    .then((response) => response.json())
    .catch((error) => {
      console.log("error", error);
    });
}
