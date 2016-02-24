function saveState(state) {
  chrome.storage.local.set({ bits: JSON.stringify(state.bits) })
  chrome.storage.local.set({ potentialBit: JSON.stringify(state.potentialBit) })
}

export default function() {
  return (next) => (reducer, initialState) => {
    const store = next(reducer, initialState)
    store.subscribe(function() {
      const state = store.getState()
      saveState(state)
    })
    return store
  }
}
