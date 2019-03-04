const withCSS = require('@zeit/next-css');

console.log(process.env.NODE_ENV);

module.exports = withCSS({
  assetPrefix: process.env.NODE_ENV === 'production' ? '/wedding' : '',
});
