(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["antv-cron"] = factory(require("vue"));
	else
		root["antv-cron"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__7203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4507:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7658);
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var tinycolor2_1 = __importDefault(__webpack_require__(3745));
var hueStep = 2; // 色相阶梯
var saturationStep = 16; // 饱和度阶梯，浅色部分
var saturationStep2 = 5; // 饱和度阶梯，深色部分
var brightnessStep1 = 5; // 亮度阶梯，浅色部分
var brightnessStep2 = 15; // 亮度阶梯，深色部分
var lightColorCount = 5; // 浅色数量，主色上
var darkColorCount = 4; // 深色数量，主色下
function getHue(hsv, i, light) {
  var hue;
  // 根据色相不同，色相转向不同
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i, light) {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = Math.round(hsv.s * 100) - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = Math.round(hsv.s * 100) + saturationStep;
  } else {
    saturation = Math.round(hsv.s * 100) + saturationStep2 * i;
  }
  // 边界值修正
  if (saturation > 100) {
    saturation = 100;
  }
  // 第一格的 s 限制在 6-10 之间
  if (light && i === lightColorCount && saturation > 10) {
    saturation = 10;
  }
  if (saturation < 6) {
    saturation = 6;
  }
  return saturation;
}
function getValue(hsv, i, light) {
  if (light) {
    return Math.round(hsv.v * 100) + brightnessStep1 * i;
  }
  return Math.round(hsv.v * 100) - brightnessStep2 * i;
}
function generate(color) {
  var patterns = [];
  var pColor = tinycolor2_1.default(color);
  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = pColor.toHsv();
    var colorString = tinycolor2_1.default({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }).toHexString();
    patterns.push(colorString);
  }
  patterns.push(pColor.toHexString());
  for (var i = 1; i <= darkColorCount; i += 1) {
    var hsv = pColor.toHsv();
    var colorString = tinycolor2_1.default({
      h: getHue(hsv, i),
      s: getSaturation(hsv, i),
      v: getValue(hsv, i)
    }).toHexString();
    patterns.push(colorString);
  }
  return patterns;
}
exports["default"] = generate;

/***/ }),

/***/ 2815:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var generate_1 = __importDefault(__webpack_require__(4507));
exports.generate = generate_1.default;
var presetPrimaryColors = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1890FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666'
};
exports.presetPrimaryColors = presetPrimaryColors;
var presetPalettes = {};
exports.presetPalettes = presetPalettes;
Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = generate_1.default(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5];
});
var red = presetPalettes.red;
exports.red = red;
var volcano = presetPalettes.volcano;
exports.volcano = volcano;
var gold = presetPalettes.gold;
exports.gold = gold;
var orange = presetPalettes.orange;
exports.orange = orange;
var yellow = presetPalettes.yellow;
exports.yellow = yellow;
var lime = presetPalettes.lime;
exports.lime = lime;
var green = presetPalettes.green;
exports.green = green;
var cyan = presetPalettes.cyan;
exports.cyan = cyan;
var blue = presetPalettes.blue;
exports.blue = blue;
var geekblue = presetPalettes.geekblue;
exports.geekblue = geekblue;
var purple = presetPalettes.purple;
exports.purple = purple;
var magenta = presetPalettes.magenta;
exports.magenta = magenta;
var grey = presetPalettes.grey;
exports.grey = grey;

/***/ }),

/***/ 5645:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
var CalendarOutline = {
  name: 'calendar',
  theme: 'outline',
  icon: {
    tag: 'svg',
    attrs: {
      viewBox: '64 64 896 896',
      focusable: false
    },
    children: [{
      tag: 'path',
      attrs: {
        d: 'M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z'
      }
    }]
  }
};
exports.Z = CalendarOutline;

/***/ }),

/***/ 5614:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
var CheckOutline = {
  name: 'check',
  theme: 'outline',
  icon: {
    tag: 'svg',
    attrs: {
      viewBox: '64 64 896 896',
      focusable: false
    },
    children: [{
      tag: 'path',
      attrs: {
        d: 'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'
      }
    }]
  }
};
exports.Z = CheckOutline;

/***/ }),

/***/ 8706:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
var CloseOutline = {
  name: 'close',
  theme: 'outline',
  icon: {
    tag: 'svg',
    attrs: {
      viewBox: '64 64 896 896',
      focusable: false
    },
    children: [{
      tag: 'path',
      attrs: {
        d: 'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z'
      }
    }]
  }
};
exports.Z = CloseOutline;

/***/ }),

/***/ 2480:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
var DownOutline = {
  name: 'down',
  theme: 'outline',
  icon: {
    tag: 'svg',
    attrs: {
      viewBox: '64 64 896 896',
      focusable: false
    },
    children: [{
      tag: 'path',
      attrs: {
        d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'
      }
    }]
  }
};
exports.Z = DownOutline;

/***/ }),

/***/ 141:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
var UpOutline = {
  name: 'up',
  theme: 'outline',
  icon: {
    tag: 'svg',
    attrs: {
      viewBox: '64 64 896 896',
      focusable: false
    },
    children: [{
      tag: 'path',
      attrs: {
        d: 'M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z'
      }
    }]
  }
};
exports.Z = UpOutline;

/***/ }),

/***/ 5508:
/***/ (function(module, exports) {

"use strict";
/**
 * @ignore
 * base event object for custom and dom event.
 * @author yiminghe@gmail.com
 */



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
function returnFalse() {
  return false;
}
function returnTrue() {
  return true;
}
function EventBaseObject() {
  this.timeStamp = Date.now();
  this.target = undefined;
  this.currentTarget = undefined;
}
EventBaseObject.prototype = {
  isEventObject: 1,
  constructor: EventBaseObject,
  isDefaultPrevented: returnFalse,
  isPropagationStopped: returnFalse,
  isImmediatePropagationStopped: returnFalse,
  preventDefault: function preventDefault() {
    this.isDefaultPrevented = returnTrue;
  },
  stopPropagation: function stopPropagation() {
    this.isPropagationStopped = returnTrue;
  },
  stopImmediatePropagation: function stopImmediatePropagation() {
    this.isImmediatePropagationStopped = returnTrue;
    // fixed 1.2
    // call stopPropagation implicitly
    this.stopPropagation();
  },
  halt: function halt(immediate) {
    if (immediate) {
      this.stopImmediatePropagation();
    } else {
      this.stopPropagation();
    }
    this.preventDefault();
  }
};
exports["default"] = EventBaseObject;
module.exports = exports["default"];

/***/ }),

/***/ 6264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @ignore
 * event object for dom
 * @author yiminghe@gmail.com
 */



__webpack_require__(7658);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}
var _EventBaseObject = __webpack_require__(5508);
var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);
var _objectAssign = __webpack_require__(47);
var _objectAssign2 = _interopRequireDefault(_objectAssign);
var TRUE = true;
var FALSE = false;
var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];
function isNullOrUndefined(w) {
  return w === null || w === undefined;
}
var eventNormalizers = [{
  reg: /^key/,
  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
  fix: function fix(event, nativeEvent) {
    if (isNullOrUndefined(event.which)) {
      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
    }

    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
    if (event.metaKey === undefined) {
      event.metaKey = event.ctrlKey;
    }
  }
}, {
  reg: /^touch/,
  props: ['touches', 'changedTouches', 'targetTouches']
}, {
  reg: /^hashchange$/,
  props: ['newURL', 'oldURL']
}, {
  reg: /^gesturechange$/i,
  props: ['rotation', 'scale']
}, {
  reg: /^(mousewheel|DOMMouseScroll)$/,
  props: [],
  fix: function fix(event, nativeEvent) {
    var deltaX = undefined;
    var deltaY = undefined;
    var delta = undefined;
    var wheelDelta = nativeEvent.wheelDelta;
    var axis = nativeEvent.axis;
    var wheelDeltaY = nativeEvent.wheelDeltaY;
    var wheelDeltaX = nativeEvent.wheelDeltaX;
    var detail = nativeEvent.detail;

    // ie/webkit
    if (wheelDelta) {
      delta = wheelDelta / 120;
    }

    // gecko
    if (detail) {
      // press control e.detail == 1 else e.detail == 3
      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
    }

    // Gecko
    if (axis !== undefined) {
      if (axis === event.HORIZONTAL_AXIS) {
        deltaY = 0;
        deltaX = 0 - delta;
      } else if (axis === event.VERTICAL_AXIS) {
        deltaX = 0;
        deltaY = delta;
      }
    }

    // Webkit
    if (wheelDeltaY !== undefined) {
      deltaY = wheelDeltaY / 120;
    }
    if (wheelDeltaX !== undefined) {
      deltaX = -1 * wheelDeltaX / 120;
    }

    // 默认 deltaY (ie)
    if (!deltaX && !deltaY) {
      deltaY = delta;
    }
    if (deltaX !== undefined) {
      /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */
      event.deltaX = deltaX;
    }
    if (deltaY !== undefined) {
      /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */
      event.deltaY = deltaY;
    }
    if (delta !== undefined) {
      /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */
      event.delta = delta;
    }
  }
}, {
  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
  fix: function fix(event, nativeEvent) {
    var eventDoc = undefined;
    var doc = undefined;
    var body = undefined;
    var target = event.target;
    var button = nativeEvent.button;

    // Calculate pageX/Y if missing and clientX/Y available
    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
      eventDoc = target.ownerDocument || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // which for click: 1 === left; 2 === middle; 3 === right
    // do not use button
    if (!event.which && button !== undefined) {
      if (button & 1) {
        event.which = 1;
      } else if (button & 2) {
        event.which = 3;
      } else if (button & 4) {
        event.which = 2;
      } else {
        event.which = 0;
      }
    }

    // add relatedTarget, if necessary
    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
    }
    return event;
  }
}];
function retTrue() {
  return TRUE;
}
function retFalse() {
  return FALSE;
}
function DomEventObject(nativeEvent) {
  var type = nativeEvent.type;
  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';
  _EventBaseObject2['default'].call(this);
  this.nativeEvent = nativeEvent;

  // in case dom event has been mark as default prevented by lower dom node
  var isDefaultPrevented = retFalse;
  if ('defaultPrevented' in nativeEvent) {
    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
  } else if ('getPreventDefault' in nativeEvent) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
  } else if ('returnValue' in nativeEvent) {
    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
  }
  this.isDefaultPrevented = isDefaultPrevented;
  var fixFns = [];
  var fixFn = undefined;
  var l = undefined;
  var prop = undefined;
  var props = commonProps.concat();
  eventNormalizers.forEach(function (normalizer) {
    if (type.match(normalizer.reg)) {
      props = props.concat(normalizer.props);
      if (normalizer.fix) {
        fixFns.push(normalizer.fix);
      }
    }
  });
  l = props.length;

  // clone properties of the original event object
  while (l) {
    prop = props[--l];
    this[prop] = nativeEvent[prop];
  }

  // fix target property, if necessary
  if (!this.target && isNative) {
    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
  }

  // check if target is a text node (safari)
  if (this.target && this.target.nodeType === 3) {
    this.target = this.target.parentNode;
  }
  l = fixFns.length;
  while (l) {
    fixFn = fixFns[--l];
    fixFn(this, nativeEvent);
  }
  this.timeStamp = nativeEvent.timeStamp || Date.now();
}
var EventBaseObjectProto = _EventBaseObject2['default'].prototype;
(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
  constructor: DomEventObject,
  preventDefault: function preventDefault() {
    var e = this.nativeEvent;

    // if preventDefault exists run it on the original event
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // otherwise set the returnValue property of the original event to FALSE (IE)
      e.returnValue = FALSE;
    }
    EventBaseObjectProto.preventDefault.call(this);
  },
  stopPropagation: function stopPropagation() {
    var e = this.nativeEvent;

    // if stopPropagation exists run it on the original event
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      // otherwise set the cancelBubble property of the original event to TRUE (IE)
      e.cancelBubble = TRUE;
    }
    EventBaseObjectProto.stopPropagation.call(this);
  }
});
exports["default"] = DomEventObject;
module.exports = exports['default'];

/***/ }),

/***/ 9221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = addEventListener;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}
var _EventObject = __webpack_require__(6264);
var _EventObject2 = _interopRequireDefault(_EventObject);
function addEventListener(target, eventType, callback, option) {
  function wrapCallback(e) {
    var ne = new _EventObject2['default'](e);
    callback.call(target, ne);
  }
  if (target.addEventListener) {
    var _ret = function () {
      var useCapture = false;
      if (typeof option === 'object') {
        useCapture = option.capture || false;
      } else if (typeof option === 'boolean') {
        useCapture = option;
      }
      target.addEventListener(eventType, wrapCallback, option || false);
      return {
        v: {
          remove: function remove() {
            target.removeEventListener(eventType, wrapCallback, useCapture);
          }
        }
      };
    }();
    if (typeof _ret === 'object') return _ret.v;
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}
module.exports = exports['default'];

/***/ }),

/***/ 9611:
/***/ (function(module) {

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/;
module.exports = function mergeJSXProps(objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp;
    for (key in b) {
      aa = a[key];
      bb = b[key];
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa;
            a[key] = aa = {};
            aa[temp] = true;
          }
          if (typeof bb === 'string') {
            temp = bb;
            b[key] = bb = {};
            bb[temp] = true;
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey]);
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb);
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb);
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey];
          }
        }
      } else {
        a[key] = b[key];
      }
    }
    return a;
  }, {});
};
function mergeFn(a, b) {
  return function () {
    a && a.apply(this, arguments);
    b && b.apply(this, arguments);
  };
}

/***/ }),

/***/ 106:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(8983),
  __esModule: true
};

/***/ }),

/***/ 7777:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(5198),
  __esModule: true
};

/***/ }),

/***/ 2252:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(2066),
  __esModule: true
};

/***/ }),

/***/ 6730:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(8077),
  __esModule: true
};

/***/ }),

/***/ 3726:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(4003),
  __esModule: true
};

/***/ }),

/***/ 4997:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(9583),
  __esModule: true
};

/***/ }),

/***/ 9511:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(3276),
  __esModule: true
};

/***/ }),

/***/ 5904:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.Z = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ 4922:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
var _defineProperty = __webpack_require__(3726);
var _defineProperty2 = _interopRequireDefault(_defineProperty);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
exports.Z = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ 9867:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
var _defineProperty = __webpack_require__(3726);
var _defineProperty2 = _interopRequireDefault(_defineProperty);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
exports.Z = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
};

/***/ }),

/***/ 2018:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
var _assign = __webpack_require__(6730);
var _assign2 = _interopRequireDefault(_assign);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
exports.Z = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};

/***/ }),

/***/ 3066:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.Z = function (obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
};

/***/ }),

/***/ 8149:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_require__(7658);
__webpack_unused_export__ = true;
var _isIterable2 = __webpack_require__(2252);
var _isIterable3 = _interopRequireDefault(_isIterable2);
var _getIterator2 = __webpack_require__(7777);
var _getIterator3 = _interopRequireDefault(_getIterator2);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
exports.Z = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ 7755:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
var _from = __webpack_require__(106);
var _from2 = _interopRequireDefault(_from);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
exports.Z = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ 7251:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
var _iterator = __webpack_require__(9511);
var _iterator2 = _interopRequireDefault(_iterator);
var _symbol = __webpack_require__(4997);
var _symbol2 = _interopRequireDefault(_symbol);
var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
};
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
exports.Z = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ 6510:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(7658);
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;
  var nativeCodeString = '[native code]';
  function classNames() {
    var classes = [];
    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;
      var argType = typeof arg;
      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg)) {
        if (arg.length) {
          var inner = classNames.apply(null, arg);
          if (inner) {
            classes.push(inner);
          }
        }
      } else if (argType === 'object') {
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
          classes.push(arg.toString());
          continue;
        }
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }
    return classes.join(' ');
  }
  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if (true) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

/***/ }),

/***/ 2268:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(7658);
/**
 * Module dependencies.
 */

try {
  var index = __webpack_require__(9279);
} catch (err) {
  var index = __webpack_require__(9279);
}

/**
 * Whitespace regexp.
 */

var re = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

module.exports = function (el) {
  return new ClassList(el);
};

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function (name) {
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function (name) {
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function (re) {
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function (name, force) {
  // classList
  if (this.list) {
    if ("undefined" !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ("undefined" !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }
  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function () {
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has = ClassList.prototype.contains = function (name) {
  return this.list ? this.list.contains(name) : !!~index(this.array(), name);
};

/***/ }),

/***/ 9279:
/***/ (function(module) {

module.exports = function (arr, obj) {
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),

/***/ 4027:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var listCacheClear = __webpack_require__(8893),
  listCacheDelete = __webpack_require__(985),
  listCacheGet = __webpack_require__(8357),
  listCacheHas = __webpack_require__(0),
  listCacheSet = __webpack_require__(3694);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

/***/ }),

/***/ 429:
/***/ (function(module) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
module.exports = arrayEach;

/***/ }),

/***/ 87:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(13),
  eq = __webpack_require__(7132);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
module.exports = assignValue;

/***/ }),

/***/ 1824:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var eq = __webpack_require__(7132);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
module.exports = assocIndexOf;

/***/ }),

/***/ 6020:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(3671),
  keys = __webpack_require__(1898);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}
module.exports = baseAssign;

/***/ }),

/***/ 5672:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(3671),
  keysIn = __webpack_require__(2139);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}
module.exports = baseAssignIn;

/***/ }),

/***/ 13:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = __webpack_require__(9236);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}
module.exports = baseAssignValue;

/***/ }),

/***/ 339:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Stack = __webpack_require__(4027),
  arrayEach = __webpack_require__(429),
  assignValue = __webpack_require__(87),
  baseAssign = __webpack_require__(6020),
  baseAssignIn = __webpack_require__(5672),
  cloneBuffer = __webpack_require__(9472),
  copyArray = __webpack_require__(7322),
  copySymbols = __webpack_require__(8222),
  copySymbolsIn = __webpack_require__(753),
  getAllKeys = __webpack_require__(9369),
  getAllKeysIn = __webpack_require__(8975),
  getTag = __webpack_require__(1514),
  initCloneArray = __webpack_require__(2458),
  initCloneByTag = __webpack_require__(7109),
  initCloneObject = __webpack_require__(6711),
  isArray = __webpack_require__(3859),
  isBuffer = __webpack_require__(1444),
  isMap = __webpack_require__(2392),
  isObject = __webpack_require__(8608),
  isSet = __webpack_require__(4524),
  keys = __webpack_require__(1898),
  keysIn = __webpack_require__(2139);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
  CLONE_FLAT_FLAG = 2,
  CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  objectTag = '[object Object]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  symbolTag = '[object Symbol]',
  weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
    isDeep = bitmask & CLONE_DEEP_FLAG,
    isFlat = bitmask & CLONE_FLAT_FLAG,
    isFull = bitmask & CLONE_SYMBOLS_FLAG;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
      isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function (subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function (subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}
module.exports = baseClone;

/***/ }),

/***/ 6130:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(8608);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = function () {
  function object() {}
  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();
module.exports = baseCreate;

/***/ }),

/***/ 1172:
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}
module.exports = objectToString;

/***/ }),

/***/ 9472:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(6171);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
  allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
    result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
module.exports = cloneBuffer;

/***/ }),

/***/ 7322:
/***/ (function(module) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
    length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
module.exports = copyArray;

/***/ }),

/***/ 3671:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assignValue = __webpack_require__(87),
  baseAssignValue = __webpack_require__(13);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
    length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
module.exports = copyObject;

/***/ }),

/***/ 8222:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(3671),
  getSymbols = __webpack_require__(9138);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}
module.exports = copySymbols;

/***/ }),

/***/ 753:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(3671),
  getSymbolsIn = __webpack_require__(3888);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}
module.exports = copySymbolsIn;

/***/ }),

/***/ 9236:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(5988);
var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();
module.exports = defineProperty;

/***/ }),

/***/ 2024:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
module.exports = freeGlobal;

/***/ }),

/***/ 9369:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var overArg = __webpack_require__(7249);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

/***/ }),

/***/ 8975:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(7658);
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
module.exports = nativeKeysIn;

/***/ }),

/***/ 5988:
/***/ (function(module) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}
module.exports = getValue;

/***/ }),

/***/ 3414:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var overArg = __webpack_require__(7249);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

/***/ }),

/***/ 9138:
/***/ (function(module) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}
module.exports = stubArray;

/***/ }),

/***/ 3888:
/***/ (function(module) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}
module.exports = stubArray;

/***/ }),

/***/ 1514:
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}
module.exports = objectToString;

/***/ }),

/***/ 2458:
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
    result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
module.exports = initCloneArray;

/***/ }),

/***/ 7109:
/***/ (function(module) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}
module.exports = identity;

/***/ }),

/***/ 6711:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseCreate = __webpack_require__(6130),
  getPrototype = __webpack_require__(3414),
  isPrototype = __webpack_require__(3041);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
module.exports = initCloneObject;

/***/ }),

/***/ 3041:
/***/ (function(module) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}
module.exports = stubFalse;

/***/ }),

/***/ 8893:
/***/ (function(module) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
module.exports = listCacheClear;

/***/ }),

/***/ 985:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(1824);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
module.exports = listCacheDelete;

/***/ }),

/***/ 8357:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(1824);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
module.exports = listCacheGet;

/***/ }),

/***/ 0:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(1824);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
module.exports = listCacheHas;

/***/ }),

/***/ 3694:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(7658);
var assocIndexOf = __webpack_require__(1824);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
    index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
module.exports = listCacheSet;

/***/ }),

/***/ 7249:
/***/ (function(module) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
module.exports = overArg;

/***/ }),

/***/ 6171:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var freeGlobal = __webpack_require__(2024);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ 2618:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseClone = __webpack_require__(339);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
  CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
module.exports = cloneDeep;

/***/ }),

/***/ 1013:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(8608),
  now = __webpack_require__(2501),
  toNumber = __webpack_require__(1658);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
  nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
    lastThis,
    maxWait,
    result,
    timerId,
    lastCallTime,
    lastInvokeTime = 0,
    leading = false,
    maxing = false,
    trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs,
      thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime,
      timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }
  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }
  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(),
      isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
module.exports = debounce;

/***/ }),

/***/ 7132:
/***/ (function(module) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
module.exports = eq;

/***/ }),

/***/ 3859:
/***/ (function(module) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
module.exports = isArray;

/***/ }),

/***/ 1444:
/***/ (function(module) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}
module.exports = stubFalse;

/***/ }),

/***/ 2392:
/***/ (function(module) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}
module.exports = stubFalse;

/***/ }),

/***/ 8608:
/***/ (function(module) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
module.exports = isObject;

/***/ }),

/***/ 8760:
/***/ (function(module) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}
module.exports = isObjectLike;

/***/ }),

/***/ 432:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1172),
  getPrototype = __webpack_require__(3414),
  isObjectLike = __webpack_require__(8760);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
  objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
module.exports = isPlainObject;

/***/ }),

/***/ 4524:
/***/ (function(module) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}
module.exports = stubFalse;

/***/ }),

/***/ 1898:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var overArg = __webpack_require__(7249);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

/***/ }),

/***/ 2139:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(7658);
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
module.exports = nativeKeysIn;

/***/ }),

/***/ 2501:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(6171);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function () {
  return root.Date.now();
};
module.exports = now;

/***/ }),

/***/ 1658:
/***/ (function(module) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}
module.exports = identity;

/***/ }),

/***/ 9076:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
__webpack_require__(7658);
//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;
(function (global, factory) {
   true ? module.exports = factory() : 0;
})(this, function () {
  'use strict';

  var hookCallback;
  function hooks() {
    return hookCallback.apply(null, arguments);
  }

  // This is done to register the method called with moment()
  // without creating circular dependencies.
  function setHookCallback(callback) {
    hookCallback = callback;
  }
  function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
  }
  function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
  }
  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
      return Object.getOwnPropertyNames(obj).length === 0;
    } else {
      var k;
      for (k in obj) {
        if (hasOwnProp(obj, k)) {
          return false;
        }
      }
      return true;
    }
  }
  function isUndefined(input) {
    return input === void 0;
  }
  function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
  }
  function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
  }
  function map(arr, fn) {
    var res = [],
      i,
      arrLen = arr.length;
    for (i = 0; i < arrLen; ++i) {
      res.push(fn(arr[i], i));
    }
    return res;
  }
  function extend(a, b) {
    for (var i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }
    if (hasOwnProp(b, 'toString')) {
      a.toString = b.toString;
    }
    if (hasOwnProp(b, 'valueOf')) {
      a.valueOf = b.valueOf;
    }
    return a;
  }
  function createUTC(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
  }
  function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: false,
      weekdayMismatch: false
    };
  }
  function getParsingFlags(m) {
    if (m._pf == null) {
      m._pf = defaultParsingFlags();
    }
    return m._pf;
  }
  var some;
  if (Array.prototype.some) {
    some = Array.prototype.some;
  } else {
    some = function (fun) {
      var t = Object(this),
        len = t.length >>> 0,
        i;
      for (i = 0; i < len; i++) {
        if (i in t && fun.call(this, t[i], i, t)) {
          return true;
        }
      }
      return false;
    };
  }
  function isValid(m) {
    if (m._isValid == null) {
      var flags = getParsingFlags(m),
        parsedParts = some.call(flags.parsedDateParts, function (i) {
          return i != null;
        }),
        isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
      if (m._strict) {
        isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
      }
      if (Object.isFrozen == null || !Object.isFrozen(m)) {
        m._isValid = isNowValid;
      } else {
        return isNowValid;
      }
    }
    return m._isValid;
  }
  function createInvalid(flags) {
    var m = createUTC(NaN);
    if (flags != null) {
      extend(getParsingFlags(m), flags);
    } else {
      getParsingFlags(m).userInvalidated = true;
    }
    return m;
  }

  // Plugins that add properties should also add the key here (null value),
  // so we can properly clone ourselves.
  var momentProperties = hooks.momentProperties = [],
    updateInProgress = false;
  function copyConfig(to, from) {
    var i,
      prop,
      val,
      momentPropertiesLen = momentProperties.length;
    if (!isUndefined(from._isAMomentObject)) {
      to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
      to._i = from._i;
    }
    if (!isUndefined(from._f)) {
      to._f = from._f;
    }
    if (!isUndefined(from._l)) {
      to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
      to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
      to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
      to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
      to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
      to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
      to._locale = from._locale;
    }
    if (momentPropertiesLen > 0) {
      for (i = 0; i < momentPropertiesLen; i++) {
        prop = momentProperties[i];
        val = from[prop];
        if (!isUndefined(val)) {
          to[prop] = val;
        }
      }
    }
    return to;
  }

  // Moment prototype object
  function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
      this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
      updateInProgress = true;
      hooks.updateOffset(this);
      updateInProgress = false;
    }
  }
  function isMoment(obj) {
    return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
  }
  function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
      console.warn('Deprecation warning: ' + msg);
    }
  }
  function deprecate(msg, fn) {
    var firstTime = true;
    return extend(function () {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(null, msg);
      }
      if (firstTime) {
        var args = [],
          arg,
          i,
          key,
          argLen = arguments.length;
        for (i = 0; i < argLen; i++) {
          arg = '';
          if (typeof arguments[i] === 'object') {
            arg += '\n[' + i + '] ';
            for (key in arguments[0]) {
              if (hasOwnProp(arguments[0], key)) {
                arg += key + ': ' + arguments[0][key] + ', ';
              }
            }
            arg = arg.slice(0, -2); // Remove trailing comma and space
          } else {
            arg = arguments[i];
          }
          args.push(arg);
        }
        warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
        firstTime = false;
      }
      return fn.apply(this, arguments);
    }, fn);
  }
  var deprecations = {};
  function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
      warn(msg);
      deprecations[name] = true;
    }
  }
  hooks.suppressDeprecationWarnings = false;
  hooks.deprecationHandler = null;
  function isFunction(input) {
    return typeof Function !== 'undefined' && input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
  }
  function set(config) {
    var prop, i;
    for (i in config) {
      if (hasOwnProp(config, i)) {
        prop = config[i];
        if (isFunction(prop)) {
          this[i] = prop;
        } else {
          this['_' + i] = prop;
        }
      }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
  }
  function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig),
      prop;
    for (prop in childConfig) {
      if (hasOwnProp(childConfig, prop)) {
        if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
          res[prop] = {};
          extend(res[prop], parentConfig[prop]);
          extend(res[prop], childConfig[prop]);
        } else if (childConfig[prop] != null) {
          res[prop] = childConfig[prop];
        } else {
          delete res[prop];
        }
      }
    }
    for (prop in parentConfig) {
      if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
        // make sure changes to properties don't modify parent config
        res[prop] = extend({}, res[prop]);
      }
    }
    return res;
  }
  function Locale(config) {
    if (config != null) {
      this.set(config);
    }
  }
  var keys;
  if (Object.keys) {
    keys = Object.keys;
  } else {
    keys = function (obj) {
      var i,
        res = [];
      for (i in obj) {
        if (hasOwnProp(obj, i)) {
          res.push(i);
        }
      }
      return res;
    };
  }
  var defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L'
  };
  function calendar(key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
  }
  function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
      zerosToFill = targetLength - absNumber.length,
      sign = number >= 0;
    return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
  }
  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    formatFunctions = {},
    formatTokenFunctions = {};

  // token:    'M'
  // padded:   ['MM', 2]
  // ordinal:  'Mo'
  // callback: function () { this.month() + 1 }
  function addFormatToken(token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
      func = function () {
        return this[callback]();
      };
    }
    if (token) {
      formatTokenFunctions[token] = func;
    }
    if (padded) {
      formatTokenFunctions[padded[0]] = function () {
        return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
      };
    }
    if (ordinal) {
      formatTokenFunctions[ordinal] = function () {
        return this.localeData().ordinal(func.apply(this, arguments), token);
      };
    }
  }
  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
  }
  function makeFormatFunction(format) {
    var array = format.match(formattingTokens),
      i,
      length;
    for (i = 0, length = array.length; i < length; i++) {
      if (formatTokenFunctions[array[i]]) {
        array[i] = formatTokenFunctions[array[i]];
      } else {
        array[i] = removeFormattingTokens(array[i]);
      }
    }
    return function (mom) {
      var output = '',
        i;
      for (i = 0; i < length; i++) {
        output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
      }
      return output;
    };
  }

  // format date using native date object
  function formatMoment(m, format) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }
    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
    return formatFunctions[format](m);
  }
  function expandFormat(format, locale) {
    var i = 5;
    function replaceLongDateFormatTokens(input) {
      return locale.longDateFormat(input) || input;
    }
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
      format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
      localFormattingTokens.lastIndex = 0;
      i -= 1;
    }
    return format;
  }
  var defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A'
  };
  function longDateFormat(key) {
    var format = this._longDateFormat[key],
      formatUpper = this._longDateFormat[key.toUpperCase()];
    if (format || !formatUpper) {
      return format;
    }
    this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function (tok) {
      if (tok === 'MMMM' || tok === 'MM' || tok === 'DD' || tok === 'dddd') {
        return tok.slice(1);
      }
      return tok;
    }).join('');
    return this._longDateFormat[key];
  }
  var defaultInvalidDate = 'Invalid date';
  function invalidDate() {
    return this._invalidDate;
  }
  var defaultOrdinal = '%d',
    defaultDayOfMonthOrdinalParse = /\d{1,2}/;
  function ordinal(number) {
    return this._ordinal.replace('%d', number);
  }
  var defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    w: 'a week',
    ww: '%d weeks',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  };
  function relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
  }
  function pastFuture(diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
  }
  var aliases = {};
  function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
  }
  function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
  }
  function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
      normalizedProp,
      prop;
    for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);
        if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }
    return normalizedInput;
  }
  var priorities = {};
  function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
  }
  function getPrioritizedUnits(unitsObj) {
    var units = [],
      u;
    for (u in unitsObj) {
      if (hasOwnProp(unitsObj, u)) {
        units.push({
          unit: u,
          priority: priorities[u]
        });
      }
    }
    units.sort(function (a, b) {
      return a.priority - b.priority;
    });
    return units;
  }
  function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  }
  function absFloor(number) {
    if (number < 0) {
      // -0 -> 0
      return Math.ceil(number) || 0;
    } else {
      return Math.floor(number);
    }
  }
  function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
      value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      value = absFloor(coercedNumber);
    }
    return value;
  }
  function makeGetSet(unit, keepTime) {
    return function (value) {
      if (value != null) {
        set$1(this, unit, value);
        hooks.updateOffset(this, keepTime);
        return this;
      } else {
        return get(this, unit);
      }
    };
  }
  function get(mom, unit) {
    return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
  }
  function set$1(mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
      if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
        value = toInt(value);
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
      } else {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
      }
    }
  }

  // MOMENTS

  function stringGet(units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
      return this[units]();
    }
    return this;
  }
  function stringSet(units, value) {
    if (typeof units === 'object') {
      units = normalizeObjectUnits(units);
      var prioritized = getPrioritizedUnits(units),
        i,
        prioritizedLen = prioritized.length;
      for (i = 0; i < prioritizedLen; i++) {
        this[prioritized[i].unit](units[prioritized[i].unit]);
      }
    } else {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
        return this[units](value);
      }
    }
    return this;
  }
  var match1 = /\d/,
    //       0 - 9
    match2 = /\d\d/,
    //      00 - 99
    match3 = /\d{3}/,
    //     000 - 999
    match4 = /\d{4}/,
    //    0000 - 9999
    match6 = /[+-]?\d{6}/,
    // -999999 - 999999
    match1to2 = /\d\d?/,
    //       0 - 99
    match3to4 = /\d\d\d\d?/,
    //     999 - 9999
    match5to6 = /\d\d\d\d\d\d?/,
    //   99999 - 999999
    match1to3 = /\d{1,3}/,
    //       0 - 999
    match1to4 = /\d{1,4}/,
    //       0 - 9999
    match1to6 = /[+-]?\d{1,6}/,
    // -999999 - 999999
    matchUnsigned = /\d+/,
    //       0 - inf
    matchSigned = /[+-]?\d+/,
    //    -inf - inf
    matchOffset = /Z|[+-]\d\d:?\d\d/gi,
    // +00:00 -00:00 +0000 -0000 or Z
    matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi,
    // +00 -00 +00:00 -00:00 +0000 -0000 or Z
    matchTimestamp = /[+-]?\d+(\.\d{1,3})?/,
    // 123456789 123456789.123
    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    regexes;
  regexes = {};
  function addRegexToken(token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
      return isStrict && strictRegex ? strictRegex : regex;
    };
  }
  function getParseRegexForToken(token, config) {
    if (!hasOwnProp(regexes, token)) {
      return new RegExp(unescapeFormat(token));
    }
    return regexes[token](config._strict, config._locale);
  }

  // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
  function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
      return p1 || p2 || p3 || p4;
    }));
  }
  function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }
  var tokens = {};
  function addParseToken(token, callback) {
    var i,
      func = callback,
      tokenLen;
    if (typeof token === 'string') {
      token = [token];
    }
    if (isNumber(callback)) {
      func = function (input, array) {
        array[callback] = toInt(input);
      };
    }
    tokenLen = token.length;
    for (i = 0; i < tokenLen; i++) {
      tokens[token[i]] = func;
    }
  }
  function addWeekParseToken(token, callback) {
    addParseToken(token, function (input, array, config, token) {
      config._w = config._w || {};
      callback(input, config._w, config, token);
    });
  }
  function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
      tokens[token](input, config._a, config, token);
    }
  }
  var YEAR = 0,
    MONTH = 1,
    DATE = 2,
    HOUR = 3,
    MINUTE = 4,
    SECOND = 5,
    MILLISECOND = 6,
    WEEK = 7,
    WEEKDAY = 8;
  function mod(n, x) {
    return (n % x + x) % x;
  }
  var indexOf;
  if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function (o) {
      // I know
      var i;
      for (i = 0; i < this.length; ++i) {
        if (this[i] === o) {
          return i;
        }
      }
      return -1;
    };
  }
  function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
      return NaN;
    }
    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
  }

  // FORMATTING

  addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
  });
  addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
  });
  addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
  });

  // ALIASES

  addUnitAlias('month', 'M');

  // PRIORITY

  addUnitPriority('month', 8);

  // PARSING

  addRegexToken('M', match1to2);
  addRegexToken('MM', match1to2, match2);
  addRegexToken('MMM', function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
  });
  addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
  });
  addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
  });
  addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
      array[MONTH] = month;
    } else {
      getParsingFlags(config).invalidMonth = input;
    }
  });

  // LOCALES

  var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    defaultMonthsShortRegex = matchWord,
    defaultMonthsRegex = matchWord;
  function localeMonths(m, format) {
    if (!m) {
      return isArray(this._months) ? this._months : this._months['standalone'];
    }
    return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
  }
  function localeMonthsShort(m, format) {
    if (!m) {
      return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
  }
  function handleStrictParse(monthName, format, strict) {
    var i,
      ii,
      mom,
      llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
      // this is not used
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
      for (i = 0; i < 12; ++i) {
        mom = createUTC([2000, i]);
        this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
        this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format === 'MMM') {
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format === 'MMM') {
        ii = indexOf.call(this._shortMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }
  function localeMonthsParse(monthName, format, strict) {
    var i, mom, regex;
    if (this._monthsParseExact) {
      return handleStrictParse.call(this, monthName, format, strict);
    }
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, i]);
      if (strict && !this._longMonthsParse[i]) {
        this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
        this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
      }
      if (!strict && !this._monthsParse[i]) {
        regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
        this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
      }
      // test the regex
      if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
        return i;
      } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
        return i;
      } else if (!strict && this._monthsParse[i].test(monthName)) {
        return i;
      }
    }
  }

  // MOMENTS

  function setMonth(mom, value) {
    var dayOfMonth;
    if (!mom.isValid()) {
      // No op
      return mom;
    }
    if (typeof value === 'string') {
      if (/^\d+$/.test(value)) {
        value = toInt(value);
      } else {
        value = mom.localeData().monthsParse(value);
        // TODO: Another silent failure?
        if (!isNumber(value)) {
          return mom;
        }
      }
    }
    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
  }
  function getSetMonth(value) {
    if (value != null) {
      setMonth(this, value);
      hooks.updateOffset(this, true);
      return this;
    } else {
      return get(this, 'Month');
    }
  }
  function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  }
  function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    } else {
      if (!hasOwnProp(this, '_monthsShortRegex')) {
        this._monthsShortRegex = defaultMonthsShortRegex;
      }
      return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
    }
  }
  function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    } else {
      if (!hasOwnProp(this, '_monthsRegex')) {
        this._monthsRegex = defaultMonthsRegex;
      }
      return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
    }
  }
  function computeMonthsParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var shortPieces = [],
      longPieces = [],
      mixedPieces = [],
      i,
      mom;
    for (i = 0; i < 12; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, i]);
      shortPieces.push(this.monthsShort(mom, ''));
      longPieces.push(this.months(mom, ''));
      mixedPieces.push(this.months(mom, ''));
      mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }
    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
  }

  // FORMATTING

  addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? zeroFill(y, 4) : '+' + y;
  });
  addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
  });
  addFormatToken(0, ['YYYY', 4], 0, 'year');
  addFormatToken(0, ['YYYYY', 5], 0, 'year');
  addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

  // ALIASES

  addUnitAlias('year', 'y');

  // PRIORITIES

  addUnitPriority('year', 1);

  // PARSING

  addRegexToken('Y', matchSigned);
  addRegexToken('YY', match1to2, match2);
  addRegexToken('YYYY', match1to4, match4);
  addRegexToken('YYYYY', match1to6, match6);
  addRegexToken('YYYYYY', match1to6, match6);
  addParseToken(['YYYYY', 'YYYYYY'], YEAR);
  addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
  });
  addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
  });
  addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
  });

  // HELPERS

  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }

  // HOOKS

  hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
  };

  // MOMENTS

  var getSetYear = makeGetSet('FullYear', true);
  function getIsLeapYear() {
    return isLeapYear(this.year());
  }
  function createDate(y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date;
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
      // preserve leap years using a full 400 year cycle, then reset
      date = new Date(y + 400, m, d, h, M, s, ms);
      if (isFinite(date.getFullYear())) {
        date.setFullYear(y);
      }
    } else {
      date = new Date(y, m, d, h, M, s, ms);
    }
    return date;
  }
  function createUTCDate(y) {
    var date, args;
    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
      args = Array.prototype.slice.call(arguments);
      // preserve leap years using a full 400 year cycle, then reset
      args[0] = y + 400;
      date = new Date(Date.UTC.apply(null, args));
      if (isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
      }
    } else {
      date = new Date(Date.UTC.apply(null, arguments));
    }
    return date;
  }

  // start-of-first-week - start-of-year
  function firstWeekOffset(year, dow, doy) {
    var
      // first-week day -- which january is always in the first week (4 for iso, 1 for other)
      fwd = 7 + dow - doy,
      // first-week day local weekday -- which local weekday is fwd
      fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
    return -fwdlw + fwd - 1;
  }

  // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
      weekOffset = firstWeekOffset(year, dow, doy),
      dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
      resYear,
      resDayOfYear;
    if (dayOfYear <= 0) {
      resYear = year - 1;
      resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
      resYear = year + 1;
      resDayOfYear = dayOfYear - daysInYear(year);
    } else {
      resYear = year;
      resDayOfYear = dayOfYear;
    }
    return {
      year: resYear,
      dayOfYear: resDayOfYear
    };
  }
  function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
      week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
      resWeek,
      resYear;
    if (week < 1) {
      resYear = mom.year() - 1;
      resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
      resWeek = week - weeksInYear(mom.year(), dow, doy);
      resYear = mom.year() + 1;
    } else {
      resYear = mom.year();
      resWeek = week;
    }
    return {
      week: resWeek,
      year: resYear
    };
  }
  function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
      weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  }

  // FORMATTING

  addFormatToken('w', ['ww', 2], 'wo', 'week');
  addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

  // ALIASES

  addUnitAlias('week', 'w');
  addUnitAlias('isoWeek', 'W');

  // PRIORITIES

  addUnitPriority('week', 5);
  addUnitPriority('isoWeek', 5);

  // PARSING

  addRegexToken('w', match1to2);
  addRegexToken('ww', match1to2, match2);
  addRegexToken('W', match1to2);
  addRegexToken('WW', match1to2, match2);
  addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
  });

  // HELPERS

  // LOCALES

  function localeWeek(mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }
  var defaultLocaleWeek = {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6 // The week that contains Jan 6th is the first week of the year.
  };

  function localeFirstDayOfWeek() {
    return this._week.dow;
  }
  function localeFirstDayOfYear() {
    return this._week.doy;
  }

  // MOMENTS

  function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
  }
  function getSetISOWeek(input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
  }

  // FORMATTING

  addFormatToken('d', 0, 'do', 'day');
  addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
  });
  addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
  });
  addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
  });
  addFormatToken('e', 0, 0, 'weekday');
  addFormatToken('E', 0, 0, 'isoWeekday');

  // ALIASES

  addUnitAlias('day', 'd');
  addUnitAlias('weekday', 'e');
  addUnitAlias('isoWeekday', 'E');

  // PRIORITY
  addUnitPriority('day', 11);
  addUnitPriority('weekday', 11);
  addUnitPriority('isoWeekday', 11);

  // PARSING

  addRegexToken('d', match1to2);
  addRegexToken('e', match1to2);
  addRegexToken('E', match1to2);
  addRegexToken('dd', function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
  });
  addRegexToken('ddd', function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
  });
  addRegexToken('dddd', function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
  });
  addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
      week.d = weekday;
    } else {
      getParsingFlags(config).invalidWeekday = input;
    }
  });
  addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
  });

  // HELPERS

  function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
      return input;
    }
    if (!isNaN(input)) {
      return parseInt(input, 10);
    }
    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
      return input;
    }
    return null;
  }
  function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
      return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
  }

  // LOCALES
  function shiftWeekdays(ws, n) {
    return ws.slice(n, 7).concat(ws.slice(0, n));
  }
  var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    defaultWeekdaysRegex = matchWord,
    defaultWeekdaysShortRegex = matchWord,
    defaultWeekdaysMinRegex = matchWord;
  function localeWeekdays(m, format) {
    var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
    return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
  }
  function localeWeekdaysShort(m) {
    return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
  }
  function localeWeekdaysMin(m) {
    return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
  }
  function handleStrictParse$1(weekdayName, format, strict) {
    var i,
      ii,
      mom,
      llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];
      for (i = 0; i < 7; ++i) {
        mom = createUTC([2000, 1]).day(i);
        this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
        this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
        this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format === 'dddd') {
        ii = indexOf.call(this._weekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format === 'ddd') {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format === 'dddd') {
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format === 'ddd') {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }
  function localeWeekdaysParse(weekdayName, format, strict) {
    var i, mom, regex;
    if (this._weekdaysParseExact) {
      return handleStrictParse$1.call(this, weekdayName, format, strict);
    }
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }
    for (i = 0; i < 7; i++) {
      // make the regex if we don't have it already

      mom = createUTC([2000, 1]).day(i);
      if (strict && !this._fullWeekdaysParse[i]) {
        this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
        this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
        this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
      }
      if (!this._weekdaysParse[i]) {
        regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
        this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
      }
      // test the regex
      if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
        return i;
      }
    }
  }

  // MOMENTS

  function getSetDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
      input = parseWeekday(input, this.localeData());
      return this.add(input - day, 'd');
    } else {
      return day;
    }
  }
  function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
  }
  function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
      var weekday = parseIsoWeekday(input, this.localeData());
      return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
      return this.day() || 7;
    }
  }
  function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        this._weekdaysRegex = defaultWeekdaysRegex;
      }
      return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
    }
  }
  function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysShortRegex')) {
        this._weekdaysShortRegex = defaultWeekdaysShortRegex;
      }
      return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
  }
  function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    } else {
      if (!hasOwnProp(this, '_weekdaysMinRegex')) {
        this._weekdaysMinRegex = defaultWeekdaysMinRegex;
      }
      return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
  }
  function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var minPieces = [],
      shortPieces = [],
      longPieces = [],
      mixedPieces = [],
      i,
      mom,
      minp,
      shortp,
      longp;
    for (i = 0; i < 7; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, 1]).day(i);
      minp = regexEscape(this.weekdaysMin(mom, ''));
      shortp = regexEscape(this.weekdaysShort(mom, ''));
      longp = regexEscape(this.weekdays(mom, ''));
      minPieces.push(minp);
      shortPieces.push(shortp);
      longPieces.push(longp);
      mixedPieces.push(minp);
      mixedPieces.push(shortp);
      mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;
    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
  }

  // FORMATTING

  function hFormat() {
    return this.hours() % 12 || 12;
  }
  function kFormat() {
    return this.hours() || 24;
  }
  addFormatToken('H', ['HH', 2], 0, 'hour');
  addFormatToken('h', ['hh', 2], 0, hFormat);
  addFormatToken('k', ['kk', 2], 0, kFormat);
  addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  });
  addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
  });
  addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  function meridiem(token, lowercase) {
    addFormatToken(token, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
  }
  meridiem('a', true);
  meridiem('A', false);

  // ALIASES

  addUnitAlias('hour', 'h');

  // PRIORITY
  addUnitPriority('hour', 13);

  // PARSING

  function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
  }
  addRegexToken('a', matchMeridiem);
  addRegexToken('A', matchMeridiem);
  addRegexToken('H', match1to2);
  addRegexToken('h', match1to2);
  addRegexToken('k', match1to2);
  addRegexToken('HH', match1to2, match2);
  addRegexToken('hh', match1to2, match2);
  addRegexToken('kk', match1to2, match2);
  addRegexToken('hmm', match3to4);
  addRegexToken('hmmss', match5to6);
  addRegexToken('Hmm', match3to4);
  addRegexToken('Hmmss', match5to6);
  addParseToken(['H', 'HH'], HOUR);
  addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
  });
  addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
  });
  addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4,
      pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
  });
  addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4,
      pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
  });

  // LOCALES

  function localeIsPM(input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return (input + '').toLowerCase().charAt(0) === 'p';
  }
  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    getSetHour = makeGetSet('Hours', true);
  function localeMeridiem(hours, minutes, isLower) {
    if (hours > 11) {
      return isLower ? 'pm' : 'PM';
    } else {
      return isLower ? 'am' : 'AM';
    }
  }
  var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,
    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,
    week: defaultLocaleWeek,
    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,
    meridiemParse: defaultLocaleMeridiemParse
  };

  // internal storage for locale config files
  var locales = {},
    localeFamilies = {},
    globalLocale;
  function commonPrefix(arr1, arr2) {
    var i,
      minl = Math.min(arr1.length, arr2.length);
    for (i = 0; i < minl; i += 1) {
      if (arr1[i] !== arr2[i]) {
        return i;
      }
    }
    return minl;
  }
  function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
  }

  // pick the locale from the array
  // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
  // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
  function chooseLocale(names) {
    var i = 0,
      j,
      next,
      locale,
      split;
    while (i < names.length) {
      split = normalizeLocale(names[i]).split('-');
      j = split.length;
      next = normalizeLocale(names[i + 1]);
      next = next ? next.split('-') : null;
      while (j > 0) {
        locale = loadLocale(split.slice(0, j).join('-'));
        if (locale) {
          return locale;
        }
        if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
          //the next array item is better than a shallower substring of this one
          break;
        }
        j--;
      }
      i++;
    }
    return globalLocale;
  }
  function isLocaleNameSane(name) {
    // Prevent names that look like filesystem paths, i.e contain '/' or '\'
    return name.match('^[^/\\\\]*$') != null;
  }
  function loadLocale(name) {
    var oldLocale = null,
      aliasedRequire;
    // TODO: Find a better way to register and load all the locales in Node
    if (locales[name] === undefined && "object" !== 'undefined' && module && module.exports && isLocaleNameSane(name)) {
      try {
        oldLocale = globalLocale._abbr;
        aliasedRequire = undefined;
        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        getSetGlobalLocale(oldLocale);
      } catch (e) {
        // mark as not found to avoid repeating expensive file require call causing high CPU
        // when trying to find en-US, en_US, en-us for every format call
        locales[name] = null; // null means not found
      }
    }

    return locales[name];
  }

  // This function will load locale and then set the global locale.  If
  // no arguments are passed in, it will simply return the current global
  // locale key.
  function getSetGlobalLocale(key, values) {
    var data;
    if (key) {
      if (isUndefined(values)) {
        data = getLocale(key);
      } else {
        data = defineLocale(key, values);
      }
      if (data) {
        // moment.duration._locale = moment._locale = data;
        globalLocale = data;
      } else {
        if (typeof console !== 'undefined' && console.warn) {
          //warn user if arguments are passed but the locale could not be set
          console.warn('Locale ' + key + ' not found. Did you forget to load it?');
        }
      }
    }
    return globalLocale._abbr;
  }
  function defineLocale(name, config) {
    if (config !== null) {
      var locale,
        parentConfig = baseConfig;
      config.abbr = name;
      if (locales[name] != null) {
        deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
        parentConfig = locales[name]._config;
      } else if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
          parentConfig = locales[config.parentLocale]._config;
        } else {
          locale = loadLocale(config.parentLocale);
          if (locale != null) {
            parentConfig = locale._config;
          } else {
            if (!localeFamilies[config.parentLocale]) {
              localeFamilies[config.parentLocale] = [];
            }
            localeFamilies[config.parentLocale].push({
              name: name,
              config: config
            });
            return null;
          }
        }
      }
      locales[name] = new Locale(mergeConfigs(parentConfig, config));
      if (localeFamilies[name]) {
        localeFamilies[name].forEach(function (x) {
          defineLocale(x.name, x.config);
        });
      }

      // backwards compat for now: also set the locale
      // make sure we set the locale AFTER all child locales have been
      // created, so we won't end up with the child locale set.
      getSetGlobalLocale(name);
      return locales[name];
    } else {
      // useful for testing
      delete locales[name];
      return null;
    }
  }
  function updateLocale(name, config) {
    if (config != null) {
      var locale,
        tmpLocale,
        parentConfig = baseConfig;
      if (locales[name] != null && locales[name].parentLocale != null) {
        // Update existing child locale in-place to avoid memory-leaks
        locales[name].set(mergeConfigs(locales[name]._config, config));
      } else {
        // MERGE
        tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
          parentConfig = tmpLocale._config;
        }
        config = mergeConfigs(parentConfig, config);
        if (tmpLocale == null) {
          // updateLocale is called for creating a new locale
          // Set abbr so it will have a name (getters return
          // undefined otherwise).
          config.abbr = name;
        }
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;
      }

      // backwards compat for now: also set the locale
      getSetGlobalLocale(name);
    } else {
      // pass null for config to unupdate, useful for tests
      if (locales[name] != null) {
        if (locales[name].parentLocale != null) {
          locales[name] = locales[name].parentLocale;
          if (name === getSetGlobalLocale()) {
            getSetGlobalLocale(name);
          }
        } else if (locales[name] != null) {
          delete locales[name];
        }
      }
    }
    return locales[name];
  }

  // returns locale data
  function getLocale(key) {
    var locale;
    if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
    }
    if (!key) {
      return globalLocale;
    }
    if (!isArray(key)) {
      //short-circuit everything else
      locale = loadLocale(key);
      if (locale) {
        return locale;
      }
      key = [key];
    }
    return chooseLocale(key);
  }
  function listLocales() {
    return keys(locales);
  }
  function checkOverflow(m) {
    var overflow,
      a = m._a;
    if (a && getParsingFlags(m).overflow === -2) {
      overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
      if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
        overflow = DATE;
      }
      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
        overflow = WEEK;
      }
      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
        overflow = WEEKDAY;
      }
      getParsingFlags(m).overflow = overflow;
    }
    return m;
  }

  // iso 8601 regex
  // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
    isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/], ['YYYYMM', /\d{6}/, false], ['YYYY', /\d{4}/, false]],
    // iso time formats and regexes
    isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]],
    aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    obsOffsets = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60
    };

  // date from iso format
  function configFromISO(config) {
    var i,
      l,
      string = config._i,
      match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
      allowTime,
      dateFormat,
      timeFormat,
      tzFormat,
      isoDatesLen = isoDates.length,
      isoTimesLen = isoTimes.length;
    if (match) {
      getParsingFlags(config).iso = true;
      for (i = 0, l = isoDatesLen; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
          dateFormat = isoDates[i][0];
          allowTime = isoDates[i][2] !== false;
          break;
        }
      }
      if (dateFormat == null) {
        config._isValid = false;
        return;
      }
      if (match[3]) {
        for (i = 0, l = isoTimesLen; i < l; i++) {
          if (isoTimes[i][1].exec(match[3])) {
            // match[2] should be 'T' or space
            timeFormat = (match[2] || ' ') + isoTimes[i][0];
            break;
          }
        }
        if (timeFormat == null) {
          config._isValid = false;
          return;
        }
      }
      if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return;
      }
      if (match[4]) {
        if (tzRegex.exec(match[4])) {
          tzFormat = 'Z';
        } else {
          config._isValid = false;
          return;
        }
      }
      config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
      configFromStringAndFormat(config);
    } else {
      config._isValid = false;
    }
  }
  function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];
    if (secondStr) {
      result.push(parseInt(secondStr, 10));
    }
    return result;
  }
  function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
      return 2000 + year;
    } else if (year <= 999) {
      return 1900 + year;
    }
    return year;
  }
  function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.replace(/\([^()]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  }
  function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
      // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
      var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
        weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
      if (weekdayProvided !== weekdayActual) {
        getParsingFlags(config).weekdayMismatch = true;
        config._isValid = false;
        return false;
      }
    }
    return true;
  }
  function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
      return obsOffsets[obsOffset];
    } else if (militaryOffset) {
      // the only allowed military tz is Z
      return 0;
    } else {
      var hm = parseInt(numOffset, 10),
        m = hm % 100,
        h = (hm - m) / 100;
      return h * 60 + m;
    }
  }

  // date and time from ref 2822 format
  function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i)),
      parsedArray;
    if (match) {
      parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
      if (!checkWeekday(match[1], parsedArray, config)) {
        return;
      }
      config._a = parsedArray;
      config._tzm = calculateOffset(match[8], match[9], match[10]);
      config._d = createUTCDate.apply(null, config._a);
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
      getParsingFlags(config).rfc2822 = true;
    } else {
      config._isValid = false;
    }
  }

  // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
  function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
      config._d = new Date(+matched[1]);
      return;
    }
    configFromISO(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }
    configFromRFC2822(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }
    if (config._strict) {
      config._isValid = false;
    } else {
      // Final attempt, use Input Fallback
      hooks.createFromInputFallback(config);
    }
  }
  hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
    config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
  });

  // Pick the first defined of two or three arguments.
  function defaults(a, b, c) {
    if (a != null) {
      return a;
    }
    if (b != null) {
      return b;
    }
    return c;
  }
  function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
      return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  }

  // convert an array to a date.
  // the array should mirror the parameters below
  // note: all values past the year are optional and will default to the lowest possible value.
  // [year, month, day , hour, minute, second, millisecond]
  function configFromArray(config) {
    var i,
      date,
      input = [],
      currentDate,
      expectedWeekday,
      yearToUse;
    if (config._d) {
      return;
    }
    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
      if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
        getParsingFlags(config)._overflowDayOfYear = true;
      }
      date = createUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date.getUTCMonth();
      config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
      config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
      config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
      config._nextDay = true;
      config._a[HOUR] = 0;
    }
    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }
    if (config._nextDay) {
      config._a[HOUR] = 24;
    }

    // check for mismatching day of week
    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
      getParsingFlags(config).weekdayMismatch = true;
    }
  }
  function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4;

      // TODO: We need to take the current isoWeekYear, but that depends on
      // how we interpret now (local, utc, fixed offset). So create
      // a now version of current config (take local/utc/offset flags, and
      // create now).
      weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
      week = defaults(w.W, 1);
      weekday = defaults(w.E, 1);
      if (weekday < 1 || weekday > 7) {
        weekdayOverflow = true;
      }
    } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;
      curWeek = weekOfYear(createLocal(), dow, doy);
      weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

      // Default to current week.
      week = defaults(w.w, curWeek.week);
      if (w.d != null) {
        // weekday -- low day numbers are considered next week
        weekday = w.d;
        if (weekday < 0 || weekday > 6) {
          weekdayOverflow = true;
        }
      } else if (w.e != null) {
        // local weekday -- counting starts from beginning of week
        weekday = w.e + dow;
        if (w.e < 0 || w.e > 6) {
          weekdayOverflow = true;
        }
      } else {
        // default to beginning of week
        weekday = dow;
      }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
      getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
      getParsingFlags(config)._overflowWeekday = true;
    } else {
      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
      config._a[YEAR] = temp.year;
      config._dayOfYear = temp.dayOfYear;
    }
  }

  // constant that refers to the ISO standard
  hooks.ISO_8601 = function () {};

  // constant that refers to the RFC 2822 form
  hooks.RFC_2822 = function () {};

  // date from string and format string
  function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
      configFromISO(config);
      return;
    }
    if (config._f === hooks.RFC_2822) {
      configFromRFC2822(config);
      return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
      i,
      parsedInput,
      tokens,
      token,
      skipped,
      stringLength = string.length,
      totalParsedInputLength = 0,
      era,
      tokenLen;
    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
    tokenLen = tokens.length;
    for (i = 0; i < tokenLen; i++) {
      token = tokens[i];
      parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
      if (parsedInput) {
        skipped = string.substr(0, string.indexOf(parsedInput));
        if (skipped.length > 0) {
          getParsingFlags(config).unusedInput.push(skipped);
        }
        string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
        totalParsedInputLength += parsedInput.length;
      }
      // don't parse if it's not a known token
      if (formatTokenFunctions[token]) {
        if (parsedInput) {
          getParsingFlags(config).empty = false;
        } else {
          getParsingFlags(config).unusedTokens.push(token);
        }
        addTimeToArrayFromToken(token, parsedInput, config);
      } else if (config._strict && !parsedInput) {
        getParsingFlags(config).unusedTokens.push(token);
      }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
      getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
      getParsingFlags(config).bigHour = undefined;
    }
    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    // handle era
    era = getParsingFlags(config).era;
    if (era !== null) {
      config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
    }
    configFromArray(config);
    checkOverflow(config);
  }
  function meridiemFixWrap(locale, hour, meridiem) {
    var isPm;
    if (meridiem == null) {
      // nothing to do
      return hour;
    }
    if (locale.meridiemHour != null) {
      return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
      // Fallback
      isPm = locale.isPM(meridiem);
      if (isPm && hour < 12) {
        hour += 12;
      }
      if (!isPm && hour === 12) {
        hour = 0;
      }
      return hour;
    } else {
      // this is not supposed to happen
      return hour;
    }
  }

  // date from string and array of format strings
  function configFromStringAndArray(config) {
    var tempConfig,
      bestMoment,
      scoreToBeat,
      i,
      currentScore,
      validFormatFound,
      bestFormatIsValid = false,
      configfLen = config._f.length;
    if (configfLen === 0) {
      getParsingFlags(config).invalidFormat = true;
      config._d = new Date(NaN);
      return;
    }
    for (i = 0; i < configfLen; i++) {
      currentScore = 0;
      validFormatFound = false;
      tempConfig = copyConfig({}, config);
      if (config._useUTC != null) {
        tempConfig._useUTC = config._useUTC;
      }
      tempConfig._f = config._f[i];
      configFromStringAndFormat(tempConfig);
      if (isValid(tempConfig)) {
        validFormatFound = true;
      }

      // if there is any input that was not parsed add a penalty for that format
      currentScore += getParsingFlags(tempConfig).charsLeftOver;

      //or tokens
      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
      getParsingFlags(tempConfig).score = currentScore;
      if (!bestFormatIsValid) {
        if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
          if (validFormatFound) {
            bestFormatIsValid = true;
          }
        }
      } else {
        if (currentScore < scoreToBeat) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
        }
      }
    }
    extend(config, bestMoment || tempConfig);
  }
  function configFromObject(config) {
    if (config._d) {
      return;
    }
    var i = normalizeObjectUnits(config._i),
      dayOrDate = i.day === undefined ? i.date : i.day;
    config._a = map([i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond], function (obj) {
      return obj && parseInt(obj, 10);
    });
    configFromArray(config);
  }
  function createFromConfig(config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
      // Adding is smart enough around DST
      res.add(1, 'd');
      res._nextDay = undefined;
    }
    return res;
  }
  function prepareConfig(config) {
    var input = config._i,
      format = config._f;
    config._locale = config._locale || getLocale(config._l);
    if (input === null || format === undefined && input === '') {
      return createInvalid({
        nullInput: true
      });
    }
    if (typeof input === 'string') {
      config._i = input = config._locale.preparse(input);
    }
    if (isMoment(input)) {
      return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
      config._d = input;
    } else if (isArray(format)) {
      configFromStringAndArray(config);
    } else if (format) {
      configFromStringAndFormat(config);
    } else {
      configFromInput(config);
    }
    if (!isValid(config)) {
      config._d = null;
    }
    return config;
  }
  function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
      config._d = new Date(hooks.now());
    } else if (isDate(input)) {
      config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
      configFromString(config);
    } else if (isArray(input)) {
      config._a = map(input.slice(0), function (obj) {
        return parseInt(obj, 10);
      });
      configFromArray(config);
    } else if (isObject(input)) {
      configFromObject(config);
    } else if (isNumber(input)) {
      // from milliseconds
      config._d = new Date(input);
    } else {
      hooks.createFromInputFallback(config);
    }
  }
  function createLocalOrUTC(input, format, locale, strict, isUTC) {
    var c = {};
    if (format === true || format === false) {
      strict = format;
      format = undefined;
    }
    if (locale === true || locale === false) {
      strict = locale;
      locale = undefined;
    }
    if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
      input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;
    return createFromConfig(c);
  }
  function createLocal(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
  }
  var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
      var other = createLocal.apply(null, arguments);
      if (this.isValid() && other.isValid()) {
        return other < this ? this : other;
      } else {
        return createInvalid();
      }
    }),
    prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
      var other = createLocal.apply(null, arguments);
      if (this.isValid() && other.isValid()) {
        return other > this ? this : other;
      } else {
        return createInvalid();
      }
    });

  // Pick a moment m from moments so that m[fn](other) is true for all
  // other. This relies on the function fn to be transitive.
  //
  // moments should either be an array of moment objects or an array, whose
  // first element is an array of moment objects.
  function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
      moments = moments[0];
    }
    if (!moments.length) {
      return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
      if (!moments[i].isValid() || moments[i][fn](res)) {
        res = moments[i];
      }
    }
    return res;
  }

  // TODO: Use [].sort instead?
  function min() {
    var args = [].slice.call(arguments, 0);
    return pickBy('isBefore', args);
  }
  function max() {
    var args = [].slice.call(arguments, 0);
    return pickBy('isAfter', args);
  }
  var now = function () {
    return Date.now ? Date.now() : +new Date();
  };
  var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];
  function isDurationValid(m) {
    var key,
      unitHasDecimal = false,
      i,
      orderLen = ordering.length;
    for (key in m) {
      if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
        return false;
      }
    }
    for (i = 0; i < orderLen; ++i) {
      if (m[ordering[i]]) {
        if (unitHasDecimal) {
          return false; // only allow non-integers for smallest unit
        }

        if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
          unitHasDecimal = true;
        }
      }
    }
    return true;
  }
  function isValid$1() {
    return this._isValid;
  }
  function createInvalid$1() {
    return createDuration(NaN);
  }
  function Duration(duration) {
    var normalizedInput = normalizeObjectUnits(duration),
      years = normalizedInput.year || 0,
      quarters = normalizedInput.quarter || 0,
      months = normalizedInput.month || 0,
      weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
      days = normalizedInput.day || 0,
      hours = normalizedInput.hour || 0,
      minutes = normalizedInput.minute || 0,
      seconds = normalizedInput.second || 0,
      milliseconds = normalizedInput.millisecond || 0;
    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds + seconds * 1e3 +
    // 1000
    minutes * 6e4 +
    // 1000 * 60
    hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days + weeks * 7;
    // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months + quarters * 3 + years * 12;
    this._data = {};
    this._locale = getLocale();
    this._bubble();
  }
  function isDuration(obj) {
    return obj instanceof Duration;
  }
  function absRound(number) {
    if (number < 0) {
      return Math.round(-1 * number) * -1;
    } else {
      return Math.round(number);
    }
  }

  // compare two arrays, return the number of differences
  function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
      lengthDiff = Math.abs(array1.length - array2.length),
      diffs = 0,
      i;
    for (i = 0; i < len; i++) {
      if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
        diffs++;
      }
    }
    return diffs + lengthDiff;
  }

  // FORMATTING

  function offset(token, separator) {
    addFormatToken(token, 0, 0, function () {
      var offset = this.utcOffset(),
        sign = '+';
      if (offset < 0) {
        offset = -offset;
        sign = '-';
      }
      return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
    });
  }
  offset('Z', ':');
  offset('ZZ', '');

  // PARSING

  addRegexToken('Z', matchShortOffset);
  addRegexToken('ZZ', matchShortOffset);
  addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
  });

  // HELPERS

  // timezone chunker
  // '+10:00' > ['10',  '00']
  // '-1530'  > ['-15', '30']
  var chunkOffset = /([\+\-]|\d\d)/gi;
  function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher),
      chunk,
      parts,
      minutes;
    if (matches === null) {
      return null;
    }
    chunk = matches[matches.length - 1] || [];
    parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    minutes = +(parts[1] * 60) + toInt(parts[2]);
    return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
  }

  // Return a moment from input, that is local/utc/zone equivalent to model.
  function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
      res = model.clone();
      diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
      // Use low-level api, because this fn is low-level api.
      res._d.setTime(res._d.valueOf() + diff);
      hooks.updateOffset(res, false);
      return res;
    } else {
      return createLocal(input).local();
    }
  }
  function getDateOffset(m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset());
  }

  // HOOKS

  // This function will be called whenever a moment is mutated.
  // It is intended to keep the offset in sync with the timezone.
  hooks.updateOffset = function () {};

  // MOMENTS

  // keepLocalTime = true means only change the timezone, without
  // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
  // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
  // +0200, so we adjust the time as needed, to be valid.
  //
  // Keeping the time actually adds/subtracts (one hour)
  // from the actual represented time. That is why we call updateOffset
  // a second time. In case it wants us to change the offset again
  // _changeInProgress == true case, then we have to adjust, because
  // there is no such time in the given timezone.
  function getSetOffset(input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
      localAdjust;
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    if (input != null) {
      if (typeof input === 'string') {
        input = offsetFromString(matchShortOffset, input);
        if (input === null) {
          return this;
        }
      } else if (Math.abs(input) < 16 && !keepMinutes) {
        input = input * 60;
      }
      if (!this._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(this);
      }
      this._offset = input;
      this._isUTC = true;
      if (localAdjust != null) {
        this.add(localAdjust, 'm');
      }
      if (offset !== input) {
        if (!keepLocalTime || this._changeInProgress) {
          addSubtract(this, createDuration(input - offset, 'm'), 1, false);
        } else if (!this._changeInProgress) {
          this._changeInProgress = true;
          hooks.updateOffset(this, true);
          this._changeInProgress = null;
        }
      }
      return this;
    } else {
      return this._isUTC ? offset : getDateOffset(this);
    }
  }
  function getSetZone(input, keepLocalTime) {
    if (input != null) {
      if (typeof input !== 'string') {
        input = -input;
      }
      this.utcOffset(input, keepLocalTime);
      return this;
    } else {
      return -this.utcOffset();
    }
  }
  function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
  }
  function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);
      this._isUTC = false;
      if (keepLocalTime) {
        this.subtract(getDateOffset(this), 'm');
      }
    }
    return this;
  }
  function setOffsetToParsedOffset() {
    if (this._tzm != null) {
      this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
      var tZone = offsetFromString(matchOffset, this._i);
      if (tZone != null) {
        this.utcOffset(tZone);
      } else {
        this.utcOffset(0, true);
      }
    }
    return this;
  }
  function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
      return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;
    return (this.utcOffset() - input) % 60 === 0;
  }
  function isDaylightSavingTime() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }
  function isDaylightSavingTimeShifted() {
    if (!isUndefined(this._isDSTShifted)) {
      return this._isDSTShifted;
    }
    var c = {},
      other;
    copyConfig(c, this);
    c = prepareConfig(c);
    if (c._a) {
      other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
      this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
    } else {
      this._isDSTShifted = false;
    }
    return this._isDSTShifted;
  }
  function isLocal() {
    return this.isValid() ? !this._isUTC : false;
  }
  function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
  }
  function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  }

  // ASP.NET json date format regex
  var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function createDuration(input, key) {
    var duration = input,
      // matching against regexp is expensive, do it on demand
      match = null,
      sign,
      ret,
      diffRes;
    if (isDuration(input)) {
      duration = {
        ms: input._milliseconds,
        d: input._days,
        M: input._months
      };
    } else if (isNumber(input) || !isNaN(+input)) {
      duration = {};
      if (key) {
        duration[key] = +input;
      } else {
        duration.milliseconds = +input;
      }
    } else if (match = aspNetRegex.exec(input)) {
      sign = match[1] === '-' ? -1 : 1;
      duration = {
        y: 0,
        d: toInt(match[DATE]) * sign,
        h: toInt(match[HOUR]) * sign,
        m: toInt(match[MINUTE]) * sign,
        s: toInt(match[SECOND]) * sign,
        ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
      };
    } else if (match = isoRegex.exec(input)) {
      sign = match[1] === '-' ? -1 : 1;
      duration = {
        y: parseIso(match[2], sign),
        M: parseIso(match[3], sign),
        w: parseIso(match[4], sign),
        d: parseIso(match[5], sign),
        h: parseIso(match[6], sign),
        m: parseIso(match[7], sign),
        s: parseIso(match[8], sign)
      };
    } else if (duration == null) {
      // checks for null or undefined
      duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
      diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
    }
    ret = new Duration(duration);
    if (isDuration(input) && hasOwnProp(input, '_locale')) {
      ret._locale = input._locale;
    }
    if (isDuration(input) && hasOwnProp(input, '_isValid')) {
      ret._isValid = input._isValid;
    }
    return ret;
  }
  createDuration.fn = Duration.prototype;
  createDuration.invalid = createInvalid$1;
  function parseIso(inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
  }
  function positiveMomentsDifference(base, other) {
    var res = {};
    res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
      --res.months;
    }
    res.milliseconds = +other - +base.clone().add(res.months, 'M');
    return res;
  }
  function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
      return {
        milliseconds: 0,
        months: 0
      };
    }
    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }
    return res;
  }

  // TODO: remove 'name' arg after deprecation is removed
  function createAdder(direction, name) {
    return function (val, period) {
      var dur, tmp;
      //invert the arguments, but complain about it
      if (period !== null && !isNaN(+period)) {
        deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
        tmp = val;
        val = period;
        period = tmp;
      }
      dur = createDuration(val, period);
      addSubtract(this, dur, direction);
      return this;
    };
  }
  function addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
      days = absRound(duration._days),
      months = absRound(duration._months);
    if (!mom.isValid()) {
      // No op
      return;
    }
    updateOffset = updateOffset == null ? true : updateOffset;
    if (months) {
      setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (days) {
      set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (milliseconds) {
      mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (updateOffset) {
      hooks.updateOffset(mom, days || months);
    }
  }
  var add = createAdder(1, 'add'),
    subtract = createAdder(-1, 'subtract');
  function isString(input) {
    return typeof input === 'string' || input instanceof String;
  }

  // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
  function isMomentInput(input) {
    return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === undefined;
  }
  function isMomentInputObject(input) {
    var objectTest = isObject(input) && !isObjectEmpty(input),
      propertyTest = false,
      properties = ['years', 'year', 'y', 'months', 'month', 'M', 'days', 'day', 'd', 'dates', 'date', 'D', 'hours', 'hour', 'h', 'minutes', 'minute', 'm', 'seconds', 'second', 's', 'milliseconds', 'millisecond', 'ms'],
      i,
      property,
      propertyLen = properties.length;
    for (i = 0; i < propertyLen; i += 1) {
      property = properties[i];
      propertyTest = propertyTest || hasOwnProp(input, property);
    }
    return objectTest && propertyTest;
  }
  function isNumberOrStringArray(input) {
    var arrayTest = isArray(input),
      dataTypeTest = false;
    if (arrayTest) {
      dataTypeTest = input.filter(function (item) {
        return !isNumber(item) && isString(input);
      }).length === 0;
    }
    return arrayTest && dataTypeTest;
  }
  function isCalendarSpec(input) {
    var objectTest = isObject(input) && !isObjectEmpty(input),
      propertyTest = false,
      properties = ['sameDay', 'nextDay', 'lastDay', 'nextWeek', 'lastWeek', 'sameElse'],
      i,
      property;
    for (i = 0; i < properties.length; i += 1) {
      property = properties[i];
      propertyTest = propertyTest || hasOwnProp(input, property);
    }
    return objectTest && propertyTest;
  }
  function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
  }
  function calendar$1(time, formats) {
    // Support for single parameter, formats only overload to the calendar function
    if (arguments.length === 1) {
      if (!arguments[0]) {
        time = undefined;
        formats = undefined;
      } else if (isMomentInput(arguments[0])) {
        time = arguments[0];
        formats = undefined;
      } else if (isCalendarSpec(arguments[0])) {
        formats = arguments[0];
        time = undefined;
      }
    }
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
      sod = cloneWithOffset(now, this).startOf('day'),
      format = hooks.calendarFormat(this, sod) || 'sameElse',
      output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
  }
  function clone() {
    return new Moment(this);
  }
  function isAfter(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || 'millisecond';
    if (units === 'millisecond') {
      return this.valueOf() > localInput.valueOf();
    } else {
      return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
  }
  function isBefore(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || 'millisecond';
    if (units === 'millisecond') {
      return this.valueOf() < localInput.valueOf();
    } else {
      return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
  }
  function isBetween(from, to, units, inclusivity) {
    var localFrom = isMoment(from) ? from : createLocal(from),
      localTo = isMoment(to) ? to : createLocal(to);
    if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
      return false;
    }
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
  }
  function isSame(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
      inputMs;
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || 'millisecond';
    if (units === 'millisecond') {
      return this.valueOf() === localInput.valueOf();
    } else {
      inputMs = localInput.valueOf();
      return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
  }
  function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
  }
  function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
  }
  function diff(input, units, asFloat) {
    var that, zoneDelta, output;
    if (!this.isValid()) {
      return NaN;
    }
    that = cloneWithOffset(input, this);
    if (!that.isValid()) {
      return NaN;
    }
    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
    units = normalizeUnits(units);
    switch (units) {
      case 'year':
        output = monthDiff(this, that) / 12;
        break;
      case 'month':
        output = monthDiff(this, that);
        break;
      case 'quarter':
        output = monthDiff(this, that) / 3;
        break;
      case 'second':
        output = (this - that) / 1e3;
        break;
      // 1000
      case 'minute':
        output = (this - that) / 6e4;
        break;
      // 1000 * 60
      case 'hour':
        output = (this - that) / 36e5;
        break;
      // 1000 * 60 * 60
      case 'day':
        output = (this - that - zoneDelta) / 864e5;
        break;
      // 1000 * 60 * 60 * 24, negate dst
      case 'week':
        output = (this - that - zoneDelta) / 6048e5;
        break;
      // 1000 * 60 * 60 * 24 * 7, negate dst
      default:
        output = this - that;
    }
    return asFloat ? output : absFloor(output);
  }
  function monthDiff(a, b) {
    if (a.date() < b.date()) {
      // end-of-month calculations work correct when the start month has more
      // days than the end month.
      return -monthDiff(b, a);
    }
    // difference in months
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
      // b is in (anchor - 1 month, anchor + 1 month)
      anchor = a.clone().add(wholeMonthDiff, 'months'),
      anchor2,
      adjust;
    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
      // linear across the month
      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
      // linear across the month
      adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
  }
  hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
  hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
  function toString() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
  }
  function toISOString(keepOffset) {
    if (!this.isValid()) {
      return null;
    }
    var utc = keepOffset !== true,
      m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
      return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    if (isFunction(Date.prototype.toISOString)) {
      // native implementation is ~50x faster, use it when we can
      if (utc) {
        return this.toDate().toISOString();
      } else {
        return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
      }
    }
    return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
  }

  /**
   * Return a human readable representation of a moment that can
   * also be evaluated to get a new moment which is the same
   *
   * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
   */
  function inspect() {
    if (!this.isValid()) {
      return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment',
      zone = '',
      prefix,
      year,
      datetime,
      suffix;
    if (!this.isLocal()) {
      func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
      zone = 'Z';
    }
    prefix = '[' + func + '("]';
    year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
    datetime = '-MM-DD[T]HH:mm:ss.SSS';
    suffix = zone + '[")]';
    return this.format(prefix + year + datetime + suffix);
  }
  function format(inputString) {
    if (!inputString) {
      inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
  }
  function from(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({
        to: this,
        from: time
      }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function fromNow(withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
  }
  function to(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({
        from: this,
        to: time
      }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function toNow(withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
  }

  // If passed a locale key, it will set the locale for this
  // instance.  Otherwise, it will return the locale configuration
  // variables for this instance.
  function locale(key) {
    var newLocaleData;
    if (key === undefined) {
      return this._locale._abbr;
    } else {
      newLocaleData = getLocale(key);
      if (newLocaleData != null) {
        this._locale = newLocaleData;
      }
      return this;
    }
  }
  var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
    if (key === undefined) {
      return this.localeData();
    } else {
      return this.locale(key);
    }
  });
  function localeData() {
    return this._locale;
  }
  var MS_PER_SECOND = 1000,
    MS_PER_MINUTE = 60 * MS_PER_SECOND,
    MS_PER_HOUR = 60 * MS_PER_MINUTE,
    MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

  // actual modulo - handles negative numbers (for dates before 1970):
  function mod$1(dividend, divisor) {
    return (dividend % divisor + divisor) % divisor;
  }
  function localStartOfDate(y, m, d) {
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
      // preserve leap years using a full 400 year cycle, then reset
      return new Date(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
      return new Date(y, m, d).valueOf();
    }
  }
  function utcStartOfDate(y, m, d) {
    // Date.UTC remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
      // preserve leap years using a full 400 year cycle, then reset
      return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
      return Date.UTC(y, m, d);
    }
  }
  function startOf(units) {
    var time, startOfDate;
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond' || !this.isValid()) {
      return this;
    }
    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
    switch (units) {
      case 'year':
        time = startOfDate(this.year(), 0, 1);
        break;
      case 'quarter':
        time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
        break;
      case 'month':
        time = startOfDate(this.year(), this.month(), 1);
        break;
      case 'week':
        time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
        break;
      case 'isoWeek':
        time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
        break;
      case 'day':
      case 'date':
        time = startOfDate(this.year(), this.month(), this.date());
        break;
      case 'hour':
        time = this._d.valueOf();
        time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
        break;
      case 'minute':
        time = this._d.valueOf();
        time -= mod$1(time, MS_PER_MINUTE);
        break;
      case 'second':
        time = this._d.valueOf();
        time -= mod$1(time, MS_PER_SECOND);
        break;
    }
    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }
  function endOf(units) {
    var time, startOfDate;
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond' || !this.isValid()) {
      return this;
    }
    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
    switch (units) {
      case 'year':
        time = startOfDate(this.year() + 1, 0, 1) - 1;
        break;
      case 'quarter':
        time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
        break;
      case 'month':
        time = startOfDate(this.year(), this.month() + 1, 1) - 1;
        break;
      case 'week':
        time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
        break;
      case 'isoWeek':
        time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
        break;
      case 'day':
      case 'date':
        time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case 'hour':
        time = this._d.valueOf();
        time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
        break;
      case 'minute':
        time = this._d.valueOf();
        time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
        break;
      case 'second':
        time = this._d.valueOf();
        time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
        break;
    }
    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }
  function valueOf() {
    return this._d.valueOf() - (this._offset || 0) * 60000;
  }
  function unix() {
    return Math.floor(this.valueOf() / 1000);
  }
  function toDate() {
    return new Date(this.valueOf());
  }
  function toArray() {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
  }
  function toObject() {
    var m = this;
    return {
      years: m.year(),
      months: m.month(),
      date: m.date(),
      hours: m.hours(),
      minutes: m.minutes(),
      seconds: m.seconds(),
      milliseconds: m.milliseconds()
    };
  }
  function toJSON() {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
  }
  function isValid$2() {
    return isValid(this);
  }
  function parsingFlags() {
    return extend({}, getParsingFlags(this));
  }
  function invalidAt() {
    return getParsingFlags(this).overflow;
  }
  function creationData() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }
  addFormatToken('N', 0, 0, 'eraAbbr');
  addFormatToken('NN', 0, 0, 'eraAbbr');
  addFormatToken('NNN', 0, 0, 'eraAbbr');
  addFormatToken('NNNN', 0, 0, 'eraName');
  addFormatToken('NNNNN', 0, 0, 'eraNarrow');
  addFormatToken('y', ['y', 1], 'yo', 'eraYear');
  addFormatToken('y', ['yy', 2], 0, 'eraYear');
  addFormatToken('y', ['yyy', 3], 0, 'eraYear');
  addFormatToken('y', ['yyyy', 4], 0, 'eraYear');
  addRegexToken('N', matchEraAbbr);
  addRegexToken('NN', matchEraAbbr);
  addRegexToken('NNN', matchEraAbbr);
  addRegexToken('NNNN', matchEraName);
  addRegexToken('NNNNN', matchEraNarrow);
  addParseToken(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (input, array, config, token) {
    var era = config._locale.erasParse(input, token, config._strict);
    if (era) {
      getParsingFlags(config).era = era;
    } else {
      getParsingFlags(config).invalidEra = input;
    }
  });
  addRegexToken('y', matchUnsigned);
  addRegexToken('yy', matchUnsigned);
  addRegexToken('yyy', matchUnsigned);
  addRegexToken('yyyy', matchUnsigned);
  addRegexToken('yo', matchEraYearOrdinal);
  addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
  addParseToken(['yo'], function (input, array, config, token) {
    var match;
    if (config._locale._eraYearOrdinalRegex) {
      match = input.match(config._locale._eraYearOrdinalRegex);
    }
    if (config._locale.eraYearOrdinalParse) {
      array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
    } else {
      array[YEAR] = parseInt(input, 10);
    }
  });
  function localeEras(m, format) {
    var i,
      l,
      date,
      eras = this._eras || getLocale('en')._eras;
    for (i = 0, l = eras.length; i < l; ++i) {
      switch (typeof eras[i].since) {
        case 'string':
          // truncate time
          date = hooks(eras[i].since).startOf('day');
          eras[i].since = date.valueOf();
          break;
      }
      switch (typeof eras[i].until) {
        case 'undefined':
          eras[i].until = +Infinity;
          break;
        case 'string':
          // truncate time
          date = hooks(eras[i].until).startOf('day').valueOf();
          eras[i].until = date.valueOf();
          break;
      }
    }
    return eras;
  }
  function localeErasParse(eraName, format, strict) {
    var i,
      l,
      eras = this.eras(),
      name,
      abbr,
      narrow;
    eraName = eraName.toUpperCase();
    for (i = 0, l = eras.length; i < l; ++i) {
      name = eras[i].name.toUpperCase();
      abbr = eras[i].abbr.toUpperCase();
      narrow = eras[i].narrow.toUpperCase();
      if (strict) {
        switch (format) {
          case 'N':
          case 'NN':
          case 'NNN':
            if (abbr === eraName) {
              return eras[i];
            }
            break;
          case 'NNNN':
            if (name === eraName) {
              return eras[i];
            }
            break;
          case 'NNNNN':
            if (narrow === eraName) {
              return eras[i];
            }
            break;
        }
      } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
        return eras[i];
      }
    }
  }
  function localeErasConvertYear(era, year) {
    var dir = era.since <= era.until ? +1 : -1;
    if (year === undefined) {
      return hooks(era.since).year();
    } else {
      return hooks(era.since).year() + (year - era.offset) * dir;
    }
  }
  function getEraName() {
    var i,
      l,
      val,
      eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      // truncate time
      val = this.clone().startOf('day').valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].name;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].name;
      }
    }
    return '';
  }
  function getEraNarrow() {
    var i,
      l,
      val,
      eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      // truncate time
      val = this.clone().startOf('day').valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].narrow;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].narrow;
      }
    }
    return '';
  }
  function getEraAbbr() {
    var i,
      l,
      val,
      eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      // truncate time
      val = this.clone().startOf('day').valueOf();
      if (eras[i].since <= val && val <= eras[i].until) {
        return eras[i].abbr;
      }
      if (eras[i].until <= val && val <= eras[i].since) {
        return eras[i].abbr;
      }
    }
    return '';
  }
  function getEraYear() {
    var i,
      l,
      dir,
      val,
      eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      dir = eras[i].since <= eras[i].until ? +1 : -1;

      // truncate time
      val = this.clone().startOf('day').valueOf();
      if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
        return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
      }
    }
    return this.year();
  }
  function erasNameRegex(isStrict) {
    if (!hasOwnProp(this, '_erasNameRegex')) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasNameRegex : this._erasRegex;
  }
  function erasAbbrRegex(isStrict) {
    if (!hasOwnProp(this, '_erasAbbrRegex')) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasAbbrRegex : this._erasRegex;
  }
  function erasNarrowRegex(isStrict) {
    if (!hasOwnProp(this, '_erasNarrowRegex')) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasNarrowRegex : this._erasRegex;
  }
  function matchEraAbbr(isStrict, locale) {
    return locale.erasAbbrRegex(isStrict);
  }
  function matchEraName(isStrict, locale) {
    return locale.erasNameRegex(isStrict);
  }
  function matchEraNarrow(isStrict, locale) {
    return locale.erasNarrowRegex(isStrict);
  }
  function matchEraYearOrdinal(isStrict, locale) {
    return locale._eraYearOrdinalRegex || matchUnsigned;
  }
  function computeErasParse() {
    var abbrPieces = [],
      namePieces = [],
      narrowPieces = [],
      mixedPieces = [],
      i,
      l,
      eras = this.eras();
    for (i = 0, l = eras.length; i < l; ++i) {
      namePieces.push(regexEscape(eras[i].name));
      abbrPieces.push(regexEscape(eras[i].abbr));
      narrowPieces.push(regexEscape(eras[i].narrow));
      mixedPieces.push(regexEscape(eras[i].name));
      mixedPieces.push(regexEscape(eras[i].abbr));
      mixedPieces.push(regexEscape(eras[i].narrow));
    }
    this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
    this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
    this._erasNarrowRegex = new RegExp('^(' + narrowPieces.join('|') + ')', 'i');
  }

  // FORMATTING

  addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
  });
  addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
  });
  function addWeekYearFormatToken(token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
  }
  addWeekYearFormatToken('gggg', 'weekYear');
  addWeekYearFormatToken('ggggg', 'weekYear');
  addWeekYearFormatToken('GGGG', 'isoWeekYear');
  addWeekYearFormatToken('GGGGG', 'isoWeekYear');

  // ALIASES

  addUnitAlias('weekYear', 'gg');
  addUnitAlias('isoWeekYear', 'GG');

  // PRIORITY

  addUnitPriority('weekYear', 1);
  addUnitPriority('isoWeekYear', 1);

  // PARSING

  addRegexToken('G', matchSigned);
  addRegexToken('g', matchSigned);
  addRegexToken('GG', match1to2, match2);
  addRegexToken('gg', match1to2, match2);
  addRegexToken('GGGG', match1to4, match4);
  addRegexToken('gggg', match1to4, match4);
  addRegexToken('GGGGG', match1to6, match6);
  addRegexToken('ggggg', match1to6, match6);
  addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
  });
  addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
  });

  // MOMENTS

  function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }
  function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
  }
  function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  }
  function getISOWeeksInISOWeekYear() {
    return weeksInYear(this.isoWeekYear(), 1, 4);
  }
  function getWeeksInYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }
  function getWeeksInWeekYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
  }
  function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
      return weekOfYear(this, dow, doy).year;
    } else {
      weeksTarget = weeksInYear(input, dow, doy);
      if (week > weeksTarget) {
        week = weeksTarget;
      }
      return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
  }
  function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
      date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
  }

  // FORMATTING

  addFormatToken('Q', 0, 'Qo', 'quarter');

  // ALIASES

  addUnitAlias('quarter', 'Q');

  // PRIORITY

  addUnitPriority('quarter', 7);

  // PARSING

  addRegexToken('Q', match1);
  addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
  });

  // MOMENTS

  function getSetQuarter(input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
  }

  // FORMATTING

  addFormatToken('D', ['DD', 2], 'Do', 'date');

  // ALIASES

  addUnitAlias('date', 'D');

  // PRIORITY
  addUnitPriority('date', 9);

  // PARSING

  addRegexToken('D', match1to2);
  addRegexToken('DD', match1to2, match2);
  addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
  });
  addParseToken(['D', 'DD'], DATE);
  addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0]);
  });

  // MOMENTS

  var getSetDayOfMonth = makeGetSet('Date', true);

  // FORMATTING

  addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

  // ALIASES

  addUnitAlias('dayOfYear', 'DDD');

  // PRIORITY
  addUnitPriority('dayOfYear', 4);

  // PARSING

  addRegexToken('DDD', match1to3);
  addRegexToken('DDDD', match3);
  addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
  });

  // HELPERS

  // MOMENTS

  function getSetDayOfYear(input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
  }

  // FORMATTING

  addFormatToken('m', ['mm', 2], 0, 'minute');

  // ALIASES

  addUnitAlias('minute', 'm');

  // PRIORITY

  addUnitPriority('minute', 14);

  // PARSING

  addRegexToken('m', match1to2);
  addRegexToken('mm', match1to2, match2);
  addParseToken(['m', 'mm'], MINUTE);

  // MOMENTS

  var getSetMinute = makeGetSet('Minutes', false);

  // FORMATTING

  addFormatToken('s', ['ss', 2], 0, 'second');

  // ALIASES

  addUnitAlias('second', 's');

  // PRIORITY

  addUnitPriority('second', 15);

  // PARSING

  addRegexToken('s', match1to2);
  addRegexToken('ss', match1to2, match2);
  addParseToken(['s', 'ss'], SECOND);

  // MOMENTS

  var getSetSecond = makeGetSet('Seconds', false);

  // FORMATTING

  addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
  });
  addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
  });
  addFormatToken(0, ['SSS', 3], 0, 'millisecond');
  addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
  });
  addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
  });
  addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
  });
  addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
  });
  addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
  });
  addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
  });

  // ALIASES

  addUnitAlias('millisecond', 'ms');

  // PRIORITY

  addUnitPriority('millisecond', 16);

  // PARSING

  addRegexToken('S', match1to3, match1);
  addRegexToken('SS', match1to3, match2);
  addRegexToken('SSS', match1to3, match3);
  var token, getSetMillisecond;
  for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
  }
  function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
  }
  for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
  }
  getSetMillisecond = makeGetSet('Milliseconds', false);

  // FORMATTING

  addFormatToken('z', 0, 0, 'zoneAbbr');
  addFormatToken('zz', 0, 0, 'zoneName');

  // MOMENTS

  function getZoneAbbr() {
    return this._isUTC ? 'UTC' : '';
  }
  function getZoneName() {
    return this._isUTC ? 'Coordinated Universal Time' : '';
  }
  var proto = Moment.prototype;
  proto.add = add;
  proto.calendar = calendar$1;
  proto.clone = clone;
  proto.diff = diff;
  proto.endOf = endOf;
  proto.format = format;
  proto.from = from;
  proto.fromNow = fromNow;
  proto.to = to;
  proto.toNow = toNow;
  proto.get = stringGet;
  proto.invalidAt = invalidAt;
  proto.isAfter = isAfter;
  proto.isBefore = isBefore;
  proto.isBetween = isBetween;
  proto.isSame = isSame;
  proto.isSameOrAfter = isSameOrAfter;
  proto.isSameOrBefore = isSameOrBefore;
  proto.isValid = isValid$2;
  proto.lang = lang;
  proto.locale = locale;
  proto.localeData = localeData;
  proto.max = prototypeMax;
  proto.min = prototypeMin;
  proto.parsingFlags = parsingFlags;
  proto.set = stringSet;
  proto.startOf = startOf;
  proto.subtract = subtract;
  proto.toArray = toArray;
  proto.toObject = toObject;
  proto.toDate = toDate;
  proto.toISOString = toISOString;
  proto.inspect = inspect;
  if (typeof Symbol !== 'undefined' && Symbol.for != null) {
    proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
      return 'Moment<' + this.format() + '>';
    };
  }
  proto.toJSON = toJSON;
  proto.toString = toString;
  proto.unix = unix;
  proto.valueOf = valueOf;
  proto.creationData = creationData;
  proto.eraName = getEraName;
  proto.eraNarrow = getEraNarrow;
  proto.eraAbbr = getEraAbbr;
  proto.eraYear = getEraYear;
  proto.year = getSetYear;
  proto.isLeapYear = getIsLeapYear;
  proto.weekYear = getSetWeekYear;
  proto.isoWeekYear = getSetISOWeekYear;
  proto.quarter = proto.quarters = getSetQuarter;
  proto.month = getSetMonth;
  proto.daysInMonth = getDaysInMonth;
  proto.week = proto.weeks = getSetWeek;
  proto.isoWeek = proto.isoWeeks = getSetISOWeek;
  proto.weeksInYear = getWeeksInYear;
  proto.weeksInWeekYear = getWeeksInWeekYear;
  proto.isoWeeksInYear = getISOWeeksInYear;
  proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
  proto.date = getSetDayOfMonth;
  proto.day = proto.days = getSetDayOfWeek;
  proto.weekday = getSetLocaleDayOfWeek;
  proto.isoWeekday = getSetISODayOfWeek;
  proto.dayOfYear = getSetDayOfYear;
  proto.hour = proto.hours = getSetHour;
  proto.minute = proto.minutes = getSetMinute;
  proto.second = proto.seconds = getSetSecond;
  proto.millisecond = proto.milliseconds = getSetMillisecond;
  proto.utcOffset = getSetOffset;
  proto.utc = setOffsetToUTC;
  proto.local = setOffsetToLocal;
  proto.parseZone = setOffsetToParsedOffset;
  proto.hasAlignedHourOffset = hasAlignedHourOffset;
  proto.isDST = isDaylightSavingTime;
  proto.isLocal = isLocal;
  proto.isUtcOffset = isUtcOffset;
  proto.isUtc = isUtc;
  proto.isUTC = isUtc;
  proto.zoneAbbr = getZoneAbbr;
  proto.zoneName = getZoneName;
  proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
  proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
  proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
  proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
  proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);
  function createUnix(input) {
    return createLocal(input * 1000);
  }
  function createInZone() {
    return createLocal.apply(null, arguments).parseZone();
  }
  function preParsePostFormat(string) {
    return string;
  }
  var proto$1 = Locale.prototype;
  proto$1.calendar = calendar;
  proto$1.longDateFormat = longDateFormat;
  proto$1.invalidDate = invalidDate;
  proto$1.ordinal = ordinal;
  proto$1.preparse = preParsePostFormat;
  proto$1.postformat = preParsePostFormat;
  proto$1.relativeTime = relativeTime;
  proto$1.pastFuture = pastFuture;
  proto$1.set = set;
  proto$1.eras = localeEras;
  proto$1.erasParse = localeErasParse;
  proto$1.erasConvertYear = localeErasConvertYear;
  proto$1.erasAbbrRegex = erasAbbrRegex;
  proto$1.erasNameRegex = erasNameRegex;
  proto$1.erasNarrowRegex = erasNarrowRegex;
  proto$1.months = localeMonths;
  proto$1.monthsShort = localeMonthsShort;
  proto$1.monthsParse = localeMonthsParse;
  proto$1.monthsRegex = monthsRegex;
  proto$1.monthsShortRegex = monthsShortRegex;
  proto$1.week = localeWeek;
  proto$1.firstDayOfYear = localeFirstDayOfYear;
  proto$1.firstDayOfWeek = localeFirstDayOfWeek;
  proto$1.weekdays = localeWeekdays;
  proto$1.weekdaysMin = localeWeekdaysMin;
  proto$1.weekdaysShort = localeWeekdaysShort;
  proto$1.weekdaysParse = localeWeekdaysParse;
  proto$1.weekdaysRegex = weekdaysRegex;
  proto$1.weekdaysShortRegex = weekdaysShortRegex;
  proto$1.weekdaysMinRegex = weekdaysMinRegex;
  proto$1.isPM = localeIsPM;
  proto$1.meridiem = localeMeridiem;
  function get$1(format, index, field, setter) {
    var locale = getLocale(),
      utc = createUTC().set(setter, index);
    return locale[field](utc, format);
  }
  function listMonthsImpl(format, index, field) {
    if (isNumber(format)) {
      index = format;
      format = undefined;
    }
    format = format || '';
    if (index != null) {
      return get$1(format, index, field, 'month');
    }
    var i,
      out = [];
    for (i = 0; i < 12; i++) {
      out[i] = get$1(format, i, field, 'month');
    }
    return out;
  }

  // ()
  // (5)
  // (fmt, 5)
  // (fmt)
  // (true)
  // (true, 5)
  // (true, fmt, 5)
  // (true, fmt)
  function listWeekdaysImpl(localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
      if (isNumber(format)) {
        index = format;
        format = undefined;
      }
      format = format || '';
    } else {
      format = localeSorted;
      index = format;
      localeSorted = false;
      if (isNumber(format)) {
        index = format;
        format = undefined;
      }
      format = format || '';
    }
    var locale = getLocale(),
      shift = localeSorted ? locale._week.dow : 0,
      i,
      out = [];
    if (index != null) {
      return get$1(format, (index + shift) % 7, field, 'day');
    }
    for (i = 0; i < 7; i++) {
      out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
  }
  function listMonths(format, index) {
    return listMonthsImpl(format, index, 'months');
  }
  function listMonthsShort(format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
  }
  function listWeekdays(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
  }
  function listWeekdaysShort(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
  }
  function listWeekdaysMin(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
  }
  getSetGlobalLocale('en', {
    eras: [{
      since: '0001-01-01',
      until: +Infinity,
      offset: 1,
      name: 'Anno Domini',
      narrow: 'AD',
      abbr: 'AD'
    }, {
      since: '0000-12-31',
      until: -Infinity,
      offset: 1,
      name: 'Before Christ',
      narrow: 'BC',
      abbr: 'BC'
    }],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (number) {
      var b = number % 10,
        output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
      return number + output;
    }
  });

  // Side effect imports

  hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
  hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
  var mathAbs = Math.abs;
  function abs() {
    var data = this._data;
    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);
    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);
    return this;
  }
  function addSubtract$1(duration, input, value, direction) {
    var other = createDuration(input, value);
    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;
    return duration._bubble();
  }

  // supports only 2.0-style add(1, 's') or add(duration)
  function add$1(input, value) {
    return addSubtract$1(this, input, value, 1);
  }

  // supports only 2.0-style subtract(1, 's') or subtract(duration)
  function subtract$1(input, value) {
    return addSubtract$1(this, input, value, -1);
  }
  function absCeil(number) {
    if (number < 0) {
      return Math.floor(number);
    } else {
      return Math.ceil(number);
    }
  }
  function bubble() {
    var milliseconds = this._milliseconds,
      days = this._days,
      months = this._months,
      data = this._data,
      seconds,
      minutes,
      hours,
      years,
      monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
      milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
      days = 0;
      months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;
    seconds = absFloor(milliseconds / 1000);
    data.seconds = seconds % 60;
    minutes = absFloor(seconds / 60);
    data.minutes = minutes % 60;
    hours = absFloor(minutes / 60);
    data.hours = hours % 24;
    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;
    data.days = days;
    data.months = months;
    data.years = years;
    return this;
  }
  function daysToMonths(days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
  }
  function monthsToDays(months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
  }
  function as(units) {
    if (!this.isValid()) {
      return NaN;
    }
    var days,
      months,
      milliseconds = this._milliseconds;
    units = normalizeUnits(units);
    if (units === 'month' || units === 'quarter' || units === 'year') {
      days = this._days + milliseconds / 864e5;
      months = this._months + daysToMonths(days);
      switch (units) {
        case 'month':
          return months;
        case 'quarter':
          return months / 3;
        case 'year':
          return months / 12;
      }
    } else {
      // handle milliseconds separately because of floating point math errors (issue #1867)
      days = this._days + Math.round(monthsToDays(this._months));
      switch (units) {
        case 'week':
          return days / 7 + milliseconds / 6048e5;
        case 'day':
          return days + milliseconds / 864e5;
        case 'hour':
          return days * 24 + milliseconds / 36e5;
        case 'minute':
          return days * 1440 + milliseconds / 6e4;
        case 'second':
          return days * 86400 + milliseconds / 1000;
        // Math.floor prevents floating point math errors here
        case 'millisecond':
          return Math.floor(days * 864e5) + milliseconds;
        default:
          throw new Error('Unknown unit ' + units);
      }
    }
  }

  // TODO: Use this.as('ms')?
  function valueOf$1() {
    if (!this.isValid()) {
      return NaN;
    }
    return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
  }
  function makeAs(alias) {
    return function () {
      return this.as(alias);
    };
  }
  var asMilliseconds = makeAs('ms'),
    asSeconds = makeAs('s'),
    asMinutes = makeAs('m'),
    asHours = makeAs('h'),
    asDays = makeAs('d'),
    asWeeks = makeAs('w'),
    asMonths = makeAs('M'),
    asQuarters = makeAs('Q'),
    asYears = makeAs('y');
  function clone$1() {
    return createDuration(this);
  }
  function get$2(units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
  }
  function makeGetter(name) {
    return function () {
      return this.isValid() ? this._data[name] : NaN;
    };
  }
  var milliseconds = makeGetter('milliseconds'),
    seconds = makeGetter('seconds'),
    minutes = makeGetter('minutes'),
    hours = makeGetter('hours'),
    days = makeGetter('days'),
    months = makeGetter('months'),
    years = makeGetter('years');
  function weeks() {
    return absFloor(this.days() / 7);
  }
  var round = Math.round,
    thresholds = {
      ss: 44,
      // a few seconds to seconds
      s: 45,
      // seconds to minute
      m: 45,
      // minutes to hour
      h: 22,
      // hours to day
      d: 26,
      // days to month/week
      w: null,
      // weeks to month
      M: 11 // months to year
    };

  // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }
  function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
    var duration = createDuration(posNegDuration).abs(),
      seconds = round(duration.as('s')),
      minutes = round(duration.as('m')),
      hours = round(duration.as('h')),
      days = round(duration.as('d')),
      months = round(duration.as('M')),
      weeks = round(duration.as('w')),
      years = round(duration.as('y')),
      a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days];
    if (thresholds.w != null) {
      a = a || weeks <= 1 && ['w'] || weeks < thresholds.w && ['ww', weeks];
    }
    a = a || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
  }

  // This function allows you to set the rounding function for relative time strings
  function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === undefined) {
      return round;
    }
    if (typeof roundingFunction === 'function') {
      round = roundingFunction;
      return true;
    }
    return false;
  }

  // This function allows you to set a threshold for relative time strings
  function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
      return false;
    }
    if (limit === undefined) {
      return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
      thresholds.ss = limit - 1;
    }
    return true;
  }
  function humanize(argWithSuffix, argThresholds) {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }
    var withSuffix = false,
      th = thresholds,
      locale,
      output;
    if (typeof argWithSuffix === 'object') {
      argThresholds = argWithSuffix;
      argWithSuffix = false;
    }
    if (typeof argWithSuffix === 'boolean') {
      withSuffix = argWithSuffix;
    }
    if (typeof argThresholds === 'object') {
      th = Object.assign({}, thresholds, argThresholds);
      if (argThresholds.s != null && argThresholds.ss == null) {
        th.ss = argThresholds.s - 1;
      }
    }
    locale = this.localeData();
    output = relativeTime$1(this, !withSuffix, th, locale);
    if (withSuffix) {
      output = locale.pastFuture(+this, output);
    }
    return locale.postformat(output);
  }
  var abs$1 = Math.abs;
  function sign(x) {
    return (x > 0) - (x < 0) || +x;
  }
  function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }
    var seconds = abs$1(this._milliseconds) / 1000,
      days = abs$1(this._days),
      months = abs$1(this._months),
      minutes,
      hours,
      years,
      s,
      total = this.asSeconds(),
      totalSign,
      ymSign,
      daysSign,
      hmsSign;
    if (!total) {
      // this is the same as C#'s (Noda) and python (isodate)...
      // but not other JS (goog.date)
      return 'P0D';
    }

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes = absFloor(seconds / 60);
    hours = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
    totalSign = total < 0 ? '-' : '';
    ymSign = sign(this._months) !== sign(total) ? '-' : '';
    daysSign = sign(this._days) !== sign(total) ? '-' : '';
    hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
    return totalSign + 'P' + (years ? ymSign + years + 'Y' : '') + (months ? ymSign + months + 'M' : '') + (days ? daysSign + days + 'D' : '') + (hours || minutes || seconds ? 'T' : '') + (hours ? hmsSign + hours + 'H' : '') + (minutes ? hmsSign + minutes + 'M' : '') + (seconds ? hmsSign + s + 'S' : '');
  }
  var proto$2 = Duration.prototype;
  proto$2.isValid = isValid$1;
  proto$2.abs = abs;
  proto$2.add = add$1;
  proto$2.subtract = subtract$1;
  proto$2.as = as;
  proto$2.asMilliseconds = asMilliseconds;
  proto$2.asSeconds = asSeconds;
  proto$2.asMinutes = asMinutes;
  proto$2.asHours = asHours;
  proto$2.asDays = asDays;
  proto$2.asWeeks = asWeeks;
  proto$2.asMonths = asMonths;
  proto$2.asQuarters = asQuarters;
  proto$2.asYears = asYears;
  proto$2.valueOf = valueOf$1;
  proto$2._bubble = bubble;
  proto$2.clone = clone$1;
  proto$2.get = get$2;
  proto$2.milliseconds = milliseconds;
  proto$2.seconds = seconds;
  proto$2.minutes = minutes;
  proto$2.hours = hours;
  proto$2.days = days;
  proto$2.weeks = weeks;
  proto$2.months = months;
  proto$2.years = years;
  proto$2.humanize = humanize;
  proto$2.toISOString = toISOString$1;
  proto$2.toString = toISOString$1;
  proto$2.toJSON = toISOString$1;
  proto$2.locale = locale;
  proto$2.localeData = localeData;
  proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
  proto$2.lang = lang;

  // FORMATTING

  addFormatToken('X', 0, 0, 'unix');
  addFormatToken('x', 0, 0, 'valueOf');

  // PARSING

  addRegexToken('x', matchSigned);
  addRegexToken('X', matchTimestamp);
  addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input) * 1000);
  });
  addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
  });

  //! moment.js

  hooks.version = '2.29.4';
  setHookCallback(createLocal);
  hooks.fn = proto;
  hooks.min = min;
  hooks.max = max;
  hooks.now = now;
  hooks.utc = createUTC;
  hooks.unix = createUnix;
  hooks.months = listMonths;
  hooks.isDate = isDate;
  hooks.locale = getSetGlobalLocale;
  hooks.invalid = createInvalid;
  hooks.duration = createDuration;
  hooks.isMoment = isMoment;
  hooks.weekdays = listWeekdays;
  hooks.parseZone = createInZone;
  hooks.localeData = getLocale;
  hooks.isDuration = isDuration;
  hooks.monthsShort = listMonthsShort;
  hooks.weekdaysMin = listWeekdaysMin;
  hooks.defineLocale = defineLocale;
  hooks.updateLocale = updateLocale;
  hooks.locales = listLocales;
  hooks.weekdaysShort = listWeekdaysShort;
  hooks.normalizeUnits = normalizeUnits;
  hooks.relativeTimeRounding = getSetRelativeTimeRounding;
  hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
  hooks.calendarFormat = getCalendarFormat;
  hooks.prototype = proto;

  // currently HTML5 input type only supports 24-hour formats
  hooks.HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
    // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
    // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
    // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD',
    // <input type="date" />
    TIME: 'HH:mm',
    // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss',
    // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS',
    // <input type="time" step="0.001" />
    WEEK: 'GGGG-[W]WW',
    // <input type="week" />
    MONTH: 'YYYY-MM' // <input type="month" />
  };

  return hooks;
});

/***/ }),

/***/ 6573:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(7658);
// mutationobserver-shim v0.3.3 (github.com/megawac/MutationObserver.js)
// Authors: Graeme Yeates (github.com/megawac) 
/*
 Shim for MutationObserver interface
 Author: Graeme Yeates (github.com/megawac)
 Repository: https://github.com/megawac/MutationObserver.js
 License: WTFPL V2, 2004 (wtfpl.net).
 Though credit and staring the repo will make me feel pretty, you can modify and redistribute as you please.
 Attempts to follow spec (https://www.w3.org/TR/dom/#mutation-observers) as closely as possible for native javascript
 See https://github.com/WebKit/webkit/blob/master/Source/WebCore/dom/MutationObserver.cpp for current webkit source c++ implementation
*/
window.MutationObserver || (window.MutationObserver = function (y) {
  function z(a) {
    this.i = [];
    this.m = a;
  }
  function K(a) {
    (function c() {
      var d = a.takeRecords();
      d.length && a.m(d, a);
      a.h = setTimeout(c, z._period);
    })();
  }
  function r(a) {
    var b = {
        type: null,
        target: null,
        addedNodes: [],
        removedNodes: [],
        previousSibling: null,
        nextSibling: null,
        attributeName: null,
        attributeNamespace: null,
        oldValue: null
      },
      c;
    for (c in a) b[c] !== y && a[c] !== y && (b[c] = a[c]);
    return b;
  }
  function L(a, b) {
    var c = E(a, b);
    return function (d) {
      var f = d.length;
      b.a && 3 === a.nodeType && a.nodeValue !== c.a && d.push(new r({
        type: "characterData",
        target: a,
        oldValue: c.a
      }));
      b.b && c.b && C(d, a, c.b, b.f);
      if (b.c || b.g) var m = M(d, a, c, b);
      if (m || d.length !== f) c = E(a, b);
    };
  }
  function N(a, b) {
    return b.value;
  }
  function O(a, b) {
    return "style" !== b.name ? b.value : a.style.cssText;
  }
  function C(a, b, c, d) {
    for (var f = {}, m = b.attributes, k, g, p = m.length; p--;) k = m[p], g = k.name, d && d[g] === y || (F(b, k) !== c[g] && a.push(r({
      type: "attributes",
      target: b,
      attributeName: g,
      oldValue: c[g],
      attributeNamespace: k.namespaceURI
    })), f[g] = !0);
    for (g in c) f[g] || a.push(r({
      target: b,
      type: "attributes",
      attributeName: g,
      oldValue: c[g]
    }));
  }
  function M(a, b, c, d) {
    function f(g, p, t, q, x) {
      var A = g.length - 1;
      x = -~((A - x) / 2);
      for (var h, l, e; e = g.pop();) h = t[e.j], l = q[e.l], d.c && x && Math.abs(e.j - e.l) >= A && (a.push(r({
        type: "childList",
        target: p,
        addedNodes: [h],
        removedNodes: [h],
        nextSibling: h.nextSibling,
        previousSibling: h.previousSibling
      })), x--), d.b && l.b && C(a, h, l.b, d.f), d.a && 3 === h.nodeType && h.nodeValue !== l.a && a.push(r({
        type: "characterData",
        target: h,
        oldValue: l.a
      })), d.g && m(h, l);
    }
    function m(g, p) {
      for (var t = g.childNodes, q = p.c, x = t.length, A = q ? q.length : 0, h, l, e, n, v, B = 0, w = 0, u = 0; w < x || u < A;) n = t[w], v = (e = q[u]) && e.node, n === v ? (d.b && e.b && C(a, n, e.b, d.f), d.a && e.a !== y && n.nodeValue !== e.a && a.push(r({
        type: "characterData",
        target: n,
        oldValue: e.a
      })), l && f(l, g, t, q, B), d.g && (n.childNodes.length || e.c && e.c.length) && m(n, e), w++, u++) : (k = !0, h || (h = {}, l = []), n && (h[e = G(n)] || (h[e] = !0, -1 === (e = H(q, n, u, "node")) ? d.c && (a.push(r({
        type: "childList",
        target: g,
        addedNodes: [n],
        nextSibling: n.nextSibling,
        previousSibling: n.previousSibling
      })), B++) : l.push({
        j: w,
        l: e
      })), w++), v && v !== t[w] && (h[e = G(v)] || (h[e] = !0, -1 === (e = H(t, v, w)) ? d.c && (a.push(r({
        type: "childList",
        target: p.node,
        removedNodes: [v],
        nextSibling: q[u + 1],
        previousSibling: q[u - 1]
      })), B--) : l.push({
        j: e,
        l: u
      })), u++));
      l && f(l, g, t, q, B);
    }
    var k;
    m(b, c);
    return k;
  }
  function E(a, b) {
    var c = !0;
    return function m(f) {
      var k = {
        node: f
      };
      !b.a || 3 !== f.nodeType && 8 !== f.nodeType ? (b.b && c && 1 === f.nodeType && (k.b = I(f.attributes, function (g, p) {
        if (!b.f || b.f[p.name]) g[p.name] = F(f, p);
        return g;
      }, {})), c && (b.c || b.a || b.b && b.g) && (k.c = P(f.childNodes, m)), c = b.g) : k.a = f.nodeValue;
      return k;
    }(a);
  }
  function G(a) {
    try {
      return a.id || (a.mo_id = a.mo_id || J++);
    } catch (b) {
      try {
        return a.nodeValue;
      } catch (c) {
        return J++;
      }
    }
  }
  function P(a, b) {
    for (var c = [], d = 0; d < a.length; d++) c[d] = b(a[d], d, a);
    return c;
  }
  function I(a, b, c) {
    for (var d = 0; d < a.length; d++) c = b(c, a[d], d, a);
    return c;
  }
  function H(a, b, c, d) {
    for (; c < a.length; c++) if ((d ? a[c][d] : a[c]) === b) return c;
    return -1;
  }
  z._period = 30;
  z.prototype = {
    observe: function (a, b) {
      for (var c = {
          b: !!(b.attributes || b.attributeFilter || b.attributeOldValue),
          c: !!b.childList,
          g: !!b.subtree,
          a: !(!b.characterData && !b.characterDataOldValue)
        }, d = this.i, f = 0; f < d.length; f++) d[f].s === a && d.splice(f, 1);
      b.attributeFilter && (c.f = I(b.attributeFilter, function (m, k) {
        m[k] = !0;
        return m;
      }, {}));
      d.push({
        s: a,
        o: L(a, c)
      });
      this.h || K(this);
    },
    takeRecords: function () {
      for (var a = [], b = this.i, c = 0; c < b.length; c++) b[c].o(a);
      return a;
    },
    disconnect: function () {
      this.i = [];
      clearTimeout(this.h);
      this.h = null;
    }
  };
  var D = document.createElement("i");
  D.style.top = 0;
  var F = (D = "null" != D.attributes.style.value) ? N : O,
    J = 1;
  return z;
}(void 0));

/***/ }),

/***/ 47:
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/



/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }

    // Detect buggy property enumeration order in older V8 versions.

    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
    test1[5] = 'de';
    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });
    if (order2.join('') !== '0123456789') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }
    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}
module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};

/***/ }),

/***/ 3663:
/***/ (function(module) {

// Generated by CoffeeScript 1.12.2
(function () {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
  if (typeof performance !== "undefined" && performance !== null && performance.now) {
    module.exports = function () {
      return performance.now();
    };
  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
    module.exports = function () {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function () {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function () {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function () {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }
}).call(this);

/***/ }),

/***/ 6035:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(7658);
var now = __webpack_require__(3663),
  root = typeof window === 'undefined' ? __webpack_require__.g : window,
  vendors = ['moz', 'webkit'],
  suffix = 'AnimationFrame',
  raf = root['request' + suffix],
  caf = root['cancel' + suffix] || root['cancelRequest' + suffix];
for (var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if (!raf || !caf) {
  var last = 0,
    id = 0,
    queue = [],
    frameDuration = 1000 / 60;
  raf = function (callback) {
    if (queue.length === 0) {
      var _now = now(),
        next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function () {
        var cp = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        for (var i = 0; i < cp.length; i++) {
          if (!cp[i].cancelled) {
            try {
              cp[i].callback(last);
            } catch (e) {
              setTimeout(function () {
                throw e;
              }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id;
  };
  caf = function (handle) {
    for (var i = 0; i < queue.length; i++) {
      if (queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}
module.exports = function (fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn);
};
module.exports.cancel = function () {
  caf.apply(root, arguments);
};
module.exports.polyfill = function (object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};

/***/ }),

/***/ 7393:
/***/ (function(module) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (ret !== void 0) {
    return !!ret;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    var valueA = objA[key];
    var valueB = objB[key];
    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
};

/***/ }),

/***/ 2875:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Z = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var directiveName = options.name || "ref";
    Vue.directive(directiveName, {
      bind: function bind(el, binding, vnode) {
        Vue.nextTick(function () {
          binding.value(vnode.componentInstance || el, vnode.key);
        });
        binding.value(vnode.componentInstance || el, vnode.key);
      },
      update: function update(el, binding, vnode, oldVnode) {
        if (oldVnode.data && oldVnode.data.directives) {
          var oldBinding = oldVnode.data.directives.find(function (directive) {
            var name = directive.name;
            return name === directiveName;
          });
          if (oldBinding && oldBinding.value !== binding.value) {
            oldBinding && oldBinding.value(null, oldVnode.key);
            binding.value(vnode.componentInstance || el, vnode.key);
            return;
          }
        }
        // Should not have this situation
        if (vnode.componentInstance !== oldVnode.componentInstance || vnode.elm !== oldVnode.elm) {
          binding.value(vnode.componentInstance || el, vnode.key);
        }
      },
      unbind: function unbind(el, binding, vnode) {
        binding.value(null, vnode.key);
      }
    });
  }
};

/***/ }),

/***/ 6894:
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var __DEV__ = "production" !== 'production';
var warning = function () {};
if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
  warning = function (condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}
module.exports = warning;

/***/ }),

/***/ 8983:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(3036);
__webpack_require__(8385);
module.exports = __webpack_require__(4731).Array.from;


/***/ }),

/***/ 5198:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(6740);
__webpack_require__(3036);
module.exports = __webpack_require__(1764);


/***/ }),

/***/ 2066:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(6740);
__webpack_require__(3036);
module.exports = __webpack_require__(861);


/***/ }),

/***/ 8077:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(529);
module.exports = __webpack_require__(4731).Object.assign;


/***/ }),

/***/ 4003:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(1001);
var $Object = (__webpack_require__(4731).Object);
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ 9583:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(3835);
__webpack_require__(464);
__webpack_require__(4427);
__webpack_require__(9089);
module.exports = __webpack_require__(4731).Symbol;


/***/ }),

/***/ 3276:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(3036);
__webpack_require__(6740);
module.exports = (__webpack_require__(7613).f)('iterator');


/***/ }),

/***/ 1449:
/***/ (function(module) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 5345:
/***/ (function(module) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ 6504:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(9151);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 4389:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(4874);
var toLength = __webpack_require__(8317);
var toAbsoluteIndex = __webpack_require__(9838);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ 3965:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(4499);
var TAG = __webpack_require__(5346)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ 4499:
/***/ (function(module) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 4731:
/***/ (function(module) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 6184:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(1738);
var createDesc = __webpack_require__(8051);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 1821:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(1449);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 1605:
/***/ (function(module) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 5810:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(3777)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 2571:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(9151);
var document = (__webpack_require__(9362).document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 5568:
/***/ (function(module) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 2052:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(9656);
var gOPS = __webpack_require__(2614);
var pIE = __webpack_require__(3416);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ 9901:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(9362);
var core = __webpack_require__(4731);
var ctx = __webpack_require__(1821);
var hide = __webpack_require__(6519);
var has = __webpack_require__(3571);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 3777:
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 9362:
/***/ (function(module) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 3571:
/***/ (function(module) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 6519:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var dP = __webpack_require__(1738);
var createDesc = __webpack_require__(8051);
module.exports = __webpack_require__(5810) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 203:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var document = (__webpack_require__(9362).document);
module.exports = document && document.documentElement;


/***/ }),

/***/ 3254:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = !__webpack_require__(5810) && !__webpack_require__(3777)(function () {
  return Object.defineProperty(__webpack_require__(2571)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 2312:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(4499);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 4034:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(3135);
var ITERATOR = __webpack_require__(5346)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ 7539:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(4499);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ 9151:
/***/ (function(module) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 3749:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(6504);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ 9163:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(4055);
var descriptor = __webpack_require__(8051);
var setToStringTag = __webpack_require__(420);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6519)(IteratorPrototype, __webpack_require__(5346)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ 4346:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(7346);
var $export = __webpack_require__(9901);
var redefine = __webpack_require__(1865);
var hide = __webpack_require__(6519);
var Iterators = __webpack_require__(3135);
var $iterCreate = __webpack_require__(9163);
var setToStringTag = __webpack_require__(420);
var getPrototypeOf = __webpack_require__(1146);
var ITERATOR = __webpack_require__(5346)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ 8606:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ITERATOR = __webpack_require__(5346)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ 4098:
/***/ (function(module) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ 3135:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 7346:
/***/ (function(module) {

module.exports = true;


/***/ }),

/***/ 5965:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var META = __webpack_require__(3535)('meta');
var isObject = __webpack_require__(9151);
var has = __webpack_require__(3571);
var setDesc = (__webpack_require__(1738).f);
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(3777)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ 266:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(5810);
var getKeys = __webpack_require__(9656);
var gOPS = __webpack_require__(2614);
var pIE = __webpack_require__(3416);
var toObject = __webpack_require__(9411);
var IObject = __webpack_require__(2312);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(3777)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ 4055:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(6504);
var dPs = __webpack_require__(121);
var enumBugKeys = __webpack_require__(5568);
var IE_PROTO = __webpack_require__(6210)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(2571)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  (__webpack_require__(203).appendChild)(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ 1738:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var anObject = __webpack_require__(6504);
var IE8_DOM_DEFINE = __webpack_require__(3254);
var toPrimitive = __webpack_require__(5408);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5810) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 121:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var dP = __webpack_require__(1738);
var anObject = __webpack_require__(6504);
var getKeys = __webpack_require__(9656);

module.exports = __webpack_require__(5810) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ 8437:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var pIE = __webpack_require__(3416);
var createDesc = __webpack_require__(8051);
var toIObject = __webpack_require__(4874);
var toPrimitive = __webpack_require__(5408);
var has = __webpack_require__(3571);
var IE8_DOM_DEFINE = __webpack_require__(3254);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5810) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ 2029:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(4874);
var gOPN = (__webpack_require__(1471).f);
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ 1471:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(6152);
var hiddenKeys = (__webpack_require__(5568).concat)('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ 2614:
/***/ (function(__unused_webpack_module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 1146:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(3571);
var toObject = __webpack_require__(9411);
var IE_PROTO = __webpack_require__(6210)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ 6152:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(3571);
var toIObject = __webpack_require__(4874);
var arrayIndexOf = __webpack_require__(4389)(false);
var IE_PROTO = __webpack_require__(6210)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 9656:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(6152);
var enumBugKeys = __webpack_require__(5568);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 3416:
/***/ (function(__unused_webpack_module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 8051:
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 1865:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(6519);


/***/ }),

/***/ 420:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var def = (__webpack_require__(1738).f);
var has = __webpack_require__(3571);
var TAG = __webpack_require__(5346)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ 6210:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(7571)('keys');
var uid = __webpack_require__(3535);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 7571:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var core = __webpack_require__(4731);
var global = __webpack_require__(9362);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(7346) ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 2222:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(1485);
var defined = __webpack_require__(1605);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ 9838:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(1485);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 1485:
/***/ (function(module) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 4874:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(2312);
var defined = __webpack_require__(1605);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 8317:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(1485);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 9411:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(1605);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 5408:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9151);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 3535:
/***/ (function(module) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 1875:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(9362);
var core = __webpack_require__(4731);
var LIBRARY = __webpack_require__(7346);
var wksExt = __webpack_require__(7613);
var defineProperty = (__webpack_require__(1738).f);
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ 7613:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

exports.f = __webpack_require__(5346);


/***/ }),

/***/ 5346:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var store = __webpack_require__(7571)('wks');
var uid = __webpack_require__(3535);
var Symbol = (__webpack_require__(9362).Symbol);
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ 3898:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(3965);
var ITERATOR = __webpack_require__(5346)('iterator');
var Iterators = __webpack_require__(3135);
module.exports = (__webpack_require__(4731).getIteratorMethod) = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ 1764:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(6504);
var get = __webpack_require__(3898);
module.exports = (__webpack_require__(4731).getIterator) = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ 861:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(3965);
var ITERATOR = __webpack_require__(5346)('iterator');
var Iterators = __webpack_require__(3135);
module.exports = (__webpack_require__(4731).isIterable) = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ 8385:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(1821);
var $export = __webpack_require__(9901);
var toObject = __webpack_require__(9411);
var call = __webpack_require__(3749);
var isArrayIter = __webpack_require__(4034);
var toLength = __webpack_require__(8317);
var createProperty = __webpack_require__(6184);
var getIterFn = __webpack_require__(3898);

$export($export.S + $export.F * !__webpack_require__(8606)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ 1092:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(5345);
var step = __webpack_require__(4098);
var Iterators = __webpack_require__(3135);
var toIObject = __webpack_require__(4874);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(4346)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ 529:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(9901);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(266) });


/***/ }),

/***/ 1001:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $export = __webpack_require__(9901);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5810), 'Object', { defineProperty: (__webpack_require__(1738).f) });


/***/ }),

/***/ 464:
/***/ (function() {



/***/ }),

/***/ 3036:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(2222)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(4346)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ 3835:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(9362);
var has = __webpack_require__(3571);
var DESCRIPTORS = __webpack_require__(5810);
var $export = __webpack_require__(9901);
var redefine = __webpack_require__(1865);
var META = (__webpack_require__(5965).KEY);
var $fails = __webpack_require__(3777);
var shared = __webpack_require__(7571);
var setToStringTag = __webpack_require__(420);
var uid = __webpack_require__(3535);
var wks = __webpack_require__(5346);
var wksExt = __webpack_require__(7613);
var wksDefine = __webpack_require__(1875);
var enumKeys = __webpack_require__(2052);
var isArray = __webpack_require__(7539);
var anObject = __webpack_require__(6504);
var isObject = __webpack_require__(9151);
var toObject = __webpack_require__(9411);
var toIObject = __webpack_require__(4874);
var toPrimitive = __webpack_require__(5408);
var createDesc = __webpack_require__(8051);
var _create = __webpack_require__(4055);
var gOPNExt = __webpack_require__(2029);
var $GOPD = __webpack_require__(8437);
var $GOPS = __webpack_require__(2614);
var $DP = __webpack_require__(1738);
var $keys = __webpack_require__(9656);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  (__webpack_require__(1471).f) = gOPNExt.f = $getOwnPropertyNames;
  (__webpack_require__(3416).f) = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(7346)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(6519)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ 4427:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(1875)('asyncIterator');


/***/ }),

/***/ 9089:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(1875)('observable');


/***/ }),

/***/ 6740:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(1092);
var global = __webpack_require__(9362);
var hide = __webpack_require__(6519);
var Iterators = __webpack_require__(3135);
var TO_STRING_TAG = __webpack_require__(5346)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ 9662:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var tryToString = __webpack_require__(6330);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 6077:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ 5787:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(7976);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw $TypeError('Incorrect invocation');
};


/***/ }),

/***/ 9670:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(111);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 1318:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(5656);
var toAbsoluteIndex = __webpack_require__(1400);
var lengthOfArrayLike = __webpack_require__(6244);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 3658:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(9781);
var isArray = __webpack_require__(3157);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ 4326:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 648:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(1694);
var isCallable = __webpack_require__(614);
var classofRaw = __webpack_require__(4326);
var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 9920:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__(2597);
var ownKeys = __webpack_require__(3887);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var definePropertyModule = __webpack_require__(3070);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 8880:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var definePropertyModule = __webpack_require__(3070);
var createPropertyDescriptor = __webpack_require__(9114);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 9114:
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 8052:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var definePropertyModule = __webpack_require__(3070);
var makeBuiltIn = __webpack_require__(6339);
var defineGlobalProperty = __webpack_require__(3072);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 3072:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 5117:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var tryToString = __webpack_require__(6330);

var $TypeError = TypeError;

module.exports = function (O, P) {
  if (!delete O[P]) throw $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};


/***/ }),

/***/ 9781:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 4154:
/***/ (function(module) {

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};


/***/ }),

/***/ 317:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 7207:
/***/ (function(module) {

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 3678:
/***/ (function(module) {

module.exports = {
  IndexSizeError: { s: 'INDEX_SIZE_ERR', c: 1, m: 1 },
  DOMStringSizeError: { s: 'DOMSTRING_SIZE_ERR', c: 2, m: 0 },
  HierarchyRequestError: { s: 'HIERARCHY_REQUEST_ERR', c: 3, m: 1 },
  WrongDocumentError: { s: 'WRONG_DOCUMENT_ERR', c: 4, m: 1 },
  InvalidCharacterError: { s: 'INVALID_CHARACTER_ERR', c: 5, m: 1 },
  NoDataAllowedError: { s: 'NO_DATA_ALLOWED_ERR', c: 6, m: 0 },
  NoModificationAllowedError: { s: 'NO_MODIFICATION_ALLOWED_ERR', c: 7, m: 1 },
  NotFoundError: { s: 'NOT_FOUND_ERR', c: 8, m: 1 },
  NotSupportedError: { s: 'NOT_SUPPORTED_ERR', c: 9, m: 1 },
  InUseAttributeError: { s: 'INUSE_ATTRIBUTE_ERR', c: 10, m: 1 },
  InvalidStateError: { s: 'INVALID_STATE_ERR', c: 11, m: 1 },
  SyntaxError: { s: 'SYNTAX_ERR', c: 12, m: 1 },
  InvalidModificationError: { s: 'INVALID_MODIFICATION_ERR', c: 13, m: 1 },
  NamespaceError: { s: 'NAMESPACE_ERR', c: 14, m: 1 },
  InvalidAccessError: { s: 'INVALID_ACCESS_ERR', c: 15, m: 1 },
  ValidationError: { s: 'VALIDATION_ERR', c: 16, m: 0 },
  TypeMismatchError: { s: 'TYPE_MISMATCH_ERR', c: 17, m: 1 },
  SecurityError: { s: 'SECURITY_ERR', c: 18, m: 1 },
  NetworkError: { s: 'NETWORK_ERR', c: 19, m: 1 },
  AbortError: { s: 'ABORT_ERR', c: 20, m: 1 },
  URLMismatchError: { s: 'URL_MISMATCH_ERR', c: 21, m: 1 },
  QuotaExceededError: { s: 'QUOTA_EXCEEDED_ERR', c: 22, m: 1 },
  TimeoutError: { s: 'TIMEOUT_ERR', c: 23, m: 1 },
  InvalidNodeTypeError: { s: 'INVALID_NODE_TYPE_ERR', c: 24, m: 1 },
  DataCloneError: { s: 'DATA_CLONE_ERR', c: 25, m: 1 }
};


/***/ }),

/***/ 8113:
/***/ (function(module) {

module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ 7392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var userAgent = __webpack_require__(8113);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 748:
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 1060:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String($Error(arg).stack); })('zxcasd');
// eslint-disable-next-line redos/no-vulnerable -- safe
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ }),

/***/ 2109:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var getOwnPropertyDescriptor = (__webpack_require__(1236).f);
var createNonEnumerableProperty = __webpack_require__(8880);
var defineBuiltIn = __webpack_require__(8052);
var defineGlobalProperty = __webpack_require__(3072);
var copyConstructorProperties = __webpack_require__(9920);
var isForced = __webpack_require__(4705);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 7293:
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 4374:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 6916:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(4374);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 6530:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var hasOwn = __webpack_require__(2597);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 5668:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var aCallable = __webpack_require__(9662);

module.exports = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};


/***/ }),

/***/ 1702:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(4374);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 5005:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 8173:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aCallable = __webpack_require__(9662);
var isNullOrUndefined = __webpack_require__(8554);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 7854:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 2597:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var toObject = __webpack_require__(7908);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 3501:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 4664:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);
var createElement = __webpack_require__(317);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 8361:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var fails = __webpack_require__(7293);
var classof = __webpack_require__(4326);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 9587:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);
var setPrototypeOf = __webpack_require__(7674);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ 2788:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var isCallable = __webpack_require__(614);
var store = __webpack_require__(5465);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 9909:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(4811);
var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);
var createNonEnumerableProperty = __webpack_require__(8880);
var hasOwn = __webpack_require__(2597);
var shared = __webpack_require__(5465);
var sharedKey = __webpack_require__(6200);
var hiddenKeys = __webpack_require__(3501);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 3157:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(4326);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ 614:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var $documentAll = __webpack_require__(4154);

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 4705:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 8554:
/***/ (function(module) {

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 111:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var $documentAll = __webpack_require__(4154);

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 1913:
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ 2190:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);
var isCallable = __webpack_require__(614);
var isPrototypeOf = __webpack_require__(7976);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 6244:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toLength = __webpack_require__(7466);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 6339:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);
var hasOwn = __webpack_require__(2597);
var DESCRIPTORS = __webpack_require__(9781);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(6530).CONFIGURABLE);
var inspectSource = __webpack_require__(2788);
var InternalStateModule = __webpack_require__(9909);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 4758:
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 6277:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toString = __webpack_require__(1340);

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),

/***/ 3070:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var IE8_DOM_DEFINE = __webpack_require__(4664);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3353);
var anObject = __webpack_require__(9670);
var toPropertyKey = __webpack_require__(4948);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 1236:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var call = __webpack_require__(6916);
var propertyIsEnumerableModule = __webpack_require__(5296);
var createPropertyDescriptor = __webpack_require__(9114);
var toIndexedObject = __webpack_require__(5656);
var toPropertyKey = __webpack_require__(4948);
var hasOwn = __webpack_require__(2597);
var IE8_DOM_DEFINE = __webpack_require__(4664);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 8006:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 5181:
/***/ (function(__unused_webpack_module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 7976:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 6324:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var hasOwn = __webpack_require__(2597);
var toIndexedObject = __webpack_require__(5656);
var indexOf = (__webpack_require__(1318).indexOf);
var hiddenKeys = __webpack_require__(3501);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 5296:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 7674:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThisAccessor = __webpack_require__(5668);
var anObject = __webpack_require__(9670);
var aPossiblePrototype = __webpack_require__(6077);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 2140:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(6916);
var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 3887:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);
var uncurryThis = __webpack_require__(1702);
var getOwnPropertyNamesModule = __webpack_require__(8006);
var getOwnPropertySymbolsModule = __webpack_require__(5181);
var anObject = __webpack_require__(9670);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 4488:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isNullOrUndefined = __webpack_require__(8554);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 6200:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(2309);
var uid = __webpack_require__(9711);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 5465:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var defineGlobalProperty = __webpack_require__(3072);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ 2309:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(1913);
var store = __webpack_require__(5465);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.30.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 6293:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(7392);
var fails = __webpack_require__(7293);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 1400:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9303);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 5656:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(8361);
var requireObjectCoercible = __webpack_require__(4488);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 9303:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var trunc = __webpack_require__(4758);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 7466:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9303);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 7908:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(4488);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 7593:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(6916);
var isObject = __webpack_require__(111);
var isSymbol = __webpack_require__(2190);
var getMethod = __webpack_require__(8173);
var ordinaryToPrimitive = __webpack_require__(2140);
var wellKnownSymbol = __webpack_require__(5112);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 4948:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPrimitive = __webpack_require__(7593);
var isSymbol = __webpack_require__(2190);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 1694:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 1340:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(648);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ 6330:
/***/ (function(module) {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 9711:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 3307:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(6293);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 3353:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ 4811:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 5112:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var shared = __webpack_require__(2309);
var hasOwn = __webpack_require__(2597);
var uid = __webpack_require__(9711);
var NATIVE_SYMBOL = __webpack_require__(6293);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 7658:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var toObject = __webpack_require__(7908);
var lengthOfArrayLike = __webpack_require__(6244);
var setArrayLength = __webpack_require__(3658);
var doesNotExceedSafeInteger = __webpack_require__(7207);
var fails = __webpack_require__(7293);

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 and Safari <= 15.4, FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ 541:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var toObject = __webpack_require__(7908);
var lengthOfArrayLike = __webpack_require__(6244);
var setArrayLength = __webpack_require__(3658);
var deletePropertyOrThrow = __webpack_require__(5117);
var doesNotExceedSafeInteger = __webpack_require__(7207);

// IE8-
var INCORRECT_RESULT = [].unshift(0) !== 1;

// V8 ~ Chrome < 71 and Safari <= 15.4, FF < 23 throws InternalError
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).unshift();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_RESULT || !properErrorOnNonWritableLength();

// `Array.prototype.unshift` method
// https://tc39.es/ecma262/#sec-array.prototype.unshift
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  unshift: function unshift(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    if (argCount) {
      doesNotExceedSafeInteger(len + argCount);
      var k = len;
      while (k--) {
        var to = k + argCount;
        if (k in O) O[to] = O[k];
        else deletePropertyOrThrow(O, to);
      }
      for (var j = 0; j < argCount; j++) {
        O[j] = arguments[j];
      }
    } return setArrayLength(O, len + argCount);
  }
});


/***/ }),

/***/ 2801:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);
var getBuiltIn = __webpack_require__(5005);
var createPropertyDescriptor = __webpack_require__(9114);
var defineProperty = (__webpack_require__(3070).f);
var hasOwn = __webpack_require__(2597);
var anInstance = __webpack_require__(5787);
var inheritIfRequired = __webpack_require__(9587);
var normalizeStringArgument = __webpack_require__(6277);
var DOMExceptionConstants = __webpack_require__(3678);
var clearErrorStack = __webpack_require__(1060);
var DESCRIPTORS = __webpack_require__(9781);
var IS_PURE = __webpack_require__(1913);

var DOM_EXCEPTION = 'DOMException';
var Error = getBuiltIn('Error');
var NativeDOMException = getBuiltIn(DOM_EXCEPTION);

var $DOMException = function DOMException() {
  anInstance(this, DOMExceptionPrototype);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
  var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
  var that = new NativeDOMException(message, name);
  var error = Error(message);
  error.name = DOM_EXCEPTION;
  defineProperty(that, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
  inheritIfRequired(that, this, $DOMException);
  return that;
};

var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;

var ERROR_HAS_STACK = 'stack' in Error(DOM_EXCEPTION);
var DOM_EXCEPTION_HAS_STACK = 'stack' in new NativeDOMException(1, 2);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(global, DOM_EXCEPTION);

// Bun ~ 0.1.1 DOMException have incorrect descriptor and we can't redefine it
// https://github.com/Jarred-Sumner/bun/issues/399
var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);

var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;

// `DOMException` constructor patch for `.stack` where it's required
// https://webidl.spec.whatwg.org/#es-DOMException-specialness
$({ global: true, constructor: true, forced: IS_PURE || FORCED_CONSTRUCTOR }, { // TODO: fix export logic
  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});

var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;

if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
  if (!IS_PURE) {
    defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, PolyfilledDOMException));
  }

  for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
    var constant = DOMExceptionConstants[key];
    var constantName = constant.s;
    if (!hasOwn(PolyfilledDOMException, constantName)) {
      defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
    }
  }
}


/***/ }),

/***/ 7203:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__7203__;

/***/ }),

/***/ 3745:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(7658);
// This file is autogenerated. It's used to publish CJS to npm.
(function (global, factory) {
   true ? module.exports = factory() : 0;
})(this, function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  // https://github.com/bgrins/TinyColor
  // Brian Grinstead, MIT License

  var trimLeft = /^\s+/;
  var trimRight = /\s+$/;
  function tinycolor(color, opts) {
    color = color ? color : "";
    opts = opts || {};

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
      return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
      return new tinycolor(color, opts);
    }
    var rgb = inputToRGB(color);
    this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) this._r = Math.round(this._r);
    if (this._g < 1) this._g = Math.round(this._g);
    if (this._b < 1) this._b = Math.round(this._b);
    this._ok = rgb.ok;
  }
  tinycolor.prototype = {
    isDark: function isDark() {
      return this.getBrightness() < 128;
    },
    isLight: function isLight() {
      return !this.isDark();
    },
    isValid: function isValid() {
      return this._ok;
    },
    getOriginalInput: function getOriginalInput() {
      return this._originalInput;
    },
    getFormat: function getFormat() {
      return this._format;
    },
    getAlpha: function getAlpha() {
      return this._a;
    },
    getBrightness: function getBrightness() {
      //http://www.w3.org/TR/AERT#color-contrast
      var rgb = this.toRgb();
      return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function getLuminance() {
      //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
      var rgb = this.toRgb();
      var RsRGB, GsRGB, BsRGB, R, G, B;
      RsRGB = rgb.r / 255;
      GsRGB = rgb.g / 255;
      BsRGB = rgb.b / 255;
      if (RsRGB <= 0.03928) R = RsRGB / 12.92;else R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
      if (GsRGB <= 0.03928) G = GsRGB / 12.92;else G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
      if (BsRGB <= 0.03928) B = BsRGB / 12.92;else B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
      return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    },
    setAlpha: function setAlpha(value) {
      this._a = boundAlpha(value);
      this._roundA = Math.round(100 * this._a) / 100;
      return this;
    },
    toHsv: function toHsv() {
      var hsv = rgbToHsv(this._r, this._g, this._b);
      return {
        h: hsv.h * 360,
        s: hsv.s,
        v: hsv.v,
        a: this._a
      };
    },
    toHsvString: function toHsvString() {
      var hsv = rgbToHsv(this._r, this._g, this._b);
      var h = Math.round(hsv.h * 360),
        s = Math.round(hsv.s * 100),
        v = Math.round(hsv.v * 100);
      return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
    },
    toHsl: function toHsl() {
      var hsl = rgbToHsl(this._r, this._g, this._b);
      return {
        h: hsl.h * 360,
        s: hsl.s,
        l: hsl.l,
        a: this._a
      };
    },
    toHslString: function toHslString() {
      var hsl = rgbToHsl(this._r, this._g, this._b);
      var h = Math.round(hsl.h * 360),
        s = Math.round(hsl.s * 100),
        l = Math.round(hsl.l * 100);
      return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
    },
    toHex: function toHex(allow3Char) {
      return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function toHexString(allow3Char) {
      return "#" + this.toHex(allow3Char);
    },
    toHex8: function toHex8(allow4Char) {
      return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function toHex8String(allow4Char) {
      return "#" + this.toHex8(allow4Char);
    },
    toRgb: function toRgb() {
      return {
        r: Math.round(this._r),
        g: Math.round(this._g),
        b: Math.round(this._b),
        a: this._a
      };
    },
    toRgbString: function toRgbString() {
      return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function toPercentageRgb() {
      return {
        r: Math.round(bound01(this._r, 255) * 100) + "%",
        g: Math.round(bound01(this._g, 255) * 100) + "%",
        b: Math.round(bound01(this._b, 255) * 100) + "%",
        a: this._a
      };
    },
    toPercentageRgbString: function toPercentageRgbString() {
      return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function toName() {
      if (this._a === 0) {
        return "transparent";
      }
      if (this._a < 1) {
        return false;
      }
      return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function toFilter(secondColor) {
      var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
      var secondHex8String = hex8String;
      var gradientType = this._gradientType ? "GradientType = 1, " : "";
      if (secondColor) {
        var s = tinycolor(secondColor);
        secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
      }
      return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
    },
    toString: function toString(format) {
      var formatSet = !!format;
      format = format || this._format;
      var formattedString = false;
      var hasAlpha = this._a < 1 && this._a >= 0;
      var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
      if (needsAlphaFormat) {
        // Special case for "transparent", all other non-alpha formats
        // will return rgba when there is transparency.
        if (format === "name" && this._a === 0) {
          return this.toName();
        }
        return this.toRgbString();
      }
      if (format === "rgb") {
        formattedString = this.toRgbString();
      }
      if (format === "prgb") {
        formattedString = this.toPercentageRgbString();
      }
      if (format === "hex" || format === "hex6") {
        formattedString = this.toHexString();
      }
      if (format === "hex3") {
        formattedString = this.toHexString(true);
      }
      if (format === "hex4") {
        formattedString = this.toHex8String(true);
      }
      if (format === "hex8") {
        formattedString = this.toHex8String();
      }
      if (format === "name") {
        formattedString = this.toName();
      }
      if (format === "hsl") {
        formattedString = this.toHslString();
      }
      if (format === "hsv") {
        formattedString = this.toHsvString();
      }
      return formattedString || this.toHexString();
    },
    clone: function clone() {
      return tinycolor(this.toString());
    },
    _applyModification: function _applyModification(fn, args) {
      var color = fn.apply(null, [this].concat([].slice.call(args)));
      this._r = color._r;
      this._g = color._g;
      this._b = color._b;
      this.setAlpha(color._a);
      return this;
    },
    lighten: function lighten() {
      return this._applyModification(_lighten, arguments);
    },
    brighten: function brighten() {
      return this._applyModification(_brighten, arguments);
    },
    darken: function darken() {
      return this._applyModification(_darken, arguments);
    },
    desaturate: function desaturate() {
      return this._applyModification(_desaturate, arguments);
    },
    saturate: function saturate() {
      return this._applyModification(_saturate, arguments);
    },
    greyscale: function greyscale() {
      return this._applyModification(_greyscale, arguments);
    },
    spin: function spin() {
      return this._applyModification(_spin, arguments);
    },
    _applyCombination: function _applyCombination(fn, args) {
      return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function analogous() {
      return this._applyCombination(_analogous, arguments);
    },
    complement: function complement() {
      return this._applyCombination(_complement, arguments);
    },
    monochromatic: function monochromatic() {
      return this._applyCombination(_monochromatic, arguments);
    },
    splitcomplement: function splitcomplement() {
      return this._applyCombination(_splitcomplement, arguments);
    },
    // Disabled until https://github.com/bgrins/TinyColor/issues/254
    // polyad: function (number) {
    //   return this._applyCombination(polyad, [number]);
    // },
    triad: function triad() {
      return this._applyCombination(polyad, [3]);
    },
    tetrad: function tetrad() {
      return this._applyCombination(polyad, [4]);
    }
  };

  // If input is an object, force 1 into "1.0" to handle ratios properly
  // String input requires "1.0" as input, so 1 will be treated as 1
  tinycolor.fromRatio = function (color, opts) {
    if (_typeof(color) == "object") {
      var newColor = {};
      for (var i in color) {
        if (color.hasOwnProperty(i)) {
          if (i === "a") {
            newColor[i] = color[i];
          } else {
            newColor[i] = convertToPercentage(color[i]);
          }
        }
      }
      color = newColor;
    }
    return tinycolor(color, opts);
  };

  // Given a string or object, convert that input to RGB
  // Possible string inputs:
  //
  //     "red"
  //     "#f00" or "f00"
  //     "#ff0000" or "ff0000"
  //     "#ff000000" or "ff000000"
  //     "rgb 255 0 0" or "rgb (255, 0, 0)"
  //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
  //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
  //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
  //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
  //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
  //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
  //
  function inputToRGB(color) {
    var rgb = {
      r: 0,
      g: 0,
      b: 0
    };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color == "string") {
      color = stringInputToObject(color);
    }
    if (_typeof(color) == "object") {
      if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
        rgb = rgbToRgb(color.r, color.g, color.b);
        ok = true;
        format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
        s = convertToPercentage(color.s);
        v = convertToPercentage(color.v);
        rgb = hsvToRgb(color.h, s, v);
        ok = true;
        format = "hsv";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
        s = convertToPercentage(color.s);
        l = convertToPercentage(color.l);
        rgb = hslToRgb(color.h, s, l);
        ok = true;
        format = "hsl";
      }
      if (color.hasOwnProperty("a")) {
        a = color.a;
      }
    }
    a = boundAlpha(a);
    return {
      ok: ok,
      format: color.format || format,
      r: Math.min(255, Math.max(rgb.r, 0)),
      g: Math.min(255, Math.max(rgb.g, 0)),
      b: Math.min(255, Math.max(rgb.b, 0)),
      a: a
    };
  }

  // Conversion Functions
  // --------------------

  // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
  // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

  // `rgbToRgb`
  // Handle bounds / percentage checking to conform to CSS color spec
  // <http://www.w3.org/TR/css3-color/>
  // *Assumes:* r, g, b in [0, 255] or [0, 1]
  // *Returns:* { r, g, b } in [0, 255]
  function rgbToRgb(r, g, b) {
    return {
      r: bound01(r, 255) * 255,
      g: bound01(g, 255) * 255,
      b: bound01(b, 255) * 255
    };
  }

  // `rgbToHsl`
  // Converts an RGB color value to HSL.
  // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
  // *Returns:* { h, s, l } in [0,1]
  function rgbToHsl(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    var h,
      s,
      l = (max + min) / 2;
    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return {
      h: h,
      s: s,
      l: l
    };
  }

  // `hslToRgb`
  // Converts an HSL color value to RGB.
  // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
  // *Returns:* { r, g, b } in the set [0, 255]
  function hslToRgb(h, s, l) {
    var r, g, b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }
    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return {
      r: r * 255,
      g: g * 255,
      b: b * 255
    };
  }

  // `rgbToHsv`
  // Converts an RGB color value to HSV
  // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
  // *Returns:* { h, s, v } in [0,1]
  function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    var h,
      s,
      v = max;
    var d = max - min;
    s = max === 0 ? 0 : d / max;
    if (max == min) {
      h = 0; // achromatic
    } else {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return {
      h: h,
      s: s,
      v: v
    };
  }

  // `hsvToRgb`
  // Converts an HSV color value to RGB.
  // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
  // *Returns:* { r, g, b } in the set [0, 255]
  function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h),
      f = h - i,
      p = v * (1 - s),
      q = v * (1 - f * s),
      t = v * (1 - (1 - f) * s),
      mod = i % 6,
      r = [v, q, p, p, t, v][mod],
      g = [t, v, v, q, p, p][mod],
      b = [p, p, t, v, v, q][mod];
    return {
      r: r * 255,
      g: g * 255,
      b: b * 255
    };
  }

  // `rgbToHex`
  // Converts an RGB color to hex
  // Assumes r, g, and b are contained in the set [0, 255]
  // Returns a 3 or 6 character hex
  function rgbToHex(r, g, b, allow3Char) {
    var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join("");
  }

  // `rgbaToHex`
  // Converts an RGBA color plus alpha transparency to hex
  // Assumes r, g, b are contained in the set [0, 255] and
  // a in [0, 1]. Returns a 4 or 8 character rgba hex
  function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16)), pad2(convertDecimalToHex(a))];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join("");
  }

  // `rgbaToArgbHex`
  // Converts an RGBA color to an ARGB Hex8 string
  // Rarely used, but required for "toFilter()"
  function rgbaToArgbHex(r, g, b, a) {
    var hex = [pad2(convertDecimalToHex(a)), pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
    return hex.join("");
  }

  // `equals`
  // Can be called with any tinycolor input
  tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) return false;
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
  };
  tinycolor.random = function () {
    return tinycolor.fromRatio({
      r: Math.random(),
      g: Math.random(),
      b: Math.random()
    });
  };

  // Modification Functions
  // ----------------------
  // Thanks to less.js for some of the basics here
  // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

  function _desaturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
  }
  function _saturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
  }
  function _greyscale(color) {
    return tinycolor(color).desaturate(100);
  }
  function _lighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
  }
  function _brighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var rgb = tinycolor(color).toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return tinycolor(rgb);
  }
  function _darken(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
  }

  // Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
  // Values outside of this range will be wrapped into this range.
  function _spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
  }

  // Combination Functions
  // ---------------------
  // Thanks to jQuery xColor for some of the ideas behind these
  // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

  function _complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
  }
  function polyad(color, number) {
    if (isNaN(number) || number <= 0) {
      throw new Error("Argument to polyad must be a positive number");
    }
    var hsl = tinycolor(color).toHsl();
    var result = [tinycolor(color)];
    var step = 360 / number;
    for (var i = 1; i < number; i++) {
      result.push(tinycolor({
        h: (hsl.h + i * step) % 360,
        s: hsl.s,
        l: hsl.l
      }));
    }
    return result;
  }
  function _splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h + 72) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 216) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }
  function _analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;
    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(tinycolor(hsl));
    }
    return ret;
  }
  function _monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h,
      s = hsv.s,
      v = hsv.v;
    var ret = [];
    var modification = 1 / results;
    while (results--) {
      ret.push(tinycolor({
        h: h,
        s: s,
        v: v
      }));
      v = (v + modification) % 1;
    }
    return ret;
  }

  // Utility Functions
  // ---------------------

  tinycolor.mix = function (color1, color2, amount) {
    amount = amount === 0 ? 0 : amount || 50;
    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();
    var p = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return tinycolor(rgba);
  };

  // Readability Functions
  // ---------------------
  // <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

  // `contrast`
  // Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
  tinycolor.readability = function (color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
  };

  // `isReadable`
  // Ensure that foreground and background color combinations meet WCAG2 guidelines.
  // The third argument is an optional Object.
  //      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
  //      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
  // If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

  // *Example*
  //    tinycolor.isReadable("#000", "#111") => false
  //    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
  tinycolor.isReadable = function (color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;
    out = false;
    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
      case "AAsmall":
      case "AAAlarge":
        out = readability >= 4.5;
        break;
      case "AAlarge":
        out = readability >= 3;
        break;
      case "AAAsmall":
        out = readability >= 7;
        break;
    }
    return out;
  };

  // `mostReadable`
  // Given a base color and a list of possible foreground or background
  // colors for that base, returns the most readable color.
  // Optionally returns Black or White if the most readable color is unreadable.
  // *Example*
  //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
  //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
  //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
  //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
  tinycolor.mostReadable = function (baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors;
    level = args.level;
    size = args.size;
    for (var i = 0; i < colorList.length; i++) {
      readability = tinycolor.readability(baseColor, colorList[i]);
      if (readability > bestScore) {
        bestScore = readability;
        bestColor = tinycolor(colorList[i]);
      }
    }
    if (tinycolor.isReadable(baseColor, bestColor, {
      level: level,
      size: size
    }) || !includeFallbackColors) {
      return bestColor;
    } else {
      args.includeFallbackColors = false;
      return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
    }
  };

  // Big List of Colors
  // ------------------
  // <https://www.w3.org/TR/css-color-4/#named-colors>
  var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
  };

  // Make it easy to access colors via `hexNames[hex]`
  var hexNames = tinycolor.hexNames = flip(names);

  // Utilities
  // ---------

  // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
  function flip(o) {
    var flipped = {};
    for (var i in o) {
      if (o.hasOwnProperty(i)) {
        flipped[o[i]] = i;
      }
    }
    return flipped;
  }

  // Return a valid alpha value [0,1] with all invalid values being set to 1
  function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
      a = 1;
    }
    return a;
  }

  // Take input from [0, n] and return it as [0, 1]
  function bound01(n, max) {
    if (isOnePointZero(n)) n = "100%";
    var processPercent = isPercentage(n);
    n = Math.min(max, Math.max(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
      n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
      return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return n % max / parseFloat(max);
  }

  // Force a number between 0 and 1
  function clamp01(val) {
    return Math.min(1, Math.max(0, val));
  }

  // Parse a base-16 hex value into a base-10 integer
  function parseIntFromHex(val) {
    return parseInt(val, 16);
  }

  // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
  // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
  function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1;
  }

  // Check to see if string passed in is a percentage
  function isPercentage(n) {
    return typeof n === "string" && n.indexOf("%") != -1;
  }

  // Force a hex value to have 2 characters
  function pad2(c) {
    return c.length == 1 ? "0" + c : "" + c;
  }

  // Replace a decimal with it's percentage value
  function convertToPercentage(n) {
    if (n <= 1) {
      n = n * 100 + "%";
    }
    return n;
  }

  // Converts a decimal to a hex value
  function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
  }
  // Converts a hex value to a decimal
  function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
  }
  var matchers = function () {
    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    return {
      CSS_UNIT: new RegExp(CSS_UNIT),
      rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
      rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
      hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
      hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
      hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
      hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
  }();

  // `isValidCSSUnit`
  // Take in a single string / number and check to see if it looks like a CSS unit
  // (see `matchers` above for definition).
  function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
  }

  // `stringInputToObject`
  // Permissive string parsing.  Take in a number of formats, and output an object
  // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
  function stringInputToObject(color) {
    color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
    var named = false;
    if (names[color]) {
      color = names[color];
      named = true;
    } else if (color == "transparent") {
      return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        format: "name"
      };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if (match = matchers.rgb.exec(color)) {
      return {
        r: match[1],
        g: match[2],
        b: match[3]
      };
    }
    if (match = matchers.rgba.exec(color)) {
      return {
        r: match[1],
        g: match[2],
        b: match[3],
        a: match[4]
      };
    }
    if (match = matchers.hsl.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        l: match[3]
      };
    }
    if (match = matchers.hsla.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        l: match[3],
        a: match[4]
      };
    }
    if (match = matchers.hsv.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        v: match[3]
      };
    }
    if (match = matchers.hsva.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        v: match[3],
        a: match[4]
      };
    }
    if (match = matchers.hex8.exec(color)) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        a: convertHexToDecimal(match[4]),
        format: named ? "name" : "hex8"
      };
    }
    if (match = matchers.hex6.exec(color)) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        format: named ? "name" : "hex"
      };
    }
    if (match = matchers.hex4.exec(color)) {
      return {
        r: parseIntFromHex(match[1] + "" + match[1]),
        g: parseIntFromHex(match[2] + "" + match[2]),
        b: parseIntFromHex(match[3] + "" + match[3]),
        a: convertHexToDecimal(match[4] + "" + match[4]),
        format: named ? "name" : "hex8"
      };
    }
    if (match = matchers.hex3.exec(color)) {
      return {
        r: parseIntFromHex(match[1] + "" + match[1]),
        g: parseIntFromHex(match[2] + "" + match[2]),
        b: parseIntFromHex(match[3] + "" + match[3]),
        format: named ? "name" : "hex"
      };
    }
    return false;
  }
  function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {
      level: "AA",
      size: "small"
    };
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
      level = "AA";
    }
    if (size !== "small" && size !== "large") {
      size = "small";
    }
    return {
      level: level,
      size: size
    };
  }
  return tinycolor;
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

// NAMESPACE OBJECT: ./packages/cron-input/ant-icon.js
var ant_icon_namespaceObject = {};
__webpack_require__.r(ant_icon_namespaceObject);
__webpack_require__.d(ant_icon_namespaceObject, {
  "Calendar": function() { return CalendarOutline/* default */.Z; },
  "Check": function() { return CheckOutline/* default */.Z; },
  "Close": function() { return CloseOutline/* default */.Z; },
  "Down": function() { return DownOutline/* default */.Z; },
  "Up": function() { return UpOutline/* default */.Z; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/cron-input/CronInput.vue?vue&type=template&id=229c51e4&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ant-cron-input"
  }, [_c('a-tabs', {
    attrs: {
      "type": "card"
    },
    model: {
      value: _vm.tabActive,
      callback: function ($$v) {
        _vm.tabActive = $$v;
      },
      expression: "tabActive"
    }
  }, [_c('a-tab-pane', {
    key: "second",
    attrs: {
      "disabled": !_vm.item.includes('second')
    }
  }, [_c('span', {
    attrs: {
      "slot": "tab"
    },
    slot: "tab"
  }, [_c('a-icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.lang == 'cn',
      expression: "lang=='cn'"
    }],
    attrs: {
      "type": "calendar"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Seconds.name))], 1), _c('a-radio-group', {
    staticClass: "cron-radio-group",
    model: {
      value: _vm.second.cronEvery,
      callback: function ($$v) {
        _vm.$set(_vm.second, "cronEvery", $$v);
      },
      expression: "second.cronEvery"
    }
  }, [_c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.text.Seconds.every))]), _c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "2"
    }
  }, [_c('span', {
    staticClass: "cron-radio-content"
  }, [_vm._v(" " + _vm._s(_vm.text.Seconds.interval[0]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": 1,
      "max": 60
    },
    model: {
      value: _vm.second.incrementIncrement,
      callback: function ($$v) {
        _vm.$set(_vm.second, "incrementIncrement", $$v);
      },
      expression: "second.incrementIncrement"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Seconds.interval[1]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": 0,
      "max": 59
    },
    model: {
      value: _vm.second.incrementStart,
      callback: function ($$v) {
        _vm.$set(_vm.second, "incrementStart", $$v);
      },
      expression: "second.incrementStart"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Seconds.interval[2] || '') + " ")], 1)]), _c('a-radio', {
    staticClass: "cron-radio long",
    attrs: {
      "value": "3"
    }
  }, [_c('span', {
    staticClass: "cron-radio-content"
  }, [_vm._v(" " + _vm._s(_vm.text.Seconds.specific) + " "), _c('a-select', {
    staticClass: "cron-form-item",
    staticStyle: {
      "margin-right": "0"
    },
    attrs: {
      "mode": "tags"
    },
    model: {
      value: _vm.second.specificSpecific,
      callback: function ($$v) {
        _vm.$set(_vm.second, "specificSpecific", $$v);
      },
      expression: "second.specificSpecific"
    }
  }, _vm._l(60, function (val) {
    return _c('a-select-option', {
      key: val,
      attrs: {
        "value": String(val - 1)
      }
    }, [_vm._v(_vm._s(val - 1))]);
  }), 1)], 1)]), _c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "4"
    }
  }, [_c('span', {
    staticClass: "cron-radio-content"
  }, [_vm._v(" " + _vm._s(_vm.text.Seconds.cycle[0]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": 0,
      "max": 59
    },
    model: {
      value: _vm.second.rangeStart,
      callback: function ($$v) {
        _vm.$set(_vm.second, "rangeStart", $$v);
      },
      expression: "second.rangeStart"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Seconds.cycle[1]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": 0,
      "max": 59
    },
    model: {
      value: _vm.second.rangeEnd,
      callback: function ($$v) {
        _vm.$set(_vm.second, "rangeEnd", $$v);
      },
      expression: "second.rangeEnd"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Seconds.cycle[2] || '') + " ")], 1)])], 1)], 1), _c('a-tab-pane', {
    key: "minute",
    attrs: {
      "disabled": !_vm.item.includes('minute')
    }
  }, [_c('span', {
    attrs: {
      "slot": "tab"
    },
    slot: "tab"
  }, [_c('a-icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.lang == 'cn',
      expression: "lang=='cn'"
    }],
    attrs: {
      "type": "calendar"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Minutes.name))], 1), _c('a-radio-group', {
    staticClass: "cron-radio-group",
    model: {
      value: _vm.minute.cronEvery,
      callback: function ($$v) {
        _vm.$set(_vm.minute, "cronEvery", $$v);
      },
      expression: "minute.cronEvery"
    }
  }, [_c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.text.Minutes.every))]), _c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "2"
    }
  }, [_c('span', {
    staticClass: "cron-radio-content"
  }, [_vm._v(" " + _vm._s(_vm.text.Minutes.interval[0]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": 1,
      "max": 60
    },
    model: {
      value: _vm.minute.incrementIncrement,
      callback: function ($$v) {
        _vm.$set(_vm.minute, "incrementIncrement", $$v);
      },
      expression: "minute.incrementIncrement"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Minutes.interval[1]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": 0,
      "max": 59
    },
    model: {
      value: _vm.minute.incrementStart,
      callback: function ($$v) {
        _vm.$set(_vm.minute, "incrementStart", $$v);
      },
      expression: "minute.incrementStart"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Minutes.interval[2] || '') + " ")], 1)]), _c('a-radio', {
    staticClass: "cron-radio long",
    attrs: {
      "value": "3"
    }
  }, [_c('span', {
    staticClass: "cron-radio-content"
  }, [_vm._v(" " + _vm._s(_vm.text.Minutes.specific) + " "), _c('a-select', {
    staticClass: "cron-form-item",
    staticStyle: {
      "margin-right": "0"
    },
    attrs: {
      "mode": "multiple"
    },
    model: {
      value: _vm.minute.specificSpecific,
      callback: function ($$v) {
        _vm.$set(_vm.minute, "specificSpecific", $$v);
      },
      expression: "minute.specificSpecific"
    }
  }, _vm._l(60, function (val) {
    return _c('a-select-option', {
      key: val,
      attrs: {
        "value": String(val - 1)
      }
    }, [_vm._v(_vm._s(val - 1))]);
  }), 1)], 1)]), _c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "4"
    }
  }, [_c('span', {
    staticClass: "cron-radio-content"
  }, [_vm._v(" " + _vm._s(_vm.text.Minutes.cycle[0]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": 0,
      "max": 59
    },
    model: {
      value: _vm.minute.rangeStart,
      callback: function ($$v) {
        _vm.$set(_vm.minute, "rangeStart", $$v);
      },
      expression: "minute.rangeStart"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Minutes.cycle[1]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": 0,
      "max": 59
    },
    model: {
      value: _vm.minute.rangeEnd,
      callback: function ($$v) {
        _vm.$set(_vm.minute, "rangeEnd", $$v);
      },
      expression: "minute.rangeEnd"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Minutes.cycle[2] || '') + " ")], 1)])], 1)], 1), _c('a-tab-pane', {
    key: "hour",
    attrs: {
      "disabled": !_vm.item.includes('hour')
    }
  }, [_c('span', {
    attrs: {
      "slot": "tab"
    },
    slot: "tab"
  }, [_c('a-icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.lang == 'cn',
      expression: "lang=='cn'"
    }],
    attrs: {
      "type": "calendar"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Hours.name))], 1), _c('a-radio-group', {
    staticClass: "cron-radio-group",
    model: {
      value: _vm.hour.cronEvery,
      callback: function ($$v) {
        _vm.$set(_vm.hour, "cronEvery", $$v);
      },
      expression: "hour.cronEvery"
    }
  }, [_c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.text.Hours.every))]), _c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "2"
    }
  }, [_c('span', {
    staticClass: "cron-radio-content"
  }, [_vm._v(" " + _vm._s(_vm.text.Hours.interval[0]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": 1,
      "max": 23
    },
    model: {
      value: _vm.hour.incrementIncrement,
      callback: function ($$v) {
        _vm.$set(_vm.hour, "incrementIncrement", $$v);
      },
      expression: "hour.incrementIncrement"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Hours.interval[1]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": 0,
      "max": 23
    },
    model: {
      value: _vm.hour.incrementStart,
      callback: function ($$v) {
        _vm.$set(_vm.hour, "incrementStart", $$v);
      },
      expression: "hour.incrementStart"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Hours.interval[2] || '') + " ")], 1)]), _c('a-radio', {
    staticClass: "cron-radio long",
    attrs: {
      "value": "3"
    }
  }, [_c('span', {
    staticClass: "cron-radio-content"
  }, [_vm._v(" " + _vm._s(_vm.text.Hours.specific) + " "), _c('a-select', {
    staticClass: "cron-form-item",
    staticStyle: {
      "margin-right": "0"
    },
    attrs: {
      "mode": "multiple"
    },
    model: {
      value: _vm.hour.specificSpecific,
      callback: function ($$v) {
        _vm.$set(_vm.hour, "specificSpecific", $$v);
      },
      expression: "hour.specificSpecific"
    }
  }, _vm._l(24, function (val) {
    return _c('a-select-option', {
      key: val,
      attrs: {
        "value": String(val - 1)
      }
    }, [_vm._v(_vm._s(val - 1))]);
  }), 1)], 1)]), _c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "4"
    }
  }, [_c('span', {
    staticClass: "cron-radio-content"
  }, [_vm._v(" " + _vm._s(_vm.text.Hours.cycle[0]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": 0,
      "max": 23
    },
    model: {
      value: _vm.hour.rangeStart,
      callback: function ($$v) {
        _vm.$set(_vm.hour, "rangeStart", $$v);
      },
      expression: "hour.rangeStart"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Hours.cycle[1]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": 0,
      "max": 23
    },
    model: {
      value: _vm.hour.rangeEnd,
      callback: function ($$v) {
        _vm.$set(_vm.hour, "rangeEnd", $$v);
      },
      expression: "hour.rangeEnd"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Hours.cycle[2] || '') + " ")], 1)])], 1)], 1), _c('a-tab-pane', {
    key: "day",
    attrs: {
      "disabled": !_vm.item.includes('day')
    }
  }, [_c('span', {
    attrs: {
      "slot": "tab"
    },
    slot: "tab"
  }, [_c('a-icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.lang == 'cn',
      expression: "lang=='cn'"
    }],
    attrs: {
      "type": "calendar"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Day.name))], 1), _c('a-radio-group', {
    staticClass: "cron-radio-group",
    model: {
      value: _vm.day.cronEvery,
      callback: function ($$v) {
        _vm.$set(_vm.day, "cronEvery", $$v);
      },
      expression: "day.cronEvery"
    }
  }, [_c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "8"
    }
  }, [_vm._v(_vm._s(_vm.text.Day.noSet))]), _c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.text.Day.every))]), _c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "2"
    }
  }, [_c('span', {
    staticClass: "cron-radio-content"
  }, [_vm._v(" " + _vm._s(_vm.text.Day.interval[0]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": 1,
      "max": 31
    },
    model: {
      value: _vm.day.incrementIncrement,
      callback: function ($$v) {
        _vm.$set(_vm.day, "incrementIncrement", $$v);
      },
      expression: "day.incrementIncrement"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Day.interval[1]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": 1,
      "max": 31
    },
    model: {
      value: _vm.day.incrementStart,
      callback: function ($$v) {
        _vm.$set(_vm.day, "incrementStart", $$v);
      },
      expression: "day.incrementStart"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Day.interval[2]) + " ")], 1)]), _c('a-radio', {
    staticClass: "cron-radio long",
    attrs: {
      "value": "3"
    }
  }, [_c('span', {
    staticClass: "cron-radio-content"
  }, [_vm._v(" " + _vm._s(_vm.text.Day.specific) + " "), _c('a-select', {
    staticClass: "cron-form-item",
    staticStyle: {
      "margin-right": "0"
    },
    attrs: {
      "mode": "tags"
    },
    model: {
      value: _vm.day.specificSpecific,
      callback: function ($$v) {
        _vm.$set(_vm.day, "specificSpecific", $$v);
      },
      expression: "day.specificSpecific"
    }
  }, _vm._l(31, function (val) {
    return _c('a-select-option', {
      key: val,
      attrs: {
        "value": String(val)
      }
    }, [_vm._v(_vm._s(val))]);
  }), 1)], 1)]), _c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "4"
    }
  }, [_vm._v(_vm._s(_vm.text.Day.lastDay))]), _c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "5"
    }
  }, [_vm._v(_vm._s(_vm.text.Day.lastWeekday))]), _c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "6"
    }
  }, [_c('span', {
    staticClass: "cron-radio-content"
  }, [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.lang || _vm.lang === 'cn',
      expression: "!lang || lang === 'cn'"
    }]
  }, [_vm._v(_vm._s(_vm.text.Day.beforeEndMonth[0]))]), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": 1,
      "max": 31
    },
    model: {
      value: _vm.day.cronDaysBeforeEomMinus,
      callback: function ($$v) {
        _vm.$set(_vm.day, "cronDaysBeforeEomMinus", $$v);
      },
      expression: "day.cronDaysBeforeEomMinus"
    }
  }), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.lang || _vm.lang === 'cn',
      expression: "!lang || lang === 'cn'"
    }]
  }, [_vm._v(_vm._s(_vm.text.Day.beforeEndMonth[1]))]), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.lang === 'en',
      expression: "lang === 'en'"
    }]
  }, [_vm._v(_vm._s(_vm.text.Day.beforeEndMonth[0]))])], 1)]), _c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "7"
    }
  }, [_c('span', {
    staticClass: "cron-radio-content"
  }, [_vm._v(" " + _vm._s(_vm.text.Day.nearestWeekday[0]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": 1,
      "max": 31
    },
    model: {
      value: _vm.day.cronDaysNearestWeekday,
      callback: function ($$v) {
        _vm.$set(_vm.day, "cronDaysNearestWeekday", $$v);
      },
      expression: "day.cronDaysNearestWeekday"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Day.nearestWeekday[1]) + " ")], 1)])], 1)], 1), _c('a-tab-pane', {
    key: "month",
    attrs: {
      "disabled": !_vm.item.includes('month')
    }
  }, [_c('span', {
    attrs: {
      "slot": "tab"
    },
    slot: "tab"
  }, [_c('a-icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.lang == 'cn',
      expression: "lang=='cn'"
    }],
    attrs: {
      "type": "calendar"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Month.name))], 1), _c('a-radio-group', {
    staticClass: "cron-radio-group",
    model: {
      value: _vm.month.cronEvery,
      callback: function ($$v) {
        _vm.$set(_vm.month, "cronEvery", $$v);
      },
      expression: "month.cronEvery"
    }
  }, [_c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.text.Month.every))]), _c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "2"
    }
  }, [_c('span', {
    staticClass: "cron-radio-content"
  }, [_vm._v(" " + _vm._s(_vm.text.Month.interval[0]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": 1,
      "max": 12
    },
    model: {
      value: _vm.month.incrementIncrement,
      callback: function ($$v) {
        _vm.$set(_vm.month, "incrementIncrement", $$v);
      },
      expression: "month.incrementIncrement"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Month.interval[1]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    staticStyle: {
      "margin-right": "0"
    },
    attrs: {
      "min": 1,
      "max": 12
    },
    model: {
      value: _vm.month.incrementStart,
      callback: function ($$v) {
        _vm.$set(_vm.month, "incrementStart", $$v);
      },
      expression: "month.incrementStart"
    }
  })], 1)]), _c('a-radio', {
    staticClass: "cron-radio long",
    attrs: {
      "value": "3"
    }
  }, [_c('span', {
    staticClass: "cron-radio-content"
  }, [_vm._v(" " + _vm._s(_vm.text.Month.specific) + " "), _c('a-select', {
    staticClass: "cron-form-item",
    staticStyle: {
      "margin-right": "0"
    },
    attrs: {
      "mode": "multiple"
    },
    model: {
      value: _vm.month.specificSpecific,
      callback: function ($$v) {
        _vm.$set(_vm.month, "specificSpecific", $$v);
      },
      expression: "month.specificSpecific"
    }
  }, _vm._l(12, function (val) {
    return _c('a-select-option', {
      key: val,
      attrs: {
        "value": String(val)
      }
    }, [_vm._v(_vm._s(val))]);
  }), 1)], 1)]), _c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "4"
    }
  }, [_c('span', {
    staticClass: "cron-radio-content"
  }, [_vm._v(" " + _vm._s(_vm.text.Month.cycle[0]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": 1,
      "max": 12
    },
    model: {
      value: _vm.month.rangeStart,
      callback: function ($$v) {
        _vm.$set(_vm.month, "rangeStart", $$v);
      },
      expression: "month.rangeStart"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Month.cycle[1]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": 1,
      "max": 12
    },
    model: {
      value: _vm.month.rangeEnd,
      callback: function ($$v) {
        _vm.$set(_vm.month, "rangeEnd", $$v);
      },
      expression: "month.rangeEnd"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Month.cycle[2]) + " ")], 1)])], 1)], 1), _c('a-tab-pane', {
    key: "week",
    attrs: {
      "disabled": !_vm.item.includes('week')
    }
  }, [_c('span', {
    attrs: {
      "slot": "tab"
    },
    slot: "tab"
  }, [_c('a-icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.lang == 'cn',
      expression: "lang=='cn'"
    }],
    attrs: {
      "type": "calendar"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Week.name))], 1), _c('a-radio-group', {
    staticClass: "cron-radio-group",
    model: {
      value: _vm.week.cronEvery,
      callback: function ($$v) {
        _vm.$set(_vm.week, "cronEvery", $$v);
      },
      expression: "week.cronEvery"
    }
  }, [_c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "5"
    }
  }, [_vm._v(_vm._s(_vm.text.Week.noSet))]), _c('a-radio', {
    staticClass: "cron-radio long",
    attrs: {
      "value": "2"
    }
  }, [_c('span', {
    staticClass: "cron-radio-content"
  }, [_vm._v(" " + _vm._s(_vm.text.Day.specific) + " "), _c('a-select', {
    staticClass: "cron-form-item",
    staticStyle: {
      "margin-right": "0"
    },
    attrs: {
      "mode": "tags"
    },
    model: {
      value: _vm.week.specificSpecific,
      callback: function ($$v) {
        _vm.$set(_vm.week, "specificSpecific", $$v);
      },
      expression: "week.specificSpecific"
    }
  }, _vm._l(_vm.weekValueList, function (val) {
    return _c('a-select-option', {
      key: val,
      attrs: {
        "value": val
      }
    }, [_vm._v(_vm._s(_vm.text.Week.select[_vm.weekValueList.indexOf(val)]))]);
  }), 1)], 1)]), _c('a-radio', {
    staticClass: "cron-radio long",
    attrs: {
      "value": "3"
    }
  }, [_c('span', {
    staticClass: "cron-radio-content"
  }, [_vm._v(" " + _vm._s(_vm.text.Week.someWeekday[0]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": 1,
      "max": 5
    },
    model: {
      value: _vm.week.cronNthDayNth,
      callback: function ($$v) {
        _vm.$set(_vm.week, "cronNthDayNth", $$v);
      },
      expression: "week.cronNthDayNth"
    }
  }), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.lang || _vm.lang === 'cn',
      expression: "!lang || lang === 'cn'"
    }]
  }, [_vm._v(_vm._s(_vm.text.Week.someWeekday[1]))]), _c('a-select', {
    staticClass: "cron-form-item",
    staticStyle: {
      "margin-right": "0"
    },
    model: {
      value: _vm.week.cronNthDayDay,
      callback: function ($$v) {
        _vm.$set(_vm.week, "cronNthDayDay", $$v);
      },
      expression: "week.cronNthDayDay"
    }
  }, _vm._l(_vm.weekValueList, function (val) {
    return _c('a-select-option', {
      key: val,
      attrs: {
        "value": val
      }
    }, [_vm._v(_vm._s(_vm.text.Week.select[_vm.weekValueList.indexOf(val)]))]);
  }), 1), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.lang === 'en',
      expression: "lang === 'en'"
    }]
  }, [_vm._v(_vm._s(_vm.text.Week.someWeekday[1]))])], 1)]), _c('a-radio', {
    staticClass: "cron-radio long",
    attrs: {
      "value": "4"
    }
  }, [_c('span', {
    staticClass: "cron-radio-content"
  }, [_vm._v(" " + _vm._s(_vm.text.Week.lastday[0]) + " "), _c('a-select', {
    staticClass: "cron-form-item",
    model: {
      value: _vm.week.cronLastSpecificDomDay,
      callback: function ($$v) {
        _vm.$set(_vm.week, "cronLastSpecificDomDay", $$v);
      },
      expression: "week.cronLastSpecificDomDay"
    }
  }, _vm._l(_vm.weekValueList, function (val) {
    return _c('a-select-option', {
      key: val,
      attrs: {
        "value": val
      }
    }, [_vm._v(_vm._s(_vm.text.Week.select[_vm.weekValueList.indexOf(val)]))]);
  }), 1), _vm._v(" " + _vm._s(_vm.text.Week.lastday[1] || '') + " ")], 1)])], 1)], 1), _c('a-tab-pane', {
    key: "year",
    attrs: {
      "disabled": !_vm.item.includes('year')
    }
  }, [_c('span', {
    attrs: {
      "slot": "tab"
    },
    slot: "tab"
  }, [_c('a-icon', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.lang == 'cn',
      expression: "lang=='cn'"
    }],
    attrs: {
      "type": "calendar"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Year.name))], 1), _c('a-radio-group', {
    staticClass: "cron-radio-group",
    model: {
      value: _vm.year.cronEvery,
      callback: function ($$v) {
        _vm.$set(_vm.year, "cronEvery", $$v);
      },
      expression: "year.cronEvery"
    }
  }, [_c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "5"
    }
  }, [_vm._v(_vm._s(_vm.text.Year.noSet))]), _c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.text.Year.every))]), _c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "2"
    }
  }, [_c('span', {
    staticClass: "cron-radio-content"
  }, [_vm._v(" " + _vm._s(_vm.text.Year.interval[0]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": 1,
      "max": 99
    },
    model: {
      value: _vm.year.incrementIncrement,
      callback: function ($$v) {
        _vm.$set(_vm.year, "incrementIncrement", $$v);
      },
      expression: "year.incrementIncrement"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Year.interval[1]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": _vm.yearStart,
      "max": _vm.yearStart + 100
    },
    model: {
      value: _vm.year.incrementStart,
      callback: function ($$v) {
        _vm.$set(_vm.year, "incrementStart", $$v);
      },
      expression: "year.incrementStart"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Year.interval[2]) + " ")], 1)]), _c('a-radio', {
    staticClass: "cron-radio long",
    attrs: {
      "value": "3"
    }
  }, [_c('span', {
    staticClass: "cron-radio-content"
  }, [_vm._v(" " + _vm._s(_vm.text.Year.specific) + " "), _c('a-select', {
    staticClass: "cron-form-item",
    staticStyle: {
      "margin-right": "0"
    },
    attrs: {
      "mode": "tags"
    },
    model: {
      value: _vm.year.specificSpecific,
      callback: function ($$v) {
        _vm.$set(_vm.year, "specificSpecific", $$v);
      },
      expression: "year.specificSpecific"
    }
  }, _vm._l(100, function (val) {
    return _c('a-select-option', {
      key: val,
      attrs: {
        "value": String(_vm.yearStart + val - 1)
      }
    }, [_vm._v(_vm._s(_vm.yearStart + val - 1))]);
  }), 1)], 1)]), _c('a-radio', {
    staticClass: "cron-radio",
    attrs: {
      "value": "4"
    }
  }, [_c('span', {
    staticClass: "cron-radio-content"
  }, [_vm._v(" " + _vm._s(_vm.text.Year.cycle[0]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    attrs: {
      "min": _vm.yearStart,
      "max": _vm.yearStart + 100
    },
    model: {
      value: _vm.year.rangeStart,
      callback: function ($$v) {
        _vm.$set(_vm.year, "rangeStart", $$v);
      },
      expression: "year.rangeStart"
    }
  }), _vm._v(" " + _vm._s(_vm.text.Year.cycle[1]) + " "), _c('a-input-number', {
    staticClass: "cron-form-item",
    staticStyle: {
      "margin-right": "0"
    },
    attrs: {
      "min": _vm.yearStart,
      "max": _vm.yearStart + 100
    },
    model: {
      value: _vm.year.rangeEnd,
      callback: function ($$v) {
        _vm.$set(_vm.year, "rangeEnd", $$v);
      },
      expression: "year.rangeEnd"
    }
  })], 1)])], 1)], 1)], 1), _c('div', {
    staticClass: "ant-cron-bottom"
  }, [_c('span', {
    staticClass: "ant-cron-result"
  }, [_vm._v(_vm._s(this.cron))])]), _c('div', {
    staticClass: "ant-cron-extra"
  }, [_vm._t("default")], 2)], 1);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/style/index.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/icon/style/index.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/icon/style/css.js


// EXTERNAL MODULE: ./node_modules/babel-helper-vue-jsx-merge-props/index.js
var babel_helper_vue_jsx_merge_props = __webpack_require__(9611);
var babel_helper_vue_jsx_merge_props_default = /*#__PURE__*/__webpack_require__.n(babel_helper_vue_jsx_merge_props);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__(2018);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(9867);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(7755);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(6510);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/outline/CheckOutline.js
var CheckOutline = __webpack_require__(5614);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/outline/CloseOutline.js
var CloseOutline = __webpack_require__(8706);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/outline/CalendarOutline.js
var CalendarOutline = __webpack_require__(5645);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/outline/DownOutline.js
var DownOutline = __webpack_require__(2480);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/outline/UpOutline.js
var UpOutline = __webpack_require__(141);
;// CONCATENATED MODULE: ./packages/cron-input/ant-icon.js





// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(5904);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/createClass.js
var createClass = __webpack_require__(4922);
// EXTERNAL MODULE: ./node_modules/@ant-design/colors/lib/index.js
var lib = __webpack_require__(2815);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-vue/es/utils.js




function log(message) {
  if (!(process && ({"NODE_ENV":"production","BASE_URL":""}) && "production" === 'production')) {
    console.error('[@ant-design/icons-vue]: ' + message + '.');
  }
}
function isIconDefinition(target) {
  return typeof target === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (typeof target.icon === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];
    switch (key) {
      case 'class':
        acc.className = val;
        delete acc['class'];
        break;
      default:
        acc[key] = val;
    }
    return acc;
  }, {});
}
var MiniMap = function () {
  function MiniMap() {
    (0,classCallCheck/* default */.Z)(this, MiniMap);
    this.collection = {};
  }
  (0,createClass/* default */.Z)(MiniMap, [{
    key: 'clear',
    value: function clear() {
      this.collection = {};
    }
  }, {
    key: 'delete',
    value: function _delete(key) {
      return delete this.collection[key];
    }
  }, {
    key: 'get',
    value: function get(key) {
      return this.collection[key];
    }
  }, {
    key: 'has',
    value: function has(key) {
      return Boolean(this.collection[key]);
    }
  }, {
    key: 'set',
    value: function set(key, value) {
      this.collection[key] = value;
      return this;
    }
  }, {
    key: 'size',
    get: function get() {
      return Object.keys(this.collection).length;
    }
  }]);
  return MiniMap;
}();
function generate(h, node, key, rootProps) {
  if (!rootProps) {
    return h(node.tag, {
      key: key,
      attrs: (0,helpers_extends/* default */.Z)({}, normalizeAttrs(node.attrs))
    }, (node.children || []).map(function (child, index) {
      return generate(h, child, key + '-' + node.tag + '-' + index);
    }));
  }
  return h(node.tag, (0,helpers_extends/* default */.Z)({
    key: key
  }, rootProps, {
    attrs: (0,helpers_extends/* default */.Z)({}, normalizeAttrs(node.attrs), rootProps.attrs)
  }), (node.children || []).map(function (child, index) {
    return generate(h, child, key + '-' + node.tag + '-' + index);
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return (0,lib.generate)(primaryColor)[0];
}
function withSuffix(name, theme) {
  switch (theme) {
    case 'fill':
      return name + '-fill';
    case 'outline':
      return name + '-o';
    case 'twotone':
      return name + '-twotone';
    default:
      throw new TypeError('Unknown theme type: ' + theme + ', name: ' + name);
  }
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-vue/es/components/Icon.js


var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6'
};
var Icon = {
  name: 'AntdIcon',
  props: ['type', 'primaryColor', 'secondaryColor'],
  displayName: 'IconVue',
  definitions: new MiniMap(),
  data: function data() {
    return {
      twoToneColorPalette: twoToneColorPalette
    };
  },
  add: function add() {
    for (var _len = arguments.length, icons = Array(_len), _key = 0; _key < _len; _key++) {
      icons[_key] = arguments[_key];
    }
    icons.forEach(function (icon) {
      Icon.definitions.set(withSuffix(icon.name, icon.theme), icon);
    });
  },
  clear: function clear() {
    Icon.definitions.clear();
  },
  get: function get(key) {
    var colors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : twoToneColorPalette;
    if (key) {
      var target = Icon.definitions.get(key);
      if (target && typeof target.icon === 'function') {
        target = (0,helpers_extends/* default */.Z)({}, target, {
          icon: target.icon(colors.primaryColor, colors.secondaryColor)
        });
      }
      return target;
    }
  },
  setTwoToneColors: function setTwoToneColors(_ref) {
    var primaryColor = _ref.primaryColor,
      secondaryColor = _ref.secondaryColor;
    twoToneColorPalette.primaryColor = primaryColor;
    twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  },
  getTwoToneColors: function getTwoToneColors() {
    return (0,helpers_extends/* default */.Z)({}, twoToneColorPalette);
  },
  render: function render(h) {
    var _$props = this.$props,
      type = _$props.type,
      primaryColor = _$props.primaryColor,
      secondaryColor = _$props.secondaryColor;
    var target = void 0;
    var colors = twoToneColorPalette;
    if (primaryColor) {
      colors = {
        primaryColor: primaryColor,
        secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
      };
    }
    if (isIconDefinition(type)) {
      target = type;
    } else if (typeof type === 'string') {
      target = Icon.get(type, colors);
      if (!target) {
        // log(`Could not find icon: ${type}`);
        return null;
      }
    }
    if (!target) {
      log('type should be string or icon definiton, but got ' + type);
      return null;
    }
    if (target && typeof target.icon === 'function') {
      target = (0,helpers_extends/* default */.Z)({}, target, {
        icon: target.icon(colors.primaryColor, colors.secondaryColor)
      });
    }
    return generate(h, target.icon, 'svg-' + target.name, {
      attrs: {
        'data-icon': target.name,
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        'aria-hidden': 'true'
      },
      on: this.$listeners
    });
  }
};

/* istanbul ignore next */
Icon.install = function (Vue) {
  Vue.component(Icon.name, Icon);
};
/* harmony default export */ var components_Icon = (Icon);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-vue/es/index.js

/* harmony default export */ var es = (components_Icon);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(7658);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(7251);
// EXTERNAL MODULE: ./node_modules/lodash/isPlainObject.js
var isPlainObject = __webpack_require__(432);
var isPlainObject_default = /*#__PURE__*/__webpack_require__.n(isPlainObject);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/vue-types/utils.js

var ObjProto = Object.prototype;
var utils_toString = ObjProto.toString;
var hasOwn = ObjProto.hasOwnProperty;
var FN_MATCH_REGEXP = /^\s*function (\w+)/;

// https://github.com/vuejs/vue/blob/dev/src/core/util/props.js#L159
var getType = function getType(fn) {
  var type = fn !== null && fn !== undefined ? fn.type ? fn.type : fn : null;
  var match = type && type.toString().match(FN_MATCH_REGEXP);
  return match && match[1];
};
var getNativeType = function getNativeType(value) {
  if (value === null || value === undefined) return null;
  var match = value.constructor.toString().match(FN_MATCH_REGEXP);
  return match && match[1];
};

/**
 * No-op function
 */
var noop = function noop() {};

/**
 * Checks for a own property in an object
 *
 * @param {object} obj - Object
 * @param {string} prop - Property to check
 */
var has = function has(obj, prop) {
  return hasOwn.call(obj, prop);
};

/**
 * Determines whether the passed value is an integer. Uses `Number.isInteger` if available
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 * @param {*} value - The value to be tested for being an integer.
 * @returns {boolean}
 */
var isInteger = Number.isInteger || function (value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};

/**
 * Determines whether the passed value is an Array.
 *
 * @param {*} value - The value to be tested for being an array.
 * @returns {boolean}
 */
var isArray = Array.isArray || function (value) {
  return utils_toString.call(value) === '[object Array]';
};

/**
 * Checks if a value is a function
 *
 * @param {any} value - Value to check
 * @returns {boolean}
 */
var isFunction = function isFunction(value) {
  return utils_toString.call(value) === '[object Function]';
};

/**
 * Adds a `def` method to the object returning a new object with passed in argument as `default` property
 *
 * @param {object} type - Object to enhance
 */
var withDefault = function withDefault(type) {
  Object.defineProperty(type, 'def', {
    value: function value(def) {
      if (def === undefined && this['default'] === undefined) {
        this['default'] = undefined;
        return this;
      }
      if (!isFunction(def) && !validateType(this, def)) {
        warn(this._vueTypes_name + ' - invalid default value: "' + def + '"', def);
        return this;
      }
      this['default'] = isArray(def) || isPlainObject_default()(def) ? function () {
        return def;
      } : def;
      return this;
    },
    enumerable: false,
    writable: false
  });
};

/**
 * Adds a `isRequired` getter returning a new object with `required: true` key-value
 *
 * @param {object} type - Object to enhance
 */
var withRequired = function withRequired(type) {
  Object.defineProperty(type, 'isRequired', {
    get: function get() {
      this.required = true;
      return this;
    },
    enumerable: false
  });
};

/**
 * Adds `isRequired` and `def` modifiers to an object
 *
 * @param {string} name - Type internal name
 * @param {object} obj - Object to enhance
 * @returns {object}
 */
var toType = function toType(name, obj) {
  Object.defineProperty(obj, '_vueTypes_name', {
    enumerable: false,
    writable: false,
    value: name
  });
  withRequired(obj);
  withDefault(obj);
  if (isFunction(obj.validator)) {
    obj.validator = obj.validator.bind(obj);
  }
  return obj;
};

/**
 * Validates a given value against a prop type object
 *
 * @param {Object|*} type - Type to use for validation. Either a type object or a constructor
 * @param {*} value - Value to check
 * @param {boolean} silent - Silence warnings
 * @returns {boolean}
 */
var validateType = function validateType(type, value) {
  var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var typeToCheck = type;
  var valid = true;
  var expectedType = void 0;
  if (!isPlainObject_default()(type)) {
    typeToCheck = {
      type: type
    };
  }
  var namePrefix = typeToCheck._vueTypes_name ? typeToCheck._vueTypes_name + ' - ' : '';
  if (hasOwn.call(typeToCheck, 'type') && typeToCheck.type !== null) {
    if (isArray(typeToCheck.type)) {
      valid = typeToCheck.type.some(function (type) {
        return validateType(type, value, true);
      });
      expectedType = typeToCheck.type.map(function (type) {
        return getType(type);
      }).join(' or ');
    } else {
      expectedType = getType(typeToCheck);
      if (expectedType === 'Array') {
        valid = isArray(value);
      } else if (expectedType === 'Object') {
        valid = isPlainObject_default()(value);
      } else if (expectedType === 'String' || expectedType === 'Number' || expectedType === 'Boolean' || expectedType === 'Function') {
        valid = getNativeType(value) === expectedType;
      } else {
        valid = value instanceof typeToCheck.type;
      }
    }
  }
  if (!valid) {
    silent === false && warn(namePrefix + 'value "' + value + '" should be of type "' + expectedType + '"');
    return false;
  }
  if (hasOwn.call(typeToCheck, 'validator') && isFunction(typeToCheck.validator)) {
    valid = typeToCheck.validator(value);
    if (!valid && silent === false) warn(namePrefix + 'custom validation failed');
    return valid;
  }
  return valid;
};
var warn = noop;
if (false) { var hasConsole; }

;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/vue-types/index.js




var VuePropTypes = {
  get any() {
    return toType('any', {
      type: null
    });
  },
  get func() {
    return toType('function', {
      type: Function
    }).def(currentDefaults.func);
  },
  get bool() {
    return toType('boolean', {
      type: Boolean
    }).def(currentDefaults.bool);
  },
  get string() {
    return toType('string', {
      type: String
    }).def(currentDefaults.string);
  },
  get number() {
    return toType('number', {
      type: Number
    }).def(currentDefaults.number);
  },
  get array() {
    return toType('array', {
      type: Array
    }).def(currentDefaults.array);
  },
  get object() {
    return toType('object', {
      type: Object
    }).def(currentDefaults.object);
  },
  get integer() {
    return toType('integer', {
      type: Number,
      validator: function validator(value) {
        return isInteger(value);
      }
    }).def(currentDefaults.integer);
  },
  get symbol() {
    return toType('symbol', {
      type: null,
      validator: function validator(value) {
        return (typeof value === 'undefined' ? 'undefined' : (0,helpers_typeof/* default */.Z)(value)) === 'symbol';
      }
    });
  },
  custom: function custom(validatorFn) {
    var warnMsg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'custom validation failed';
    if (typeof validatorFn !== 'function') {
      throw new TypeError('[VueTypes error]: You must provide a function as argument');
    }
    return toType(validatorFn.name || '<<anonymous function>>', {
      validator: function validator() {
        var valid = validatorFn.apply(undefined, arguments);
        if (!valid) warn(this._vueTypes_name + ' - ' + warnMsg);
        return valid;
      }
    });
  },
  oneOf: function oneOf(arr) {
    if (!isArray(arr)) {
      throw new TypeError('[VueTypes error]: You must provide an array as argument');
    }
    var msg = 'oneOf - value should be one of "' + arr.join('", "') + '"';
    var allowedTypes = arr.reduce(function (ret, v) {
      if (v !== null && v !== undefined) {
        ret.indexOf(v.constructor) === -1 && ret.push(v.constructor);
      }
      return ret;
    }, []);
    return toType('oneOf', {
      type: allowedTypes.length > 0 ? allowedTypes : null,
      validator: function validator(value) {
        var valid = arr.indexOf(value) !== -1;
        if (!valid) warn(msg);
        return valid;
      }
    });
  },
  instanceOf: function instanceOf(instanceConstructor) {
    return toType('instanceOf', {
      type: instanceConstructor
    });
  },
  oneOfType: function oneOfType(arr) {
    if (!isArray(arr)) {
      throw new TypeError('[VueTypes error]: You must provide an array as argument');
    }
    var hasCustomValidators = false;
    var nativeChecks = arr.reduce(function (ret, type) {
      if (isPlainObject_default()(type)) {
        if (type._vueTypes_name === 'oneOf') {
          return ret.concat(type.type || []);
        }
        if (type.type && !isFunction(type.validator)) {
          if (isArray(type.type)) return ret.concat(type.type);
          ret.push(type.type);
        } else if (isFunction(type.validator)) {
          hasCustomValidators = true;
        }
        return ret;
      }
      ret.push(type);
      return ret;
    }, []);
    if (!hasCustomValidators) {
      // we got just native objects (ie: Array, Object)
      // delegate to Vue native prop check
      return toType('oneOfType', {
        type: nativeChecks
      }).def(undefined);
    }
    var typesStr = arr.map(function (type) {
      if (type && isArray(type.type)) {
        return type.type.map(getType);
      }
      return getType(type);
    }).reduce(function (ret, type) {
      return ret.concat(isArray(type) ? type : [type]);
    }, []).join('", "');
    return this.custom(function oneOfType(value) {
      var valid = arr.some(function (type) {
        if (type._vueTypes_name === 'oneOf') {
          return type.type ? validateType(type.type, value, true) : true;
        }
        return validateType(type, value, true);
      });
      if (!valid) warn('oneOfType - value type should be one of "' + typesStr + '"');
      return valid;
    }).def(undefined);
  },
  arrayOf: function arrayOf(type) {
    return toType('arrayOf', {
      type: Array,
      validator: function validator(values) {
        var valid = values.every(function (value) {
          return validateType(type, value);
        });
        if (!valid) warn('arrayOf - value must be an array of "' + getType(type) + '"');
        return valid;
      }
    });
  },
  objectOf: function objectOf(type) {
    return toType('objectOf', {
      type: Object,
      validator: function validator(obj) {
        var valid = Object.keys(obj).every(function (key) {
          return validateType(type, obj[key]);
        });
        if (!valid) warn('objectOf - value must be an object of "' + getType(type) + '"');
        return valid;
      }
    });
  },
  shape: function shape(obj) {
    var keys = Object.keys(obj);
    var requiredKeys = keys.filter(function (key) {
      return obj[key] && obj[key].required === true;
    });
    var type = toType('shape', {
      type: Object,
      validator: function validator(value) {
        var _this = this;
        if (!isPlainObject_default()(value)) {
          return false;
        }
        var valueKeys = Object.keys(value);

        // check for required keys (if any)
        if (requiredKeys.length > 0 && requiredKeys.some(function (req) {
          return valueKeys.indexOf(req) === -1;
        })) {
          warn('shape - at least one of required properties "' + requiredKeys.join('", "') + '" is not present');
          return false;
        }
        return valueKeys.every(function (key) {
          if (keys.indexOf(key) === -1) {
            if (_this._vueTypes_isLoose === true) return true;
            warn('shape - object is missing "' + key + '" property');
            return false;
          }
          var type = obj[key];
          return validateType(type, value[key]);
        });
      }
    });
    Object.defineProperty(type, '_vueTypes_isLoose', {
      enumerable: false,
      writable: true,
      value: false
    });
    Object.defineProperty(type, 'loose', {
      get: function get() {
        this._vueTypes_isLoose = true;
        return this;
      },
      enumerable: false
    });
    return type;
  }
};
var typeDefaults = function typeDefaults() {
  return {
    func: undefined,
    bool: undefined,
    string: undefined,
    number: undefined,
    array: undefined,
    object: undefined,
    integer: undefined
  };
};
var currentDefaults = typeDefaults();
Object.defineProperty(VuePropTypes, 'sensibleDefaults', {
  enumerable: false,
  set: function set(value) {
    if (value === false) {
      currentDefaults = {};
    } else if (value === true) {
      currentDefaults = typeDefaults();
    } else if (isPlainObject_default()(value)) {
      currentDefaults = value;
    }
  },
  get: function get() {
    return currentDefaults;
  }
});
/* harmony default export */ var vue_types = (VuePropTypes);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3066);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(8149);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/props-util.js






function props_util_getType(fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}
var camelizeRE = /-(\w)/g;
var camelize = function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
};
var parseStyleText = function parseStyleText() {
  var cssText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var camel = arguments[1];
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      if (tmp.length > 1) {
        var k = camel ? camelize(tmp[0].trim()) : tmp[0].trim();
        res[k] = tmp[1].trim();
      }
    }
  });
  return res;
};
var hasProp = function hasProp(instance, prop) {
  var $options = instance.$options || {};
  var propsData = $options.propsData || {};
  return prop in propsData;
};
var slotHasProp = function slotHasProp(slot, prop) {
  var $options = slot.componentOptions || {};
  var propsData = $options.propsData || {};
  return prop in propsData;
};
var filterProps = function filterProps(props) {
  var propsData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var res = {};
  Object.keys(props).forEach(function (k) {
    if (k in propsData || props[k] !== undefined) {
      res[k] = props[k];
    }
  });
  return res;
};
var getScopedSlots = function getScopedSlots(ele) {
  return ele.data && ele.data.scopedSlots || {};
};
var getSlots = function getSlots(ele) {
  var componentOptions = ele.componentOptions || {};
  if (ele.$vnode) {
    componentOptions = ele.$vnode.componentOptions || {};
  }
  var children = ele.children || componentOptions.children || [];
  var slots = {};
  children.forEach(function (child) {
    if (!isEmptyElement(child)) {
      var name = child.data && child.data.slot || 'default';
      slots[name] = slots[name] || [];
      slots[name].push(child);
    }
  });
  return (0,helpers_extends/* default */.Z)({}, slots, getScopedSlots(ele));
};
var getSlot = function getSlot(self) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return self.$scopedSlots && self.$scopedSlots[name] && self.$scopedSlots[name](options) || self.$slots[name] || [];
};
var getAllChildren = function getAllChildren(ele) {
  var componentOptions = ele.componentOptions || {};
  if (ele.$vnode) {
    componentOptions = ele.$vnode.componentOptions || {};
  }
  return ele.children || componentOptions.children || [];
};
var getSlotOptions = function getSlotOptions(ele) {
  if (ele.fnOptions) {
    // 函数式组件
    return ele.fnOptions;
  }
  var componentOptions = ele.componentOptions;
  if (ele.$vnode) {
    componentOptions = ele.$vnode.componentOptions;
  }
  return componentOptions ? componentOptions.Ctor.options || {} : {};
};
var getOptionProps = function getOptionProps(instance) {
  if (instance.componentOptions) {
    var componentOptions = instance.componentOptions;
    var _componentOptions$pro = componentOptions.propsData,
      propsData = _componentOptions$pro === undefined ? {} : _componentOptions$pro,
      _componentOptions$Cto = componentOptions.Ctor,
      Ctor = _componentOptions$Cto === undefined ? {} : _componentOptions$Cto;
    var props = (Ctor.options || {}).props || {};
    var res = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
    try {
      for (var _iterator = Object.entries(props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _ref = _step.value;
        var _ref2 = (0,slicedToArray/* default */.Z)(_ref, 2);
        var k = _ref2[0];
        var v = _ref2[1];
        var def = v['default'];
        if (def !== undefined) {
          res[k] = typeof def === 'function' && props_util_getType(v.type) !== 'Function' ? def.call(instance) : def;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
    return (0,helpers_extends/* default */.Z)({}, res, propsData);
  }
  var _instance$$options = instance.$options,
    $options = _instance$$options === undefined ? {} : _instance$$options,
    _instance$$props = instance.$props,
    $props = _instance$$props === undefined ? {} : _instance$$props;
  return filterProps($props, $options.propsData);
};
var getComponentFromProp = function getComponentFromProp(instance, prop) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : instance;
  var execute = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  if (instance.$createElement) {
    var h = instance.$createElement;
    var temp = instance[prop];
    if (temp !== undefined) {
      return typeof temp === 'function' && execute ? temp(h, options) : temp;
    }
    return instance.$scopedSlots[prop] && execute && instance.$scopedSlots[prop](options) || instance.$scopedSlots[prop] || instance.$slots[prop] || undefined;
  } else {
    var _h = instance.context.$createElement;
    var _temp = getPropsData(instance)[prop];
    if (_temp !== undefined) {
      return typeof _temp === 'function' && execute ? _temp(_h, options) : _temp;
    }
    var slotScope = getScopedSlots(instance)[prop];
    if (slotScope !== undefined) {
      return typeof slotScope === 'function' && execute ? slotScope(_h, options) : slotScope;
    }
    var slotsProp = [];
    var componentOptions = instance.componentOptions || {};
    (componentOptions.children || []).forEach(function (child) {
      if (child.data && child.data.slot === prop) {
        if (child.data.attrs) {
          delete child.data.attrs.slot;
        }
        if (child.tag === 'template') {
          slotsProp.push(child.children);
        } else {
          slotsProp.push(child);
        }
      }
    });
    return slotsProp.length ? slotsProp : undefined;
  }
};
var getAllProps = function getAllProps(ele) {
  var data = ele.data || {};
  var componentOptions = ele.componentOptions || {};
  if (ele.$vnode) {
    data = ele.$vnode.data || {};
    componentOptions = ele.$vnode.componentOptions || {};
  }
  return _extends({}, data.props, data.attrs, componentOptions.propsData);
};
var getPropsData = function getPropsData(ele) {
  var componentOptions = ele.componentOptions;
  if (ele.$vnode) {
    componentOptions = ele.$vnode.componentOptions;
  }
  return componentOptions ? componentOptions.propsData || {} : {};
};
var getValueByProp = function getValueByProp(ele, prop) {
  return getPropsData(ele)[prop];
};
var getAttrs = function getAttrs(ele) {
  var data = ele.data;
  if (ele.$vnode) {
    data = ele.$vnode.data;
  }
  return data ? data.attrs || {} : {};
};
var getKey = function getKey(ele) {
  var key = ele.key;
  if (ele.$vnode) {
    key = ele.$vnode.key;
  }
  return key;
};
function getEvents(child) {
  var events = {};
  if (child.componentOptions && child.componentOptions.listeners) {
    events = child.componentOptions.listeners;
  } else if (child.data && child.data.on) {
    events = child.data.on;
  }
  return (0,helpers_extends/* default */.Z)({}, events);
}

// 获取 xxx.native 或者 原生标签 事件
function getDataEvents(child) {
  var events = {};
  if (child.data && child.data.on) {
    events = child.data.on;
  }
  return (0,helpers_extends/* default */.Z)({}, events);
}

// use getListeners instead this.$listeners
// https://github.com/vueComponent/ant-design-vue/issues/1705
function getListeners(context) {
  return (context.$vnode ? context.$vnode.componentOptions.listeners : context.$listeners) || {};
}
function getClass(ele) {
  var data = {};
  if (ele.data) {
    data = ele.data;
  } else if (ele.$vnode && ele.$vnode.data) {
    data = ele.$vnode.data;
  }
  var tempCls = data['class'] || {};
  var staticClass = data.staticClass;
  var cls = {};
  staticClass && staticClass.split(' ').forEach(function (c) {
    cls[c.trim()] = true;
  });
  if (typeof tempCls === 'string') {
    tempCls.split(' ').forEach(function (c) {
      cls[c.trim()] = true;
    });
  } else if (Array.isArray(tempCls)) {
    classnames_default()(tempCls).split(' ').forEach(function (c) {
      cls[c.trim()] = true;
    });
  } else {
    cls = (0,helpers_extends/* default */.Z)({}, cls, tempCls);
  }
  return cls;
}
function getStyle(ele, camel) {
  var data = {};
  if (ele.data) {
    data = ele.data;
  } else if (ele.$vnode && ele.$vnode.data) {
    data = ele.$vnode.data;
  }
  var style = data.style || data.staticStyle;
  if (typeof style === 'string') {
    style = parseStyleText(style, camel);
  } else if (camel && style) {
    // 驼峰化
    var res = {};
    Object.keys(style).forEach(function (k) {
      return res[camelize(k)] = style[k];
    });
    return res;
  }
  return style;
}
function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}
function isEmptyElement(c) {
  return !(c.tag || c.text && c.text.trim() !== '');
}
function isStringElement(c) {
  return !c.tag;
}
function filterEmpty() {
  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return children.filter(function (c) {
    return !isEmptyElement(c);
  });
}
var initDefaultProps = function initDefaultProps(propTypes, defaultProps) {
  Object.keys(defaultProps).forEach(function (k) {
    if (propTypes[k]) {
      propTypes[k].def && (propTypes[k] = propTypes[k].def(defaultProps[k]));
    } else {
      throw new Error('not have ' + k + ' prop');
    }
  });
  return propTypes;
};
function mergeProps() {
  var args = [].slice.call(arguments, 0);
  var props = {};
  args.forEach(function () {
    var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;
    try {
      for (var _iterator2 = Object.entries(p)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _ref3 = _step2.value;
        var _ref4 = (0,slicedToArray/* default */.Z)(_ref3, 2);
        var k = _ref4[0];
        var v = _ref4[1];
        props[k] = props[k] || {};
        if (isPlainObject_default()(v)) {
          (0,helpers_extends/* default */.Z)(props[k], v);
        } else {
          props[k] = v;
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
          _iterator2['return']();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  });
  return props;
}
function isValidElement(element) {
  return element && (typeof element === 'undefined' ? 'undefined' : (0,helpers_typeof/* default */.Z)(element)) === 'object' && 'componentOptions' in element && 'context' in element && element.tag !== undefined; // remove text node
}


/* harmony default export */ var props_util = (hasProp);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/icon/IconFont.js



var customCache = new Set();
function create(options) {
  var scriptUrl = options.scriptUrl,
    _options$extraCommonP = options.extraCommonProps,
    extraCommonProps = _options$extraCommonP === undefined ? {} : _options$extraCommonP;

  /**
   * DOM API required.
   * Make sure in browser environment.
   * The Custom Icon will create a <script/>
   * that loads SVG symbols and insert the SVG Element into the document body.
   */

  if (typeof document !== 'undefined' && typeof window !== 'undefined' && typeof document.createElement === 'function' && typeof scriptUrl === 'string' && scriptUrl.length && !customCache.has(scriptUrl)) {
    var script = document.createElement('script');
    script.setAttribute('src', scriptUrl);
    script.setAttribute('data-namespace', scriptUrl);
    customCache.add(scriptUrl);
    document.body.appendChild(script);
  }
  var Iconfont = {
    functional: true,
    name: 'AIconfont',
    props: icon.props,
    render: function render(h, context) {
      var props = context.props,
        slots = context.slots,
        listeners = context.listeners,
        data = context.data;
      var type = props.type,
        restProps = (0,objectWithoutProperties/* default */.Z)(props, ['type']);
      var slotsMap = slots();
      var children = slotsMap['default'];
      // component > children > type
      var content = null;
      if (type) {
        content = h('use', {
          attrs: {
            'xlink:href': '#' + type
          }
        });
      }
      if (children) {
        content = children;
      }
      var iconProps = mergeProps(extraCommonProps, data, {
        props: restProps,
        on: listeners
      });
      return h(icon, iconProps, [content]);
    }
  };
  return Iconfont;
}
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-util/warning.js
/* eslint-disable no-console */
var warned = {};
function warning(valid, message) {
  // Support uglify
  if (false) {}
}
function note(valid, message) {
  // Support uglify
  if (false) {}
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
/* harmony default export */ var vc_util_warning = (warningOnce);
/* eslint-enable */
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/warning.js


/* harmony default export */ var _util_warning = (function (valid, component) {
  var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  vc_util_warning(valid, '[antdv: ' + component + '] ' + message);
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/icon/utils.js


// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
var svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
};
var fillTester = /-fill$/;
var outlineTester = /-o$/;
var twoToneTester = /-twotone$/;
function getThemeFromTypeName(type) {
  var result = null;
  if (fillTester.test(type)) {
    result = 'filled';
  } else if (outlineTester.test(type)) {
    result = 'outlined';
  } else if (twoToneTester.test(type)) {
    result = 'twoTone';
  }
  return result;
}
function removeTypeTheme(type) {
  return type.replace(fillTester, '').replace(outlineTester, '').replace(twoToneTester, '');
}
function withThemeSuffix(type, theme) {
  var result = type;
  if (theme === 'filled') {
    result += '-fill';
  } else if (theme === 'outlined') {
    result += '-o';
  } else if (theme === 'twoTone') {
    result += '-twotone';
  } else {
    _util_warning(false, 'Icon', 'This icon \'' + type + '\' has unknown theme \'' + theme + '\'');
  }
  return result;
}

// For alias or compatibility
function alias(type) {
  var newType = type;
  switch (type) {
    case 'cross':
      newType = 'close';
      break;
    // https://github.com/ant-design/ant-design/issues/13007
    case 'interation':
      newType = 'interaction';
      break;
    // https://github.com/ant-design/ant-design/issues/16810
    case 'canlendar':
      newType = 'calendar';
      break;
    // https://github.com/ant-design/ant-design/issues/17448
    case 'colum-height':
      newType = 'column-height';
      break;
    default:
  }
  _util_warning(newType === type, 'Icon', 'Icon \'' + type + '\' was a typo and is now deprecated, please use \'' + newType + '\' instead.');
  return newType;
}
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-pagination/locale/en_US.js
/* harmony default export */ var en_US = ({
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: '',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-calendar/src/locale/en_US.js
/* harmony default export */ var locale_en_US = ({
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/time-picker/locale/en_US.js
var locale = {
  placeholder: 'Select time'
};
/* harmony default export */ var time_picker_locale_en_US = (locale);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/date-picker/locale/en_US.js




// Merge into a locale object
var en_US_locale = {
  lang: (0,helpers_extends/* default */.Z)({
    placeholder: 'Select date',
    rangePlaceholder: ['Start date', 'End date']
  }, locale_en_US),
  timePickerLocale: (0,helpers_extends/* default */.Z)({}, time_picker_locale_en_US)
};

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

/* harmony default export */ var date_picker_locale_en_US = (en_US_locale);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/calendar/locale/en_US.js

/* harmony default export */ var calendar_locale_en_US = (date_picker_locale_en_US);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/color-picker/locale/en_US.js
/* harmony default export */ var color_picker_locale_en_US = ({
  'btn:save': 'Save',
  'btn:cancel': 'Cancel',
  'btn:clear': 'Clear'
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/locale/default.js





/* harmony default export */ var locale_default = ({
  locale: 'en',
  Pagination: en_US,
  DatePicker: date_picker_locale_en_US,
  TimePicker: time_picker_locale_en_US,
  Calendar: calendar_locale_en_US,
  ColorPicker: color_picker_locale_en_US,
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No Data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand'
  },
  PageHeader: {
    back: 'Back'
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/locale-provider/default.js

/* harmony default export */ var locale_provider_default = (locale_default);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/locale-provider/LocaleReceiver.js



/* harmony default export */ var LocaleReceiver = ({
  name: 'LocaleReceiver',
  props: {
    componentName: vue_types.string.def('global'),
    defaultLocale: vue_types.oneOfType([vue_types.object, vue_types.func]),
    children: vue_types.func
  },
  inject: {
    localeData: {
      'default': function _default() {
        return {};
      }
    }
  },
  methods: {
    getLocale: function getLocale() {
      var componentName = this.componentName,
        defaultLocale = this.defaultLocale;
      var locale = defaultLocale || locale_provider_default[componentName || 'global'];
      var antLocale = this.localeData.antLocale;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return (0,helpers_extends/* default */.Z)({}, typeof locale === 'function' ? locale() : locale, localeFromContext || {});
    },
    getLocaleCode: function getLocaleCode() {
      var antLocale = this.localeData.antLocale;
      var localeCode = antLocale && antLocale.locale;
      // Had use LocaleProvide but didn't set locale
      if (antLocale && antLocale.exist && !localeCode) {
        return locale_provider_default.locale;
      }
      return localeCode;
    }
  },
  render: function render() {
    var $scopedSlots = this.$scopedSlots;
    var children = this.children || $scopedSlots['default'];
    var antLocale = this.localeData.antLocale;
    return children(this.getLocale(), this.getLocaleCode(), antLocale);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/icon/twoTonePrimaryColor.js

function setTwoToneColor(primaryColor) {
  return es.setTwoToneColors({
    primaryColor: primaryColor
  });
}
function getTwoToneColor() {
  var colors = es.getTwoToneColors();
  return colors.primaryColor;
}
// EXTERNAL MODULE: ./node_modules/vue-ref/index.js
var vue_ref = __webpack_require__(2875);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/antInputDirective.js
/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}
var isTextInputType = makeMap('text,number,password,search,email,tel,url');
function onCompositionStart(e) {
  e.target.composing = true;
}
function onCompositionEnd(e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) return;
  e.target.composing = false;
  trigger(e.target, 'input');
}
function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}
function antInput(Vue) {
  return Vue.directive('ant-input', {
    inserted: function inserted(el, binding, vnode) {
      if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        if (!binding.modifiers || !binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    }
  });
}
/* harmony default export */ var antInputDirective = ({
  install: function install(Vue) {
    antInput(Vue);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/FormDecoratorDirective.js
function antDecorator(Vue) {
  return Vue.directive('decorator', {});
}
/* harmony default export */ var FormDecoratorDirective = ({
  // just for tag
  install: function install(Vue) {
    antDecorator(Vue);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/portalDirective.js
function antPortal(Vue) {
  return Vue.directive('ant-portal', {
    inserted: function inserted(el, binding) {
      var value = binding.value;
      var parentNode = typeof value === 'function' ? value(el) : value;
      if (parentNode !== el.parentNode) {
        parentNode.appendChild(el);
      }
    },
    componentUpdated: function componentUpdated(el, binding) {
      var value = binding.value;
      var parentNode = typeof value === 'function' ? value(el) : value;
      if (parentNode !== el.parentNode) {
        parentNode.appendChild(el);
      }
    }
  });
}
/* harmony default export */ var portalDirective = ({
  install: function install(Vue) {
    antPortal(Vue);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/antDirective.js




/* harmony default export */ var antDirective = ({
  install: function install(Vue) {
    Vue.use(vue_ref/* default */.Z, {
      name: 'ant-ref'
    });
    antInput(Vue);
    antDecorator(Vue);
    antPortal(Vue);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/base/index.js

var base = {};
var install = function install(Vue) {
  base.Vue = Vue;
  Vue.use(antDirective);
};
base.install = install;
/* harmony default export */ var es_base = (base);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/icon/index.js
















// Initial setting
es.add.apply(es, (0,toConsumableArray/* default */.Z)(Object.keys(ant_icon_namespaceObject).map(function (key) {
  return ant_icon_namespaceObject[key];
})));
setTwoToneColor('#1890ff');
var defaultTheme = 'outlined';
var dangerousTheme = void 0;
function renderIcon(h, locale, context) {
  var _classNames;
  var props = context.$props,
    $slots = context.$slots;
  var listeners = getListeners(context);
  var type = props.type,
    Component = props.component,
    viewBox = props.viewBox,
    spin = props.spin,
    theme = props.theme,
    twoToneColor = props.twoToneColor,
    rotate = props.rotate,
    tabIndex = props.tabIndex;
  var children = filterEmpty($slots['default']);
  children = children.length === 0 ? undefined : children;
  _util_warning(Boolean(type || Component || children), 'Icon', 'Icon should have `type` prop or `component` prop or `children`.');
  var classString = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, 'anticon', true), (0,defineProperty/* default */.Z)(_classNames, 'anticon-' + type, !!type), _classNames));
  var svgClassString = classnames_default()((0,defineProperty/* default */.Z)({}, 'anticon-spin', !!spin || type === 'loading'));
  var svgStyle = rotate ? {
    msTransform: 'rotate(' + rotate + 'deg)',
    transform: 'rotate(' + rotate + 'deg)'
  } : undefined;
  var innerSvgProps = {
    attrs: (0,helpers_extends/* default */.Z)({}, svgBaseProps, {
      viewBox: viewBox
    }),
    'class': svgClassString,
    style: svgStyle
  };
  if (!viewBox) {
    delete innerSvgProps.attrs.viewBox;
  }
  var renderInnerNode = function renderInnerNode() {
    // component > children > type
    if (Component) {
      return h(Component, innerSvgProps, [children]);
    }
    if (children) {
      _util_warning(Boolean(viewBox) || children.length === 1 && children[0].tag === 'use', 'Icon', 'Make sure that you provide correct `viewBox`' + ' prop (default `0 0 1024 1024`) to the icon.');
      var _innerSvgProps = {
        attrs: (0,helpers_extends/* default */.Z)({}, svgBaseProps),
        'class': svgClassString,
        style: svgStyle
      };
      return h('svg', babel_helper_vue_jsx_merge_props_default()([_innerSvgProps, {
        attrs: {
          viewBox: viewBox
        }
      }]), [children]);
    }
    if (typeof type === 'string') {
      var computedType = type;
      if (theme) {
        var themeInName = getThemeFromTypeName(type);
        _util_warning(!themeInName || theme === themeInName, 'Icon', 'The icon name \'' + type + '\' already specify a theme \'' + themeInName + '\',' + (' the \'theme\' prop \'' + theme + '\' will be ignored.'));
      }
      computedType = withThemeSuffix(removeTypeTheme(alias(computedType)), dangerousTheme || theme || defaultTheme);
      return h(es, {
        attrs: {
          focusable: 'false',
          type: computedType,
          primaryColor: twoToneColor
        },
        'class': svgClassString,
        style: svgStyle
      });
    }
  };
  var iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && 'click' in listeners) {
    iconTabIndex = -1;
  }
  // functional component not support nativeOn，https://github.com/vuejs/vue/issues/7526
  var iProps = {
    attrs: {
      'aria-label': type && locale.icon + ': ' + type,
      tabIndex: iconTabIndex
    },
    on: listeners,
    'class': classString,
    staticClass: ''
  };
  return h('i', iProps, [renderInnerNode()]);
}
var icon_Icon = {
  name: 'AIcon',
  props: {
    tabIndex: vue_types.number,
    type: vue_types.string,
    component: vue_types.any,
    viewBox: vue_types.any,
    spin: vue_types.bool.def(false),
    rotate: vue_types.number,
    theme: vue_types.oneOf(['filled', 'outlined', 'twoTone']),
    twoToneColor: vue_types.string,
    role: vue_types.string
  },
  render: function render(h) {
    var _this = this;
    return h(LocaleReceiver, {
      attrs: {
        componentName: 'Icon'
      },
      scopedSlots: {
        'default': function _default(locale) {
          return renderIcon(h, locale, _this);
        }
      }
    });
  }
};
icon_Icon.createFromIconfontCN = create;
icon_Icon.getTwoToneColor = getTwoToneColor;
icon_Icon.setTwoToneColor = setTwoToneColor;

/* istanbul ignore next */
icon_Icon.install = function (Vue) {
  Vue.use(es_base);
  Vue.component(icon_Icon.name, icon_Icon);
};
/* harmony default export */ var icon = (icon_Icon);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/tabs/style/index.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/tabs/style/css.js


// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(7203);
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/KeyCode.js
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229
};

/*
 whether text and modified key is entered at the same time.
 */
KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
  var keyCode = e.keyCode;
  if (e.altKey && !e.ctrlKey || e.metaKey ||
  // Function keys don't generate text
  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
    return false;
  }

  // The following keys are quite harmless, even in combination with
  // CTRL, ALT or SHIFT.
  switch (keyCode) {
    case KeyCode.ALT:
    case KeyCode.CAPS_LOCK:
    case KeyCode.CONTEXT_MENU:
    case KeyCode.CTRL:
    case KeyCode.DOWN:
    case KeyCode.END:
    case KeyCode.ESC:
    case KeyCode.HOME:
    case KeyCode.INSERT:
    case KeyCode.LEFT:
    case KeyCode.MAC_FF_META:
    case KeyCode.META:
    case KeyCode.NUMLOCK:
    case KeyCode.NUM_CENTER:
    case KeyCode.PAGE_DOWN:
    case KeyCode.PAGE_UP:
    case KeyCode.PAUSE:
    case KeyCode.PRINT_SCREEN:
    case KeyCode.RIGHT:
    case KeyCode.SHIFT:
    case KeyCode.UP:
    case KeyCode.WIN_KEY:
    case KeyCode.WIN_KEY_RIGHT:
      return false;
    default:
      return true;
  }
};

/*
 whether character is entered.
 */
KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
    return true;
  }
  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
    return true;
  }
  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
    return true;
  }

  // Safari sends zero key code for non-latin characters.
  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
    return true;
  }
  switch (keyCode) {
    case KeyCode.SPACE:
    case KeyCode.QUESTION_MARK:
    case KeyCode.NUM_PLUS:
    case KeyCode.NUM_MINUS:
    case KeyCode.NUM_PERIOD:
    case KeyCode.NUM_DIVISION:
    case KeyCode.SEMICOLON:
    case KeyCode.DASH:
    case KeyCode.EQUALS:
    case KeyCode.COMMA:
    case KeyCode.PERIOD:
    case KeyCode.SLASH:
    case KeyCode.APOSTROPHE:
    case KeyCode.SINGLE_QUOTE:
    case KeyCode.OPEN_SQUARE_BRACKET:
    case KeyCode.BACKSLASH:
    case KeyCode.CLOSE_SQUARE_BRACKET:
      return true;
    default:
      return false;
  }
};
/* harmony default export */ var _util_KeyCode = (KeyCode);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-tabs/src/Sentinel.js



var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  position: 'absolute'
};
/* harmony default export */ var Sentinel = ({
  name: 'Sentinel',
  props: {
    setRef: vue_types.func,
    prevElement: vue_types.any,
    nextElement: vue_types.any
  },
  methods: {
    onKeyDown: function onKeyDown(_ref) {
      var target = _ref.target,
        which = _ref.which,
        shiftKey = _ref.shiftKey;
      var _$props = this.$props,
        nextElement = _$props.nextElement,
        prevElement = _$props.prevElement;
      if (which !== _util_KeyCode.TAB || document.activeElement !== target) return;

      // Tab next
      if (!shiftKey && nextElement) {
        nextElement.focus();
      }

      // Tab prev
      if (shiftKey && prevElement) {
        prevElement.focus();
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var setRef = this.$props.setRef;
    return h('div', babel_helper_vue_jsx_merge_props_default()([{
      attrs: {
        tabIndex: 0
      }
    }, {
      directives: [{
        name: 'ant-ref',
        value: setRef
      }]
    }, {
      style: sentinelStyle,
      on: {
        'keydown': this.onKeyDown
      },
      attrs: {
        role: 'presentation'
      }
    }]), [this.$slots['default']]);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-tabs/src/TabPane.js




/* harmony default export */ var TabPane = ({
  name: 'TabPane',
  props: {
    active: vue_types.bool,
    destroyInactiveTabPane: vue_types.bool,
    forceRender: vue_types.bool,
    placeholder: vue_types.any,
    rootPrefixCls: vue_types.string,
    tab: vue_types.any,
    closable: vue_types.bool,
    disabled: vue_types.bool
  },
  inject: {
    sentinelContext: {
      'default': function _default() {
        return {};
      }
    }
  },
  render: function render() {
    var _cls;
    var h = arguments[0];
    var _$props = this.$props,
      destroyInactiveTabPane = _$props.destroyInactiveTabPane,
      active = _$props.active,
      forceRender = _$props.forceRender,
      rootPrefixCls = _$props.rootPrefixCls;
    var children = this.$slots['default'];
    var placeholder = getComponentFromProp(this, 'placeholder');
    this._isActived = this._isActived || active;
    var prefixCls = rootPrefixCls + '-tabpane';
    var cls = (_cls = {}, (0,defineProperty/* default */.Z)(_cls, prefixCls, 1), (0,defineProperty/* default */.Z)(_cls, prefixCls + '-inactive', !active), (0,defineProperty/* default */.Z)(_cls, prefixCls + '-active', active), _cls);
    var isRender = destroyInactiveTabPane ? active : this._isActived;
    var shouldRender = isRender || forceRender;
    var _sentinelContext = this.sentinelContext,
      sentinelStart = _sentinelContext.sentinelStart,
      sentinelEnd = _sentinelContext.sentinelEnd,
      setPanelSentinelStart = _sentinelContext.setPanelSentinelStart,
      setPanelSentinelEnd = _sentinelContext.setPanelSentinelEnd;
    var panelSentinelStart = void 0;
    var panelSentinelEnd = void 0;
    if (active && shouldRender) {
      panelSentinelStart = h(Sentinel, {
        attrs: {
          setRef: setPanelSentinelStart,
          prevElement: sentinelStart
        }
      });
      panelSentinelEnd = h(Sentinel, {
        attrs: {
          setRef: setPanelSentinelEnd,
          nextElement: sentinelEnd
        }
      });
    }
    return h('div', {
      'class': cls,
      attrs: {
        role: 'tabpanel',
        'aria-hidden': active ? 'false' : 'true'
      }
    }, [panelSentinelStart, shouldRender ? children : placeholder, panelSentinelEnd]);
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unshift.js
var es_array_unshift = __webpack_require__(541);
;// CONCATENATED MODULE: ./node_modules/omit.js/es/index.js

function omit(obj, fields) {
  var shallowCopy = (0,helpers_extends/* default */.Z)({}, obj);
  for (var i = 0; i < fields.length; i++) {
    var key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}
/* harmony default export */ var omit_js_es = (omit);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/BaseMixin.js



/* harmony default export */ var BaseMixin = ({
  methods: {
    setState: function setState() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments[1];
      var newState = typeof state === 'function' ? state(this.$data, this.$props) : state;
      if (this.getDerivedStateFromProps) {
        var s = this.getDerivedStateFromProps(getOptionProps(this), (0,helpers_extends/* default */.Z)({}, this.$data, newState));
        if (s === null) {
          return;
        } else {
          newState = (0,helpers_extends/* default */.Z)({}, newState, s || {});
        }
      }
      (0,helpers_extends/* default */.Z)(this.$data, newState);
      this.$forceUpdate();
      this.$nextTick(function () {
        callback && callback();
      });
    },
    __emit: function __emit() {
      // 直接调用listeners，底层组件不需要vueTool记录events
      var args = [].slice.call(arguments, 0);
      var eventName = args[0];
      var event = this.$listeners[eventName];
      if (args.length && event) {
        if (Array.isArray(event)) {
          for (var i = 0, l = event.length; i < l; i++) {
            event[i].apply(event, (0,toConsumableArray/* default */.Z)(args.slice(1)));
          }
        } else {
          event.apply(undefined, (0,toConsumableArray/* default */.Z)(args.slice(1)));
        }
      }
    }
  }
});
// EXTERNAL MODULE: ./node_modules/raf/index.js
var raf = __webpack_require__(6035);
var raf_default = /*#__PURE__*/__webpack_require__.n(raf);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-tabs/src/KeyCode.js
/* harmony default export */ var src_KeyCode = ({
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40 // also NUM_SOUTH
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/vnode.js




function cloneVNode(vnode, deep) {
  var componentOptions = vnode.componentOptions;
  var data = vnode.data;
  var listeners = {};
  if (componentOptions && componentOptions.listeners) {
    listeners = (0,helpers_extends/* default */.Z)({}, componentOptions.listeners);
  }
  var on = {};
  if (data && data.on) {
    on = (0,helpers_extends/* default */.Z)({}, data.on);
  }
  var cloned = new vnode.constructor(vnode.tag, data ? (0,helpers_extends/* default */.Z)({}, data, {
    on: on
  }) : data, vnode.children, vnode.text, vnode.elm, vnode.context, componentOptions ? (0,helpers_extends/* default */.Z)({}, componentOptions, {
    listeners: listeners
  }) : componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  if (deep) {
    if (vnode.children) {
      cloned.children = cloneVNodes(vnode.children, true);
    }
    if (componentOptions && componentOptions.children) {
      componentOptions.children = cloneVNodes(componentOptions.children, true);
    }
  }
  return cloned;
}
function cloneVNodes(vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res;
}
function cloneElement(n) {
  var nodeProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var deep = arguments[2];
  var ele = n;
  if (Array.isArray(n)) {
    ele = filterEmpty(n)[0];
  }
  if (!ele) {
    return null;
  }
  var node = cloneVNode(ele, deep);
  // // 函数式组件不支持clone  https://github.com/vueComponent/ant-design-vue/pull/1947
  // warning(
  //   !(node.fnOptions && node.fnOptions.functional),
  //   `can not use cloneElement for functional component (${node.fnOptions && node.fnOptions.name})`,
  // );
  var _nodeProps$props = nodeProps.props,
    props = _nodeProps$props === undefined ? {} : _nodeProps$props,
    key = nodeProps.key,
    _nodeProps$on = nodeProps.on,
    on = _nodeProps$on === undefined ? {} : _nodeProps$on,
    _nodeProps$nativeOn = nodeProps.nativeOn,
    nativeOn = _nodeProps$nativeOn === undefined ? {} : _nodeProps$nativeOn,
    children = nodeProps.children,
    _nodeProps$directives = nodeProps.directives,
    directives = _nodeProps$directives === undefined ? [] : _nodeProps$directives;
  var data = node.data || {};
  var cls = {};
  var style = {};
  var _nodeProps$attrs = nodeProps.attrs,
    attrs = _nodeProps$attrs === undefined ? {} : _nodeProps$attrs,
    ref = nodeProps.ref,
    _nodeProps$domProps = nodeProps.domProps,
    domProps = _nodeProps$domProps === undefined ? {} : _nodeProps$domProps,
    _nodeProps$style = nodeProps.style,
    tempStyle = _nodeProps$style === undefined ? {} : _nodeProps$style,
    _nodeProps$class = nodeProps['class'],
    tempCls = _nodeProps$class === undefined ? {} : _nodeProps$class,
    _nodeProps$scopedSlot = nodeProps.scopedSlots,
    scopedSlots = _nodeProps$scopedSlot === undefined ? {} : _nodeProps$scopedSlot;
  if (typeof data.style === 'string') {
    style = parseStyleText(data.style);
  } else {
    style = (0,helpers_extends/* default */.Z)({}, data.style, style);
  }
  if (typeof tempStyle === 'string') {
    style = (0,helpers_extends/* default */.Z)({}, style, parseStyleText(style));
  } else {
    style = (0,helpers_extends/* default */.Z)({}, style, tempStyle);
  }
  if (typeof data['class'] === 'string' && data['class'].trim() !== '') {
    data['class'].split(' ').forEach(function (c) {
      cls[c.trim()] = true;
    });
  } else if (Array.isArray(data['class'])) {
    classnames_default()(data['class']).split(' ').forEach(function (c) {
      cls[c.trim()] = true;
    });
  } else {
    cls = (0,helpers_extends/* default */.Z)({}, data['class'], cls);
  }
  if (typeof tempCls === 'string' && tempCls.trim() !== '') {
    tempCls.split(' ').forEach(function (c) {
      cls[c.trim()] = true;
    });
  } else {
    cls = (0,helpers_extends/* default */.Z)({}, cls, tempCls);
  }
  node.data = (0,helpers_extends/* default */.Z)({}, data, {
    style: style,
    attrs: (0,helpers_extends/* default */.Z)({}, data.attrs, attrs),
    'class': cls,
    domProps: (0,helpers_extends/* default */.Z)({}, data.domProps, domProps),
    scopedSlots: (0,helpers_extends/* default */.Z)({}, data.scopedSlots, scopedSlots),
    directives: [].concat((0,toConsumableArray/* default */.Z)(data.directives || []), (0,toConsumableArray/* default */.Z)(directives))
  });
  if (node.componentOptions) {
    node.componentOptions.propsData = node.componentOptions.propsData || {};
    node.componentOptions.listeners = node.componentOptions.listeners || {};
    node.componentOptions.propsData = (0,helpers_extends/* default */.Z)({}, node.componentOptions.propsData, props);
    node.componentOptions.listeners = (0,helpers_extends/* default */.Z)({}, node.componentOptions.listeners, on);
    if (children) {
      node.componentOptions.children = children;
    }
  } else {
    if (children) {
      node.children = children;
    }
    node.data.on = (0,helpers_extends/* default */.Z)({}, node.data.on || {}, on);
  }
  node.data.on = (0,helpers_extends/* default */.Z)({}, node.data.on || {}, nativeOn);
  if (key !== undefined) {
    node.key = key;
    node.data.key = key;
  }
  if (typeof ref === 'string') {
    node.data.ref = ref;
  }
  return node;
}
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/isValid.js
var isValid = function isValid(value) {
  return value !== undefined && value !== null && value !== '';
};
/* harmony default export */ var _util_isValid = (isValid);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-tabs/src/Tabs.js













function getDefaultActiveKey(props) {
  var activeKey = void 0;
  var children = props.children;
  children.forEach(function (child) {
    if (child && !_util_isValid(activeKey) && !child.disabled) {
      activeKey = child.key;
    }
  });
  return activeKey;
}
function activeKeyIsValid(props, key) {
  var children = props.children;
  var keys = children.map(function (child) {
    return child && child.key;
  });
  return keys.indexOf(key) >= 0;
}
/* harmony default export */ var Tabs = ({
  name: 'Tabs',
  mixins: [BaseMixin],
  model: {
    prop: 'activeKey',
    event: 'change'
  },
  props: {
    destroyInactiveTabPane: vue_types.bool,
    renderTabBar: vue_types.func.isRequired,
    renderTabContent: vue_types.func.isRequired,
    navWrapper: vue_types.func.def(function (arg) {
      return arg;
    }),
    children: vue_types.any.def([]),
    prefixCls: vue_types.string.def('ant-tabs'),
    tabBarPosition: vue_types.string.def('top'),
    activeKey: vue_types.oneOfType([vue_types.string, vue_types.number]),
    defaultActiveKey: vue_types.oneOfType([vue_types.string, vue_types.number]),
    __propsSymbol__: vue_types.any,
    direction: vue_types.string.def('ltr'),
    tabBarGutter: vue_types.number
  },
  data: function data() {
    var props = getOptionProps(this);
    var activeKey = void 0;
    if ('activeKey' in props) {
      activeKey = props.activeKey;
    } else if ('defaultActiveKey' in props) {
      activeKey = props.defaultActiveKey;
    } else {
      activeKey = getDefaultActiveKey(props);
    }
    return {
      _activeKey: activeKey
    };
  },
  provide: function provide() {
    return {
      sentinelContext: this
    };
  },
  watch: {
    __propsSymbol__: function __propsSymbol__() {
      var nextProps = getOptionProps(this);
      if ('activeKey' in nextProps) {
        this.setState({
          _activeKey: nextProps.activeKey
        });
      } else if (!activeKeyIsValid(nextProps, this.$data._activeKey)) {
        // https://github.com/ant-design/ant-design/issues/7093
        this.setState({
          _activeKey: getDefaultActiveKey(nextProps)
        });
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.destroy = true;
    raf_default().cancel(this.sentinelId);
  },
  methods: {
    onTabClick: function onTabClick(activeKey, e) {
      if (this.tabBar.componentOptions && this.tabBar.componentOptions.listeners && this.tabBar.componentOptions.listeners.tabClick) {
        this.tabBar.componentOptions.listeners.tabClick(activeKey, e);
      }
      this.setActiveKey(activeKey);
    },
    onNavKeyDown: function onNavKeyDown(e) {
      var eventKeyCode = e.keyCode;
      if (eventKeyCode === src_KeyCode.RIGHT || eventKeyCode === src_KeyCode.DOWN) {
        e.preventDefault();
        var nextKey = this.getNextActiveKey(true);
        this.onTabClick(nextKey);
      } else if (eventKeyCode === src_KeyCode.LEFT || eventKeyCode === src_KeyCode.UP) {
        e.preventDefault();
        var previousKey = this.getNextActiveKey(false);
        this.onTabClick(previousKey);
      }
    },
    onScroll: function onScroll(_ref) {
      var target = _ref.target,
        currentTarget = _ref.currentTarget;
      if (target === currentTarget && target.scrollLeft > 0) {
        target.scrollLeft = 0;
      }
    },
    // Sentinel for tab index
    setSentinelStart: function setSentinelStart(node) {
      this.sentinelStart = node;
    },
    setSentinelEnd: function setSentinelEnd(node) {
      this.sentinelEnd = node;
    },
    setPanelSentinelStart: function setPanelSentinelStart(node) {
      if (node !== this.panelSentinelStart) {
        this.updateSentinelContext();
      }
      this.panelSentinelStart = node;
    },
    setPanelSentinelEnd: function setPanelSentinelEnd(node) {
      if (node !== this.panelSentinelEnd) {
        this.updateSentinelContext();
      }
      this.panelSentinelEnd = node;
    },
    setActiveKey: function setActiveKey(activeKey) {
      if (this.$data._activeKey !== activeKey) {
        var props = getOptionProps(this);
        if (!('activeKey' in props)) {
          this.setState({
            _activeKey: activeKey
          });
        }
        this.__emit('change', activeKey);
      }
    },
    getNextActiveKey: function getNextActiveKey(next) {
      var activeKey = this.$data._activeKey;
      var children = [];
      this.$props.children.forEach(function (c) {
        if (c && !c.disabled && c.disabled !== '') {
          if (next) {
            children.push(c);
          } else {
            children.unshift(c);
          }
        }
      });
      var length = children.length;
      var ret = length && children[0].key;
      children.forEach(function (child, i) {
        if (child.key === activeKey) {
          if (i === length - 1) {
            ret = children[0].key;
          } else {
            ret = children[i + 1].key;
          }
        }
      });
      return ret;
    },
    updateSentinelContext: function updateSentinelContext() {
      var _this = this;
      if (this.destroy) return;
      raf_default().cancel(this.sentinelId);
      this.sentinelId = raf_default()(function () {
        if (_this.destroy) return;
        _this.$forceUpdate();
      });
    }
  },
  render: function render() {
    var _cls;
    var h = arguments[0];
    var props = this.$props;
    var prefixCls = props.prefixCls,
      navWrapper = props.navWrapper,
      tabBarPosition = props.tabBarPosition,
      renderTabContent = props.renderTabContent,
      renderTabBar = props.renderTabBar,
      destroyInactiveTabPane = props.destroyInactiveTabPane,
      direction = props.direction,
      tabBarGutter = props.tabBarGutter;
    var cls = (_cls = {}, (0,defineProperty/* default */.Z)(_cls, prefixCls, 1), (0,defineProperty/* default */.Z)(_cls, prefixCls + '-' + tabBarPosition, 1), (0,defineProperty/* default */.Z)(_cls, prefixCls + '-rtl', direction === 'rtl'), _cls);
    this.tabBar = renderTabBar();
    var tabBar = cloneElement(this.tabBar, {
      props: {
        prefixCls: prefixCls,
        navWrapper: navWrapper,
        tabBarPosition: tabBarPosition,
        panels: props.children,
        activeKey: this.$data._activeKey,
        direction: direction,
        tabBarGutter: tabBarGutter
      },
      on: {
        keydown: this.onNavKeyDown,
        tabClick: this.onTabClick
      },
      key: 'tabBar'
    });
    var tabContent = cloneElement(renderTabContent(), {
      props: {
        prefixCls: prefixCls,
        tabBarPosition: tabBarPosition,
        activeKey: this.$data._activeKey,
        destroyInactiveTabPane: destroyInactiveTabPane,
        direction: direction
      },
      on: {
        change: this.setActiveKey
      },
      children: props.children,
      key: 'tabContent'
    });
    var sentinelStart = h(Sentinel, {
      key: 'sentinelStart',
      attrs: {
        setRef: this.setSentinelStart,
        nextElement: this.panelSentinelStart
      }
    });
    var sentinelEnd = h(Sentinel, {
      key: 'sentinelEnd',
      attrs: {
        setRef: this.setSentinelEnd,
        prevElement: this.panelSentinelEnd
      }
    });
    var contents = [];
    if (tabBarPosition === 'bottom') {
      contents.push(sentinelStart, tabContent, sentinelEnd, tabBar);
    } else {
      contents.push(tabBar, sentinelStart, tabContent, sentinelEnd);
    }
    var listeners = (0,helpers_extends/* default */.Z)({}, omit_js_es(getListeners(this), ['change']), {
      scroll: this.onScroll
    });
    return h('div', {
      on: listeners,
      'class': cls
    }, [contents]);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-tabs/src/index.js
// based on rc-tabs 9.7.0





external_commonjs_vue_commonjs2_vue_root_Vue_default().use(vue_ref/* default */.Z, {
  name: 'ant-ref'
});
/* harmony default export */ var vc_tabs_src = (Tabs);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-exception.stack.js
var web_dom_exception_stack = __webpack_require__(2801);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-tabs/src/utils.js



function toArray(children) {
  var c = [];
  children.forEach(function (child) {
    if (child.data) {
      c.push(child);
    }
  });
  return c;
}
function getActiveIndex(children, activeKey) {
  var c = toArray(children);
  for (var i = 0; i < c.length; i++) {
    if (c[i].key === activeKey) {
      return i;
    }
  }
  return -1;
}
function getActiveKey(children, index) {
  var c = toArray(children);
  return c[index].key;
}
function setTransform(style, v) {
  style.transform = v;
  style.webkitTransform = v;
  style.mozTransform = v;
}
function isTransform3dSupported(style) {
  return ('transform' in style || 'webkitTransform' in style || 'MozTransform' in style) && window.atob;
}
function setTransition(style, v) {
  style.transition = v;
  style.webkitTransition = v;
  style.MozTransition = v;
}
function getTransformPropValue(v) {
  return {
    transform: v,
    WebkitTransform: v,
    MozTransform: v
  };
}
function isVertical(tabBarPosition) {
  return tabBarPosition === 'left' || tabBarPosition === 'right';
}
function getTransformByIndex(index, tabBarPosition) {
  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ltr';
  var translate = isVertical(tabBarPosition) ? 'translateY' : 'translateX';
  if (!isVertical(tabBarPosition) && direction === 'rtl') {
    return translate + '(' + index * 100 + '%) translateZ(0)';
  }
  return translate + '(' + -index * 100 + '%) translateZ(0)';
}
function getMarginStyle(index, tabBarPosition) {
  var marginDirection = isVertical(tabBarPosition) ? 'marginTop' : 'marginLeft';
  return (0,defineProperty/* default */.Z)({}, marginDirection, -index * 100 + '%');
}
function utils_getStyle(el, property) {
  return +window.getComputedStyle(el).getPropertyValue(property).replace('px', '');
}
function setPxStyle(el, value, vertical) {
  value = vertical ? '0px, ' + value + 'px, 0px' : value + 'px, 0px, 0px';
  setTransform(el.style, 'translate3d(' + value + ')');
}
function getDataAttr(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
      prev[key] = props[key];
    }
    return prev;
  }, {});
}
function toNum(style, property) {
  return +style.getPropertyValue(property).replace('px', '');
}
function getTypeValue(start, current, end, tabNode, wrapperNode) {
  var total = utils_getStyle(wrapperNode, 'padding-' + start);
  if (!tabNode || !tabNode.parentNode) {
    return total;
  }
  var childNodes = tabNode.parentNode.childNodes;
  Array.prototype.some.call(childNodes, function (node) {
    var style = window.getComputedStyle(node);
    if (node !== tabNode) {
      total += toNum(style, 'margin-' + start);
      total += node[current];
      total += toNum(style, 'margin-' + end);
      if (style.boxSizing === 'content-box') {
        total += toNum(style, 'border-' + start + '-width') + toNum(style, 'border-' + end + '-width');
      }
      return false;
    }

    // We need count current node margin
    // ref: https://github.com/react-component/tabs/pull/139#issuecomment-431005262
    total += toNum(style, 'margin-' + start);
    return true;
  });
  return total;
}
function getLeft(tabNode, wrapperNode) {
  return getTypeValue('left', 'offsetWidth', 'right', tabNode, wrapperNode);
}
function getTop(tabNode, wrapperNode) {
  return getTypeValue('top', 'offsetHeight', 'bottom', tabNode, wrapperNode);
}
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-tabs/src/TabContent.js





/* harmony default export */ var TabContent = ({
  name: 'TabContent',
  props: {
    animated: {
      type: Boolean,
      'default': true
    },
    animatedWithMargin: {
      type: Boolean,
      'default': true
    },
    prefixCls: {
      'default': 'ant-tabs',
      type: String
    },
    activeKey: vue_types.oneOfType([vue_types.string, vue_types.number]),
    tabBarPosition: String,
    direction: vue_types.string,
    destroyInactiveTabPane: vue_types.bool
  },
  computed: {
    classes: function classes() {
      var _ref;
      var animated = this.animated,
        prefixCls = this.prefixCls;
      return _ref = {}, (0,defineProperty/* default */.Z)(_ref, prefixCls + '-content', true), (0,defineProperty/* default */.Z)(_ref, animated ? prefixCls + '-content-animated' : prefixCls + '-content-no-animated', true), _ref;
    }
  },
  methods: {
    getTabPanes: function getTabPanes() {
      var props = this.$props;
      var activeKey = props.activeKey;
      var children = this.$slots['default'] || [];
      var newChildren = [];
      children.forEach(function (child) {
        if (!child) {
          return;
        }
        var key = child.key;
        var active = activeKey === key;
        newChildren.push(cloneElement(child, {
          props: {
            active: active,
            destroyInactiveTabPane: props.destroyInactiveTabPane,
            rootPrefixCls: props.prefixCls
          }
        }));
      });
      return newChildren;
    }
  },
  render: function render() {
    var h = arguments[0];
    var activeKey = this.activeKey,
      tabBarPosition = this.tabBarPosition,
      animated = this.animated,
      animatedWithMargin = this.animatedWithMargin,
      direction = this.direction,
      classes = this.classes;
    var style = {};
    if (animated && this.$slots['default']) {
      var activeIndex = getActiveIndex(this.$slots['default'], activeKey);
      if (activeIndex !== -1) {
        var animatedStyle = animatedWithMargin ? getMarginStyle(activeIndex, tabBarPosition) : getTransformPropValue(getTransformByIndex(activeIndex, tabBarPosition, direction));
        style = animatedStyle;
      } else {
        style = {
          display: 'none'
        };
      }
    }
    return h('div', {
      'class': classes,
      style: style
    }, [this.getTabPanes()]);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/styleChecker.js
var isStyleSupport = function isStyleSupport(styleName) {
  if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
    var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
    var documentElement = window.document.documentElement;
    return styleNameList.some(function (name) {
      return name in documentElement.style;
    });
  }
  return false;
};
var isFlexSupported = isStyleSupport(['flex', 'webkitFlex', 'Flex', 'msFlex']);
/* harmony default export */ var styleChecker = ((/* unused pure expression or super */ null && (isStyleSupport)));
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/empty/empty.js
/* harmony default export */ var empty = ({
  functional: true,
  PRESENTED_IMAGE_DEFAULT: true,
  render: function render() {
    var h = arguments[0];
    return h("svg", {
      attrs: {
        width: "184",
        height: "152",
        viewBox: "0 0 184 152",
        xmlns: "http://www.w3.org/2000/svg"
      }
    }, [h("g", {
      attrs: {
        fill: "none",
        fillRule: "evenodd"
      }
    }, [h("g", {
      attrs: {
        transform: "translate(24 31.67)"
      }
    }, [h("ellipse", {
      attrs: {
        fillOpacity: ".8",
        fill: "#F5F5F7",
        cx: "67.797",
        cy: "106.89",
        rx: "67.797",
        ry: "12.668"
      }
    }), h("path", {
      attrs: {
        d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
        fill: "#AEB8C2"
      }
    }), h("path", {
      attrs: {
        d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
        fill: "url(#linearGradient-1)",
        transform: "translate(13.56)"
      }
    }), h("path", {
      attrs: {
        d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
        fill: "#F5F5F7"
      }
    }), h("path", {
      attrs: {
        d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
        fill: "#DCE0E6"
      }
    })]), h("path", {
      attrs: {
        d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
        fill: "#DCE0E6"
      }
    }), h("g", {
      attrs: {
        transform: "translate(149.65 15.383)",
        fill: "#FFF"
      }
    }, [h("ellipse", {
      attrs: {
        cx: "20.654",
        cy: "3.167",
        rx: "2.849",
        ry: "2.815"
      }
    }), h("path", {
      attrs: {
        d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
      }
    })])])]);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/empty/simple.js
/* harmony default export */ var simple = ({
  functional: true,
  PRESENTED_IMAGE_SIMPLE: true,
  render: function render() {
    var h = arguments[0];
    return h("svg", {
      attrs: {
        width: "64",
        height: "41",
        viewBox: "0 0 64 41",
        xmlns: "http://www.w3.org/2000/svg"
      }
    }, [h("g", {
      attrs: {
        transform: "translate(0 1)",
        fill: "none",
        fillRule: "evenodd"
      }
    }, [h("ellipse", {
      attrs: {
        fill: "#F5F5F5",
        cx: "32",
        cy: "33",
        rx: "32",
        ry: "7"
      }
    }), h("g", {
      attrs: {
        fillRule: "nonzero",
        stroke: "#D9D9D9"
      }
    }, [h("path", {
      attrs: {
        d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
      }
    }), h("path", {
      attrs: {
        d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
        fill: "#FAFAFA"
      }
    })])])]);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/empty/index.js











var TransferLocale = function TransferLocale() {
  return {
    description: PropTypes.string
  };
};
var EmptyProps = function EmptyProps() {
  return {
    prefixCls: vue_types.string,
    image: vue_types.any,
    description: vue_types.any,
    imageStyle: vue_types.object
  };
};
var Empty = {
  name: 'AEmpty',
  props: (0,helpers_extends/* default */.Z)({}, EmptyProps()),
  methods: {
    renderEmpty: function renderEmpty(contentLocale) {
      var h = this.$createElement;
      var _$props = this.$props,
        customizePrefixCls = _$props.prefixCls,
        imageStyle = _$props.imageStyle;
      var prefixCls = ConfigConsumerProps.getPrefixCls('empty', customizePrefixCls);
      var image = getComponentFromProp(this, 'image') || h(empty);
      var description = getComponentFromProp(this, 'description');
      var des = typeof description !== 'undefined' ? description : contentLocale.description;
      var alt = typeof des === 'string' ? des : 'empty';
      var cls = (0,defineProperty/* default */.Z)({}, prefixCls, true);
      var imageNode = null;
      if (typeof image === 'string') {
        imageNode = h('img', {
          attrs: {
            alt: alt,
            src: image
          }
        });
      } else if ((typeof image === 'undefined' ? 'undefined' : (0,helpers_typeof/* default */.Z)(image)) === 'object' && image.PRESENTED_IMAGE_SIMPLE) {
        var Image = image;
        imageNode = h(Image);
        cls[prefixCls + '-normal'] = true;
      } else {
        imageNode = image;
      }
      return h('div', babel_helper_vue_jsx_merge_props_default()([{
        'class': cls
      }, {
        on: getListeners(this)
      }]), [h('div', {
        'class': prefixCls + '-image',
        style: imageStyle
      }, [imageNode]), des && h('p', {
        'class': prefixCls + '-description'
      }, [des]), this.$slots['default'] && h('div', {
        'class': prefixCls + '-footer'
      }, [this.$slots['default']])]);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h(LocaleReceiver, {
      attrs: {
        componentName: 'Empty'
      },
      scopedSlots: {
        'default': this.renderEmpty
      }
    });
  }
};
Empty.PRESENTED_IMAGE_DEFAULT = empty;
Empty.PRESENTED_IMAGE_SIMPLE = simple;

/* istanbul ignore next */
Empty.install = function (Vue) {
  Vue.use(es_base);
  Vue.component(Empty.name, Empty);
};
/* harmony default export */ var es_empty = (Empty);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/config-provider/renderEmpty.js



var RenderEmpty = {
  functional: true,
  inject: {
    configProvider: {
      'default': function _default() {
        return ConfigConsumerProps;
      }
    }
  },
  props: {
    componentName: vue_types.string
  },
  render: function render(createElement, context) {
    var h = arguments[0];
    var props = context.props,
      injections = context.injections;
    function renderHtml(componentName) {
      var getPrefixCls = injections.configProvider.getPrefixCls;
      var prefix = getPrefixCls('empty');
      switch (componentName) {
        case 'Table':
        case 'List':
          return h(es_empty, {
            attrs: {
              image: es_empty.PRESENTED_IMAGE_SIMPLE
            }
          });
        case 'Select':
        case 'TreeSelect':
        case 'Cascader':
        case 'Transfer':
        case 'Mentions':
          return h(es_empty, {
            attrs: {
              image: es_empty.PRESENTED_IMAGE_SIMPLE
            },
            'class': prefix + '-small'
          });
        default:
          return h(es_empty);
      }
    }
    return renderHtml(props.componentName);
  }
};
function renderEmpty(h, componentName) {
  return h(RenderEmpty, {
    attrs: {
      componentName: componentName
    }
  });
}
/* harmony default export */ var config_provider_renderEmpty = (renderEmpty);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(9076);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/interopDefault.js
// https://github.com/moment/moment/issues/3650
function interopDefault(m) {
  return m["default"] || m;
}
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/modal/locale.js



// export interface ModalLocale {
//   okText: string;
//   cancelText: string;
//   justOkText: string;
// }

var runtimeLocale = (0,helpers_extends/* default */.Z)({}, locale_default.Modal);
function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = (0,helpers_extends/* default */.Z)({}, runtimeLocale, newLocale);
  } else {
    runtimeLocale = (0,helpers_extends/* default */.Z)({}, locale_default.Modal);
  }
}
function getConfirmLocale() {
  return runtimeLocale;
}
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/locale-provider/index.js







// export interface Locale {
//   locale: string;
//   Pagination?: Object;
//   DatePicker?: Object;
//   TimePicker?: Object;
//   Calendar?: Object;
//   Table?: Object;
//   Modal?: ModalLocale;
//   Popconfirm?: Object;
//   Transfer?: Object;
//   Select?: Object;
//   Upload?: Object;
// }
var ANT_MARK = 'internalMark';
function setMomentLocale(locale) {
  if (locale && locale.locale) {
    interopDefault(moment).locale(locale.locale);
  } else {
    interopDefault(moment).locale('en');
  }
}
var LocaleProvider = {
  name: 'ALocaleProvider',
  props: {
    locale: vue_types.object.def(function () {
      return {};
    }),
    _ANT_MARK__: vue_types.string
  },
  data: function data() {
    _util_warning(this._ANT_MARK__ === ANT_MARK, 'LocaleProvider', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead');
    return {
      antLocale: (0,helpers_extends/* default */.Z)({}, this.locale, {
        exist: true
      })
    };
  },
  provide: function provide() {
    return {
      localeData: this.$data
    };
  },
  watch: {
    locale: function locale(val) {
      this.antLocale = (0,helpers_extends/* default */.Z)({}, this.locale, {
        exist: true
      });
      setMomentLocale(val);
      changeConfirmLocale(val && val.Modal);
    }
  },
  created: function created() {
    var locale = this.locale;
    setMomentLocale(locale);
    changeConfirmLocale(locale && locale.Modal);
  },
  beforeDestroy: function beforeDestroy() {
    changeConfirmLocale();
  },
  render: function render() {
    return this.$slots['default'] ? this.$slots['default'][0] : null;
  }
};

/* istanbul ignore next */
LocaleProvider.install = function (Vue) {
  Vue.use(es_base);
  Vue.component(LocaleProvider.name, LocaleProvider);
};
/* harmony default export */ var locale_provider = (LocaleProvider);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/config-provider/index.js








function getWatch() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var watch = {};
  keys.forEach(function (k) {
    watch[k] = function (value) {
      this._proxyVm._data[k] = value;
    };
  });
  return watch;
}
var ConfigProvider = {
  name: 'AConfigProvider',
  props: {
    getPopupContainer: vue_types.func,
    prefixCls: vue_types.string,
    renderEmpty: vue_types.func,
    csp: vue_types.object,
    autoInsertSpaceInButton: vue_types.bool,
    locale: vue_types.object,
    pageHeader: vue_types.object,
    transformCellText: vue_types.func
  },
  provide: function provide() {
    var _self = this;
    this._proxyVm = new (external_commonjs_vue_commonjs2_vue_root_Vue_default())({
      data: function data() {
        return (0,helpers_extends/* default */.Z)({}, _self.$props, {
          getPrefixCls: _self.getPrefixCls,
          renderEmpty: _self.renderEmptyComponent
        });
      }
    });
    return {
      configProvider: this._proxyVm._data
    };
  },
  watch: (0,helpers_extends/* default */.Z)({}, getWatch(['prefixCls', 'csp', 'autoInsertSpaceInButton', 'locale', 'pageHeader', 'transformCellText'])),
  methods: {
    renderEmptyComponent: function renderEmptyComponent(h, name) {
      var renderEmpty = getComponentFromProp(this, 'renderEmpty', {}, false) || config_provider_renderEmpty;
      return renderEmpty(h, name);
    },
    getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
      var _$props$prefixCls = this.$props.prefixCls,
        prefixCls = _$props$prefixCls === undefined ? 'ant' : _$props$prefixCls;
      if (customizePrefixCls) return customizePrefixCls;
      return suffixCls ? prefixCls + '-' + suffixCls : prefixCls;
    },
    renderProvider: function renderProvider(legacyLocale) {
      var h = this.$createElement;
      return h(locale_provider, {
        attrs: {
          locale: this.locale || legacyLocale,
          _ANT_MARK__: ANT_MARK
        }
      }, [this.$slots['default'] ? filterEmpty(this.$slots['default'])[0] : null]);
    }
  },
  render: function render() {
    var _this = this;
    var h = arguments[0];
    return h(LocaleReceiver, {
      scopedSlots: {
        'default': function _default(_, __, legacyLocale) {
          return _this.renderProvider(legacyLocale);
        }
      }
    });
  }
};
var ConfigConsumerProps = {
  getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls) return customizePrefixCls;
    return 'ant-' + suffixCls;
  },
  renderEmpty: config_provider_renderEmpty
};

/* istanbul ignore next */
ConfigProvider.install = function (Vue) {
  Vue.use(es_base);
  Vue.component(ConfigProvider.name, ConfigProvider);
};
/* harmony default export */ var config_provider = ((/* unused pure expression or super */ null && (ConfigProvider)));
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-tabs/src/InkTabBarNode.js





function componentDidUpdate(component, init) {
  var _component$$props = component.$props,
    _component$$props$sty = _component$$props.styles,
    styles = _component$$props$sty === undefined ? {} : _component$$props$sty,
    panels = _component$$props.panels,
    activeKey = _component$$props.activeKey,
    direction = _component$$props.direction;
  var rootNode = component.getRef('root');
  var wrapNode = component.getRef('nav') || rootNode;
  var inkBarNode = component.getRef('inkBar');
  var activeTab = component.getRef('activeTab');
  var inkBarNodeStyle = inkBarNode.style;
  var tabBarPosition = component.$props.tabBarPosition;
  var activeIndex = getActiveIndex(panels, activeKey);
  if (init) {
    // prevent mount animation
    inkBarNodeStyle.display = 'none';
  }
  if (activeTab) {
    var tabNode = activeTab;
    var transformSupported = isTransform3dSupported(inkBarNodeStyle);

    // Reset current style
    setTransform(inkBarNodeStyle, '');
    inkBarNodeStyle.width = '';
    inkBarNodeStyle.height = '';
    inkBarNodeStyle.left = '';
    inkBarNodeStyle.top = '';
    inkBarNodeStyle.bottom = '';
    inkBarNodeStyle.right = '';
    if (tabBarPosition === 'top' || tabBarPosition === 'bottom') {
      var left = getLeft(tabNode, wrapNode);
      var width = tabNode.offsetWidth;
      // If tabNode'width width equal to wrapNode'width when tabBarPosition is top or bottom
      // It means no css working, then ink bar should not have width until css is loaded
      // Fix https://github.com/ant-design/ant-design/issues/7564
      if (width === rootNode.offsetWidth) {
        width = 0;
      } else if (styles.inkBar && styles.inkBar.width !== undefined) {
        width = parseFloat(styles.inkBar.width, 10);
        if (width) {
          left += (tabNode.offsetWidth - width) / 2;
        }
      }
      if (direction === 'rtl') {
        left = utils_getStyle(tabNode, 'margin-left') - left;
      }
      // use 3d gpu to optimize render
      if (transformSupported) {
        setTransform(inkBarNodeStyle, 'translate3d(' + left + 'px,0,0)');
      } else {
        inkBarNodeStyle.left = left + 'px';
      }
      inkBarNodeStyle.width = width + 'px';
    } else {
      var top = getTop(tabNode, wrapNode, true);
      var height = tabNode.offsetHeight;
      if (styles.inkBar && styles.inkBar.height !== undefined) {
        height = parseFloat(styles.inkBar.height, 10);
        if (height) {
          top += (tabNode.offsetHeight - height) / 2;
        }
      }
      if (transformSupported) {
        setTransform(inkBarNodeStyle, 'translate3d(0,' + top + 'px,0)');
        inkBarNodeStyle.top = '0';
      } else {
        inkBarNodeStyle.top = top + 'px';
      }
      inkBarNodeStyle.height = height + 'px';
    }
  }
  inkBarNodeStyle.display = activeIndex !== -1 ? 'block' : 'none';
}
/* harmony default export */ var InkTabBarNode = ({
  name: 'InkTabBarNode',
  mixins: [BaseMixin],
  props: {
    inkBarAnimated: {
      type: Boolean,
      'default': true
    },
    direction: vue_types.string,
    prefixCls: String,
    styles: Object,
    tabBarPosition: String,
    saveRef: vue_types.func.def(function () {}),
    getRef: vue_types.func.def(function () {}),
    panels: vue_types.array,
    activeKey: vue_types.oneOfType([vue_types.string, vue_types.number])
  },
  updated: function updated() {
    this.$nextTick(function () {
      componentDidUpdate(this);
    });
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      componentDidUpdate(this, true);
    });
  },
  render: function render() {
    var _classes;
    var h = arguments[0];
    var prefixCls = this.prefixCls,
      _styles = this.styles,
      styles = _styles === undefined ? {} : _styles,
      inkBarAnimated = this.inkBarAnimated;
    var className = prefixCls + '-ink-bar';
    var classes = (_classes = {}, (0,defineProperty/* default */.Z)(_classes, className, true), (0,defineProperty/* default */.Z)(_classes, inkBarAnimated ? className + '-animated' : className + '-no-animated', true), _classes);
    return h('div', babel_helper_vue_jsx_merge_props_default()([{
      style: styles.inkBar,
      'class': classes,
      key: 'inkBar'
    }, {
      directives: [{
        name: 'ant-ref',
        value: this.saveRef('inkBar')
      }]
    }]));
  }
});
// EXTERNAL MODULE: ./node_modules/warning/warning.js
var warning_warning = __webpack_require__(6894);
var warning_default = /*#__PURE__*/__webpack_require__.n(warning_warning);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-tabs/src/TabBarTabsNode.js








function TabBarTabsNode_noop() {}
/* harmony default export */ var TabBarTabsNode = ({
  name: 'TabBarTabsNode',
  mixins: [BaseMixin],
  props: {
    activeKey: vue_types.oneOfType([vue_types.string, vue_types.number]),
    panels: vue_types.any.def([]),
    prefixCls: vue_types.string.def(''),
    tabBarGutter: vue_types.any.def(null),
    onTabClick: vue_types.func,
    saveRef: vue_types.func.def(TabBarTabsNode_noop),
    getRef: vue_types.func.def(TabBarTabsNode_noop),
    renderTabBarNode: vue_types.func,
    tabBarPosition: vue_types.string,
    direction: vue_types.string
  },
  render: function render() {
    var _this = this;
    var h = arguments[0];
    var _$props = this.$props,
      children = _$props.panels,
      activeKey = _$props.activeKey,
      prefixCls = _$props.prefixCls,
      tabBarGutter = _$props.tabBarGutter,
      saveRef = _$props.saveRef,
      tabBarPosition = _$props.tabBarPosition,
      direction = _$props.direction;
    var rst = [];
    var renderTabBarNode = this.renderTabBarNode || this.$scopedSlots.renderTabBarNode;
    children.forEach(function (child, index) {
      if (!child) {
        return;
      }
      var props = getOptionProps(child);
      var key = child.key;
      var cls = activeKey === key ? prefixCls + '-tab-active' : '';
      cls += ' ' + prefixCls + '-tab';
      var events = {
        on: {}
      };
      var disabled = props.disabled || props.disabled === '';
      if (disabled) {
        cls += ' ' + prefixCls + '-tab-disabled';
      } else {
        events.on.click = function () {
          _this.__emit('tabClick', key);
        };
      }
      var directives = [];
      if (activeKey === key) {
        directives.push({
          name: 'ant-ref',
          value: saveRef('activeTab')
        });
      }
      var tab = getComponentFromProp(child, 'tab');
      var gutter = tabBarGutter && index === children.length - 1 ? 0 : tabBarGutter;
      gutter = typeof gutter === 'number' ? gutter + 'px' : gutter;
      var marginProperty = direction === 'rtl' ? 'marginLeft' : 'marginRight';
      var style = (0,defineProperty/* default */.Z)({}, isVertical(tabBarPosition) ? 'marginBottom' : marginProperty, gutter);
      warning_default()(tab !== undefined, 'There must be `tab` property or slot on children of Tabs.');
      var node = h('div', babel_helper_vue_jsx_merge_props_default()([{
        attrs: {
          role: 'tab',
          'aria-disabled': disabled ? 'true' : 'false',
          'aria-selected': activeKey === key ? 'true' : 'false'
        }
      }, events, {
        'class': cls,
        key: key,
        style: style
      }, {
        directives: directives
      }]), [tab]);
      if (renderTabBarNode) {
        node = renderTabBarNode(node);
      }
      rst.push(node);
    });
    return h('div', {
      directives: [{
        name: 'ant-ref',
        value: this.saveRef('navTabsContainer')
      }]
    }, [rst]);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-tabs/src/TabBarRootNode.js






function TabBarRootNode_noop() {}
/* harmony default export */ var TabBarRootNode = ({
  name: 'TabBarRootNode',
  mixins: [BaseMixin],
  props: {
    saveRef: vue_types.func.def(TabBarRootNode_noop),
    getRef: vue_types.func.def(TabBarRootNode_noop),
    prefixCls: vue_types.string.def(''),
    tabBarPosition: vue_types.string.def('top'),
    extraContent: vue_types.any
  },
  methods: {
    onKeyDown: function onKeyDown(e) {
      this.__emit('keydown', e);
    }
  },
  render: function render() {
    var h = arguments[0];
    var prefixCls = this.prefixCls,
      onKeyDown = this.onKeyDown,
      tabBarPosition = this.tabBarPosition,
      extraContent = this.extraContent;
    var cls = (0,defineProperty/* default */.Z)({}, prefixCls + '-bar', true);
    var topOrBottom = tabBarPosition === 'top' || tabBarPosition === 'bottom';
    var tabBarExtraContentStyle = topOrBottom ? {
      float: 'right'
    } : {};
    var children = this.$slots['default'];
    var newChildren = children;
    if (extraContent) {
      newChildren = [cloneElement(extraContent, {
        key: 'extra',
        style: (0,helpers_extends/* default */.Z)({}, tabBarExtraContentStyle)
      }), cloneElement(children, {
        key: 'content'
      })];
      newChildren = topOrBottom ? newChildren : newChildren.reverse();
    }
    return h('div', babel_helper_vue_jsx_merge_props_default()([{
      attrs: {
        role: 'tablist',
        tabIndex: '0'
      },
      'class': cls,
      on: {
        'keydown': onKeyDown
      }
    }, {
      directives: [{
        name: 'ant-ref',
        value: this.saveRef('root')
      }]
    }]), [newChildren]);
  }
});
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(1013);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
;// CONCATENATED MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js

/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = function () {
  if (typeof Map !== 'undefined') {
    return Map;
  }
  /**
   * Returns index in provided array that matches the specified key.
   *
   * @param {Array<Array>} arr
   * @param {*} key
   * @returns {number}
   */
  function getIndex(arr, key) {
    var result = -1;
    arr.some(function (entry, index) {
      if (entry[0] === key) {
        result = index;
        return true;
      }
      return false;
    });
    return result;
  }
  return (/** @class */function () {
      function class_1() {
        this.__entries__ = [];
      }
      Object.defineProperty(class_1.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function () {
          return this.__entries__.length;
        },
        enumerable: true,
        configurable: true
      });
      /**
       * @param {*} key
       * @returns {*}
       */
      class_1.prototype.get = function (key) {
        var index = getIndex(this.__entries__, key);
        var entry = this.__entries__[index];
        return entry && entry[1];
      };
      /**
       * @param {*} key
       * @param {*} value
       * @returns {void}
       */
      class_1.prototype.set = function (key, value) {
        var index = getIndex(this.__entries__, key);
        if (~index) {
          this.__entries__[index][1] = value;
        } else {
          this.__entries__.push([key, value]);
        }
      };
      /**
       * @param {*} key
       * @returns {void}
       */
      class_1.prototype.delete = function (key) {
        var entries = this.__entries__;
        var index = getIndex(entries, key);
        if (~index) {
          entries.splice(index, 1);
        }
      };
      /**
       * @param {*} key
       * @returns {void}
       */
      class_1.prototype.has = function (key) {
        return !!~getIndex(this.__entries__, key);
      };
      /**
       * @returns {void}
       */
      class_1.prototype.clear = function () {
        this.__entries__.splice(0);
      };
      /**
       * @param {Function} callback
       * @param {*} [ctx=null]
       * @returns {void}
       */
      class_1.prototype.forEach = function (callback, ctx) {
        if (ctx === void 0) {
          ctx = null;
        }
        for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
          var entry = _a[_i];
          callback.call(ctx, entry[1], entry[0]);
        }
      };
      return class_1;
    }()
  );
}();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = function () {
  if (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.Math === Math) {
    return __webpack_require__.g;
  }
  if (typeof self !== 'undefined' && self.Math === Math) {
    return self;
  }
  if (typeof window !== 'undefined' && window.Math === Math) {
    return window;
  }
  // eslint-disable-next-line no-new-func
  return Function('return this')();
}();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = function () {
  if (typeof requestAnimationFrame === 'function') {
    // It's required to use a bounded function because IE sometimes throws
    // an "Invalid calling object" error if rAF is invoked without the global
    // object on the left hand side.
    return requestAnimationFrame.bind(global$1);
  }
  return function (callback) {
    return setTimeout(function () {
      return callback(Date.now());
    }, 1000 / 60);
  };
}();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle(callback, delay) {
  var leadingCall = false,
    trailingCall = false,
    lastCallTime = 0;
  /**
   * Invokes the original callback function and schedules new invocation if
   * the "proxy" was called during current request.
   *
   * @returns {void}
   */
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  /**
   * Callback invoked after the specified delay. It will further postpone
   * invocation of the original function delegating it to the
   * requestAnimationFrame.
   *
   * @returns {void}
   */
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  /**
   * Schedules invocation of the original function.
   *
   * @returns {void}
   */
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      // Reject immediately following calls.
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      // Schedule new call to be in invoked when the pending one is resolved.
      // This is important for "transitions" which never actually start
      // immediately so there is a chance that we might miss one if change
      // happens amids the pending invocation.
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */function () {
  /**
   * Creates a new instance of ResizeObserverController.
   *
   * @private
   */
  function ResizeObserverController() {
    /**
     * Indicates whether DOM listeners have been added.
     *
     * @private {boolean}
     */
    this.connected_ = false;
    /**
     * Tells that controller has subscribed for Mutation Events.
     *
     * @private {boolean}
     */
    this.mutationEventsAdded_ = false;
    /**
     * Keeps reference to the instance of MutationObserver.
     *
     * @private {MutationObserver}
     */
    this.mutationsObserver_ = null;
    /**
     * A list of connected observers.
     *
     * @private {Array<ResizeObserverSPI>}
     */
    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
  }
  /**
   * Adds observer to observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be added.
   * @returns {void}
   */
  ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
      this.observers_.push(observer);
    }
    // Add listeners if they haven't been added yet.
    if (!this.connected_) {
      this.connect_();
    }
  };
  /**
   * Removes observer from observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be removed.
   * @returns {void}
   */
  ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer);
    // Remove observer if it's present in registry.
    if (~index) {
      observers.splice(index, 1);
    }
    // Remove listeners if controller has no connected observers.
    if (!observers.length && this.connected_) {
      this.disconnect_();
    }
  };
  /**
   * Invokes the update of observers. It will continue running updates insofar
   * it detects changes.
   *
   * @returns {void}
   */
  ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_();
    // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.
    if (changesDetected) {
      this.refresh();
    }
  };
  /**
   * Updates every observer from observers list and notifies them of queued
   * entries.
   *
   * @private
   * @returns {boolean} Returns "true" if any observer has detected changes in
   *      dimensions of it's elements.
   */
  ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
      return observer.gatherActive(), observer.hasActive();
    });
    // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.
    activeObservers.forEach(function (observer) {
      return observer.broadcastActive();
    });
    return activeObservers.length > 0;
  };
  /**
   * Initializes DOM listeners.
   *
   * @private
   * @returns {void}
   */
  ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
      return;
    }
    // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.
    document.addEventListener('transitionend', this.onTransitionEnd_);
    window.addEventListener('resize', this.refresh);
    if (mutationObserverSupported) {
      this.mutationsObserver_ = new MutationObserver(this.refresh);
      this.mutationsObserver_.observe(document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
    } else {
      document.addEventListener('DOMSubtreeModified', this.refresh);
      this.mutationEventsAdded_ = true;
    }
    this.connected_ = true;
  };
  /**
   * Removes DOM listeners.
   *
   * @private
   * @returns {void}
   */
  ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
      return;
    }
    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);
    if (this.mutationsObserver_) {
      this.mutationsObserver_.disconnect();
    }
    if (this.mutationEventsAdded_) {
      document.removeEventListener('DOMSubtreeModified', this.refresh);
    }
    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
  };
  /**
   * "Transitionend" event handler.
   *
   * @private
   * @param {TransitionEvent} event
   * @returns {void}
   */
  ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
    var _b = _a.propertyName,
      propertyName = _b === void 0 ? '' : _b;
    // Detect whether transition may affect dimensions of an element.
    var isReflowProperty = transitionKeys.some(function (key) {
      return !!~propertyName.indexOf(key);
    });
    if (isReflowProperty) {
      this.refresh();
    }
  };
  /**
   * Returns instance of the ResizeObserverController.
   *
   * @returns {ResizeObserverController}
   */
  ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
      this.instance_ = new ResizeObserverController();
    }
    return this.instance_;
  };
  /**
   * Holds reference to the controller's instance.
   *
   * @private {ResizeObserverController}
   */
  ResizeObserverController.instance_ = null;
  return ResizeObserverController;
}();

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = function (target, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  return target;
};

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = function (target) {
  // Assume that the element is an instance of Node, which means that it
  // has the "ownerDocument" property from which we can retrieve a
  // corresponding global object.
  var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
  // Return the local global object if it's not possible extract one from
  // provided element.
  return ownerGlobal || global$1;
};

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
  return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function (size, position) {
    var value = styles['border-' + position + '-width'];
    return size + toFloat(value);
  }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
  var positions = ['top', 'right', 'bottom', 'left'];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles['padding-' + position];
    paddings[position] = toFloat(value);
  }
  return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
  // Client width & height properties can't be
  // used exclusively as they provide rounded values.
  var clientWidth = target.clientWidth,
    clientHeight = target.clientHeight;
  // By this condition we can catch all non-replaced inline, hidden and
  // detached elements. Though elements with width & height properties less
  // than 0.5 will be discarded as well.
  //
  // Without it we would need to implement separate methods for each of
  // those cases and it's not possible to perform a precise and performance
  // effective test for hidden elements. E.g. even jQuery's ':visible' filter
  // gives wrong results for elements with width & height less than 0.5.
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  // Computed styles of width & height are being used because they are the
  // only dimensions available to JS that contain non-rounded values. It could
  // be possible to utilize the getBoundingClientRect if only it's data wasn't
  // affected by CSS transformations let alone paddings, borders and scroll bars.
  var width = toFloat(styles.width),
    height = toFloat(styles.height);
  // Width & height include paddings and borders when the 'border-box' box
  // model is applied (except for IE).
  if (styles.boxSizing === 'border-box') {
    // Following conditions are required to handle Internet Explorer which
    // doesn't include paddings and borders to computed CSS dimensions.
    //
    // We can say that if CSS dimensions + paddings are equal to the "client"
    // properties then it's either IE, and thus we don't need to subtract
    // anything, or an element merely doesn't have paddings/borders styles.
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, 'left', 'right') + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
    }
  }
  // Following steps can't be applied to the document's root element as its
  // client[Width/Height] properties represent viewport area of the window.
  // Besides, it's as well not necessary as the <html> itself neither has
  // rendered scroll bars nor it can be clipped.
  if (!isDocumentElement(target)) {
    // In some browsers (only in Firefox, actually) CSS width & height
    // include scroll bars size which can be removed at this step as scroll
    // bars are the only difference between rounded dimensions + paddings
    // and "client" properties, though that is not always true in Chrome.
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    // Chrome has a rather weird rounding of "client" properties.
    // E.g. for an element with content width of 314.2px it sometimes gives
    // the client width of 315px and for the width of 314.7px it may give
    // 314px. And it doesn't happen all the time. So just ignore this delta
    // as a non-relevant.
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = function () {
  // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
  // interface.
  if (typeof SVGGraphicsElement !== 'undefined') {
    return function (target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  }
  // If it's so, then check that element is at least an instance of the
  // SVGElement and that it has the "getBBox" method.
  // eslint-disable-next-line no-extra-parens
  return function (target) {
    return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
  };
}();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }
  return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
  var x = _a.x,
    y = _a.y,
    width = _a.width,
    height = _a.height;
  // If DOMRectReadOnly is available use it as a prototype for the rectangle.
  var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  // Rectangle's properties are not writable and non-enumerable.
  defineConfigurable(rect, {
    x: x,
    y: y,
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  });
  return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
  return {
    x: x,
    y: y,
    width: width,
    height: height
  };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */function () {
  /**
   * Creates an instance of ResizeObservation.
   *
   * @param {Element} target - Element to be observed.
   */
  function ResizeObservation(target) {
    /**
     * Broadcasted width of content rectangle.
     *
     * @type {number}
     */
    this.broadcastWidth = 0;
    /**
     * Broadcasted height of content rectangle.
     *
     * @type {number}
     */
    this.broadcastHeight = 0;
    /**
     * Reference to the last observed content rectangle.
     *
     * @private {DOMRectInit}
     */
    this.contentRect_ = createRectInit(0, 0, 0, 0);
    this.target = target;
  }
  /**
   * Updates content rectangle and tells whether it's width or height properties
   * have changed since the last broadcast.
   *
   * @returns {boolean}
   */
  ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);
    this.contentRect_ = rect;
    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
  };
  /**
   * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
   * from the corresponding properties of the last observed content rectangle.
   *
   * @returns {DOMRectInit} Last observed content rectangle.
   */
  ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;
    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;
    return rect;
  };
  return ResizeObservation;
}();
var ResizeObserverEntry = /** @class */function () {
  /**
   * Creates an instance of ResizeObserverEntry.
   *
   * @param {Element} target - Element that is being observed.
   * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
   */
  function ResizeObserverEntry(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);
    // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.
    defineConfigurable(this, {
      target: target,
      contentRect: contentRect
    });
  }
  return ResizeObserverEntry;
}();
var ResizeObserverSPI = /** @class */function () {
  /**
   * Creates a new instance of ResizeObserver.
   *
   * @param {ResizeObserverCallback} callback - Callback function that is invoked
   *      when one of the observed elements changes it's content dimensions.
   * @param {ResizeObserverController} controller - Controller instance which
   *      is responsible for the updates of observer.
   * @param {ResizeObserver} callbackCtx - Reference to the public
   *      ResizeObserver instance which will be passed to callback function.
   */
  function ResizeObserverSPI(callback, controller, callbackCtx) {
    /**
     * Collection of resize observations that have detected changes in dimensions
     * of elements.
     *
     * @private {Array<ResizeObservation>}
     */
    this.activeObservations_ = [];
    /**
     * Registry of the ResizeObservation instances.
     *
     * @private {Map<Element, ResizeObservation>}
     */
    this.observations_ = new MapShim();
    if (typeof callback !== 'function') {
      throw new TypeError('The callback provided as parameter 1 is not a function.');
    }
    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
  }
  /**
   * Starts observing provided element.
   *
   * @param {Element} target - Element to be observed.
   * @returns {void}
   */
  ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    }
    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    // Do nothing if element is already being observed.
    if (observations.has(target)) {
      return;
    }
    observations.set(target, new ResizeObservation(target));
    this.controller_.addObserver(this);
    // Force the update of observations.
    this.controller_.refresh();
  };
  /**
   * Stops observing provided element.
   *
   * @param {Element} target - Element to stop observing.
   * @returns {void}
   */
  ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    }
    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    // Do nothing if element is not being observed.
    if (!observations.has(target)) {
      return;
    }
    observations.delete(target);
    if (!observations.size) {
      this.controller_.removeObserver(this);
    }
  };
  /**
   * Stops observing all elements.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  /**
   * Collects observation instances the associated element of which has changed
   * it's content rectangle.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.gatherActive = function () {
    var _this = this;
    this.clearActive();
    this.observations_.forEach(function (observation) {
      if (observation.isActive()) {
        _this.activeObservations_.push(observation);
      }
    });
  };
  /**
   * Invokes initial callback function with a list of ResizeObserverEntry
   * instances collected from active resize observations.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
      return;
    }
    var ctx = this.callbackCtx_;
    // Create ResizeObserverEntry instance for every active observation.
    var entries = this.activeObservations_.map(function (observation) {
      return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });
    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
  };
  /**
   * Clears the collection of active observations.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
  };
  /**
   * Tells whether observer has active observations.
   *
   * @returns {boolean}
   */
  ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
  };
  return ResizeObserverSPI;
}();

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */function () {
  /**
   * Creates a new instance of ResizeObserver.
   *
   * @param {ResizeObserverCallback} callback - Callback that is invoked when
   *      dimensions of the observed elements change.
   */
  function ResizeObserver(callback) {
    if (!(this instanceof ResizeObserver)) {
      throw new TypeError('Cannot call a class as a function.');
    }
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    }
    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);
    observers.set(this, observer);
  }
  return ResizeObserver;
}();
// Expose public methods of ResizeObserver.
['observe', 'unobserve', 'disconnect'].forEach(function (method) {
  ResizeObserver.prototype[method] = function () {
    var _a;
    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});
var index = function () {
  // Export existing implementation if available.
  if (typeof global$1.ResizeObserver !== 'undefined') {
    return global$1.ResizeObserver;
  }
  return ResizeObserver;
}();
/* harmony default export */ var ResizeObserver_es = (index);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-tabs/src/ScrollableTabBarNode.js









function ScrollableTabBarNode_noop() {}
/* harmony default export */ var ScrollableTabBarNode = ({
  name: 'ScrollableTabBarNode',
  mixins: [BaseMixin],
  props: {
    activeKey: vue_types.any,
    getRef: vue_types.func.def(function () {}),
    saveRef: vue_types.func.def(function () {}),
    tabBarPosition: vue_types.oneOf(['left', 'right', 'top', 'bottom']).def('left'),
    prefixCls: vue_types.string.def(''),
    scrollAnimated: vue_types.bool.def(true),
    navWrapper: vue_types.func.def(function (arg) {
      return arg;
    }),
    prevIcon: vue_types.any,
    nextIcon: vue_types.any,
    direction: vue_types.string
  },
  data: function data() {
    this.offset = 0;
    this.prevProps = (0,helpers_extends/* default */.Z)({}, this.$props);
    return {
      next: false,
      prev: false
    };
  },
  watch: {
    tabBarPosition: function tabBarPosition() {
      var _this = this;
      this.tabBarPositionChange = true;
      this.$nextTick(function () {
        _this.setOffset(0);
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    this.$nextTick(function () {
      _this2.updatedCal();
      _this2.debouncedResize = debounce_default()(function () {
        _this2.setNextPrev();
        _this2.scrollToActiveTab();
      }, 200);
      _this2.resizeObserver = new ResizeObserver_es(_this2.debouncedResize);
      _this2.resizeObserver.observe(_this2.$props.getRef('container'));
    });
  },
  updated: function updated() {
    var _this3 = this;
    this.$nextTick(function () {
      _this3.updatedCal(_this3.prevProps);
      _this3.prevProps = (0,helpers_extends/* default */.Z)({}, _this3.$props);
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.debouncedResize && this.debouncedResize.cancel) {
      this.debouncedResize.cancel();
    }
  },
  methods: {
    updatedCal: function updatedCal(prevProps) {
      var _this4 = this;
      var props = this.$props;
      if (prevProps && prevProps.tabBarPosition !== props.tabBarPosition) {
        this.setOffset(0);
        return;
      }
      // wait next, prev show hide
      if (this.isNextPrevShown(this.$data) !== this.isNextPrevShown(this.setNextPrev())) {
        this.$forceUpdate();
        this.$nextTick(function () {
          _this4.scrollToActiveTab();
        });
      } else if (!prevProps || props.activeKey !== prevProps.activeKey) {
        // can not use props.activeKey
        this.scrollToActiveTab();
      }
    },
    setNextPrev: function setNextPrev() {
      var navNode = this.$props.getRef('nav');
      var navTabsContainer = this.$props.getRef('navTabsContainer');
      var navNodeWH = this.getScrollWH(navTabsContainer || navNode);
      // Add 1px to fix `offsetWidth` with decimal in Chrome not correct handle
      // https://github.com/ant-design/ant-design/issues/13423
      var containerWH = this.getOffsetWH(this.$props.getRef('container')) + 1;
      var navWrapNodeWH = this.getOffsetWH(this.$props.getRef('navWrap'));
      var offset = this.offset;
      var minOffset = containerWH - navNodeWH;
      var next = this.next,
        prev = this.prev;
      if (minOffset >= 0) {
        next = false;
        this.setOffset(0, false);
        offset = 0;
      } else if (minOffset < offset) {
        next = true;
      } else {
        next = false;
        // Fix https://github.com/ant-design/ant-design/issues/8861
        // Test with container offset which is stable
        // and set the offset of the nav wrap node
        var realOffset = navWrapNodeWH - navNodeWH;
        this.setOffset(realOffset, false);
        offset = realOffset;
      }
      if (offset < 0) {
        prev = true;
      } else {
        prev = false;
      }
      this.setNext(next);
      this.setPrev(prev);
      return {
        next: next,
        prev: prev
      };
    },
    getOffsetWH: function getOffsetWH(node) {
      var tabBarPosition = this.$props.tabBarPosition;
      var prop = 'offsetWidth';
      if (tabBarPosition === 'left' || tabBarPosition === 'right') {
        prop = 'offsetHeight';
      }
      return node[prop];
    },
    getScrollWH: function getScrollWH(node) {
      var tabBarPosition = this.tabBarPosition;
      var prop = 'scrollWidth';
      if (tabBarPosition === 'left' || tabBarPosition === 'right') {
        prop = 'scrollHeight';
      }
      return node[prop];
    },
    getOffsetLT: function getOffsetLT(node) {
      var tabBarPosition = this.$props.tabBarPosition;
      var prop = 'left';
      if (tabBarPosition === 'left' || tabBarPosition === 'right') {
        prop = 'top';
      }
      return node.getBoundingClientRect()[prop];
    },
    setOffset: function setOffset(offset) {
      var checkNextPrev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var target = Math.min(0, offset);
      if (this.offset !== target) {
        this.offset = target;
        var navOffset = {};
        var tabBarPosition = this.$props.tabBarPosition;
        var navStyle = this.$props.getRef('nav').style;
        var transformSupported = isTransform3dSupported(navStyle);
        if (tabBarPosition === 'left' || tabBarPosition === 'right') {
          if (transformSupported) {
            navOffset = {
              value: 'translate3d(0,' + target + 'px,0)'
            };
          } else {
            navOffset = {
              name: 'top',
              value: target + 'px'
            };
          }
        } else if (transformSupported) {
          if (this.$props.direction === 'rtl') {
            target = -target;
          }
          navOffset = {
            value: 'translate3d(' + target + 'px,0,0)'
          };
        } else {
          navOffset = {
            name: 'left',
            value: target + 'px'
          };
        }
        if (transformSupported) {
          setTransform(navStyle, navOffset.value);
        } else {
          navStyle[navOffset.name] = navOffset.value;
        }
        if (checkNextPrev) {
          this.setNextPrev();
        }
      }
    },
    setPrev: function setPrev(v) {
      if (this.prev !== v) {
        this.prev = v;
      }
    },
    setNext: function setNext(v) {
      if (!v) {
        // debugger
      }
      if (this.next !== v) {
        this.next = v;
      }
    },
    isNextPrevShown: function isNextPrevShown(state) {
      if (state) {
        return state.next || state.prev;
      }
      return this.next || this.prev;
    },
    prevTransitionEnd: function prevTransitionEnd(e) {
      if (e.propertyName !== 'opacity') {
        return;
      }
      var container = this.$props.getRef('container');
      this.scrollToActiveTab({
        target: container,
        currentTarget: container
      });
    },
    scrollToActiveTab: function scrollToActiveTab(e) {
      var activeTab = this.$props.getRef('activeTab');
      var navWrap = this.$props.getRef('navWrap');
      if (e && e.target !== e.currentTarget || !activeTab) {
        return;
      }

      // when not scrollable or enter scrollable first time, don't emit scrolling
      var needToSroll = this.isNextPrevShown() && this.lastNextPrevShown;
      this.lastNextPrevShown = this.isNextPrevShown();
      if (!needToSroll) {
        return;
      }
      var activeTabWH = this.getScrollWH(activeTab);
      var navWrapNodeWH = this.getOffsetWH(navWrap);
      var offset = this.offset;
      var wrapOffset = this.getOffsetLT(navWrap);
      var activeTabOffset = this.getOffsetLT(activeTab);
      if (wrapOffset > activeTabOffset) {
        offset += wrapOffset - activeTabOffset;
        this.setOffset(offset);
      } else if (wrapOffset + navWrapNodeWH < activeTabOffset + activeTabWH) {
        offset -= activeTabOffset + activeTabWH - (wrapOffset + navWrapNodeWH);
        this.setOffset(offset);
      }
    },
    prevClick: function prevClick(e) {
      this.__emit('prevClick', e);
      var navWrapNode = this.$props.getRef('navWrap');
      var navWrapNodeWH = this.getOffsetWH(navWrapNode);
      var offset = this.offset;
      this.setOffset(offset + navWrapNodeWH);
    },
    nextClick: function nextClick(e) {
      this.__emit('nextClick', e);
      var navWrapNode = this.$props.getRef('navWrap');
      var navWrapNodeWH = this.getOffsetWH(navWrapNode);
      var offset = this.offset;
      this.setOffset(offset - navWrapNodeWH);
    }
  },
  render: function render() {
    var _ref, _ref2, _navClasses, _ref3;
    var h = arguments[0];
    var next = this.next,
      prev = this.prev;
    var _$props = this.$props,
      prefixCls = _$props.prefixCls,
      scrollAnimated = _$props.scrollAnimated,
      navWrapper = _$props.navWrapper;
    var prevIcon = getComponentFromProp(this, 'prevIcon');
    var nextIcon = getComponentFromProp(this, 'nextIcon');
    var showNextPrev = prev || next;
    var prevButton = h('span', {
      on: {
        'click': prev ? this.prevClick : ScrollableTabBarNode_noop,
        'transitionend': this.prevTransitionEnd
      },
      attrs: {
        unselectable: 'unselectable'
      },
      'class': (_ref = {}, (0,defineProperty/* default */.Z)(_ref, prefixCls + '-tab-prev', 1), (0,defineProperty/* default */.Z)(_ref, prefixCls + '-tab-btn-disabled', !prev), (0,defineProperty/* default */.Z)(_ref, prefixCls + '-tab-arrow-show', showNextPrev), _ref)
    }, [prevIcon || h('span', {
      'class': prefixCls + '-tab-prev-icon'
    })]);
    var nextButton = h('span', {
      on: {
        'click': next ? this.nextClick : ScrollableTabBarNode_noop
      },
      attrs: {
        unselectable: 'unselectable'
      },
      'class': (_ref2 = {}, (0,defineProperty/* default */.Z)(_ref2, prefixCls + '-tab-next', 1), (0,defineProperty/* default */.Z)(_ref2, prefixCls + '-tab-btn-disabled', !next), (0,defineProperty/* default */.Z)(_ref2, prefixCls + '-tab-arrow-show', showNextPrev), _ref2)
    }, [nextIcon || h('span', {
      'class': prefixCls + '-tab-next-icon'
    })]);
    var navClassName = prefixCls + '-nav';
    var navClasses = (_navClasses = {}, (0,defineProperty/* default */.Z)(_navClasses, navClassName, true), (0,defineProperty/* default */.Z)(_navClasses, scrollAnimated ? navClassName + '-animated' : navClassName + '-no-animated', true), _navClasses);
    return h('div', babel_helper_vue_jsx_merge_props_default()([{
      'class': (_ref3 = {}, (0,defineProperty/* default */.Z)(_ref3, prefixCls + '-nav-container', 1), (0,defineProperty/* default */.Z)(_ref3, prefixCls + '-nav-container-scrolling', showNextPrev), _ref3),
      key: 'container'
    }, {
      directives: [{
        name: 'ant-ref',
        value: this.saveRef('container')
      }]
    }]), [prevButton, nextButton, h('div', babel_helper_vue_jsx_merge_props_default()([{
      'class': prefixCls + '-nav-wrap'
    }, {
      directives: [{
        name: 'ant-ref',
        value: this.saveRef('navWrap')
      }]
    }]), [h('div', {
      'class': prefixCls + '-nav-scroll'
    }, [h('div', babel_helper_vue_jsx_merge_props_default()([{
      'class': navClasses
    }, {
      directives: [{
        name: 'ant-ref',
        value: this.saveRef('nav')
      }]
    }]), [navWrapper(this.$slots['default'])])])])]);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-tabs/src/SaveRef.js

/* harmony default export */ var SaveRef = ({
  props: {
    children: vue_types.func.def(function () {
      return null;
    })
  },
  methods: {
    getRef: function getRef(name) {
      return this[name];
    },
    saveRef: function saveRef(name) {
      var _this = this;
      return function (node) {
        if (node) {
          _this[name] = node;
        }
      };
    }
  },
  render: function render() {
    var _this2 = this;

    // 每次都new一个新的function，避免子节点不能重新渲染
    var saveRef = function saveRef(name) {
      return _this2.saveRef(name);
    };
    var getRef = function getRef(name) {
      return _this2.getRef(name);
    };
    return this.children(saveRef, getRef);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-tabs/src/ScrollableInkTabBar.js








/* harmony default export */ var ScrollableInkTabBar = ({
  name: 'ScrollableInkTabBar',
  inheritAttrs: false,
  props: ['extraContent', 'inkBarAnimated', 'tabBarGutter', 'prefixCls', 'navWrapper', 'tabBarPosition', 'panels', 'activeKey', 'prevIcon', 'nextIcon'],
  render: function render() {
    var h = arguments[0];
    var props = (0,helpers_extends/* default */.Z)({}, this.$props);
    var listeners = getListeners(this);
    var renderTabBarNode = this.$scopedSlots['default'];
    return h(SaveRef, {
      attrs: {
        children: function children(saveRef, getRef) {
          return h(TabBarRootNode, babel_helper_vue_jsx_merge_props_default()([{
            attrs: {
              saveRef: saveRef
            }
          }, {
            props: props,
            on: listeners
          }]), [h(ScrollableTabBarNode, babel_helper_vue_jsx_merge_props_default()([{
            attrs: {
              saveRef: saveRef,
              getRef: getRef
            }
          }, {
            props: props,
            on: listeners
          }]), [h(TabBarTabsNode, babel_helper_vue_jsx_merge_props_default()([{
            attrs: {
              saveRef: saveRef
            }
          }, {
            props: (0,helpers_extends/* default */.Z)({}, props, {
              renderTabBarNode: renderTabBarNode
            }),
            on: listeners
          }])), h(InkTabBarNode, babel_helper_vue_jsx_merge_props_default()([{
            attrs: {
              saveRef: saveRef,
              getRef: getRef
            }
          }, {
            props: props,
            on: listeners
          }]))])]);
        }
      }
    });
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/tabs/TabBar.js








var TabBar = {
  name: 'TabBar',
  inheritAttrs: false,
  props: {
    prefixCls: vue_types.string,
    tabBarStyle: vue_types.object,
    tabBarExtraContent: vue_types.any,
    type: vue_types.oneOf(['line', 'card', 'editable-card']),
    tabPosition: vue_types.oneOf(['top', 'right', 'bottom', 'left']).def('top'),
    tabBarPosition: vue_types.oneOf(['top', 'right', 'bottom', 'left']),
    size: vue_types.oneOf(['default', 'small', 'large']),
    animated: vue_types.oneOfType([vue_types.bool, vue_types.object]),
    renderTabBar: vue_types.func,
    panels: vue_types.array.def([]),
    activeKey: vue_types.oneOfType([vue_types.string, vue_types.number]),
    tabBarGutter: vue_types.number
  },
  render: function render() {
    var _cls;
    var h = arguments[0];
    var _$props = this.$props,
      tabBarStyle = _$props.tabBarStyle,
      _$props$animated = _$props.animated,
      animated = _$props$animated === undefined ? true : _$props$animated,
      renderTabBar = _$props.renderTabBar,
      tabBarExtraContent = _$props.tabBarExtraContent,
      tabPosition = _$props.tabPosition,
      prefixCls = _$props.prefixCls,
      _$props$type = _$props.type,
      type = _$props$type === undefined ? 'line' : _$props$type,
      size = _$props.size;
    var inkBarAnimated = (typeof animated === 'undefined' ? 'undefined' : (0,helpers_typeof/* default */.Z)(animated)) === 'object' ? animated.inkBar : animated;
    var isVertical = tabPosition === 'left' || tabPosition === 'right';
    var prevIconType = isVertical ? 'up' : 'left';
    var nextIconType = isVertical ? 'down' : 'right';
    var prevIcon = h('span', {
      'class': prefixCls + '-tab-prev-icon'
    }, [h(icon, {
      attrs: {
        type: prevIconType
      },
      'class': prefixCls + '-tab-prev-icon-target'
    })]);
    var nextIcon = h('span', {
      'class': prefixCls + '-tab-next-icon'
    }, [h(icon, {
      attrs: {
        type: nextIconType
      },
      'class': prefixCls + '-tab-next-icon-target'
    })]);

    // Additional className for style usage
    var cls = (_cls = {}, (0,defineProperty/* default */.Z)(_cls, prefixCls + '-' + tabPosition + '-bar', true), (0,defineProperty/* default */.Z)(_cls, prefixCls + '-' + size + '-bar', !!size), (0,defineProperty/* default */.Z)(_cls, prefixCls + '-card-bar', type && type.indexOf('card') >= 0), _cls);
    var renderProps = {
      props: (0,helpers_extends/* default */.Z)({}, this.$props, this.$attrs, {
        inkBarAnimated: inkBarAnimated,
        extraContent: tabBarExtraContent,
        prevIcon: prevIcon,
        nextIcon: nextIcon
      }),
      style: tabBarStyle,
      on: getListeners(this),
      'class': cls
    };
    var RenderTabBar = void 0;
    if (renderTabBar) {
      RenderTabBar = renderTabBar(renderProps, ScrollableInkTabBar);
      // https://github.com/vueComponent/ant-design-vue/issues/2157
      return cloneElement(RenderTabBar, renderProps);
    } else {
      return h(ScrollableInkTabBar, renderProps);
    }
  }
};
/* harmony default export */ var tabs_TabBar = (TabBar);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/tabs/tabs.js















/* harmony default export */ var tabs = ({
  TabPane: TabPane,
  name: 'ATabs',
  model: {
    prop: 'activeKey',
    event: 'change'
  },
  props: {
    prefixCls: vue_types.string,
    activeKey: vue_types.oneOfType([vue_types.string, vue_types.number]),
    defaultActiveKey: vue_types.oneOfType([vue_types.string, vue_types.number]),
    hideAdd: vue_types.bool.def(false),
    tabBarStyle: vue_types.object,
    tabBarExtraContent: vue_types.any,
    destroyInactiveTabPane: vue_types.bool.def(false),
    type: vue_types.oneOf(['line', 'card', 'editable-card']),
    tabPosition: vue_types.oneOf(['top', 'right', 'bottom', 'left']).def('top'),
    size: vue_types.oneOf(['default', 'small', 'large']),
    animated: vue_types.oneOfType([vue_types.bool, vue_types.object]),
    tabBarGutter: vue_types.number,
    renderTabBar: vue_types.func
  },
  inject: {
    configProvider: {
      'default': function _default() {
        return ConfigConsumerProps;
      }
    }
  },
  mounted: function mounted() {
    var NO_FLEX = ' no-flex';
    var tabNode = this.$el;
    if (tabNode && !isFlexSupported && tabNode.className.indexOf(NO_FLEX) === -1) {
      tabNode.className += NO_FLEX;
    }
  },
  methods: {
    removeTab: function removeTab(targetKey, e) {
      e.stopPropagation();
      if (_util_isValid(targetKey)) {
        this.$emit('edit', targetKey, 'remove');
      }
    },
    handleChange: function handleChange(activeKey) {
      this.$emit('change', activeKey);
    },
    createNewTab: function createNewTab(targetKey) {
      this.$emit('edit', targetKey, 'add');
    },
    onTabClick: function onTabClick(val) {
      this.$emit('tabClick', val);
    },
    onPrevClick: function onPrevClick(val) {
      this.$emit('prevClick', val);
    },
    onNextClick: function onNextClick(val) {
      this.$emit('nextClick', val);
    }
  },
  render: function render() {
    var _cls,
      _this = this,
      _contentCls;
    var h = arguments[0];
    var props = getOptionProps(this);
    var customizePrefixCls = props.prefixCls,
      size = props.size,
      _props$type = props.type,
      type = _props$type === undefined ? 'line' : _props$type,
      tabPosition = props.tabPosition,
      _props$animated = props.animated,
      animated = _props$animated === undefined ? true : _props$animated,
      hideAdd = props.hideAdd,
      renderTabBar = props.renderTabBar;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('tabs', customizePrefixCls);
    var children = filterEmpty(this.$slots['default']);
    var tabBarExtraContent = getComponentFromProp(this, 'tabBarExtraContent');
    var tabPaneAnimated = (typeof animated === 'undefined' ? 'undefined' : (0,helpers_typeof/* default */.Z)(animated)) === 'object' ? animated.tabPane : animated;

    // card tabs should not have animation
    if (type !== 'line') {
      tabPaneAnimated = 'animated' in props ? tabPaneAnimated : false;
    }
    var cls = (_cls = {}, (0,defineProperty/* default */.Z)(_cls, prefixCls + '-vertical', tabPosition === 'left' || tabPosition === 'right'), (0,defineProperty/* default */.Z)(_cls, prefixCls + '-' + size, !!size), (0,defineProperty/* default */.Z)(_cls, prefixCls + '-card', type.indexOf('card') >= 0), (0,defineProperty/* default */.Z)(_cls, prefixCls + '-' + type, true), (0,defineProperty/* default */.Z)(_cls, prefixCls + '-no-animation', !tabPaneAnimated), _cls);
    // only card type tabs can be added and closed
    var childrenWithClose = [];
    if (type === 'editable-card') {
      childrenWithClose = [];
      children.forEach(function (child, index) {
        var props = getOptionProps(child);
        var closable = props.closable;
        closable = typeof closable === 'undefined' ? true : closable;
        var closeIcon = closable ? h(icon, {
          attrs: {
            type: 'close'
          },
          'class': prefixCls + '-close-x',
          on: {
            'click': function click(e) {
              return _this.removeTab(child.key, e);
            }
          }
        }) : null;
        childrenWithClose.push(cloneElement(child, {
          props: {
            tab: h('div', {
              'class': closable ? undefined : prefixCls + '-tab-unclosable'
            }, [getComponentFromProp(child, 'tab'), closeIcon])
          },
          key: child.key || index
        }));
      });
      // Add new tab handler
      if (!hideAdd) {
        tabBarExtraContent = h('span', [h(icon, {
          attrs: {
            type: 'plus'
          },
          'class': prefixCls + '-new-tab',
          on: {
            'click': this.createNewTab
          }
        }), tabBarExtraContent]);
      }
    }
    tabBarExtraContent = tabBarExtraContent ? h('div', {
      'class': prefixCls + '-extra-content'
    }, [tabBarExtraContent]) : null;
    var renderTabBarSlot = renderTabBar || this.$scopedSlots.renderTabBar;
    var listeners = getListeners(this);
    var tabBarProps = {
      props: (0,helpers_extends/* default */.Z)({}, this.$props, {
        prefixCls: prefixCls,
        tabBarExtraContent: tabBarExtraContent,
        renderTabBar: renderTabBarSlot
      }),
      on: listeners
    };
    var contentCls = (_contentCls = {}, (0,defineProperty/* default */.Z)(_contentCls, prefixCls + '-' + tabPosition + '-content', true), (0,defineProperty/* default */.Z)(_contentCls, prefixCls + '-card-content', type.indexOf('card') >= 0), _contentCls);
    var tabsProps = {
      props: (0,helpers_extends/* default */.Z)({}, getOptionProps(this), {
        prefixCls: prefixCls,
        tabBarPosition: tabPosition,
        // https://github.com/vueComponent/ant-design-vue/issues/2030
        // 如仅传递 tabBarProps 会导致，第二次执行 renderTabBar 时，丢失 on 属性，
        // 添加key之后，会在babel jsx 插件中做一次merge，最终TabBar接收的是一个新的对象，而不是 tabBarProps
        renderTabBar: function renderTabBar() {
          return h(tabs_TabBar, babel_helper_vue_jsx_merge_props_default()([{
            key: 'tabBar'
          }, tabBarProps]));
        },
        renderTabContent: function renderTabContent() {
          return h(TabContent, {
            'class': contentCls,
            attrs: {
              animated: tabPaneAnimated,
              animatedWithMargin: true
            }
          });
        },
        children: childrenWithClose.length > 0 ? childrenWithClose : children,
        __propsSymbol__: Symbol()
      }),
      on: (0,helpers_extends/* default */.Z)({}, listeners, {
        change: this.handleChange
      }),
      'class': cls
    };
    return h(vc_tabs_src, tabsProps);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/tabs/index.js







tabs.TabPane = (0,helpers_extends/* default */.Z)({}, TabPane, {
  name: 'ATabPane',
  __ANT_TAB_PANE: true
});
tabs.TabContent = (0,helpers_extends/* default */.Z)({}, TabContent, {
  name: 'ATabContent'
});
external_commonjs_vue_commonjs2_vue_root_Vue_default().use(vue_ref/* default */.Z, {
  name: 'ant-ref'
});

/* istanbul ignore next */
tabs.install = function (Vue) {
  Vue.use(es_base);
  Vue.component(tabs.name, tabs);
  Vue.component(tabs.TabPane.name, tabs.TabPane);
  Vue.component(tabs.TabContent.name, tabs.TabContent);
};
/* harmony default export */ var es_tabs = (tabs);

;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/select/style/index.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/empty/style/index.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/empty/style/css.js


;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/select/style/css.js



// style dependencies

;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-select/Option.js

/* harmony default export */ var Option = ({
  props: {
    value: vue_types.oneOfType([vue_types.string, vue_types.number]),
    label: vue_types.oneOfType([vue_types.string, vue_types.number]),
    disabled: vue_types.bool,
    title: vue_types.oneOfType([vue_types.string, vue_types.number])
  },
  isSelectOption: true
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-select/OptGroup.js

/* harmony default export */ var OptGroup = ({
  props: {
    value: vue_types.oneOfType([vue_types.string, vue_types.number]),
    label: vue_types.oneOfType([vue_types.string, vue_types.number])
  },
  isSelectOptGroup: true
});
// EXTERNAL MODULE: ./node_modules/component-classes/index.js
var component_classes = __webpack_require__(2268);
var component_classes_default = /*#__PURE__*/__webpack_require__.n(component_classes);
;// CONCATENATED MODULE: ./node_modules/dom-scroll-into-view/dist-web/index.js

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
function getClientPosition(elem) {
  var box;
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement; // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式

  box = elem.getBoundingClientRect(); // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top; // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.
  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.
  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}
function getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document; // ie6,7,8 standard mode

    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}
function getScrollLeft(w) {
  return getScroll(w);
}
function getScrollTop(w) {
  return getScroll(w, true);
}
function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
function _getComputedStyle(elem, name, computedStyle_) {
  var val = '';
  var d = elem.ownerDocument;
  var computedStyle = computedStyle_ || d.defaultView.getComputedStyle(elem, null); // https://github.com/kissyteam/kissy/issues/61

  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }
  return val;
}
var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), 'i');
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';
function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name]; // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity

  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT]; // prevent flashing of content

    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT]; // Put in the new values to get a computed value out

    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX; // Revert the changed values

    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === '' ? 'auto' : ret;
}
var getComputedStyleX;
if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}
function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}
function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}
var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;
function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name; // Remember the old values, and insert the new ones

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }
  callback.call(elem); // Revert the old values

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}
function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop;
  var j;
  var i;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;
        if (prop === 'border') {
          cssProp = "".concat(prop + which[i], "Width");
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}
/**
 * A crude way of determining if an object is a window
 * @member util
 */

function isWindow(obj) {
  // must use == for ie8

  /* eslint eqeqeq:0 */
  return obj != null && obj == obj.window;
}
var domUtils = {};
each(['Width', 'Height'], function (name) {
  domUtils["doc".concat(name)] = function (refWin) {
    var d = refWin.document;
    return Math.max(
    // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement["scroll".concat(name)],
    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body["scroll".concat(name)], domUtils["viewport".concat(name)](d));
  };
  domUtils["viewport".concat(name)] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = "client".concat(name);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop]; // 标准模式取 documentElement
    // backcompat 取 body

    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});
/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */

function getWH(elem, name, extra) {
  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;
  if (borderBoxValue == null || borderBoxValue <= 0) {
    borderBoxValue = undefined; // Fall back to computed then un computed css if necessary

    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    } // Normalize '', auto, and prepare for extra

    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }
  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which);
    }
    return cssBoxValue;
  }
  if (borderBoxValueOrIsBorderBox) {
    var padding = extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which) : getPBMWidth(elem, ['margin'], which);
    return val + (extra === BORDER_INDEX ? 0 : padding);
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}
var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
}; // fix #119 : https://github.com/kissyteam/kissy/issues/119

function getWHIgnoreDisplay(elem) {
  var val;
  var args = arguments; // in case elem is window
  // elem.offsetWidth === undefined

  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }
  return val;
}
function css(el, name, v) {
  var value = v;
  if (_typeof(name) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }
    return undefined;
  }
  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value += 'px';
    }
    el.style[name] = value;
    return undefined;
  }
  return getComputedStyleX(el, name);
}
each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils["outer".concat(first)] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  domUtils[name] = function (elem, val) {
    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which);
        }
        return css(elem, name, val);
      }
      return undefined;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
}); // 设置 elem 相对 elem.ownerDocument 的坐标

function setOffset(elem, offset) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }
  var old = getOffset(elem);
  var ret = {};
  var current;
  var key;
  for (key in offset) {
    if (offset.hasOwnProperty(key)) {
      current = parseFloat(css(elem, key)) || 0;
      ret[key] = current + offset[key] - old[key];
    }
  }
  css(elem, ret);
}
var util = _objectSpread2({
  getWindow: function getWindow(node) {
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  offset: function offset(el, value) {
    if (typeof value !== 'undefined') {
      setOffset(el, value);
    } else {
      return getOffset(el);
    }
  },
  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var ret = {};
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (var _i in obj) {
        if (obj.hasOwnProperty(_i)) {
          ret.overflow[_i] = obj.overflow[_i];
        }
      }
    }
    return ret;
  },
  scrollLeft: function scrollLeft(w, v) {
    if (isWindow(w)) {
      if (v === undefined) {
        return getScrollLeft(w);
      }
      window.scrollTo(v, getScrollTop(w));
    } else {
      if (v === undefined) {
        return w.scrollLeft;
      }
      w.scrollLeft = v;
    }
  },
  scrollTop: function scrollTop(w, v) {
    if (isWindow(w)) {
      if (v === undefined) {
        return getScrollTop(w);
      }
      window.scrollTo(getScrollLeft(w), v);
    } else {
      if (v === undefined) {
        return w.scrollTop;
      }
      w.scrollTop = v;
    }
  },
  viewportWidth: 0,
  viewportHeight: 0
}, domUtils);
function scrollIntoView(elem, container, config) {
  config = config || {}; // document 归一化到 window

  if (container.nodeType === 9) {
    container = util.getWindow(container);
  }
  var allowHorizontalScroll = config.allowHorizontalScroll;
  var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
  var alignWithTop = config.alignWithTop;
  var alignWithLeft = config.alignWithLeft;
  var offsetTop = config.offsetTop || 0;
  var offsetLeft = config.offsetLeft || 0;
  var offsetBottom = config.offsetBottom || 0;
  var offsetRight = config.offsetRight || 0;
  allowHorizontalScroll = allowHorizontalScroll === undefined ? true : allowHorizontalScroll;
  var isWin = util.isWindow(container);
  var elemOffset = util.offset(elem);
  var eh = util.outerHeight(elem);
  var ew = util.outerWidth(elem);
  var containerOffset;
  var ch;
  var cw;
  var containerScroll;
  var diffTop;
  var diffBottom;
  var win;
  var winScroll;
  var ww;
  var wh;
  if (isWin) {
    win = container;
    wh = util.height(win);
    ww = util.width(win);
    winScroll = {
      left: util.scrollLeft(win),
      top: util.scrollTop(win)
    }; // elem 相对 container 可视视窗的距离

    diffTop = {
      left: elemOffset.left - winScroll.left - offsetLeft,
      top: elemOffset.top - winScroll.top - offsetTop
    };
    diffBottom = {
      left: elemOffset.left + ew - (winScroll.left + ww) + offsetRight,
      top: elemOffset.top + eh - (winScroll.top + wh) + offsetBottom
    };
    containerScroll = winScroll;
  } else {
    containerOffset = util.offset(container);
    ch = container.clientHeight;
    cw = container.clientWidth;
    containerScroll = {
      left: container.scrollLeft,
      top: container.scrollTop
    }; // elem 相对 container 可视视窗的距离
    // 注意边框, offset 是边框到根节点

    diffTop = {
      left: elemOffset.left - (containerOffset.left + (parseFloat(util.css(container, 'borderLeftWidth')) || 0)) - offsetLeft,
      top: elemOffset.top - (containerOffset.top + (parseFloat(util.css(container, 'borderTopWidth')) || 0)) - offsetTop
    };
    diffBottom = {
      left: elemOffset.left + ew - (containerOffset.left + cw + (parseFloat(util.css(container, 'borderRightWidth')) || 0)) + offsetRight,
      top: elemOffset.top + eh - (containerOffset.top + ch + (parseFloat(util.css(container, 'borderBottomWidth')) || 0)) + offsetBottom
    };
  }
  if (diffTop.top < 0 || diffBottom.top > 0) {
    // 强制向上
    if (alignWithTop === true) {
      util.scrollTop(container, containerScroll.top + diffTop.top);
    } else if (alignWithTop === false) {
      util.scrollTop(container, containerScroll.top + diffBottom.top);
    } else {
      // 自动调整
      if (diffTop.top < 0) {
        util.scrollTop(container, containerScroll.top + diffTop.top);
      } else {
        util.scrollTop(container, containerScroll.top + diffBottom.top);
      }
    }
  } else {
    if (!onlyScrollIfNeeded) {
      alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;
      if (alignWithTop) {
        util.scrollTop(container, containerScroll.top + diffTop.top);
      } else {
        util.scrollTop(container, containerScroll.top + diffBottom.top);
      }
    }
  }
  if (allowHorizontalScroll) {
    if (diffTop.left < 0 || diffBottom.left > 0) {
      // 强制向上
      if (alignWithLeft === true) {
        util.scrollLeft(container, containerScroll.left + diffTop.left);
      } else if (alignWithLeft === false) {
        util.scrollLeft(container, containerScroll.left + diffBottom.left);
      } else {
        // 自动调整
        if (diffTop.left < 0) {
          util.scrollLeft(container, containerScroll.left + diffTop.left);
        } else {
          util.scrollLeft(container, containerScroll.left + diffBottom.left);
        }
      }
    } else {
      if (!onlyScrollIfNeeded) {
        alignWithLeft = alignWithLeft === undefined ? true : !!alignWithLeft;
        if (alignWithLeft) {
          util.scrollLeft(container, containerScroll.left + diffTop.left);
        } else {
          util.scrollLeft(container, containerScroll.left + diffBottom.left);
        }
      }
    }
  }
}
/* harmony default export */ var dist_web = (scrollIntoView);
// EXTERNAL MODULE: ./node_modules/shallowequal/index.js
var shallowequal = __webpack_require__(7393);
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/proxyComponent.js




function getDisplayName(WrappedComponent) {
  return WrappedComponent.name || 'Component';
}
function proxyComponent_wrapWithConnect(WrappedComponent) {
  var tempProps = WrappedComponent.props || {};
  var methods = WrappedComponent.methods || {};
  var props = {};
  Object.keys(tempProps).forEach(function (k) {
    props[k] = (0,helpers_extends/* default */.Z)({}, tempProps[k], {
      required: false
    });
  });
  WrappedComponent.props.__propsSymbol__ = vue_types.any;
  WrappedComponent.props.children = vue_types.array.def([]);
  var ProxyWrappedComponent = {
    props: props,
    model: WrappedComponent.model,
    name: 'Proxy_' + getDisplayName(WrappedComponent),
    methods: {
      getProxyWrappedInstance: function getProxyWrappedInstance() {
        return this.$refs.wrappedInstance;
      }
    },
    render: function render() {
      var h = arguments[0];
      var _$slots = this.$slots,
        $slots = _$slots === undefined ? {} : _$slots,
        $scopedSlots = this.$scopedSlots;
      var props = getOptionProps(this);
      var wrapProps = {
        props: (0,helpers_extends/* default */.Z)({}, props, {
          __propsSymbol__: Symbol(),
          componentWillReceiveProps: (0,helpers_extends/* default */.Z)({}, props),
          children: $slots['default'] || props.children || []
        }),
        on: getListeners(this)
      };
      if (Object.keys($scopedSlots).length) {
        wrapProps.scopedSlots = $scopedSlots;
      }
      var slotsKey = Object.keys($slots);
      return h(WrappedComponent, babel_helper_vue_jsx_merge_props_default()([wrapProps, {
        ref: 'wrappedInstance'
      }]), [slotsKey.length ? slotsKey.map(function (name) {
        return h('template', {
          slot: name
        }, [$slots[name]]);
      }) : null]);
    }
  };
  Object.keys(methods).map(function (m) {
    ProxyWrappedComponent.methods[m] = function () {
      var _getProxyWrappedInsta;
      return (_getProxyWrappedInsta = this.getProxyWrappedInstance())[m].apply(_getProxyWrappedInsta, arguments);
    };
  });
  return ProxyWrappedComponent;
}
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/store/connect.js







function connect_getDisplayName(WrappedComponent) {
  return WrappedComponent.name || 'Component';
}
var defaultMapStateToProps = function defaultMapStateToProps() {
  return {};
};
function connect(mapStateToProps) {
  var shouldSubscribe = !!mapStateToProps;
  var finalMapStateToProps = mapStateToProps || defaultMapStateToProps;
  return function wrapWithConnect(WrappedComponent) {
    var tempProps = omit_js_es(WrappedComponent.props || {}, ['store']);
    var props = {
      __propsSymbol__: vue_types.any
    };
    Object.keys(tempProps).forEach(function (k) {
      props[k] = (0,helpers_extends/* default */.Z)({}, tempProps[k], {
        required: false
      });
    });
    var Connect = {
      name: 'Connect_' + connect_getDisplayName(WrappedComponent),
      props: props,
      inject: {
        storeContext: {
          'default': function _default() {
            return {};
          }
        }
      },
      data: function data() {
        this.store = this.storeContext.store;
        this.preProps = omit_js_es(getOptionProps(this), ['__propsSymbol__']);
        return {
          subscribed: finalMapStateToProps(this.store.getState(), this.$props)
        };
      },
      watch: {
        __propsSymbol__: function __propsSymbol__() {
          if (mapStateToProps && mapStateToProps.length === 2) {
            this.subscribed = finalMapStateToProps(this.store.getState(), this.$props);
          }
        }
      },
      mounted: function mounted() {
        this.trySubscribe();
      },
      beforeDestroy: function beforeDestroy() {
        this.tryUnsubscribe();
      },
      methods: {
        handleChange: function handleChange() {
          if (!this.unsubscribe) {
            return;
          }
          var props = omit_js_es(getOptionProps(this), ['__propsSymbol__']);
          var nextSubscribed = finalMapStateToProps(this.store.getState(), props);
          if (!shallowequal_default()(this.preProps, props) || !shallowequal_default()(this.subscribed, nextSubscribed)) {
            this.subscribed = nextSubscribed;
          }
        },
        trySubscribe: function trySubscribe() {
          if (shouldSubscribe) {
            this.unsubscribe = this.store.subscribe(this.handleChange);
            this.handleChange();
          }
        },
        tryUnsubscribe: function tryUnsubscribe() {
          if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = null;
          }
        },
        getWrappedInstance: function getWrappedInstance() {
          return this.$refs.wrappedInstance;
        }
      },
      render: function render() {
        var h = arguments[0];
        var _$slots = this.$slots,
          $slots = _$slots === undefined ? {} : _$slots,
          $scopedSlots = this.$scopedSlots,
          subscribed = this.subscribed,
          store = this.store;
        var props = getOptionProps(this);
        this.preProps = (0,helpers_extends/* default */.Z)({}, omit_js_es(props, ['__propsSymbol__']));
        var wrapProps = {
          props: (0,helpers_extends/* default */.Z)({}, props, subscribed, {
            store: store
          }),
          on: getListeners(this),
          scopedSlots: $scopedSlots
        };
        return h(WrappedComponent, babel_helper_vue_jsx_merge_props_default()([wrapProps, {
          ref: 'wrappedInstance'
        }]), [Object.keys($slots).map(function (name) {
          return h('template', {
            slot: name
          }, [$slots[name]]);
        })]);
      }
    };
    return proxyComponent_wrapWithConnect(Connect);
  };
}
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-menu/utils/isMobile.js


// MIT License from https://github.com/kaimallea/isMobile

var applePhone = /iPhone/i;
var appleIpod = /iPod/i;
var appleTablet = /iPad/i;
var androidPhone = /\bAndroid(?:.+)Mobile\b/i; // Match 'Android' AND 'Mobile'
var androidTablet = /Android/i;
var amazonPhone = /\bAndroid(?:.+)SD4930UR\b/i;
var amazonTablet = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i;
var windowsPhone = /Windows Phone/i;
var windowsTablet = /\bWindows(?:.+)ARM\b/i; // Match 'Windows' AND 'ARM'
var otherBlackberry = /BlackBerry/i;
var otherBlackberry10 = /BB10/i;
var otherOpera = /Opera Mini/i;
var otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
var otherFirefox = /Mobile(?:.+)Firefox\b/i; // Match 'Mobile' AND 'Firefox'

function match(regex, userAgent) {
  return regex.test(userAgent);
}
function isMobile(userAgent) {
  var ua = userAgent || (typeof navigator !== 'undefined' ? navigator.userAgent : '');

  // Facebook mobile app's integrated browser adds a bunch of strings that
  // match everything. Strip it out if it exists.
  var tmp = ua.split('[FBAN');
  if (typeof tmp[1] !== 'undefined') {
    var _tmp = tmp;
    var _tmp2 = (0,slicedToArray/* default */.Z)(_tmp, 1);
    ua = _tmp2[0];
  }

  // Twitter mobile app's integrated browser on iPad adds a "Twitter for
  // iPhone" string. Same probably happens on other tablet platforms.
  // This will confuse detection so strip it out if it exists.
  tmp = ua.split('Twitter');
  if (typeof tmp[1] !== 'undefined') {
    var _tmp3 = tmp;
    var _tmp4 = (0,slicedToArray/* default */.Z)(_tmp3, 1);
    ua = _tmp4[0];
  }
  var result = {
    apple: {
      phone: match(applePhone, ua) && !match(windowsPhone, ua),
      ipod: match(appleIpod, ua),
      tablet: !match(applePhone, ua) && match(appleTablet, ua) && !match(windowsPhone, ua),
      device: (match(applePhone, ua) || match(appleIpod, ua) || match(appleTablet, ua)) && !match(windowsPhone, ua)
    },
    amazon: {
      phone: match(amazonPhone, ua),
      tablet: !match(amazonPhone, ua) && match(amazonTablet, ua),
      device: match(amazonPhone, ua) || match(amazonTablet, ua)
    },
    android: {
      phone: !match(windowsPhone, ua) && match(amazonPhone, ua) || !match(windowsPhone, ua) && match(androidPhone, ua),
      tablet: !match(windowsPhone, ua) && !match(amazonPhone, ua) && !match(androidPhone, ua) && (match(amazonTablet, ua) || match(androidTablet, ua)),
      device: !match(windowsPhone, ua) && (match(amazonPhone, ua) || match(amazonTablet, ua) || match(androidPhone, ua) || match(androidTablet, ua)) || match(/\bokhttp\b/i, ua)
    },
    windows: {
      phone: match(windowsPhone, ua),
      tablet: match(windowsTablet, ua),
      device: match(windowsPhone, ua) || match(windowsTablet, ua)
    },
    other: {
      blackberry: match(otherBlackberry, ua),
      blackberry10: match(otherBlackberry10, ua),
      opera: match(otherOpera, ua),
      firefox: match(otherFirefox, ua),
      chrome: match(otherChrome, ua),
      device: match(otherBlackberry, ua) || match(otherBlackberry10, ua) || match(otherOpera, ua) || match(otherFirefox, ua) || match(otherChrome, ua)
    },
    // Additional
    any: null,
    phone: null,
    tablet: null
  };
  result.any = result.apple.device || result.android.device || result.windows.device || result.other.device;

  // excludes 'other' devices and ipods, targeting touchscreen phones
  result.phone = result.apple.phone || result.android.phone || result.windows.phone;
  result.tablet = result.apple.tablet || result.android.tablet || result.windows.tablet;
  return result;
}
var defaultResult = (0,helpers_extends/* default */.Z)({}, isMobile(), {
  isMobile: isMobile
});
/* harmony default export */ var utils_isMobile = (defaultResult);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-menu/util.js


function util_noop() {}
function getKeyFromChildrenIndex(child, menuEventKey, index) {
  var prefix = menuEventKey || '';
  return child.key === undefined ? prefix + 'item_' + index : child.key;
}
function getMenuIdFromSubMenuEventKey(eventKey) {
  return eventKey + '-menu-';
}
function loopMenuItem(children, cb) {
  var index = -1;
  children.forEach(function (c) {
    index++;
    if (c && c.type && c.type.isMenuItemGroup) {
      c.$slots['default'].forEach(function (c2) {
        index++;
        c.componentOptions && cb(c2, index);
      });
    } else {
      c.componentOptions && cb(c, index);
    }
  });
}
function loopMenuItemRecursively(children, keys, ret) {
  if (!children || ret.find) {
    return;
  }
  children.forEach(function (c) {
    if (ret.find) {
      return;
    }
    if (c.data && c.data.slot && c.data.slot !== 'default') {
      return;
    }
    if (c && c.componentOptions) {
      var options = c.componentOptions.Ctor.options;
      if (!options || !(options.isSubMenu || options.isMenuItem || options.isMenuItemGroup)) {
        return;
      }
      if (keys.indexOf(c.key) !== -1) {
        ret.find = true;
      } else if (c.componentOptions.children) {
        loopMenuItemRecursively(c.componentOptions.children, keys, ret);
      }
    }
  });
}
var menuAllProps = {
  props: ['defaultSelectedKeys', 'selectedKeys', 'defaultOpenKeys', 'openKeys', 'mode', 'getPopupContainer', 'openTransitionName', 'openAnimation', 'subMenuOpenDelay', 'subMenuCloseDelay', 'forceSubMenuRender', 'triggerSubMenuAction', 'level', 'selectable', 'multiple', 'visible', 'focusable', 'defaultActiveFirst', 'prefixCls', 'inlineIndent', 'parentMenu', 'title', 'rootPrefixCls', 'eventKey', 'active', 'popupAlign', 'popupOffset', 'isOpen', 'renderMenuItem', 'manualRef', 'subMenuKey', 'disabled', 'index', 'isSelected', 'store', 'activeKey', 'builtinPlacements', 'overflowedIndicator',
  // the following keys found need to be removed from test regression
  'attribute', 'value', 'popupClassName', 'inlineCollapsed', 'menu', 'theme', 'itemIcon', 'expandIcon'],
  on: ['select', 'deselect', 'destroy', 'openChange', 'itemHover', 'titleMouseenter', 'titleMouseleave', 'titleClick']
};

// ref: https://github.com/ant-design/ant-design/issues/14007
// ref: https://bugs.chromium.org/p/chromium/issues/detail?id=360889
// getBoundingClientRect return the full precision value, which is
// not the same behavior as on chrome. Set the precision to 6 to
// unify their behavior
var getWidth = function getWidth(elem) {
  var width = elem && typeof elem.getBoundingClientRect === 'function' && elem.getBoundingClientRect().width;
  if (width) {
    width = +width.toFixed(6);
  }
  return width || 0;
};
var setStyle = function setStyle(elem, styleProperty, value) {
  if (elem && (0,helpers_typeof/* default */.Z)(elem.style) === 'object') {
    elem.style[styleProperty] = value;
  }
};
var isMobileDevice = function isMobileDevice() {
  return utils_isMobile.any;
};
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-menu/MenuItem.js










var props = {
  attribute: vue_types.object,
  rootPrefixCls: vue_types.string,
  eventKey: vue_types.oneOfType([vue_types.string, vue_types.number]),
  active: vue_types.bool,
  selectedKeys: vue_types.array,
  disabled: vue_types.bool,
  title: vue_types.any,
  index: vue_types.number,
  inlineIndent: vue_types.number.def(24),
  level: vue_types.number.def(1),
  mode: vue_types.oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']).def('vertical'),
  parentMenu: vue_types.object,
  multiple: vue_types.bool,
  value: vue_types.any,
  isSelected: vue_types.bool,
  manualRef: vue_types.func.def(util_noop),
  role: vue_types.any,
  subMenuKey: vue_types.string,
  itemIcon: vue_types.any
  // clearSubMenuTimers: PropTypes.func.def(noop),
};

var MenuItem = {
  name: 'MenuItem',
  props: props,
  mixins: [BaseMixin],
  isMenuItem: true,
  created: function created() {
    this.prevActive = this.active;
    // invoke customized ref to expose component to mixin
    this.callRef();
  },
  updated: function updated() {
    var _this = this;
    this.$nextTick(function () {
      var _$props = _this.$props,
        active = _$props.active,
        parentMenu = _$props.parentMenu,
        eventKey = _$props.eventKey;
      if (!_this.prevActive && active && (!parentMenu || !parentMenu['scrolled-' + eventKey])) {
        dist_web(_this.$el, _this.parentMenu.$el, {
          onlyScrollIfNeeded: true
        });
        parentMenu['scrolled-' + eventKey] = true;
      } else if (parentMenu && parentMenu['scrolled-' + eventKey]) {
        delete parentMenu['scrolled-' + eventKey];
      }
      _this.prevActive = active;
    });
    this.callRef();
  },
  beforeDestroy: function beforeDestroy() {
    var props = this.$props;
    this.__emit('destroy', props.eventKey);
  },
  methods: {
    onKeyDown: function onKeyDown(e) {
      var keyCode = e.keyCode;
      if (keyCode === _util_KeyCode.ENTER) {
        this.onClick(e);
        return true;
      }
    },
    onMouseLeave: function onMouseLeave(e) {
      var eventKey = this.$props.eventKey;
      this.__emit('itemHover', {
        key: eventKey,
        hover: false
      });
      this.__emit('mouseleave', {
        key: eventKey,
        domEvent: e
      });
    },
    onMouseEnter: function onMouseEnter(e) {
      var eventKey = this.eventKey;
      this.__emit('itemHover', {
        key: eventKey,
        hover: true
      });
      this.__emit('mouseenter', {
        key: eventKey,
        domEvent: e
      });
    },
    onClick: function onClick(e) {
      var _$props2 = this.$props,
        eventKey = _$props2.eventKey,
        multiple = _$props2.multiple,
        isSelected = _$props2.isSelected;
      var info = {
        key: eventKey,
        keyPath: [eventKey],
        item: this,
        domEvent: e
      };
      this.__emit('click', info);
      if (multiple) {
        if (isSelected) {
          this.__emit('deselect', info);
        } else {
          this.__emit('select', info);
        }
      } else if (!isSelected) {
        this.__emit('select', info);
      }
    },
    getPrefixCls: function getPrefixCls() {
      return this.$props.rootPrefixCls + '-item';
    },
    getActiveClassName: function getActiveClassName() {
      return this.getPrefixCls() + '-active';
    },
    getSelectedClassName: function getSelectedClassName() {
      return this.getPrefixCls() + '-selected';
    },
    getDisabledClassName: function getDisabledClassName() {
      return this.getPrefixCls() + '-disabled';
    },
    callRef: function callRef() {
      if (this.manualRef) {
        this.manualRef(this);
      }
    }
  },
  render: function render() {
    var _className;
    var h = arguments[0];
    var props = (0,helpers_extends/* default */.Z)({}, this.$props);
    var className = (_className = {}, (0,defineProperty/* default */.Z)(_className, this.getPrefixCls(), true), (0,defineProperty/* default */.Z)(_className, this.getActiveClassName(), !props.disabled && props.active), (0,defineProperty/* default */.Z)(_className, this.getSelectedClassName(), props.isSelected), (0,defineProperty/* default */.Z)(_className, this.getDisabledClassName(), props.disabled), _className);
    var attrs = (0,helpers_extends/* default */.Z)({}, props.attribute, {
      title: props.title,
      role: props.role || 'menuitem',
      'aria-disabled': props.disabled
    });
    if (props.role === 'option') {
      // overwrite to option
      attrs = (0,helpers_extends/* default */.Z)({}, attrs, {
        role: 'option',
        'aria-selected': props.isSelected
      });
    } else if (props.role === null || props.role === 'none') {
      // sometimes we want to specify role inside <li/> element
      // <li><a role='menuitem'>Link</a></li> would be a good example
      // in this case the role on <li/> should be "none" to
      // remove the implied listitem role.
      // https://www.w3.org/TR/wai-aria-practices-1.1/examples/menubar/menubar-1/menubar-1.html
      attrs.role = 'none';
    }
    // In case that onClick/onMouseLeave/onMouseEnter is passed down from owner
    var mouseEvent = {
      click: props.disabled ? util_noop : this.onClick,
      mouseleave: props.disabled ? util_noop : this.onMouseLeave,
      mouseenter: props.disabled ? util_noop : this.onMouseEnter
    };
    var style = {};
    if (props.mode === 'inline') {
      style.paddingLeft = props.inlineIndent * props.level + 'px';
    }
    var listeners = (0,helpers_extends/* default */.Z)({}, getListeners(this));
    menuAllProps.props.forEach(function (key) {
      return delete props[key];
    });
    menuAllProps.on.forEach(function (key) {
      return delete listeners[key];
    });
    var liProps = {
      attrs: (0,helpers_extends/* default */.Z)({}, props, attrs),
      on: (0,helpers_extends/* default */.Z)({}, listeners, mouseEvent)
    };
    return h('li', babel_helper_vue_jsx_merge_props_default()([liProps, {
      style: style,
      'class': className
    }]), [this.$slots['default'], getComponentFromProp(this, 'itemIcon', props)]);
  }
};
var connected = connect(function (_ref, _ref2) {
  var activeKey = _ref.activeKey,
    selectedKeys = _ref.selectedKeys;
  var eventKey = _ref2.eventKey,
    subMenuKey = _ref2.subMenuKey;
  return {
    active: activeKey[subMenuKey] === eventKey,
    isSelected: selectedKeys.indexOf(eventKey) !== -1
  };
})(MenuItem);
/* harmony default export */ var vc_menu_MenuItem = (connected);

;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-menu/MenuItemGroup.js




// import { menuAllProps } from './util'

var MenuItemGroup = {
  name: 'MenuItemGroup',
  props: {
    renderMenuItem: vue_types.func,
    index: vue_types.number,
    className: vue_types.string,
    subMenuKey: vue_types.string,
    rootPrefixCls: vue_types.string,
    disabled: vue_types.bool.def(true),
    title: vue_types.any
  },
  isMenuItemGroup: true,
  methods: {
    renderInnerMenuItem: function renderInnerMenuItem(item) {
      var _$props = this.$props,
        renderMenuItem = _$props.renderMenuItem,
        index = _$props.index,
        subMenuKey = _$props.subMenuKey;
      return renderMenuItem(item, index, subMenuKey);
    }
  },
  render: function render() {
    var h = arguments[0];
    var props = (0,helpers_extends/* default */.Z)({}, this.$props);
    var rootPrefixCls = props.rootPrefixCls,
      title = props.title;
    var titleClassName = rootPrefixCls + '-item-group-title';
    var listClassName = rootPrefixCls + '-item-group-list';
    // menuAllProps.props.forEach(key => delete props[key])
    var listeners = (0,helpers_extends/* default */.Z)({}, getListeners(this));
    delete listeners.click;
    return h('li', {
      on: listeners,
      'class': rootPrefixCls + '-item-group'
    }, [h('div', {
      'class': titleClassName,
      attrs: {
        title: typeof title === 'string' ? title : undefined
      }
    }, [getComponentFromProp(this, 'title')]), h('ul', {
      'class': listClassName
    }, [this.$slots['default'] && this.$slots['default'].map(this.renderInnerMenuItem)])]);
  }
};
/* harmony default export */ var vc_menu_MenuItemGroup = (MenuItemGroup);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/css-animation/Event.js

var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: 'transitionstart',
    WebkitTransition: 'webkitTransitionStart',
    MozTransition: 'mozTransitionStart',
    OTransition: 'oTransitionStart',
    msTransition: 'MSTransitionStart'
  },
  animationstart: {
    animation: 'animationstart',
    WebkitAnimation: 'webkitAnimationStart',
    MozAnimation: 'mozAnimationStart',
    OAnimation: 'oAnimationStart',
    msAnimation: 'MSAnimationStart'
  }
};
var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },
  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};
var startEvents = [];
var endEvents = [];
function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;
  if (!('AnimationEvent' in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }
  if (!('TransitionEvent' in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }
  function process(EVENT_NAME_MAP, events) {
    for (var baseEventName in EVENT_NAME_MAP) {
      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
          if (styleName in style) {
            events.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }
  }
  process(START_EVENT_NAME_MAP, startEvents);
  process(END_EVENT_NAME_MAP, endEvents);
}
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}
function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}
function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}
var TransitionEvents = {
  // Start events
  startEvents: startEvents,
  addStartEventListener: function addStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    startEvents.forEach(function (startEvent) {
      addEventListener(node, startEvent, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      return;
    }
    startEvents.forEach(function (startEvent) {
      removeEventListener(node, startEvent, eventListener);
    });
  },
  // End events
  endEvents: endEvents,
  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};
/* harmony default export */ var Event = (TransitionEvents);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/getRequestAnimationFrame.js
var availablePrefixs = ['moz', 'ms', 'webkit'];
function requestAnimationFramePolyfill() {
  var lastTime = 0;
  return function (callback) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
}
function getRequestAnimationFrame() {
  if (typeof window === 'undefined') {
    return function () {};
  }
  if (window.requestAnimationFrame) {
    // https://github.com/vuejs/vue/issues/4465
    return window.requestAnimationFrame.bind(window);
  }
  var prefix = availablePrefixs.filter(function (key) {
    return key + 'RequestAnimationFrame' in window;
  })[0];
  return prefix ? window[prefix + 'RequestAnimationFrame'] : requestAnimationFramePolyfill();
}
function cancelRequestAnimationFrame(id) {
  if (typeof window === 'undefined') {
    return null;
  }
  if (window.cancelAnimationFrame) {
    return window.cancelAnimationFrame(id);
  }
  var prefix = availablePrefixs.filter(function (key) {
    return key + 'CancelAnimationFrame' in window || key + 'CancelRequestAnimationFrame' in window;
  })[0];
  return prefix ? (window[prefix + 'CancelAnimationFrame'] || window[prefix + 'CancelRequestAnimationFrame']).call(this, id) : clearTimeout(id);
}
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/requestAnimationTimeout.js

var requestAnimationTimeout_raf = getRequestAnimationFrame();
var cancelAnimationTimeout = function cancelAnimationTimeout(frame) {
  return cancelRequestAnimationFrame(frame.id);
};
var requestAnimationTimeout = function requestAnimationTimeout(callback, delay) {
  var start = Date.now();
  function timeout() {
    if (Date.now() - start >= delay) {
      callback.call();
    } else {
      frame.id = requestAnimationTimeout_raf(timeout);
    }
  }
  var frame = {
    id: requestAnimationTimeout_raf(timeout)
  };
  return frame;
};
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/css-animation/index.js

// https://github.com/yiminghe/css-animation 1.5.0




var isCssAnimationSupported = Event.endEvents.length !== 0;
var capitalPrefixes = ['Webkit', 'Moz', 'O',
// ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}
function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}
function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}
var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : (0,helpers_typeof/* default */.Z)(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
  var end = endCallback;
  var start = void 0;
  var active = void 0;
  var nodeClasses = component_classes_default()(node);
  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }
  if (node.rcEndListener) {
    node.rcEndListener();
  }
  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }
    if (node.rcAnimTimeout) {
      cancelAnimationTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }
    clearBrowserBugTimeout(node);
    nodeClasses.remove(className);
    nodeClasses.remove(activeClassName);
    Event.removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (end) {
      end();
    }
  };
  Event.addEndEventListener(node, node.rcEndListener);
  if (start) {
    start();
  }
  nodeClasses.add(className);
  node.rcAnimTimeout = requestAnimationTimeout(function () {
    node.rcAnimTimeout = null;
    nodeClasses.add(className);
    nodeClasses.add(activeClassName);
    if (active) {
      requestAnimationTimeout(active, 0);
    }
    fixBrowserByTimeout(node);
    // 30ms for firefox
  }, 30);
  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};
cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }
  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }
    if (node.rcAnimTimeout) {
      cancelAnimationTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }
    clearBrowserBugTimeout(node);
    Event.removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };
  Event.addEndEventListener(node, node.rcEndListener);
  node.rcAnimTimeout = requestAnimationTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};
cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};
cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

/* harmony default export */ var css_animation = (cssAnimation);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/getTransitionProps.js

var getTransitionProps_noop = function noop() {};
var getTransitionProps = function getTransitionProps(transitionName) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var beforeEnter = opt.beforeEnter,
    enter = opt.enter,
    afterEnter = opt.afterEnter,
    leave = opt.leave,
    afterLeave = opt.afterLeave,
    _opt$appear = opt.appear,
    appear = _opt$appear === undefined ? true : _opt$appear,
    tag = opt.tag,
    nativeOn = opt.nativeOn;
  var transitionProps = {
    props: {
      appear: appear,
      css: false
    },
    on: {
      beforeEnter: beforeEnter || getTransitionProps_noop,
      enter: enter || function (el, done) {
        css_animation(el, transitionName + '-enter', done);
      },
      afterEnter: afterEnter || getTransitionProps_noop,
      leave: leave || function (el, done) {
        css_animation(el, transitionName + '-leave', done);
      },
      afterLeave: afterLeave || getTransitionProps_noop
    },
    nativeOn: nativeOn
  };
  // transition-group
  if (tag) {
    transitionProps.tag = tag;
  }
  return transitionProps;
};
/* harmony default export */ var _util_getTransitionProps = (getTransitionProps);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-util/Dom/contains.js
function contains(root, n) {
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}
// EXTERNAL MODULE: ./node_modules/add-dom-event-listener/lib/index.js
var add_dom_event_listener_lib = __webpack_require__(9221);
var add_dom_event_listener_lib_default = /*#__PURE__*/__webpack_require__.n(add_dom_event_listener_lib);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-util/Dom/addEventListener.js

function addEventListenerWrap(target, eventType, cb, option) {
  return add_dom_event_listener_lib_default()(target, eventType, cb, option);
}
;// CONCATENATED MODULE: ./node_modules/dom-align/dist-web/index.js

function dist_web_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function dist_web_objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? dist_web_ownKeys(Object(source), !0).forEach(function (key) {
      dist_web_defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : dist_web_ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function dist_web_typeof(obj) {
  "@babel/helpers - typeof";

  return dist_web_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, dist_web_typeof(obj);
}
function dist_web_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var vendorPrefix;
var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-'
};
function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }
  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';
  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }
  return vendorPrefix;
}
function getTransitionName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : 'transitionProperty';
}
function getTransformName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : 'transform';
}
function setTransitionProperty(node, value) {
  var name = getTransitionName();
  if (name) {
    node.style[name] = value;
    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}
function dist_web_setTransform(node, value) {
  var name = getTransformName();
  if (name) {
    node.style[name] = value;
    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}
function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}
function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
    return {
      x: parseFloat(matrix[12] || matrix[4], 0),
      y: parseFloat(matrix[13] || matrix[5], 0)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;
function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
  if (transform && transform !== 'none') {
    var arr;
    var match2d = transform.match(matrix2d);
    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      dist_web_setTransform(node, "matrix(".concat(arr.join(','), ")"));
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      dist_web_setTransform(node, "matrix3d(".concat(arr.join(','), ")"));
    }
  } else {
    dist_web_setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
  }
}
var dist_web_RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var dist_web_getComputedStyleX;

// https://stackoverflow.com/a/3485654/3040605
function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight; // eslint-disable-line
  elem.style.display = originalStyle;
}
function dist_web_css(el, name, v) {
  var value = v;
  if (dist_web_typeof(name) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        dist_web_css(el, i, name[i]);
      }
    }
    return undefined;
  }
  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = "".concat(value, "px");
    }
    el.style[name] = value;
    return undefined;
  }
  return dist_web_getComputedStyleX(el, name);
}
function dist_web_getClientPosition(elem) {
  var box;
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
  box = elem.getBoundingClientRect();

  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = Math.floor(box.left);
  y = Math.floor(box.top);

  // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.

  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.

  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}
function dist_web_getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}
function dist_web_getScrollLeft(w) {
  return dist_web_getScroll(w);
}
function dist_web_getScrollTop(w) {
  return dist_web_getScroll(w, true);
}
function dist_web_getOffset(el) {
  var pos = dist_web_getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += dist_web_getScrollLeft(w);
  pos.top += dist_web_getScrollTop(w);
  return pos;
}

/**
 * A crude way of determining if an object is a window
 * @member util
 */
function dist_web_isWindow(obj) {
  // must use == for ie8
  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}
function getDocument(node) {
  if (dist_web_isWindow(node)) {
    return node.document;
  }
  if (node.nodeType === 9) {
    return node;
  }
  return node.ownerDocument;
}
function dist_web_getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);

  // https://github.com/kissyteam/kissy/issues/61
  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }
  return val;
}
var dist_web_RE_NUM_NO_PX = new RegExp("^(".concat(dist_web_RE_NUM, ")(?!px)[a-z%]+$"), 'i');
var dist_web_RE_POS = /^(top|right|bottom|left)$/;
var dist_web_CURRENT_STYLE = 'currentStyle';
var dist_web_RUNTIME_STYLE = 'runtimeStyle';
var dist_web_LEFT = 'left';
var dist_web_PX = 'px';
function dist_web_getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[dist_web_CURRENT_STYLE] && elem[dist_web_CURRENT_STYLE][name];

  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity
  if (dist_web_RE_NUM_NO_PX.test(ret) && !dist_web_RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[dist_web_LEFT];
    var rsLeft = elem[dist_web_RUNTIME_STYLE][dist_web_LEFT];

    // prevent flashing of content
    elem[dist_web_RUNTIME_STYLE][dist_web_LEFT] = elem[dist_web_CURRENT_STYLE][dist_web_LEFT];

    // Put in the new values to get a computed value out
    style[dist_web_LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + dist_web_PX;

    // Revert the changed values
    style[dist_web_LEFT] = left;
    elem[dist_web_RUNTIME_STYLE][dist_web_LEFT] = rsLeft;
  }
  return ret === '' ? 'auto' : ret;
}
if (typeof window !== 'undefined') {
  dist_web_getComputedStyleX = window.getComputedStyle ? dist_web_getComputedStyle : dist_web_getComputedStyleIE;
}
function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }
  return option.useCssBottom ? 'bottom' : dir;
}
function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
}

// 设置 elem 相对 elem.ownerDocument 的坐标
function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (dist_web_css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }
  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);
  if (horizontalProperty !== 'left') {
    presetH = 999;
  }
  if (verticalProperty !== 'top') {
    presetV = 999;
  }
  var originalTransition = '';
  var originalOffset = dist_web_getOffset(elem);
  if ('left' in offset || 'top' in offset) {
    originalTransition = getTransitionProperty(elem) || '';
    setTransitionProperty(elem, 'none');
  }
  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = "".concat(presetH, "px");
  }
  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = "".concat(presetV, "px");
  }
  // force relayout
  forceRelayout(elem);
  var old = dist_web_getOffset(elem);
  var originalStyle = {};
  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];
      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }
  dist_web_css(elem, originalStyle);
  // force relayout
  forceRelayout(elem);
  if ('left' in offset || 'top' in offset) {
    setTransitionProperty(elem, originalTransition);
  }
  var ret = {};
  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);
      var _off = offset[_key] - originalOffset[_key];
      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }
  dist_web_css(elem, ret);
}
function setTransform$1(elem, offset) {
  var originalOffset = dist_web_getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = {
    x: originalXY.x,
    y: originalXY.y
  };
  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }
  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }
  setTransformXY(elem, resultXY);
}
function dist_web_setOffset(elem, offset, option) {
  if (option.ignoreShake) {
    var oriOffset = dist_web_getOffset(elem);
    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset.left.toFixed(0);
    var tTop = offset.top.toFixed(0);
    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }
  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    setTransform$1(elem, offset);
  } else {
    setLeftTop(elem, offset, option);
  }
}
function dist_web_each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}
function dist_web_isBorderBoxFn(elem) {
  return dist_web_getComputedStyleX(elem, 'boxSizing') === 'border-box';
}
var dist_web_BOX_MODELS = ['margin', 'border', 'padding'];
var dist_web_CONTENT_INDEX = -1;
var dist_web_PADDING_INDEX = 2;
var dist_web_BORDER_INDEX = 1;
var dist_web_MARGIN_INDEX = 0;
function dist_web_swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name;

  // Remember the old values, and insert the new ones
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }
  callback.call(elem);

  // Revert the old values
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}
function dist_web_getPBMWidth(elem, props, which) {
  var value = 0;
  var prop;
  var j;
  var i;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;
        if (prop === 'border') {
          cssProp = "".concat(prop).concat(which[i], "Width");
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(dist_web_getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}
var dist_web_domUtils = {
  getParent: function getParent(element) {
    var parent = element;
    do {
      if (parent.nodeType === 11 && parent.host) {
        parent = parent.host;
      } else {
        parent = parent.parentNode;
      }
    } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);
    return parent;
  }
};
dist_web_each(['Width', 'Height'], function (name) {
  dist_web_domUtils["doc".concat(name)] = function (refWin) {
    var d = refWin.document;
    return Math.max(
    // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement["scroll".concat(name)],
    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body["scroll".concat(name)], dist_web_domUtils["viewport".concat(name)](d));
  };
  dist_web_domUtils["viewport".concat(name)] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = "client".concat(name);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    // 标准模式取 documentElement
    // backcompat 取 body
    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});

/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */
function dist_web_getWH(elem, name, ex) {
  var extra = ex;
  if (dist_web_isWindow(elem)) {
    return name === 'width' ? dist_web_domUtils.viewportWidth(elem) : dist_web_domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? dist_web_domUtils.docWidth(elem) : dist_web_domUtils.docHeight(elem);
  }
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? Math.floor(elem.getBoundingClientRect().width) : Math.floor(elem.getBoundingClientRect().height);
  var isBorderBox = dist_web_isBorderBoxFn(elem);
  var cssBoxValue = 0;
  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
    borderBoxValue = undefined;
    // Fall back to computed then un computed css if necessary
    cssBoxValue = dist_web_getComputedStyleX(elem, name);
    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    // Normalize '', auto, and prepare for extra
    cssBoxValue = Math.floor(parseFloat(cssBoxValue)) || 0;
  }
  if (extra === undefined) {
    extra = isBorderBox ? dist_web_BORDER_INDEX : dist_web_CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === dist_web_CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - dist_web_getPBMWidth(elem, ['border', 'padding'], which);
    }
    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === dist_web_BORDER_INDEX) {
      return val;
    }
    return val + (extra === dist_web_PADDING_INDEX ? -dist_web_getPBMWidth(elem, ['border'], which) : dist_web_getPBMWidth(elem, ['margin'], which));
  }
  return cssBoxValue + dist_web_getPBMWidth(elem, dist_web_BOX_MODELS.slice(extra), which);
}
var dist_web_cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
};

// fix #119 : https://github.com/kissyteam/kissy/issues/119
function dist_web_getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }
  var val;
  var elem = args[0];
  // in case elem is window
  // elem.offsetWidth === undefined
  if (elem.offsetWidth !== 0) {
    val = dist_web_getWH.apply(undefined, args);
  } else {
    dist_web_swap(elem, dist_web_cssShow, function () {
      val = dist_web_getWH.apply(undefined, args);
    });
  }
  return val;
}
dist_web_each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  dist_web_domUtils["outer".concat(first)] = function (el, includeMargin) {
    return el && dist_web_getWHIgnoreDisplay(el, name, includeMargin ? dist_web_MARGIN_INDEX : dist_web_BORDER_INDEX);
  };
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  dist_web_domUtils[name] = function (elem, v) {
    var val = v;
    if (val !== undefined) {
      if (elem) {
        var isBorderBox = dist_web_isBorderBoxFn(elem);
        if (isBorderBox) {
          val += dist_web_getPBMWidth(elem, ['padding', 'border'], which);
        }
        return dist_web_css(elem, name, val);
      }
      return undefined;
    }
    return elem && dist_web_getWHIgnoreDisplay(elem, name, dist_web_CONTENT_INDEX);
  };
});
function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }
  return to;
}
var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  getDocument: getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      dist_web_setOffset(el, value, option || {});
    } else {
      return dist_web_getOffset(el);
    }
  },
  isWindow: dist_web_isWindow,
  each: dist_web_each,
  css: dist_web_css,
  clone: function clone(obj) {
    var i;
    var ret = {};
    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }
    return ret;
  },
  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return dist_web_getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return dist_web_getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};
    for (var i = 0; i < arguments.length; i++) {
      utils.mix(ret, i < 0 || arguments.length <= i ? undefined : arguments[i]);
    }
    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
mix(utils, dist_web_domUtils);

/**
 * 得到会导致元素显示不全的祖先元素
 */
var getParent = utils.getParent;
function getOffsetParent(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return null;
  }
  // ie 这个也不是完全可行
  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法
  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent;
  var positionStyle = utils.css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';
  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : getParent(element);
  }
  for (parent = getParent(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent(parent)) {
    positionStyle = utils.css(parent, 'position');
    if (positionStyle !== 'static') {
      return parent;
    }
  }
  return null;
}
var getParent$1 = utils.getParent;
function isAncestorFixed(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }
  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent = null;
  for (parent = getParent$1(element);
  // 修复元素位于 document.documentElement 下导致崩溃问题
  parent && parent !== body && parent !== doc; parent = getParent$1(parent)) {
    var positionStyle = utils.css(parent, 'position');
    if (positionStyle === 'fixed') {
      return true;
    }
  }
  return false;
}

/**
 * 获得元素的显示部分的区域
 */
function getVisibleRectForElement(element, alwaysByViewport) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = getOffsetParent(element);
  var doc = utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement;

  // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.
  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
    // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible') {
      var pos = utils.offset(el);
      // add border
      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right,
      // consider area without scrollBar
      pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }
    el = getOffsetParent(el);
  }

  // Set element position to fixed
  // make sure absolute element itself don't affect it's visible area
  // https://github.com/ant-design/ant-design/issues/7601
  var originalPosition = null;
  if (!utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = utils.css(element, 'position');
    if (position === 'absolute') {
      element.style.position = 'fixed';
    }
  }
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight;

  // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
  // We should cut this ourself.
  var bodyStyle = window.getComputedStyle(body);
  if (bodyStyle.overflowX === 'hidden') {
    documentWidth = win.innerWidth;
  }
  if (bodyStyle.overflowY === 'hidden') {
    documentHeight = win.innerHeight;
  }

  // Reset element position after calculate the visible area
  if (element.style) {
    element.style.position = originalPosition;
  }
  if (alwaysByViewport || isAncestorFixed(element)) {
    // Clip by viewport's size.
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    // Clip by document's size.
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }
  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}
function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };
  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  }

  // Left edge inside and right edge outside viewport, try to resize it.
  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  }

  // Right edge outside viewport, try to move it.
  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  }

  // Top edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  }

  // Top edge inside and bottom edge outside viewport, try to resize it.
  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  }

  // Bottom edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }
  return utils.mix(pos, size);
}
function getRegion(node) {
  var offset;
  var w;
  var h;
  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset = utils.offset(node);
    w = utils.outerWidth(node);
    h = utils.outerHeight(node);
  } else {
    var win = utils.getWindow(node);
    offset = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win)
    };
    w = utils.viewportWidth(win);
    h = utils.viewportHeight(win);
  }
  offset.width = w;
  offset.height = h;
  return offset;
}

/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */

function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;
  var x = region.left;
  var y = region.top;
  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }
  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }
  return {
    left: x,
    top: y
  };
}
function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];
  return {
    left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
    top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1])
  };
}

/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */

// http://yiminghe.iteye.com/blog/1124720

function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}
function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}
function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}
function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}
function flip(points, reg, map) {
  var ret = [];
  utils.each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}
function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}
function convertOffset(str, offsetLen) {
  var n;
  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }
  return n || 0;
}
function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}

/**
 * @param el
 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
 * @param align
 */
function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  var alwaysByViewport = !!(overflow && overflow.alwaysByViewport);
  // 当前节点可以被放置的显示区域
  var visibleRect = getVisibleRectForElement(source, alwaysByViewport);
  // 当前节点所占的区域, left/top/width/height
  var elRegion = getRegion(source);
  // 将 offset 转换成数值，支持百分比
  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, tgtRegion);
  // 当前节点将要被放置的位置
  var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
  // 当前节点将要所处的区域
  var newElRegion = utils.merge(elRegion, elFuturePos);

  // 如果可视区域不能完全放置当前节点时允许调整
  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var newPoints = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        });
        // 偏移量也反下
        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);
        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }
    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var _newPoints = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        });
        // 偏移量也反下
        var _newOffset = flipOffset(offset, 1);
        var _newTargetOffset = flipOffset(targetOffset, 1);
        var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);
        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    }

    // 如果失败，重新计算当前节点将要被放置的位置
    if (fail) {
      elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
      utils.mix(newElRegion, elFuturePos);
    }
    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
    // 检查反下后的位置是否可以放下了，如果仍然放不下：
    // 1. 复原修改过的定位参数
    if (isStillFailX || isStillFailY) {
      var _newPoints2 = points;

      // 重置对应部分的翻转逻辑
      if (isStillFailX) {
        _newPoints2 = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        });
      }
      if (isStillFailY) {
        _newPoints2 = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        });
      }
      points = _newPoints2;
      offset = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    }
    // 2. 只有指定了可以调整当前方向才调整
    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;

    // 确实要调整，甚至可能会调整高度宽度
    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  }

  // need judge to in case set fixed with in css on height auto element
  if (newElRegion.width !== elRegion.width) {
    utils.css(source, 'width', utils.width(source) + newElRegion.width - elRegion.width);
  }
  if (newElRegion.height !== elRegion.height) {
    utils.css(source, 'height', utils.height(source) + newElRegion.height - elRegion.height);
  }

  // https://github.com/kissyteam/kissy/issues/190
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>
  utils.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });
  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg
  };
}
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/

function isOutOfVisibleRect(target, alwaysByViewport) {
  var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
  var targetRegion = getRegion(target);
  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}
function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = getRegion(target);
  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}
alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;

/**
 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */

function alignPoint(el, tgtPoint, align) {
  var pageX;
  var pageY;
  var doc = utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  if ('pageX' in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }
  if ('pageY' in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }
  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };
  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight;

  // Provide default target point
  var points = [align.points[0], 'cc'];
  return doAlign(el, tgtRegion, dist_web_objectSpread2(dist_web_objectSpread2({}, align), {}, {
    points: points
  }), pointInView);
}
/* harmony default export */ var dom_align_dist_web = ((/* unused pure expression or super */ null && (alignElement)));

;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-align/util.js


function buffer(fn, ms) {
  var timer = void 0;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function bufferFn() {
    clear();
    timer = setTimeout(fn, ms);
  }
  bufferFn.clear = clear;
  return bufferFn;
}
function isSamePoint(prev, next) {
  if (prev === next) return true;
  if (!prev || !next) return false;
  if ('pageX' in next && 'pageY' in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }
  if ('clientX' in next && 'clientY' in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }
  return false;
}
function util_isWindow(obj) {
  return obj && (typeof obj === 'undefined' ? 'undefined' : (0,helpers_typeof/* default */.Z)(obj)) === 'object' && obj.window === obj;
}
function isSimilarValue(val1, val2) {
  var int1 = Math.floor(val1);
  var int2 = Math.floor(val2);
  return Math.abs(int1 - int2) <= 1;
}
function restoreFocus(activeElement, container) {
  // Focus back if is in the container
  if (activeElement !== document.activeElement && contains(container, activeElement)) {
    activeElement.focus();
  }
}
// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(2618);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-align/Align.js









function getElement(func) {
  if (typeof func !== 'function' || !func) return null;
  return func();
}
function getPoint(point) {
  if ((typeof point === 'undefined' ? 'undefined' : (0,helpers_typeof/* default */.Z)(point)) !== 'object' || !point) return null;
  return point;
}
/* harmony default export */ var Align = ({
  props: {
    childrenProps: vue_types.object,
    align: vue_types.object.isRequired,
    target: vue_types.oneOfType([vue_types.func, vue_types.object]).def(function () {
      return window;
    }),
    monitorBufferTime: vue_types.number.def(50),
    monitorWindowResize: vue_types.bool.def(false),
    disabled: vue_types.bool.def(false)
  },
  data: function data() {
    this.aligned = false;
    return {};
  },
  mounted: function mounted() {
    var _this = this;
    this.$nextTick(function () {
      _this.prevProps = (0,helpers_extends/* default */.Z)({}, _this.$props);
      var props = _this.$props;
      // if parent ref not attached .... use document.getElementById
      !_this.aligned && _this.forceAlign();
      if (!props.disabled && props.monitorWindowResize) {
        _this.startMonitorWindowResize();
      }
    });
  },
  updated: function updated() {
    var _this2 = this;
    this.$nextTick(function () {
      var prevProps = _this2.prevProps;
      var props = _this2.$props;
      var reAlign = false;
      if (!props.disabled) {
        var source = _this2.$el;
        var sourceRect = source ? source.getBoundingClientRect() : null;
        if (prevProps.disabled) {
          reAlign = true;
        } else {
          var lastElement = getElement(prevProps.target);
          var currentElement = getElement(props.target);
          var lastPoint = getPoint(prevProps.target);
          var currentPoint = getPoint(props.target);
          if (util_isWindow(lastElement) && util_isWindow(currentElement)) {
            // Skip if is window
            reAlign = false;
          } else if (lastElement !== currentElement ||
          // Element change
          lastElement && !currentElement && currentPoint ||
          // Change from element to point
          lastPoint && currentPoint && currentElement ||
          // Change from point to element
          currentPoint && !isSamePoint(lastPoint, currentPoint)) {
            reAlign = true;
          }

          // If source element size changed
          var preRect = _this2.sourceRect || {};
          if (!reAlign && source && (!isSimilarValue(preRect.width, sourceRect.width) || !isSimilarValue(preRect.height, sourceRect.height))) {
            reAlign = true;
          }
        }
        _this2.sourceRect = sourceRect;
      }
      if (reAlign) {
        _this2.forceAlign();
      }
      if (props.monitorWindowResize && !props.disabled) {
        _this2.startMonitorWindowResize();
      } else {
        _this2.stopMonitorWindowResize();
      }
      _this2.prevProps = (0,helpers_extends/* default */.Z)({}, _this2.$props, {
        align: cloneDeep_default()(_this2.$props.align)
      });
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.stopMonitorWindowResize();
  },
  methods: {
    startMonitorWindowResize: function startMonitorWindowResize() {
      if (!this.resizeHandler) {
        this.bufferMonitor = buffer(this.forceAlign, this.$props.monitorBufferTime);
        this.resizeHandler = addEventListenerWrap(window, 'resize', this.bufferMonitor);
      }
    },
    stopMonitorWindowResize: function stopMonitorWindowResize() {
      if (this.resizeHandler) {
        this.bufferMonitor.clear();
        this.resizeHandler.remove();
        this.resizeHandler = null;
      }
    },
    forceAlign: function forceAlign() {
      var _$props = this.$props,
        disabled = _$props.disabled,
        target = _$props.target,
        align = _$props.align;
      if (!disabled && target) {
        var source = this.$el;
        var listeners = getListeners(this);
        var result = void 0;
        var element = getElement(target);
        var point = getPoint(target);

        // IE lose focus after element realign
        // We should record activeElement and restore later
        var activeElement = document.activeElement;
        if (element) {
          result = alignElement(source, element, align);
        } else if (point) {
          result = alignPoint(source, point, align);
        }
        restoreFocus(activeElement, source);
        this.aligned = true;
        listeners.align && listeners.align(source, result);
      }
    }
  },
  render: function render() {
    var childrenProps = this.$props.childrenProps;
    var child = getSlot(this)[0];
    if (child && childrenProps) {
      return cloneElement(child, {
        props: childrenProps
      });
    }
    return child;
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-align/index.js
// based on vc-align 2.4.5

/* harmony default export */ var vc_align = (Align);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-trigger/LazyRenderBox.js

/* harmony default export */ var LazyRenderBox = ({
  props: {
    visible: vue_types.bool,
    hiddenClassName: vue_types.string
  },
  render: function render() {
    var h = arguments[0];
    var _$props = this.$props,
      hiddenClassName = _$props.hiddenClassName,
      visible = _$props.visible;
    var children = null;
    if (hiddenClassName || !this.$slots['default'] || this.$slots['default'].length > 1) {
      var cls = '';
      if (!visible && hiddenClassName) {
        // cls += ` ${hiddenClassName}`
      }
      children = h('div', {
        'class': cls
      }, [this.$slots['default']]);
    } else {
      children = this.$slots['default'][0];
    }
    return children;
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-trigger/PopupInner.js




/* harmony default export */ var PopupInner = ({
  props: {
    hiddenClassName: vue_types.string.def(''),
    prefixCls: vue_types.string,
    visible: vue_types.bool
  },
  render: function render() {
    var h = arguments[0];
    var _$props = this.$props,
      prefixCls = _$props.prefixCls,
      visible = _$props.visible,
      hiddenClassName = _$props.hiddenClassName;
    var divProps = {
      on: getListeners(this)
    };
    return h('div', babel_helper_vue_jsx_merge_props_default()([divProps, {
      'class': !visible ? hiddenClassName : ''
    }]), [h(LazyRenderBox, {
      'class': prefixCls + '-content',
      attrs: {
        visible: visible
      }
    }, [this.$slots['default']])]);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-trigger/Popup.js









/* harmony default export */ var Popup = ({
  name: 'VCTriggerPopup',
  mixins: [BaseMixin],
  props: {
    visible: vue_types.bool,
    getClassNameFromAlign: vue_types.func,
    getRootDomNode: vue_types.func,
    align: vue_types.any,
    destroyPopupOnHide: vue_types.bool,
    prefixCls: vue_types.string,
    getContainer: vue_types.func,
    transitionName: vue_types.string,
    animation: vue_types.any,
    maskAnimation: vue_types.string,
    maskTransitionName: vue_types.string,
    mask: vue_types.bool,
    zIndex: vue_types.number,
    popupClassName: vue_types.any,
    popupStyle: vue_types.object.def(function () {
      return {};
    }),
    stretch: vue_types.string,
    point: vue_types.shape({
      pageX: vue_types.number,
      pageY: vue_types.number
    })
  },
  data: function data() {
    this.domEl = null;
    return {
      // Used for stretch
      stretchChecked: false,
      targetWidth: undefined,
      targetHeight: undefined
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.$nextTick(function () {
      _this.rootNode = _this.getPopupDomNode();
      _this.setStretchSize();
    });
  },
  // 如添加会导致动画失效，如放开会导致快速输入时闪动 https://github.com/vueComponent/ant-design-vue/issues/1327，
  // 目前方案是保留动画，闪动问题(动画多次执行)进一步定位
  // beforeUpdate() {
  //   if (this.domEl && this.domEl.rcEndListener) {
  //     this.domEl.rcEndListener();
  //     this.domEl = null;
  //   }
  // },
  updated: function updated() {
    var _this2 = this;
    this.$nextTick(function () {
      _this2.setStretchSize();
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    } else if (this.$el.remove) {
      this.$el.remove();
    }
  },
  methods: {
    onAlign: function onAlign(popupDomNode, align) {
      var props = this.$props;
      var currentAlignClassName = props.getClassNameFromAlign(align);
      // FIX: https://github.com/react-component/trigger/issues/56
      // FIX: https://github.com/react-component/tooltip/issues/79
      if (this.currentAlignClassName !== currentAlignClassName) {
        this.currentAlignClassName = currentAlignClassName;
        popupDomNode.className = this.getClassName(currentAlignClassName);
      }
      var listeners = getListeners(this);
      listeners.align && listeners.align(popupDomNode, align);
    },
    // Record size if stretch needed
    setStretchSize: function setStretchSize() {
      var _$props = this.$props,
        stretch = _$props.stretch,
        getRootDomNode = _$props.getRootDomNode,
        visible = _$props.visible;
      var _$data = this.$data,
        stretchChecked = _$data.stretchChecked,
        targetHeight = _$data.targetHeight,
        targetWidth = _$data.targetWidth;
      if (!stretch || !visible) {
        if (stretchChecked) {
          this.setState({
            stretchChecked: false
          });
        }
        return;
      }
      var $ele = getRootDomNode();
      if (!$ele) return;
      var height = $ele.offsetHeight;
      var width = $ele.offsetWidth;
      if (targetHeight !== height || targetWidth !== width || !stretchChecked) {
        this.setState({
          stretchChecked: true,
          targetHeight: height,
          targetWidth: width
        });
      }
    },
    getPopupDomNode: function getPopupDomNode() {
      return this.$refs.popupInstance ? this.$refs.popupInstance.$el : null;
    },
    getTargetElement: function getTargetElement() {
      return this.$props.getRootDomNode();
    },
    // `target` on `rc-align` can accept as a function to get the bind element or a point.
    // ref: https://www.npmjs.com/package/rc-align
    getAlignTarget: function getAlignTarget() {
      var point = this.$props.point;
      if (point) {
        return point;
      }
      return this.getTargetElement;
    },
    getMaskTransitionName: function getMaskTransitionName() {
      var props = this.$props;
      var transitionName = props.maskTransitionName;
      var animation = props.maskAnimation;
      if (!transitionName && animation) {
        transitionName = props.prefixCls + '-' + animation;
      }
      return transitionName;
    },
    getTransitionName: function getTransitionName() {
      var props = this.$props;
      var transitionName = props.transitionName;
      var animation = props.animation;
      if (!transitionName) {
        if (typeof animation === 'string') {
          transitionName = '' + animation;
        } else if (animation && animation.props && animation.props.name) {
          transitionName = animation.props.name;
        }
      }
      return transitionName;
    },
    getClassName: function getClassName(currentAlignClassName) {
      return this.$props.prefixCls + ' ' + this.$props.popupClassName + ' ' + currentAlignClassName;
    },
    getPopupElement: function getPopupElement() {
      var _this3 = this;
      var h = this.$createElement;
      var props = this.$props,
        $slots = this.$slots,
        getTransitionName = this.getTransitionName;
      var _$data2 = this.$data,
        stretchChecked = _$data2.stretchChecked,
        targetHeight = _$data2.targetHeight,
        targetWidth = _$data2.targetWidth;
      var align = props.align,
        visible = props.visible,
        prefixCls = props.prefixCls,
        animation = props.animation,
        popupStyle = props.popupStyle,
        getClassNameFromAlign = props.getClassNameFromAlign,
        destroyPopupOnHide = props.destroyPopupOnHide,
        stretch = props.stretch;
      var className = this.getClassName(this.currentAlignClassName || getClassNameFromAlign(align));
      // const hiddenClassName = `${prefixCls}-hidden`
      if (!visible) {
        this.currentAlignClassName = null;
      }
      var sizeStyle = {};
      if (stretch) {
        // Stretch with target
        if (stretch.indexOf('height') !== -1) {
          sizeStyle.height = typeof targetHeight === 'number' ? targetHeight + 'px' : targetHeight;
        } else if (stretch.indexOf('minHeight') !== -1) {
          sizeStyle.minHeight = typeof targetHeight === 'number' ? targetHeight + 'px' : targetHeight;
        }
        if (stretch.indexOf('width') !== -1) {
          sizeStyle.width = typeof targetWidth === 'number' ? targetWidth + 'px' : targetWidth;
        } else if (stretch.indexOf('minWidth') !== -1) {
          sizeStyle.minWidth = typeof targetWidth === 'number' ? targetWidth + 'px' : targetWidth;
        }
        // Delay force align to makes ui smooth
        if (!stretchChecked) {
          // sizeStyle.visibility = 'hidden'
          setTimeout(function () {
            if (_this3.$refs.alignInstance) {
              _this3.$refs.alignInstance.forceAlign();
            }
          }, 0);
        }
      }
      var popupInnerProps = {
        props: {
          prefixCls: prefixCls,
          visible: visible
          // hiddenClassName,
        },

        'class': className,
        on: getListeners(this),
        ref: 'popupInstance',
        style: (0,helpers_extends/* default */.Z)({}, sizeStyle, popupStyle, this.getZIndexStyle())
      };
      var transitionProps = {
        props: {
          appear: true,
          css: false
        }
      };
      var transitionName = getTransitionName();
      var useTransition = !!transitionName;
      var transitionEvent = {
        beforeEnter: function beforeEnter() {
          // el.style.display = el.__vOriginalDisplay
          // this.$refs.alignInstance.forceAlign();
        },
        enter: function enter(el, done) {
          // render 后 vue 会移除通过animate动态添加的 class导致动画闪动，延迟两帧添加动画class，可以进一步定位或者重写 transition 组件
          _this3.$nextTick(function () {
            if (_this3.$refs.alignInstance) {
              _this3.$refs.alignInstance.$nextTick(function () {
                _this3.domEl = el;
                css_animation(el, transitionName + '-enter', done);
              });
            } else {
              done();
            }
          });
        },
        beforeLeave: function beforeLeave() {
          _this3.domEl = null;
        },
        leave: function leave(el, done) {
          css_animation(el, transitionName + '-leave', done);
        }
      };
      if ((typeof animation === 'undefined' ? 'undefined' : (0,helpers_typeof/* default */.Z)(animation)) === 'object') {
        useTransition = true;
        var _animation$on = animation.on,
          on = _animation$on === undefined ? {} : _animation$on,
          _animation$props = animation.props,
          _props = _animation$props === undefined ? {} : _animation$props;
        transitionProps.props = (0,helpers_extends/* default */.Z)({}, transitionProps.props, _props);
        transitionProps.on = (0,helpers_extends/* default */.Z)({}, transitionEvent, on);
      } else {
        transitionProps.on = transitionEvent;
      }
      if (!useTransition) {
        transitionProps = {};
      }
      if (destroyPopupOnHide) {
        return h('transition', transitionProps, [visible ? h(vc_align, {
          attrs: {
            target: this.getAlignTarget(),
            monitorWindowResize: true,
            align: align
          },
          key: 'popup',
          ref: 'alignInstance',
          on: {
            'align': this.onAlign
          }
        }, [h(PopupInner, popupInnerProps, [$slots['default']])]) : null]);
      }
      return h('transition', transitionProps, [h(vc_align, {
        directives: [{
          name: 'show',
          value: visible
        }],
        attrs: {
          target: this.getAlignTarget(),
          monitorWindowResize: true,
          disabled: !visible,
          align: align
        },
        key: 'popup',
        ref: 'alignInstance',
        on: {
          'align': this.onAlign
        }
      }, [h(PopupInner, popupInnerProps, [$slots['default']])])]);
    },
    getZIndexStyle: function getZIndexStyle() {
      var style = {};
      var props = this.$props;
      if (props.zIndex !== undefined) {
        style.zIndex = props.zIndex;
      }
      return style;
    },
    getMaskElement: function getMaskElement() {
      var h = this.$createElement;
      var props = this.$props;
      var maskElement = null;
      if (props.mask) {
        var maskTransition = this.getMaskTransitionName();
        maskElement = h(LazyRenderBox, {
          directives: [{
            name: 'show',
            value: props.visible
          }],
          style: this.getZIndexStyle(),
          key: 'mask',
          'class': props.prefixCls + '-mask',
          attrs: {
            visible: props.visible
          }
        });
        if (maskTransition) {
          maskElement = h('transition', {
            attrs: {
              appear: true,
              name: maskTransition
            }
          }, [maskElement]);
        }
      }
      return maskElement;
    }
  },
  render: function render() {
    var h = arguments[0];
    var getMaskElement = this.getMaskElement,
      getPopupElement = this.getPopupElement;
    return h('div', [getMaskElement(), getPopupElement()]);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-trigger/utils.js

function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return (0,helpers_extends/* default */.Z)({}, baseAlign, align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  for (var placement in builtinPlacements) {
    if (builtinPlacements.hasOwnProperty(placement)) {
      if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
        return prefixCls + '-placement-' + placement;
      }
    }
  }
  return '';
}
function utils_noop() {}
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/ContainerRender.js

/* harmony default export */ var ContainerRender = ({
  props: {
    autoMount: vue_types.bool.def(true),
    autoDestroy: vue_types.bool.def(true),
    visible: vue_types.bool,
    forceRender: vue_types.bool.def(false),
    parent: vue_types.any,
    getComponent: vue_types.func.isRequired,
    getContainer: vue_types.func.isRequired,
    children: vue_types.func.isRequired
  },
  mounted: function mounted() {
    if (this.autoMount) {
      this.renderComponent();
    }
  },
  updated: function updated() {
    if (this.autoMount) {
      this.renderComponent();
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.autoDestroy) {
      this.removeContainer();
    }
  },
  methods: {
    removeContainer: function removeContainer() {
      if (this.container) {
        this._component && this._component.$destroy();
        this.container.parentNode.removeChild(this.container);
        this.container = null;
        this._component = null;
      }
    },
    renderComponent: function renderComponent() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var ready = arguments[1];
      var visible = this.visible,
        forceRender = this.forceRender,
        getContainer = this.getContainer,
        parent = this.parent;
      var self = this;
      if (visible || parent._component || parent.$refs._component || forceRender) {
        var el = this.componentEl;
        if (!this.container) {
          this.container = getContainer();
          el = document.createElement('div');
          this.componentEl = el;
          this.container.appendChild(el);
        }
        // self.getComponent 不要放在 render 中，会因为响应式数据问题导致，多次触发 render
        var com = {
          component: self.getComponent(props)
        };
        if (!this._component) {
          this._component = new this.$root.constructor({
            el: el,
            parent: self,
            data: {
              _com: com
            },
            mounted: function mounted() {
              this.$nextTick(function () {
                if (ready) {
                  ready.call(self);
                }
              });
            },
            updated: function updated() {
              this.$nextTick(function () {
                if (ready) {
                  ready.call(self);
                }
              });
            },
            methods: {
              setComponent: function setComponent(_com) {
                this.$data._com = _com;
              }
            },
            render: function render() {
              return this.$data._com.component;
            }
          });
        } else {
          this._component.setComponent(com);
        }
      }
    }
  },
  render: function render() {
    return this.children({
      renderComponent: this.renderComponent,
      removeContainer: this.removeContainer
    });
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-trigger/Trigger.js















external_commonjs_vue_commonjs2_vue_root_Vue_default().use(vue_ref/* default */.Z, {
  name: 'ant-ref'
});
function returnEmptyString() {
  return '';
}
function returnDocument() {
  return window.document;
}
var ALL_HANDLERS = ['click', 'mousedown', 'touchstart', 'mouseenter', 'mouseleave', 'focus', 'blur', 'contextmenu'];
/* harmony default export */ var Trigger = ({
  name: 'Trigger',
  mixins: [BaseMixin],
  props: {
    action: vue_types.oneOfType([vue_types.string, vue_types.arrayOf(vue_types.string)]).def([]),
    showAction: vue_types.any.def([]),
    hideAction: vue_types.any.def([]),
    getPopupClassNameFromAlign: vue_types.any.def(returnEmptyString),
    // onPopupVisibleChange: PropTypes.func.def(noop),
    afterPopupVisibleChange: vue_types.func.def(utils_noop),
    popup: vue_types.any,
    popupStyle: vue_types.object.def(function () {
      return {};
    }),
    prefixCls: vue_types.string.def('rc-trigger-popup'),
    popupClassName: vue_types.string.def(''),
    popupPlacement: vue_types.string,
    builtinPlacements: vue_types.object,
    popupTransitionName: vue_types.oneOfType([vue_types.string, vue_types.object]),
    popupAnimation: vue_types.any,
    mouseEnterDelay: vue_types.number.def(0),
    mouseLeaveDelay: vue_types.number.def(0.1),
    zIndex: vue_types.number,
    focusDelay: vue_types.number.def(0),
    blurDelay: vue_types.number.def(0.15),
    getPopupContainer: vue_types.func,
    getDocument: vue_types.func.def(returnDocument),
    forceRender: vue_types.bool,
    destroyPopupOnHide: vue_types.bool.def(false),
    mask: vue_types.bool.def(false),
    maskClosable: vue_types.bool.def(true),
    // onPopupAlign: PropTypes.func.def(noop),
    popupAlign: vue_types.object.def(function () {
      return {};
    }),
    popupVisible: vue_types.bool,
    defaultPopupVisible: vue_types.bool.def(false),
    maskTransitionName: vue_types.oneOfType([vue_types.string, vue_types.object]),
    maskAnimation: vue_types.string,
    stretch: vue_types.string,
    alignPoint: vue_types.bool // Maybe we can support user pass position in the future
  },

  provide: function provide() {
    return {
      vcTriggerContext: this
    };
  },
  inject: {
    vcTriggerContext: {
      'default': function _default() {
        return {};
      }
    },
    savePopupRef: {
      'default': function _default() {
        return utils_noop;
      }
    },
    dialogContext: {
      'default': function _default() {
        return null;
      }
    }
  },
  data: function data() {
    var _this = this;
    var props = this.$props;
    var popupVisible = void 0;
    if (hasProp(this, 'popupVisible')) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }
    ALL_HANDLERS.forEach(function (h) {
      _this['fire' + h] = function (e) {
        _this.fireEvents(h, e);
      };
    });
    return {
      prevPopupVisible: popupVisible,
      sPopupVisible: popupVisible,
      point: null
    };
  },
  watch: {
    popupVisible: function popupVisible(val) {
      if (val !== undefined) {
        this.prevPopupVisible = this.sPopupVisible;
        this.sPopupVisible = val;
      }
    }
  },
  deactivated: function deactivated() {
    this.setPopupVisible(false);
  },
  mounted: function mounted() {
    var _this2 = this;
    this.$nextTick(function () {
      _this2.renderComponent(null);
      _this2.updatedCal();
    });
  },
  updated: function updated() {
    var _this3 = this;
    var triggerAfterPopupVisibleChange = function triggerAfterPopupVisibleChange() {
      if (_this3.sPopupVisible !== _this3.prevPopupVisible) {
        _this3.afterPopupVisibleChange(_this3.sPopupVisible);
      }
      _this3.prevPopupVisible = _this3.sPopupVisible;
    };
    this.renderComponent(null, triggerAfterPopupVisibleChange);
    this.$nextTick(function () {
      _this3.updatedCal();
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
    clearTimeout(this.mouseDownTimeout);
  },
  methods: {
    updatedCal: function updatedCal() {
      var props = this.$props;
      var state = this.$data;

      // We must listen to `mousedown` or `touchstart`, edge case:
      // https://github.com/ant-design/ant-design/issues/5804
      // https://github.com/react-component/calendar/issues/250
      // https://github.com/react-component/trigger/issues/50
      if (state.sPopupVisible) {
        var currentDocument = void 0;
        if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextmenuToShow())) {
          currentDocument = props.getDocument();
          this.clickOutsideHandler = addEventListenerWrap(currentDocument, 'mousedown', this.onDocumentClick);
        }
        // always hide on mobile
        if (!this.touchOutsideHandler) {
          currentDocument = currentDocument || props.getDocument();
          this.touchOutsideHandler = addEventListenerWrap(currentDocument, 'touchstart', this.onDocumentClick);
        }
        // close popup when trigger type contains 'onContextmenu' and document is scrolling.
        if (!this.contextmenuOutsideHandler1 && this.isContextmenuToShow()) {
          currentDocument = currentDocument || props.getDocument();
          this.contextmenuOutsideHandler1 = addEventListenerWrap(currentDocument, 'scroll', this.onContextmenuClose);
        }
        // close popup when trigger type contains 'onContextmenu' and window is blur.
        if (!this.contextmenuOutsideHandler2 && this.isContextmenuToShow()) {
          this.contextmenuOutsideHandler2 = addEventListenerWrap(window, 'blur', this.onContextmenuClose);
        }
      } else {
        this.clearOutsideHandler();
      }
    },
    onMouseenter: function onMouseenter(e) {
      var mouseEnterDelay = this.$props.mouseEnterDelay;
      this.fireEvents('mouseenter', e);
      this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
    },
    onMouseMove: function onMouseMove(e) {
      this.fireEvents('mousemove', e);
      this.setPoint(e);
    },
    onMouseleave: function onMouseleave(e) {
      this.fireEvents('mouseleave', e);
      this.delaySetPopupVisible(false, this.$props.mouseLeaveDelay);
    },
    onPopupMouseenter: function onPopupMouseenter() {
      this.clearDelayTimer();
    },
    onPopupMouseleave: function onPopupMouseleave(e) {
      if (e && e.relatedTarget && !e.relatedTarget.setTimeout && this._component && this._component.getPopupDomNode && contains(this._component.getPopupDomNode(), e.relatedTarget)) {
        return;
      }
      this.delaySetPopupVisible(false, this.$props.mouseLeaveDelay);
    },
    onFocus: function onFocus(e) {
      this.fireEvents('focus', e);
      // incase focusin and focusout
      this.clearDelayTimer();
      if (this.isFocusToShow()) {
        this.focusTime = Date.now();
        this.delaySetPopupVisible(true, this.$props.focusDelay);
      }
    },
    onMousedown: function onMousedown(e) {
      this.fireEvents('mousedown', e);
      this.preClickTime = Date.now();
    },
    onTouchstart: function onTouchstart(e) {
      this.fireEvents('touchstart', e);
      this.preTouchTime = Date.now();
    },
    onBlur: function onBlur(e) {
      if (!contains(e.target, e.relatedTarget || document.activeElement)) {
        this.fireEvents('blur', e);
        this.clearDelayTimer();
        if (this.isBlurToHide()) {
          this.delaySetPopupVisible(false, this.$props.blurDelay);
        }
      }
    },
    onContextmenu: function onContextmenu(e) {
      e.preventDefault();
      this.fireEvents('contextmenu', e);
      this.setPopupVisible(true, e);
    },
    onContextmenuClose: function onContextmenuClose() {
      if (this.isContextmenuToShow()) {
        this.close();
      }
    },
    onClick: function onClick(event) {
      this.fireEvents('click', event);
      // focus will trigger click
      if (this.focusTime) {
        var preTime = void 0;
        if (this.preClickTime && this.preTouchTime) {
          preTime = Math.min(this.preClickTime, this.preTouchTime);
        } else if (this.preClickTime) {
          preTime = this.preClickTime;
        } else if (this.preTouchTime) {
          preTime = this.preTouchTime;
        }
        if (Math.abs(preTime - this.focusTime) < 20) {
          return;
        }
        this.focusTime = 0;
      }
      this.preClickTime = 0;
      this.preTouchTime = 0;
      // Only prevent default when all the action is click.
      // https://github.com/ant-design/ant-design/issues/17043
      // https://github.com/ant-design/ant-design/issues/17291
      if (this.isClickToShow() && (this.isClickToHide() || this.isBlurToHide()) && event && event.preventDefault) {
        event.preventDefault();
      }
      if (event && event.domEvent) {
        event.domEvent.preventDefault();
      }
      var nextVisible = !this.$data.sPopupVisible;
      if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
        this.setPopupVisible(!this.$data.sPopupVisible, event);
      }
    },
    onPopupMouseDown: function onPopupMouseDown() {
      var _this4 = this;
      var _vcTriggerContext = this.vcTriggerContext,
        vcTriggerContext = _vcTriggerContext === undefined ? {} : _vcTriggerContext;
      this.hasPopupMouseDown = true;
      clearTimeout(this.mouseDownTimeout);
      this.mouseDownTimeout = setTimeout(function () {
        _this4.hasPopupMouseDown = false;
      }, 0);
      if (vcTriggerContext.onPopupMouseDown) {
        vcTriggerContext.onPopupMouseDown.apply(vcTriggerContext, arguments);
      }
    },
    onDocumentClick: function onDocumentClick(event) {
      if (this.$props.mask && !this.$props.maskClosable) {
        return;
      }
      var target = event.target;
      var root = this.$el;
      if (!contains(root, target) && !this.hasPopupMouseDown) {
        this.close();
      }
    },
    getPopupDomNode: function getPopupDomNode() {
      if (this._component && this._component.getPopupDomNode) {
        return this._component.getPopupDomNode();
      }
      return null;
    },
    getRootDomNode: function getRootDomNode() {
      return this.$el;
      // return this.$el.children[0] || this.$el
    },

    handleGetPopupClassFromAlign: function handleGetPopupClassFromAlign(align) {
      var className = [];
      var props = this.$props;
      var popupPlacement = props.popupPlacement,
        builtinPlacements = props.builtinPlacements,
        prefixCls = props.prefixCls,
        alignPoint = props.alignPoint,
        getPopupClassNameFromAlign = props.getPopupClassNameFromAlign;
      if (popupPlacement && builtinPlacements) {
        className.push(getAlignPopupClassName(builtinPlacements, prefixCls, align, alignPoint));
      }
      if (getPopupClassNameFromAlign) {
        className.push(getPopupClassNameFromAlign(align));
      }
      return className.join(' ');
    },
    getPopupAlign: function getPopupAlign() {
      var props = this.$props;
      var popupPlacement = props.popupPlacement,
        popupAlign = props.popupAlign,
        builtinPlacements = props.builtinPlacements;
      if (popupPlacement && builtinPlacements) {
        return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
      }
      return popupAlign;
    },
    savePopup: function savePopup(node) {
      this._component = node;
      this.savePopupRef(node);
    },
    getComponent: function getComponent() {
      var h = this.$createElement;
      var self = this;
      var mouseProps = {};
      if (this.isMouseEnterToShow()) {
        mouseProps.mouseenter = self.onPopupMouseenter;
      }
      if (this.isMouseLeaveToHide()) {
        mouseProps.mouseleave = self.onPopupMouseleave;
      }
      mouseProps.mousedown = this.onPopupMouseDown;
      mouseProps.touchstart = this.onPopupMouseDown;
      var handleGetPopupClassFromAlign = self.handleGetPopupClassFromAlign,
        getRootDomNode = self.getRootDomNode,
        getContainer = self.getContainer;
      var _self$$props = self.$props,
        prefixCls = _self$$props.prefixCls,
        destroyPopupOnHide = _self$$props.destroyPopupOnHide,
        popupClassName = _self$$props.popupClassName,
        action = _self$$props.action,
        popupAnimation = _self$$props.popupAnimation,
        popupTransitionName = _self$$props.popupTransitionName,
        popupStyle = _self$$props.popupStyle,
        mask = _self$$props.mask,
        maskAnimation = _self$$props.maskAnimation,
        maskTransitionName = _self$$props.maskTransitionName,
        zIndex = _self$$props.zIndex,
        stretch = _self$$props.stretch,
        alignPoint = _self$$props.alignPoint;
      var _$data = this.$data,
        sPopupVisible = _$data.sPopupVisible,
        point = _$data.point;
      var align = this.getPopupAlign();
      var popupProps = {
        props: {
          prefixCls: prefixCls,
          destroyPopupOnHide: destroyPopupOnHide,
          visible: sPopupVisible,
          point: alignPoint && point,
          action: action,
          align: align,
          animation: popupAnimation,
          getClassNameFromAlign: handleGetPopupClassFromAlign,
          stretch: stretch,
          getRootDomNode: getRootDomNode,
          mask: mask,
          zIndex: zIndex,
          transitionName: popupTransitionName,
          maskAnimation: maskAnimation,
          maskTransitionName: maskTransitionName,
          getContainer: getContainer,
          popupClassName: popupClassName,
          popupStyle: popupStyle
        },
        on: (0,helpers_extends/* default */.Z)({
          align: getListeners(this).popupAlign || utils_noop
        }, mouseProps),
        directives: [{
          name: 'ant-ref',
          value: this.savePopup
        }]
      };
      return h(Popup, popupProps, [getComponentFromProp(self, 'popup')]);
    },
    getContainer: function getContainer() {
      var props = this.$props,
        dialogContext = this.dialogContext;
      var popupContainer = document.createElement('div');
      // Make sure default popup container will never cause scrollbar appearing
      // https://github.com/react-component/trigger/issues/41
      popupContainer.style.position = 'absolute';
      popupContainer.style.top = '0';
      popupContainer.style.left = '0';
      popupContainer.style.width = '100%';
      var mountNode = props.getPopupContainer ? props.getPopupContainer(this.$el, dialogContext) : props.getDocument().body;
      mountNode.appendChild(popupContainer);
      this.popupContainer = popupContainer;
      return popupContainer;
    },
    setPopupVisible: function setPopupVisible(sPopupVisible, event) {
      var alignPoint = this.alignPoint,
        prevPopupVisible = this.sPopupVisible;
      this.clearDelayTimer();
      if (prevPopupVisible !== sPopupVisible) {
        if (!hasProp(this, 'popupVisible')) {
          this.setState({
            sPopupVisible: sPopupVisible,
            prevPopupVisible: prevPopupVisible
          });
        }
        var listeners = getListeners(this);
        listeners.popupVisibleChange && listeners.popupVisibleChange(sPopupVisible);
      }
      // Always record the point position since mouseEnterDelay will delay the show
      if (alignPoint && event) {
        this.setPoint(event);
      }
    },
    setPoint: function setPoint(point) {
      var alignPoint = this.$props.alignPoint;
      if (!alignPoint || !point) return;
      this.setState({
        point: {
          pageX: point.pageX,
          pageY: point.pageY
        }
      });
    },
    delaySetPopupVisible: function delaySetPopupVisible(visible, delayS, event) {
      var _this5 = this;
      var delay = delayS * 1000;
      this.clearDelayTimer();
      if (delay) {
        var point = event ? {
          pageX: event.pageX,
          pageY: event.pageY
        } : null;
        this.delayTimer = requestAnimationTimeout(function () {
          _this5.setPopupVisible(visible, point);
          _this5.clearDelayTimer();
        }, delay);
      } else {
        this.setPopupVisible(visible, event);
      }
    },
    clearDelayTimer: function clearDelayTimer() {
      if (this.delayTimer) {
        cancelAnimationTimeout(this.delayTimer);
        this.delayTimer = null;
      }
    },
    clearOutsideHandler: function clearOutsideHandler() {
      if (this.clickOutsideHandler) {
        this.clickOutsideHandler.remove();
        this.clickOutsideHandler = null;
      }
      if (this.contextmenuOutsideHandler1) {
        this.contextmenuOutsideHandler1.remove();
        this.contextmenuOutsideHandler1 = null;
      }
      if (this.contextmenuOutsideHandler2) {
        this.contextmenuOutsideHandler2.remove();
        this.contextmenuOutsideHandler2 = null;
      }
      if (this.touchOutsideHandler) {
        this.touchOutsideHandler.remove();
        this.touchOutsideHandler = null;
      }
    },
    createTwoChains: function createTwoChains(event) {
      var fn = function fn() {};
      var events = getListeners(this);
      if (this.childOriginEvents[event] && events[event]) {
        return this['fire' + event];
      }
      fn = this.childOriginEvents[event] || events[event] || fn;
      return fn;
    },
    isClickToShow: function isClickToShow() {
      var _$props = this.$props,
        action = _$props.action,
        showAction = _$props.showAction;
      return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
    },
    isContextmenuToShow: function isContextmenuToShow() {
      var _$props2 = this.$props,
        action = _$props2.action,
        showAction = _$props2.showAction;
      return action.indexOf('contextmenu') !== -1 || showAction.indexOf('contextmenu') !== -1;
    },
    isClickToHide: function isClickToHide() {
      var _$props3 = this.$props,
        action = _$props3.action,
        hideAction = _$props3.hideAction;
      return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
    },
    isMouseEnterToShow: function isMouseEnterToShow() {
      var _$props4 = this.$props,
        action = _$props4.action,
        showAction = _$props4.showAction;
      return action.indexOf('hover') !== -1 || showAction.indexOf('mouseenter') !== -1;
    },
    isMouseLeaveToHide: function isMouseLeaveToHide() {
      var _$props5 = this.$props,
        action = _$props5.action,
        hideAction = _$props5.hideAction;
      return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseleave') !== -1;
    },
    isFocusToShow: function isFocusToShow() {
      var _$props6 = this.$props,
        action = _$props6.action,
        showAction = _$props6.showAction;
      return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
    },
    isBlurToHide: function isBlurToHide() {
      var _$props7 = this.$props,
        action = _$props7.action,
        hideAction = _$props7.hideAction;
      return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
    },
    forcePopupAlign: function forcePopupAlign() {
      if (this.$data.sPopupVisible && this._component && this._component.$refs.alignInstance) {
        this._component.$refs.alignInstance.forceAlign();
      }
    },
    fireEvents: function fireEvents(type, e) {
      if (this.childOriginEvents[type]) {
        this.childOriginEvents[type](e);
      }
      this.__emit(type, e);
    },
    close: function close() {
      this.setPopupVisible(false);
    }
  },
  render: function render() {
    var _this6 = this;
    var h = arguments[0];
    var sPopupVisible = this.sPopupVisible;
    var children = filterEmpty(this.$slots['default']);
    var _$props8 = this.$props,
      forceRender = _$props8.forceRender,
      alignPoint = _$props8.alignPoint;
    if (children.length > 1) {
      _util_warning(false, 'Trigger $slots.default.length > 1, just support only one default', true);
    }
    var child = children[0];
    this.childOriginEvents = getDataEvents(child);
    var newChildProps = {
      props: {},
      nativeOn: {},
      key: 'trigger'
    };
    if (this.isContextmenuToShow()) {
      newChildProps.nativeOn.contextmenu = this.onContextmenu;
    } else {
      newChildProps.nativeOn.contextmenu = this.createTwoChains('contextmenu');
    }
    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.nativeOn.click = this.onClick;
      newChildProps.nativeOn.mousedown = this.onMousedown;
      newChildProps.nativeOn.touchstart = this.onTouchstart;
    } else {
      newChildProps.nativeOn.click = this.createTwoChains('click');
      newChildProps.nativeOn.mousedown = this.createTwoChains('mousedown');
      newChildProps.nativeOn.touchstart = this.createTwoChains('onTouchstart');
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.nativeOn.mouseenter = this.onMouseenter;
      if (alignPoint) {
        newChildProps.nativeOn.mousemove = this.onMouseMove;
      }
    } else {
      newChildProps.nativeOn.mouseenter = this.createTwoChains('mouseenter');
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.nativeOn.mouseleave = this.onMouseleave;
    } else {
      newChildProps.nativeOn.mouseleave = this.createTwoChains('mouseleave');
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.nativeOn.focus = this.onFocus;
      newChildProps.nativeOn.blur = this.onBlur;
    } else {
      newChildProps.nativeOn.focus = this.createTwoChains('focus');
      newChildProps.nativeOn.blur = function (e) {
        if (e && (!e.relatedTarget || !contains(e.target, e.relatedTarget))) {
          _this6.createTwoChains('blur')(e);
        }
      };
    }
    this.trigger = cloneElement(child, newChildProps);
    return h(ContainerRender, {
      attrs: {
        parent: this,
        visible: sPopupVisible,
        autoMount: false,
        forceRender: forceRender,
        getComponent: this.getComponent,
        getContainer: this.getContainer,
        children: function children(_ref) {
          var renderComponent = _ref.renderComponent;
          _this6.renderComponent = renderComponent;
          return _this6.trigger;
        }
      }
    });
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-trigger/index.js
// based on rc-trigger 2.6.5

/* harmony default export */ var vc_trigger = (Trigger);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/store/create.js


function create_create(initialState) {
  var state = initialState;
  var listeners = [];
  function setState(partial) {
    state = (0,helpers_extends/* default */.Z)({}, state, partial);
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }
  function getState() {
    return state;
  }
  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      var index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }
  return {
    setState: setState,
    getState: getState,
    subscribe: subscribe
  };
}
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/store/PropTypes.js

var storeShape = vue_types.shape({
  subscribe: vue_types.func.isRequired,
  setState: vue_types.func.isRequired,
  getState: vue_types.func.isRequired
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/store/Provider.js

/* harmony default export */ var Provider = ({
  name: 'StoreProvider',
  props: {
    store: storeShape.isRequired
  },
  provide: function provide() {
    return {
      storeContext: this.$props
    };
  },
  render: function render() {
    return this.$slots['default'][0];
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-menu/placements.js
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};
/* harmony default export */ var vc_menu_placements = (placements);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-menu/SubMenu.js
















var guid = 0;
var popupPlacementMap = {
  horizontal: 'bottomLeft',
  vertical: 'rightTop',
  'vertical-left': 'rightTop',
  'vertical-right': 'leftTop'
};
var updateDefaultActiveFirst = function updateDefaultActiveFirst(store, eventKey, defaultActiveFirst) {
  var menuId = getMenuIdFromSubMenuEventKey(eventKey);
  var state = store.getState();
  store.setState({
    defaultActiveFirst: (0,helpers_extends/* default */.Z)({}, state.defaultActiveFirst, (0,defineProperty/* default */.Z)({}, menuId, defaultActiveFirst))
  });
};
var SubMenu = {
  name: 'SubMenu',
  props: {
    parentMenu: vue_types.object,
    title: vue_types.any,
    selectedKeys: vue_types.array.def([]),
    openKeys: vue_types.array.def([]),
    openChange: vue_types.func.def(util_noop),
    rootPrefixCls: vue_types.string,
    eventKey: vue_types.oneOfType([vue_types.string, vue_types.number]),
    multiple: vue_types.bool,
    active: vue_types.bool,
    // TODO: remove
    isRootMenu: vue_types.bool.def(false),
    index: vue_types.number,
    triggerSubMenuAction: vue_types.string,
    popupClassName: vue_types.string,
    getPopupContainer: vue_types.func,
    forceSubMenuRender: vue_types.bool,
    openAnimation: vue_types.oneOfType([vue_types.string, vue_types.object]),
    disabled: vue_types.bool,
    subMenuOpenDelay: vue_types.number.def(0.1),
    subMenuCloseDelay: vue_types.number.def(0.1),
    level: vue_types.number.def(1),
    inlineIndent: vue_types.number.def(24),
    openTransitionName: vue_types.string,
    popupOffset: vue_types.array,
    isOpen: vue_types.bool,
    store: vue_types.object,
    mode: vue_types.oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']).def('vertical'),
    manualRef: vue_types.func.def(util_noop),
    builtinPlacements: vue_types.object.def(function () {
      return {};
    }),
    itemIcon: vue_types.any,
    expandIcon: vue_types.any,
    subMenuKey: vue_types.string
  },
  mixins: [BaseMixin],
  isSubMenu: true,
  data: function data() {
    var props = this.$props;
    var store = props.store;
    var eventKey = props.eventKey;
    var defaultActiveFirst = store.getState().defaultActiveFirst;
    var value = false;
    if (defaultActiveFirst) {
      value = defaultActiveFirst[eventKey];
    }
    updateDefaultActiveFirst(store, eventKey, value);
    return {
      // defaultActiveFirst: false,
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.$nextTick(function () {
      _this.handleUpdated();
    });
  },
  updated: function updated() {
    var _this2 = this;
    this.$nextTick(function () {
      _this2.handleUpdated();
    });
  },
  beforeDestroy: function beforeDestroy() {
    var eventKey = this.eventKey;
    this.__emit('destroy', eventKey);

    /* istanbul ignore if */
    if (this.minWidthTimeout) {
      cancelAnimationTimeout(this.minWidthTimeout);
      this.minWidthTimeout = null;
    }

    /* istanbul ignore if */
    if (this.mouseenterTimeout) {
      cancelAnimationTimeout(this.mouseenterTimeout);
      this.mouseenterTimeout = null;
    }
  },
  methods: {
    handleUpdated: function handleUpdated() {
      var _this3 = this;
      var _$props = this.$props,
        mode = _$props.mode,
        parentMenu = _$props.parentMenu,
        manualRef = _$props.manualRef;

      // invoke customized ref to expose component to mixin

      if (manualRef) {
        manualRef(this);
      }
      if (mode !== 'horizontal' || !parentMenu.isRootMenu || !this.isOpen) {
        return;
      }
      this.minWidthTimeout = requestAnimationTimeout(function () {
        return _this3.adjustWidth();
      }, 0);
    },
    onKeyDown: function onKeyDown(e) {
      var keyCode = e.keyCode;
      var menu = this.menuInstance;
      var _$props2 = this.$props,
        store = _$props2.store,
        isOpen = _$props2.isOpen;
      if (keyCode === _util_KeyCode.ENTER) {
        this.onTitleClick(e);
        updateDefaultActiveFirst(store, this.eventKey, true);
        return true;
      }
      if (keyCode === _util_KeyCode.RIGHT) {
        if (isOpen) {
          menu.onKeyDown(e);
        } else {
          this.triggerOpenChange(true);
          // need to update current menu's defaultActiveFirst value
          updateDefaultActiveFirst(store, this.eventKey, true);
        }
        return true;
      }
      if (keyCode === _util_KeyCode.LEFT) {
        var handled = void 0;
        if (isOpen) {
          handled = menu.onKeyDown(e);
        } else {
          return undefined;
        }
        if (!handled) {
          this.triggerOpenChange(false);
          handled = true;
        }
        return handled;
      }
      if (isOpen && (keyCode === _util_KeyCode.UP || keyCode === _util_KeyCode.DOWN)) {
        return menu.onKeyDown(e);
      }
      return undefined;
    },
    onPopupVisibleChange: function onPopupVisibleChange(visible) {
      this.triggerOpenChange(visible, visible ? 'mouseenter' : 'mouseleave');
    },
    onMouseEnter: function onMouseEnter(e) {
      var _$props3 = this.$props,
        key = _$props3.eventKey,
        store = _$props3.store;
      updateDefaultActiveFirst(store, key, false);
      this.__emit('mouseenter', {
        key: key,
        domEvent: e
      });
    },
    onMouseLeave: function onMouseLeave(e) {
      var eventKey = this.eventKey,
        parentMenu = this.parentMenu;
      parentMenu.subMenuInstance = this;
      // parentMenu.subMenuLeaveFn = () => {
      // // trigger mouseleave
      //   this.__emit('mouseleave', {
      //     key: eventKey,
      //     domEvent: e,
      //   })
      // }
      this.__emit('mouseleave', {
        key: eventKey,
        domEvent: e
      });
      // prevent popup menu and submenu gap
      // parentMenu.subMenuLeaveTimer = setTimeout(parentMenu.subMenuLeaveFn, 100)
    },

    onTitleMouseEnter: function onTitleMouseEnter(domEvent) {
      var key = this.$props.eventKey;
      // this.clearSubMenuTitleLeaveTimer()

      this.__emit('itemHover', {
        key: key,
        hover: true
      });
      this.__emit('titleMouseenter', {
        key: key,
        domEvent: domEvent
      });
    },
    onTitleMouseLeave: function onTitleMouseLeave(e) {
      var eventKey = this.eventKey,
        parentMenu = this.parentMenu;
      parentMenu.subMenuInstance = this;
      this.__emit('itemHover', {
        key: eventKey,
        hover: false
      });
      this.__emit('titleMouseleave', {
        key: eventKey,
        domEvent: e
      });
    },
    onTitleClick: function onTitleClick(e) {
      var _$props4 = this.$props,
        triggerSubMenuAction = _$props4.triggerSubMenuAction,
        eventKey = _$props4.eventKey,
        isOpen = _$props4.isOpen,
        store = _$props4.store;
      this.__emit('titleClick', {
        key: eventKey,
        domEvent: e
      });
      if (triggerSubMenuAction === 'hover') {
        return;
      }
      this.triggerOpenChange(!isOpen, 'click');
      updateDefaultActiveFirst(store, eventKey, false);
    },
    onSubMenuClick: function onSubMenuClick(info) {
      this.__emit('click', this.addKeyPath(info));
    },
    getPrefixCls: function getPrefixCls() {
      return this.$props.rootPrefixCls + '-submenu';
    },
    getActiveClassName: function getActiveClassName() {
      return this.getPrefixCls() + '-active';
    },
    getDisabledClassName: function getDisabledClassName() {
      return this.getPrefixCls() + '-disabled';
    },
    getSelectedClassName: function getSelectedClassName() {
      return this.getPrefixCls() + '-selected';
    },
    getOpenClassName: function getOpenClassName() {
      return this.$props.rootPrefixCls + '-submenu-open';
    },
    saveMenuInstance: function saveMenuInstance(c) {
      // children menu instance
      this.menuInstance = c;
    },
    addKeyPath: function addKeyPath(info) {
      return (0,helpers_extends/* default */.Z)({}, info, {
        keyPath: (info.keyPath || []).concat(this.$props.eventKey)
      });
    },
    // triggerOpenChange (open, type) {
    //   const key = this.$props.eventKey
    //   this.__emit('openChange', {
    //     key,
    //     item: this,
    //     trigger: type,
    //     open,
    //   })
    // },
    triggerOpenChange: function triggerOpenChange(open, type) {
      var _this4 = this;
      var key = this.$props.eventKey;
      var openChange = function openChange() {
        _this4.__emit('openChange', {
          key: key,
          item: _this4,
          trigger: type,
          open: open
        });
      };
      if (type === 'mouseenter') {
        // make sure mouseenter happen after other menu item's mouseleave
        this.mouseenterTimeout = requestAnimationTimeout(function () {
          openChange();
        }, 0);
      } else {
        openChange();
      }
    },
    isChildrenSelected: function isChildrenSelected() {
      var ret = {
        find: false
      };
      loopMenuItemRecursively(this.$slots['default'], this.$props.selectedKeys, ret);
      return ret.find;
    },
    // isOpen () {
    //   return this.$props.openKeys.indexOf(this.$props.eventKey) !== -1
    // },

    adjustWidth: function adjustWidth() {
      /* istanbul ignore if */
      if (!this.$refs.subMenuTitle || !this.menuInstance) {
        return;
      }
      var popupMenu = this.menuInstance.$el;
      if (popupMenu.offsetWidth >= this.$refs.subMenuTitle.offsetWidth) {
        return;
      }

      /* istanbul ignore next */
      popupMenu.style.minWidth = this.$refs.subMenuTitle.offsetWidth + 'px';
    },
    renderChildren: function renderChildren(children) {
      var h = this.$createElement;
      var props = this.$props;
      var _getListeners = getListeners(this),
        select = _getListeners.select,
        deselect = _getListeners.deselect,
        openChange = _getListeners.openChange;
      var subPopupMenuProps = {
        props: {
          mode: props.mode === 'horizontal' ? 'vertical' : props.mode,
          visible: props.isOpen,
          level: props.level + 1,
          inlineIndent: props.inlineIndent,
          focusable: false,
          selectedKeys: props.selectedKeys,
          eventKey: props.eventKey + '-menu-',
          openKeys: props.openKeys,
          openTransitionName: props.openTransitionName,
          openAnimation: props.openAnimation,
          subMenuOpenDelay: props.subMenuOpenDelay,
          parentMenu: this,
          subMenuCloseDelay: props.subMenuCloseDelay,
          forceSubMenuRender: props.forceSubMenuRender,
          triggerSubMenuAction: props.triggerSubMenuAction,
          builtinPlacements: props.builtinPlacements,
          defaultActiveFirst: props.store.getState().defaultActiveFirst[getMenuIdFromSubMenuEventKey(props.eventKey)],
          multiple: props.multiple,
          prefixCls: props.rootPrefixCls,
          manualRef: this.saveMenuInstance,
          itemIcon: getComponentFromProp(this, 'itemIcon'),
          expandIcon: getComponentFromProp(this, 'expandIcon'),
          children: children
        },
        on: {
          click: this.onSubMenuClick,
          select: select,
          deselect: deselect,
          openChange: openChange
        },
        id: this.internalMenuId
      };
      var baseProps = subPopupMenuProps.props;
      var haveRendered = this.haveRendered;
      this.haveRendered = true;
      this.haveOpened = this.haveOpened || baseProps.visible || baseProps.forceSubMenuRender;
      // never rendered not planning to, don't render
      if (!this.haveOpened) {
        return h('div');
      }

      // don't show transition on first rendering (no animation for opened menu)
      // show appear transition if it's not visible (not sure why)
      // show appear transition if it's not inline mode
      var transitionAppear = haveRendered || !baseProps.visible || !baseProps.mode === 'inline';
      subPopupMenuProps['class'] = ' ' + baseProps.prefixCls + '-sub';
      var animProps = {
        appear: transitionAppear,
        css: false
      };
      var transitionProps = {
        props: animProps,
        on: {}
      };
      if (baseProps.openTransitionName) {
        transitionProps = _util_getTransitionProps(baseProps.openTransitionName, {
          appear: transitionAppear
        });
      } else if ((0,helpers_typeof/* default */.Z)(baseProps.openAnimation) === 'object') {
        animProps = (0,helpers_extends/* default */.Z)({}, animProps, baseProps.openAnimation.props || {});
        if (!transitionAppear) {
          animProps.appear = false;
        }
      } else if (typeof baseProps.openAnimation === 'string') {
        transitionProps = _util_getTransitionProps(baseProps.openAnimation, {
          appear: transitionAppear
        });
      }
      if ((0,helpers_typeof/* default */.Z)(baseProps.openAnimation) === 'object' && baseProps.openAnimation.on) {
        transitionProps.on = baseProps.openAnimation.on;
      }
      return h('transition', transitionProps, [h(vc_menu_SubPopupMenu, babel_helper_vue_jsx_merge_props_default()([{
        directives: [{
          name: 'show',
          value: props.isOpen
        }]
      }, subPopupMenuProps]))]);
    }
  },
  render: function render() {
    var _className, _attrs;
    var h = arguments[0];
    var props = this.$props;
    var rootPrefixCls = this.rootPrefixCls,
      parentMenu = this.parentMenu;
    var isOpen = props.isOpen;
    var prefixCls = this.getPrefixCls();
    var isInlineMode = props.mode === 'inline';
    var className = (_className = {}, (0,defineProperty/* default */.Z)(_className, prefixCls, true), (0,defineProperty/* default */.Z)(_className, prefixCls + '-' + props.mode, true), (0,defineProperty/* default */.Z)(_className, this.getOpenClassName(), isOpen), (0,defineProperty/* default */.Z)(_className, this.getActiveClassName(), props.active || isOpen && !isInlineMode), (0,defineProperty/* default */.Z)(_className, this.getDisabledClassName(), props.disabled), (0,defineProperty/* default */.Z)(_className, this.getSelectedClassName(), this.isChildrenSelected()), _className);
    if (!this.internalMenuId) {
      if (props.eventKey) {
        this.internalMenuId = props.eventKey + '$Menu';
      } else {
        this.internalMenuId = '$__$' + ++guid + '$Menu';
      }
    }
    var mouseEvents = {};
    var titleClickEvents = {};
    var titleMouseEvents = {};
    if (!props.disabled) {
      mouseEvents = {
        mouseleave: this.onMouseLeave,
        mouseenter: this.onMouseEnter
      };

      // only works in title, not outer li
      titleClickEvents = {
        click: this.onTitleClick
      };
      titleMouseEvents = {
        mouseenter: this.onTitleMouseEnter,
        mouseleave: this.onTitleMouseLeave
      };
    }
    var style = {};
    if (isInlineMode) {
      style.paddingLeft = props.inlineIndent * props.level + 'px';
    }
    var ariaOwns = {};
    // only set aria-owns when menu is open
    // otherwise it would be an invalid aria-owns value
    // since corresponding node cannot be found
    if (isOpen) {
      ariaOwns = {
        'aria-owns': this.internalMenuId
      };
    }
    var titleProps = {
      attrs: (0,helpers_extends/* default */.Z)({
        'aria-expanded': isOpen
      }, ariaOwns, {
        'aria-haspopup': 'true',
        title: typeof props.title === 'string' ? props.title : undefined
      }),
      on: (0,helpers_extends/* default */.Z)({}, titleMouseEvents, titleClickEvents),
      style: style,
      'class': prefixCls + '-title',
      ref: 'subMenuTitle'
    };
    // expand custom icon should NOT be displayed in menu with horizontal mode.
    var icon = null;
    if (props.mode !== 'horizontal') {
      icon = getComponentFromProp(this, 'expandIcon', props);
    }
    var title = h('div', titleProps, [getComponentFromProp(this, 'title'), icon || h('i', {
      'class': prefixCls + '-arrow'
    })]);
    var children = this.renderChildren(filterEmpty(this.$slots['default']));
    var getPopupContainer = this.parentMenu.isRootMenu ? this.parentMenu.getPopupContainer : function (triggerNode) {
      return triggerNode.parentNode;
    };
    var popupPlacement = popupPlacementMap[props.mode];
    var popupAlign = props.popupOffset ? {
      offset: props.popupOffset
    } : {};
    var popupClassName = props.mode === 'inline' ? '' : props.popupClassName;
    var liProps = {
      on: (0,helpers_extends/* default */.Z)({}, omit_js_es(getListeners(this), ['click']), mouseEvents),
      'class': className
    };
    return h('li', babel_helper_vue_jsx_merge_props_default()([liProps, {
      attrs: {
        role: 'menuitem'
      }
    }]), [isInlineMode && title, isInlineMode && children, !isInlineMode && h(vc_trigger, {
      attrs: (_attrs = {
        prefixCls: prefixCls,
        popupClassName: prefixCls + '-popup ' + rootPrefixCls + '-' + parentMenu.theme + ' ' + (popupClassName || ''),
        getPopupContainer: getPopupContainer,
        builtinPlacements: vc_menu_placements
      }, (0,defineProperty/* default */.Z)(_attrs, 'builtinPlacements', (0,helpers_extends/* default */.Z)({}, vc_menu_placements, props.builtinPlacements)), (0,defineProperty/* default */.Z)(_attrs, 'popupPlacement', popupPlacement), (0,defineProperty/* default */.Z)(_attrs, 'popupVisible', isOpen), (0,defineProperty/* default */.Z)(_attrs, 'popupAlign', popupAlign), (0,defineProperty/* default */.Z)(_attrs, 'action', props.disabled ? [] : [props.triggerSubMenuAction]), (0,defineProperty/* default */.Z)(_attrs, 'mouseEnterDelay', props.subMenuOpenDelay), (0,defineProperty/* default */.Z)(_attrs, 'mouseLeaveDelay', props.subMenuCloseDelay), (0,defineProperty/* default */.Z)(_attrs, 'forceRender', props.forceSubMenuRender), _attrs),
      on: {
        'popupVisibleChange': this.onPopupVisibleChange
      }
    }, [h('template', {
      slot: 'popup'
    }, [children]), title])]);
  }
};
var SubMenu_connected = connect(function (_ref, _ref2) {
  var openKeys = _ref.openKeys,
    activeKey = _ref.activeKey,
    selectedKeys = _ref.selectedKeys;
  var eventKey = _ref2.eventKey,
    subMenuKey = _ref2.subMenuKey;
  return {
    isOpen: openKeys.indexOf(eventKey) > -1,
    active: activeKey[subMenuKey] === eventKey,
    selectedKeys: selectedKeys
  };
})(SubMenu);
SubMenu_connected.isSubMenu = true;
/* harmony default export */ var vc_menu_SubMenu = (SubMenu_connected);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-menu/DOMWrap.js











var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var MENUITEM_OVERFLOWED_CLASSNAME = 'menuitem-overflowed';
var FLOAT_PRECISION_ADJUST = 0.5;

// Fix ssr
if (canUseDOM) {
  __webpack_require__(6573);
}
var DOMWrap = {
  name: 'DOMWrap',
  mixins: [BaseMixin],
  data: function data() {
    this.resizeObserver = null;
    this.mutationObserver = null;

    // original scroll size of the list
    this.originalTotalWidth = 0;

    // copy of overflowed items
    this.overflowedItems = [];

    // cache item of the original items (so we can track the size and order)
    this.menuItemSizes = [];
    return {
      lastVisibleIndex: undefined
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.$nextTick(function () {
      _this.setChildrenWidthAndResize();
      if (_this.level === 1 && _this.mode === 'horizontal') {
        var menuUl = _this.$el;
        if (!menuUl) {
          return;
        }
        _this.resizeObserver = new ResizeObserver_es(function (entries) {
          entries.forEach(_this.setChildrenWidthAndResize);
        });
        [].slice.call(menuUl.children).concat(menuUl).forEach(function (el) {
          _this.resizeObserver.observe(el);
        });
        if (typeof MutationObserver !== 'undefined') {
          _this.mutationObserver = new MutationObserver(function () {
            _this.resizeObserver.disconnect();
            [].slice.call(menuUl.children).concat(menuUl).forEach(function (el) {
              _this.resizeObserver.observe(el);
            });
            _this.setChildrenWidthAndResize();
          });
          _this.mutationObserver.observe(menuUl, {
            attributes: false,
            childList: true,
            subTree: false
          });
        }
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  },
  methods: {
    // get all valid menuItem nodes
    getMenuItemNodes: function getMenuItemNodes() {
      var prefixCls = this.$props.prefixCls;
      var ul = this.$el;
      if (!ul) {
        return [];
      }

      // filter out all overflowed indicator placeholder
      return [].slice.call(ul.children).filter(function (node) {
        return node.className.split(' ').indexOf(prefixCls + '-overflowed-submenu') < 0;
      });
    },
    getOverflowedSubMenuItem: function getOverflowedSubMenuItem(keyPrefix, overflowedItems, renderPlaceholder) {
      var h = this.$createElement;
      var _$props = this.$props,
        overflowedIndicator = _$props.overflowedIndicator,
        level = _$props.level,
        mode = _$props.mode,
        prefixCls = _$props.prefixCls,
        theme = _$props.theme;
      if (level !== 1 || mode !== 'horizontal') {
        return null;
      }
      // put all the overflowed item inside a submenu
      // with a title of overflow indicator ('...')
      var copy = this.$slots['default'][0];
      var _getPropsData = getPropsData(copy),
        title = _getPropsData.title,
        rest = (0,objectWithoutProperties/* default */.Z)(_getPropsData, ['title']); // eslint-disable-line no-unused-vars

      var events = getEvents(copy);
      var style = {};
      var key = keyPrefix + '-overflowed-indicator';
      var eventKey = keyPrefix + '-overflowed-indicator';
      if (overflowedItems.length === 0 && renderPlaceholder !== true) {
        style = {
          display: 'none'
        };
      } else if (renderPlaceholder) {
        style = {
          visibility: 'hidden',
          // prevent from taking normal dom space
          position: 'absolute'
        };
        key = key + '-placeholder';
        eventKey = eventKey + '-placeholder';
      }
      var popupClassName = theme ? prefixCls + '-' + theme : '';
      var props = {};
      var on = {};
      menuAllProps.props.forEach(function (k) {
        if (rest[k] !== undefined) {
          props[k] = rest[k];
        }
      });
      menuAllProps.on.forEach(function (k) {
        if (events[k] !== undefined) {
          on[k] = events[k];
        }
      });
      var subMenuProps = {
        props: (0,helpers_extends/* default */.Z)({
          title: overflowedIndicator,
          popupClassName: popupClassName
        }, props, {
          eventKey: eventKey,
          disabled: false
        }),
        'class': prefixCls + '-overflowed-submenu',
        key: key,
        style: style,
        on: on
      };
      return h(vc_menu_SubMenu, subMenuProps, [overflowedItems]);
    },
    // memorize rendered menuSize
    setChildrenWidthAndResize: function setChildrenWidthAndResize() {
      if (this.mode !== 'horizontal') {
        return;
      }
      var ul = this.$el;
      if (!ul) {
        return;
      }
      var ulChildrenNodes = ul.children;
      if (!ulChildrenNodes || ulChildrenNodes.length === 0) {
        return;
      }
      var lastOverflowedIndicatorPlaceholder = ul.children[ulChildrenNodes.length - 1];

      // need last overflowed indicator for calculating length;
      setStyle(lastOverflowedIndicatorPlaceholder, 'display', 'inline-block');
      var menuItemNodes = this.getMenuItemNodes();

      // reset display attribute for all hidden elements caused by overflow to calculate updated width
      // and then reset to original state after width calculation

      var overflowedItems = menuItemNodes.filter(function (c) {
        return c.className.split(' ').indexOf(MENUITEM_OVERFLOWED_CLASSNAME) >= 0;
      });
      overflowedItems.forEach(function (c) {
        setStyle(c, 'display', 'inline-block');
      });
      this.menuItemSizes = menuItemNodes.map(function (c) {
        return getWidth(c);
      });
      overflowedItems.forEach(function (c) {
        setStyle(c, 'display', 'none');
      });
      this.overflowedIndicatorWidth = getWidth(ul.children[ul.children.length - 1]);
      this.originalTotalWidth = this.menuItemSizes.reduce(function (acc, cur) {
        return acc + cur;
      }, 0);
      this.handleResize();
      // prevent the overflowed indicator from taking space;
      setStyle(lastOverflowedIndicatorPlaceholder, 'display', 'none');
    },
    handleResize: function handleResize() {
      var _this2 = this;
      if (this.mode !== 'horizontal') {
        return;
      }
      var ul = this.$el;
      if (!ul) {
        return;
      }
      var width = getWidth(ul);
      this.overflowedItems = [];
      var currentSumWidth = 0;

      // index for last visible child in horizontal mode
      var lastVisibleIndex = void 0;

      // float number comparison could be problematic
      // e.g. 0.1 + 0.2 > 0.3 =====> true
      // thus using FLOAT_PRECISION_ADJUST as buffer to help the situation
      if (this.originalTotalWidth > width + FLOAT_PRECISION_ADJUST) {
        lastVisibleIndex = -1;
        this.menuItemSizes.forEach(function (liWidth) {
          currentSumWidth += liWidth;
          if (currentSumWidth + _this2.overflowedIndicatorWidth <= width) {
            lastVisibleIndex += 1;
          }
        });
      }
      this.setState({
        lastVisibleIndex: lastVisibleIndex
      });
    },
    renderChildren: function renderChildren(children) {
      var _this3 = this;

      // need to take care of overflowed items in horizontal mode
      var lastVisibleIndex = this.$data.lastVisibleIndex;
      var className = getClass(this);
      return (children || []).reduce(function (acc, childNode, index) {
        var item = childNode;
        var eventKey = getPropsData(childNode).eventKey;
        if (_this3.mode === 'horizontal') {
          var overflowed = _this3.getOverflowedSubMenuItem(eventKey, []);
          if (lastVisibleIndex !== undefined && className[_this3.prefixCls + '-root'] !== -1) {
            if (index > lastVisibleIndex) {
              item = cloneElement(childNode,
              // 这里修改 eventKey 是为了防止隐藏状态下还会触发 openkeys 事件
              {
                style: {
                  display: 'none'
                },
                props: {
                  eventKey: eventKey + '-hidden'
                },
                'class': MENUITEM_OVERFLOWED_CLASSNAME
              });
            }
            if (index === lastVisibleIndex + 1) {
              _this3.overflowedItems = children.slice(lastVisibleIndex + 1).map(function (c) {
                return cloneElement(c,
                // children[index].key will become '.$key' in clone by default,
                // we have to overwrite with the correct key explicitly
                {
                  key: getPropsData(c).eventKey,
                  props: {
                    mode: 'vertical-left'
                  }
                });
              });
              overflowed = _this3.getOverflowedSubMenuItem(eventKey, _this3.overflowedItems);
            }
          }
          var ret = [].concat((0,toConsumableArray/* default */.Z)(acc), [overflowed, item]);
          if (index === children.length - 1) {
            // need a placeholder for calculating overflowed indicator width
            ret.push(_this3.getOverflowedSubMenuItem(eventKey, [], true));
          }
          return ret;
        }
        return [].concat((0,toConsumableArray/* default */.Z)(acc), [item]);
      }, []);
    }
  },
  render: function render() {
    var h = arguments[0];
    var Tag = this.$props.tag;
    var tagProps = {
      on: getListeners(this)
    };
    return h(Tag, tagProps, [this.renderChildren(this.$slots['default'])]);
  }
};
DOMWrap.props = {
  mode: vue_types.oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
  prefixCls: vue_types.string,
  level: vue_types.number,
  theme: vue_types.string,
  overflowedIndicator: vue_types.node,
  visible: vue_types.bool,
  hiddenClassName: vue_types.string,
  tag: vue_types.string.def('div')
};
/* harmony default export */ var vc_menu_DOMWrap = (DOMWrap);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-menu/SubPopupMenu.js














function allDisabled(arr) {
  if (!arr.length) {
    return true;
  }
  return arr.every(function (c) {
    return !!c.disabled;
  });
}
function updateActiveKey(store, menuId, activeKey) {
  var state = store.getState();
  store.setState({
    activeKey: (0,helpers_extends/* default */.Z)({}, state.activeKey, (0,defineProperty/* default */.Z)({}, menuId, activeKey))
  });
}
function getEventKey(props) {
  // when eventKey not available ,it's menu and return menu id '0-menu-'
  return props.eventKey || '0-menu-';
}
function saveRef(key, c) {
  if (c) {
    var index = this.instanceArrayKeyIndexMap[key];
    this.instanceArray[index] = c;
  }
}
function SubPopupMenu_getActiveKey(props, originalActiveKey) {
  var activeKey = originalActiveKey;
  var eventKey = props.eventKey,
    defaultActiveFirst = props.defaultActiveFirst,
    children = props.children;
  if (activeKey !== undefined && activeKey !== null) {
    var found = void 0;
    loopMenuItem(children, function (c, i) {
      var propsData = c.componentOptions.propsData || {};
      if (c && !propsData.disabled && activeKey === getKeyFromChildrenIndex(c, eventKey, i)) {
        found = true;
      }
    });
    if (found) {
      return activeKey;
    }
  }
  activeKey = null;
  if (defaultActiveFirst) {
    loopMenuItem(children, function (c, i) {
      var propsData = c.componentOptions.propsData || {};
      var noActiveKey = activeKey === null || activeKey === undefined;
      if (noActiveKey && c && !propsData.disabled) {
        activeKey = getKeyFromChildrenIndex(c, eventKey, i);
      }
    });
    return activeKey;
  }
  return activeKey;
}
var SubPopupMenu = {
  name: 'SubPopupMenu',
  props: initDefaultProps({
    // onSelect: PropTypes.func,
    // onClick: PropTypes.func,
    // onDeselect: PropTypes.func,
    // onOpenChange: PropTypes.func,
    // onDestroy: PropTypes.func,
    prefixCls: vue_types.string,
    openTransitionName: vue_types.string,
    openAnimation: vue_types.oneOfType([vue_types.string, vue_types.object]),
    openKeys: vue_types.arrayOf(vue_types.oneOfType([vue_types.string, vue_types.number])),
    visible: vue_types.bool,
    parentMenu: vue_types.object,
    eventKey: vue_types.string,
    store: vue_types.object,
    // adding in refactor
    focusable: vue_types.bool,
    multiple: vue_types.bool,
    defaultActiveFirst: vue_types.bool,
    activeKey: vue_types.oneOfType([vue_types.string, vue_types.number]),
    selectedKeys: vue_types.arrayOf(vue_types.oneOfType([vue_types.string, vue_types.number])),
    defaultSelectedKeys: vue_types.arrayOf(vue_types.oneOfType([vue_types.string, vue_types.number])),
    defaultOpenKeys: vue_types.arrayOf(vue_types.oneOfType([vue_types.string, vue_types.number])),
    level: vue_types.number,
    mode: vue_types.oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
    triggerSubMenuAction: vue_types.oneOf(['click', 'hover']),
    inlineIndent: vue_types.oneOfType([vue_types.number, vue_types.string]),
    manualRef: vue_types.func,
    itemIcon: vue_types.any,
    expandIcon: vue_types.any,
    overflowedIndicator: vue_types.any,
    children: vue_types.any.def([]),
    __propsSymbol__: vue_types.any // mock componentWillReceiveProps
  }, {
    prefixCls: 'rc-menu',
    mode: 'vertical',
    level: 1,
    inlineIndent: 24,
    visible: true,
    focusable: true,
    manualRef: util_noop
  }),
  mixins: [BaseMixin],
  created: function created() {
    var props = getOptionProps(this);
    this.prevProps = (0,helpers_extends/* default */.Z)({}, props);
    props.store.setState({
      activeKey: (0,helpers_extends/* default */.Z)({}, props.store.getState().activeKey, (0,defineProperty/* default */.Z)({}, props.eventKey, SubPopupMenu_getActiveKey(props, props.activeKey)))
    });
    this.instanceArray = [];
  },
  mounted: function mounted() {
    // invoke customized ref to expose component to mixin
    if (this.manualRef) {
      this.manualRef(this);
    }
  },
  updated: function updated() {
    var props = getOptionProps(this);
    var prevProps = this.prevProps;
    var originalActiveKey = 'activeKey' in props ? props.activeKey : props.store.getState().activeKey[getEventKey(props)];
    var activeKey = SubPopupMenu_getActiveKey(props, originalActiveKey);
    if (activeKey !== originalActiveKey) {
      updateActiveKey(props.store, getEventKey(props), activeKey);
    } else if ('activeKey' in prevProps) {
      // If prev activeKey is not same as current activeKey,
      // we should set it.
      var prevActiveKey = SubPopupMenu_getActiveKey(prevProps, prevProps.activeKey);
      if (activeKey !== prevActiveKey) {
        updateActiveKey(props.store, getEventKey(props), activeKey);
      }
    }
    this.prevProps = (0,helpers_extends/* default */.Z)({}, props);
  },
  methods: {
    // all keyboard events callbacks run from here at first
    onKeyDown: function onKeyDown(e, callback) {
      var keyCode = e.keyCode;
      var handled = void 0;
      this.getFlatInstanceArray().forEach(function (obj) {
        if (obj && obj.active && obj.onKeyDown) {
          handled = obj.onKeyDown(e);
        }
      });
      if (handled) {
        return 1;
      }
      var activeItem = null;
      if (keyCode === _util_KeyCode.UP || keyCode === _util_KeyCode.DOWN) {
        activeItem = this.step(keyCode === _util_KeyCode.UP ? -1 : 1);
      }
      if (activeItem) {
        e.preventDefault();
        updateActiveKey(this.$props.store, getEventKey(this.$props), activeItem.eventKey);
        if (typeof callback === 'function') {
          callback(activeItem);
        }
        return 1;
      }
      return undefined;
    },
    onItemHover: function onItemHover(e) {
      var key = e.key,
        hover = e.hover;
      updateActiveKey(this.$props.store, getEventKey(this.$props), hover ? key : null);
    },
    onDeselect: function onDeselect(selectInfo) {
      this.__emit('deselect', selectInfo);
    },
    onSelect: function onSelect(selectInfo) {
      this.__emit('select', selectInfo);
    },
    onClick: function onClick(e) {
      this.__emit('click', e);
    },
    onOpenChange: function onOpenChange(e) {
      this.__emit('openChange', e);
    },
    onDestroy: function onDestroy(key) {
      this.__emit('destroy', key);
    },
    getFlatInstanceArray: function getFlatInstanceArray() {
      return this.instanceArray;
    },
    getOpenTransitionName: function getOpenTransitionName() {
      return this.$props.openTransitionName;
    },
    step: function step(direction) {
      var children = this.getFlatInstanceArray();
      var activeKey = this.$props.store.getState().activeKey[getEventKey(this.$props)];
      var len = children.length;
      if (!len) {
        return null;
      }
      if (direction < 0) {
        children = children.concat().reverse();
      }
      // find current activeIndex
      var activeIndex = -1;
      children.every(function (c, ci) {
        if (c && c.eventKey === activeKey) {
          activeIndex = ci;
          return false;
        }
        return true;
      });
      if (!this.defaultActiveFirst && activeIndex !== -1 && allDisabled(children.slice(activeIndex, len - 1))) {
        return undefined;
      }
      var start = (activeIndex + 1) % len;
      var i = start;
      do {
        var child = children[i];
        if (!child || child.disabled) {
          i = (i + 1) % len;
        } else {
          return child;
        }
      } while (i !== start);
      return null;
    },
    getIcon: function getIcon(instance, name) {
      if (instance.$createElement) {
        var temp = instance[name];
        if (temp !== undefined) {
          return temp;
        }
        return instance.$slots[name] || instance.$scopedSlots[name];
      } else {
        var _temp = getPropsData(instance)[name];
        if (_temp !== undefined) {
          return _temp;
        }
        var slotsProp = [];
        var componentOptions = instance.componentOptions || {};
        (componentOptions.children || []).forEach(function (child) {
          if (child.data && child.data.slot === name) {
            if (child.tag === 'template') {
              slotsProp.push(child.children);
            } else {
              slotsProp.push(child);
            }
          }
        });
        return slotsProp.length ? slotsProp : undefined;
      }
    },
    renderCommonMenuItem: function renderCommonMenuItem(child, i, extraProps) {
      var _this = this;
      if (child.tag === undefined) {
        return child;
      }
      var state = this.$props.store.getState();
      var props = this.$props;
      var key = getKeyFromChildrenIndex(child, props.eventKey, i);
      var childProps = child.componentOptions.propsData || {};
      var isActive = key === state.activeKey[getEventKey(this.$props)];
      if (!childProps.disabled) {
        // manualRef的执行顺序不能保证，使用key映射ref在this.instanceArray中的位置
        this.instanceArrayKeyIndexMap[key] = Object.keys(this.instanceArrayKeyIndexMap).length;
      }
      var childListeners = getEvents(child);
      var newChildProps = {
        props: (0,helpers_extends/* default */.Z)({
          mode: childProps.mode || props.mode,
          level: props.level,
          inlineIndent: props.inlineIndent,
          renderMenuItem: this.renderMenuItem,
          rootPrefixCls: props.prefixCls,
          index: i,
          parentMenu: props.parentMenu,
          // customized ref function, need to be invoked manually in child's componentDidMount
          manualRef: childProps.disabled ? util_noop : saveRef.bind(this, key),
          eventKey: key,
          active: !childProps.disabled && isActive,
          multiple: props.multiple,
          openTransitionName: this.getOpenTransitionName(),
          openAnimation: props.openAnimation,
          subMenuOpenDelay: props.subMenuOpenDelay,
          subMenuCloseDelay: props.subMenuCloseDelay,
          forceSubMenuRender: props.forceSubMenuRender,
          builtinPlacements: props.builtinPlacements,
          itemIcon: this.getIcon(child, 'itemIcon') || this.getIcon(this, 'itemIcon'),
          expandIcon: this.getIcon(child, 'expandIcon') || this.getIcon(this, 'expandIcon')
        }, extraProps),
        on: {
          click: function click(e) {
            (childListeners.click || util_noop)(e);
            _this.onClick(e);
          },
          itemHover: this.onItemHover,
          openChange: this.onOpenChange,
          deselect: this.onDeselect,
          // destroy: this.onDestroy,
          select: this.onSelect
        }
      };
      // ref: https://github.com/ant-design/ant-design/issues/13943
      if (props.mode === 'inline' || isMobileDevice()) {
        newChildProps.props.triggerSubMenuAction = 'click';
      }
      return cloneElement(child, newChildProps);
    },
    renderMenuItem: function renderMenuItem(c, i, subMenuKey) {
      if (!c) {
        return null;
      }
      var state = this.$props.store.getState();
      var extraProps = {
        openKeys: state.openKeys,
        selectedKeys: state.selectedKeys,
        triggerSubMenuAction: this.triggerSubMenuAction,
        isRootMenu: false,
        subMenuKey: subMenuKey
      };
      return this.renderCommonMenuItem(c, i, extraProps);
    }
  },
  render: function render() {
    var _this2 = this;
    var h = arguments[0];
    var props = (0,objectWithoutProperties/* default */.Z)(this.$props, []);
    var eventKey = props.eventKey,
      prefixCls = props.prefixCls,
      visible = props.visible,
      level = props.level,
      mode = props.mode,
      theme = props.theme;
    this.instanceArray = [];
    this.instanceArrayKeyIndexMap = {};
    var className = classnames_default()(props.prefixCls, props.prefixCls + '-' + props.mode);
    var domWrapProps = {
      props: {
        tag: 'ul',
        // hiddenClassName: `${prefixCls}-hidden`,
        visible: visible,
        prefixCls: prefixCls,
        level: level,
        mode: mode,
        theme: theme,
        overflowedIndicator: getComponentFromProp(this, 'overflowedIndicator')
      },
      attrs: {
        role: props.role || 'menu'
      },
      'class': className,
      // Otherwise, the propagated click event will trigger another onClick
      on: omit_js_es(getListeners(this), ['click'])
    };
    // if (props.id) {
    //   domProps.id = props.id
    // }
    if (props.focusable) {
      domWrapProps.attrs.tabIndex = '0';
      domWrapProps.on.keydown = this.onKeyDown;
    }
    return (
      // ESLint is not smart enough to know that the type of `children` was checked.
      /* eslint-disable */
      h(vc_menu_DOMWrap, domWrapProps, [props.children.map(function (c, i) {
        return _this2.renderMenuItem(c, i, eventKey || '0-menu-');
      })])
      /*eslint -enable */
    );
  }
};

/* harmony default export */ var vc_menu_SubPopupMenu = (connect()(SubPopupMenu));
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-menu/commonPropsType.js

/* harmony default export */ var commonPropsType = ({
  prefixCls: vue_types.string.def('rc-menu'),
  focusable: vue_types.bool.def(true),
  multiple: vue_types.bool,
  defaultActiveFirst: vue_types.bool,
  visible: vue_types.bool.def(true),
  activeKey: vue_types.oneOfType([vue_types.string, vue_types.number]),
  selectedKeys: vue_types.arrayOf(vue_types.oneOfType([vue_types.string, vue_types.number])),
  defaultSelectedKeys: vue_types.arrayOf(vue_types.oneOfType([vue_types.string, vue_types.number])).def([]),
  defaultOpenKeys: vue_types.arrayOf(vue_types.oneOfType([vue_types.string, vue_types.number])).def([]),
  openKeys: vue_types.arrayOf(vue_types.oneOfType([vue_types.string, vue_types.number])),
  openAnimation: vue_types.oneOfType([vue_types.string, vue_types.object]),
  mode: vue_types.oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']).def('vertical'),
  triggerSubMenuAction: vue_types.string.def('hover'),
  subMenuOpenDelay: vue_types.number.def(0.1),
  subMenuCloseDelay: vue_types.number.def(0.1),
  level: vue_types.number.def(1),
  inlineIndent: vue_types.number.def(24),
  theme: vue_types.oneOf(['light', 'dark']).def('light'),
  getPopupContainer: vue_types.func,
  openTransitionName: vue_types.string,
  forceSubMenuRender: vue_types.bool,
  selectable: vue_types.bool,
  isRootMenu: vue_types.bool.def(true),
  builtinPlacements: vue_types.object.def(function () {
    return {};
  }),
  itemIcon: vue_types.any,
  expandIcon: vue_types.any,
  overflowedIndicator: vue_types.any
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-menu/Menu.js








var Menu = {
  name: 'Menu',
  props: (0,helpers_extends/* default */.Z)({}, commonPropsType, {
    selectable: vue_types.bool.def(true)
  }),
  mixins: [BaseMixin],
  data: function data() {
    var props = getOptionProps(this);
    var selectedKeys = props.defaultSelectedKeys;
    var openKeys = props.defaultOpenKeys;
    if ('selectedKeys' in props) {
      selectedKeys = props.selectedKeys || [];
    }
    if ('openKeys' in props) {
      openKeys = props.openKeys || [];
    }
    this.store = create_create({
      selectedKeys: selectedKeys,
      openKeys: openKeys,
      activeKey: {
        '0-menu-': SubPopupMenu_getActiveKey((0,helpers_extends/* default */.Z)({}, props, {
          children: this.$slots['default'] || []
        }), props.activeKey)
      }
    });

    // this.isRootMenu = true // 声明在props上
    return {};
  },
  mounted: function mounted() {
    this.updateMiniStore();
  },
  updated: function updated() {
    this.updateMiniStore();
  },
  methods: {
    onSelect: function onSelect(selectInfo) {
      var props = this.$props;
      if (props.selectable) {
        // root menu
        var selectedKeys = this.store.getState().selectedKeys;
        var selectedKey = selectInfo.key;
        if (props.multiple) {
          selectedKeys = selectedKeys.concat([selectedKey]);
        } else {
          selectedKeys = [selectedKey];
        }
        if (!props_util(this, 'selectedKeys')) {
          this.store.setState({
            selectedKeys: selectedKeys
          });
        }
        this.__emit('select', (0,helpers_extends/* default */.Z)({}, selectInfo, {
          selectedKeys: selectedKeys
        }));
      }
    },
    onClick: function onClick(e) {
      this.__emit('click', e);
    },
    // onKeyDown needs to be exposed as a instance method
    // e.g., in rc-select, we need to navigate menu item while
    // current active item is rc-select input box rather than the menu itself
    onKeyDown: function onKeyDown(e, callback) {
      this.$refs.innerMenu.getWrappedInstance().onKeyDown(e, callback);
    },
    onOpenChange: function onOpenChange(event) {
      var openKeys = this.store.getState().openKeys.concat();
      var changed = false;
      var processSingle = function processSingle(e) {
        var oneChanged = false;
        if (e.open) {
          oneChanged = openKeys.indexOf(e.key) === -1;
          if (oneChanged) {
            openKeys.push(e.key);
          }
        } else {
          var index = openKeys.indexOf(e.key);
          oneChanged = index !== -1;
          if (oneChanged) {
            openKeys.splice(index, 1);
          }
        }
        changed = changed || oneChanged;
      };
      if (Array.isArray(event)) {
        // batch change call
        event.forEach(processSingle);
      } else {
        processSingle(event);
      }
      if (changed) {
        if (!props_util(this, 'openKeys')) {
          this.store.setState({
            openKeys: openKeys
          });
        }
        this.__emit('openChange', openKeys);
      }
    },
    onDeselect: function onDeselect(selectInfo) {
      var props = this.$props;
      if (props.selectable) {
        var selectedKeys = this.store.getState().selectedKeys.concat();
        var selectedKey = selectInfo.key;
        var index = selectedKeys.indexOf(selectedKey);
        if (index !== -1) {
          selectedKeys.splice(index, 1);
        }
        if (!props_util(this, 'selectedKeys')) {
          this.store.setState({
            selectedKeys: selectedKeys
          });
        }
        this.__emit('deselect', (0,helpers_extends/* default */.Z)({}, selectInfo, {
          selectedKeys: selectedKeys
        }));
      }
    },
    getOpenTransitionName: function getOpenTransitionName() {
      var props = this.$props;
      var transitionName = props.openTransitionName;
      var animationName = props.openAnimation;
      if (!transitionName && typeof animationName === 'string') {
        transitionName = props.prefixCls + '-open-' + animationName;
      }
      return transitionName;
    },
    updateMiniStore: function updateMiniStore() {
      var props = getOptionProps(this);
      if ('selectedKeys' in props) {
        this.store.setState({
          selectedKeys: props.selectedKeys || []
        });
      }
      if ('openKeys' in props) {
        this.store.setState({
          openKeys: props.openKeys || []
        });
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var props = getOptionProps(this);
    var subPopupMenuProps = {
      props: (0,helpers_extends/* default */.Z)({}, props, {
        itemIcon: getComponentFromProp(this, 'itemIcon', props),
        expandIcon: getComponentFromProp(this, 'expandIcon', props),
        overflowedIndicator: getComponentFromProp(this, 'overflowedIndicator', props) || h('span', ['\xB7\xB7\xB7']),
        openTransitionName: this.getOpenTransitionName(),
        parentMenu: this,
        children: filterEmpty(this.$slots['default'] || [])
      }),
      'class': props.prefixCls + '-root',
      on: (0,helpers_extends/* default */.Z)({}, getListeners(this), {
        click: this.onClick,
        openChange: this.onOpenChange,
        deselect: this.onDeselect,
        select: this.onSelect
      }),
      ref: 'innerMenu'
    };
    return h(Provider, {
      attrs: {
        store: this.store
      }
    }, [h(vc_menu_SubPopupMenu, subPopupMenuProps)]);
  }
};
/* harmony default export */ var vc_menu_Menu = (Menu);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-menu/index.js
// based on rc-menu 7.5.5






/* harmony default export */ var vc_menu = (vc_menu_Menu);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-select/util.js




function toTitle(title) {
  if (typeof title === 'string') {
    return title.trim();
  }
  return '';
}
function getValuePropValue(child) {
  if (!child) {
    return null;
  }
  var props = getPropsData(child);
  if ('value' in props) {
    return props.value;
  }
  if (getKey(child) !== undefined) {
    return getKey(child);
  }
  if (getSlotOptions(child).isSelectOptGroup) {
    var label = getComponentFromProp(child, 'label');
    if (label) {
      return label;
    }
  }
  throw new Error('Need at least a key or a value or a label (only for OptGroup) for ' + child);
}
function getPropValue(child, prop) {
  if (prop === 'value') {
    return getValuePropValue(child);
  }
  if (prop === 'children') {
    var newChild = child.$slots ? cloneVNodes(child.$slots['default'], true) : cloneVNodes(child.componentOptions.children, true);
    if (newChild.length === 1 && !newChild[0].tag) {
      return newChild[0].text;
    }
    return newChild;
  }
  var data = getPropsData(child);
  if (prop in data) {
    return data[prop];
  } else {
    return getAttrs(child)[prop];
  }
}
function isMultiple(props) {
  return props.multiple;
}
function isCombobox(props) {
  return props.combobox;
}
function isMultipleOrTags(props) {
  return props.multiple || props.tags;
}
function isMultipleOrTagsOrCombobox(props) {
  return isMultipleOrTags(props) || isCombobox(props);
}
function isSingleMode(props) {
  return !isMultipleOrTagsOrCombobox(props);
}
function util_toArray(value) {
  var ret = value;
  if (value === undefined) {
    ret = [];
  } else if (!Array.isArray(value)) {
    ret = [value];
  }
  return ret;
}
function getMapKey(value) {
  return (typeof value === 'undefined' ? 'undefined' : (0,helpers_typeof/* default */.Z)(value)) + '-' + value;
}
function preventDefaultEvent(e) {
  e.preventDefault();
}
function findIndexInValueBySingleValue(value, singleValue) {
  var index = -1;
  if (value) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === singleValue) {
        index = i;
        break;
      }
    }
  }
  return index;
}
function getLabelFromPropsValue(value, key) {
  var label = void 0;
  value = util_toArray(value);
  if (value) {
    for (var i = 0; i < value.length; i++) {
      if (value[i].key === key) {
        label = value[i].label;
        break;
      }
    }
  }
  return label;
}
function getSelectKeys(menuItems, value) {
  if (value === null || value === undefined) {
    return [];
  }
  var selectedKeys = [];
  menuItems.forEach(function (item) {
    if (getSlotOptions(item).isMenuItemGroup) {
      selectedKeys = selectedKeys.concat(getSelectKeys(item.componentOptions.children, value));
    } else {
      var itemValue = getValuePropValue(item);
      var itemKey = item.key;
      if (findIndexInValueBySingleValue(value, itemValue) !== -1 && itemKey !== undefined) {
        selectedKeys.push(itemKey);
      }
    }
  });
  return selectedKeys;
}
var UNSELECTABLE_STYLE = {
  userSelect: 'none',
  WebkitUserSelect: 'none'
};
var UNSELECTABLE_ATTRIBUTE = {
  unselectable: 'on'
};
function findFirstMenuItem(children) {
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    var props = getPropsData(child);
    if (getSlotOptions(child).isMenuItemGroup) {
      var found = findFirstMenuItem(child.componentOptions.children);
      if (found) {
        return found;
      }
    } else if (!props.disabled) {
      return child;
    }
  }
  return null;
}
function includesSeparators(str, separators) {
  for (var i = 0; i < separators.length; ++i) {
    if (str.lastIndexOf(separators[i]) > 0) {
      return true;
    }
  }
  return false;
}
function splitBySeparators(str, separators) {
  var reg = new RegExp('[' + separators.join() + ']');
  return str.split(reg).filter(function (token) {
    return token;
  });
}
function defaultFilterFn(input, child) {
  var props = getPropsData(child);
  if (props.disabled) {
    return false;
  }
  var value = getPropValue(child, this.optionFilterProp);
  if (value.length && value[0].text) {
    value = value[0].text;
  } else {
    value = String(value);
  }
  return value.toLowerCase().indexOf(input.toLowerCase()) > -1;
}
function validateOptionValue(value, props) {
  if (isSingleMode(props) || isMultiple(props)) {
    return;
  }
  if (typeof value !== 'string') {
    throw new Error('Invalid `value` of type `' + (typeof value === 'undefined' ? 'undefined' : (0,helpers_typeof/* default */.Z)(value)) + '` supplied to Option, ' + 'expected `string` when `tags/combobox` is `true`.');
  }
}
function util_saveRef(instance, name) {
  return function (node) {
    instance[name] = node;
  };
}
function generateUUID() {
  if (false) {}
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : r & 0x7 | 0x8).toString(16);
  });
  return uuid;
}
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-select/DropdownMenu.js









/* harmony default export */ var DropdownMenu = ({
  name: 'DropdownMenu',
  mixins: [BaseMixin],
  props: {
    ariaId: vue_types.string,
    defaultActiveFirstOption: vue_types.bool,
    value: vue_types.any,
    dropdownMenuStyle: vue_types.object,
    multiple: vue_types.bool,
    // onPopupFocus: PropTypes.func,
    // onPopupScroll: PropTypes.func,
    // onMenuDeSelect: PropTypes.func,
    // onMenuSelect: PropTypes.func,
    prefixCls: vue_types.string,
    menuItems: vue_types.any,
    inputValue: vue_types.string,
    visible: vue_types.bool,
    backfillValue: vue_types.any,
    firstActiveValue: vue_types.string,
    menuItemSelectedIcon: vue_types.any
  },
  watch: {
    visible: function visible(val) {
      var _this = this;
      if (!val) {
        this.lastVisible = val;
      } else {
        this.$nextTick(function () {
          _this.scrollActiveItemToView();
        });
      }
    }
  },
  created: function created() {
    this.rafInstance = null;
    this.lastInputValue = this.$props.inputValue;
    this.lastVisible = false;
  },
  mounted: function mounted() {
    var _this2 = this;
    this.$nextTick(function () {
      _this2.scrollActiveItemToView();
    });
    this.lastVisible = this.$props.visible;
  },
  updated: function updated() {
    var props = this.$props;
    // if (!this.prevVisible && props.visible) {
    //   this.$nextTick(() => {
    //     this.scrollActiveItemToView();
    //   });
    // }
    this.lastVisible = props.visible;
    this.lastInputValue = props.inputValue;
    this.prevVisible = this.visible;
  },
  beforeDestroy: function beforeDestroy() {
    if (this.rafInstance) {
      raf_default().cancel(this.rafInstance);
    }
  },
  methods: {
    scrollActiveItemToView: function scrollActiveItemToView() {
      var _this3 = this;

      // scroll into view
      var itemComponent = this.firstActiveItem && this.firstActiveItem.$el;
      var props = this.$props;
      var value = props.value,
        visible = props.visible,
        firstActiveValue = props.firstActiveValue;
      if (!itemComponent || !visible) {
        return;
      }
      var scrollIntoViewOpts = {
        onlyScrollIfNeeded: true
      };
      if ((!value || value.length === 0) && firstActiveValue) {
        scrollIntoViewOpts.alignWithTop = true;
      }
      // Delay to scroll since current frame item position is not ready when pre view is by filter
      // https://github.com/ant-design/ant-design/issues/11268#issuecomment-406634462
      this.rafInstance = raf_default()(function () {
        dist_web(itemComponent, _this3.$refs.menuRef.$el, scrollIntoViewOpts);
      });
    },
    renderMenu: function renderMenu() {
      var _this4 = this;
      var h = this.$createElement;
      var props = this.$props;
      var menuItems = props.menuItems,
        defaultActiveFirstOption = props.defaultActiveFirstOption,
        value = props.value,
        prefixCls = props.prefixCls,
        multiple = props.multiple,
        inputValue = props.inputValue,
        firstActiveValue = props.firstActiveValue,
        dropdownMenuStyle = props.dropdownMenuStyle,
        backfillValue = props.backfillValue,
        visible = props.visible;
      var menuItemSelectedIcon = getComponentFromProp(this, 'menuItemSelectedIcon');
      var _getListeners = getListeners(this),
        menuDeselect = _getListeners.menuDeselect,
        menuSelect = _getListeners.menuSelect,
        popupScroll = _getListeners.popupScroll;
      if (menuItems && menuItems.length) {
        var selectedKeys = getSelectKeys(menuItems, value);
        var menuProps = {
          props: {
            multiple: multiple,
            itemIcon: multiple ? menuItemSelectedIcon : null,
            selectedKeys: selectedKeys,
            prefixCls: prefixCls + '-menu'
          },
          on: {},
          style: dropdownMenuStyle,
          ref: 'menuRef',
          attrs: {
            role: 'listbox'
          }
        };
        if (popupScroll) {
          menuProps.on.scroll = popupScroll;
        }
        if (multiple) {
          menuProps.on.deselect = menuDeselect;
          menuProps.on.select = menuSelect;
        } else {
          menuProps.on.click = menuSelect;
        }
        var activeKeyProps = {};
        var defaultActiveFirst = defaultActiveFirstOption;
        var clonedMenuItems = menuItems;
        if (selectedKeys.length || firstActiveValue) {
          if (props.visible && !this.lastVisible) {
            activeKeyProps.activeKey = selectedKeys[0] || firstActiveValue;
          } else if (!visible) {
            // Do not trigger auto active since we already have selectedKeys
            if (selectedKeys[0]) {
              defaultActiveFirst = false;
            }
            activeKeyProps.activeKey = undefined;
          }
          var foundFirst = false;
          // set firstActiveItem via cloning menus
          // for scroll into view
          var clone = function clone(item) {
            if (!foundFirst && selectedKeys.indexOf(item.key) !== -1 || !foundFirst && !selectedKeys.length && firstActiveValue.indexOf(item.key) !== -1) {
              foundFirst = true;
              return cloneElement(item, {
                directives: [{
                  name: 'ant-ref',
                  value: function value(ref) {
                    _this4.firstActiveItem = ref;
                  }
                }]
              });
            }
            return item;
          };
          clonedMenuItems = menuItems.map(function (item) {
            if (getSlotOptions(item).isMenuItemGroup) {
              var children = item.componentOptions.children.map(clone);
              return cloneElement(item, {
                children: children
              });
            }
            return clone(item);
          });
        } else {
          // Clear firstActiveItem when dropdown menu items was empty
          // Avoid `Unable to find node on an unmounted component`
          // https://github.com/ant-design/ant-design/issues/10774
          this.firstActiveItem = null;
        }

        // clear activeKey when inputValue change
        var lastValue = value && value[value.length - 1];
        if (inputValue !== this.lastInputValue && (!lastValue || lastValue !== backfillValue)) {
          activeKeyProps.activeKey = '';
        }
        menuProps.props = (0,helpers_extends/* default */.Z)({}, activeKeyProps, menuProps.props, {
          defaultActiveFirst: defaultActiveFirst
        });
        return h(vc_menu, menuProps, [clonedMenuItems]);
      }
      return null;
    }
  },
  render: function render() {
    var h = arguments[0];
    var renderMenu = this.renderMenu();
    var _getListeners2 = getListeners(this),
      popupFocus = _getListeners2.popupFocus,
      popupScroll = _getListeners2.popupScroll;
    return renderMenu ? h('div', {
      style: {
        overflow: 'auto',
        transform: 'translateZ(0)'
      },
      attrs: {
        id: this.$props.ariaId,
        tabIndex: '-1'
      },
      on: {
        'focus': popupFocus,
        'mousedown': preventDefaultEvent,
        'scroll': popupScroll
      },
      ref: 'menuContainer'
    }, [renderMenu]) : null;
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-select/SelectTrigger.js










var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};
/* harmony default export */ var SelectTrigger = ({
  name: 'SelectTrigger',
  mixins: [BaseMixin],
  props: {
    // onPopupFocus: PropTypes.func,
    // onPopupScroll: PropTypes.func,
    dropdownMatchSelectWidth: vue_types.bool,
    defaultActiveFirstOption: vue_types.bool,
    dropdownAlign: vue_types.object,
    visible: vue_types.bool,
    disabled: vue_types.bool,
    showSearch: vue_types.bool,
    dropdownClassName: vue_types.string,
    dropdownStyle: vue_types.object,
    dropdownMenuStyle: vue_types.object,
    multiple: vue_types.bool,
    inputValue: vue_types.string,
    filterOption: vue_types.any,
    empty: vue_types.bool,
    options: vue_types.any,
    prefixCls: vue_types.string,
    popupClassName: vue_types.string,
    value: vue_types.array,
    // children: PropTypes.any,
    showAction: vue_types.arrayOf(vue_types.string),
    combobox: vue_types.bool,
    animation: vue_types.string,
    transitionName: vue_types.string,
    getPopupContainer: vue_types.func,
    backfillValue: vue_types.any,
    menuItemSelectedIcon: vue_types.any,
    dropdownRender: vue_types.func,
    ariaId: vue_types.string
  },
  data: function data() {
    return {
      dropdownWidth: 0
    };
  },
  created: function created() {
    this.rafInstance = null;
    this.saveDropdownMenuRef = util_saveRef(this, 'dropdownMenuRef');
    this.saveTriggerRef = util_saveRef(this, 'triggerRef');
  },
  mounted: function mounted() {
    var _this = this;
    this.$nextTick(function () {
      _this.setDropdownWidth();
    });
  },
  updated: function updated() {
    var _this2 = this;
    this.$nextTick(function () {
      _this2.setDropdownWidth();
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.cancelRafInstance();
  },
  methods: {
    setDropdownWidth: function setDropdownWidth() {
      var _this3 = this;
      this.cancelRafInstance();
      this.rafInstance = raf_default()(function () {
        var width = _this3.$el.offsetWidth;
        if (width !== _this3.dropdownWidth) {
          _this3.setState({
            dropdownWidth: width
          });
        }
      });
    },
    cancelRafInstance: function cancelRafInstance() {
      if (this.rafInstance) {
        raf_default().cancel(this.rafInstance);
      }
    },
    getInnerMenu: function getInnerMenu() {
      return this.dropdownMenuRef && this.dropdownMenuRef.$refs.menuRef;
    },
    getPopupDOMNode: function getPopupDOMNode() {
      return this.triggerRef.getPopupDomNode();
    },
    getDropdownElement: function getDropdownElement(newProps) {
      var h = this.$createElement;
      var value = this.value,
        firstActiveValue = this.firstActiveValue,
        defaultActiveFirstOption = this.defaultActiveFirstOption,
        dropdownMenuStyle = this.dropdownMenuStyle,
        getDropdownPrefixCls = this.getDropdownPrefixCls,
        backfillValue = this.backfillValue,
        menuItemSelectedIcon = this.menuItemSelectedIcon;
      var _getListeners = getListeners(this),
        menuSelect = _getListeners.menuSelect,
        menuDeselect = _getListeners.menuDeselect,
        popupScroll = _getListeners.popupScroll;
      var props = this.$props;
      var dropdownRender = props.dropdownRender,
        ariaId = props.ariaId;
      var dropdownMenuProps = {
        props: (0,helpers_extends/* default */.Z)({}, newProps.props, {
          ariaId: ariaId,
          prefixCls: getDropdownPrefixCls(),
          value: value,
          firstActiveValue: firstActiveValue,
          defaultActiveFirstOption: defaultActiveFirstOption,
          dropdownMenuStyle: dropdownMenuStyle,
          backfillValue: backfillValue,
          menuItemSelectedIcon: menuItemSelectedIcon
        }),
        on: (0,helpers_extends/* default */.Z)({}, newProps.on, {
          menuSelect: menuSelect,
          menuDeselect: menuDeselect,
          popupScroll: popupScroll
        }),
        directives: [{
          name: 'ant-ref',
          value: this.saveDropdownMenuRef
        }]
      };
      var menuNode = h(DropdownMenu, dropdownMenuProps);
      if (dropdownRender) {
        return dropdownRender(menuNode, props);
      }
      return null;
    },
    getDropdownTransitionName: function getDropdownTransitionName() {
      var props = this.$props;
      var transitionName = props.transitionName;
      if (!transitionName && props.animation) {
        transitionName = this.getDropdownPrefixCls() + '-' + props.animation;
      }
      return transitionName;
    },
    getDropdownPrefixCls: function getDropdownPrefixCls() {
      return this.prefixCls + '-dropdown';
    }
  },
  render: function render() {
    var _popupClassName;
    var h = arguments[0];
    var $props = this.$props,
      $slots = this.$slots;
    var multiple = $props.multiple,
      visible = $props.visible,
      inputValue = $props.inputValue,
      dropdownAlign = $props.dropdownAlign,
      disabled = $props.disabled,
      showSearch = $props.showSearch,
      dropdownClassName = $props.dropdownClassName,
      dropdownStyle = $props.dropdownStyle,
      dropdownMatchSelectWidth = $props.dropdownMatchSelectWidth,
      options = $props.options,
      getPopupContainer = $props.getPopupContainer,
      showAction = $props.showAction,
      empty = $props.empty;
    var _getListeners2 = getListeners(this),
      mouseenter = _getListeners2.mouseenter,
      mouseleave = _getListeners2.mouseleave,
      popupFocus = _getListeners2.popupFocus,
      dropdownVisibleChange = _getListeners2.dropdownVisibleChange;
    var dropdownPrefixCls = this.getDropdownPrefixCls();
    var popupClassName = (_popupClassName = {}, (0,defineProperty/* default */.Z)(_popupClassName, dropdownClassName, !!dropdownClassName), (0,defineProperty/* default */.Z)(_popupClassName, dropdownPrefixCls + '--' + (multiple ? 'multiple' : 'single'), 1), (0,defineProperty/* default */.Z)(_popupClassName, dropdownPrefixCls + '--empty', empty), _popupClassName);
    var popupElement = this.getDropdownElement({
      props: {
        menuItems: options,
        multiple: multiple,
        inputValue: inputValue,
        visible: visible
      },
      on: {
        popupFocus: popupFocus
      }
    });
    var hideAction = void 0;
    if (disabled) {
      hideAction = [];
    } else if (isSingleMode($props) && !showSearch) {
      hideAction = ['click'];
    } else {
      hideAction = ['blur'];
    }
    var popupStyle = (0,helpers_extends/* default */.Z)({}, dropdownStyle);
    var widthProp = dropdownMatchSelectWidth ? 'width' : 'minWidth';
    if (this.dropdownWidth) {
      popupStyle[widthProp] = this.dropdownWidth + 'px';
    }
    var triggerProps = {
      props: (0,helpers_extends/* default */.Z)({}, $props, {
        showAction: disabled ? [] : showAction,
        hideAction: hideAction,
        ref: 'triggerRef',
        popupPlacement: 'bottomLeft',
        builtinPlacements: BUILT_IN_PLACEMENTS,
        prefixCls: dropdownPrefixCls,
        popupTransitionName: this.getDropdownTransitionName(),
        popupAlign: dropdownAlign,
        popupVisible: visible,
        getPopupContainer: getPopupContainer,
        popupClassName: classnames_default()(popupClassName),
        popupStyle: popupStyle
      }),
      on: {
        popupVisibleChange: dropdownVisibleChange
      },
      directives: [{
        name: 'ant-ref',
        value: this.saveTriggerRef
      }]
    };
    if (mouseenter) {
      triggerProps.on.mouseenter = mouseenter;
    }
    if (mouseleave) {
      triggerProps.on.mouseleave = mouseleave;
    }
    return h(vc_trigger, triggerProps, [$slots['default'], h('template', {
      slot: 'popup'
    }, [popupElement])]);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-select/PropTypes.js

var SelectPropTypes = {
  defaultActiveFirstOption: vue_types.bool,
  multiple: vue_types.bool,
  filterOption: vue_types.any,
  // children: PropTypes.any,
  showSearch: vue_types.bool,
  disabled: vue_types.bool,
  allowClear: vue_types.bool,
  showArrow: vue_types.bool,
  tags: vue_types.bool,
  prefixCls: vue_types.string,
  // className: PropTypes.string,
  transitionName: vue_types.string,
  optionLabelProp: vue_types.string,
  optionFilterProp: vue_types.string,
  animation: vue_types.string,
  choiceTransitionName: vue_types.string,
  open: vue_types.bool,
  defaultOpen: vue_types.bool,
  // onChange: PropTypes.func,
  // onBlur: PropTypes.func,
  // onFocus: PropTypes.func,
  // onSelect: PropTypes.func,
  // onSearch: PropTypes.func,
  // onPopupScroll: PropTypes.func,
  // onMouseEnter: PropTypes.func,
  // onMouseLeave: PropTypes.func,
  // onInputKeyDown: PropTypes.func,
  placeholder: vue_types.any,
  // onDeselect: PropTypes.func,
  labelInValue: vue_types.bool,
  loading: vue_types.bool,
  value: vue_types.any,
  defaultValue: vue_types.any,
  dropdownStyle: vue_types.object,
  dropdownClassName: vue_types.string,
  maxTagTextLength: vue_types.number,
  maxTagCount: vue_types.number,
  maxTagPlaceholder: vue_types.any,
  tokenSeparators: vue_types.arrayOf(vue_types.string),
  getInputElement: vue_types.func,
  showAction: vue_types.arrayOf(vue_types.string),
  autoFocus: vue_types.bool,
  getPopupContainer: vue_types.func,
  clearIcon: vue_types.any,
  inputIcon: vue_types.any,
  removeIcon: vue_types.any,
  menuItemSelectedIcon: vue_types.any,
  dropdownRender: vue_types.func,
  mode: vue_types.oneOf(['multiple', 'tags']),
  backfill: vue_types.bool,
  dropdownAlign: vue_types.any,
  dropdownMatchSelectWidth: vue_types.bool,
  dropdownMenuStyle: vue_types.object,
  notFoundContent: vue_types.oneOfType([String, Number]),
  tabIndex: vue_types.oneOfType([String, Number])
};
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/_util/env.js
/* eslint-disable no-undef */
// Browser environment sniffing
var env_inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var env_UA = env_inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = env_UA && /msie|trident/.test(env_UA);
var env_isIE9 = env_UA && env_UA.indexOf('msie 9.0') > 0;
var isEdge = env_UA && env_UA.indexOf('edge/') > 0;
var isAndroid = env_UA && env_UA.indexOf('android') > 0 || weexPlatform === 'android';
var isIOS = env_UA && /iphone|ipad|ipod|ios/.test(env_UA) || weexPlatform === 'ios';
var isChrome = env_UA && /chrome\/\d+/.test(env_UA) && !isEdge;
var isPhantomJS = env_UA && /phantomjs/.test(env_UA);
var isFF = env_UA && env_UA.match(/firefox\/(\d+)/);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-select/Select.js

























external_commonjs_vue_commonjs2_vue_root_Vue_default().use(vue_ref/* default */.Z, {
  name: 'ant-ref'
});
var SELECT_EMPTY_VALUE_KEY = 'RC_SELECT_EMPTY_VALUE_KEY';
var Select_noop = function noop() {
  return null;
};

// Where el is the DOM element you'd like to test for visibility
function isHidden(node) {
  return !node || node.offsetParent === null;
}
function chaining() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }
  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    // eslint-disable-line
    // eslint-disable-line
    for (var i = 0; i < fns.length; i++) {
      if (fns[i] && typeof fns[i] === 'function') {
        fns[i].apply(chaining, args);
      }
    }
  };
}
var Select = {
  inheritAttrs: false,
  Option: Option,
  OptGroup: OptGroup,
  name: 'Select',
  mixins: [BaseMixin],
  props: (0,helpers_extends/* default */.Z)({}, SelectPropTypes, {
    prefixCls: SelectPropTypes.prefixCls.def('rc-select'),
    defaultOpen: vue_types.bool.def(false),
    labelInValue: SelectPropTypes.labelInValue.def(false),
    defaultActiveFirstOption: SelectPropTypes.defaultActiveFirstOption.def(true),
    showSearch: SelectPropTypes.showSearch.def(true),
    allowClear: SelectPropTypes.allowClear.def(false),
    placeholder: SelectPropTypes.placeholder.def(''),
    // showArrow: SelectPropTypes.showArrow.def(true),
    dropdownMatchSelectWidth: vue_types.bool.def(true),
    dropdownStyle: SelectPropTypes.dropdownStyle.def(function () {
      return {};
    }),
    dropdownMenuStyle: vue_types.object.def(function () {
      return {};
    }),
    optionFilterProp: SelectPropTypes.optionFilterProp.def('value'),
    optionLabelProp: SelectPropTypes.optionLabelProp.def('value'),
    notFoundContent: vue_types.any.def('Not Found'),
    backfill: vue_types.bool.def(false),
    showAction: SelectPropTypes.showAction.def(['click']),
    combobox: vue_types.bool.def(false),
    tokenSeparators: vue_types.arrayOf(vue_types.string).def([]),
    autoClearSearchValue: vue_types.bool.def(true),
    tabIndex: vue_types.any.def(0),
    dropdownRender: vue_types.func.def(function (menu) {
      return menu;
    })
    // onChange: noop,
    // onFocus: noop,
    // onBlur: noop,
    // onSelect: noop,
    // onSearch: noop,
    // onDeselect: noop,
    // onInputKeydown: noop,
  }),

  model: {
    prop: 'value',
    event: 'change'
  },
  created: function created() {
    this.saveInputRef = util_saveRef(this, 'inputRef');
    this.saveInputMirrorRef = util_saveRef(this, 'inputMirrorRef');
    this.saveTopCtrlRef = util_saveRef(this, 'topCtrlRef');
    this.saveSelectTriggerRef = util_saveRef(this, 'selectTriggerRef');
    this.saveRootRef = util_saveRef(this, 'rootRef');
    this.saveSelectionRef = util_saveRef(this, 'selectionRef');
    this._focused = false;
    this._mouseDown = false;
    this._options = [];
    this._empty = false;
  },
  data: function data() {
    var props = getOptionProps(this);
    var optionsInfo = this.getOptionsInfoFromProps(props);
    warning_default()(this.__propsSymbol__, 'Replace slots.default with props.children and pass props.__propsSymbol__');
    if (props.tags && typeof props.filterOption !== 'function') {
      var isDisabledExist = Object.keys(optionsInfo).some(function (key) {
        return optionsInfo[key].disabled;
      });
      warning_default()(!isDisabledExist, 'Please avoid setting option to disabled in tags mode since user can always type text as tag.');
    }
    var state = {
      _value: this.getValueFromProps(props, true),
      // true: use default value
      _inputValue: props.combobox ? this.getInputValueForCombobox(props, optionsInfo, true // use default value
      ) : '',
      _open: props.defaultOpen,
      _optionsInfo: optionsInfo,
      _backfillValue: '',
      // a flag for aviod redundant getOptionsInfoFromProps call
      _skipBuildOptionsInfo: true,
      _ariaId: generateUUID()
    };
    return (0,helpers_extends/* default */.Z)({}, state, {
      _mirrorInputValue: state._inputValue
    }, this.getDerivedState(props, state));
  },
  mounted: function mounted() {
    var _this = this;
    this.$nextTick(function () {
      // when defaultOpen is true, we should auto focus search input
      // https://github.com/ant-design/ant-design/issues/14254
      if (_this.autoFocus || _this._open) {
        _this.focus();
      }
      // this.setState({
      //   _ariaId: generateUUID(),
      // });
    });
  },

  watch: {
    __propsSymbol__: function __propsSymbol__() {
      (0,helpers_extends/* default */.Z)(this.$data, this.getDerivedState(getOptionProps(this), this.$data));
    },
    '$data._inputValue': function $data_inputValue(val) {
      this.$data._mirrorInputValue = val;
    }
  },
  updated: function updated() {
    var _this2 = this;
    this.$nextTick(function () {
      if (isMultipleOrTags(_this2.$props)) {
        var inputNode = _this2.getInputDOMNode();
        var mirrorNode = _this2.getInputMirrorDOMNode();
        if (inputNode && inputNode.value && mirrorNode) {
          inputNode.style.width = '';
          inputNode.style.width = mirrorNode.clientWidth + 10 + 'px';
        } else if (inputNode) {
          inputNode.style.width = '';
        }
      }
      _this2.forcePopupAlign();
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.clearFocusTime();
    this.clearBlurTime();
    this.clearComboboxTime();
    if (this.dropdownContainer) {
      document.body.removeChild(this.dropdownContainer);
      this.dropdownContainer = null;
    }
  },
  methods: {
    getDerivedState: function getDerivedState(nextProps, prevState) {
      var optionsInfo = prevState._skipBuildOptionsInfo ? prevState._optionsInfo : this.getOptionsInfoFromProps(nextProps, prevState);
      var newState = {
        _optionsInfo: optionsInfo,
        _skipBuildOptionsInfo: false
      };
      if ('open' in nextProps) {
        newState._open = nextProps.open;
      }
      if ('value' in nextProps) {
        var value = this.getValueFromProps(nextProps);
        newState._value = value;
        if (nextProps.combobox) {
          newState._inputValue = this.getInputValueForCombobox(nextProps, optionsInfo);
        }
      }
      return newState;
    },
    getOptionsFromChildren: function getOptionsFromChildren() {
      var _this3 = this;
      var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      children.forEach(function (child) {
        if (!child.data || child.data.slot !== undefined) {
          return;
        }
        if (getSlotOptions(child).isSelectOptGroup) {
          _this3.getOptionsFromChildren(child.componentOptions.children, options);
        } else {
          options.push(child);
        }
      });
      return options;
    },
    getInputValueForCombobox: function getInputValueForCombobox(props, optionsInfo, useDefaultValue) {
      var value = [];
      if ('value' in props && !useDefaultValue) {
        value = util_toArray(props.value);
      }
      if ('defaultValue' in props && useDefaultValue) {
        value = util_toArray(props.defaultValue);
      }
      if (value.length) {
        value = value[0];
      } else {
        return '';
      }
      var label = value;
      if (props.labelInValue) {
        label = value.label;
      } else if (optionsInfo[getMapKey(value)]) {
        label = optionsInfo[getMapKey(value)].label;
      }
      if (label === undefined) {
        label = '';
      }
      return label;
    },
    getLabelFromOption: function getLabelFromOption(props, option) {
      return getPropValue(option, props.optionLabelProp);
    },
    getOptionsInfoFromProps: function getOptionsInfoFromProps(props, preState) {
      var _this4 = this;
      var options = this.getOptionsFromChildren(this.$props.children);
      var optionsInfo = {};
      options.forEach(function (option) {
        var singleValue = getValuePropValue(option);
        optionsInfo[getMapKey(singleValue)] = {
          option: option,
          value: singleValue,
          label: _this4.getLabelFromOption(props, option),
          title: getValueByProp(option, 'title'),
          disabled: getValueByProp(option, 'disabled')
        };
      });
      if (preState) {
        // keep option info in pre state value.
        var oldOptionsInfo = preState._optionsInfo;
        var value = preState._value;
        if (value) {
          value.forEach(function (v) {
            var key = getMapKey(v);
            if (!optionsInfo[key] && oldOptionsInfo[key] !== undefined) {
              optionsInfo[key] = oldOptionsInfo[key];
            }
          });
        }
      }
      return optionsInfo;
    },
    getValueFromProps: function getValueFromProps(props, useDefaultValue) {
      var value = [];
      if ('value' in props && !useDefaultValue) {
        value = util_toArray(props.value);
      }
      if ('defaultValue' in props && useDefaultValue) {
        value = util_toArray(props.defaultValue);
      }
      if (props.labelInValue) {
        value = value.map(function (v) {
          return v.key;
        });
      }
      return value;
    },
    onInputChange: function onInputChange(e) {
      var _e$target = e.target,
        val = _e$target.value,
        composing = _e$target.composing;
      var _$data$_inputValue = this.$data._inputValue,
        _inputValue = _$data$_inputValue === undefined ? '' : _$data$_inputValue;
      if (e.isComposing || composing || _inputValue === val) {
        this.setState({
          _mirrorInputValue: val
        });
        return;
      }
      var tokenSeparators = this.$props.tokenSeparators;
      if (isMultipleOrTags(this.$props) && tokenSeparators.length && includesSeparators(val, tokenSeparators)) {
        var nextValue = this.getValueByInput(val);
        if (nextValue !== undefined) {
          this.fireChange(nextValue);
        }
        this.setOpenState(false, {
          needFocus: true
        });
        this.setInputValue('', false);
        return;
      }
      this.setInputValue(val);
      this.setState({
        _open: true
      });
      if (isCombobox(this.$props)) {
        this.fireChange([val]);
      }
    },
    onDropdownVisibleChange: function onDropdownVisibleChange(open) {
      if (open && !this._focused) {
        this.clearBlurTime();
        this.timeoutFocus();
        this._focused = true;
        this.updateFocusClassName();
      }
      this.setOpenState(open);
    },
    // combobox ignore
    onKeyDown: function onKeyDown(event) {
      var open = this.$data._open;
      var disabled = this.$props.disabled;
      if (disabled) {
        return;
      }
      var keyCode = event.keyCode;
      if (open && !this.getInputDOMNode()) {
        this.onInputKeydown(event);
      } else if (keyCode === _util_KeyCode.ENTER || keyCode === _util_KeyCode.DOWN) {
        // vue state是同步更新，onKeyDown在onMenuSelect后会再次调用，单选时不在调用setOpenState
        // https://github.com/vueComponent/ant-design-vue/issues/1142
        if (keyCode === _util_KeyCode.ENTER && !isMultipleOrTags(this.$props)) {
          this.maybeFocus(true);
        } else if (!open) {
          this.setOpenState(true);
        }
        event.preventDefault();
      } else if (keyCode === _util_KeyCode.SPACE) {
        // Not block space if popup is shown
        if (!open) {
          this.setOpenState(true);
          event.preventDefault();
        }
      }
    },
    onInputKeydown: function onInputKeydown(event) {
      var _this5 = this;
      var _$props = this.$props,
        disabled = _$props.disabled,
        combobox = _$props.combobox,
        defaultActiveFirstOption = _$props.defaultActiveFirstOption;
      if (disabled) {
        return;
      }
      var state = this.$data;
      var isRealOpen = this.getRealOpenState(state);
      var keyCode = event.keyCode;
      if (isMultipleOrTags(this.$props) && !event.target.value && keyCode === _util_KeyCode.BACKSPACE) {
        event.preventDefault();
        var value = state._value;
        if (value.length) {
          this.removeSelected(value[value.length - 1]);
        }
        return;
      }
      if (keyCode === _util_KeyCode.DOWN) {
        if (!state._open) {
          this.openIfHasChildren();
          event.preventDefault();
          event.stopPropagation();
          return;
        }
      } else if (keyCode === _util_KeyCode.ENTER && state._open) {
        // Aviod trigger form submit when select item
        // https://github.com/ant-design/ant-design/issues/10861
        // https://github.com/ant-design/ant-design/issues/14544
        if (isRealOpen || !combobox) {
          event.preventDefault();
        }
        // Hard close popup to avoid lock of non option in combobox mode
        if (isRealOpen && combobox && defaultActiveFirstOption === false) {
          this.comboboxTimer = setTimeout(function () {
            _this5.setOpenState(false);
          });
        }
      } else if (keyCode === _util_KeyCode.ESC) {
        if (state._open) {
          this.setOpenState(false);
          event.preventDefault();
          event.stopPropagation();
        }
        return;
      }
      if (isRealOpen && this.selectTriggerRef) {
        var menu = this.selectTriggerRef.getInnerMenu();
        if (menu && menu.onKeyDown(event, this.handleBackfill)) {
          event.preventDefault();
          event.stopPropagation();
        }
      }
    },
    onMenuSelect: function onMenuSelect(_ref) {
      var item = _ref.item;
      if (!item) {
        return;
      }
      var value = this.$data._value;
      var props = this.$props;
      var selectedValue = getValuePropValue(item);
      var lastValue = value[value.length - 1];
      var skipTrigger = false;
      if (isMultipleOrTags(props)) {
        if (findIndexInValueBySingleValue(value, selectedValue) !== -1) {
          skipTrigger = true;
        } else {
          value = value.concat([selectedValue]);
        }
      } else {
        if (!isCombobox(props) && lastValue !== undefined && lastValue === selectedValue && selectedValue !== this.$data._backfillValue) {
          this.setOpenState(false, {
            needFocus: true,
            fireSearch: false
          });
          skipTrigger = true;
        } else {
          value = [selectedValue];
          this.setOpenState(false, {
            needFocus: true,
            fireSearch: false
          });
        }
      }
      if (!skipTrigger) {
        this.fireChange(value);
      }
      if (!skipTrigger) {
        this.fireSelect(selectedValue);
        var inputValue = isCombobox(props) ? getPropValue(item, props.optionLabelProp) : '';
        if (props.autoClearSearchValue) {
          this.setInputValue(inputValue, false);
        }
      }
    },
    onMenuDeselect: function onMenuDeselect(_ref2) {
      var item = _ref2.item,
        domEvent = _ref2.domEvent;
      if (domEvent.type === 'keydown' && domEvent.keyCode === _util_KeyCode.ENTER) {
        var menuItemDomNode = item.$el;
        // https://github.com/ant-design/ant-design/issues/20465#issuecomment-569033796
        if (!isHidden(menuItemDomNode)) {
          this.removeSelected(getValuePropValue(item));
        }
        return;
      }
      if (domEvent.type === 'click') {
        this.removeSelected(getValuePropValue(item));
      }
      if (this.autoClearSearchValue) {
        this.setInputValue('');
      }
    },
    onArrowClick: function onArrowClick(e) {
      e.stopPropagation();
      e.preventDefault();
      this.clearBlurTime();
      if (!this.disabled) {
        this.setOpenState(!this.$data._open, {
          needFocus: !this.$data._open
        });
      }
    },
    onPlaceholderClick: function onPlaceholderClick() {
      if (this.getInputDOMNode() && this.getInputDOMNode()) {
        this.getInputDOMNode().focus();
      }
    },
    onPopupFocus: function onPopupFocus() {
      // fix ie scrollbar, focus element again
      this.maybeFocus(true, true);
    },
    onClearSelection: function onClearSelection(event) {
      var props = this.$props;
      var state = this.$data;
      if (props.disabled) {
        return;
      }
      var inputValue = state._inputValue,
        value = state._value;
      event.stopPropagation();
      if (inputValue || value.length) {
        if (value.length) {
          this.fireChange([]);
        }
        this.setOpenState(false, {
          needFocus: true
        });
        if (inputValue) {
          this.setInputValue('');
        }
      }
    },
    onChoiceAnimationLeave: function onChoiceAnimationLeave() {
      this.forcePopupAlign();
    },
    getOptionInfoBySingleValue: function getOptionInfoBySingleValue(value, optionsInfo) {
      var h = this.$createElement;
      var info = void 0;
      optionsInfo = optionsInfo || this.$data._optionsInfo;
      if (optionsInfo[getMapKey(value)]) {
        info = optionsInfo[getMapKey(value)];
      }
      if (info) {
        return info;
      }
      var defaultLabel = value;
      if (this.$props.labelInValue) {
        var valueLabel = getLabelFromPropsValue(this.$props.value, value);
        var defaultValueLabel = getLabelFromPropsValue(this.$props.defaultValue, value);
        if (valueLabel !== undefined) {
          defaultLabel = valueLabel;
        } else if (defaultValueLabel !== undefined) {
          defaultLabel = defaultValueLabel;
        }
      }
      var defaultInfo = {
        option: h(Option, {
          attrs: {
            value: value
          },
          key: value
        }, [value]),
        value: value,
        label: defaultLabel
      };
      return defaultInfo;
    },
    getOptionBySingleValue: function getOptionBySingleValue(value) {
      var _getOptionInfoBySingl = this.getOptionInfoBySingleValue(value),
        option = _getOptionInfoBySingl.option;
      return option;
    },
    getOptionsBySingleValue: function getOptionsBySingleValue(values) {
      var _this6 = this;
      return values.map(function (value) {
        return _this6.getOptionBySingleValue(value);
      });
    },
    getValueByLabel: function getValueByLabel(label) {
      var _this7 = this;
      if (label === undefined) {
        return null;
      }
      var value = null;
      Object.keys(this.$data._optionsInfo).forEach(function (key) {
        var info = _this7.$data._optionsInfo[key];
        var disabled = info.disabled;
        if (disabled) {
          return;
        }
        var oldLable = util_toArray(info.label);
        if (oldLable && oldLable.join('') === label) {
          value = info.value;
        }
      });
      return value;
    },
    getVLBySingleValue: function getVLBySingleValue(value) {
      if (this.$props.labelInValue) {
        return {
          key: value,
          label: this.getLabelBySingleValue(value)
        };
      }
      return value;
    },
    getVLForOnChange: function getVLForOnChange(vlsS) {
      var _this8 = this;
      var vls = vlsS;
      if (vls !== undefined) {
        if (!this.labelInValue) {
          vls = vls.map(function (v) {
            return v;
          });
        } else {
          vls = vls.map(function (vl) {
            return {
              key: vl,
              label: _this8.getLabelBySingleValue(vl)
            };
          });
        }
        return isMultipleOrTags(this.$props) ? vls : vls[0];
      }
      return vls;
    },
    getLabelBySingleValue: function getLabelBySingleValue(value, optionsInfo) {
      var _getOptionInfoBySingl2 = this.getOptionInfoBySingleValue(value, optionsInfo),
        label = _getOptionInfoBySingl2.label;
      return label;
    },
    getDropdownContainer: function getDropdownContainer() {
      if (!this.dropdownContainer) {
        this.dropdownContainer = document.createElement('div');
        document.body.appendChild(this.dropdownContainer);
      }
      return this.dropdownContainer;
    },
    getPlaceholderElement: function getPlaceholderElement() {
      var h = this.$createElement;
      var props = this.$props,
        state = this.$data;
      var hidden = false;
      if (state._mirrorInputValue) {
        hidden = true;
      }
      var value = state._value;
      if (value.length) {
        hidden = true;
      }
      if (!state._mirrorInputValue && isCombobox(props) && value.length === 1 && state._value && !state._value[0]) {
        hidden = false;
      }
      var placeholder = props.placeholder;
      if (placeholder) {
        var p = {
          on: {
            mousedown: preventDefaultEvent,
            click: this.onPlaceholderClick
          },
          attrs: UNSELECTABLE_ATTRIBUTE,
          style: (0,helpers_extends/* default */.Z)({
            display: hidden ? 'none' : 'block'
          }, UNSELECTABLE_STYLE),
          'class': props.prefixCls + '-selection__placeholder'
        };
        return h('div', p, [placeholder]);
      }
      return null;
    },
    inputClick: function inputClick(e) {
      if (this.$data._open) {
        this.clearBlurTime();
        e.stopPropagation();
      } else {
        this._focused = false;
      }
    },
    inputBlur: function inputBlur(e) {
      var _this9 = this;
      var target = e.relatedTarget || document.activeElement;

      // https://github.com/vueComponent/ant-design-vue/issues/999
      // https://github.com/vueComponent/ant-design-vue/issues/1223
      if ((isIE || isEdge) && (e.relatedTarget === this.$refs.arrow || target && this.selectTriggerRef && this.selectTriggerRef.getInnerMenu() && this.selectTriggerRef.getInnerMenu().$el === target || contains(e.target, target))) {
        e.target.focus();
        e.preventDefault();
        return;
      }
      this.clearBlurTime();
      if (this.disabled) {
        e.preventDefault();
        return;
      }
      this.blurTimer = setTimeout(function () {
        _this9._focused = false;
        _this9.updateFocusClassName();
        var props = _this9.$props;
        var value = _this9.$data._value;
        var inputValue = _this9.$data._inputValue;
        if (isSingleMode(props) && props.showSearch && inputValue && props.defaultActiveFirstOption) {
          var options = _this9._options || [];
          if (options.length) {
            var firstOption = findFirstMenuItem(options);
            if (firstOption) {
              value = [getValuePropValue(firstOption)];
              _this9.fireChange(value);
            }
          }
        } else if (isMultipleOrTags(props) && inputValue) {
          if (_this9._mouseDown) {
            // need update dropmenu when not blur
            _this9.setInputValue('');
          } else {
            // why not use setState?
            _this9.$data._inputValue = '';
            if (_this9.getInputDOMNode && _this9.getInputDOMNode()) {
              _this9.getInputDOMNode().value = '';
            }
          }
          var tmpValue = _this9.getValueByInput(inputValue);
          if (tmpValue !== undefined) {
            value = tmpValue;
            _this9.fireChange(value);
          }
        }
        // if click the rest space of Select in multiple mode
        if (isMultipleOrTags(props) && _this9._mouseDown) {
          _this9.maybeFocus(true, true);
          _this9._mouseDown = false;
          return;
        }
        _this9.setOpenState(false);
        _this9.$emit('blur', _this9.getVLForOnChange(value));
      }, 200);
    },
    inputFocus: function inputFocus(e) {
      if (this.$props.disabled) {
        e.preventDefault();
        return;
      }
      this.clearBlurTime();

      // In IE11, onOuterFocus will be trigger twice when focus input
      // First one: e.target is div
      // Second one: e.target is input
      // other browser only trigger second one
      // https://github.com/ant-design/ant-design/issues/15942
      // Here we ignore the first one when e.target is div
      var inputNode = this.getInputDOMNode();
      if (inputNode && e.target === this.rootRef) {
        return;
      }
      if (!isMultipleOrTagsOrCombobox(this.$props) && e.target === inputNode) {
        return;
      }
      if (this._focused) {
        return;
      }
      this._focused = true;
      this.updateFocusClassName();
      // only effect multiple or tag mode
      if (!isMultipleOrTags(this.$props) || !this._mouseDown) {
        this.timeoutFocus();
      }
    },
    _getInputElement: function _getInputElement() {
      var h = this.$createElement;
      var props = this.$props;
      var _$data = this.$data,
        inputValue = _$data._inputValue,
        _mirrorInputValue = _$data._mirrorInputValue;
      var attrs = getAttrs(this);
      var defaultInput = h('input', {
        attrs: {
          id: attrs.id,
          autoComplete: 'off'
        }
      });
      var inputElement = props.getInputElement ? props.getInputElement() : defaultInput;
      var inputCls = classnames_default()(getClass(inputElement), (0,defineProperty/* default */.Z)({}, props.prefixCls + '-search__field', true));
      var inputEvents = getEvents(inputElement);
      // https://github.com/ant-design/ant-design/issues/4992#issuecomment-281542159
      // Add space to the end of the inputValue as the width measurement tolerance
      inputElement.data = inputElement.data || {};
      return h('div', {
        'class': props.prefixCls + '-search__field__wrap',
        on: {
          'click': this.inputClick
        }
      }, [cloneElement(inputElement, {
        props: {
          disabled: props.disabled,
          value: inputValue
        },
        attrs: (0,helpers_extends/* default */.Z)({}, inputElement.data.attrs || {}, {
          disabled: props.disabled,
          value: inputValue
        }),
        domProps: {
          value: inputValue
        },
        'class': inputCls,
        directives: [{
          name: 'ant-ref',
          value: this.saveInputRef
        }, {
          name: 'ant-input'
        }],
        on: {
          input: this.onInputChange,
          keydown: chaining(this.onInputKeydown, inputEvents.keydown, getListeners(this).inputKeydown),
          focus: chaining(this.inputFocus, inputEvents.focus),
          blur: chaining(this.inputBlur, inputEvents.blur)
        }
      }), h('span', babel_helper_vue_jsx_merge_props_default()([{
        directives: [{
          name: 'ant-ref',
          value: this.saveInputMirrorRef
        }]
      }, {
        // ref='inputMirrorRef'
        'class': props.prefixCls + '-search__field__mirror'
      }]), [_mirrorInputValue, '\xA0'])]);
    },
    getInputDOMNode: function getInputDOMNode() {
      return this.topCtrlRef ? this.topCtrlRef.querySelector('input,textarea,div[contentEditable]') : this.inputRef;
    },
    getInputMirrorDOMNode: function getInputMirrorDOMNode() {
      return this.inputMirrorRef;
    },
    getPopupDOMNode: function getPopupDOMNode() {
      if (this.selectTriggerRef) {
        return this.selectTriggerRef.getPopupDOMNode();
      }
    },
    getPopupMenuComponent: function getPopupMenuComponent() {
      if (this.selectTriggerRef) {
        return this.selectTriggerRef.getInnerMenu();
      }
    },
    setOpenState: function setOpenState(open) {
      var _this10 = this;
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var props = this.$props,
        state = this.$data;
      var needFocus = config.needFocus,
        fireSearch = config.fireSearch;
      if (state._open === open) {
        this.maybeFocus(open, !!needFocus);
        return;
      }
      this.__emit('dropdownVisibleChange', open);
      var nextState = {
        _open: open,
        _backfillValue: ''
      };
      // clear search input value when open is false in singleMode.
      if (!open && isSingleMode(props) && props.showSearch) {
        this.setInputValue('', fireSearch);
      }
      if (!open) {
        this.maybeFocus(open, !!needFocus);
      }
      this.setState(nextState, function () {
        if (open) {
          _this10.maybeFocus(open, !!needFocus);
        }
      });
    },
    setInputValue: function setInputValue(inputValue) {
      var fireSearch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (inputValue !== this.$data._inputValue) {
        this.setState({
          _inputValue: inputValue
        }, this.forcePopupAlign);
        if (fireSearch) {
          this.$emit('search', inputValue);
        }
      }
    },
    getValueByInput: function getValueByInput(str) {
      var _this11 = this;
      var _$props2 = this.$props,
        multiple = _$props2.multiple,
        tokenSeparators = _$props2.tokenSeparators;
      var nextValue = this.$data._value;
      var hasNewValue = false;
      splitBySeparators(str, tokenSeparators).forEach(function (label) {
        var selectedValue = [label];
        if (multiple) {
          var value = _this11.getValueByLabel(label);
          if (value && findIndexInValueBySingleValue(nextValue, value) === -1) {
            nextValue = nextValue.concat(value);
            hasNewValue = true;
            _this11.fireSelect(value);
          }
        } else if (findIndexInValueBySingleValue(nextValue, label) === -1) {
          nextValue = nextValue.concat(selectedValue);
          hasNewValue = true;
          _this11.fireSelect(label);
        }
      });
      return hasNewValue ? nextValue : undefined;
    },
    getRealOpenState: function getRealOpenState(state) {
      var _open = this.$props.open;
      if (typeof _open === 'boolean') {
        return _open;
      }
      var open = (state || this.$data)._open;
      var options = this._options || [];
      if (isMultipleOrTagsOrCombobox(this.$props) || !this.$props.showSearch) {
        if (open && !options.length) {
          open = false;
        }
      }
      return open;
    },
    focus: function focus() {
      if (isSingleMode(this.$props) && this.selectionRef) {
        this.selectionRef.focus();
      } else if (this.getInputDOMNode()) {
        this.getInputDOMNode().focus();
      }
    },
    blur: function blur() {
      if (isSingleMode(this.$props) && this.selectionRef) {
        this.selectionRef.blur();
      } else if (this.getInputDOMNode()) {
        this.getInputDOMNode().blur();
      }
    },
    markMouseDown: function markMouseDown() {
      this._mouseDown = true;
    },
    markMouseLeave: function markMouseLeave() {
      this._mouseDown = false;
    },
    handleBackfill: function handleBackfill(item) {
      if (!this.backfill || !(isSingleMode(this.$props) || isCombobox(this.$props))) {
        return;
      }
      var key = getValuePropValue(item);
      if (isCombobox(this.$props)) {
        this.setInputValue(key, false);
      }
      this.setState({
        _value: [key],
        _backfillValue: key
      });
    },
    _filterOption: function _filterOption(input, child) {
      var defaultFilter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultFilterFn;
      var _$data2 = this.$data,
        value = _$data2._value,
        backfillValue = _$data2._backfillValue;
      var lastValue = value[value.length - 1];
      if (!input || lastValue && lastValue === backfillValue) {
        return true;
      }
      var filterFn = this.$props.filterOption;
      if (hasProp(this, 'filterOption')) {
        if (filterFn === true) {
          filterFn = defaultFilter.bind(this);
        }
      } else {
        filterFn = defaultFilter.bind(this);
      }
      if (!filterFn) {
        return true;
      } else if (typeof filterFn === 'function') {
        return filterFn.call(this, input, child);
      } else if (getValueByProp(child, 'disabled')) {
        return false;
      }
      return true;
    },
    timeoutFocus: function timeoutFocus() {
      var _this12 = this;
      if (this.focusTimer) {
        this.clearFocusTime();
      }
      this.focusTimer = window.setTimeout(function () {
        // this._focused = true
        // this.updateFocusClassName()
        _this12.$emit('focus');
      }, 10);
    },
    clearFocusTime: function clearFocusTime() {
      if (this.focusTimer) {
        clearTimeout(this.focusTimer);
        this.focusTimer = null;
      }
    },
    clearBlurTime: function clearBlurTime() {
      if (this.blurTimer) {
        clearTimeout(this.blurTimer);
        this.blurTimer = null;
      }
    },
    clearComboboxTime: function clearComboboxTime() {
      if (this.comboboxTimer) {
        clearTimeout(this.comboboxTimer);
        this.comboboxTimer = null;
      }
    },
    updateFocusClassName: function updateFocusClassName() {
      var rootRef = this.rootRef,
        prefixCls = this.prefixCls;
      // avoid setState and its side effect

      if (this._focused) {
        component_classes_default()(rootRef).add(prefixCls + '-focused');
      } else {
        component_classes_default()(rootRef).remove(prefixCls + '-focused');
      }
    },
    maybeFocus: function maybeFocus(open, needFocus) {
      if (needFocus || open) {
        var input = this.getInputDOMNode();
        var _document = document,
          activeElement = _document.activeElement;
        if (input && (open || isMultipleOrTagsOrCombobox(this.$props))) {
          if (activeElement !== input) {
            input.focus();
            this._focused = true;
          }
        } else if (activeElement !== this.selectionRef && this.selectionRef) {
          this.selectionRef.focus();
          this._focused = true;
        }
      }
    },
    removeSelected: function removeSelected(selectedKey, e) {
      var props = this.$props;
      if (props.disabled || this.isChildDisabled(selectedKey)) {
        return;
      }
      // Do not trigger Trigger popup
      if (e && e.stopPropagation) {
        e.stopPropagation();
      }
      var oldValue = this.$data._value;
      var value = oldValue.filter(function (singleValue) {
        return singleValue !== selectedKey;
      });
      var canMultiple = isMultipleOrTags(props);
      if (canMultiple) {
        var event = selectedKey;
        if (props.labelInValue) {
          event = {
            key: selectedKey,
            label: this.getLabelBySingleValue(selectedKey)
          };
        }
        this.$emit('deselect', event, this.getOptionBySingleValue(selectedKey));
      }
      this.fireChange(value);
    },
    openIfHasChildren: function openIfHasChildren() {
      var $props = this.$props;
      if ($props.children && $props.children.length || isSingleMode($props)) {
        this.setOpenState(true);
      }
    },
    fireSelect: function fireSelect(value) {
      this.$emit('select', this.getVLBySingleValue(value), this.getOptionBySingleValue(value));
    },
    fireChange: function fireChange(value) {
      if (!hasProp(this, 'value')) {
        this.setState({
          _value: value
        }, this.forcePopupAlign);
      }
      var vls = this.getVLForOnChange(value);
      var options = this.getOptionsBySingleValue(value);
      this._valueOptions = options;
      this.$emit('change', vls, isMultipleOrTags(this.$props) ? options : options[0]);
    },
    isChildDisabled: function isChildDisabled(key) {
      return (this.$props.children || []).some(function (child) {
        var childValue = getValuePropValue(child);
        return childValue === key && getValueByProp(child, 'disabled');
      });
    },
    forcePopupAlign: function forcePopupAlign() {
      if (!this.$data._open) {
        return;
      }
      if (this.selectTriggerRef && this.selectTriggerRef.triggerRef) {
        this.selectTriggerRef.triggerRef.forcePopupAlign();
      }
    },
    renderFilterOptions: function renderFilterOptions() {
      var h = this.$createElement;
      var inputValue = this.$data._inputValue;
      var _$props3 = this.$props,
        children = _$props3.children,
        tags = _$props3.tags,
        notFoundContent = _$props3.notFoundContent;
      var menuItems = [];
      var childrenKeys = [];
      var empty = false;
      var options = this.renderFilterOptionsFromChildren(children, childrenKeys, menuItems);
      if (tags) {
        // tags value must be string
        var value = this.$data._value;
        value = value.filter(function (singleValue) {
          return childrenKeys.indexOf(singleValue) === -1 && (!inputValue || String(singleValue).indexOf(String(inputValue)) > -1);
        });

        // sort by length
        value.sort(function (val1, val2) {
          return val1.length - val2.length;
        });
        value.forEach(function (singleValue) {
          var key = singleValue;
          var attrs = (0,helpers_extends/* default */.Z)({}, UNSELECTABLE_ATTRIBUTE, {
            role: 'option'
          });
          var menuItem = h(vc_menu_MenuItem, babel_helper_vue_jsx_merge_props_default()([{
            style: UNSELECTABLE_STYLE
          }, {
            attrs: attrs
          }, {
            attrs: {
              value: key
            },
            key: key
          }]), [key]);
          options.push(menuItem);
          menuItems.push(menuItem);
        });
        // ref: https://github.com/ant-design/ant-design/issues/14090
        if (inputValue && menuItems.every(function (option) {
          return getValuePropValue(option) !== inputValue;
        })) {
          var p = {
            attrs: UNSELECTABLE_ATTRIBUTE,
            key: inputValue,
            props: {
              value: inputValue,
              role: 'option'
            },
            style: UNSELECTABLE_STYLE
          };
          options.unshift(h(vc_menu_MenuItem, p, [inputValue]));
        }
      }
      if (!options.length && notFoundContent) {
        empty = true;
        var _p = {
          attrs: UNSELECTABLE_ATTRIBUTE,
          key: 'NOT_FOUND',
          props: {
            value: 'NOT_FOUND',
            disabled: true,
            role: 'option'
          },
          style: UNSELECTABLE_STYLE
        };
        options = [h(vc_menu_MenuItem, _p, [notFoundContent])];
      }
      return {
        empty: empty,
        options: options
      };
    },
    renderFilterOptionsFromChildren: function renderFilterOptionsFromChildren() {
      var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var _this13 = this;
      var childrenKeys = arguments[1];
      var menuItems = arguments[2];
      var h = this.$createElement;
      var sel = [];
      var props = this.$props;
      var inputValue = this.$data._inputValue;
      var tags = props.tags;
      children.forEach(function (child) {
        if (!child.data || child.data.slot !== undefined) {
          return;
        }
        if (getSlotOptions(child).isSelectOptGroup) {
          var label = getComponentFromProp(child, 'label');
          var key = child.key;
          if (!key && typeof label === 'string') {
            key = label;
          } else if (!label && key) {
            label = key;
          }
          var childChildren = getSlots(child)['default'];
          childChildren = typeof childChildren === 'function' ? childChildren() : childChildren;
          // Match option group label
          if (inputValue && _this13._filterOption(inputValue, child)) {
            var innerItems = childChildren.map(function (subChild) {
              var childValueSub = getValuePropValue(subChild) || subChild.key;
              return h(vc_menu_MenuItem, babel_helper_vue_jsx_merge_props_default()([{
                key: childValueSub,
                attrs: {
                  value: childValueSub
                }
              }, subChild.data]), [subChild.componentOptions.children]);
            });
            sel.push(h(vc_menu_MenuItemGroup, {
              key: key,
              attrs: {
                title: label
              },
              'class': getClass(child)
            }, [innerItems]));

            // Not match
          } else {
            var _innerItems = _this13.renderFilterOptionsFromChildren(childChildren, childrenKeys, menuItems);
            if (_innerItems.length) {
              sel.push(h(vc_menu_MenuItemGroup, babel_helper_vue_jsx_merge_props_default()([{
                key: key,
                attrs: {
                  title: label
                }
              }, child.data]), [_innerItems]));
            }
          }
          return;
        }
        warning_default()(getSlotOptions(child).isSelectOption, 'the children of `Select` should be `Select.Option` or `Select.OptGroup`, ' + ('instead of `' + (getSlotOptions(child).name || getSlotOptions(child)) + '`.'));
        var childValue = getValuePropValue(child);
        validateOptionValue(childValue, _this13.$props);
        if (_this13._filterOption(inputValue, child)) {
          var p = {
            attrs: (0,helpers_extends/* default */.Z)({}, UNSELECTABLE_ATTRIBUTE, getAttrs(child)),
            key: childValue,
            props: (0,helpers_extends/* default */.Z)({
              value: childValue
            }, getPropsData(child), {
              role: 'option'
            }),
            style: UNSELECTABLE_STYLE,
            on: getEvents(child),
            'class': getClass(child)
          };
          var menuItem = h(vc_menu_MenuItem, p, [child.componentOptions.children]);
          sel.push(menuItem);
          menuItems.push(menuItem);
        }
        if (tags) {
          childrenKeys.push(childValue);
        }
      });
      return sel;
    },
    renderTopControlNode: function renderTopControlNode() {
      var _this14 = this;
      var h = this.$createElement;
      var props = this.$props;
      var _$data3 = this.$data,
        value = _$data3._value,
        inputValue = _$data3._inputValue,
        open = _$data3._open;
      var choiceTransitionName = props.choiceTransitionName,
        prefixCls = props.prefixCls,
        maxTagTextLength = props.maxTagTextLength,
        maxTagCount = props.maxTagCount,
        maxTagPlaceholder = props.maxTagPlaceholder,
        showSearch = props.showSearch;
      var removeIcon = getComponentFromProp(this, 'removeIcon');
      var className = prefixCls + '-selection__rendered';
      // search input is inside topControlNode in single, multiple & combobox. 2016/04/13
      var innerNode = null;
      if (isSingleMode(props)) {
        var selectedValue = null;
        if (value.length) {
          var showSelectedValue = false;
          var opacity = 1;
          if (!showSearch) {
            showSelectedValue = true;
          } else if (open) {
            showSelectedValue = !inputValue;
            if (showSelectedValue) {
              opacity = 0.4;
            }
          } else {
            showSelectedValue = true;
          }
          var singleValue = value[0];
          var _getOptionInfoBySingl3 = this.getOptionInfoBySingleValue(singleValue),
            label = _getOptionInfoBySingl3.label,
            title = _getOptionInfoBySingl3.title;
          selectedValue = h('div', {
            key: 'value',
            'class': prefixCls + '-selection-selected-value',
            attrs: {
              title: toTitle(title || label)
            },
            style: {
              display: showSelectedValue ? 'block' : 'none',
              opacity: opacity
            }
          }, [label]);
        }
        if (!showSearch) {
          innerNode = [selectedValue];
        } else {
          innerNode = [selectedValue, h('div', {
            'class': prefixCls + '-search ' + prefixCls + '-search--inline',
            key: 'input',
            style: {
              display: open ? 'block' : 'none'
            }
          }, [this._getInputElement()])];
        }
      } else {
        var selectedValueNodes = [];
        var limitedCountValue = value;
        var maxTagPlaceholderEl = void 0;
        if (maxTagCount !== undefined && value.length > maxTagCount) {
          limitedCountValue = limitedCountValue.slice(0, maxTagCount);
          var omittedValues = this.getVLForOnChange(value.slice(maxTagCount, value.length));
          var content = '+ ' + (value.length - maxTagCount) + ' ...';
          if (maxTagPlaceholder) {
            content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
          }
          var attrs = (0,helpers_extends/* default */.Z)({}, UNSELECTABLE_ATTRIBUTE, {
            role: 'presentation',
            title: toTitle(content)
          });
          maxTagPlaceholderEl = h('li', babel_helper_vue_jsx_merge_props_default()([{
            style: UNSELECTABLE_STYLE
          }, {
            attrs: attrs
          }, {
            on: {
              'mousedown': preventDefaultEvent
            },
            'class': prefixCls + '-selection__choice ' + prefixCls + '-selection__choice__disabled',
            key: 'maxTagPlaceholder'
          }]), [h('div', {
            'class': prefixCls + '-selection__choice__content'
          }, [content])]);
        }
        if (isMultipleOrTags(props)) {
          selectedValueNodes = limitedCountValue.map(function (singleValue) {
            var info = _this14.getOptionInfoBySingleValue(singleValue);
            var content = info.label;
            var title = info.title || content;
            if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
              content = content.slice(0, maxTagTextLength) + '...';
            }
            var disabled = _this14.isChildDisabled(singleValue);
            var choiceClassName = disabled ? prefixCls + '-selection__choice ' + prefixCls + '-selection__choice__disabled' : prefixCls + '-selection__choice';
            // attrs 放在一起，避免动态title混乱问题，很奇怪的问题 https://github.com/vueComponent/ant-design-vue/issues/588
            var attrs = (0,helpers_extends/* default */.Z)({}, UNSELECTABLE_ATTRIBUTE, {
              role: 'presentation',
              title: toTitle(title)
            });
            return h('li', babel_helper_vue_jsx_merge_props_default()([{
              style: UNSELECTABLE_STYLE
            }, {
              attrs: attrs
            }, {
              on: {
                'mousedown': preventDefaultEvent
              },
              'class': choiceClassName,
              key: singleValue || SELECT_EMPTY_VALUE_KEY
            }]), [h('div', {
              'class': prefixCls + '-selection__choice__content'
            }, [content]), disabled ? null : h('span', {
              on: {
                'click': function click(event) {
                  _this14.removeSelected(singleValue, event);
                }
              },
              'class': prefixCls + '-selection__choice__remove'
            }, [removeIcon || h('i', {
              'class': prefixCls + '-selection__choice__remove-icon'
            }, ['\xD7'])])]);
          });
        }
        if (maxTagPlaceholderEl) {
          selectedValueNodes.push(maxTagPlaceholderEl);
        }
        selectedValueNodes.push(h('li', {
          'class': prefixCls + '-search ' + prefixCls + '-search--inline',
          key: '__input'
        }, [this._getInputElement()]));
        if (isMultipleOrTags(props) && choiceTransitionName) {
          var transitionProps = _util_getTransitionProps(choiceTransitionName, {
            tag: 'ul',
            afterLeave: this.onChoiceAnimationLeave
          });
          innerNode = h('transition-group', transitionProps, [selectedValueNodes]);
        } else {
          innerNode = h('ul', [selectedValueNodes]);
        }
      }
      return h('div', babel_helper_vue_jsx_merge_props_default()([{
        'class': className
      }, {
        directives: [{
          name: 'ant-ref',
          value: this.saveTopCtrlRef
        }]
      }, {
        on: {
          'click': this.topCtrlContainerClick
        }
      }]), [this.getPlaceholderElement(), innerNode]);
    },
    renderArrow: function renderArrow(multiple) {
      var h = this.$createElement;

      // showArrow : Set to true if not multiple by default but keep set value.
      var _$props4 = this.$props,
        _$props4$showArrow = _$props4.showArrow,
        showArrow = _$props4$showArrow === undefined ? !multiple : _$props4$showArrow,
        loading = _$props4.loading,
        prefixCls = _$props4.prefixCls;
      var inputIcon = getComponentFromProp(this, 'inputIcon');
      if (!showArrow && !loading) {
        return null;
      }
      // if loading  have loading icon
      var defaultIcon = loading ? h('i', {
        'class': prefixCls + '-arrow-loading'
      }) : h('i', {
        'class': prefixCls + '-arrow-icon'
      });
      return h('span', babel_helper_vue_jsx_merge_props_default()([{
        key: 'arrow',
        'class': prefixCls + '-arrow',
        style: UNSELECTABLE_STYLE
      }, {
        attrs: UNSELECTABLE_ATTRIBUTE
      }, {
        on: {
          'click': this.onArrowClick
        },
        ref: 'arrow'
      }]), [inputIcon || defaultIcon]);
    },
    topCtrlContainerClick: function topCtrlContainerClick(e) {
      if (this.$data._open && !isSingleMode(this.$props)) {
        e.stopPropagation();
      }
    },
    renderClear: function renderClear() {
      var h = this.$createElement;
      var _$props5 = this.$props,
        prefixCls = _$props5.prefixCls,
        allowClear = _$props5.allowClear;
      var _$data4 = this.$data,
        value = _$data4._value,
        inputValue = _$data4._inputValue;
      var clearIcon = getComponentFromProp(this, 'clearIcon');
      var clear = h('span', babel_helper_vue_jsx_merge_props_default()([{
        key: 'clear',
        'class': prefixCls + '-selection__clear',
        on: {
          'mousedown': preventDefaultEvent
        },
        style: UNSELECTABLE_STYLE
      }, {
        attrs: UNSELECTABLE_ATTRIBUTE
      }, {
        on: {
          'click': this.onClearSelection
        }
      }]), [clearIcon || h('i', {
        'class': prefixCls + '-selection__clear-icon'
      }, ['\xD7'])]);
      if (!allowClear) {
        return null;
      }
      if (isCombobox(this.$props)) {
        if (inputValue) {
          return clear;
        }
        return null;
      }
      if (inputValue || value.length) {
        return clear;
      }
      return null;
    },
    selectionRefClick: function selectionRefClick() {
      //e.stopPropagation();
      if (!this.disabled) {
        var input = this.getInputDOMNode();
        if (this._focused && this.$data._open) {
          // this._focused = false;
          this.setOpenState(false, false);
          input && input.blur();
        } else {
          this.clearBlurTime();
          //this._focused = true;
          this.setOpenState(true, true);
          input && input.focus();
        }
      }
    },
    selectionRefFocus: function selectionRefFocus(e) {
      if (this._focused || this.disabled || isMultipleOrTagsOrCombobox(this.$props)) {
        e.preventDefault();
        return;
      }
      this._focused = true;
      this.updateFocusClassName();
      this.$emit('focus');
    },
    selectionRefBlur: function selectionRefBlur(e) {
      if (isMultipleOrTagsOrCombobox(this.$props)) {
        e.preventDefault();
        return;
      }
      this.inputBlur(e);
    }
  },
  render: function render() {
    var _rootCls;
    var h = arguments[0];
    var props = this.$props;
    var multiple = isMultipleOrTags(props);
    // Default set showArrow to true if not set (not set directly in defaultProps to handle multiple case)
    var _props$showArrow = props.showArrow,
      showArrow = _props$showArrow === undefined ? true : _props$showArrow;
    var state = this.$data;
    var disabled = props.disabled,
      prefixCls = props.prefixCls,
      loading = props.loading;
    var ctrlNode = this.renderTopControlNode();
    var _$data5 = this.$data,
      open = _$data5._open,
      inputValue = _$data5._inputValue,
      value = _$data5._value;
    if (open) {
      var filterOptions = this.renderFilterOptions();
      this._empty = filterOptions.empty;
      this._options = filterOptions.options;
    }
    var realOpen = this.getRealOpenState();
    var empty = this._empty;
    var options = this._options || [];
    var _getListeners = getListeners(this),
      _getListeners$mouseen = _getListeners.mouseenter,
      mouseenter = _getListeners$mouseen === undefined ? Select_noop : _getListeners$mouseen,
      _getListeners$mousele = _getListeners.mouseleave,
      mouseleave = _getListeners$mousele === undefined ? Select_noop : _getListeners$mousele,
      _getListeners$popupSc = _getListeners.popupScroll,
      popupScroll = _getListeners$popupSc === undefined ? Select_noop : _getListeners$popupSc;
    var selectionProps = {
      props: {},
      attrs: {
        role: 'combobox',
        'aria-autocomplete': 'list',
        'aria-haspopup': 'true',
        'aria-expanded': realOpen,
        'aria-controls': this.$data._ariaId
      },
      on: {
        // click: this.selectionRefClick,
      },
      'class': prefixCls + '-selection ' + prefixCls + '-selection--' + (multiple ? 'multiple' : 'single'),
      // directives: [
      //   {
      //     name: 'ant-ref',
      //     value: this.saveSelectionRef,
      //   },
      // ],
      key: 'selection'
    };
    //if (!isMultipleOrTagsOrCombobox(props)) {
    // selectionProps.on.keydown = this.onKeyDown;
    // selectionProps.on.focus = this.selectionRefFocus;
    // selectionProps.on.blur = this.selectionRefBlur;
    // selectionProps.attrs.tabIndex = props.disabled ? -1 : props.tabIndex;
    //}
    var extraSelectionProps = {
      attrs: {
        tabIndex: -1
      }
    };
    if (!isMultipleOrTagsOrCombobox(props)) {
      extraSelectionProps.attrs.tabIndex = props.disabled ? -1 : props.tabIndex;
    }
    var rootCls = (_rootCls = {}, (0,defineProperty/* default */.Z)(_rootCls, prefixCls, true), (0,defineProperty/* default */.Z)(_rootCls, prefixCls + '-open', open), (0,defineProperty/* default */.Z)(_rootCls, prefixCls + '-focused', open || !!this._focused), (0,defineProperty/* default */.Z)(_rootCls, prefixCls + '-combobox', isCombobox(props)), (0,defineProperty/* default */.Z)(_rootCls, prefixCls + '-disabled', disabled), (0,defineProperty/* default */.Z)(_rootCls, prefixCls + '-enabled', !disabled), (0,defineProperty/* default */.Z)(_rootCls, prefixCls + '-allow-clear', !!props.allowClear), (0,defineProperty/* default */.Z)(_rootCls, prefixCls + '-no-arrow', !showArrow), (0,defineProperty/* default */.Z)(_rootCls, prefixCls + '-loading', !!loading), _rootCls);
    return h(SelectTrigger, babel_helper_vue_jsx_merge_props_default()([{
      attrs: {
        dropdownAlign: props.dropdownAlign,
        dropdownClassName: props.dropdownClassName,
        dropdownMatchSelectWidth: props.dropdownMatchSelectWidth,
        defaultActiveFirstOption: props.defaultActiveFirstOption,
        dropdownMenuStyle: props.dropdownMenuStyle,
        transitionName: props.transitionName,
        animation: props.animation,
        prefixCls: props.prefixCls,
        dropdownStyle: props.dropdownStyle,
        combobox: props.combobox,
        showSearch: props.showSearch,
        options: options,
        empty: empty,
        multiple: multiple,
        disabled: disabled,
        visible: realOpen,
        inputValue: inputValue,
        value: value,
        backfillValue: state._backfillValue,
        firstActiveValue: props.firstActiveValue,
        getPopupContainer: props.getPopupContainer,
        showAction: props.showAction,
        menuItemSelectedIcon: getComponentFromProp(this, 'menuItemSelectedIcon')
      },
      on: {
        'dropdownVisibleChange': this.onDropdownVisibleChange,
        'menuSelect': this.onMenuSelect,
        'menuDeselect': this.onMenuDeselect,
        'popupScroll': popupScroll,
        'popupFocus': this.onPopupFocus,
        'mouseenter': mouseenter,
        'mouseleave': mouseleave
      }
    }, {
      directives: [{
        name: 'ant-ref',
        value: this.saveSelectTriggerRef
      }]
    }, {
      attrs: {
        dropdownRender: props.dropdownRender,
        ariaId: this.$data._ariaId
      }
    }]), [h('div', babel_helper_vue_jsx_merge_props_default()([{
      directives: [{
        name: 'ant-ref',
        value: chaining(this.saveRootRef, this.saveSelectionRef)
      }]
    }, {
      style: getStyle(this),
      'class': classnames_default()(rootCls),
      on: {
        'mousedown': this.markMouseDown,
        'mouseup': this.markMouseLeave,
        'mouseout': this.markMouseLeave
      }
    }, extraSelectionProps, {
      on: {
        'blur': this.selectionRefBlur,
        'focus': this.selectionRefFocus,
        'click': this.selectionRefClick,
        'keydown': isMultipleOrTagsOrCombobox(props) ? Select_noop : this.onKeyDown
      }
    }]), [h('div', selectionProps, [ctrlNode, this.renderClear(), this.renderArrow(!!multiple)])])]);
  }
};

/* harmony default export */ var vc_select_Select = (proxyComponent_wrapWithConnect(Select));
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/select/index.js













var AbstractSelectProps = function AbstractSelectProps() {
  return {
    prefixCls: vue_types.string,
    size: vue_types.oneOf(['small', 'large', 'default']),
    showAction: vue_types.oneOfType([vue_types.string, vue_types.arrayOf(String)]),
    notFoundContent: vue_types.any,
    transitionName: vue_types.string,
    choiceTransitionName: vue_types.string,
    showSearch: vue_types.bool,
    allowClear: vue_types.bool,
    disabled: vue_types.bool,
    tabIndex: vue_types.number,
    placeholder: vue_types.any,
    defaultActiveFirstOption: vue_types.bool,
    dropdownClassName: vue_types.string,
    dropdownStyle: vue_types.any,
    dropdownMenuStyle: vue_types.any,
    dropdownMatchSelectWidth: vue_types.bool,
    // onSearch: (value: string) => any,
    filterOption: vue_types.oneOfType([vue_types.bool, vue_types.func]),
    autoFocus: vue_types.bool,
    backfill: vue_types.bool,
    showArrow: vue_types.bool,
    getPopupContainer: vue_types.func,
    open: vue_types.bool,
    defaultOpen: vue_types.bool,
    autoClearSearchValue: vue_types.bool,
    dropdownRender: vue_types.func,
    loading: vue_types.bool
  };
};
var Value = vue_types.shape({
  key: vue_types.oneOfType([vue_types.string, vue_types.number])
}).loose;
var SelectValue = vue_types.oneOfType([vue_types.string, vue_types.number, vue_types.arrayOf(vue_types.oneOfType([Value, vue_types.string, vue_types.number])), Value]);
var SelectProps = (0,helpers_extends/* default */.Z)({}, AbstractSelectProps(), {
  value: SelectValue,
  defaultValue: SelectValue,
  // mode: PropTypes.oneOf(['default', 'multiple', 'tags', 'combobox']),
  mode: vue_types.string,
  optionLabelProp: vue_types.string,
  firstActiveValue: vue_types.oneOfType([String, vue_types.arrayOf(String)]),
  maxTagCount: vue_types.number,
  maxTagPlaceholder: vue_types.any,
  maxTagTextLength: vue_types.number,
  dropdownMatchSelectWidth: vue_types.bool,
  optionFilterProp: vue_types.string,
  labelInValue: vue_types.boolean,
  getPopupContainer: vue_types.func,
  tokenSeparators: vue_types.arrayOf(vue_types.string),
  getInputElement: vue_types.func,
  options: vue_types.array,
  suffixIcon: vue_types.any,
  removeIcon: vue_types.any,
  clearIcon: vue_types.any,
  menuItemSelectedIcon: vue_types.any
});
var select_SelectPropTypes = {
  prefixCls: vue_types.string,
  size: vue_types.oneOf(['default', 'large', 'small']),
  // combobox: PropTypes.bool,
  notFoundContent: vue_types.any,
  showSearch: vue_types.bool,
  optionLabelProp: vue_types.string,
  transitionName: vue_types.string,
  choiceTransitionName: vue_types.string
};

var SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
var select_Select = {
  SECRET_COMBOBOX_MODE_DO_NOT_USE: SECRET_COMBOBOX_MODE_DO_NOT_USE,
  Option: (0,helpers_extends/* default */.Z)({}, Option, {
    name: 'ASelectOption'
  }),
  OptGroup: (0,helpers_extends/* default */.Z)({}, OptGroup, {
    name: 'ASelectOptGroup'
  }),
  name: 'ASelect',
  props: (0,helpers_extends/* default */.Z)({}, SelectProps, {
    showSearch: vue_types.bool.def(false),
    transitionName: vue_types.string.def('slide-up'),
    choiceTransitionName: vue_types.string.def('zoom')
  }),
  propTypes: select_SelectPropTypes,
  model: {
    prop: 'value',
    event: 'change'
  },
  provide: function provide() {
    return {
      savePopupRef: this.savePopupRef
    };
  },
  inject: {
    configProvider: {
      'default': function _default() {
        return ConfigConsumerProps;
      }
    }
  },
  created: function created() {
    _util_warning(this.$props.mode !== 'combobox', 'Select', 'The combobox mode of Select is deprecated,' + 'it will be removed in next major version,' + 'please use AutoComplete instead');
  },
  methods: {
    getNotFoundContent: function getNotFoundContent(renderEmpty) {
      var h = this.$createElement;
      var notFoundContent = getComponentFromProp(this, 'notFoundContent');
      if (notFoundContent !== undefined) {
        return notFoundContent;
      }
      if (this.isCombobox()) {
        return null;
      }
      return renderEmpty(h, 'Select');
    },
    savePopupRef: function savePopupRef(ref) {
      this.popupRef = ref;
    },
    focus: function focus() {
      this.$refs.vcSelect.focus();
    },
    blur: function blur() {
      this.$refs.vcSelect.blur();
    },
    isCombobox: function isCombobox() {
      var mode = this.mode;
      return mode === 'combobox' || mode === SECRET_COMBOBOX_MODE_DO_NOT_USE;
    },
    renderSuffixIcon: function renderSuffixIcon(prefixCls) {
      var h = this.$createElement;
      var loading = this.$props.loading;
      var suffixIcon = getComponentFromProp(this, 'suffixIcon');
      suffixIcon = Array.isArray(suffixIcon) ? suffixIcon[0] : suffixIcon;
      if (suffixIcon) {
        return isValidElement(suffixIcon) ? cloneElement(suffixIcon, {
          'class': prefixCls + '-arrow-icon'
        }) : suffixIcon;
      }
      if (loading) {
        return h(icon, {
          attrs: {
            type: 'loading'
          }
        });
      }
      return h(icon, {
        attrs: {
          type: 'down'
        },
        'class': prefixCls + '-arrow-icon'
      });
    }
  },
  render: function render() {
    var _cls;
    var h = arguments[0];
    var _getOptionProps = getOptionProps(this),
      customizePrefixCls = _getOptionProps.prefixCls,
      size = _getOptionProps.size,
      mode = _getOptionProps.mode,
      options = _getOptionProps.options,
      getPopupContainer = _getOptionProps.getPopupContainer,
      showArrow = _getOptionProps.showArrow,
      restProps = (0,objectWithoutProperties/* default */.Z)(_getOptionProps, ['prefixCls', 'size', 'mode', 'options', 'getPopupContainer', 'showArrow']);
    var getPrefixCls = this.configProvider.getPrefixCls;
    var renderEmpty = this.configProvider.renderEmpty;
    var prefixCls = getPrefixCls('select', customizePrefixCls);
    var getContextPopupContainer = this.configProvider.getPopupContainer;
    var removeIcon = getComponentFromProp(this, 'removeIcon');
    removeIcon = Array.isArray(removeIcon) ? removeIcon[0] : removeIcon;
    var clearIcon = getComponentFromProp(this, 'clearIcon');
    clearIcon = Array.isArray(clearIcon) ? clearIcon[0] : clearIcon;
    var menuItemSelectedIcon = getComponentFromProp(this, 'menuItemSelectedIcon');
    menuItemSelectedIcon = Array.isArray(menuItemSelectedIcon) ? menuItemSelectedIcon[0] : menuItemSelectedIcon;
    var rest = omit_js_es(restProps, ['inputIcon', 'removeIcon', 'clearIcon', 'suffixIcon', 'menuItemSelectedIcon']);
    var cls = (_cls = {}, (0,defineProperty/* default */.Z)(_cls, prefixCls + '-lg', size === 'large'), (0,defineProperty/* default */.Z)(_cls, prefixCls + '-sm', size === 'small'), (0,defineProperty/* default */.Z)(_cls, prefixCls + '-show-arrow', showArrow), _cls);
    var optionLabelProp = this.$props.optionLabelProp;
    if (this.isCombobox()) {
      // children 带 dom 结构时，无法填入输入框
      optionLabelProp = optionLabelProp || 'value';
    }
    var modeConfig = {
      multiple: mode === 'multiple',
      tags: mode === 'tags',
      combobox: this.isCombobox()
    };
    var finalRemoveIcon = removeIcon && (isValidElement(removeIcon) ? cloneElement(removeIcon, {
      'class': prefixCls + '-remove-icon'
    }) : removeIcon) || h(icon, {
      attrs: {
        type: 'close'
      },
      'class': prefixCls + '-remove-icon'
    });
    var finalClearIcon = clearIcon && (isValidElement(clearIcon) ? cloneElement(clearIcon, {
      'class': prefixCls + '-clear-icon'
    }) : clearIcon) || h(icon, {
      attrs: {
        type: 'close-circle',
        theme: 'filled'
      },
      'class': prefixCls + '-clear-icon'
    });
    var finalMenuItemSelectedIcon = menuItemSelectedIcon && (isValidElement(menuItemSelectedIcon) ? cloneElement(menuItemSelectedIcon, {
      'class': prefixCls + '-selected-icon'
    }) : menuItemSelectedIcon) || h(icon, {
      attrs: {
        type: 'check'
      },
      'class': prefixCls + '-selected-icon'
    });
    var selectProps = {
      props: (0,helpers_extends/* default */.Z)({
        inputIcon: this.renderSuffixIcon(prefixCls),
        removeIcon: finalRemoveIcon,
        clearIcon: finalClearIcon,
        menuItemSelectedIcon: finalMenuItemSelectedIcon,
        showArrow: showArrow
      }, rest, modeConfig, {
        prefixCls: prefixCls,
        optionLabelProp: optionLabelProp || 'children',
        notFoundContent: this.getNotFoundContent(renderEmpty),
        maxTagPlaceholder: getComponentFromProp(this, 'maxTagPlaceholder'),
        placeholder: getComponentFromProp(this, 'placeholder'),
        children: options ? options.map(function (option) {
          var key = option.key,
            _option$label = option.label,
            label = _option$label === undefined ? option.title : _option$label,
            on = option.on,
            cls = option['class'],
            style = option.style,
            restOption = (0,objectWithoutProperties/* default */.Z)(option, ['key', 'label', 'on', 'class', 'style']);
          return h(Option, babel_helper_vue_jsx_merge_props_default()([{
            key: key
          }, {
            props: restOption,
            on: on,
            'class': cls,
            style: style
          }]), [label]);
        }) : filterEmpty(this.$slots['default']),
        __propsSymbol__: Symbol(),
        dropdownRender: getComponentFromProp(this, 'dropdownRender', {}, false),
        getPopupContainer: getPopupContainer || getContextPopupContainer
      }),
      on: getListeners(this),
      'class': cls,
      ref: 'vcSelect'
    };
    return h(Select, selectProps);
  }
};

/* istanbul ignore next */
select_Select.install = function (Vue) {
  Vue.use(es_base);
  Vue.component(select_Select.name, select_Select);
  Vue.component(select_Select.Option.name, select_Select.Option);
  Vue.component(select_Select.OptGroup.name, select_Select.OptGroup);
};
/* harmony default export */ var es_select = (select_Select);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/radio/style/index.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/radio/style/css.js


;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-checkbox/src/Checkbox.js








/* harmony default export */ var Checkbox = ({
  name: 'Checkbox',
  mixins: [BaseMixin],
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: initDefaultProps({
    prefixCls: vue_types.string,
    name: vue_types.string,
    id: vue_types.string,
    type: vue_types.string,
    defaultChecked: vue_types.oneOfType([vue_types.number, vue_types.bool]),
    checked: vue_types.oneOfType([vue_types.number, vue_types.bool]),
    disabled: vue_types.bool,
    // onFocus: PropTypes.func,
    // onBlur: PropTypes.func,
    // onChange: PropTypes.func,
    // onClick: PropTypes.func,
    tabIndex: vue_types.oneOfType([vue_types.string, vue_types.number]),
    readOnly: vue_types.bool,
    autoFocus: vue_types.bool,
    value: vue_types.any
  }, {
    prefixCls: 'rc-checkbox',
    type: 'checkbox',
    defaultChecked: false
  }),
  data: function data() {
    var checked = hasProp(this, 'checked') ? this.checked : this.defaultChecked;
    return {
      sChecked: checked
    };
  },
  watch: {
    checked: function checked(val) {
      this.sChecked = val;
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.$nextTick(function () {
      if (_this.autoFocus) {
        _this.$refs.input && _this.$refs.input.focus();
      }
    });
  },
  methods: {
    focus: function focus() {
      this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input.blur();
    },
    handleChange: function handleChange(e) {
      var props = getOptionProps(this);
      if (props.disabled) {
        return;
      }
      if (!('checked' in props)) {
        this.sChecked = e.target.checked;
      }
      this.$forceUpdate(); // change前，维持现有状态
      e.shiftKey = this.eventShiftKey;
      this.__emit('change', {
        target: (0,helpers_extends/* default */.Z)({}, props, {
          checked: e.target.checked
        }),
        stopPropagation: function stopPropagation() {
          e.stopPropagation();
        },
        preventDefault: function preventDefault() {
          e.preventDefault();
        },
        nativeEvent: e
      });
      this.eventShiftKey = false;
    },
    onClick: function onClick(e) {
      this.__emit('click', e);
      // onChange没能获取到shiftKey，使用onClick hack
      this.eventShiftKey = e.shiftKey;
    }
  },
  render: function render() {
    var _classNames;
    var h = arguments[0];
    var _getOptionProps = getOptionProps(this),
      prefixCls = _getOptionProps.prefixCls,
      name = _getOptionProps.name,
      id = _getOptionProps.id,
      type = _getOptionProps.type,
      disabled = _getOptionProps.disabled,
      readOnly = _getOptionProps.readOnly,
      tabIndex = _getOptionProps.tabIndex,
      autoFocus = _getOptionProps.autoFocus,
      value = _getOptionProps.value,
      others = (0,objectWithoutProperties/* default */.Z)(_getOptionProps, ['prefixCls', 'name', 'id', 'type', 'disabled', 'readOnly', 'tabIndex', 'autoFocus', 'value']);
    var attrs = getAttrs(this);
    var globalProps = Object.keys((0,helpers_extends/* default */.Z)({}, others, attrs)).reduce(function (prev, key) {
      if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
        prev[key] = others[key];
      }
      return prev;
    }, {});
    var sChecked = this.sChecked;
    var classString = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, prefixCls + '-checked', sChecked), (0,defineProperty/* default */.Z)(_classNames, prefixCls + '-disabled', disabled), _classNames));
    return h('span', {
      'class': classString
    }, [h('input', babel_helper_vue_jsx_merge_props_default()([{
      attrs: {
        name: name,
        id: id,
        type: type,
        readOnly: readOnly,
        disabled: disabled,
        tabIndex: tabIndex,
        autoFocus: autoFocus
      },
      'class': prefixCls + '-input',
      domProps: {
        'checked': !!sChecked,
        'value': value
      },
      ref: 'input'
    }, {
      attrs: globalProps,
      on: (0,helpers_extends/* default */.Z)({}, getListeners(this), {
        change: this.handleChange,
        click: this.onClick
      })
    }])), h('span', {
      'class': prefixCls + '-inner'
    })]);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-checkbox/src/index.js

/* harmony default export */ var vc_checkbox_src = (Checkbox);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/radio/Radio.js









function Radio_noop() {}
/* harmony default export */ var Radio = ({
  name: 'ARadio',
  model: {
    prop: 'checked'
  },
  props: {
    prefixCls: vue_types.string,
    defaultChecked: Boolean,
    checked: {
      type: Boolean,
      'default': undefined
    },
    disabled: Boolean,
    isGroup: Boolean,
    value: vue_types.any,
    name: String,
    id: String,
    autoFocus: Boolean,
    type: vue_types.string.def('radio')
  },
  inject: {
    radioGroupContext: {
      'default': undefined
    },
    configProvider: {
      'default': function _default() {
        return ConfigConsumerProps;
      }
    }
  },
  methods: {
    focus: function focus() {
      this.$refs.vcCheckbox.focus();
    },
    blur: function blur() {
      this.$refs.vcCheckbox.blur();
    },
    handleChange: function handleChange(event) {
      var targetChecked = event.target.checked;
      this.$emit('input', targetChecked);
      this.$emit('change', event);
    },
    onChange: function onChange(e) {
      this.$emit('change', e);
      if (this.radioGroupContext && this.radioGroupContext.onRadioChange) {
        this.radioGroupContext.onRadioChange(e);
      }
    }
  },
  render: function render() {
    var _classNames;
    var h = arguments[0];
    var $slots = this.$slots,
      radioGroup = this.radioGroupContext;
    var props = getOptionProps(this);
    var children = $slots['default'];
    var _getListeners = getListeners(this),
      _getListeners$mouseen = _getListeners.mouseenter,
      mouseenter = _getListeners$mouseen === undefined ? Radio_noop : _getListeners$mouseen,
      _getListeners$mousele = _getListeners.mouseleave,
      mouseleave = _getListeners$mousele === undefined ? Radio_noop : _getListeners$mousele,
      restListeners = (0,objectWithoutProperties/* default */.Z)(_getListeners, ['mouseenter', 'mouseleave']);
    var customizePrefixCls = props.prefixCls,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, ['prefixCls']);
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('radio', customizePrefixCls);
    var radioProps = {
      props: (0,helpers_extends/* default */.Z)({}, restProps, {
        prefixCls: prefixCls
      }),
      on: restListeners,
      attrs: getAttrs(this)
    };
    if (radioGroup) {
      radioProps.props.name = radioGroup.name;
      radioProps.on.change = this.onChange;
      radioProps.props.checked = props.value === radioGroup.stateValue;
      radioProps.props.disabled = props.disabled || radioGroup.disabled;
    } else {
      radioProps.on.change = this.handleChange;
    }
    var wrapperClassString = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, prefixCls + '-wrapper', true), (0,defineProperty/* default */.Z)(_classNames, prefixCls + '-wrapper-checked', radioProps.props.checked), (0,defineProperty/* default */.Z)(_classNames, prefixCls + '-wrapper-disabled', radioProps.props.disabled), _classNames));
    return h('label', {
      'class': wrapperClassString,
      on: {
        'mouseenter': mouseenter,
        'mouseleave': mouseleave
      }
    }, [h(vc_checkbox_src, babel_helper_vue_jsx_merge_props_default()([radioProps, {
      ref: 'vcCheckbox'
    }])), children !== undefined ? h('span', [children]) : null]);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/radio/Group.js







function Group_noop() {}
/* harmony default export */ var Group = ({
  name: 'ARadioGroup',
  model: {
    prop: 'value'
  },
  props: {
    prefixCls: vue_types.string,
    defaultValue: vue_types.any,
    value: vue_types.any,
    size: {
      'default': 'default',
      validator: function validator(value) {
        return ['large', 'default', 'small'].includes(value);
      }
    },
    options: {
      'default': function _default() {
        return [];
      },
      type: Array
    },
    disabled: Boolean,
    name: String,
    buttonStyle: vue_types.string.def('outline')
  },
  data: function data() {
    var value = this.value,
      defaultValue = this.defaultValue;
    this.updatingValue = false;
    return {
      stateValue: value === undefined ? defaultValue : value
    };
  },
  provide: function provide() {
    return {
      radioGroupContext: this
    };
  },
  inject: {
    configProvider: {
      'default': function _default() {
        return ConfigConsumerProps;
      }
    }
  },
  computed: {
    radioOptions: function radioOptions() {
      var disabled = this.disabled;
      return this.options.map(function (option) {
        return typeof option === 'string' ? {
          label: option,
          value: option
        } : (0,helpers_extends/* default */.Z)({}, option, {
          disabled: option.disabled === undefined ? disabled : option.disabled
        });
      });
    },
    classes: function classes() {
      var _ref;
      var prefixCls = this.prefixCls,
        size = this.size;
      return _ref = {}, (0,defineProperty/* default */.Z)(_ref, '' + prefixCls, true), (0,defineProperty/* default */.Z)(_ref, prefixCls + '-' + size, size), _ref;
    }
  },
  watch: {
    value: function value(val) {
      this.updatingValue = false;
      this.stateValue = val;
    }
  },
  methods: {
    onRadioChange: function onRadioChange(ev) {
      var _this = this;
      var lastValue = this.stateValue;
      var value = ev.target.value;
      if (!hasProp(this, 'value')) {
        this.stateValue = value;
      }
      // nextTick for https://github.com/vueComponent/ant-design-vue/issues/1280
      if (!this.updatingValue && value !== lastValue) {
        this.updatingValue = true;
        this.$emit('input', value);
        this.$emit('change', ev);
      }
      this.$nextTick(function () {
        _this.updatingValue = false;
      });
    }
  },
  render: function render() {
    var _this2 = this;
    var h = arguments[0];
    var _getListeners = getListeners(this),
      _getListeners$mouseen = _getListeners.mouseenter,
      mouseenter = _getListeners$mouseen === undefined ? Group_noop : _getListeners$mouseen,
      _getListeners$mousele = _getListeners.mouseleave,
      mouseleave = _getListeners$mousele === undefined ? Group_noop : _getListeners$mousele;
    var props = getOptionProps(this);
    var customizePrefixCls = props.prefixCls,
      options = props.options,
      buttonStyle = props.buttonStyle;
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('radio', customizePrefixCls);
    var groupPrefixCls = prefixCls + '-group';
    var classString = classnames_default()(groupPrefixCls, groupPrefixCls + '-' + buttonStyle, (0,defineProperty/* default */.Z)({}, groupPrefixCls + '-' + props.size, props.size));
    var children = filterEmpty(this.$slots['default']);

    // 如果存在 options, 优先使用
    if (options && options.length > 0) {
      children = options.map(function (option) {
        if (typeof option === 'string') {
          return h(Radio, {
            key: option,
            attrs: {
              prefixCls: prefixCls,
              disabled: props.disabled,
              value: option,
              checked: _this2.stateValue === option
            }
          }, [option]);
        } else {
          return h(Radio, {
            key: 'radio-group-value-options-' + option.value,
            attrs: {
              prefixCls: prefixCls,
              disabled: option.disabled || props.disabled,
              value: option.value,
              checked: _this2.stateValue === option.value
            }
          }, [option.label]);
        }
      });
    }
    return h('div', {
      'class': classString,
      on: {
        'mouseenter': mouseenter,
        'mouseleave': mouseleave
      }
    }, [children]);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/radio/RadioButton.js





/* harmony default export */ var RadioButton = ({
  name: 'ARadioButton',
  props: (0,helpers_extends/* default */.Z)({}, Radio.props),
  inject: {
    radioGroupContext: {
      'default': undefined
    },
    configProvider: {
      'default': function _default() {
        return ConfigConsumerProps;
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var _getOptionProps = getOptionProps(this),
      customizePrefixCls = _getOptionProps.prefixCls,
      otherProps = (0,objectWithoutProperties/* default */.Z)(_getOptionProps, ['prefixCls']);
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('radio-button', customizePrefixCls);
    var radioProps = {
      props: (0,helpers_extends/* default */.Z)({}, otherProps, {
        prefixCls: prefixCls
      }),
      on: getListeners(this)
    };
    if (this.radioGroupContext) {
      radioProps.on.change = this.radioGroupContext.onRadioChange;
      radioProps.props.checked = this.$props.value === this.radioGroupContext.stateValue;
      radioProps.props.disabled = this.$props.disabled || this.radioGroupContext.disabled;
    }
    return h(Radio, radioProps, [this.$slots['default']]);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/radio/index.js




Radio.Group = Group;
Radio.Button = RadioButton;

/* istanbul ignore next */
Radio.install = function (Vue) {
  Vue.use(es_base);
  Vue.component(Radio.name, Radio);
  Vue.component(Radio.Group.name, Radio.Group);
  Vue.component(Radio.Button.name, Radio.Button);
};

/* harmony default export */ var es_radio = (Radio);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/input-number/style/index.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/input-number/style/css.js


;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-m-feedback/src/PropTypes.js

var ITouchProps = {
  disabled: vue_types.bool,
  activeClassName: vue_types.string,
  activeStyle: vue_types.any
  // onTouchStart: PropTypes.func,
  // onTouchEnd: PropTypes.func,
  // onTouchCancel: PropTypes.func,
  // onMouseDown: PropTypes.func,
  // onMouseUp: PropTypes.func,
  // onMouseLeave: PropTypes.func,
};
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-m-feedback/src/TouchFeedback.js






/* harmony default export */ var TouchFeedback = ({
  name: 'TouchFeedback',
  mixins: [BaseMixin],
  props: initDefaultProps(ITouchProps, {
    disabled: false
  }),
  data: function data() {
    return {
      active: false
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.$nextTick(function () {
      if (_this.disabled && _this.active) {
        _this.setState({
          active: false
        });
      }
    });
  },
  methods: {
    triggerEvent: function triggerEvent(type, isActive, ev) {
      // 暂时仅有input-number用到，事件直接到挂载到Touchable上，不需要像antd那样从子组件触发
      this.$emit(type, ev);
      if (isActive !== this.active) {
        this.setState({
          active: isActive
        });
      }
    },
    onTouchStart: function onTouchStart(e) {
      this.triggerEvent('touchstart', true, e);
    },
    onTouchMove: function onTouchMove(e) {
      this.triggerEvent('touchmove', false, e);
    },
    onTouchEnd: function onTouchEnd(e) {
      this.triggerEvent('touchend', false, e);
    },
    onTouchCancel: function onTouchCancel(e) {
      this.triggerEvent('touchcancel', false, e);
    },
    onMouseDown: function onMouseDown(e) {
      // pc simulate mobile
      this.triggerEvent('mousedown', true, e);
    },
    onMouseUp: function onMouseUp(e) {
      this.triggerEvent('mouseup', false, e);
    },
    onMouseLeave: function onMouseLeave(e) {
      this.triggerEvent('mouseleave', false, e);
    }
  },
  render: function render() {
    var _$props = this.$props,
      disabled = _$props.disabled,
      _$props$activeClassNa = _$props.activeClassName,
      activeClassName = _$props$activeClassNa === undefined ? '' : _$props$activeClassNa,
      _$props$activeStyle = _$props.activeStyle,
      activeStyle = _$props$activeStyle === undefined ? {} : _$props$activeStyle;
    var child = this.$slots['default'];
    if (child.length !== 1) {
      _util_warning(false, 'm-feedback组件只能包含一个子元素');
      return null;
    }
    var childProps = {
      on: disabled ? {} : {
        touchstart: this.onTouchStart,
        touchmove: this.onTouchMove,
        touchend: this.onTouchEnd,
        touchcancel: this.onTouchCancel,
        mousedown: this.onMouseDown,
        mouseup: this.onMouseUp,
        mouseleave: this.onMouseLeave
      }
    };
    if (!disabled && this.active) {
      childProps = (0,helpers_extends/* default */.Z)({}, childProps, {
        style: activeStyle,
        'class': activeClassName
      });
    }
    return cloneElement(child, childProps);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-m-feedback/index.js
// based on 2.0.0

/* harmony default export */ var vc_m_feedback = (TouchFeedback);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-input-number/src/InputHandler.js



var InputHandler = {
  name: 'InputHandler',
  props: {
    prefixCls: vue_types.string,
    disabled: vue_types.bool
  },
  render: function render() {
    var h = arguments[0];
    var _$props = this.$props,
      prefixCls = _$props.prefixCls,
      disabled = _$props.disabled;
    var touchableProps = {
      props: {
        disabled: disabled,
        activeClassName: prefixCls + '-handler-active'
      },
      on: getListeners(this)
    };
    return h(vc_m_feedback, touchableProps, [h('span', [this.$slots['default']])]);
  }
};
/* harmony default export */ var src_InputHandler = (InputHandler);
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/vc-input-number/src/index.js



// based on rc-input-number 4.5.5






function src_noop() {}
function preventDefault(e) {
  e.preventDefault();
}
function defaultParser(input) {
  return input.replace(/[^\w\.-]+/g, '');
}

/**
 * When click and hold on a button - the speed of auto changin the value.
 */
var SPEED = 200;

/**
 * When click and hold on a button - the delay before auto changin the value.
 */
var DELAY = 600;

/**
 * Max Safe Integer -- on IE this is not available, so manually set the number in that case.
 * The reason this is used, instead of Infinity is because numbers above the MSI are unstable
 */
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
var isValidProps = function isValidProps(value) {
  return value !== undefined && value !== null;
};
var isEqual = function isEqual(oldValue, newValue) {
  return newValue === oldValue || typeof newValue === 'number' && typeof oldValue === 'number' && isNaN(newValue) && isNaN(oldValue);
};
var inputNumberProps = {
  value: vue_types.oneOfType([vue_types.number, vue_types.string]),
  defaultValue: vue_types.oneOfType([vue_types.number, vue_types.string]),
  focusOnUpDown: vue_types.bool,
  autoFocus: vue_types.bool,
  // onChange: PropTypes.func,
  // onKeyDown: PropTypes.func,
  // onKeyUp: PropTypes.func,
  prefixCls: vue_types.string,
  tabIndex: vue_types.oneOfType([vue_types.string, vue_types.number]),
  placeholder: vue_types.string,
  disabled: vue_types.bool,
  // onFocus: PropTypes.func,
  // onBlur: PropTypes.func,
  readOnly: vue_types.bool,
  max: vue_types.number,
  min: vue_types.number,
  step: vue_types.oneOfType([vue_types.number, vue_types.string]),
  upHandler: vue_types.any,
  downHandler: vue_types.any,
  useTouch: vue_types.bool,
  formatter: vue_types.func,
  parser: vue_types.func,
  // onMouseEnter: PropTypes.func,
  // onMouseLeave: PropTypes.func,
  // onMouseOver: PropTypes.func,
  // onMouseOut: PropTypes.func,
  precision: vue_types.number,
  required: vue_types.bool,
  pattern: vue_types.string,
  decimalSeparator: vue_types.string,
  autoComplete: vue_types.string,
  title: vue_types.string,
  name: vue_types.string,
  id: vue_types.string
};
/* harmony default export */ var vc_input_number_src = ({
  name: 'VCInputNumber',
  mixins: [BaseMixin],
  model: {
    prop: 'value',
    event: 'change'
  },
  props: initDefaultProps(inputNumberProps, {
    focusOnUpDown: true,
    useTouch: false,
    prefixCls: 'rc-input-number',
    min: -MAX_SAFE_INTEGER,
    step: 1,
    parser: defaultParser,
    required: false,
    autoComplete: 'off'
  }),
  data: function data() {
    var props = getOptionProps(this);
    this.prevProps = (0,helpers_extends/* default */.Z)({}, props);
    var value = void 0;
    if ('value' in props) {
      value = this.value;
    } else {
      value = this.defaultValue;
    }
    var validValue = this.getValidValue(this.toNumber(value));
    return {
      inputValue: this.toPrecisionAsStep(validValue),
      sValue: validValue,
      focused: this.autoFocus
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.$nextTick(function () {
      if (_this.autoFocus && !_this.disabled) {
        _this.focus();
      }
      _this.updatedFunc();
    });
  },
  updated: function updated() {
    var _this2 = this;
    var _$props = this.$props,
      value = _$props.value,
      max = _$props.max,
      min = _$props.min;
    var focused = this.$data.focused;
    var prevProps = this.prevProps;
    var props = getOptionProps(this);
    // Don't trigger in componentDidMount
    if (prevProps) {
      if (!isEqual(prevProps.value, value) || !isEqual(prevProps.max, max) || !isEqual(prevProps.min, min)) {
        var validValue = focused ? value : this.getValidValue(value);
        var nextInputValue = void 0;
        if (this.pressingUpOrDown) {
          nextInputValue = validValue;
        } else if (this.inputting) {
          nextInputValue = this.rawInput;
        } else {
          nextInputValue = this.toPrecisionAsStep(validValue);
        }
        this.setState({
          // eslint-disable-line
          sValue: validValue,
          inputValue: nextInputValue
        });
      }

      // Trigger onChange when max or min change
      // https://github.com/ant-design/ant-design/issues/11574
      var nextValue = 'value' in props ? value : this.sValue;
      // ref: null < 20 === true
      // https://github.com/ant-design/ant-design/issues/14277
      if ('max' in props && prevProps.max !== max && typeof nextValue === 'number' && nextValue > max) {
        this.$emit('change', max);
      }
      if ('min' in props && prevProps.min !== min && typeof nextValue === 'number' && nextValue < min) {
        this.$emit('change', min);
      }
    }
    this.prevProps = (0,helpers_extends/* default */.Z)({}, props);
    this.$nextTick(function () {
      _this2.updatedFunc();
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.stop();
  },
  methods: {
    updatedFunc: function updatedFunc() {
      var inputElem = this.$refs.inputRef;
      // Restore cursor
      try {
        // Firefox set the input cursor after it get focused.
        // This caused that if an input didn't init with the selection,
        // set will cause cursor not correct when first focus.
        // Safari will focus input if set selection. We need skip this.
        if (this.cursorStart !== undefined && this.focused) {
          // In most cases, the string after cursor is stable.
          // We can move the cursor before it

          if (
          // If not match full str, try to match part of str
          !this.partRestoreByAfter(this.cursorAfter) && this.sValue !== this.value) {
            // If not match any of then, let's just keep the position
            // TODO: Logic should not reach here, need check if happens
            var pos = this.cursorStart + 1;

            // If not have last string, just position to the end
            if (!this.cursorAfter) {
              pos = inputElem.value.length;
            } else if (this.lastKeyCode === _util_KeyCode.BACKSPACE) {
              pos = this.cursorStart - 1;
            } else if (this.lastKeyCode === _util_KeyCode.DELETE) {
              pos = this.cursorStart;
            }
            this.fixCaret(pos, pos);
          } else if (this.currentValue === inputElem.value) {
            // Handle some special key code
            switch (this.lastKeyCode) {
              case _util_KeyCode.BACKSPACE:
                this.fixCaret(this.cursorStart - 1, this.cursorStart - 1);
                break;
              case _util_KeyCode.DELETE:
                this.fixCaret(this.cursorStart + 1, this.cursorStart + 1);
                break;
              default:
              // Do nothing
            }
          }
        }
      } catch (e) {}
      // Do nothing

      // Reset last key
      this.lastKeyCode = null;

      // pressingUpOrDown is true means that someone just click up or down button
      if (!this.pressingUpOrDown) {
        return;
      }
      if (this.focusOnUpDown && this.focused) {
        if (document.activeElement !== inputElem) {
          this.focus();
        }
      }
      this.pressingUpOrDown = false;
    },
    onKeyDown: function onKeyDown(e) {
      if (e.keyCode === _util_KeyCode.UP) {
        var ratio = this.getRatio(e);
        this.up(e, ratio);
        this.stop();
      } else if (e.keyCode === _util_KeyCode.DOWN) {
        var _ratio = this.getRatio(e);
        this.down(e, _ratio);
        this.stop();
      } else if (e.keyCode === _util_KeyCode.ENTER) {
        this.$emit('pressEnter', e);
      }
      // Trigger user key down
      this.recordCursorPosition();
      this.lastKeyCode = e.keyCode;
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      this.$emit.apply(this, ['keydown', e].concat((0,toConsumableArray/* default */.Z)(args)));
    },
    onKeyUp: function onKeyUp(e) {
      this.stop();
      this.recordCursorPosition();
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      this.$emit.apply(this, ['keyup', e].concat((0,toConsumableArray/* default */.Z)(args)));
    },
    onChange: function onChange(e) {
      if (this.focused) {
        this.inputting = true;
      }
      this.rawInput = this.parser(this.getValueFromEvent(e));
      this.setState({
        inputValue: this.rawInput
      });
      this.$emit('change', this.toNumber(this.rawInput)); // valid number or invalid string
    },

    onFocus: function onFocus() {
      this.setState({
        focused: true
      });
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      this.$emit.apply(this, ['focus'].concat((0,toConsumableArray/* default */.Z)(args)));
    },
    onBlur: function onBlur() {
      this.inputting = false;
      this.setState({
        focused: false
      });
      var value = this.getCurrentValidValue(this.inputValue);
      var newValue = this.setValue(value);
      if (this.$listeners.blur) {
        var originValue = this.$refs.inputRef.value;
        var inputValue = this.getInputDisplayValue({
          focused: false,
          sValue: newValue
        });
        this.$refs.inputRef.value = inputValue;
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }
        this.$emit.apply(this, ['blur'].concat((0,toConsumableArray/* default */.Z)(args)));
        this.$refs.inputRef.value = originValue;
      }
    },
    getCurrentValidValue: function getCurrentValidValue(value) {
      var val = value;
      if (val === '') {
        val = '';
      } else if (!this.isNotCompleteNumber(parseFloat(val, 10))) {
        val = this.getValidValue(val);
      } else {
        val = this.sValue;
      }
      return this.toNumber(val);
    },
    getRatio: function getRatio(e) {
      var ratio = 1;
      if (e.metaKey || e.ctrlKey) {
        ratio = 0.1;
      } else if (e.shiftKey) {
        ratio = 10;
      }
      return ratio;
    },
    getValueFromEvent: function getValueFromEvent(e) {
      // optimize for chinese input expierence
      // https://github.com/ant-design/ant-design/issues/8196
      var value = e.target.value.trim().replace(/。/g, '.');
      if (isValidProps(this.decimalSeparator)) {
        value = value.replace(this.decimalSeparator, '.');
      }
      return value;
    },
    getValidValue: function getValidValue(value) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.min;
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.max;
      var val = parseFloat(value, 10);
      // https://github.com/ant-design/ant-design/issues/7358
      if (isNaN(val)) {
        return value;
      }
      if (val < min) {
        val = min;
      }
      if (val > max) {
        val = max;
      }
      return val;
    },
    setValue: function setValue(v, callback) {
      // trigger onChange
      var precision = this.$props.precision;
      var newValue = this.isNotCompleteNumber(parseFloat(v, 10)) ? null : parseFloat(v, 10);
      var _$data = this.$data,
        _$data$sValue = _$data.sValue,
        value = _$data$sValue === undefined ? null : _$data$sValue,
        _$data$inputValue = _$data.inputValue,
        inputValue = _$data$inputValue === undefined ? null : _$data$inputValue;
      // https://github.com/ant-design/ant-design/issues/7363
      // https://github.com/ant-design/ant-design/issues/16622

      var newValueInString = typeof newValue === 'number' ? newValue.toFixed(precision) : '' + newValue;
      var changed = newValue !== value || newValueInString !== '' + inputValue;
      if (!hasProp(this, 'value')) {
        this.setState({
          sValue: newValue,
          inputValue: this.toPrecisionAsStep(v)
        }, callback);
      } else {
        // always set input value same as value
        this.setState({
          inputValue: this.toPrecisionAsStep(this.sValue)
        }, callback);
      }
      if (changed) {
        this.$emit('change', newValue);
      }
      return newValue;
    },
    getPrecision: function getPrecision(value) {
      if (isValidProps(this.precision)) {
        return this.precision;
      }
      var valueString = value.toString();
      if (valueString.indexOf('e-') >= 0) {
        return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
      }
      var precision = 0;
      if (valueString.indexOf('.') >= 0) {
        precision = valueString.length - valueString.indexOf('.') - 1;
      }
      return precision;
    },
    // step={1.0} value={1.51}
    // press +
    // then value should be 2.51, rather than 2.5
    // if this.$props.precision is undefined
    // https://github.com/react-component/input-number/issues/39
    getMaxPrecision: function getMaxPrecision(currentValue) {
      var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (isValidProps(this.precision)) {
        return this.precision;
      }
      var step = this.step;
      var ratioPrecision = this.getPrecision(ratio);
      var stepPrecision = this.getPrecision(step);
      var currentValuePrecision = this.getPrecision(currentValue);
      if (!currentValue) {
        return ratioPrecision + stepPrecision;
      }
      return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
    },
    getPrecisionFactor: function getPrecisionFactor(currentValue) {
      var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var precision = this.getMaxPrecision(currentValue, ratio);
      return Math.pow(10, precision);
    },
    getInputDisplayValue: function getInputDisplayValue(state) {
      var _ref = state || this.$data,
        focused = _ref.focused,
        inputValue = _ref.inputValue,
        sValue = _ref.sValue;
      var inputDisplayValue = void 0;
      if (focused) {
        inputDisplayValue = inputValue;
      } else {
        inputDisplayValue = this.toPrecisionAsStep(sValue);
      }
      if (inputDisplayValue === undefined || inputDisplayValue === null) {
        inputDisplayValue = '';
      }
      var inputDisplayValueFormat = this.formatWrapper(inputDisplayValue);
      if (isValidProps(this.$props.decimalSeparator)) {
        inputDisplayValueFormat = inputDisplayValueFormat.toString().replace('.', this.$props.decimalSeparator);
      }
      return inputDisplayValueFormat;
    },
    recordCursorPosition: function recordCursorPosition() {
      // Record position
      try {
        var inputElem = this.$refs.inputRef;
        this.cursorStart = inputElem.selectionStart;
        this.cursorEnd = inputElem.selectionEnd;
        this.currentValue = inputElem.value;
        this.cursorBefore = inputElem.value.substring(0, this.cursorStart);
        this.cursorAfter = inputElem.value.substring(this.cursorEnd);
      } catch (e) {
        // Fix error in Chrome:
        // Failed to read the 'selectionStart' property from 'HTMLInputElement'
        // http://stackoverflow.com/q/21177489/3040605
      }
    },
    fixCaret: function fixCaret(start, end) {
      if (start === undefined || end === undefined || !this.$refs.inputRef || !this.$refs.inputRef.value) {
        return;
      }
      try {
        var inputElem = this.$refs.inputRef;
        var currentStart = inputElem.selectionStart;
        var currentEnd = inputElem.selectionEnd;
        if (start !== currentStart || end !== currentEnd) {
          inputElem.setSelectionRange(start, end);
        }
      } catch (e) {
        // Fix error in Chrome:
        // Failed to read the 'selectionStart' property from 'HTMLInputElement'
        // http://stackoverflow.com/q/21177489/3040605
      }
    },
    restoreByAfter: function restoreByAfter(str) {
      if (str === undefined) return false;
      var fullStr = this.$refs.inputRef.value;
      var index = fullStr.lastIndexOf(str);
      if (index === -1) return false;
      var prevCursorPos = this.cursorBefore.length;
      if (this.lastKeyCode === _util_KeyCode.DELETE && this.cursorBefore.charAt(prevCursorPos - 1) === str[0]) {
        this.fixCaret(prevCursorPos, prevCursorPos);
        return true;
      }
      if (index + str.length === fullStr.length) {
        this.fixCaret(index, index);
        return true;
      }
      return false;
    },
    partRestoreByAfter: function partRestoreByAfter(str) {
      var _this3 = this;
      if (str === undefined) return false;

      // For loop from full str to the str with last char to map. e.g. 123
      // -> 123
      // -> 23
      // -> 3
      return Array.prototype.some.call(str, function (_, start) {
        var partStr = str.substring(start);
        return _this3.restoreByAfter(partStr);
      });
    },
    focus: function focus() {
      this.$refs.inputRef.focus();
      this.recordCursorPosition();
    },
    blur: function blur() {
      this.$refs.inputRef.blur();
    },
    formatWrapper: function formatWrapper(num) {
      // http://2ality.com/2012/03/signedzero.html
      // https://github.com/ant-design/ant-design/issues/9439
      if (this.formatter) {
        return this.formatter(num);
      }
      return num;
    },
    toPrecisionAsStep: function toPrecisionAsStep(num) {
      if (this.isNotCompleteNumber(num) || num === '') {
        return num;
      }
      var precision = Math.abs(this.getMaxPrecision(num));
      if (!isNaN(precision)) {
        return Number(num).toFixed(precision);
      }
      return num.toString();
    },
    // '1.' '1x' 'xx' '' => are not complete numbers
    isNotCompleteNumber: function isNotCompleteNumber(num) {
      return isNaN(num) || num === '' || num === null || num && num.toString().indexOf('.') === num.toString().length - 1;
    },
    toNumber: function toNumber(num) {
      var _$props2 = this.$props,
        precision = _$props2.precision,
        autoFocus = _$props2.autoFocus;
      var _focused = this.focused,
        focused = _focused === undefined ? autoFocus : _focused;
      // num.length > 16 => This is to prevent input of large numbers

      var numberIsTooLarge = num && num.length > 16 && focused;
      if (this.isNotCompleteNumber(num) || numberIsTooLarge) {
        return num;
      }
      if (isValidProps(precision)) {
        return Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);
      }
      return Number(num);
    },
    upStep: function upStep(val, rat) {
      var step = this.step;
      var precisionFactor = this.getPrecisionFactor(val, rat);
      var precision = Math.abs(this.getMaxPrecision(val, rat));
      var result = ((precisionFactor * val + precisionFactor * step * rat) / precisionFactor).toFixed(precision);
      return this.toNumber(result);
    },
    downStep: function downStep(val, rat) {
      var step = this.step;
      var precisionFactor = this.getPrecisionFactor(val, rat);
      var precision = Math.abs(this.getMaxPrecision(val, rat));
      var result = ((precisionFactor * val - precisionFactor * step * rat) / precisionFactor).toFixed(precision);
      return this.toNumber(result);
    },
    stepFn: function stepFn(type, e) {
      var _this4 = this;
      var ratio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var recursive = arguments[3];
      this.stop();
      if (e) {
        // e.persist()
        e.preventDefault();
      }
      if (this.disabled) {
        return;
      }
      var max = this.max,
        min = this.min;
      var value = this.getCurrentValidValue(this.inputValue) || 0;
      if (this.isNotCompleteNumber(value)) {
        return;
      }
      var val = this[type + 'Step'](value, ratio);
      var outOfRange = val > max || val < min;
      if (val > max) {
        val = max;
      } else if (val < min) {
        val = min;
      }
      this.setValue(val);
      this.setState({
        focused: true
      });
      if (outOfRange) {
        return;
      }
      this.autoStepTimer = setTimeout(function () {
        _this4[type](e, ratio, true);
      }, recursive ? SPEED : DELAY);
    },
    stop: function stop() {
      if (this.autoStepTimer) {
        clearTimeout(this.autoStepTimer);
      }
    },
    down: function down(e, ratio, recursive) {
      this.pressingUpOrDown = true;
      this.stepFn('down', e, ratio, recursive);
    },
    up: function up(e, ratio, recursive) {
      this.pressingUpOrDown = true;
      this.stepFn('up', e, ratio, recursive);
    },
    handleInputClick: function handleInputClick() {
      this.$emit('click');
    }
  },
  render: function render() {
    var _classNames;
    var h = arguments[0];
    var _$props3 = this.$props,
      prefixCls = _$props3.prefixCls,
      disabled = _$props3.disabled,
      readOnly = _$props3.readOnly,
      useTouch = _$props3.useTouch,
      autoComplete = _$props3.autoComplete,
      upHandler = _$props3.upHandler,
      downHandler = _$props3.downHandler;
    var classes = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, prefixCls, true), (0,defineProperty/* default */.Z)(_classNames, prefixCls + '-disabled', disabled), (0,defineProperty/* default */.Z)(_classNames, prefixCls + '-focused', this.focused), _classNames));
    var upDisabledClass = '';
    var downDisabledClass = '';
    var sValue = this.sValue;
    if (sValue || sValue === 0) {
      if (!isNaN(sValue)) {
        var val = Number(sValue);
        if (val >= this.max) {
          upDisabledClass = prefixCls + '-handler-up-disabled';
        }
        if (val <= this.min) {
          downDisabledClass = prefixCls + '-handler-down-disabled';
        }
      } else {
        upDisabledClass = prefixCls + '-handler-up-disabled';
        downDisabledClass = prefixCls + '-handler-down-disabled';
      }
    }
    var editable = !this.readOnly && !this.disabled;

    // focus state, show input value
    // unfocus state, show valid value
    var inputDisplayValue = this.getInputDisplayValue();
    var upEvents = void 0;
    var downEvents = void 0;
    if (useTouch) {
      upEvents = {
        touchstart: editable && !upDisabledClass ? this.up : src_noop,
        touchend: this.stop
      };
      downEvents = {
        touchstart: editable && !downDisabledClass ? this.down : src_noop,
        touchend: this.stop
      };
    } else {
      upEvents = {
        mousedown: editable && !upDisabledClass ? this.up : src_noop,
        mouseup: this.stop,
        mouseleave: this.stop
      };
      downEvents = {
        mousedown: editable && !downDisabledClass ? this.down : src_noop,
        mouseup: this.stop,
        mouseleave: this.stop
      };
    }
    var isUpDisabled = !!upDisabledClass || disabled || readOnly;
    var isDownDisabled = !!downDisabledClass || disabled || readOnly;
    var _getListeners = getListeners(this),
      _getListeners$mouseen = _getListeners.mouseenter,
      mouseenter = _getListeners$mouseen === undefined ? src_noop : _getListeners$mouseen,
      _getListeners$mousele = _getListeners.mouseleave,
      mouseleave = _getListeners$mousele === undefined ? src_noop : _getListeners$mousele,
      _getListeners$mouseov = _getListeners.mouseover,
      mouseover = _getListeners$mouseov === undefined ? src_noop : _getListeners$mouseov,
      _getListeners$mouseou = _getListeners.mouseout,
      mouseout = _getListeners$mouseou === undefined ? src_noop : _getListeners$mouseou;
    var contentProps = {
      on: {
        mouseenter: mouseenter,
        mouseleave: mouseleave,
        mouseover: mouseover,
        mouseout: mouseout
      },
      'class': classes,
      attrs: {
        title: this.$props.title
      }
    };
    var upHandlerProps = {
      props: {
        disabled: isUpDisabled,
        prefixCls: prefixCls
      },
      attrs: {
        unselectable: 'unselectable',
        role: 'button',
        'aria-label': 'Increase Value',
        'aria-disabled': !!isUpDisabled
      },
      'class': prefixCls + '-handler ' + prefixCls + '-handler-up ' + upDisabledClass,
      on: upEvents,
      ref: 'up'
    };
    var downHandlerProps = {
      props: {
        disabled: isDownDisabled,
        prefixCls: prefixCls
      },
      attrs: {
        unselectable: 'unselectable',
        role: 'button',
        'aria-label': 'Decrease Value',
        'aria-disabled': !!isDownDisabled
      },
      'class': prefixCls + '-handler ' + prefixCls + '-handler-down ' + downDisabledClass,
      on: downEvents,
      ref: 'down'
    };
    // ref for test
    return h('div', contentProps, [h('div', {
      'class': prefixCls + '-handler-wrap'
    }, [h(src_InputHandler, upHandlerProps, [upHandler || h('span', {
      attrs: {
        unselectable: 'unselectable'
      },
      'class': prefixCls + '-handler-up-inner',
      on: {
        'click': preventDefault
      }
    })]), h(src_InputHandler, downHandlerProps, [downHandler || h('span', {
      attrs: {
        unselectable: 'unselectable'
      },
      'class': prefixCls + '-handler-down-inner',
      on: {
        'click': preventDefault
      }
    })])]), h('div', {
      'class': prefixCls + '-input-wrap'
    }, [h('input', {
      attrs: {
        role: 'spinbutton',
        'aria-valuemin': this.min,
        'aria-valuemax': this.max,
        'aria-valuenow': sValue,
        required: this.required,
        type: this.type,
        placeholder: this.placeholder,
        tabIndex: this.tabIndex,
        autoComplete: autoComplete,
        readOnly: this.readOnly,
        disabled: this.disabled,
        max: this.max,
        min: this.min,
        step: this.step,
        name: this.name,
        title: this.title,
        id: this.id,
        pattern: this.pattern
      },
      on: {
        'click': this.handleInputClick,
        'focus': this.onFocus,
        'blur': this.onBlur,
        'keydown': editable ? this.onKeyDown : src_noop,
        'keyup': editable ? this.onKeyUp : src_noop,
        'input': this.onChange
      },
      'class': prefixCls + '-input',
      ref: 'inputRef',
      domProps: {
        'value': inputDisplayValue
      }
    })])]);
  }
});
;// CONCATENATED MODULE: ./node_modules/ant-design-vue/es/input-number/index.js










var InputNumberProps = {
  prefixCls: vue_types.string,
  min: vue_types.number,
  max: vue_types.number,
  value: vue_types.oneOfType([vue_types.number, vue_types.string]),
  step: vue_types.oneOfType([vue_types.number, vue_types.string]),
  defaultValue: vue_types.oneOfType([vue_types.number, vue_types.string]),
  tabIndex: vue_types.number,
  disabled: vue_types.bool,
  size: vue_types.oneOf(['large', 'small', 'default']),
  formatter: vue_types.func,
  parser: vue_types.func,
  decimalSeparator: vue_types.string,
  placeholder: vue_types.string,
  name: vue_types.string,
  id: vue_types.string,
  precision: vue_types.number,
  autoFocus: vue_types.bool
};
var InputNumber = {
  name: 'AInputNumber',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: initDefaultProps(InputNumberProps, {
    step: 1
  }),
  inject: {
    configProvider: {
      'default': function _default() {
        return ConfigConsumerProps;
      }
    }
  },
  methods: {
    focus: function focus() {
      this.$refs.inputNumberRef.focus();
    },
    blur: function blur() {
      this.$refs.inputNumberRef.blur();
    }
  },
  render: function render() {
    var _classNames;
    var h = arguments[0];
    var _getOptionProps = getOptionProps(this),
      customizePrefixCls = _getOptionProps.prefixCls,
      size = _getOptionProps.size,
      others = (0,objectWithoutProperties/* default */.Z)(_getOptionProps, ['prefixCls', 'size']);
    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('input-number', customizePrefixCls);
    var inputNumberClass = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, prefixCls + '-lg', size === 'large'), (0,defineProperty/* default */.Z)(_classNames, prefixCls + '-sm', size === 'small'), _classNames));
    var upIcon = h(icon, {
      attrs: {
        type: 'up'
      },
      'class': prefixCls + '-handler-up-inner'
    });
    var downIcon = h(icon, {
      attrs: {
        type: 'down'
      },
      'class': prefixCls + '-handler-down-inner'
    });
    var vcInputNumberprops = {
      props: (0,helpers_extends/* default */.Z)({
        prefixCls: prefixCls,
        upHandler: upIcon,
        downHandler: downIcon
      }, others),
      'class': inputNumberClass,
      ref: 'inputNumberRef',
      on: getListeners(this)
    };
    return h(vc_input_number_src, vcInputNumberprops);
  }
};

/* istanbul ignore next */
InputNumber.install = function (Vue) {
  Vue.use(es_base);
  Vue.component(InputNumber.name, InputNumber);
};
/* harmony default export */ var input_number = (InputNumber);
;// CONCATENATED MODULE: ./packages/cron-input/Util.js
function range(start, num) {
  const arr = [];
  for (let i = start, index = 0; i < start + num; i++) {
    arr[index++] = i;
  }
  return arr;
}
;// CONCATENATED MODULE: ./packages/cron-input/language/en.js
/* harmony default export */ var en = ({
  Seconds: {
    name: 'Seconds',
    every: 'Every second',
    interval: ['Every', 'second(s) starting at second'],
    specific: 'Specific second (choose one or many)',
    cycle: ['Every second between second', 'and second']
  },
  Minutes: {
    name: 'Minutes',
    every: 'Every minute',
    interval: ['Every', 'minute(s) starting at minute'],
    specific: 'Specific minute (choose one or many)',
    cycle: ['Every minute between minute', 'and minute']
  },
  Hours: {
    name: 'Hours',
    every: 'Every hour',
    interval: ['Every', 'hour(s) starting at hour'],
    specific: 'Specific hour (choose one or many)',
    cycle: ['Every hour between hour', 'and hour']
  },
  Day: {
    name: 'Day',
    every: 'Every day',
    interval: ['Every', 'day(s) starting at the', 'of the month'],
    specific: 'Specific day of month (choose one or many)',
    lastDay: 'On the last day of the month',
    lastWeekday: 'On the last weekday of the month',
    beforeEndMonth: ['day(s) before the end of the month'],
    nearestWeekday: ['Nearest weekday (Monday to Friday) to the', 'of the month'],
    noSet: 'no set'
  },
  Week: {
    name: 'Week',
    interval: Error('not supported'),
    specific: 'Specific day of week (choose one or many)',
    someWeekday: ['On the', 'of the month'],
    lastday: ['On the last', ' of the month'],
    noSet: 'no set',
    select: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  },
  Month: {
    name: 'Month',
    every: 'Every month',
    interval: ['Every', 'month(s) starting in'],
    specific: 'Specific month (choose one or many)',
    cycle: ['Every month between', 'and']
  },
  Year: {
    name: 'Year',
    every: 'Every year',
    interval: ['Every', 'year(s) starting in'],
    specific: 'Specific year (choose one or many)',
    cycle: ['Every year between', 'and'],
    noSet: 'no set'
  }
});
;// CONCATENATED MODULE: ./packages/cron-input/language/cn.js
/* harmony default export */ var cn = ({
  Seconds: {
    name: '秒',
    every: '每一秒钟',
    interval: ['每隔', '秒执行，从', '秒开始'],
    specific: '具体秒数(可多选)',
    cycle: ['从', '到', '秒']
  },
  Minutes: {
    name: '分',
    every: '每一分钟',
    interval: ['每隔', '分执行，从', '分开始'],
    specific: '具体分钟数(可多选)',
    cycle: ['从', '到', '分']
  },
  Hours: {
    name: '时',
    every: '每一小时',
    interval: ['每隔', '小时执行，从', '小时开始'],
    specific: '具体小时数(可多选)',
    cycle: ['从', '到', '小时']
  },
  Day: {
    name: '天',
    every: '每一天',
    interval: ['每隔', '天执行，从', '日开始'],
    specific: '具体天数(可多选)',
    lastDay: '在这个月的最后一天',
    lastWeekday: '在这个月的最后一个工作日',
    beforeEndMonth: ['在本月底前', '天'],
    nearestWeekday: ['距离每月', '日最近的工作日'],
    noSet: '不指定'
  },
  Week: {
    name: '周(星期)',
    interval: Error('不支持此项'),
    specific: '具体星期几(可多选)',
    someWeekday: ['在这个月的第', '个'],
    lastday: ['本月的最后一个'],
    noSet: '不指定',
    select: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  },
  Month: {
    name: '月',
    every: '每一月',
    interval: ['每隔', '月执行,从', '月开始'],
    specific: '具体月数(可多选)',
    cycle: ['从', '到', '月']
  },
  Year: {
    name: '年',
    every: '每一年',
    interval: ['每隔', '年执行,从', '年开始'],
    specific: '具体年份(可多选)',
    cycle: ['从', '到', '年'],
    noSet: '不指定'
  }
});
;// CONCATENATED MODULE: ./packages/cron-input/language/pt_br.js
/* harmony default export */ var pt_br = ({
  Seconds: {
    name: 'Segundos',
    every: 'A cada segundo',
    interval: ['A cada', 'segundo(s) começando no segundo'],
    specific: 'Segundo específico (escolha um ou muitos)',
    cycle: ['A Cada segundo entre segundos', 'e segundo']
  },
  Minutes: {
    name: 'Minutos',
    every: 'A cada minuto',
    interval: ['A cada', 'minuto(s) começando no minuto'],
    specific: 'Minuto específico (escolha um ou muitos)',
    cycle: ['A cada minuto entre minutos', 'e minutos']
  },
  Hours: {
    name: 'Horas',
    every: 'A cada hora',
    interval: ['A cada', 'hora(s) começando na hora'],
    specific: 'Hora específica (escolha uma ou muitas)',
    cycle: ['A cada hora entre horas', 'e horas']
  },
  Day: {
    name: 'Dia',
    every: 'A cada dia',
    intervalWeek: ['A cada', 'dia(s) começando em'],
    intervalDay: ['A cada', 'dia(s) começando no', 'do mês'],
    specificWeek: 'Dia específico da semana (escolha um ou vários)',
    specificDay: 'Dia específico do mês (escolha um ou vários)',
    lastDay: 'No último dia do mês',
    lastWeekday: 'No último dia da semana do mês',
    lastWeek: ['No último', ' do mês'],
    beforeEndMonth: ['dia(s) antes do final do mês'],
    nearestWeekday: ['Dia da semana mais próximo (segunda a sexta) ao ', 'do mês'],
    someWeekday: ['No', 'do mês']
  },
  Week: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
  Month: {
    name: 'Mês',
    every: 'A cada mês',
    interval: ['A cada', 'mês(es) começando em'],
    specific: 'Mês específico (escolha um ou muitos)',
    cycle: ['Todo mês entre', 'e']
  },
  Year: {
    name: 'Ano',
    every: 'Qualquer ano',
    interval: ['A cada', 'ano(s) começando em'],
    specific: 'Ano específico (escolha um ou muitos)',
    cycle: ['Todo ano entre', 'e']
  },
  Save: 'Salvar',
  Close: 'Fechar'
});
;// CONCATENATED MODULE: ./packages/cron-input/language/index.js



/* harmony default export */ var language = ({
  en: en,
  cn: cn,
  pt: pt_br
});
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/cron-input/CronInput.vue?vue&type=script&lang=js&












/* harmony default export */ var CronInputvue_type_script_lang_js_ = ({
  name: 'CronInput',
  components: {
    AInputNumber: input_number,
    ARadio: es_radio,
    ARadioGroup: es_radio.Group,
    ASelect: es_select,
    ASelectOption: es_select.Option,
    ATabs: es_tabs,
    ATabPane: es_tabs.TabPane,
    AIcon: icon
  },
  props: {
    lang: {
      type: String,
      default: 'cn'
    },
    value: {
      type: String,
      default: '* * * * * ?'
    },
    item: {
      type: Array,
      default: () => ['second', 'minute', 'hour', 'day', 'month', 'week']
    },
    weekByNum: {
      // use number to represent DayOfWeek
      type: Boolean,
      default: false
    },
    sundayIndex: {
      // sunday index， default 0
      type: Number,
      default: 0
    },
    yearStart: {
      type: Number,
      default: new Date().getFullYear()
    }
  },
  data() {
    return {
      tabActive: this.item[0] || null,
      weekEnum: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      // weekNumEnum: [],
      exps: [{
        type: "second",
        expression: ""
      }, {
        type: "minute",
        expression: ""
      }, {
        type: "hour",
        expression: ""
      }, {
        type: "day",
        expression: ""
      }, {
        type: "month",
        expression: ""
      }, {
        type: "week",
        expression: ""
      }, {
        type: "year",
        expression: null
      }],
      second: {
        cronEvery: '',
        incrementStart: '0',
        incrementIncrement: '1',
        rangeStart: '1',
        rangeEnd: '2',
        specificSpecific: []
      },
      minute: {
        cronEvery: '',
        incrementStart: '0',
        incrementIncrement: '1',
        rangeStart: '1',
        rangeEnd: '2',
        specificSpecific: []
      },
      hour: {
        cronEvery: '',
        incrementStart: '0',
        incrementIncrement: '1',
        rangeStart: '1',
        rangeEnd: '2',
        specificSpecific: []
      },
      day: {
        cronEvery: '',
        incrementStart: '1',
        incrementIncrement: '1',
        rangeStart: '',
        rangeEnd: '',
        specificSpecific: [],
        cronDaysBeforeEomMinus: '',
        cronDaysNearestWeekday: ''
      },
      week: {
        cronEvery: '',
        specificSpecific: [],
        cronNthDayDay: '',
        // 本月的周几
        cronNthDayNth: '1',
        // 本月的第几个
        cronLastSpecificDomDay: ''
      },
      month: {
        cronEvery: '',
        incrementStart: '1',
        incrementIncrement: '1',
        rangeStart: '',
        rangeEnd: '',
        specificSpecific: []
      },
      year: {
        cronEvery: '',
        incrementStart: String(this.yearStart),
        incrementIncrement: '1',
        rangeStart: String(this.yearStart),
        rangeEnd: String(this.yearStart),
        specificSpecific: []
      },
      output: {
        second: '',
        minute: '',
        hour: '',
        day: '',
        month: '',
        Week: '',
        year: ''
      }
    };
  },
  watch: {
    cron(val) {
      this.$emit('input', val);
      this.$emit('change', val);
    },
    value(val) {
      val !== this.cron && this.resolveExpression(val);
    },
    item(val) {
      val.indexOf(this.tabActive) === -1 && (this.tabActive = val[0] || null);
    },
    weekByNum() {
      this.week.cronEvery = '5';
    }
  },
  computed: {
    text() {
      return language[this.lang || 'cn'];
    },
    weekNumEnum() {
      return range(this.sundayIndex, 7).map(item => String(item));
    },
    weekValueList() {
      return this.weekByNum ? this.weekNumEnum : this.weekEnum;
    },
    secondsText() {
      let seconds = '';
      let cronEvery = this.second.cronEvery;
      switch (cronEvery.toString()) {
        case '1':
          seconds = '*';
          break;
        case '2':
          seconds = this.second.incrementStart + '/' + this.second.incrementIncrement;
          break;
        case '3':
          this.second.specificSpecific.map(val => {
            seconds += val + ',';
          });
          seconds = seconds.slice(0, -1);
          break;
        case '4':
          seconds = this.second.rangeStart + '-' + this.second.rangeEnd;
          break;
      }
      return seconds;
    },
    minutesText() {
      let minutes = '';
      let cronEvery = this.minute.cronEvery;
      switch (cronEvery.toString()) {
        case '1':
          minutes = '*';
          break;
        case '2':
          minutes = this.minute.incrementStart + '/' + this.minute.incrementIncrement;
          break;
        case '3':
          this.minute.specificSpecific.map(val => {
            minutes += val + ',';
          });
          minutes = minutes.slice(0, -1);
          break;
        case '4':
          minutes = this.minute.rangeStart + '-' + this.minute.rangeEnd;
          break;
      }
      return minutes;
    },
    hoursText() {
      let hours = '';
      let cronEvery = this.hour.cronEvery;
      switch (cronEvery.toString()) {
        case '1':
          hours = '*';
          break;
        case '2':
          hours = this.hour.incrementStart + '/' + this.hour.incrementIncrement;
          break;
        case '3':
          this.hour.specificSpecific.map(val => {
            hours += val + ',';
          });
          hours = hours.slice(0, -1);
          break;
        case '4':
          hours = this.hour.rangeStart + '-' + this.hour.rangeEnd;
          break;
      }
      return hours;
    },
    daysText() {
      let days = '';
      let cronEvery = this.day.cronEvery;
      switch (cronEvery.toString()) {
        case '1':
          days = '*';
          break;
        case '2':
          days = [this.day.incrementStart, this.day.incrementIncrement].join('/');
          break;
        case '3':
          this.day.specificSpecific.map(val => {
            days += val + ',';
          });
          days = days.slice(0, -1);
          break;
        case '4':
          days = "L";
          break;
        case '5':
          days = "LW";
          break;
        case '6':
          days = 'L-' + this.day.cronDaysBeforeEomMinus;
          break;
        case '7':
          days = this.day.cronDaysNearestWeekday + "W";
          break;
        case '8':
          days = '?';
          break;
      }
      return days;
    },
    weeksText() {
      let weeks = '';
      let cronEvery = this.week.cronEvery;
      switch (cronEvery.toString()) {
        case '2':
          this.week.specificSpecific.map(val => {
            weeks += val + ',';
          });
          weeks = weeks.slice(0, -1);
          break;
        case '3':
          weeks = [this.week.cronNthDayDay, this.week.cronNthDayNth].join('#');
          break;
        case '4':
          weeks = this.week.cronLastSpecificDomDay + 'L';
          break;
        default:
          weeks = '?';
      }
      return weeks;
    },
    monthsText() {
      let months = '';
      let cronEvery = this.month.cronEvery;
      switch (cronEvery.toString()) {
        case '1':
          months = '*';
          break;
        case '2':
          months = [this.month.incrementStart, this.month.incrementIncrement].join('/');
          break;
        case '3':
          this.month.specificSpecific.map(val => {
            months += val + ',';
          });
          months = months.slice(0, -1);
          break;
        case '4':
          months = [this.month.rangeStart, this.month.rangeEnd].join('-');
          break;
      }
      return months;
    },
    yearsText() {
      let years = '';
      let cronEvery = this.year.cronEvery;
      switch (cronEvery.toString()) {
        case '1':
          years = '*';
          break;
        case '2':
          years = [this.year.incrementStart, this.year.incrementIncrement].join('/');
          break;
        case '3':
          this.year.specificSpecific.map(val => {
            years += val + ',';
          });
          years = years.slice(0, -1);
          break;
        case '4':
          years = [this.year.rangeStart, this.year.rangeEnd].join('-');
          break;
        case '5':
          years = '';
          break;
      }
      return years;
    },
    cron() {
      return `${this.secondsText || '*'} ${this.minutesText || '*'} ${this.hoursText || '*'} ${this.daysText || '*'} ${this.monthsText || '*'} ${this.weeksText || '?'} ${this.yearsText}`.trim();
    }
  },
  methods: {
    resolveExpression() {
      if (!this.value?.length) return;
      let expList = this.value.split(" ");
      if (expList.length < 6) {
        new Error("表达式格式不正确");
      }
      for (let i = 0; i < expList.length; i++) {
        this.exps[i].expression = expList[i];
      }
      this.exps.forEach(exp => {
        this.output[exp.type] = exp.expression;
        switch (exp.type) {
          case "year":
          case "month":
          case "hour":
          case "minute":
          case "second":
            this.commonParser(this[exp.type], exp.expression);
            return;
          case "week":
            this.resolveWeek(exp.expression);
            return;
          case "day":
            this.resolveDay(exp.expression);
            return;
        }
      });
    },
    // 年，月，时，分，秒
    commonParser(expressionType, str) {
      if (str == null || str == '') {
        // 年一般省略
        expressionType.specificSpecific = [];
        expressionType.cronEvery = '5';
      } else if (str == "*") {
        this.resolveStar(expressionType);
      } else if (str.indexOf("-") >= 0) {
        this.resolveLine(expressionType, str);
      } else if (str.indexOf("/") >= 0) {
        this.resolveSlash(expressionType, str);
      } else {
        this.resolveComma(expressionType, str);
      }
    },
    resolveWeek(str) {
      const matchCronLastSpecificDomDay = /[(SUN)|(MON)|(TUE)|(WED)|(THU)|(FRI)|(SAT)]+L/;
      if (str.indexOf(",") >= 0) {
        this.week.cronEvery = "2";
        this.resolveComma(this.week, str, '2');
      } else if (str.indexOf("#") >= 0) {
        this.week.cronEvery = "3";
        let range = str.split("#");
        this.week.cronNthDayDay = range[0];
        this.week.cronNthDayNth = range[1];
      } else if (matchCronLastSpecificDomDay.test(str)) {
        this.week.cronEvery = "4";
        this.week.cronLastSpecificDomDay = str.match(matchCronLastSpecificDomDay)[0].substr(0, 3);
      } else if (/\dL/.test(str)) {
        this.week.cronEvery = "4";
        this.week.cronLastSpecificDomDay = str.match(/(\d)L/)[1];
      } else {
        this.week.cronEvery = '5';
      }
    },
    resolveDay(str) {
      if (str == "*") {
        this.resolveStar(this.day);
      } else if (str.indexOf("/") >= 0) {
        this.resolveSlash(this.day, str, '2');
      } else if (str == "L") {
        this.day.cronEvery = "4";
      } else if (str == "LW") {
        this.day.cronEvery = "5";
      } else if (/L-\d+/.test(str)) {
        this.day.cronEvery = "6";
        this.day.cronDaysBeforeEomMinus = Number(str.match(/L-(\d+)/)[1]);
      } else if (/\d+W/.test(str)) {
        this.day.cronEvery = "7";
        this.day.cronDaysNearestWeekday = Number(str.match(/(\d+)W/))[1];
      } else if (str == '?') {
        this.day.cronEvery = '8';
      } else {
        this.resolveComma(this.day, str, '3');
      }
    },
    resolveStar(expressionObj, type = "1") {
      expressionObj.cronEvery = type;
    },
    resolveSlash(expressionObj, expression, type = "2") {
      expressionObj.cronEvery = type;
      let range = expression.split("/");
      expressionObj.incrementStart = range[0];
      expressionObj.incrementIncrement = range[1];
    },
    resolveLine(expressionObj, expression, type = "4") {
      expressionObj.cronEvery = type;
      let range = expression.split("-");
      expressionObj.rangeStart = range[0];
      expressionObj.rangeEnd = range[1];
    },
    resolveComma(expressionObj, expression, type = "3") {
      expressionObj.cronEvery = type;
      expressionObj.specificSpecific = expression.split(",");
    }
  },
  mounted() {
    this.resolveExpression();
  }
});
;// CONCATENATED MODULE: ./packages/cron-input/CronInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var cron_input_CronInputvue_type_script_lang_js_ = (CronInputvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/cron-input/CronInput.vue?vue&type=style&index=0&id=229c51e4&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/cron-input/CronInput.vue?vue&type=style&index=0&id=229c51e4&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./packages/cron-input/CronInput.vue



;


/* normalize component */

var component = normalizeComponent(
  cron_input_CronInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "229c51e4",
  null
  
)

/* harmony default export */ var CronInput = (component.exports);
;// CONCATENATED MODULE: ./packages/cron-input/index.js

CronInput.install = function (Vue) {
  Vue.component(CronInput.name, CronInput);
};
/* harmony default export */ var cron_input = (CronInput);
;// CONCATENATED MODULE: ./packages/index.js

const components = [cron_input];

// 定义 install 方法
const packages_install = function (Vue) {
  if (packages_install.installed) return;
  packages_install.installed = true;
  // 遍历并注册全局组件
  components.map(component => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== 'undefined' && window.Vue) {
  packages_install(window.Vue);
}
/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具备一个 install 方法
  install: packages_install,
  // 组件列表
  ...components
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});