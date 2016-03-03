export function httpGet(username) {
  const url = `http://localhost:8080/api/users/${username}/stacks`
  return _makePromise('GET', url, null)
}

export function httpPost(data) {
  const url = 'http://localhost:8080/api/bits'
  return _makePromise('POST', url, data)
}

function _makePromise(verb, url, data) {
  return new Promise(
    (resolve, reject) => {
      const request = new XMLHttpRequest()
      request.onload = function() {
        if (this.status === 200) {
          resolve(this.response)
        } else {
          reject(new Error(this.statusText))
        }
      }
      request.onerror = function() {
        reject(new Error(
          `XMLHttpRequest Error: ${this.statusText}`
        ))
      }
      request.open(verb, url)
      request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
      request.send(JSON.stringify({ bit: data }))
    }
  )
}
