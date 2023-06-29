'use strict'
exports.__esModule = true
var string_utils_1 = require('./string-utils')
function createAppend(s) {
  var container = document.createDocumentFragment()
  container.appendChild(document.createTextNode(s))
  return container
}
/**
 * @param {string} format
 * @param {!Array.<!SDK.RemoteObject>} parameters
 * @param {!Element} formattedResult
 */
function formatWithSubstitutionString(format, parameters, formattedResult) {
  var formatters = {}
  function stringFormatter(obj) {
    if (typeof obj !== 'string') {
      return ''
    }
    return String(obj)
  }
  function floatFormatter(obj) {
    if (typeof obj !== 'number') return 'NaN'
    return obj
  }
  function integerFormatter(obj) {
    if (typeof obj !== 'number') return 'NaN'
    return Math.floor(obj)
  }
  var currentStyle = null
  function styleFormatter(obj) {
    currentStyle = {}
    var buffer = document.createElement('span')
    buffer.setAttribute('style', obj)
    for (var i = 0; i < buffer.style.length; i++) {
      var property = buffer.style[i]
      if (isWhitelistedProperty(property))
        currentStyle[property] = buffer.style[property]
    }
  }
  function isWhitelistedProperty(property) {
    var prefixes = [
      'background',
      'border',
      'color',
      'font',
      'line',
      'margin',
      'padding',
      'text',
      '-webkit-background',
      '-webkit-border',
      '-webkit-font',
      '-webkit-margin',
      '-webkit-padding',
      '-webkit-text'
    ]
    for (var i = 0; i < prefixes.length; i++) {
      if (property.startsWith(prefixes[i])) return true
    }
    return false
  }
  formatters.s = stringFormatter
  formatters.f = floatFormatter
  // Firebug allows both %i and %d for formatting integers.
  formatters.i = integerFormatter
  formatters.d = integerFormatter
  // Firebug uses %c for styling the message.
  formatters.c = styleFormatter
  function append(a, b) {
    if (b instanceof Node) {
      a.appendChild(b)
    } else if (typeof b !== 'undefined') {
      var toAppend = createAppend(String(b))
      if (currentStyle) {
        var wrapper = document.createElement('span')
        wrapper.appendChild(toAppend)
        applyCurrentStyle(wrapper)
        for (var i = 0; i < wrapper.children.length; ++i)
          applyCurrentStyle(wrapper.children[i])
        toAppend = wrapper
      }
      a.appendChild(toAppend)
    }
    return a
  }
  /**
   * @param {!Element} element
   */
  function applyCurrentStyle(element) {
    for (var key in currentStyle) element.style[key] = currentStyle[key]
  }
  // String.format does treat formattedResult like a Builder, result is an object.
  return string_utils_1.String.format(
    format,
    parameters,
    formatters,
    formattedResult,
    append
  )
}
exports['default'] = formatWithSubstitutionString
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LW1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ29tcG9uZW50L2RldnRvb2xzLXBhcnNlci9mb3JtYXQtbWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUFzRDtBQUV0RCxzQkFBc0IsQ0FBUztJQUM3QixJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsQ0FBQTtJQUNuRCxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUVqRCxPQUFPLFNBQVMsQ0FBQTtBQUNsQixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILHNDQUNFLE1BQVcsRUFDWCxVQUFlLEVBQ2YsZUFBb0I7SUFFcEIsSUFBTSxVQUFVLEdBQVEsRUFBRSxDQUFBO0lBRTFCLHlCQUF5QixHQUFRO1FBQy9CLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzNCLE9BQU8sRUFBRSxDQUFBO1NBQ1Y7UUFFRCxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNwQixDQUFDO0lBRUQsd0JBQXdCLEdBQVE7UUFDOUIsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1lBQUUsT0FBTyxLQUFLLENBQUE7UUFDekMsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDO0lBRUQsMEJBQTBCLEdBQVE7UUFDaEMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1lBQUUsT0FBTyxLQUFLLENBQUE7UUFDekMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3hCLENBQUM7SUFFRCxJQUFJLFlBQVksR0FBUSxJQUFJLENBQUE7SUFDNUIsd0JBQXdCLEdBQVE7UUFDOUIsWUFBWSxHQUFHLEVBQUUsQ0FBQTtRQUNqQixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzdDLE1BQU0s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