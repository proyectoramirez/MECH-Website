const { isDev } = require("../../utils/env");
const router = isDev ? require("./devSetup")() : require("./prodSetup")();

module.exports = router;