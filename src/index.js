/*
 * @Author: your name
 * @Date: 2021-11-28 19:30:59
 * @LastEditTime: 2021-11-28 20:01:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \babelTest\index.js
 */
const fn = () => {
	console.log("a")
}
const isHas = [1, 2, 3].includes(2)

const p = new Promise((resolve, reject) => {
	resolve(100)
})
class Point {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
	getX() {
		return this.x
	}
}
let cp = new ColorPoint(25, 8)
