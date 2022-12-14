import module from './module.js'

const $ = module('chat-mode')

$.draw(() => {
  return 'hello world'
})

$.flair(`
  body *:not(chat-mode) {
    display: none;
  }
`)
