const db = require("../database/models");

module.exports = {
  findOne: (request, response) => {
    db.User
      .findById(request.params.id)
      .then(dbArticle => response.json(dbArticle))
      .catch(error => response.status(422).json(error));
  },

  save: (request, response) => {
    db.User
      .create(request.body)
      .then(dbArticle => response.json(dbArticle))
      .catch(error => response.status(422).json(error));
  },

  remove: (request, response) => {
    db.User
      .findById({ _id: request.params.id })
      .then(dbArticle => dbArticle.remove())
      .then(dbArticle => response.json(dbArticle))
      .catch(error => response.status(422).json(error));
  }
};