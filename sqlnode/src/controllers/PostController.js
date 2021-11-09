const User = require("../models/User");
const Post = require("../models/Post");

module.exports = {
  /* GET ALL POSTS - FIND BY USER */
  async index(req, res) {
    const { user_id } = req.params;
    const user = await User.findByPk(user_id, {
      include: { association: "posts" },
    });

    return res.json(user.posts);
  },

  /* CREATE NEW POST - RELATION WITH USER */
  async store(req, res) {
    const { user_id } = req.params;
    const { title, description } = req.body;

    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(400).json({
        error: "User not found",
      });
    }
    const post = await Post.create({
      title,
      description,
      user_id,
    });

    return res.json(post);
  },

  /* BRING ONLY POST TITLE */
  async attribute(req, res) {
    const { title } = req.body;
    const titles = await Post.findAll({
      where: {
        title: "Filme horrível",
      },
    });

    return res.json(titles);
  },
};
