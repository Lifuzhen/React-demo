// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require('atool-build/lib/webpack');
// const fs = require('fs');
// const path = require('path');
// const glob = require('glob');

module.exports = function(webpackConfig) {
    webpackConfig.babel.plugins.push('transform-runtime');
    webpackConfig.babel.plugins.push(["import", {
        libraryName: "antd",
        style: "css",
    }]);

    webpackConfig.module.loaders
        .push({ test: /\.(svg|woff|eot)\??.*$/, loader: "url-loader?limit=65000&name=font_[name].[ext]" });


    webpackConfig.plugins.push(new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
        favicon: "img/favicon.ico", //favicon路径，通过webpack引入同时可以生成hash值
        filename: "index.html", //生成的html存放路径，相对于path
        template:  "src/views/index.ejs", //html模板路径
        inject: "body", //js插入的位置，true/'head'/'body'/false
        hash: true, //为静态资源生成hash值
        minify: { //压缩HTML文件
            removeComments: true, //移除HTML中的注释
            collapseWhitespace: false //删除空白符与换行符
        },
        chunks:["common","vendor","index"]   //这边的index对应package中的entry
    }));

    // webpackConfig.module.loaders.push({
    //     test: /\.handlebars$/,
    //     loader: 'spmhandlebars-loader'
    // });
    //
    // webpackConfig.module.loaders
    //     .push({ test: /\.(svg|woff|eot)\??.*$/, loader: "url-loader?limit=65000&name=font_[name].[ext]" });
    //
    // // Load src/entries/*.js as entry automatically.
    // const files = glob.sync('./src/entries/*.js');
    // const newEntries = files.reduce(function(memo, file) {
    //     const name = path.basename(file, '.js');
    //     memo[name] = file;
    //     return memo;
    // }, {});
    // webpackConfig.entry = Object.assign({}, webpackConfig.entry, newEntries);

    webpackConfig.externals = {"echarts":"echarts"};

    return webpackConfig;
};