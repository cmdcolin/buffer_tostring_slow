import {TextDecoder} from 'text-encoder'

import s from './largeFile.txt'
const mybuf = Buffer.from(s)

// by default uses utf8 and the toString method of the feross/buffer class
console.time('convert: toString')
const t1 = mybuf.toString()
console.timeEnd('convert: toString')

const d = new TextDecoder()
console.time('convert: TextDecoder')
const t2 = d.decode(mybuf)
console.timeEnd('convert: TextDecoder')
