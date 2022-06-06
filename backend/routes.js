module.exports = (app) => {
  app.use("/login", require("./routes/login"));
  app.use("/user", require("./routes/user"));
};
