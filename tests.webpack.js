var context = require.context('./src', true, /-test\.js$/); // directory and regex
  console.log("tests.webpack.js...");
  context.keys().forEach(context);

