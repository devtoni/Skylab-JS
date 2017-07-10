/* Writes a function that convert a hexadecimal color,
 "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)".
  Give the function the name getRGB() and test it with this code */

function getRGB (color) {
  var colorRgb = 'rgb('
  var pair
  for (var i = 1; i < color.length; i += 2) {
    pair = color.slice(i, i + 2)
    colorRgb += parseInt(pair, 16) + ','
  }
  colorRgb = colorRgb.slice(0, -1)
  colorRgb += ')'
  return colorRgb
}
getRGB('#FF2213')
