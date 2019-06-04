const fs = require('fs')
const mybuf = fs.readFileSync( require.resolve('./largeFile.txt'))

console.time('convert: toString')
const t = mybuf.toString() // by default uses utf8 and the toString method of the feross/buffer class
console.timeEnd('convert: toString')


const d = new TextDecoder()
console.time('convert: TextDecoder')
const t2 = d.decode(mybuf)
console.timeEnd('convert: TextDecoder')
