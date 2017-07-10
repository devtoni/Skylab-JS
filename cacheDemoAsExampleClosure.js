function createToUpperCase () {
  var cache = {}
  return function (name) {
    if (cache[name]) {
      console.log('from cache...')
      return cache[name]
    } else {
      console.log('fresh result...')
      cache[name] = name.toUpperCase()
      return cache[name]
    }
  }
}

var customToUpperCase = createToUpperCase()
