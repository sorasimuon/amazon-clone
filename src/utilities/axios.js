import axios from "axios";

const instance = axios.create({
  // baseURL: "https://us-central1-challenge-22824.cloudfunctions.net/api",
  baseURL: "http://localhost:5001/challenge-22824/us-central1/api",
});

export default instance;
