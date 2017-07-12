var context = require.context('./src', true, /-test\.js$/); // directory and regex
  2 console.log("tests.webpack.js...");
  3 context.keys().forEach(context);

