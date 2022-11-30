//登入 ＴＯＫＥＮ
// 將 token 存到 localStorage
export const setAuthToken = (token) => {
  localStorage.setItem("token", token);
};

// 從 localStorage 讀取 token
export const getAuthToken = () => {
  return localStorage.getItem("token");
};

//下載ＴＯＫＥＮ
export const setDownloadState = (state) => {
  localStorage.setItem("downloadState", state);
};
export const getDownloadState = () => {
  return localStorage.getItem("downloadState");
};
