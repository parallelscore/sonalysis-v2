import cookie from "js-cookie"
export const BASE_URL = "http://165.22.0.66:3000";


export const logOut = () => {
      cookie.remove('auth');
      window.location.replace('/');
  }