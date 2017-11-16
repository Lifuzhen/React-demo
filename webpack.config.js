// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

const webpack = require('atool-build/lib/webpack');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

module.exports = function(webpackConfig) {
    webpackConfig.babel.plugins.push('transform-runtime');
    webpackConfig.babel.plugins.push(["import", {
        libraryName: "antd",
        style: "css",
    }]);

    webpackConfig.module.loaders.push({
        test: /\.handlebars$/,
        loader: 'spmhandlebars-loader'
    });

    webpackConfig.module.loaders
        .push({ test: /\.(svg|woff|eot)\??.*$/, loader: "url-loader?limit=65000&name=font_[name].[ext]" });

    // Load src/entries/*.js as entry automatically.
    const files = glob.sync('./src/entries/*.js');
    const newEntries = files.reduce(function(memo, file) {
        const name = path.basename(file, '.js');
        memo[name] = file;
        return memo;
    }, {});
    webpackConfig.entry = Object.assign({}, webpackConfig.entry, newEntries);

    return webpackConfig;
};