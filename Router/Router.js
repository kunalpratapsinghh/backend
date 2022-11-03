const express = require("express");
const UserSignUp = require("../Schema/UserSignUpSchema");
const app = express();
const argon2 = require("argon2");
const router = express.Router();
app.use(express.json());

router.get("",async(req,res)=>{
  res.send("hello")
})

router.post("/register", async (req, res) => {
    try {
      let data = req.body;
      data.password = await argon2.hash(data.password);
      const user = await UserSignUp.create(data);
      res.send(user);
    } catch (error) {
      res.status(401).send(error.message);
    }
  });
  


  router.post("/login", async (req, res) => {
    let { email, password } = req.body;
    console.log(req.body)
    try {
      const user = await UserSignUp.findOne({ email });
      const verification = await argon2.verify(user.password, password);
      if (user && verification) {
        return res.status(201).send({
         user
        });
      } else {
        res.send("Invalid credentials");
      }
    } catch (error) {
      res.send("User Not Found");
    }
  });

  router.post("/getprofile",async (req, res)=>{
    let id=req.body
    console.log(id.id)
    try {
        const user = await UserSignUp.findById(id.id);
        if (user) {
            let data={name:user.name,
                email:user.email}
          return res.status(201).send({
           data
          });
        } else {
          res.send("User Not Found");
        }
      } catch (error) {
        res.send("User Not Found");
      }
  })














  module.exports = router;

  