import axios from "axios";

const service = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: "http://localhost:5005/api"
  // withCredentials: true // => you might need this option if using cookies and sessions
});

const errorHandler = (err) => {
  throw err;
};

const getRecipient = () => {
  return service.get("/recipients")
    .then((res) => res.data)
    .catch(errorHandler);
};

const uploadRecipientImage = (file) => {
  return service.post("/recipients/upload", file)
    .then(res => res.data)
    .catch(errorHandler);
};

const createRecipient = (newRecipient) => {
  return service.post("/recipients", newRecipient)
    .then(res => res.data)
    .catch(errorHandler);
};

const getGift = () => {
  return service.get("/gifts")
    .then((res) => res.data)
    .catch(errorHandler);
};

const createGift = (newGift) => {
  return service.post("/gifts", newGift)
    .then(res => res.data)
    .catch(errorHandler);
};

const uploadGiftImage = (file) => {
  return service.post("/gifts/upload", file)
    .then(res => res.data)
    .catch(errorHandler);
};

export default {
    service,
  getRecipient,
  uploadRecipientImage,
  uploadGiftImage,
  createRecipient,
  getGift,
  createGift,
};
