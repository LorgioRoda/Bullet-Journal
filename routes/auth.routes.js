const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User.model");
//Bcrypt config
const bcrypt = require("bcryptjs");
const { isLoggedIn } = require("../middlewares/auth");
const bcryptSalt = 10;

router.post("/signup", (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  User.findOne({ email }).then((user) => {
    if (user) {
      return res
        .status(400)
        .json({ message: "User already exists. Please change your email" });
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    User.create({
      username,
      email,
      password: hashPass,
    })
      .then((newUser) => {
        // Passport req.login permite iniciar sesión tras crear el usuario
        req.login(newUser, (error) => {
          if (error) {
            return res.status(500).json(error);
          }

          return res.status(200).json(newUser);
        });
      })
      .catch((error) => {
        console.log(error)
        res.status(500).json(error);
      }) 
  });
});

router.post("/login", (req, res, next)=> {
    passport.authenticate("local", (error, theUser, failureDetails)=> {  //Estrategia local
        if(error){
            return res.status(500).json(error);
        }

        if(!theUser){
            return res.status(401).json(failureDetails);
        }

        req.login(theUser, (error) => {
            if (error) {
              return res.status(500).json(error);
            }
  
            return res.status(200).json(theUser);
          });

    })(req, res, next) //Llamar una funcion POST, super importante
})

router.post("/logout", isLoggedIn, (req, res, next)=> {
    req.logout() //destroy session
    return res.status(200).json({message: "Log out success"})
})

router.get("/loggedin", (req, res)=> { //save log with react
    if(req.isAuthenticated()){ //define req.user
        return res.status(200).json(req.user)
    } else {
        return res.status(403).json({message:"Forbbiden"}) 
    }
})

module.exports = router;