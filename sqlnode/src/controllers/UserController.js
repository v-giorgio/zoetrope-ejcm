const User = require("../models/User");

module.exports = {
  /* GET ALL USERS */
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },
  /* CREATE NEW USER */
  async store(req, res) {
    const { name, email, password, location } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      location,
    });

    return res.json(user);
  },
};
