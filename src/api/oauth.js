import { post } from "axios";

const clientID = "fa06abacb49741be93c0ffbc87638811";
const clientSecret = "rrSZt97ZVI14rME7l0Kc7hM7jHbgOvzh";

const region = "eu";
const API_URL = `https://${region}.battle.net/oauth/token`;

function getToken() {
  const body = new FormData();
  body.append("grant_type", "client_credentials");

  const config = {
    headers: { "Content-Type": "Multipart/form-data" },
    auth: { username: clientID, password: clientSecret }
  };

  return post(API_URL, body, config);
}

export { getToken };
