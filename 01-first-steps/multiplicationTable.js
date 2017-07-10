// Multiplications table

function multiplicationsTable () {
  var res = '\n'
  for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
      res += (i * j) + '\t'
    }
    res += '\n'
  }
  console.log(res)
}
multiplicationsTable()
