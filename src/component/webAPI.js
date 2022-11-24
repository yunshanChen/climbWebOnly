import { getAuthToken } from "../component/utils";

//登入
export function fetchLogin(account, password) {
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
  return fetch("http://10.0.11.30:8080/user/v1/login", requestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
}

//身份認證
export function getMe() {
  const token = getAuthToken();

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  return fetch("http://10.0.11.30:8080/user/v1/me", requestOptions)
    .then((response) => response.json())
    .catch((error) => {
      console.log("error", error);
    });
}
