const express = require("express");
const config = require("../config");
const loadPathsIntoRouter = require("../utils/loadPathsIntoRouter");
const frontEnd = require("./frontend");

const routes = [
    ["/", express.static("public")],
    [config.frontend_public_path, frontEnd]
];


module.exports = loadPathsIntoRouter(routes);