var db = require("../models");
// Helper functions

// Function that accepts a function and a bool to see if the user is logged in
function checkLogInRedirect(res, req, cb) {
  if (req.session.loggedin) {
    return cb();
  } else {
    return res.redirect("/");
  }

}

// Routes
module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/home", function (req, res) {
    checkLogInRedirect(res, req, function () {
      res.render("home");
    });
  });

  // Blitz
  app.get("/blitz", function (req, res) {
    checkLogInRedirect(res, req, function () {
      res.render("blitz");
    });
  });

  // Daily
  app.get("/daily", function (req, res) {
    checkLogInRedirect(res, req, function () {
      res.render("daily");
    });
  });

  // Weekly
  app.get("/weekly", function (req, res) {
    checkLogInRedirect(res, req, function () {
      res.render("weekly");
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};

