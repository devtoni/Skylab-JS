/*

 translate()

Represent a small bilingual lexicon as a Javascript object in the following fashion
{"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"}
 and use it to translate your Christmas cards from English into Swedish.

 */
function translateFromEnglishToSwedish (str) {
  var position
  var translation = {
    'merry': 'god',
    'christmas': 'jul',
    'and': 'och',
    'happy': 'gott',
    'new': 'nytt',
    'year': 'år'
  }
  var words = str.split(' ')
  for (var englishWord in translation) {
    if (words.indexOf(englishWord) !== -1) {
      position = words.indexOf(englishWord)
      words.splice(position, 1, translation[englishWord])
    }
  }
  return words.join(' ')
}
translateFromEnglishToSwedish('merry christmas and happy new year')

// Way 2

function translateFromEnglishToSwedish (str) {
  var translation = {
    'merry': 'god',
    'christmas': 'jul',
    'and': 'och',
    'happy': 'gott',
    'new': 'nytt',
    'year': 'år'
  }
  var translatedText = str
  var regExpWord
  for (var englishWord in translation) {
    regExpWord = new RegExp(englishWord, 'g')
    translatedText = translatedText.replace(regExpWord, translation[englishWord])
  }
  return translatedText
}
translateFromEnglishToSwedish('merry christmas and happy new year year')

// Way 3 //
function translateFromEnglishToSwedish (str) {
  var translation = {
    'merry': 'god',
    'christmas': 'jul',
    'and': 'och',
    'happy': 'gott',
    'new': 'nytt',
    'year': 'år'
  }
  return str
            .split(' ')
            .map(word => translation[word])
            .join(' ')
}
translateFromEnglishToSwedish('merry christmas and happy new year year')
