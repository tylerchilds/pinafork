import { toggleChatMode } from '../../_utils/themeEngine.js'

export function chatModeObservers (store) {
  if (!process.browser) {
    return
  }

  store.observe('enableChatMode', enableChatMode => {
    toggleChatMode(enableChatMode)
  }, { init: false }) // init:false because the inline script takes care of it
}
