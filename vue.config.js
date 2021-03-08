const HtmlWebpackPlugin = require('html-webpack-plugin');

let defaultArgs;

module.exports = {
  publicPath: '/hello-vue',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].template = __dirname + '/public/index.html';
        defaultArgs = args;
        return args;
      });
    config
      .plugin('html-404')
      .use(HtmlWebpackPlugin, [{
        templateParameters: defaultArgs[0].templateParameters,
        template: __dirname + '/public/404.html',
        filename: '404.html',
      }]);
    config
      .plugin('copy')
      .tap(args => {
        args[0][0].ignore.push({
          glob: '404.html',
          matchBase: false
        });
        return args;
      });
  },
};
