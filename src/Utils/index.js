import axios from "axios";

export const checkUserIsAdmin = (currentUser) => {
  if (!currentUser || !Array.isArray(currentUser.userRoles)) return false;
  const { userRoles } = currentUser;
  if (userRoles.includes("admin")) return true;

  return false;
};

export const apiInstance = axios.create({
  baseURL: " https://us-central1-ecommercenew-33f39.cloudfunctions.net/api ",
});

//production url
//http://localhost:5001/ecommercenew-33f39/us-central1/api
