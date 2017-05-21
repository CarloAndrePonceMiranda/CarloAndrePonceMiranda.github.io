// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    "autoprefixer": {}
  },
  "scripts": {
    "dev": "node build/dev-server.js",
    "build": "rimraf dist && webpack --progress --hide-modules --config build/webpack.prod.conf.js",
    "test": "karma start build/karma.conf.js --single-run",
    "deploy": "node_modules/gh-pages/bin/gh-pages -d dist"
  },
}
// Here are the details of your new API account.
// Application name	musica
// API key	b2be9b91fd0046e0bc9ad382febf5a01
// Shared secret	3226438fb230ee12865236d1c48bb696
// Registered to	CarloAndrePonce