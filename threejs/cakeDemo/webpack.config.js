/*
 * @Description: 
 * @Author: wangfengxiang
 * @Date: 2022-02-24 18:23:57
 * @LastEditTime: 2022-03-30 15:35:17
 * @LastEditors: wangfengxiang
 */
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
      host: 'test.m.iqiyi.com',
      port: 8098,
    },
    module: {
        rules: [
            {
                test: /\.(ttf|woff|jpeg|jpg|png|gif|dae)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000000000,
                        }
                    }
                ]
            },
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
          template: 'src/cake.html',
          filename: 'index.html',
        }),
      ],
}