function writeSelection() {
  const defaultBit = {
    user_id: 1,
    privacy: false,
    content: '',
    kind: 'text',
    stackIds: []
  }

  const text = window.getSelection().toString()
  const potentialBit = JSON.stringify(
    Object.assign({}, defaultBit, { content: text })
  )
  console.log(potentialBit)
  chrome.storage.local.set({ potentialBit })
}

window.addEventListener('load', () => {
  document.onmouseup = writeSelection
})
