const express = require("express");
const config = require("@/config");
const loadPathsIntoRouter = require("@/utils/loadPathsIntoRouter");
const frontEnd = require("./frontend");

const routes = [
    [config.frontend_public_path, frontEnd],
    ["/", express.static("public")]
];


module.exports = loadPathsIntoRouter(routes);