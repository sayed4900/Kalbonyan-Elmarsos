const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const User = require("../models/user");
const auth = require("../middleware/auth");
const router = new express.Router();
// router.get("/test", (req, res) => {
//   res.send("From a new file");
// });
router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(404).send(e);
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    // const public = user.getPublicProfile();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});
router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});
router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
  // try {
  //   const users = await User.find({});
  //   res.status(201).send(users);
  // } catch (e) {
  //   res.status(404).send(e);
  // }
});

router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);

    if (!user) return res.status(404).send();

    res.status(201).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});
router.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) =>
    allowUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(404).send({ error: "invlaid updates" });
  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/users/me", auth, async (req, res) => {
  try {
    await req.user.remove();

    res.send(req.user);
  } catch (e) {
    res.status(500).send(e);
  }
});

const upload = multer({
  // dest: "avatars",
  limits: 1000000,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg||jpeg||png)$/)) {
      return cb(new Error("Please upload  an image"));
    }
    cb(undefined, true);
  },
});
// prettier-ignore
router.post(
  "/users/me/avatar", auth,upload.single("avatar"), async(req, res) => {

    const buffer = await sharp(req.file.buffer).resize({width:250,height:250}).png().toBuffer(); 
  req.user.avatar = buffer;
  await req.user.save();
  res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);
router.delete("/users/me/avatar", auth, async (req, res) => {
  (req.user.avatar = undefined), await user.save(), res.send();
});

router.get("/users/:id/avatar", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user || !user.avatar) throw new Error();

    res.set("Content-Type", "image/png");
    res.send(user.avatar);
  } catch (e) {
    res.status(404).send();
  }
});

// router.post('/users/me/avatar', auth, upload.single('avatar'), async (req, res) => {
//   const buffer = await sharp(req.file.buffer).resize({width: 250, height: 250}).png().toBuffer()
//   req.user.avatar = buffer
//   await req.user.save()
//   res.send()
// }, (error, req, res, next) => {
//   res.status(400).send({ error: error.message })
// })
module.exports = router;
