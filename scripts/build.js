//- Set the noew_env to force webpack to optimize included modules
process.env.NODE_ENV = 'production';

const config = require('../config/webpack.prod');
const webpack = require('webpack');

const compiler = webpack(config);

console.log('\x1B[1mStarting build script\x1B[22m');
console.log('---------------------');

//- Generate build and output stats
compiler.run(function (err, stats) {
  if (err) {
    throw err;
  }

  // Output some stats
  console.log(stats.toString({
    errorDetails: true,
    warnings: true,
    chunks: false,
    colors: true
  }));

  console.log('\x1B[1mWebpack bundling has completed\x1B[22m');
  console.log('------------------------------');

});
