function writeSelection() {
  const defaultBit = {
    content: '',
    kind: 'text'
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
