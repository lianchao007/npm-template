const path = require("path/posix")

/*
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2021-11-24 13:44:49
 * @LastEditors: lc
 * @LastEditTime: 2021-11-24 14:41:19
 */

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'digital-s.js',
        library: 'digital-s',
        libraryTarget: 'umd',
        umdNameDefine: true
    }
}