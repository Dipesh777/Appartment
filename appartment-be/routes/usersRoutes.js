const express = require('express');
const usersRoutes = express.Router();

// Testing Route
usersRoutes.get("/", (req, res) => {
    res.send("This is testing");
} )
module.exports = usersRoutes;