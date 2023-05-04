const request = require("supertest");
const { expect } = require("chai");
const auth = require("../../data/auth.json");
const login = require("../../data/login.json");
const user = require("../../data/user.json");
const update = require("../../data/update.json");

// Global var
let email;
let token;
let UserID;

describe("Regist Toko in Casier Aja", () => {
  const response = request("https://kasir-api.belajarqa.com").post("/registration").send(login);
  it("Find Status and Body", async () => {
    console.log((await response).status);
    console.log((await response).body);
    email = (await response).body.data.email;
    console.log("-----------//------------");
    console.log("email adalah = " + email);
  });

  it("Equal Status must be 201", async () => {
    expect((await response).status).to.equal(201);
  });

  it("Equal Massage must be Toko berhasil di daftarkan and get feedback", async () => {
    expect((await response).body.status).to.equal("success");
    expect((await response).body.message).to.equal("Toko berhasil didaftarkan");
    expect((await response).body.data.name).to.equal("Kelontong Murah");
    expect((await response).body.data.name).not.to.be.null;
  });
});

describe("Regist User", () => {
  const response = request("https://kasir-api.belajarqa.com").post("/authentications").send(auth);
  it("Geth Auth", async () => {
    console.log((await response).status);
    console.log((await response).body);
    token = (await response).body.data.accessToken;
    console.log("-----------//------------");
    console.log("akses token adalah = " + token);
  });

  it("Create User", async () => {
    const response = request("https://kasir-api.belajarqa.com").post("/users").send(user).set("Authorization", `Bearer ${token}`);
    console.log("status adalah = " + (await response).status);
    console.log("Response Body = ");
    console.log((await response).body);
    expect((await response).status).to.equal(201);
    expect((await response).body.data.userId).not.to.be.null;
    UserID = (await response).body.data.userId;
  });

  it("Get User Detail", async () => {
    const response = request("https://kasir-api.belajarqa.com").get(`/users/${UserID}`).set("Authorization", `Bearer ${token}`);
    console.log("status adalah = " + (await response).status);
    console.log("Response Body = ");
    console.log((await response).body);
    expect((await response).status).to.equal(200);
  });

  it("Update Data", async () => {
    const response = request("https://kasir-api.belajarqa.com").put(`/users/${UserID}`).send(update).set("Authorization", `Bearer ${token}`);
    console.log("status adalah = " + (await response).status);
    console.log("Response Body = ");
    console.log((await response).body);
    expect((await response).status).to.equal(200);
  });

  it("Delete Data", async () => {
    const response = await request("https://kasir-api.belajarqa.com").del(`/users/${UserID}`).set("Authorization", `Bearer ${token}`);
    console.log("status adalah = " + (await response).status);
    console.log("Response Body = ");
    console.log((await response).body);
    expect((await response).status).to.equal(200);
  });
});