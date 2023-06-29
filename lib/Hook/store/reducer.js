'use strict'
var __assign =
  (this && this.__assign) ||
  Object.assign ||
  function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i]
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
    }
    return t
  }
exports.__esModule = true
exports.initialState = {
  timings: {},
  count: {}
}
exports['default'] = function(state, action) {
  if (state === void 0) {
    state = exports.initialState
  }
  var _a, _b, _c
  switch (action.type) {
    case 'COUNT': {
      var times = state.count[action.name] || 0
      return __assign({}, state, {
        count: __assign(
          {},
          state.count,
          ((_a = {}), (_a[action.name] = times + 1), _a)
        )
      })
    }
    case 'TIME_START': {
      return __assign({}, state, {
        timings: __assign(
          {},
          state.timings,
          ((_b = {}),
          (_b[action.name] = {
            start: performance.now() || +new Date()
          }),
          _b)
        )
      })
    }
    case 'TIME_END': {
      var timing = state.timings[action.name]
      var end = performance.now() || +new Date()
      var start = timing.start
      var time = end - start
      return __assign({}, state, {
        timings: __assign(
          {},
          state.timings,
          ((_c = {}),
          (_c[action.name] = __assign({}, timing, { end: end, time: time })),
          _c)
        )
      })
    }
    default: {
      return state
    }
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Ib29rL3N0b3JlL3JlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVhLFFBQUEsWUFBWSxHQUFHO0lBQzFCLE9BQU8sRUFBRSxFQUFFO0lBQ1gsS0FBSyxFQUFFLEVBQUU7Q0FDVixDQUFBO0FBRUQsc0JBQWUsVUFBQyxLQUFvQixFQUFFLE1BQWM7SUFBcEMsc0JBQUEsRUFBQSxRQUFRLG9CQUFZOztJQUNsQyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxPQUFPLENBQUMsQ0FBQztZQUNaLElBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUUzQyxvQkFDSyxLQUFLLElBQ1IsS0FBSyxlQUNBLEtBQUssQ0FBQyxLQUFLLGVBQ2IsTUFBTSxDQUFDLElBQUksSUFBRyxLQUFLLEdBQUcsQ0FBQyxVQUUzQjtTQUNGO1FBRUQsS0FBSyxZQUFZLENBQUMsQ0FBQztZQUNqQixvQkFDSyxLQUFLLElBQ1IsT0FBTyxlQUNGLEtBQUssQ0FBQyxPQUFPLGVBQ2YsTUFBTSxDQUFDLElBQUksSUFBRztvQkFDYixLQUFLLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7aUJBQ3hDLFVBRUo7U0FDRjtRQUVELEtBQUssVUFBVSxDQUFDLENBQUM7WUFDZixJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUV6QyxJQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFBO1lBQ3BDLElBQUEsb0JBQUssQ0FBVztZQUV4QixJQUFNLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFBO1lBRXhCLG9CQUNLLEtBQUssSUFDUixPQUFPLGVBQ0YsS0FBSyxDQUFDLE9BQU8sZUFDZixNQUFNLENBQUMsSUFBSSxpQkFDUCxNQUFNLElBQ1QsR0FBRyxLQUFBO29CQUNILElBQUksTUFBQSxhQUdUO1NBQ0Y7UUFFRCxPQUFPLENBQUMsQ0FBQztZQUNQLE9BQU8sS0FBSyxDQUFBO1NBQ2I7S0FDRjtBQUNILENBQUMsRUFBQSJ9
