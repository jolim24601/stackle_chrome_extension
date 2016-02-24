function writeSelection() {
  let text = window.getSelection().toString()
  let state = JSON.stringify({ content: text })
  console.log(state)
  chrome.storage.local.set({ potentialBit: state })
}

window.addEventListener('load', () => {
  document.onmouseup = writeSelection
})
