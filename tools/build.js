/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('Generating production build');

webpack(webpackConfig).run((err, stats) => {
  if(err) {
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasError) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if(jsonStats.hasWarning) {
    console.log('Webpack generated the following warnings: '.bold.yellow);
    jsonStats.warning.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`);
  console.log('Build complete');

  return 0;
});