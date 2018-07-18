const rewireCssModules = require("react-app-rewire-css-modules");
const rewirePostCSS = require("react-app-rewire-postcss");

module.exports = (config, env) => {
  config = rewirePostCSS(config, {
    plugins: loader => [
      require('postcss-import'),
      require('postcss-mixins')({
        mixins: require('./src/styles/abstracts/mixins')
      }),
      require('postcss-conditionals'),
      require('postcss-simple-vars')({
        variables: function variables() {
          return require('./src/styles/abstracts/variables')
        },
        unknown: function unknown(node, name, result) {
          node.warn(result, 'Unknown variable ' + name)
        }
      }),
      require('postcss-nested'),
      require('postcss-color-function'),
      require('autoprefixer'),
      require('postcss-initial')({
        reset: 'inherited' // reset only inherited rules
      }),
      require('postcss-math')
    ]
  });
  config = rewireCssModules(config, env);
  return config;
};
