/*
 * @Author: your name
 * @Date: 2021-11-28 21:13:04
 * @LastEditTime: 2021-11-28 21:53:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \babelTest\config\webpack.config.js
 */

let path = require("path")
let webpack = require("webpack")
function resolve(dir) {
	return path.join(__dirname, "..", dir)
}
module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "../src/index.js"),
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.js/,
				loader: "babel-loader",
				include: [resolve("src")],
				exclude: "/node_module/",
			},
		],
	},
}
