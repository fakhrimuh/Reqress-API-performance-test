import http from "k6/http";
import { check } from "k6";

const BASE_URL = "https://reqres.in";
const CREATE_PATH = "/api/users";
const UPDATE_PATH = "/api/users/2";

export default function () {
  // API CREATE
  let createData = { name: "morpheus", job: "leader" };
  let createHeaders = { "Content-Type": "application/json" };
  let createResponse = http.post(
    `${BASE_URL}${CREATE_PATH}`,
    JSON.stringify(createData),
    { headers: createHeaders }
  );
  check(createResponse, { "status is 201": (r) => r.status === 201 });

  // API UPDATE
  let updateData = { name: "morpheus", job: "zion resident" };
  let updateHeaders = { "Content-Type": "application/json" };
  let updateResponse = http.put(
    `${BASE_URL}${UPDATE_PATH}`,
    JSON.stringify(updateData),
    { headers: updateHeaders }
  );
  check(updateResponse, { "status is 200": (r) => r.status === 200 });
}
