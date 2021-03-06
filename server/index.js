const express = require("express");
const config = require("./config");
const routing = require("./routing");
const logger = require("./utils/logger");

const app = express();

app.use(routing);

startServer();

function startServer() {
    const host = config.host;
    const port = config.port;

    // Start your app.
    app.listen(port, host, err => {
        if (err) {
            return logger.error(err);
        }
        logger.appStarted(port, host);
    });
}