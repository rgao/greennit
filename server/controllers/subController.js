const db = require("../database/models");

module.exports = {
  findAll: (request, response) => {
    db.Sub
      .find(request.query)
      .sort({ _id: -1 })
      .then(dbArticle => response.json(dbArticle))
      .catch(error => response.status(422).json(error));
  },

  findOne: (request, response) => {
    db.Sub
      .findById(request.params.id)
      .then(dbArticle => response.json(dbArticle))
      .catch(error => response.status(422).json(error));
  },

  save: (request, response) => {
    db.Sub
      .create(request.body)
      .then(dbArticle => response.json(dbArticle))
      .catch(error => response.status(422).json(error));
  },

  remove: (request, response) => {
    db.Sub
      .findById({ _id: request.params.id })
      .then(dbArticle => dbArticle.remove())
      .then(dbArticle => response.json(dbArticle))
      .catch(error => response.status(422).json(error));
  }
};