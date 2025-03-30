const { override, adjustWebpack } = require('customize-cra');

module.exports = override(
  adjustWebpack(webpackConfig => {
    webpackConfig.module.rules.forEach(rule => {
      if (rule.enforce === 'pre' && rule.use?.loader?.includes('source-map-loader')) {
        rule.exclude = [/node_modules\/@chakra-ui/];
      }
    });
    return webpackConfig;
  })
);