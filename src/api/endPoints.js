
import {baseURL} from "./request";


export default {
  register: `${baseURL}/users/sign_up`,
  login: `${baseURL}/users/login`,
  logout: `${baseURL}/users/logout`,
  getUserById: (userId) => `${baseURL}/users/${userId}`,
  location: "https://api.pace.africa/v1/locations",
  getAllUsers: `${baseURL}/users`,
  getUploadsByUserId: (userId, page=1, analyzed) => `${baseURL}/upload/users/${userId}?page=${page}&analyzed=${analyzed}`,
  getUploadById: (uploadId) => `${baseURL}/upload/${uploadId}`,
  postUpload: `${baseURL}/upload/update-link`,
  getS3Link: `${baseURL}/upload/presigned-upload-url`,
  deleteVideo: (videoId) =>`${baseURL}/upload/${videoId}`,
};
