const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const router = require("express").Router();
const User = require("../models/User");

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());



router.route("/add").post((req, res) => {
    const Username = req.body.Username;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const Role = req.body.Role;

    const newUser = new User({
        Username,
        Email,
        Password,
        Role
    });

    newUser.save()
        .then(() => {
            res.json("User Created");
        })
        .catch((err) => {
            console.log(err);
        });
});

router.route("/").get((req, res) => {
    User.find()
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.route("/update/:id").put(async (req, res) => {
    try {
        const userId = req.params.id;
        const { Username, Email, Password, Role } = req.body;

        const updateUser = {
            Username,
            Email,
            Password,
            Role
        };

        const updatedUser = await User.findByIdAndUpdate(userId, updateUser, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({ status: "User Updated", user: updatedUser });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ status: "Error with Updating data", error: err.message });
    }
});


router.route("/delete/:id").delete(async (req, res)=> {
    let userId = req.params.id;
    await User.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({ status: "User deleted" });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "error with deleting data", error: err.message });
        });
});

router.route("/get/:id").get(async (req, res)=> {
    let userId = req.params.id;
    const user = await User.findById(userId)
        .then((user) => {
            res.status(200).send({ status: "User fetched", user });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get user", error: err.message });
        });
});
router.route('/login').post(async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ Email: email }); 
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.Password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
  
      res.status(200).json({ status: 'Login successful' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: 'Error with login', error: err.message });
    }
});



module.exports = router;
