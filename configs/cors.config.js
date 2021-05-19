const cors = require("cors");

module.exports = (app) => {
  app.use(
    cors({
      credentials: true, //cookie
      origin: [
        process.env.PUBLIC_DOMAIN,
        "http://bullet-journal-ironhack.herokuapp.com",
        "https://bullet-journal-ironhack.herokuapp.com",
      ],
    })
  );
};
