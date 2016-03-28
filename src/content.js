function writeSelection() {
  const defaultBit = {
    content: '',
    kind: 'text'
  }

  const content = window.getSelection().toString()
  const potentialBit = JSON.stringify(
    Object.assign({}, defaultBit, { content })
  )

  chrome.storage.local.set({ potentialBit })
}

window.addEventListener('load', function load(e) {
  window.removeEventListener('load', load, false)
  document.onmouseup = writeSelection
}, false)
