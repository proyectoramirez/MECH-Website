module.exports = { 
    isDev: process.env.NODE_ENV.toLowerCase() !== "production",
    envName: process.env.NODE_ENV.toLowerCase() || "development"
};