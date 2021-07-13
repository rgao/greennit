const db = require("../database/models");

module.exports = {
  testget: (request, response) => {
    response.send("hello");
  },

  testpost: (request, response) => {
    db.Article.create(request.body).then(function(dbArticle) {
      response.json(dbArticle);
    });
  }
};