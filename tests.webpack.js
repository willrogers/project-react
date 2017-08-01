var context = require.context('./src/__tests__/', true); // directory and regex
console.log("tests.webpack.js...");
context.keys().forEach(context);

