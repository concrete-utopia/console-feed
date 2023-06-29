'use strict'
exports.__esModule = true
// Sandbox HTML elements
var sandbox = document.implementation.createHTMLDocument('sandbox')
function objectifyAttributes(element) {
  var data = {}
  for (var _i = 0, _a = element.attributes; _i < _a.length; _i++) {
    var attribute = _a[_i]
    data[attribute.name] = attribute.value
  }
  return data
}
/**
 * Serialize a HTML element into JSON
 */
exports['default'] = {
  type: 'HTMLElement',
  shouldTransform: function(type, obj) {
    return (
      obj &&
      obj.children &&
      typeof obj.innerHTML === 'string' &&
      typeof obj.tagName === 'string'
    )
  },
  toSerializable: function(element) {
    return {
      tagName: element.tagName.toLowerCase(),
      attributes: objectifyAttributes(element),
      innerHTML: element.innerHTML
    }
  },
  fromSerializable: function(data) {
    try {
      var element = sandbox.createElement(data.tagName)
      element.innerHTML = data.innerHTML
      for (
        var _i = 0, _a = Object.keys(data.attributes);
        _i < _a.length;
        _i++
      ) {
        var attribute = _a[_i]
        try {
          element.setAttribute(attribute, data.attributes[attribute])
        } catch (e) {}
      }
      return element
    } catch (e) {
      return data
    }
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSFRNTC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UcmFuc2Zvcm0vSFRNTC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdCQUF3QjtBQUN4QixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBVXJFLDZCQUE2QixPQUFZO0lBQ3ZDLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQUNmLEtBQXNCLFVBQWtCLEVBQWxCLEtBQUEsT0FBTyxDQUFDLFVBQVUsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtRQUFyQyxJQUFJLFNBQVMsU0FBQTtRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUE7S0FDdkM7SUFDRCxPQUFPLElBQUksQ0FBQTtBQUNiLENBQUM7QUFFRDs7R0FFRztBQUNILHFCQUFlO0lBQ2IsSUFBSSxFQUFFLGFBQWE7SUFDbkIsZUFBZSxZQUFDLElBQVMsRUFBRSxHQUFRO1FBQ2pDLE9BQU8sQ0FDTCxHQUFHO1lBQ0gsR0FBRyxDQUFDLFFBQVE7WUFDWixPQUFPLEdBQUcsQ0FBQyxTQUFTLEtBQUssUUFBUTtZQUNqQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUNoQyxDQUFBO0lBQ0gsQ0FBQztJQUNELGNBQWMsWUFBQyxPQUFvQjtRQUNqQyxPQUFPO1lBQ0wsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ3RDLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQyxPQUFPLENBQUM7WUFDeEMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTO1NBQ2xCLENBQUE7SUFDZCxDQUFDO0lBQ0QsZ0JBQWdCLFlBQUMsSUFBYTtRQUM1QixJQUFJO1lBQ0YsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFnQixDQUFBO1lBQ2xFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQTtZQUNsQyxLQUFzQixVQUE0QixFQUE1QixLQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUE1QixjQUE0QixFQUE1QixJQUE0QixFQUFFO2dCQUEvQyxJQUFJLFNBQVMsU0FBQTtnQkFDaEIsSUFBSTtvQkFDRixPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7aUJBQzVEO2dCQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUU7YUFDZjtZQUNELE9BQU8sT0FBTyxDQUFBO1NBQ2Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFBO1NBQ1o7SUFDSCxDQUFDO0NBQ0YsQ0FBQSJ9
