#!/usr/bin/env node

console.log('Hello world');

const note = process.argv[2]
const newNote = {
    content: note,
    id: Date.now(),
}

console.log(newNote)