/* Hexadecimal enhanced

Improves the previous function so besides the conversion also identifies some basic colors:

Black: #000000
White: #FFFFFF
Red: #FF0000
Green: #00FF00
Blue: #0000FF
So the result can be (for these cases):

>>> var a = getRGB ('#00FF00');
>>> a;
“rgb(0,255,0)   verde”;
*/

function getRGB (color) {
  var colorRgb = 'rgb('
  for (var i = 1; i < color.length; i += 2) {
    var pair = color.slice(i, i + 2)
    colorRgb += parseInt(pair, 16) + ','
  }
  colorRgb = colorRgb.slice(0, -1)
  colorRgb += ')'
  return colorRgb
}

function getRGBEnhanced (color) {
  var namedColors = {
    '#000000': 'black',
    '#FFFFFF': 'white',
    '#FF0000': 'red',
    '#00FF00': 'green',
    '#0000FF': 'blue'
  }
  var rgb = getRGB(color)
  if (namedColors.hasOwnProperty(color)) {
    return rgb + ' ' + namedColors[color]
  } else {
    return rgb
  }
}

getRGBEnhanced('#000000')

/* 2nnd way

var redHex = colorHex[1] + colorHex[2];...
 y luego parseInt , y finalmente concat rgb('');
*/

/* 3rd way

function getRGB(hex){
  var red = parseInt(hex.slice(1,3), 16);
  var green = parseInt(hex.slice(3,5), 16);
  var blue = parseInt(hex.slice(5,7), 16);

  return "rgb(" + red + ", " + green + ", " + blue + ')';
}
 getRGB ('#01FF00');

 */
