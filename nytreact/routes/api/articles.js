const router = require("express").Router();
const articleController = require("../../controllers/aricleController");

router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

 

router.route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports.router;