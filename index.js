#!/usr/bin/env node
import * as thing from './utils/index.js'
// const { count } = require('./utils.js')
import fs from 'fs'

console.log('Hello world');

const note = process.argv[2]
const newNote = {
    content: note,
    id: Date.now(),
}

console.log(newNote)
console.log('count: ', thing.count(2))