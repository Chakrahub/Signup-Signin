const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const employeeModel = require("./models/Employee");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/mydb");

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    employeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Loggin successfully")
                } else {
                    res.json("the password doesn't match");
                }
            } else {
                res.json("the record doesn't exist");
            }
        })
    /* .catch(err => res.json(err)) */
});

app.post("/register", (req, res) => {
    employeeModel.create(req.body)
        .then(Employees => res.json(Employees))
        .catch(err => res.json(err))
});

const port = 3000;
app.listen(port, () => {
    console.log("the server is running");
})