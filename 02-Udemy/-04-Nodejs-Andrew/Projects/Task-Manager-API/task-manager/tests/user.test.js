const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");
const { userOneId, userOne, setupDatabase } = require("./fixtures/db");

beforeEach(setupDatabase);
test("should signup a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Sayed",
      email: "sayedabdo4900@gmail.com",
      password: "123456",
    })
    .expect(201);
  //assert that database changed correctly
  const user = await User.findById(response.body.user._id);
  expect(user).not.toBeNull();

  //assert about the response
  expect(response.body).toMathObject({
    user: {
      name: "Sayed",
      email: "sayedabdo4900@gmail.com",
    },
    token: user.tokens[0].token,
  });
  expect(user.password).not.toBe("Pas123456");
});

test("should login existing user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);
  const user = await User.findById(userOneId);
  expect(response.body.token).toBe(user.tokens[1].token);
});
test("should not login nonexisting user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: "abdo",
    })
    .expect(400);
});

test("Should get profile for user", async () => {
  await (await request(app).get("/users/me"))
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expext(200);
});

test("Should not get profile for unauthenticated user", async () => {
  await request(app).get("/users/me").send().expect(401);
});

test("Should delete account for user", async () => {
  await request(app)
    .delete("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
  const user = await User.findById(userOneId);
  expect(user).toBeNull();
});
test("Should not delete account for unauthenticate user", async () => {
  await request(app)
    .delete("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(401);
});

test("Should upload avatar image", async () => {
  await request(app)
    .post("/users/me/avatar")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .attach("avatar", "tests/fixtures/profile-pic.jpg")
    .expect(200);
  const user = await User.findById(userOneId);
  expect(user.avatar).toEqual(expect.any(Buffer));
});

test("Should update valid user fields", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({ name: "Abdo" })
    .expect(200);
  const user = await User.findById(userOneId);
  expect(user.name).toEqual("Abdo");
});
test("Should not update invalid user fields", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({ location: "Zagzing" })
    .expect(400);
});
