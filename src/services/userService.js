import { httpAxios } from "@/helper/httpHelper";

export async function signUp(user) {
  const result = await httpAxios
    .post("/api/users", user)
    .then((responce) => responce.data);
  return result;
}

export async function loginCheck(loginData) {
  const result = await httpAxios
    .post("/api/login", loginData)
    .then((responce) => responce.data);
  return result;
}

export async function currentUser() {
  const result = await httpAxios
    .get("/api/current")
    .then((responce) => responce.data);
  return result;
}

export async function logOut() {
  const result = await httpAxios
    .post("/api/logout")
    .then((responce) => responce.data);
  return result;
}
