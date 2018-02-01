webpackJsonp([0],{

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(398);

var _videoReact = __webpack_require__(400);

__webpack_require__(410);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Article = function (_Component) {
    _inherits(Article, _Component);

    function Article(props) {
        _classCallCheck(this, Article);

        var _this = _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this, props));

        _this.state = {
            source: sources['bunnyMovie'],
            video: _this.refs.player
            // video_curTime : this.refs.player.currentTime
        };


        _this.button = _this.button.bind(_this);
        return _this;
    }
    // constructor(props, context) {
    //     super(props, context);

    //     this.state = {
    //       source: sources['bunnyMovie'],
    //     };

    //     this.changeCurrentTime = this.changeCurrentTime.bind(this);
    //     this.seek = this.seek.bind(this);
    //     this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
    //     this.changeVolume = this.changeVolume.bind(this);
    //     this.setMuted = this.setMuted.bind(this);
    // }


    _createClass(Article, [{
        key: 'button',
        value: function button(action) {
            var defineButton = action.target.getAttribute('data-type');
            switch (defineButton) {
                case 'play':
                    var _refs$player$getState = this.refs.player.getState(),
                        player = _refs$player$getState.player;

                    console.log(this.state);
                    this.refs.player.play();
                    // player.play();
                    break;
                case 'pause':
                    this.refs.player.pause();

                    break;
                case 'load':
                    this.refs.player.load();
                    break;
                default:
                    console.log(defineButton);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            // this.refs.player.playbackRate = 2;           
            var video = this.refs.player;
            video.play();
            video.onended = function () {
                console.log(_this2.state);
            };
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {}
        // play(){
        //     this.refs.player.play();
        // }
        // pause(){
        //     this.refs.player.pause();
        // }
        // load(){
        //     this.refs.player.load();
        // }

    }, {
        key: 'handleValueChange',
        value: function handleValueChange() {
            // let video = this.refs.player;
            return "00:00";
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'article',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'videoToCenter' },
                    _react2.default.createElement(
                        _videoReact.Player,
                        {
                            ref: 'player'
                        },
                        _react2.default.createElement('source', { src: this.state.source })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'py-3' },
                    _react2.default.createElement(
                        'button',
                        { className: 'mr-3', 'data-type': 'play', onClick: this.button },
                        'play()'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'mr-3', 'data-type': 'pause', onClick: this.button },
                        'pause()'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'mr-3', 'data-type': 'load', onClick: this.button },
                        'load()'
                    ),
                    _react2.default.createElement('input', {
                        value: '00',
                        onChange: this.handleValueChange
                    })
                )
            );
        }
    }]);

    return Article;
}(_react.Component);

exports.default = Article;


var sources = {
    sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
    bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
    bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
    test: 'http://media.w3.org/2010/05/video/movie_300.webm'
};

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/lodash-es/_freeGlobal.js
var _freeGlobal = __webpack_require__(402);

// CONCATENATED MODULE: ../node_modules/lodash-es/_root.js


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ var _root = (root);

// CONCATENATED MODULE: ../node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var Symbol = _root.Symbol;

/* harmony default export */ var _Symbol = (Symbol);

// CONCATENATED MODULE: ../node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ var _getRawTag = (getRawTag);

// CONCATENATED MODULE: ../node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ var _objectToString = (objectToString);

// CONCATENATED MODULE: ../node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ var _baseGetTag = (baseGetTag);

// CONCATENATED MODULE: ../node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ var _overArg = (overArg);

// CONCATENATED MODULE: ../node_modules/lodash-es/_getPrototype.js


/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

/* harmony default export */ var _getPrototype = (getPrototype);

// CONCATENATED MODULE: ../node_modules/lodash-es/isObjectLike.js
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

/* harmony default export */ var lodash_es_isObjectLike = (isObjectLike);

// CONCATENATED MODULE: ../node_modules/lodash-es/isPlainObject.js




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    isPlainObject_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var isPlainObject_hasOwnProperty = isPlainObject_objectProto.hasOwnProperty;

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
  if (!lodash_es_isObjectLike(value) || _baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = isPlainObject_hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ var lodash_es_isPlainObject = __webpack_exports__["a"] = (isPlainObject);


/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(399);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(108)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./article.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./article.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(107)(undefined);
// imports


// module
exports.push([module.i, "article {\n  color: #333333;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translateY(-50%);\n  height: 540px; }\n  @media screen and (max-width: 960px) {\n    article {\n      width: 100%; } }\n  @media screen and (min-width: 960px) {\n    article {\n      width: 960px; } }\n\n.videoToCenter {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: -50%; }\n\n.py-3 {\n  position: absolute; }\n", ""]);

// exports


/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigPlayButton", function() { return BigPlayButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinner", function() { return LoadingSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosterImage", function() { return PosterImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bezel", function() { return Bezel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shortcut", function() { return Shortcut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlBar", function() { return ControlBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayToggle", function() { return PlayToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForwardControl", function() { return ForwardControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplayControl", function() { return ReplayControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenToggle", function() { return FullscreenToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressControl", function() { return ProgressControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeekBar", function() { return SeekBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayProgressBar", function() { return PlayProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProgressBar", function() { return LoadProgressBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseTimeDisplay", function() { return MouseTimeDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemainingTimeDisplay", function() { return RemainingTimeDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentTimeDisplay", function() { return CurrentTimeDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationDisplay", function() { return DurationDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeDivider", function() { return TimeDivider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolumeMenuButton", function() { return VolumeMenuButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaybackRateMenuButton", function() { return PlaybackRateMenuButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaybackRate", function() { return PlaybackRate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ('object' !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (false) {
		// register as 'classnames', consistent with npm package name
		undefined('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());
});

var LOAD_START = 'video-react/LOAD_START';
var CAN_PLAY = 'video-react/CAN_PLAY';
var WAITING = 'video-react/WAITING';
var CAN_PLAY_THROUGH = 'video-react/CAN_PLAY_THROUGH';
var PLAYING = 'video-react/PLAYING';
var PLAY = 'video-react/PLAY';
var PAUSE = 'video-react/PAUSE';
var END = 'video-react/END';
var SEEKING = 'video-react/SEEKING';
var SEEKED = 'video-react/SEEKED';
var SEEKING_TIME = 'video-react/SEEKING_TIME';
var END_SEEKING = 'video-react/END_SEEKING';
var DURATION_CHANGE = 'video-react/DURATION_CHANGE';
var TIME_UPDATE = 'video-react/TIME_UPDATE';
var VOLUME_CHANGE = 'video-react/VOLUME_CHANGE';
var PROGRESS_CHANGE = 'video-react/PROGRESS_CHANGE';
var RATE_CHANGE = 'video-react/RATE_CHANGE';
var SUSPEND = 'video-react/SUSPEND';
var ABORT = 'video-react/ABORT';
var EMPTIED = 'video-react/EMPTIED';
var STALLED = 'video-react/STALLED';
var LOADED_META_DATA = 'video-react/LOADED_META_DATA';
var LOADED_DATA = 'video-react/LOADED_DATA';
var RESIZE = 'video-react/RESIZE';
var ERROR = 'video-react/ERROR';

function handleLoadStart(videoProps) {
  return {
    type: LOAD_START,
    videoProps: videoProps
  };
}

function handleCanPlay(videoProps) {
  return {
    type: CAN_PLAY,
    videoProps: videoProps
  };
}

function handleWaiting(videoProps) {
  return {
    type: WAITING,
    videoProps: videoProps
  };
}

function handleCanPlayThrough(videoProps) {
  return {
    type: CAN_PLAY_THROUGH,
    videoProps: videoProps
  };
}

function handlePlaying(videoProps) {
  return {
    type: PLAYING,
    videoProps: videoProps
  };
}

function handlePlay(videoProps) {
  return {
    type: PLAY,
    videoProps: videoProps
  };
}

function handlePause(videoProps) {
  return {
    type: PAUSE,
    videoProps: videoProps
  };
}

function handleEnd(videoProps) {
  return {
    type: END,
    videoProps: videoProps
  };
}

function handleSeeking(videoProps) {
  return {
    type: SEEKING,
    videoProps: videoProps
  };
}

function handleSeeked(videoProps) {
  return {
    type: SEEKED,
    videoProps: videoProps
  };
}

function handleDurationChange(videoProps) {
  return {
    type: DURATION_CHANGE,
    videoProps: videoProps
  };
}

function handleTimeUpdate(videoProps) {
  return {
    type: TIME_UPDATE,
    videoProps: videoProps
  };
}

function handleVolumeChange(videoProps) {
  return {
    type: VOLUME_CHANGE,
    videoProps: videoProps
  };
}

function handleProgressChange(videoProps) {
  return {
    type: PROGRESS_CHANGE,
    videoProps: videoProps
  };
}

function handleRateChange(videoProps) {
  return {
    type: RATE_CHANGE,
    videoProps: videoProps
  };
}

function handleSuspend(videoProps) {
  return {
    type: SUSPEND,
    videoProps: videoProps
  };
}

function handleAbort(videoProps) {
  return {
    type: ABORT,
    videoProps: videoProps
  };
}

function handleEmptied(videoProps) {
  return {
    type: EMPTIED,
    videoProps: videoProps
  };
}

function handleStalled(videoProps) {
  return {
    type: STALLED,
    videoProps: videoProps
  };
}

function handleLoadedMetaData(videoProps) {
  return {
    type: LOADED_META_DATA,
    videoProps: videoProps
  };
}

function handleLoadedData(videoProps) {
  return {
    type: LOADED_DATA,
    videoProps: videoProps
  };
}

function handleResize(videoProps) {
  return {
    type: RESIZE,
    videoProps: videoProps
  };
}

function handleError(videoProps) {
  return {
    type: ERROR,
    videoProps: videoProps
  };
}

function handleSeekingTime(time) {
  return {
    type: SEEKING_TIME,
    time: time
  };
}

function handleEndSeeking(time) {
  return {
    type: END_SEEKING,
    time: time
  };
}

var videoActions = Object.freeze({
	LOAD_START: LOAD_START,
	CAN_PLAY: CAN_PLAY,
	WAITING: WAITING,
	CAN_PLAY_THROUGH: CAN_PLAY_THROUGH,
	PLAYING: PLAYING,
	PLAY: PLAY,
	PAUSE: PAUSE,
	END: END,
	SEEKING: SEEKING,
	SEEKED: SEEKED,
	SEEKING_TIME: SEEKING_TIME,
	END_SEEKING: END_SEEKING,
	DURATION_CHANGE: DURATION_CHANGE,
	TIME_UPDATE: TIME_UPDATE,
	VOLUME_CHANGE: VOLUME_CHANGE,
	PROGRESS_CHANGE: PROGRESS_CHANGE,
	RATE_CHANGE: RATE_CHANGE,
	SUSPEND: SUSPEND,
	ABORT: ABORT,
	EMPTIED: EMPTIED,
	STALLED: STALLED,
	LOADED_META_DATA: LOADED_META_DATA,
	LOADED_DATA: LOADED_DATA,
	RESIZE: RESIZE,
	ERROR: ERROR,
	handleLoadStart: handleLoadStart,
	handleCanPlay: handleCanPlay,
	handleWaiting: handleWaiting,
	handleCanPlayThrough: handleCanPlayThrough,
	handlePlaying: handlePlaying,
	handlePlay: handlePlay,
	handlePause: handlePause,
	handleEnd: handleEnd,
	handleSeeking: handleSeeking,
	handleSeeked: handleSeeked,
	handleDurationChange: handleDurationChange,
	handleTimeUpdate: handleTimeUpdate,
	handleVolumeChange: handleVolumeChange,
	handleProgressChange: handleProgressChange,
	handleRateChange: handleRateChange,
	handleSuspend: handleSuspend,
	handleAbort: handleAbort,
	handleEmptied: handleEmptied,
	handleStalled: handleStalled,
	handleLoadedMetaData: handleLoadedMetaData,
	handleLoadedData: handleLoadedData,
	handleResize: handleResize,
	handleError: handleError,
	handleSeekingTime: handleSeekingTime,
	handleEndSeeking: handleEndSeeking
});

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
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
};

var _extends = Object.assign || function (target) {
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



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var Fullscreen = function () {
  function Fullscreen() {
    classCallCheck(this, Fullscreen);
  }

  createClass(Fullscreen, [{
    key: 'request',
    value: function request(elm) {
      if (elm.requestFullscreen) {
        elm.requestFullscreen();
      } else if (elm.webkitRequestFullscreen) {
        elm.webkitRequestFullscreen();
      } else if (elm.mozRequestFullScreen) {
        elm.mozRequestFullScreen();
      } else if (elm.msRequestFullscreen) {
        elm.msRequestFullscreen();
      }
    }
  }, {
    key: 'exit',
    value: function exit() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }, {
    key: 'addEventListener',
    value: function addEventListener(handler) {
      document.addEventListener('fullscreenchange', handler);
      document.addEventListener('webkitfullscreenchange', handler);
      document.addEventListener('mozfullscreenchange', handler);
      document.addEventListener('MSFullscreenChange', handler);
    }
  }, {
    key: 'removeEventListener',
    value: function removeEventListener(handler) {
      document.removeEventListener('fullscreenchange', handler);
      document.removeEventListener('webkitfullscreenchange', handler);
      document.removeEventListener('mozfullscreenchange', handler);
      document.removeEventListener('MSFullscreenChange', handler);
    }
  }, {
    key: 'isFullscreen',
    get: function get$$1() {
      return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    }
  }, {
    key: 'enabled',
    get: function get$$1() {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
    }
  }]);
  return Fullscreen;
}();

var fullscreen = new Fullscreen();

var OPERATE = 'video-react/OPERATE';
var FULLSCREEN_CHANGE = 'video-react/FULLSCREEN_CHANGE';
var PLAYER_ACTIVATE = 'video-react/PLAYER_ACTIVATE';
var USER_ACTIVATE = 'video-react/USER_ACTIVATE';

function handleFullscreenChange(isFullscreen) {
  return {
    type: FULLSCREEN_CHANGE,
    isFullscreen: isFullscreen
  };
}

function activate(activity) {
  return {
    type: PLAYER_ACTIVATE,
    activity: activity
  };
}

function userActivate(activity) {
  return {
    type: USER_ACTIVATE,
    activity: activity
  };
}

function play() {
  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    action: 'play',
    source: ''
  };

  this.video.play();

  return {
    type: OPERATE,
    operation: operation
  };
}

function pause() {
  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    action: 'pause',
    source: ''
  };

  this.video.pause();

  return {
    type: OPERATE,
    operation: operation
  };
}

function togglePlay() {
  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    action: 'toggle-play',
    source: ''
  };

  this.video.togglePlay();

  return {
    type: OPERATE,
    operation: operation
  };
}

// seek video by time
function seek(time) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: 'seek',
    source: ''
  };

  this.video.seek(time);

  return {
    type: OPERATE,
    operation: operation
  };
}

// jump forward x seconds
function forward(seconds) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: 'forward-' + seconds,
    source: ''
  };

  this.video.forward(seconds);

  return {
    type: OPERATE,
    operation: operation
  };
}

// jump back x seconds
function replay(seconds) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: 'replay-' + seconds,
    source: ''
  };

  this.video.replay(seconds);

  return {
    type: OPERATE,
    operation: operation
  };
}

function changeRate(rate) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: 'change-rate',
    source: ''
  };

  this.video.playbackRate = rate;

  return {
    type: OPERATE,
    operation: operation
  };
}

function changeVolume(volume) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: 'change-volume',
    source: ''
  };

  var v = volume;
  if (volume < 0) {
    v = 0;
  }
  if (volume > 1) {
    v = 1;
  }
  this.video.volume = v;

  return {
    type: OPERATE,
    operation: operation
  };
}

function mute(muted) {
  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    action: muted ? 'muted' : 'unmuted',
    source: ''
  };

  this.video.muted = muted;

  return {
    type: OPERATE,
    operation: operation
  };
}

function toggleFullscreen(player) {
  if (fullscreen.enabled) {
    if (fullscreen.isFullscreen) {
      fullscreen.exit();
    } else {
      fullscreen.request(this.rootElement);
    }
    return {
      type: OPERATE,
      operation: {
        action: 'toggle-fullscreen',
        source: ''
      }
    };
  }

  return {
    type: FULLSCREEN_CHANGE,
    isFullscreen: !player.isFullscreen
  };
}

var playerActions = Object.freeze({
	OPERATE: OPERATE,
	FULLSCREEN_CHANGE: FULLSCREEN_CHANGE,
	PLAYER_ACTIVATE: PLAYER_ACTIVATE,
	USER_ACTIVATE: USER_ACTIVATE,
	handleFullscreenChange: handleFullscreenChange,
	activate: activate,
	userActivate: userActivate,
	play: play,
	pause: pause,
	togglePlay: togglePlay,
	seek: seek,
	forward: forward,
	replay: replay,
	changeRate: changeRate,
	changeVolume: changeVolume,
	mute: mute,
	toggleFullscreen: toggleFullscreen
});

var initialState = {
  currentSrc: null,
  duration: 0,
  currentTime: 0,
  seekingTime: 0,
  buffered: null,
  waiting: false,
  seeking: false,
  paused: true,
  autoPaused: false,
  ended: false,
  playbackRate: 1,
  muted: false,
  volume: 1,
  readyState: 0,
  networkState: 0,
  videoWidth: 0,
  videoHeight: 0,
  hasStarted: false,
  userActivity: true,
  isActive: false,
  isFullscreen: false
};

function video() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case USER_ACTIVATE:
      return _extends({}, state, {
        userActivity: action.activity
      });
    case PLAYER_ACTIVATE:
      return _extends({}, state, {
        isActive: action.activity
      });
    case FULLSCREEN_CHANGE:
      return _extends({}, state, {
        isFullscreen: !!action.isFullscreen
      });
    case SEEKING_TIME:
      return _extends({}, state, {
        seekingTime: action.time
      });
    case END_SEEKING:
      return _extends({}, state, {
        seekingTime: 0
      });
    case LOAD_START:
      return _extends({}, state, action.videoProps, {
        hasStarted: false,
        ended: false
      });
    case CAN_PLAY:
      return _extends({}, state, action.videoProps, {
        waiting: false
      });
    case WAITING:
      return _extends({}, state, action.videoProps, {
        waiting: true
      });
    case CAN_PLAY_THROUGH:
    case PLAYING:
      return _extends({}, state, action.videoProps, {
        waiting: false
      });
    case PLAY:
      return _extends({}, state, action.videoProps, {
        ended: false,
        paused: false,
        autoPaused: false,
        waiting: false,
        hasStarted: true
      });
    case PAUSE:
      return _extends({}, state, action.videoProps, {
        paused: true
      });
    case END:
      return _extends({}, state, action.videoProps, {
        ended: true
      });
    case SEEKING:
      return _extends({}, state, action.videoProps, {
        seeking: true
      });
    case SEEKED:
      return _extends({}, state, action.videoProps, {
        seeking: false
      });
    case ERROR:
      return _extends({}, state, action.videoProps, {
        error: 'UNKNOWN ERROR',
        ended: true
      });
    case DURATION_CHANGE:
    case TIME_UPDATE:
    case VOLUME_CHANGE:
    case PROGRESS_CHANGE:
    case RATE_CHANGE:
    case SUSPEND:
    case ABORT:
    case EMPTIED:
    case STALLED:
    case LOADED_META_DATA:
    case LOADED_DATA:
    case RESIZE:
      var newState = _extends({}, state, action.videoProps);
      if (action.videoProps.paused === false) {
        newState.hasStarted = true;
        newState.waiting = false;
      }
      return newState;
    default:
      return state;
  }
}

var initialState$1 = {
  count: 0,
  operation: {
    action: '',
    source: ''
  }
};

function operation() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState$1;
  var action = arguments[1];

  switch (action.type) {
    case OPERATE:
      return _extends({}, state, {
        count: state.count + 1,
        operation: _extends({}, state.operation, action.operation)
      });
    default:
      return state;
  }
}

var reducer = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  return {
    player: video(state.player, action),
    operation: operation(state.operation, action)
  };
};

var Manager = function () {
  function Manager() {
    classCallCheck(this, Manager);

    this.store = Object(__WEBPACK_IMPORTED_MODULE_2_redux__["a" /* createStore */])(reducer);

    this.video = null;
    this.rootElement = null;
  }

  createClass(Manager, [{
    key: 'getActions',
    value: function getActions() {
      var manager = this;
      var dispatch = this.store.dispatch;

      var actions = _extends({}, playerActions, videoActions);

      function bindActionCreator(actionCreator) {
        return function () {
          // eslint-disable-next-line prefer-rest-params
          var action = actionCreator.apply(manager, arguments);
          if (typeof action !== 'undefined') {
            dispatch(action);
          }
        };
      }

      return Object.keys(actions).filter(function (key) {
        return typeof actions[key] === 'function';
      }).reduce(function (boundActions, key) {
        boundActions[key] = bindActionCreator(actions[key]);
        return boundActions;
      }, {});
    }
  }, {
    key: 'getState',
    value: function getState() {
      return this.store.getState();
    }

    // subscribe state change

  }, {
    key: 'subscribeToStateChange',
    value: function subscribeToStateChange(listener, getState) {
      if (!getState) {
        getState = this.getState.bind(this);
      }

      var prevState = getState();

      var handleChange = function handleChange() {
        var state = getState();
        if (state === prevState) {
          return;
        }
        var prevStateCopy = prevState;
        prevState = state;
        listener(state, prevStateCopy);
      };

      return this.store.subscribe(handleChange);
    }

    // subscribe to operation state change

  }, {
    key: 'subscribeToOperationStateChange',
    value: function subscribeToOperationStateChange(listener) {
      var _this = this;

      return this.subscribeToStateChange(listener, function () {
        return _this.getState().operation;
      });
    }

    // subscribe to player state change

  }, {
    key: 'subscribeToPlayerStateChange',
    value: function subscribeToPlayerStateChange(listener) {
      var _this2 = this;

      return this.subscribeToStateChange(listener, function () {
        return _this2.getState().player;
      });
    }
  }]);
  return Manager;
}();

var propTypes$1 = {
  actions: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  player: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  position: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};

var defaultProps$1 = {
  position: 'left'
};

var BigPlayButton = function (_Component) {
  inherits(BigPlayButton, _Component);

  function BigPlayButton(props, context) {
    classCallCheck(this, BigPlayButton);

    var _this = possibleConstructorReturn(this, (BigPlayButton.__proto__ || Object.getPrototypeOf(BigPlayButton)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  createClass(BigPlayButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var actions = this.props.actions;

      actions.play();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          player = _props.player,
          position = _props.position;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'button',
        {
          className: classnames('video-react-big-play-button', 'video-react-big-play-button-' + position, this.props.className, {
            'big-play-button-hide': player.hasStarted || !player.currentSrc
          }),
          type: 'button',
          'aria-live': 'polite',
          tabIndex: '0',
          onClick: this.handleClick
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'span',
          { className: 'video-react-control-text' },
          'Play Video'
        )
      );
    }
  }]);
  return BigPlayButton;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

BigPlayButton.propTypes = propTypes$1;
BigPlayButton.defaultProps = defaultProps$1;

var propTypes$2 = {
  player: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};

function LoadingSpinner(_ref) {
  var player = _ref.player,
      className = _ref.className;

  if (player.error || !player.seeking && !player.waiting) {
    return null;
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
    className: classnames('video-react-loading-spinner', className)
  });
}

LoadingSpinner.propTypes = propTypes$2;

var propTypes$3 = {
  poster: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  player: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  actions: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};

function PosterImage(_ref) {
  var poster = _ref.poster,
      player = _ref.player,
      actions = _ref.actions,
      className = _ref.className;

  if (!poster || player.hasStarted) {
    return null;
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
    className: classnames('video-react-poster', className),
    style: {
      backgroundImage: 'url("' + poster + '")'
    },
    onClick: function onClick() {
      if (player.paused) {
        actions.play();
      }
    }
  });
}

PosterImage.propTypes = propTypes$3;

/**
 * @file format-time.js
 *
 * Format seconds as a time string, H:MM:SS or M:SS
 * Supplying a guide (in seconds) will force a number of leading zeros
 * to cover the length of the guide
 *
 * @param  {Number} seconds Number of seconds to be turned into a string
 * @param  {Number} guide   Number (in seconds) to model the string after
 * @return {String}         Time formatted as H:MM:SS or M:SS
 * @private
 * @function formatTime
 */
function formatTime() {
  var seconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var guide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : seconds;

  var s = Math.floor(seconds % 60);
  var m = Math.floor(seconds / 60 % 60);
  var h = Math.floor(seconds / 3600);
  var gm = Math.floor(guide / 60 % 60);
  var gh = Math.floor(guide / 3600);

  // handle invalid times
  if (isNaN(seconds) || seconds === Infinity) {
    // '-' is false for all relational operators (e.g. <, >=) so this setting
    // will add the minimum number of fields specified by the guide
    h = m = s = '-';
  }

  // Check if we need to show hours
  h = h > 0 || gh > 0 ? h + ':' : '';

  // If hours are showing, we may need to add a leading zero.
  // Always show at least one digit of minutes.
  m = ((h || gm >= 10) && m < 10 ? '0' + m : m) + ':';

  // Check if leading zero is need for seconds
  s = s < 10 ? '0' + s : s;

  return h + m + s;
}

// Check if the element belongs to a video element
// only accept <source />, <track />,
// <MyComponent isVideoChild />
// elements
function isVideoChild(c) {
  if (c.props && c.props.isVideoChild) {
    return true;
  }
  return c.type === 'source' || c.type === 'track';
}

var find = function find(elements, func) {
  return elements.filter(func)[0];
};

// merge default children
// sort them by `order` property
// filter them by `disabled` property
function mergeAndSortChildren(defaultChildren, _children, _parentProps) {
  var defaultOrder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  var children = __WEBPACK_IMPORTED_MODULE_1_react___default.a.Children.toArray(_children);
  var parentProps = _extends({}, _parentProps);
  return children.filter(function (e) {
    return !e.props.disabled;
  }).concat(defaultChildren.filter(function (c) {
    return !find(children, function (component) {
      return component.type === c.type;
    });
  })).map(function (element) {
    var defaultComponent = find(defaultChildren, function (c) {
      return c.type === element.type;
    });
    delete parentProps.order;
    var defaultProps = defaultComponent ? defaultComponent.props : {};
    var props = _extends({}, parentProps, defaultProps, element.props);
    var e = __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(element, props, element.props.children);
    return e;
  }).sort(function (a, b) {
    return (a.props.order || defaultOrder) - (b.props.order || defaultOrder);
  });
}

/**
 * Temporary utility for generating the warnings
 */
function deprecatedWarning(oldMethodCall, newMethodCall) {
  // eslint-disable-next-line no-console
  console.warn('WARNING: ' + oldMethodCall + ' will be deprecated soon! Please use ' + newMethodCall + ' instead.');
}

function throttle(callback, limit) {
  var _arguments = arguments;

  var wait = false;
  return function () {
    if (!wait) {
      callback.apply(null, _arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}

var mediaProperties = ['error', 'src', 'srcObject', 'currentSrc', 'crossOrigin', 'networkState', 'preload', 'buffered', 'readyState', 'seeking', 'currentTime', 'duration', 'paused', 'defaultPlaybackRate', 'playbackRate', 'played', 'seekable', 'ended', 'autoplay', 'loop', 'mediaGroup', 'controller', 'controls', 'volume', 'muted', 'defaultMuted', 'audioTracks', 'videoTracks', 'textTracks', 'width', 'height', 'videoWidth', 'videoHeight', 'poster'];

var propTypes$4 = {
  actions: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  player: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  children: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.any,
  startTime: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
  loop: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  muted: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  autoPlay: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  playsInline: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  src: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  poster: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  preload: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(['auto', 'metadata', 'none']),
  crossOrigin: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,

  onLoadStart: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onWaiting: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onCanPlay: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onCanPlayThrough: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onPlaying: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onEnded: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onSeeking: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onSeeked: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onPlay: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onPause: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onProgress: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onDurationChange: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onError: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onSuspend: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onAbort: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onEmptied: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onStalled: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onLoadedMetadata: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onLoadedData: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onTimeUpdate: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onRateChange: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onVolumeChange: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onResize: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func
};

var defaultProps$2 = {
  preload: 'auto'
};

var Video = function (_Component) {
  inherits(Video, _Component);

  function Video(props) {
    classCallCheck(this, Video);

    var _this = possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, props));

    _this.video = null; // the html5 video
    _this.play = _this.play.bind(_this);
    _this.pause = _this.pause.bind(_this);
    _this.seek = _this.seek.bind(_this);
    _this.forward = _this.forward.bind(_this);
    _this.replay = _this.replay.bind(_this);
    _this.toggleFullscreen = _this.toggleFullscreen.bind(_this);
    _this.getProperties = _this.getProperties.bind(_this);
    _this.renderChildren = _this.renderChildren.bind(_this);
    _this.handleLoadStart = _this.handleLoadStart.bind(_this);
    _this.handleCanPlay = _this.handleCanPlay.bind(_this);
    _this.handleCanPlayThrough = _this.handleCanPlayThrough.bind(_this);
    _this.handlePlay = _this.handlePlay.bind(_this);
    _this.handlePlaying = _this.handlePlaying.bind(_this);
    _this.handlePause = _this.handlePause.bind(_this);
    _this.handleEnded = _this.handleEnded.bind(_this);
    _this.handleWaiting = _this.handleWaiting.bind(_this);
    _this.handleSeeking = _this.handleSeeking.bind(_this);
    _this.handleSeeked = _this.handleSeeked.bind(_this);
    _this.handleFullscreenChange = _this.handleFullscreenChange.bind(_this);
    _this.handleError = _this.handleError.bind(_this);
    _this.handleSuspend = _this.handleSuspend.bind(_this);
    _this.handleAbort = _this.handleAbort.bind(_this);
    _this.handleEmptied = _this.handleEmptied.bind(_this);
    _this.handleStalled = _this.handleStalled.bind(_this);
    _this.handleLoadedMetaData = _this.handleLoadedMetaData.bind(_this);
    _this.handleLoadedData = _this.handleLoadedData.bind(_this);
    _this.handleTimeUpdate = _this.handleTimeUpdate.bind(_this);
    _this.handleRateChange = _this.handleRateChange.bind(_this);
    _this.handleVolumeChange = _this.handleVolumeChange.bind(_this);
    _this.handleDurationChange = _this.handleDurationChange.bind(_this);
    _this.handleProgress = throttle(_this.handleProgress.bind(_this), 250);
    _this.handleKeypress = _this.handleKeypress.bind(_this);
    return _this;
  }

  createClass(Video, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.forceUpdate(); // make sure the children can get the video property
    }

    // get all video properties

  }, {
    key: 'getProperties',
    value: function getProperties() {
      var _this2 = this;

      if (!this.video) {
        return null;
      }

      return mediaProperties.reduce(function (properties, key) {
        properties[key] = _this2.video[key];
        return properties;
      }, {});
    }

    // get playback rate

  }, {
    key: 'play',


    // play the video
    value: function play() {
      var promise = this.video.play();
      if (promise !== undefined) {
        promise.catch(function (error) {}).then(function () {});
      }
    }

    // pause the video

  }, {
    key: 'pause',
    value: function pause() {
      var promise = this.video.pause();
      if (promise !== undefined) {
        promise.catch(function (error) {}).then(function () {});
      }
    }

    // Change the video source and re-load the video:

  }, {
    key: 'load',
    value: function load() {
      this.video.load();
    }

    // Add a new text track to the video

  }, {
    key: 'addTextTrack',
    value: function addTextTrack() {
      var _video;

      (_video = this.video).addTextTrack.apply(_video, arguments);
    }

    // Check if your browser can play different types of video:

  }, {
    key: 'canPlayType',
    value: function canPlayType() {
      var _video2;

      (_video2 = this.video).canPlayType.apply(_video2, arguments);
    }

    // toggle play

  }, {
    key: 'togglePlay',
    value: function togglePlay() {
      if (this.video.paused) {
        this.play();
      } else {
        this.pause();
      }
    }

    // seek video by time

  }, {
    key: 'seek',
    value: function seek(time) {
      try {
        this.video.currentTime = time;
      } catch (e) {
        // console.log(e, 'Video is not ready.')
      }
    }

    // jump forward x seconds

  }, {
    key: 'forward',
    value: function forward(seconds) {
      this.seek(this.video.currentTime + seconds);
    }

    // jump back x seconds

  }, {
    key: 'replay',
    value: function replay(seconds) {
      this.forward(-seconds);
    }

    // enter or exist full screen

  }, {
    key: 'toggleFullscreen',
    value: function toggleFullscreen() {
      var _props = this.props,
          player = _props.player,
          actions = _props.actions;

      actions.toggleFullscreen(player);
    }

    // Fired when the user agent
    // begins looking for media data

  }, {
    key: 'handleLoadStart',
    value: function handleLoadStart() {
      var _props2 = this.props,
          actions = _props2.actions,
          onLoadStart = _props2.onLoadStart;

      actions.handleLoadStart(this.getProperties());
      if (onLoadStart) {
        onLoadStart.apply(undefined, arguments);
      }
    }

    // A handler for events that
    // signal that waiting has ended

  }, {
    key: 'handleCanPlay',
    value: function handleCanPlay() {
      var _props3 = this.props,
          actions = _props3.actions,
          onCanPlay = _props3.onCanPlay;


      actions.handleCanPlay(this.getProperties());

      if (onCanPlay) {
        onCanPlay.apply(undefined, arguments);
      }
    }

    // A handler for events that
    // signal that waiting has ended

  }, {
    key: 'handleCanPlayThrough',
    value: function handleCanPlayThrough() {
      var _props4 = this.props,
          actions = _props4.actions,
          onCanPlayThrough = _props4.onCanPlayThrough;

      actions.handleCanPlayThrough(this.getProperties());

      if (onCanPlayThrough) {
        onCanPlayThrough.apply(undefined, arguments);
      }
    }

    // A handler for events that
    // signal that waiting has ended

  }, {
    key: 'handlePlaying',
    value: function handlePlaying() {
      var _props5 = this.props,
          actions = _props5.actions,
          onPlaying = _props5.onPlaying;

      actions.handlePlaying(this.getProperties());

      if (onPlaying) {
        onPlaying.apply(undefined, arguments);
      }
    }

    // Fired whenever the media has been started

  }, {
    key: 'handlePlay',
    value: function handlePlay() {
      var _props6 = this.props,
          actions = _props6.actions,
          onPlay = _props6.onPlay;

      actions.handlePlay(this.getProperties());

      if (onPlay) {
        onPlay.apply(undefined, arguments);
      }
    }

    // Fired whenever the media has been paused

  }, {
    key: 'handlePause',
    value: function handlePause() {
      var _props7 = this.props,
          actions = _props7.actions,
          onPause = _props7.onPause;

      actions.handlePause(this.getProperties());

      if (onPause) {
        onPause.apply(undefined, arguments);
      }
    }

    // Fired when the duration of
    // the media resource is first known or changed

  }, {
    key: 'handleDurationChange',
    value: function handleDurationChange() {
      var _props8 = this.props,
          actions = _props8.actions,
          onDurationChange = _props8.onDurationChange;

      actions.handleDurationChange(this.getProperties());

      if (onDurationChange) {
        onDurationChange.apply(undefined, arguments);
      }
    }

    // Fired while the user agent
    // is downloading media data

  }, {
    key: 'handleProgress',
    value: function handleProgress() {
      var _props9 = this.props,
          actions = _props9.actions,
          onProgress = _props9.onProgress;

      if (this.video) {
        actions.handleProgressChange(this.getProperties());
      }

      if (onProgress) {
        onProgress.apply(undefined, arguments);
      }
    }

    // Fired when the end of the media resource
    // is reached (currentTime == duration)

  }, {
    key: 'handleEnded',
    value: function handleEnded() {
      var _props10 = this.props,
          loop = _props10.loop,
          player = _props10.player,
          actions = _props10.actions,
          onEnded = _props10.onEnded;

      if (loop) {
        this.seek(0);
        this.play();
      } else if (!player.paused) {
        this.pause();
      }
      actions.handleEnd(this.getProperties());

      if (onEnded) {
        onEnded.apply(undefined, arguments);
      }
    }

    // Fired whenever the media begins waiting

  }, {
    key: 'handleWaiting',
    value: function handleWaiting() {
      var _props11 = this.props,
          actions = _props11.actions,
          onWaiting = _props11.onWaiting;

      actions.handleWaiting(this.getProperties());

      if (onWaiting) {
        onWaiting.apply(undefined, arguments);
      }
    }

    // Fired whenever the player
    // is jumping to a new time

  }, {
    key: 'handleSeeking',
    value: function handleSeeking() {
      var _props12 = this.props,
          actions = _props12.actions,
          onSeeking = _props12.onSeeking;

      actions.handleSeeking(this.getProperties());

      if (onSeeking) {
        onSeeking.apply(undefined, arguments);
      }
    }

    // Fired when the player has
    // finished jumping to a new time

  }, {
    key: 'handleSeeked',
    value: function handleSeeked() {
      var _props13 = this.props,
          actions = _props13.actions,
          onSeeked = _props13.onSeeked;

      actions.handleSeeked(this.getProperties());

      if (onSeeked) {
        onSeeked.apply(undefined, arguments);
      }
    }

    // Handle Fullscreen Change

  }, {
    key: 'handleFullscreenChange',
    value: function handleFullscreenChange() {}

    // Fires when the browser is
    // intentionally not getting media data

  }, {
    key: 'handleSuspend',
    value: function handleSuspend() {
      var _props14 = this.props,
          actions = _props14.actions,
          onSuspend = _props14.onSuspend;

      actions.handleSuspend(this.getProperties());
      if (onSuspend) {
        onSuspend.apply(undefined, arguments);
      }
    }

    // Fires when the loading of an audio/video is aborted

  }, {
    key: 'handleAbort',
    value: function handleAbort() {
      var _props15 = this.props,
          actions = _props15.actions,
          onAbort = _props15.onAbort;

      actions.handleAbort(this.getProperties());
      if (onAbort) {
        onAbort.apply(undefined, arguments);
      }
    }

    // Fires when the current playlist is empty

  }, {
    key: 'handleEmptied',
    value: function handleEmptied() {
      var _props16 = this.props,
          actions = _props16.actions,
          onEmptied = _props16.onEmptied;

      actions.handleEmptied(this.getProperties());
      if (onEmptied) {
        onEmptied.apply(undefined, arguments);
      }
    }

    // Fires when the browser is trying to
    // get media data, but data is not available

  }, {
    key: 'handleStalled',
    value: function handleStalled() {
      var _props17 = this.props,
          actions = _props17.actions,
          onStalled = _props17.onStalled;

      actions.handleStalled(this.getProperties());

      if (onStalled) {
        onStalled.apply(undefined, arguments);
      }
    }

    // Fires when the browser has loaded
    // meta data for the audio/video

  }, {
    key: 'handleLoadedMetaData',
    value: function handleLoadedMetaData() {
      var _props18 = this.props,
          actions = _props18.actions,
          onLoadedMetadata = _props18.onLoadedMetadata,
          startTime = _props18.startTime;


      if (startTime && startTime > 0) {
        this.video.currentTime = startTime;
      }

      actions.handleLoadedMetaData(this.getProperties());

      if (onLoadedMetadata) {
        onLoadedMetadata.apply(undefined, arguments);
      }
    }

    // Fires when the browser has loaded
    // the current frame of the audio/video

  }, {
    key: 'handleLoadedData',
    value: function handleLoadedData() {
      var _props19 = this.props,
          actions = _props19.actions,
          onLoadedData = _props19.onLoadedData;

      actions.handleLoadedData(this.getProperties());

      if (onLoadedData) {
        onLoadedData.apply(undefined, arguments);
      }
    }

    // Fires when the current
    // playback position has changed

  }, {
    key: 'handleTimeUpdate',
    value: function handleTimeUpdate() {
      var _props20 = this.props,
          actions = _props20.actions,
          onTimeUpdate = _props20.onTimeUpdate;

      actions.handleTimeUpdate(this.getProperties());

      if (onTimeUpdate) {
        onTimeUpdate.apply(undefined, arguments);
      }
    }

    /**
     * Fires when the playing speed of the audio/video is changed
     */

  }, {
    key: 'handleRateChange',
    value: function handleRateChange() {
      var _props21 = this.props,
          actions = _props21.actions,
          onRateChange = _props21.onRateChange;

      actions.handleRateChange(this.getProperties());

      if (onRateChange) {
        onRateChange.apply(undefined, arguments);
      }
    }

    // Fires when the volume has been changed

  }, {
    key: 'handleVolumeChange',
    value: function handleVolumeChange() {
      var _props22 = this.props,
          actions = _props22.actions,
          onVolumeChange = _props22.onVolumeChange;

      actions.handleVolumeChange(this.getProperties());

      if (onVolumeChange) {
        onVolumeChange.apply(undefined, arguments);
      }
    }

    // Fires when an error occurred
    // during the loading of an audio/video

  }, {
    key: 'handleError',
    value: function handleError() {
      var _props23 = this.props,
          actions = _props23.actions,
          onError = _props23.onError;

      actions.handleError(this.getProperties());
      if (onError) {
        onError.apply(undefined, arguments);
      }
    }
  }, {
    key: 'handleResize',
    value: function handleResize() {
      var _props24 = this.props,
          actions = _props24.actions,
          onResize = _props24.onResize;

      actions.handleResize(this.getProperties());
      if (onResize) {
        onResize.apply(undefined, arguments);
      }
    }
  }, {
    key: 'handleKeypress',
    value: function handleKeypress() {}
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this3 = this;

      var props = _extends({}, this.props, {
        video: this.video
      });

      // to make sure the children can get video property
      if (!this.video) {
        return null;
      }

      // only keep <source />, <track />, <MyComponent isVideoChild /> elements
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.Children.toArray(this.props.children).filter(isVideoChild).map(function (c) {
        var cprops = void 0;
        if (typeof c.type === 'string') {
          // add onError to <source />
          if (c.type === 'source') {
            cprops = _extends({}, c.props);
            var preOnError = cprops.onError;
            cprops.onError = function () {
              if (preOnError) {
                preOnError.apply(undefined, arguments);
              }
              _this3.handleError.apply(_this3, arguments);
            };
          }
        } else {
          cprops = props;
        }
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(c, cprops);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props25 = this.props,
          loop = _props25.loop,
          poster = _props25.poster,
          preload = _props25.preload,
          src = _props25.src,
          autoPlay = _props25.autoPlay,
          playsInline = _props25.playsInline,
          muted = _props25.muted,
          crossOrigin = _props25.crossOrigin;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'video',
        {
          className: classnames('video-react-video', this.props.className),
          crossOrigin: crossOrigin,
          ref: function ref(c) {
            _this4.video = c;
          },
          muted: muted,
          preload: preload,
          loop: loop,
          playsInline: playsInline,
          autoPlay: autoPlay,
          poster: poster,
          src: src,
          onLoadStart: this.handleLoadStart,
          onWaiting: this.handleWaiting,
          onCanPlay: this.handleCanPlay,
          onCanPlayThrough: this.handleCanPlayThrough,
          onPlaying: this.handlePlaying,
          onEnded: this.handleEnded,
          onSeeking: this.handleSeeking,
          onSeeked: this.handleSeeked,
          onPlay: this.handlePlay,
          onPause: this.handlePause,
          onProgress: this.handleProgress,
          onDurationChange: this.handleDurationChange,
          onError: this.handleError,
          onSuspend: this.handleSuspend,
          onAbort: this.handleAbort,
          onEmptied: this.handleEmptied,
          onStalled: this.handleStalled,
          onLoadedMetadata: this.handleLoadedMetaData,
          onLoadedData: this.handleLoadedData,
          onTimeUpdate: this.handleTimeUpdate,
          onRateChange: this.handleRateChange,
          onVolumeChange: this.handleVolumeChange
        },
        this.renderChildren()
      );
    }
  }, {
    key: 'playbackRate',
    get: function get$$1() {
      return this.video.playbackRate;
    }

    // set playback rate
    // speed of video
    ,
    set: function set$$1(rate) {
      this.video.playbackRate = rate;
    }
  }, {
    key: 'muted',
    get: function get$$1() {
      return this.video.muted;
    },
    set: function set$$1(val) {
      this.video.muted = val;
    }
  }, {
    key: 'volume',
    get: function get$$1() {
      return this.video.volume;
    },
    set: function set$$1(val) {
      if (val > 1) {
        val = 1;
      }
      if (val < 0) {
        val = 0;
      }
      this.video.volume = val;
    }

    // video width

  }, {
    key: 'videoWidth',
    get: function get$$1() {
      return this.video.videoWidth;
    }

    // video height

  }, {
    key: 'videoHeight',
    get: function get$$1() {
      return this.video.videoHeight;
    }
  }]);
  return Video;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Video.propTypes = propTypes$4;
Video.defaultProps = defaultProps$2;

var propTypes$5 = {
  manager: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};

var Bezel = function (_Component) {
  inherits(Bezel, _Component);

  function Bezel(props, context) {
    classCallCheck(this, Bezel);

    var _this = possibleConstructorReturn(this, (Bezel.__proto__ || Object.getPrototypeOf(Bezel)).call(this, props, context));

    _this.timer = null;
    props.manager.subscribeToOperationStateChange(_this.handleStateChange.bind(_this));

    _this.state = {
      hidden: true,
      operation: {}
    };
    return _this;
  }

  createClass(Bezel, [{
    key: 'handleStateChange',
    value: function handleStateChange(state, prevState) {
      var _this2 = this;

      if (state.count !== prevState.count && state.operation.source === 'shortcut') {
        if (this.timer) {
          // previous animation is not finished
          clearTimeout(this.timer); // cancel it
          this.timer = null;
        }

        // show it
        // update operation
        this.setState({
          hidden: false,
          count: state.count,
          operation: state.operation
        });

        // hide it after 0.5s
        this.timer = setTimeout(function () {
          _this2.setState({
            hidden: true
          });
          _this2.timer = null;
        }, 500);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // only displays for shortcut so far
      if (this.state.operation.source !== 'shortcut') {
        return null;
      }
      var style = this.state.hidden ? {
        display: 'none'
      } : null;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: classnames({
            'video-react-bezel': true,
            'video-react-bezel-animation': this.state.count % 2 === 0,
            'video-react-bezel-animation-alt': this.state.count % 2 === 1
          }, this.props.className),
          style: style,
          role: 'status',
          'aria-label': this.state.operation.action
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
          className: classnames('video-react-bezel-icon', 'video-react-bezel-icon-' + this.state.operation.action)
        })
      );
    }
  }]);
  return Bezel;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Bezel.propTypes = propTypes$5;

/**
 * Offset Left
 * getBoundingClientRect technique from
 * John Resig http://ejohn.org/blog/getboundingclientrect-is-awesome/
 *
 * @function findElPosition
 * @param {Element} el Element from which to get offset
 * @return {Object}
 */
function findElPosition(el) {
  var box = void 0;

  if (el.getBoundingClientRect && el.parentNode) {
    box = el.getBoundingClientRect();
  }

  if (!box) {
    return {
      left: 0,
      top: 0
    };
  }

  var docEl = document.documentElement;
  var body = document.body;

  var clientLeft = docEl.clientLeft || body.clientLeft || 0;
  var scrollLeft = window.pageXOffset || body.scrollLeft;
  var left = box.left + scrollLeft - clientLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var scrollTop = window.pageYOffset || body.scrollTop;
  var top = box.top + scrollTop - clientTop;

  // Android sometimes returns slightly off decimal values, so need to round
  return {
    left: Math.round(left),
    top: Math.round(top)
  };
}

/**
 * Get pointer position in element
 * Returns an object with x and y coordinates.
 * The base on the coordinates are the bottom left of the element.
 *
 * @function getPointerPosition
 * @param {Element} el Element on which to get the pointer position on
 * @param {Event} event Event object
 * @return {Object} This object will have x and y coordinates corresponding to the mouse position
 */
function getPointerPosition(el, event) {
  var position = {};
  var box = findElPosition(el);
  var boxW = el.offsetWidth;
  var boxH = el.offsetHeight;

  var boxY = box.top;
  var boxX = box.left;
  var pageY = event.pageY;
  var pageX = event.pageX;

  if (event.changedTouches) {
    pageX = event.changedTouches[0].pageX;
    pageY = event.changedTouches[0].pageY;
  }

  position.y = Math.max(0, Math.min(1, (boxY - pageY + boxH) / boxH));
  position.x = Math.max(0, Math.min(1, (pageX - boxX) / boxW));

  return position;
}

// blur an element


// check if an element has a class name
function hasClass(elm, cls) {
  var classes = elm.className.split(' ');
  for (var i = 0; i < classes.length; i++) {
    if (classes[i].toLowerCase() === cls.toLowerCase()) {
      return true;
    }
  }
  return false;
}

var propTypes$6 = {
  manager: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  actions: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  player: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  shortcuts: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.array
};

var Shortcut = function (_Component) {
  inherits(Shortcut, _Component);

  function Shortcut(props, context) {
    classCallCheck(this, Shortcut);

    var _this = possibleConstructorReturn(this, (Shortcut.__proto__ || Object.getPrototypeOf(Shortcut)).call(this, props, context));

    _this.defaultShortcuts = [{
      keyCode: 32, // spacebar
      handle: _this.togglePlay
    }, {
      keyCode: 75, // k
      handle: _this.togglePlay
    }, {
      keyCode: 70, // f
      handle: _this.toggleFullscreen
    }, {
      keyCode: 37, // Left arrow
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        actions.replay(5, {
          action: 'replay-5',
          source: 'shortcut'
        }); // Go back 5 seconds
      }
    }, {
      keyCode: 74, // j
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        actions.replay(10, {
          action: 'replay-10',
          source: 'shortcut'
        }); // Go back 10 seconds
      }
    }, {
      keyCode: 39, // Right arrow
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        actions.forward(5, {
          action: 'forward-5',
          source: 'shortcut'
        }); // Go forward 5 seconds
      }
    }, {
      keyCode: 76, // l
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        actions.forward(10, {
          action: 'forward-10',
          source: 'shortcut'
        }); // Go forward 10 seconds
      }
    }, {
      keyCode: 36, // Home
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        actions.seek(0); // Go to beginning of video
      }
    }, {
      keyCode: 35, // End
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        // Go to end of video
        actions.seek(player.duration);
      }
    }, {
      keyCode: 38, // Up arrow
      handle: function handle(player, actions) {
        // Increase volume 5%
        var v = player.volume + 0.05;
        if (v > 1) {
          v = 1;
        }
        actions.changeVolume(v, {
          action: 'volume-up',
          source: 'shortcut'
        });
      }
    }, {
      keyCode: 40, // Down arrow
      handle: function handle(player, actions) {
        // Decrease volume 5%
        var v = player.volume - 0.05;
        if (v < 0) {
          v = 0;
        }
        var action = v > 0 ? 'volume-down' : 'volume-off';
        actions.changeVolume(v, {
          action: action,
          source: 'shortcut'
        });
      }
    }, {
      keyCode: 190, // Shift + >
      shift: true,
      handle: function handle(player, actions) {
        // Increase speed
        var playbackRate = player.playbackRate;
        if (playbackRate >= 1.5) {
          playbackRate = 2;
        } else if (playbackRate >= 1.25) {
          playbackRate = 1.5;
        } else if (playbackRate >= 1.0) {
          playbackRate = 1.25;
        } else if (playbackRate >= 0.5) {
          playbackRate = 1.0;
        } else if (playbackRate >= 0.25) {
          playbackRate = 0.5;
        } else if (playbackRate >= 0) {
          playbackRate = 0.25;
        }
        actions.changeRate(playbackRate, {
          action: 'fast-forward',
          source: 'shortcut'
        });
      }
    }, {
      keyCode: 188, // Shift + <
      shift: true,
      handle: function handle(player, actions) {
        // Decrease speed
        var playbackRate = player.playbackRate;
        if (playbackRate <= 0.5) {
          playbackRate = 0.25;
        } else if (playbackRate <= 1.0) {
          playbackRate = 0.5;
        } else if (playbackRate <= 1.25) {
          playbackRate = 1.0;
        } else if (playbackRate <= 1.5) {
          playbackRate = 1.25;
        } else if (playbackRate <= 2) {
          playbackRate = 1.5;
        }
        actions.changeRate(playbackRate, {
          action: 'fast-rewind',
          source: 'shortcut'
        });
      }
    }];

    _this.shortcuts = [].concat(toConsumableArray(_this.defaultShortcuts));

    _this.mergeShortcuts = _this.mergeShortcuts.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleDoubleClick = _this.handleDoubleClick.bind(_this);
    return _this;
  }

  createClass(Shortcut, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mergeShortcuts();
      document.addEventListener('keydown', this.handleKeyPress);
      document.addEventListener('click', this.handleClick);
      document.addEventListener('dblclick', this.handleDoubleClick);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.shortcuts !== this.props.shortcuts) {
        this.mergeShortcuts();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }

    // merge the shortcuts from props

  }, {
    key: 'mergeShortcuts',
    value: function mergeShortcuts() {
      var gradeShortcut = function gradeShortcut(s) {
        var score = 0;
        var ps = ['ctrl', 'shift', 'alt'];
        ps.forEach(function (key) {
          if (s[key]) {
            score++;
          }
        });
        return score;
      };

      var shortcuts = (this.props.shortcuts || []).filter(function (s) {
        return s.keyCode && s.handle && typeof s.handle === 'function';
      });

      this.shortcuts = [].concat(toConsumableArray(shortcuts), toConsumableArray(this.defaultShortcuts)).sort(function (a, b) {
        return gradeShortcut(b) - gradeShortcut(a);
      });
    }
  }, {
    key: 'togglePlay',
    value: function togglePlay(player, actions) {
      if (player.paused) {
        actions.play({
          action: 'play',
          source: 'shortcut'
        });
      } else {
        actions.pause({
          action: 'pause',
          source: 'shortcut'
        });
      }
    }
  }, {
    key: 'toggleFullscreen',
    value: function toggleFullscreen(player, actions) {
      actions.toggleFullscreen(player);
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {
      var _props = this.props,
          player = _props.player,
          actions = _props.actions;

      if (!player.isActive) {
        return;
      }
      if (document.activeElement && (hasClass(document.activeElement, 'video-react-control') || hasClass(document.activeElement, 'video-react-menu-button-active')
      // || hasClass(document.activeElement, 'video-react-slider')
      || hasClass(document.activeElement, 'video-react-big-play-button'))) {
        return;
      }

      var keyCode = e.keyCode || e.which;
      var ctrl = e.ctrlKey || e.metaKey;
      var shift = e.shiftKey;
      var alt = e.altKey;

      var shortcut = this.shortcuts.filter(function (s) {
        if (!s.keyCode || s.keyCode - keyCode !== 0) {
          return false;
        }
        if (s.ctrl !== undefined && s.ctrl !== ctrl || s.shift !== undefined && s.shift !== shift || s.alt !== undefined && s.alt !== alt) {
          return false;
        }
        return true;
      })[0];

      if (shortcut) {
        shortcut.handle(player, actions);
        e.preventDefault();
      }
    }

    // only if player is active and player is ready

  }, {
    key: 'canBeClicked',
    value: function canBeClicked(player, e) {
      if (!player.isActive || e.target.nodeName !== 'VIDEO' || player.readyState !== 4) {
        return false;
      }
      return true;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _props2 = this.props,
          player = _props2.player,
          actions = _props2.actions;

      if (!this.canBeClicked(player, e)) {
        return;
      }
      this.togglePlay(player, actions);
      // e.preventDefault();
    }
  }, {
    key: 'handleDoubleClick',
    value: function handleDoubleClick(e) {
      var _props3 = this.props,
          player = _props3.player,
          actions = _props3.actions;

      if (!this.canBeClicked(player, e)) {
        return;
      }
      this.toggleFullscreen(player, actions);
      // e.preventDefault();
    }

    // this component dose not render anything
    // it's just for the key down event

  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return Shortcut;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Shortcut.propTypes = propTypes$6;

var propTypes$10 = {
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  onMouseDown: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onMouseMove: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  stepForward: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  stepBack: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  sliderActive: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  sliderInactive: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onMouseUp: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onFocus: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onBlur: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onClick: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  getPercent: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  vertical: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  children: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.node,
  label: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  valuenow: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  valuetext: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};

var Slider = function (_Component) {
  inherits(Slider, _Component);

  function Slider(props, context) {
    classCallCheck(this, Slider);

    var _this = possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props, context));

    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.stepForward = _this.stepForward.bind(_this);
    _this.stepBack = _this.stepBack.bind(_this);
    _this.calculateDistance = _this.calculateDistance.bind(_this);
    _this.getProgress = _this.getProgress.bind(_this);
    _this.renderChildren = _this.renderChildren.bind(_this);

    _this.state = {
      active: false
    };
    return _this;
  }

  createClass(Slider, [{
    key: 'getProgress',
    value: function getProgress() {
      var getPercent = this.props.getPercent;

      if (!getPercent) {
        return 0;
      }
      var progress = getPercent();

      // Protect against no duration and other division issues
      if (typeof progress !== 'number' || progress < 0 || progress === Infinity) {
        progress = 0;
      }
      return progress;
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      var onMouseDown = this.props.onMouseDown;
      // event.preventDefault();
      // event.stopPropagation();

      document.addEventListener('mousemove', this.handleMouseMove, true);
      document.addEventListener('mouseup', this.handleMouseUp, true);
      document.addEventListener('touchmove', this.handleMouseMove, true);
      document.addEventListener('touchend', this.handleMouseUp, true);

      this.setState({
        active: true,
        distance: 0
      });

      if (this.props.sliderActive) {
        this.props.sliderActive(event);
      }

      this.handleMouseMove(event);

      if (onMouseDown) {
        onMouseDown(event);
      }
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      var onMouseMove = this.props.onMouseMove;


      if (onMouseMove) {
        onMouseMove(event);
      }
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(event) {
      var onMouseUp = this.props.onMouseUp;


      document.removeEventListener('mousemove', this.handleMouseMove, true);
      document.removeEventListener('mouseup', this.handleMouseUp, true);
      document.removeEventListener('touchmove', this.handleMouseMove, true);
      document.removeEventListener('touchend', this.handleMouseUp, true);

      this.setState({
        active: false
      });

      if (this.props.sliderInactive) {
        this.props.sliderInactive(event);
      }

      if (onMouseUp) {
        onMouseUp(event);
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(e) {
      document.addEventListener('keydown', this.handleKeyPress, true);
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(e) {
      document.removeEventListener('keydown', this.handleKeyPress, true);
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      event.preventDefault();
      // event.stopPropagation();
      if (this.props.onClick) {
        this.props.onClick(event);
      }
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(event) {
      if (event.which === 37 || event.which === 40) {
        // Left and Down Arrows
        event.preventDefault();
        event.stopPropagation();
        this.stepBack();
      } else if (event.which === 38 || event.which === 39) {
        // Up and Right Arrows
        event.preventDefault();
        event.stopPropagation();
        this.stepForward();
      }
    }
  }, {
    key: 'stepForward',
    value: function stepForward() {
      if (this.props.stepForward) {
        this.props.stepForward();
      }
    }
  }, {
    key: 'stepBack',
    value: function stepBack() {
      if (this.props.stepBack) {
        this.props.stepBack();
      }
    }
  }, {
    key: 'calculateDistance',
    value: function calculateDistance(event) {
      var node = Object(__WEBPACK_IMPORTED_MODULE_3_react_dom__["findDOMNode"])(this);
      var position = getPointerPosition(node, event);
      if (this.props.vertical) {
        return position.y;
      }
      return position.x;
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var progress = this.getProgress();
      var percentage = (progress * 100).toFixed(2) + '%';
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.Children.map(this.props.children, function (child) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(child, { progress: progress, percentage: percentage });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          vertical = _props.vertical,
          label = _props.label,
          valuenow = _props.valuenow,
          valuetext = _props.valuetext;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: classnames(this.props.className, {
            'video-react-slider-vertical': vertical,
            'video-react-slider-horizontal': !vertical,
            'video-react-sliding': this.state.active
          }, 'video-react-slider'),
          tabIndex: '0',
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleMouseDown,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onClick: this.handleClick,
          'aria-label': label || '',
          'aria-valuenow': valuenow || '',
          'aria-valuetext': valuetext || '',
          'aria-valuemin': 0,
          'aria-valuemax': 100
        },
        this.renderChildren()
      );
    }
  }]);
  return Slider;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Slider.propTypes = propTypes$10;

var propTypes$11 = {
  currentTime: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
  duration: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
  percentage: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};

// Shows play progress
function PlayProgressBar(_ref) {
  var currentTime = _ref.currentTime,
      duration = _ref.duration,
      percentage = _ref.percentage,
      className = _ref.className;

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      'data-current-time': formatTime(currentTime, duration),
      className: classnames('video-react-play-progress video-react-slider-bar', className),
      style: {
        width: percentage
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'span',
      { className: 'video-react-control-text' },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'span',
        null,
        'Progress'
      ),
      ': ',
      percentage
    )
  );
}

PlayProgressBar.propTypes = propTypes$11;

var propTypes$12 = {
  duration: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
  buffered: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};

// Shows load progress
function LoadProgressBar(_ref) {
  var buffered = _ref.buffered,
      duration = _ref.duration,
      className = _ref.className;

  if (!buffered || !buffered.length) {
    return null;
  }
  var bufferedEnd = buffered.end(buffered.length - 1);
  var style = {};

  if (bufferedEnd > duration) {
    bufferedEnd = duration;
  }

  // get the percent width of a time compared to the total end
  function percentify(time, end) {
    var percent = time / end || 0; // no NaN
    return (percent >= 1 ? 1 : percent) * 100 + '%';
  }

  // the width of the progress bar
  style.width = percentify(bufferedEnd, duration);

  var parts = [];

  // add child elements to represent the individual buffered time ranges
  for (var i = 0; i < buffered.length; i++) {
    var start = buffered.start(i);
    var end = buffered.end(i);
    // set the percent based on the width of the progress bar (bufferedEnd)
    var part = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
      style: {
        left: percentify(start, bufferedEnd),
        width: percentify(end - start, bufferedEnd)
      },
      key: 'part-' + i
    });
    parts.push(part);
  }

  if (parts.length === 0) {
    parts = null;
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      style: style,
      className: classnames('video-react-load-progress', className)
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'span',
      { className: 'video-react-control-text' },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'span',
        null,
        'Loaded'
      ),
      ': 0%'
    ),
    parts
  );
}

LoadProgressBar.propTypes = propTypes$12;

function MouseTimeDisplay(_ref) {
  var duration = _ref.duration,
      mouseTime = _ref.mouseTime,
      className = _ref.className;

  if (!mouseTime.time) {
    return null;
  }

  var time = formatTime(mouseTime.time, duration);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', {
    className: classnames('video-react-mouse-display', className),
    style: {
      left: mouseTime.position + 'px'
    },
    'data-current-time': time
  });
}

MouseTimeDisplay.propTypes = {
  duration: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
  mouseTime: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};

var propTypes$9 = {
  player: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  mouseTime: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  actions: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};

var SeekBar = function (_Component) {
  inherits(SeekBar, _Component);

  function SeekBar(props, context) {
    classCallCheck(this, SeekBar);

    var _this = possibleConstructorReturn(this, (SeekBar.__proto__ || Object.getPrototypeOf(SeekBar)).call(this, props, context));

    _this.getPercent = _this.getPercent.bind(_this);
    _this.getNewTime = _this.getNewTime.bind(_this);
    _this.stepForward = _this.stepForward.bind(_this);
    _this.stepBack = _this.stepBack.bind(_this);

    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    return _this;
  }

  createClass(SeekBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}

    /**
     * Get percentage of video played
     *
     * @return {Number} Percentage played
     * @method getPercent
     */

  }, {
    key: 'getPercent',
    value: function getPercent() {
      var _props$player = this.props.player,
          currentTime = _props$player.currentTime,
          seekingTime = _props$player.seekingTime,
          duration = _props$player.duration;

      var time = seekingTime || currentTime;
      var percent = time / duration;
      return percent >= 1 ? 1 : percent;
    }
  }, {
    key: 'getNewTime',
    value: function getNewTime(event) {
      var duration = this.props.player.duration;

      var distance = this.slider.calculateDistance(event);
      var newTime = distance * duration;

      // Don't let video end while scrubbing.
      return newTime === duration ? newTime - 0.1 : newTime;
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown() {}
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(event) {
      var actions = this.props.actions;

      var newTime = this.getNewTime(event);
      // Set new time (tell video to seek to new time)
      actions.seek(newTime);
      actions.handleEndSeeking(newTime);
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      var actions = this.props.actions;

      var newTime = this.getNewTime(event);
      actions.handleSeekingTime(newTime);
    }
  }, {
    key: 'stepForward',
    value: function stepForward() {
      var actions = this.props.actions;

      actions.forward(5);
    }
  }, {
    key: 'stepBack',
    value: function stepBack() {
      var actions = this.props.actions;

      actions.replay(5);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _props$player2 = _props.player,
          currentTime = _props$player2.currentTime,
          seekingTime = _props$player2.seekingTime,
          duration = _props$player2.duration,
          buffered = _props$player2.buffered,
          mouseTime = _props.mouseTime;

      var time = seekingTime || currentTime;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        Slider,
        {
          ref: function ref(input) {
            _this2.slider = input;
          },
          label: 'video progress bar',
          className: classnames('video-react-progress-holder', this.props.className),
          valuenow: (this.getPercent() * 100).toFixed(2),
          valuetext: formatTime(time, duration),
          onMouseDown: this.handleMouseDown,
          onMouseMove: this.handleMouseMove,
          onMouseUp: this.handleMouseUp,
          getPercent: this.getPercent,
          stepForward: this.stepForward,
          stepBack: this.stepBack
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(LoadProgressBar, {
          buffered: buffered,
          currentTime: time,
          duration: duration
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(MouseTimeDisplay, {
          duration: duration,
          mouseTime: mouseTime
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(PlayProgressBar, {
          currentTime: time,
          duration: duration
        })
      );
    }
  }]);
  return SeekBar;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

SeekBar.propTypes = propTypes$9;

var propTypes$8 = {
  player: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};

var ProgressControl = function (_Component) {
  inherits(ProgressControl, _Component);

  function ProgressControl(props, context) {
    classCallCheck(this, ProgressControl);

    var _this = possibleConstructorReturn(this, (ProgressControl.__proto__ || Object.getPrototypeOf(ProgressControl)).call(this, props, context));

    _this.state = {
      mouseTime: {
        time: null,
        position: 0
      }
    };

    _this.handleMouseMoveThrottle = _this.handleMouseMove.bind(_this);
    return _this;
  }

  createClass(ProgressControl, [{
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      if (!event.pageX) {
        return;
      }
      var duration = this.props.player.duration;

      var node = Object(__WEBPACK_IMPORTED_MODULE_3_react_dom__["findDOMNode"])(this.seekBar);
      var newTime = getPointerPosition(node, event).x * duration;
      var position = event.pageX - findElPosition(node).left;

      this.setState({
        mouseTime: {
          time: newTime,
          position: position
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var className = this.props.className;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          onMouseMove: this.handleMouseMoveThrottle,
          className: classnames('video-react-progress-control video-react-control', className)
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SeekBar, _extends({
          mouseTime: this.state.mouseTime,
          ref: function ref(c) {
            _this2.seekBar = c;
          }
        }, this.props))
      );
    }
  }]);
  return ProgressControl;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ProgressControl.propTypes = propTypes$8;

var propTypes$13 = {
  actions: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  player: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};

var PlayToggle = function (_Component) {
  inherits(PlayToggle, _Component);

  function PlayToggle(props, context) {
    classCallCheck(this, PlayToggle);

    var _this = possibleConstructorReturn(this, (PlayToggle.__proto__ || Object.getPrototypeOf(PlayToggle)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  createClass(PlayToggle, [{
    key: 'handleClick',
    value: function handleClick() {
      var _props = this.props,
          actions = _props.actions,
          player = _props.player;

      if (player.paused) {
        actions.play();
      } else {
        actions.pause();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          player = _props2.player,
          className = _props2.className;

      var controlText = player.paused ? 'Play' : 'Pause';

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'button',
        {
          ref: function ref(c) {
            _this2.button = c;
          },
          className: classnames(className, {
            'video-react-play-control': true,
            'video-react-control': true,
            'video-react-button': true,
            'video-react-paused': player.paused,
            'video-react-playing': !player.paused
          }),
          tabIndex: '0',
          onClick: this.handleClick
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'span',
          { className: 'video-react-control-text' },
          controlText
        )
      );
    }
  }]);
  return PlayToggle;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

PlayToggle.propTypes = propTypes$13;

var propTypes$14 = {
  actions: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  seconds: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf([5, 10, 30])
};

var defaultProps$4 = {
  seconds: 10
};

var ForwardReplayControl = (function (mode) {
  var ForwardReplayControl = function (_Component) {
    inherits(ForwardReplayControl, _Component);

    function ForwardReplayControl(props, context) {
      classCallCheck(this, ForwardReplayControl);

      var _this = possibleConstructorReturn(this, (ForwardReplayControl.__proto__ || Object.getPrototypeOf(ForwardReplayControl)).call(this, props, context));

      _this.handleClick = _this.handleClick.bind(_this);
      return _this;
    }

    createClass(ForwardReplayControl, [{
      key: 'handleClick',
      value: function handleClick() {
        var _props = this.props,
            actions = _props.actions,
            seconds = _props.seconds;
        // Depends mode to implement different actions

        if (mode === 'forward') {
          actions.forward(seconds);
        } else {
          actions.replay(seconds);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this,
            _classNames;

        var _props2 = this.props,
            seconds = _props2.seconds,
            className = _props2.className;

        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'button',
          {
            ref: function ref(c) {
              _this2.button = c;
            },
            className: classnames(className, (_classNames = {}, defineProperty(_classNames, 'video-react-icon-' + mode + '-' + seconds, true), defineProperty(_classNames, 'video-react-' + mode + '-control', true), _classNames), 'video-react-control video-react-button video-react-icon'),
            onClick: this.handleClick
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'span',
            { className: 'video-react-control-text' },
            mode + ' ' + seconds + ' seconds'
          )
        );
      }
    }]);
    return ForwardReplayControl;
  }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

  ForwardReplayControl.propTypes = propTypes$14;
  ForwardReplayControl.defaultProps = defaultProps$4;
  return ForwardReplayControl;
});

// Pass mode into parent function
var ForwardControl = ForwardReplayControl('forward');

// Pass mode into parent function
var ReplayControl = ForwardReplayControl('replay');

var propTypes$15 = {
  actions: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  player: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};

var FullscreenToggle = function (_Component) {
  inherits(FullscreenToggle, _Component);

  function FullscreenToggle(props, context) {
    classCallCheck(this, FullscreenToggle);

    var _this = possibleConstructorReturn(this, (FullscreenToggle.__proto__ || Object.getPrototypeOf(FullscreenToggle)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  createClass(FullscreenToggle, [{
    key: 'handleClick',
    value: function handleClick() {
      var _props = this.props,
          player = _props.player,
          actions = _props.actions;

      actions.toggleFullscreen(player);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          player = _props2.player,
          className = _props2.className;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'button',
        {
          className: classnames(className, {
            'video-react-icon-fullscreen-exit': player.isFullscreen,
            'video-react-icon-fullscreen': !player.isFullscreen
          }, 'video-react-fullscreen-control video-react-control video-react-button video-react-icon'),
          ref: function ref(c) {
            _this2.button = c;
          },
          type: 'button',
          tabIndex: '0',
          onClick: this.handleClick
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'span',
          { className: 'video-react-control-text' },
          'Non-Fullscreen'
        )
      );
    }
  }]);
  return FullscreenToggle;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

FullscreenToggle.propTypes = propTypes$15;

var propTypes$16 = {
  player: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};

function RemainingTimeDisplay(_ref) {
  var _ref$player = _ref.player,
      currentTime = _ref$player.currentTime,
      duration = _ref$player.duration,
      className = _ref.className;

  var remainingTime = duration - currentTime;
  var formattedTime = formatTime(remainingTime);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: classnames('video-react-remaining-time video-react-time-control video-react-control', className)
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'video-react-remaining-time-display',
        'aria-live': 'off'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'span',
        { className: 'video-react-control-text' },
        'Remaining Time '
      ),
      '-',
      formattedTime
    )
  );
}

RemainingTimeDisplay.propTypes = propTypes$16;

var propTypes$17 = {
  player: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};

function CurrentTimeDisplay(_ref) {
  var _ref$player = _ref.player,
      currentTime = _ref$player.currentTime,
      duration = _ref$player.duration,
      className = _ref.className;

  var formattedTime = formatTime(currentTime, duration);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: classnames('video-react-current-time video-react-time-control video-react-control', className)
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'video-react-current-time-display',
        'aria-live': 'off'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'span',
        { className: 'video-react-control-text' },
        'Current Time '
      ),
      formattedTime
    )
  );
}

CurrentTimeDisplay.propTypes = propTypes$17;

var propTypes$18 = {
  player: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};

function DurationDisplay(_ref) {
  var duration = _ref.player.duration,
      className = _ref.className;

  var formattedTime = formatTime(duration);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: classnames(className, 'video-react-duration video-react-time-control video-react-control')
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'video-react-duration-display',
        'aria-live': 'off'
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'span',
        { className: 'video-react-control-text' },
        'Duration Time '
      ),
      formattedTime
    )
  );
}

DurationDisplay.propTypes = propTypes$18;

var propTypes$19 = {
  separator: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};

function TimeDivider(_ref) {
  var separator = _ref.separator,
      className = _ref.className;

  var separatorText = separator || '/';
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: classnames('video-react-time-control video-react-time-divider', className),
      dir: 'ltr'
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'span',
        null,
        separatorText
      )
    )
  );
}

TimeDivider.propTypes = propTypes$19;

var propTypes$22 = {
  tagName: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  onFocus: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onBlur: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};

var defaultProps$7 = {
  tagName: 'div'
};

var ClickableComponent = function (_Component) {
  inherits(ClickableComponent, _Component);

  function ClickableComponent(props, context) {
    classCallCheck(this, ClickableComponent);

    var _this = possibleConstructorReturn(this, (ClickableComponent.__proto__ || Object.getPrototypeOf(ClickableComponent)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleKeypress = _this.handleKeypress.bind(_this);
    return _this;
  }

  createClass(ClickableComponent, [{
    key: 'handleKeypress',
    value: function handleKeypress(event) {
      // Support Space (32) or Enter (13) key operation to fire a click event
      if (event.which === 32 || event.which === 13) {
        event.preventDefault();
        this.handleClick(event);
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      var onClick = this.props.onClick;

      onClick(event);
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(e) {
      document.addEventListener('keydown', this.handleKeypress);
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(e) {
      document.removeEventListener('keydown', this.handleKeypress);
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var Tag = this.props.tagName;
      var props = _extends({}, this.props);
      delete props.tagName;
      delete props.className;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Tag, _extends({
        className: classnames(this.props.className),
        role: 'button',
        tabIndex: '0',
        onClick: this.handleClick,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      }, props));
    }
  }]);
  return ClickableComponent;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ClickableComponent.propTypes = propTypes$22;
ClickableComponent.defaultProps = defaultProps$7;

var propTypes$23 = {
  player: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  children: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.any
};

var Popup = function (_Component) {
  inherits(Popup, _Component);

  function Popup(props, context) {
    classCallCheck(this, Popup);

    var _this = possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  createClass(Popup, [{
    key: 'handleClick',
    value: function handleClick(event) {
      event.preventDefault();
      // event.stopPropagation();
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'video-react-menu',
          onClick: this.handleClick
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'video-react-menu-content' },
          children
        )
      );
    }
  }]);
  return Popup;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Popup.propTypes = propTypes$23;

var propTypes$21 = {
  inline: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  onClick: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  onFocus: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onBlur: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};

var defaultProps$6 = {
  inline: true
};

function PopupButton(props) {
  var inline = props.inline,
      className = props.className;

  var ps = _extends({}, props);
  delete ps.children;
  delete ps.inline;
  delete ps.className;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    ClickableComponent,
    _extends({
      className: classnames(className, {
        'video-react-menu-button-inline': !!inline,
        'video-react-menu-button-popup': !inline
      }, 'video-react-control video-react-button video-react-menu-button')
    }, ps),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Popup, props)
  );
}

PopupButton.propTypes = propTypes$21;
PopupButton.defaultProps = defaultProps$6;

var propTypes$25 = {
  percentage: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  vertical: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};

var defaultProps$8 = {
  percentage: '100%',
  vertical: false
};

function VolumeLevel(_ref) {
  var percentage = _ref.percentage,
      vertical = _ref.vertical,
      className = _ref.className;

  var style = {};
  if (vertical) {
    style.height = percentage;
  } else {
    style.width = percentage;
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: classnames(className, 'video-react-volume-level'),
      style: style
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span', { className: 'video-react-control-text' })
  );
}

VolumeLevel.propTypes = propTypes$25;
VolumeLevel.defaultProps = defaultProps$8;

var propTypes$24 = {
  actions: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  player: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  onFocus: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onBlur: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func
};

var VolumeBar = function (_Component) {
  inherits(VolumeBar, _Component);

  function VolumeBar(props, context) {
    classCallCheck(this, VolumeBar);

    var _this = possibleConstructorReturn(this, (VolumeBar.__proto__ || Object.getPrototypeOf(VolumeBar)).call(this, props, context));

    _this.state = {
      percentage: '0%'
    };

    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handlePercentageChange = _this.handlePercentageChange.bind(_this);
    _this.checkMuted = _this.checkMuted.bind(_this);
    _this.getPercent = _this.getPercent.bind(_this);
    _this.stepForward = _this.stepForward.bind(_this);
    _this.stepBack = _this.stepBack.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  createClass(VolumeBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'getPercent',
    value: function getPercent() {
      var player = this.props.player;

      if (player.muted) {
        return 0;
      }
      return player.volume;
    }
  }, {
    key: 'checkMuted',
    value: function checkMuted() {
      var _props = this.props,
          player = _props.player,
          actions = _props.actions;

      if (player.muted) {
        actions.mute(false);
      }
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      var actions = this.props.actions;

      this.checkMuted();
      var distance = this.slider.calculateDistance(event);
      actions.changeVolume(distance);
    }
  }, {
    key: 'stepForward',
    value: function stepForward() {
      var _props2 = this.props,
          player = _props2.player,
          actions = _props2.actions;

      this.checkMuted();
      actions.changeVolume(player.volume + 0.1);
    }
  }, {
    key: 'stepBack',
    value: function stepBack() {
      var _props3 = this.props,
          player = _props3.player,
          actions = _props3.actions;

      this.checkMuted();
      actions.changeVolume(player.volume - 0.1);
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(e) {
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: 'handlePercentageChange',
    value: function handlePercentageChange(percentage) {
      if (percentage !== this.state.percentage) {
        this.setState({
          percentage: percentage
        });
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      event.stopPropagation();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props4 = this.props,
          player = _props4.player,
          className = _props4.className;


      var volume = (player.volume * 100).toFixed(2);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        Slider,
        _extends({
          ref: function ref(c) {
            _this2.slider = c;
          },
          label: 'volume level',
          valuenow: volume,
          valuetext: volume + '%',
          onMouseMove: this.handleMouseMove,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onClick: this.handleClick,
          sliderActive: this.handleFocus,
          sliderInactive: this.handleBlur,
          getPercent: this.getPercent,
          onPercentageChange: this.handlePercentageChange,
          stepForward: this.stepForward,
          stepBack: this.stepBack,
          className: classnames(className, 'video-react-volume-bar video-react-slider-bar')
        }, this.props),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(VolumeLevel, this.props)
      );
    }
  }]);
  return VolumeBar;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

VolumeBar.propTypes = propTypes$24;

var propTypes$20 = {
  player: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  actions: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  vertical: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  alwaysShowVolume: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
};

var defaultProps$5 = {
  vertical: false
};

var VolumeMenuButton = function (_Component) {
  inherits(VolumeMenuButton, _Component);

  function VolumeMenuButton(props, context) {
    classCallCheck(this, VolumeMenuButton);

    var _this = possibleConstructorReturn(this, (VolumeMenuButton.__proto__ || Object.getPrototypeOf(VolumeMenuButton)).call(this, props, context));

    _this.state = {
      active: false
    };

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    return _this;
  }

  createClass(VolumeMenuButton, [{
    key: 'handleClick',
    value: function handleClick() {
      var _props = this.props,
          player = _props.player,
          actions = _props.actions;

      actions.mute(!player.muted);
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      this.setState({
        active: true
      });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      this.setState({
        active: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          vertical = _props2.vertical,
          player = _props2.player,
          className = _props2.className;

      var inline = !vertical;
      var level = this.volumeLevel;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        PopupButton,
        {
          className: classnames(className, {
            'video-react-volume-menu-button-vertical': vertical,
            'video-react-volume-menu-button-horizontal': !vertical,
            'video-react-vol-muted': player.muted,
            'video-react-vol-0': level === 0 && !player.muted,
            'video-react-vol-1': level === 1,
            'video-react-vol-2': level === 2,
            'video-react-vol-3': level === 3,
            'video-react-slider-active': this.props.alwaysShowVolume || this.state.active,
            'video-react-lock-showing': this.props.alwaysShowVolume || this.state.active
          }, 'video-react-volume-menu-button'),
          onClick: this.handleClick,
          inline: inline
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(VolumeBar, _extends({
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        }, this.props))
      );
    }
  }, {
    key: 'volumeLevel',
    get: function get$$1() {
      var _props$player = this.props.player,
          volume = _props$player.volume,
          muted = _props$player.muted;

      var level = 3;
      if (volume === 0 || muted) {
        level = 0;
      } else if (volume < 0.33) {
        level = 1;
      } else if (volume < 0.67) {
        level = 2;
      }
      return level;
    }
  }]);
  return VolumeMenuButton;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

VolumeMenuButton.propTypes = propTypes$20;
VolumeMenuButton.defaultProps = defaultProps$5;

var propTypes$28 = {
  children: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.any
};

var Menu = function (_Component) {
  inherits(Menu, _Component);

  function Menu(props, context) {
    classCallCheck(this, Menu);

    var _this = possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  createClass(Menu, [{
    key: 'handleClick',
    value: function handleClick(event) {
      event.preventDefault();
      // event.stopPropagation();
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'video-react-menu video-react-lock-showing',
          role: 'presentation',
          onClick: this.handleClick
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'ul',
          { className: 'video-react-menu-content' },
          this.props.children
        )
      );
    }
  }]);
  return Menu;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Menu.propTypes = propTypes$28;

var propTypes$29 = {
  item: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  index: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
  activateIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
  onSelectItem: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func
};

var MenuItem = function (_Component) {
  inherits(MenuItem, _Component);

  function MenuItem(props, context) {
    classCallCheck(this, MenuItem);

    var _this = possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  createClass(MenuItem, [{
    key: 'handleClick',
    value: function handleClick() {
      var _props = this.props,
          index = _props.index,
          onSelectItem = _props.onSelectItem;

      onSelectItem(index);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          item = _props2.item,
          index = _props2.index,
          activateIndex = _props2.activateIndex;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'li',
        {
          className: classnames({
            'video-react-menu-item': true,
            'video-react-selected': index === activateIndex
          }),
          onClick: this.handleClick
        },
        item.label,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('span', { className: 'video-react-control-text' })
      );
    }
  }]);
  return MenuItem;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

MenuItem.propTypes = propTypes$29;

var propTypes$27 = {
  inline: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  items: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.array,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  onSelectItem: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.any,
  selectedIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number
};

var MenuButton = function (_Component) {
  inherits(MenuButton, _Component);

  function MenuButton(props, context) {
    classCallCheck(this, MenuButton);

    var _this = possibleConstructorReturn(this, (MenuButton.__proto__ || Object.getPrototypeOf(MenuButton)).call(this, props, context));

    _this.state = {
      active: false,
      activateIndex: props.selectedIndex || 0
    };

    _this.commitSelection = _this.commitSelection.bind(_this);
    _this.activateMenuItem = _this.activateMenuItem.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.renderMenu = _this.renderMenu.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleUpArrow = _this.handleUpArrow.bind(_this);
    _this.handleDownArrow = _this.handleDownArrow.bind(_this);
    _this.handleEscape = _this.handleEscape.bind(_this);
    _this.handleReturn = _this.handleReturn.bind(_this);
    _this.handleTab = _this.handleTab.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleSelectItem = _this.handleSelectItem.bind(_this);
    _this.handleIndexChange = _this.handleIndexChange.bind(_this);
    return _this;
  }

  // componentDidUpdate(prevProps) {
  // }

  createClass(MenuButton, [{
    key: 'commitSelection',
    value: function commitSelection(index) {
      this.setState({
        activateIndex: index,
        active: false
      });
      this.handleIndexChange(index);
    }
  }, {
    key: 'activateMenuItem',
    value: function activateMenuItem(index) {
      this.setState({
        activateIndex: index
      });
      this.handleIndexChange(index);
    }
  }, {
    key: 'handleIndexChange',
    value: function handleIndexChange(index) {
      var onSelectItem = this.props.onSelectItem;

      onSelectItem(index);
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.setState({
        active: !this.state.active
      });
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      this.setState({
        active: false
      });
      document.removeEventListener('keydown', this.handleKeyPress);
    }
  }, {
    key: 'handleUpArrow',
    value: function handleUpArrow(e) {
      var items = this.props.items;

      if (this.state.active) {
        e.preventDefault();
        var newIndex = this.state.activateIndex - 1;
        if (newIndex < 0) {
          newIndex = items.length ? items.length - 1 : 0;
        }
        this.activateMenuItem(newIndex);
      }
    }
  }, {
    key: 'handleDownArrow',
    value: function handleDownArrow(e) {
      var items = this.props.items;

      if (this.state.active) {
        e.preventDefault();
        var newIndex = this.state.activateIndex + 1;
        if (newIndex >= items.length) {
          newIndex = 0;
        }
        this.activateMenuItem(newIndex);
      }
    }
  }, {
    key: 'handleTab',
    value: function handleTab(e) {
      if (this.state.active) {
        e.preventDefault();
        this.commitSelection(this.state.activateIndex);
      }
    }
  }, {
    key: 'handleReturn',
    value: function handleReturn(e) {
      e.preventDefault();
      if (this.state.active) {
        this.commitSelection(this.state.activateIndex);
      } else {
        this.setState({
          active: true
        });
      }
    }
  }, {
    key: 'handleEscape',
    value: function handleEscape() {
      this.setState({
        active: false,
        activateIndex: 0
      });
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(event) {
      // Escape (27) key
      if (event.which === 27) {
        this.handleEscape(event);
      } else if (event.which === 9) {
        // Tab (9) key
        this.handleTab(event);
      } else if (event.which === 13) {
        // Enter (13) key
        this.handleReturn(event);
      } else if (event.which === 38) {
        // Up (38) key
        this.handleUpArrow(event);
      } else if (event.which === 40) {
        // Down (40) key press
        this.handleDownArrow(event);
      }
    }
  }, {
    key: 'handleSelectItem',
    value: function handleSelectItem(i) {
      this.commitSelection(i);
    }
  }, {
    key: 'renderMenu',
    value: function renderMenu() {
      var _this2 = this;

      if (!this.state.active) {
        return null;
      }

      var items = this.props.items;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        Menu,
        null,
        items.map(function (item, i) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(MenuItem, {
            item: item,
            index: i,
            onSelectItem: _this2.handleSelectItem,
            activateIndex: _this2.state.activateIndex,
            key: 'item-' + i++
          });
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          inline = _props.inline,
          className = _props.className;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        ClickableComponent,
        {
          className: classnames(className, {
            'video-react-menu-button-inline': !!inline,
            'video-react-menu-button-popup': !inline,
            'video-react-menu-button-active': this.state.active
          }, 'video-react-control video-react-button video-react-menu-button'),
          role: 'presentation',
          tabIndex: '0',
          ref: function ref(c) {
            _this3.menuButton = c;
          },
          onClick: this.handleClick,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        },
        this.props.children,
        this.renderMenu()
      );
    }
  }]);
  return MenuButton;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

MenuButton.propTypes = propTypes$27;

var propTypes$26 = {
  player: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  actions: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  rates: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.array,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};

var defaultProps$9 = {
  rates: [2, 1.5, 1.25, 1, 0.5, 0.25]
};

var PlaybackRateMenuButton = function (_Component) {
  inherits(PlaybackRateMenuButton, _Component);

  function PlaybackRateMenuButton(props, context) {
    classCallCheck(this, PlaybackRateMenuButton);

    var _this = possibleConstructorReturn(this, (PlaybackRateMenuButton.__proto__ || Object.getPrototypeOf(PlaybackRateMenuButton)).call(this, props, context));

    _this.handleSelectItem = _this.handleSelectItem.bind(_this);
    return _this;
  }

  createClass(PlaybackRateMenuButton, [{
    key: 'handleSelectItem',
    value: function handleSelectItem(index) {
      var _props = this.props,
          rates = _props.rates,
          actions = _props.actions;

      if (index >= 0 && index < rates.length) {
        actions.changeRate(rates[index]);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          rates = _props2.rates,
          player = _props2.player;

      var items = rates.map(function (rate) {
        return {
          label: rate + 'x',
          value: rate
        };
      });
      var selectedIndex = rates.indexOf(player.playbackRate) || 0;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        MenuButton,
        {
          className: classnames('video-react-playback-rate', this.props.className),
          onSelectItem: this.handleSelectItem,
          items: items,
          selectedIndex: selectedIndex
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'span',
          { className: 'video-react-control-text' },
          'Playback Rate'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: 'video-react-playback-rate-value' },
          player.playbackRate.toFixed(2),
          'x'
        )
      );
    }
  }]);
  return PlaybackRateMenuButton;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

PlaybackRateMenuButton.propTypes = propTypes$26;
PlaybackRateMenuButton.defaultProps = defaultProps$9;

var propTypes$7 = {
  children: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.any,
  autoHide: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  disableDefaultControls: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};

var defaultProps$3 = {
  autoHide: true
};

var ControlBar = function (_Component) {
  inherits(ControlBar, _Component);

  function ControlBar(props) {
    classCallCheck(this, ControlBar);

    var _this = possibleConstructorReturn(this, (ControlBar.__proto__ || Object.getPrototypeOf(ControlBar)).call(this, props));

    _this.getDefaultChildren = _this.getDefaultChildren.bind(_this);
    _this.getFullChildren = _this.getFullChildren.bind(_this);
    return _this;
  }

  createClass(ControlBar, [{
    key: 'getDefaultChildren',
    value: function getDefaultChildren() {
      return [__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(PlayToggle, _extends({}, this.props, {
        key: 'play-toggle',
        order: 1
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(VolumeMenuButton, _extends({}, this.props, {
        key: 'volume-menu-button',
        order: 4
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CurrentTimeDisplay, _extends({}, this.props, {
        key: 'current-time-display',
        order: 5.1
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TimeDivider, _extends({}, this.props, {
        key: 'time-divider',
        order: 5.2
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(DurationDisplay, _extends({}, this.props, {
        key: 'duration-display',
        order: 5.3
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ProgressControl, _extends({}, this.props, {
        key: 'progress-control',
        order: 6
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(FullscreenToggle, _extends({}, this.props, {
        key: 'fullscreen-toggle',
        order: 8
      }))];
    }
  }, {
    key: 'getFullChildren',
    value: function getFullChildren() {
      return [__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(PlayToggle, _extends({}, this.props, {
        key: 'play-toggle',
        order: 1
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ReplayControl, _extends({}, this.props, {
        key: 'replay-control',
        order: 2
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ForwardControl, _extends({}, this.props, {
        key: 'forward-control',
        order: 3
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(VolumeMenuButton, _extends({}, this.props, {
        key: 'volume-menu-button',
        order: 4
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CurrentTimeDisplay, _extends({}, this.props, {
        key: 'current-time-display',
        order: 5
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TimeDivider, _extends({}, this.props, {
        key: 'time-divider',
        order: 6
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(DurationDisplay, _extends({}, this.props, {
        key: 'duration-display',
        order: 7
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ProgressControl, _extends({}, this.props, {
        key: 'progress-control',
        order: 8
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(RemainingTimeDisplay, _extends({}, this.props, {
        key: 'remaining-time-display',
        order: 9
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(PlaybackRateMenuButton, _extends({}, this.props, {
        rates: [1, 1.25, 1.5, 2],
        key: 'playback-rate',
        order: 10
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(FullscreenToggle, _extends({}, this.props, {
        key: 'fullscreen-toggle',
        order: 11
      }))];
    }
  }, {
    key: 'getChildren',
    value: function getChildren() {
      var children = __WEBPACK_IMPORTED_MODULE_1_react___default.a.Children.toArray(this.props.children);
      var defaultChildren = this.props.disableDefaultControls ? [] : this.getDefaultChildren();
      return mergeAndSortChildren(defaultChildren, children, this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          autoHide = _props.autoHide,
          className = _props.className;

      var children = this.getChildren();
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: classnames('video-react-control-bar', {
            'video-react-control-bar-auto-hide': autoHide
          }, className)
        },
        children
      );
    }
  }]);
  return ControlBar;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ControlBar.propTypes = propTypes$7;
ControlBar.defaultProps = defaultProps$3;

var USER_AGENT = typeof window !== 'undefined' && window.navigator ? window.navigator.userAgent : '';
// const webkitVersionMap = (/AppleWebKit\/([\d.]+)/i).exec(USER_AGENT);
// const appleWebkitVersion = webkitVersionMap ? parseFloat(webkitVersionMap.pop()) : null;

/*
 * Device is an iPhone
 *
 * @type {Boolean}
 * @constant
 * @private
 */
var IS_IPAD = /iPad/i.test(USER_AGENT);

// The Facebook app's UIWebView identifies as both an iPhone and iPad, so
// to identify iPhones, we need to exclude iPads.
// http://artsy.github.io/blog/2012/10/18/the-perils-of-ios-user-agent-sniffing/
var IS_IPHONE = /iPhone/i.test(USER_AGENT) && !IS_IPAD;
var IS_IPOD = /iPod/i.test(USER_AGENT);
var IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;

var propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.any,

  width: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
  height: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
  fluid: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  muted: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  playsInline: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  aspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,

  startTime: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
  loop: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  autoPlay: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  src: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  poster: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  preload: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(['auto', 'metadata', 'none']),

  onLoadStart: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onWaiting: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onCanPlay: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onCanPlayThrough: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onPlaying: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onEnded: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onSeeking: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onSeeked: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onPlay: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onPause: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onProgress: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onDurationChange: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onError: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onSuspend: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onAbort: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onEmptied: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onStalled: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onLoadedMetadata: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onLoadedData: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onTimeUpdate: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onRateChange: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func,
  onVolumeChange: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func
};

var defaultProps = {
  fluid: true,
  muted: false,
  playsInline: false,
  aspectRatio: 'auto'
};

var Player = function (_Component) {
  inherits(Player, _Component);

  function Player(props) {
    classCallCheck(this, Player);

    var _this = possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));

    _this.controlsHideTimer = null;

    _this.video = null; // the Video component
    _this.manager = new Manager();
    _this.actions = _this.manager.getActions();
    _this.manager.subscribeToPlayerStateChange(_this.handleStateChange.bind(_this));

    _this.getStyle = _this.getStyle.bind(_this);
    _this.handleResize = _this.handleResize.bind(_this);
    _this.getChildren = _this.getChildren.bind(_this);
    _this.handleMouseMove = throttle(_this.handleMouseMove.bind(_this), 250);
    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.startControlsTimer = _this.startControlsTimer.bind(_this);
    _this.handleFullScreenChange = _this.handleFullScreenChange.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    return _this;
  }

  createClass(Player, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);

      fullscreen.addEventListener(this.handleFullScreenChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // Remove event listener
      window.addEventListener('resize', this.handleResize);
      fullscreen.removeEventListener(this.handleFullScreenChange);
      if (this.controlsHideTimer) {
        window.clearTimeout(this.controlsHideTimer);
      }
    }
  }, {
    key: 'getDefaultChildren',
    value: function getDefaultChildren(props, fullProps) {
      var _this2 = this;

      return [__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Video, _extends({
        ref: function ref(c) {
          _this2.video = c;
          _this2.manager.video = _this2.video;
        },
        key: 'video',
        order: 0.0
      }, fullProps)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(PosterImage, _extends({
        key: 'poster-image',
        order: 1.0
      }, props)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(LoadingSpinner, _extends({
        key: 'loading-spinner',
        order: 2.0
      }, props)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Bezel, _extends({
        key: 'bezel',
        order: 3.0
      }, props)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(BigPlayButton, _extends({
        key: 'big-play-button',
        order: 4.0
      }, props)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ControlBar, _extends({
        key: 'control-bar',
        order: 5.0
      }, props)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Shortcut, _extends({
        key: 'shortcut',
        order: 99.0
      }, props))];
    }
  }, {
    key: 'getChildren',
    value: function getChildren(props) {
      var propsWithoutChildren = _extends({}, props, {
        children: null
      });
      var children = __WEBPACK_IMPORTED_MODULE_1_react___default.a.Children.toArray(this.props.children).filter(function (e) {
        return !isVideoChild(e);
      });
      var defaultChildren = this.getDefaultChildren(propsWithoutChildren, props);
      return mergeAndSortChildren(defaultChildren, children, propsWithoutChildren);
    }
  }, {
    key: 'getStyle',
    value: function getStyle() {
      var fluid = this.props.fluid;

      var _manager$getState = this.manager.getState(),
          player = _manager$getState.player;

      var style = {};
      var width = void 0;
      var height = void 0;
      var aspectRatio = void 0;

      // The aspect ratio is either used directly or to calculate width and height.
      if (this.props.aspectRatio !== undefined && this.props.aspectRatio !== 'auto') {
        // Use any aspectRatio that's been specifically set
        aspectRatio = this.props.aspectRatio;
      } else if (player.videoWidth) {
        // Otherwise try to get the aspect ratio from the video metadata
        aspectRatio = player.videoWidth + ':' + player.videoHeight;
      } else {
        // Or use a default. The video element's is 2:1, but 16:9 is more common.
        aspectRatio = '16:9';
      }

      // Get the ratio as a decimal we can use to calculate dimensions
      var ratioParts = aspectRatio.split(':');
      var ratioMultiplier = ratioParts[1] / ratioParts[0];

      if (this.props.width !== undefined) {
        // Use any width that's been specifically set
        width = this.props.width;
      } else if (this.props.height !== undefined) {
        // Or calulate the width from the aspect ratio if a height has been set
        width = this.props.height / ratioMultiplier;
      } else {
        // Or use the video's metadata, or use the video el's default of 300
        width = player.videoWidth || 400;
      }

      if (this.props.height !== undefined) {
        // Use any height that's been specifically set
        height = this.props.height;
      } else {
        // Otherwise calculate the height from the ratio and the width
        height = width * ratioMultiplier;
      }

      if (fluid) {
        style.paddingTop = ratioMultiplier * 100 + '%';
      } else {
        style.width = width + 'px';
        style.height = height + 'px';
      }

      return style;
    }

    // get redux state
    // { player, operation }

  }, {
    key: 'getState',
    value: function getState() {
      return this.manager.getState();
    }

    // get playback rate

  }, {
    key: 'play',


    // play the video
    value: function play() {
      this.video.play();
    }

    // pause the video

  }, {
    key: 'pause',
    value: function pause() {
      this.video.pause();
    }

    // Change the video source and re-load the video:

  }, {
    key: 'load',
    value: function load() {
      this.video.load();
    }

    // Add a new text track to the video

  }, {
    key: 'addTextTrack',
    value: function addTextTrack() {
      var _video;

      (_video = this.video).addTextTrack.apply(_video, arguments);
    }

    // Check if your browser can play different types of video:

  }, {
    key: 'canPlayType',
    value: function canPlayType() {
      var _video2;

      (_video2 = this.video).canPlayType.apply(_video2, arguments);
    }

    // seek video by time

  }, {
    key: 'seek',
    value: function seek(time) {
      this.video.seek(time);
    }

    // jump forward x seconds

  }, {
    key: 'forward',
    value: function forward(seconds) {
      this.video.forward(seconds);
    }

    // jump back x seconds

  }, {
    key: 'replay',
    value: function replay(seconds) {
      this.video.replay(seconds);
    }

    // enter or exist full screen

  }, {
    key: 'toggleFullscreen',
    value: function toggleFullscreen() {
      this.video.toggleFullscreen();
    }

    // subscribe to player state change

  }, {
    key: 'subscribeToStateChange',
    value: function subscribeToStateChange(listener) {
      this.manager.subscribeToPlayerStateChange(listener);
    }

    // player resize

  }, {
    key: 'handleResize',
    value: function handleResize() {}
  }, {
    key: 'handleFullScreenChange',
    value: function handleFullScreenChange() {
      this.actions.handleFullscreenChange(fullscreen.isFullscreen);
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown() {
      this.startControlsTimer();
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove() {
      this.startControlsTimer();
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown() {
      this.startControlsTimer();
    }
  }, {
    key: 'startControlsTimer',
    value: function startControlsTimer() {
      var _this3 = this;

      this.actions.userActivate(true);
      clearTimeout(this.controlsHideTimer);
      this.controlsHideTimer = setTimeout(function () {
        _this3.actions.userActivate(false);
      }, 3000);
    }
  }, {
    key: 'handleStateChange',
    value: function handleStateChange(state, prevState) {
      if (state.isFullscreen !== prevState.isFullscreen) {
        this.handleResize();
      }
      this.forceUpdate(); // re-render
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      this.actions.activate(true);
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      this.actions.activate(false);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var fluid = this.props.fluid;

      var _manager$getState2 = this.manager.getState(),
          player = _manager$getState2.player;

      var paused = player.paused,
          hasStarted = player.hasStarted,
          waiting = player.waiting,
          seeking = player.seeking,
          isFullscreen = player.isFullscreen,
          userActivity = player.userActivity;

      var props = _extends({}, this.props, {
        player: player,
        actions: this.actions,
        manager: this.manager,
        store: this.manager.store,
        video: this.video ? this.video.video : null
      });
      var children = this.getChildren(props);

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: classnames({
            'video-react-controls-enabled': true,
            'video-react-has-started': hasStarted,
            'video-react-paused': paused,
            'video-react-playing': !paused,
            'video-react-waiting': waiting,
            'video-react-seeking': seeking,
            'video-react-fluid': fluid,
            'video-react-fullscreen': isFullscreen,
            'video-react-user-inactive': !userActivity,
            'video-react-user-active': userActivity,
            'video-react-workinghover': !IS_IOS
          }, 'video-react', this.props.className),
          style: this.getStyle(),
          ref: function ref(c) {
            _this4.manager.rootElement = c;
          },
          onTouchStart: this.handleMouseDown,
          onMouseDown: this.handleMouseDown,
          onMouseMove: this.handleMouseMove,
          onKeyDown: this.handleKeyDown,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          tabIndex: '-1'
        },
        children
      );
    }
  }, {
    key: 'playbackRate',
    get: function get$$1() {
      return this.video.playbackRate;
    }

    // set playback rate
    // speed of video
    ,
    set: function set$$1(rate) {
      this.video.playbackRate = rate;
    }
  }, {
    key: 'muted',
    get: function get$$1() {
      return this.video.muted;
    },
    set: function set$$1(val) {
      this.video.muted = val;
    }
  }, {
    key: 'volume',
    get: function get$$1() {
      return this.video.volume;
    },
    set: function set$$1(val) {
      this.video.volume = val;
    }

    // video width

  }, {
    key: 'videoWidth',
    get: function get$$1() {
      return this.video.videoWidth;
    }

    // video height

  }, {
    key: 'videoHeight',
    get: function get$$1() {
      return this.video.videoHeight;
    }
  }]);
  return Player;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Player.propTypes = propTypes;
Player.defaultProps = defaultProps;

var PlaybackRate = function (_Component) {
  inherits(PlaybackRate, _Component);

  function PlaybackRate(props, context) {
    classCallCheck(this, PlaybackRate);

    var _this = possibleConstructorReturn(this, (PlaybackRate.__proto__ || Object.getPrototypeOf(PlaybackRate)).call(this, props, context));

    deprecatedWarning('PlaybackRate', 'PlaybackRateMenuButton');
    return _this;
  }

  createClass(PlaybackRate, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(PlaybackRateMenuButton, this.props);
    }
  }]);
  return PlaybackRate;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

// import '../styles/scss/video-react.scss';




/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(392);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["b"]; });
/* unused harmony reexport combineReducers */
/* unused harmony reexport bindActionCreators */
/* unused harmony reexport applyMiddleware */
/* unused harmony reexport compose */







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  Object(__WEBPACK_IMPORTED_MODULE_5__utils_warning__["a" /* default */])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(14)))

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(106)))

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(404);


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(406);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(106), __webpack_require__(405)(module)))

/***/ }),

/***/ 405:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(392);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (process.env.NODE_ENV !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(14)))

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(393);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(411);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(108)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./video-react.css", function() {
			var newContent = require("!!../../css-loader/index.js!./video-react.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(107)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.video-react .video-react-big-play-button:before, .video-react .video-react-control:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.video-react .video-react-big-play-button:before, .video-react .video-react-control:before {\n  text-align: center; }\n\n@font-face {\n  font-family: \"video-react\";\n  src: url(data:application/vnd.ms-fontobject;base64,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?#iefix) format(\"eot\"); }\n\n@font-face {\n  font-family: \"video-react\";\n  src: url(data:application/font-woff;base64,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) format(\"woff\"), url(data:application/x-font-ttf;base64,AAEAAAALAIAAAwAwT1MvMg7RD8oAAAC8AAAAYGNtYXAOVuSnAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5Zsdb3FIAAAF4AAAS0GhlYWQLMledAAAUSAAAADZoaGVhB6wEJgAAFIAAAAAkaG10eIgAFM8AABSkAAAAlGxvY2FLllAoAAAVOAAAAExtYXhwACoAyQAAFYQAAAAgbmFtZVtqyukAABWkAAABtnBvc3QAAwAAAAAXXAAAACAAAwQAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADyIAQAAAAAAAQAAAAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg8iD//f//AAAAAAAg8gD//f//AAH/4w4EAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAVYA1gMqAyoAAgAACQIBVgHU/iwDKv7W/tYAAgBWAFYDqgOqAAIAFgAAAS0BNzIeAhUUDgIjIi4CNTQ+AgGqAQD/AFZYnHNDQ3ObWVicc0NDc5sBQMDA6kNzm1lYnHNDQ3ObWVicc0MAAAADAFYAVgOqA6oAEwAnACoAACUyPgI1NC4CIyIOAhUUHgITMh4CFRQOAiMiLgI1ND4CExEFAgBGfV02Nl18R0Z9XTY2XXxHWJxzQ0Nzm1lYnHNDQ3ObAwEAqjZdfEdGfV02Nl18R0Z9XTYDAENzm1lYnHNDQ3ObWVicc0P9lgGAwAAAAAACAQAA1gMAAyoAAwAHAAABMxEjIREzEQJWqqr+qqoDKv2sAlT9rAAAAwBWAFYDqgOqAAMABwAbAAABESMRIxEjERMyHgIVFA4CIyIuAjU0PgICgFZUVoBYnHNDQ3ObWVicc0NDc5sBVgFU/qwBVP6sAlRDc5tZWJxzQ0Nzm1lYnHNDAAAEAFYAVgOqA6oAAwAXACsALwAAAREzEQcyPgI1NC4CIyIOAhUUHgITMh4CFRQOAiMiLgI1ND4CAxEzEQIqVoBGfV02Nl18R0Z9XTY2XXxHWJxzQ0Nzm1lYnHNDQ3ObJ1YBVgFU/qysNl18R0Z9XTY2XXxHRn1dNgMAQ3ObWVicc0NDc5tZWJxzQ/2sAVT+rAABAQABAAMAAwAAAwAAASERIQEAAgD+AAMA/gAAAgBqAQADVgMAAAIABQAACQERIQkBAeoBbP6A/pQBbAIAAQD+AAEAAQAAAAACAKoBAAOWAwAAAgAFAAAJAiERAQIqAWz+lP6AAWwDAP8A/wACAP8AAAAAAAIBAAEAAwADAAACAAYAAAkBEQEzESMBlgFq/gBWVgIAAQD+AAIA/gAAAAAAAgEAAQADAAMAAAMABgAAATMRIyERAQKqVlb+VgFqAwD+AAIA/wAAAAIAqgCAA1YD1gBFAGgAAAEOARUUBjEjNzMVIwcwNjU0MjU0FjsBMhYXHgEXHgEVFAYHDgEHDgEHDgEjIiYnLgEnLgE1MxQWMzI2PwEwNj0BLwEwJiMRMh4CFRQOAiMiLgI1MxQeAjMyPgI1NC4CIxUnNwH4AwsEHgpmSgQEBgUDCAYNAwMKAwcLAQMDBQYGBwMDEQYGDQMDCwYICiIODAMGAwoEBAoJA0Z9XTY2XXxHRn1dNlYpRV01NF5FKSlFXTXW1gG8AQUCAwNeHiYBAwMDAwMDAwMGAwcZDgYNAwMNBgYDAwMBAQMDAgMEFgwLCQEDCAkDGggKBAFuNV17R0Z9XTY2XXxHNF5FKSlFXTU0XkUprNbWAAAEAKoAgANWA9YAGwBGAE0AcAAAARQWMzI2PwEwNj0BMCY1NCYjIgYPATAGHQEwFjcUBg8BMAYjIgYjIiYnLgEnLgE9ATQ2PwEwNjMyNjMyFhceARceARceARUHIzUHNTczEzIeAhUUDgIjIi4CNTMUHgIzMj4CNTQuAiMVJzcCNA4GAwgDCAQEEgQDBgMIBgZUAQMMEAYGDgYGDgYGCAYKCAEDDg4GBg4GBg4GBgoGBgMDAwG2KCpMBi5GfV02Nl18R0Z9XTZWKUVdNTReRSkpRV011tYBeAUJAQMKCQNWCQMECgMDCAkDVgknCRMGGgwEAQMDBgMFKA8eCRMGGgwEAQMDBgMDDgkJEAlqjAweGAEeNV17R0Z9XTY2XXxHNF5FKSlFXTU0XkUprNbWAAAABACqAIADVgPWABsARgCjAMYAAAEUFjMyNj8BMDY9ATQmNTQmIyIGDwEwBh0BMBY3FAYPATAGIyIGIyImJy4BJy4BPQE0Nj8BMDYzMjYzMhYXHgEXHgEXHgEVIzI2PQEwJjU0JisBMAYjIgYdASM0NjMyNjMyFhceAR0BMAYVFAYjIgYHHgEXHgEVFAYHDgEHDgEjIgYjIiYnLgEnLgE1MxUwFhUUFjsBMDYzMjY9ATAmNTQmKwE1EzIeAhUUDgIjIi4CNTMUHgIzMj4CNTQuAiMVJzcCPBAGAwYDCAQEEAQDCAMIBARQAQMMEAYGDgYPFQoGAwMDAwMDDBAGBgwGBg4GBgoGBgMDAwHiDBIEBQMWBQMDASwWDgMOAw0ZCggIBAUDAwgDBg0DAwUBAwMGAwMNBgYOBgYLAwMNBggKJAQFAxYFAwMBBAUDGmZGfV02Nl18R0Z9XTZWKUVdNTReRSkpRV011tYBeAYIAQMKCQNWAwYDBAoDAwgJA1YJJwkTBhoMBAsFAw4JCRAJHgkTBhoMBAEDAwYDAw4JCRAJDgwIBQMDAQQFAwgPHwQHBQQYCg4JAwMFBwMDBwYGDgYGDQMDCgMDBQQBAwMCAwQbCwgFAwMBBAUDFgUDAwEeAWo1XXtHRn1dNjZdfEc0XkUpKUVdNTReRSms1tYAAAIAqgCAA1YD1gBCAGUAAAEOARUUBjEjNzMVIwcwNjU0MjU0FjsBMhYXHgEXHgEVFAYHDgEHDgEjIiYnLgEnLgE1MxQWMzI2PwEwNj0BLwEwJiMlND4CMzUXBzUiDgIVFB4CMzI+AjUzFA4CIyIuAgH0AwsEGgpmSgQEBgUDCAYNAwMKAwcLAQMDBQYIFw8GDQMDCwYICiIODAMGAwoEBAoJA/6uNl18R9bWNF5FKSlFXTU0XkUpVjZdfEdGfV02AbwBBQIDA14eJgEDAwMDAwMDAwYDBxkOBg0DAw0GCAgBAwMCAwQWDAsJAQMICQMaCAoEGkZ8XTWs1tasKUVdNTReRSkpRV01Rn1dNjZdfAAABACqAIADVgPWABsARgBNAHAAAAEUFjMyNj8BMDY9ATAmNTQmIyIGDwEwBh0BMBY3FAYPATAGIyIGIyImJy4BJy4BPQE0Nj8BMDYzMjYzMhYXHgEXHgEXHgEVByM1BzU3MwU0PgIzNRcHNSIOAhUUHgIzMj4CNTMUDgIjIi4CAjQOBgMIAwgEBBIEAwYDCAYGUAEDDBAGBg4GBg4GBggGCggBAw4OBgYOBgYOBgYKBgYDAwMBsigqTAb+2DZdfEfW1jReRSkpRV01NF5FKVY2XXxHRn1dNgF4BQkBAwoJA1YJAwQKAwMICQNWCScJEwYaDAQBAwMGAwUoDx4JEwYaDAQBAwMGAwMOCQkQCWqMDB4YNkZ8XTWs1tasKUVdNTReRSkpRV01Rn1dNjZdfAAAAAQAqgCAA1YD1gAiAD4AaQDGAAATND4CMzUXBzUiDgIVFB4CMzI+AjUzFA4CIyIuAgUUFjMyNj8BMDY9ATAmNTQmIyIGDwEwBh0BMBY3FAYPATAGIyIGIyImJy4BJy4BPQE0Nj8BMDYzMjYzMhYXHgEXHgEXHgEVIzI2PQEwJjU0JisBMAYjIgYdASM0NjMyNjMyFhceAR0BMAYVFAYjIgYHHgEXHgEVFAYHDgEHDgEjIgYjIiYnLgEnLgE1MxUwFhUUFjsBMDYzMjY9ATAmNTQmKwE1qjZdfEfW1jReRSkpRV01NF5FKVY2XXxHRn1dNgGODgYDCAMIBAQSBAMGAwgEBFQBAwwQBgYOBg8VCgYDAwMDAwMMEAYGDAYGDgYGCgYGAwMDAeIMEgQFAxYFAwMBLBYOAw4DDRkKCAgEBQMDCAMGDQMDBQEDAwYDAw0GBg4GBgsDAw0GCAokBAUDFgUDAwEEBQMaAdZGfF01rNbWrClFXTU0XkUpKUVdNUZ9XTY2XXwXBQkBAwoJA1YJAwQKAwMICQNWCScJEwYaDAQLBQMOCQkQCR4JEwYaDAQBAwMGAwMOCQkQCQ4MCAUDAwEEBQMIDx8EBwUEGAoOCQMDBQcDAwcGBg4GBg0DAwoDAwUEAQMDAgMEGwsIBQMDAQQFAxYFAwMBHgAAAAAEAIAAgAOAA4AAAgAUACYALgAAARUnJwEHJw4BBzU+ATcnEScjETMnATQuAic1HgMVFAYHJz4BJxwBByc1HgECAFrwAso2WCJOLBswFbbWqsrKAqofOU0vQG5PLRcVQAoMagJoMDoDVrRahP02NlgbKAtYBxoRtv7g1gEAyv62M1xLNg5YDkVjfEQwWydCGTkeBw0GaF4YWwAAAAABASoAqgKqA1YABQAAATM3EScjASqs1NSsAoDW/VTWAAIA1gCqAxYDVgAFAAwAABMzNxEnIyUUBgcRHgHWqtbWqgJAPDAwPAKA1v1U1oA5WxgBWBhbAAAAAwCAAIoDgAN2ABUAHAAiAAABHgMVFA4CBzU+AzU0LgInExQGBxEeASUzNxEnIwJWQG5PLS1PbUEuTjkfHzlNL2o6MDA6/cCq1taqA3YORWN8RER7Y0YOWA03S1wzM1xLNg7+4jlbGAFYGFtH1v1U1gAAAAAEANYA1gMqAyoABQALABEAFwAAATMVIzUjEzUzFSM1ATUzFSMVHQEzFSM1AlbUVICAVNT+gNSAgNQDKtSA/lSA1FQBLNRUgKyAVNQABADWANYDKgMqAAUACwARABcAAAEzFSM1MwM1MxUjFQE1MxUjNRE1MxUjNQKqgNRUVNSA/qxU1NRUAqpU1P2s1FSAAdSA1FT+rFTUgAAAAAADAIAAqgOAA1YAFwAvAD8AAAE1NCYrASIGHQEUFjsBMjY9ASMVIzUzFSM1NCYrASIGHQEUFjsBMjY9ASMVIzUzFQEyFhURFAYjISImNRE0NjMDABgSgBIaGhKAEhhAVlbqGhKAEhgYEoASGkBWVgGUIjQzI/2sJDIyJAIqLBIYGBKsEhgYEiwWgBYsEhgYEqwSGBgSLBaAFgEsMyP+ACI0MyMCACI0AAAEAIAAgAOAA4AAAwANABkAKQAAATUzFScRMzI2PQE0JiMBESMVIzUjETM1MxUBMhYVERQGIyEiJjURNDYzAmpWlqwSGBgS/wBAVkBAVgGUIjQzI/2sJDIyJAHAgIDA/wAYEqwSGP8AAQBqav8AVlYCADMj/awiNDMjAlQiNAAAAAIAZABWA5wDqgALAFkAAAEyNjU0JiMiBhUUFiUXHgEPAQ4BLwEOAQ8BDgErASImLwEuAScHBiYvASY2PwEuATU8ATcnLgE/AT4BHwE+AT8BPgE7ATIWHwEeARc3NhYfARYGDwEeARUcAQIAPVlYPj1ZWAF8WgYCBFYEDghqECQUEAELCKwHCwIQEyQRagcOBVYEAgZaAQECWgYCBFYEDghqECQUEAELCKwHCwIQEyQRagcOBVYEAgZaAQEBalg+PVlYPj1ZbEYEEAiUBwQDKgwWCHAHCwoIcAcVDioDAwiUBxAFRgoVCwoVC0YEEAiUBwQDKgwWCHAHCwoIcAcVDioDAwiUBxAFRgoVCwoVAAAAAQCAAFgDgAOqADMAAAEyFhUUBiMiJjU8ATclDgEjIiY1NDYzMhYXJS4BNTQ2MzIWFRQGIyImJwUeARUUBgcFPgEDADNJSTMzSQL+0hIsGjRMSzUZLRIBLAEDSzU0TEs1GS0S/tQBAwICATAQLAFSSTMzS0szBw8GsBASSzU0TBERrgcPCDRMSzU0TBMRsAcPCAcPCLAPEQADAFYAVgOqA6oAAwAHABsAAAE1IxUTESMREzIeAhUUDgIjIi4CNTQ+AgIqVFRUKlicc0NDc5tZWJxzQ0NzmwKAVlb+qgEA/wACgENzm1lYnHNDQ3ObWVicc0MAAAQAVgBWA6oDqgADABcAKwAvAAABNTMVAzI+AjU0LgIjIg4CFRQeAhMyHgIVFA4CIyIuAjU0PgITETMRAdZUKkZ9XTY2XXxHRn1dNjZdfEdYnHNDQ3ObWVicc0NDc5svVAKAVlb+KjZdfEdGfV02Nl18R0Z9XTYDAENzm1lYnHNDQ3ObWVicc0P9gAEA/wAAAAEA1gDWAyoDKgALAAABBxcHJwcnNyc3FzcDKu7uPO7uPO7uPO7uAu7u7jzu7jzu7jzu7gABAFUAVQOrA6sAFAAAExQeAjMyPgI1NC4CIyIOAhVVQ3ScWFicdENDdJxYWJx0QwIAWJx0Q0N0nFhYnHRDQ3ScWAAAAAIAVQBVA6sDqwAUACgAAAEiDgIVFB4CMzI+AjU0LgIjESIuAjU0PgIzMh4CFRQOAgIAWJx0Q0N0nFhYnHRDQ3ScWEd8XTU1XXxHR3xdNTVdfAOrQ3ScWFicdENDdJxYWJx0Q/0ANV18R0d8XTU1XXxHR3xdNQAAAAMAVQBVA6sDqwAUACgANAAAASIOAhUUHgIzMj4CNTQuAiMRIi4CNTQ+AjMyHgIVFA4CExQGIyImNTQ2MzIWAgBYnHRDQ3ScWFicdENDdJxYR3xdNTVdfEdHfF01NV18OUs1NUtLNTVLA6tDdJxYWJx0Q0N0nFhYnHRD/QA1XXxHR3xdNTVdfEdHfF01AVU1S0s1NUtLAAAAAQAAAAEAAPEUzolfDzz1AAsEAAAAAADUNIllAAAAANQ0iWUAAAAAA6sD1gAAAAgAAgAAAAAAAAABAAAEAAAAAAAEAAAAAAADqwABAAAAAAAAAAAAAAAAAAAAJQQAAAAAAAAAAAAAAAAAAAAEAAFWBAAAVgQAAFYEAAEABAAAVgQAAFYEAAEABAAAagQAAKoEAAEABAABAAQAAKoEAACqBAAAqgQAAKoEAACqBAAAqgQAAIAEAAEqBAAA1gQAAIAEAADWBAAA1gQAAIAEAACABAAAZAQAAIAEAABWBAAAVgQAANYEAABVBAAAVQQAAFUAAAAAAAoAFAAeACwAVACWAKoA2AEgAS4BRAFaAXABhAIQAqgDpgQuBMYFxAYSBiIGPgZ4Bp4GxgcaB1oH4gguCFwIpAi+COAJHAloAAEAAAAlAMcABAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQALAAAAAQAAAAAAAgAHAIQAAQAAAAAAAwALAEIAAQAAAAAABAALAJkAAQAAAAAABQALACEAAQAAAAAABgALAGMAAQAAAAAACgAaALoAAwABBAkAAQAWAAsAAwABBAkAAgAOAIsAAwABBAkAAwAWAE0AAwABBAkABAAWAKQAAwABBAkABQAWACwAAwABBAkABgAWAG4AAwABBAkACgA0ANR2aWRlby1yZWFjdAB2AGkAZABlAG8ALQByAGUAYQBjAHRWZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADB2aWRlby1yZWFjdAB2AGkAZABlAG8ALQByAGUAYQBjAHR2aWRlby1yZWFjdAB2AGkAZABlAG8ALQByAGUAYQBjAHRSZWd1bGFyAFIAZQBnAHUAbABhAHJ2aWRlby1yZWFjdAB2AGkAZABlAG8ALQByAGUAYQBjAHRGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n.video-react-icon, .video-react .video-react-big-play-button, .video-react .video-react-mouse-display, .video-react .video-react-play-progress, .video-react .video-react-play-control, .video-react .video-react-mute-control,\n.video-react .video-react-volume-menu-button, .video-react .video-react-volume-level, .video-react .video-react-bezel .video-react-bezel-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'video-react' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.video-react-icon-play-arrow:before, .video-react .video-react-big-play-button:before, .video-react .video-react-play-control:before, .video-react .video-react-bezel .video-react-bezel-icon-play:before {\n  content: \"\\F200\"; }\n\n.video-react-icon-play-circle-filled:before {\n  content: \"\\F201\"; }\n\n.video-react-icon-play-circle-outline:before {\n  content: \"\\F202\"; }\n\n.video-react-icon-pause:before, .video-react .video-react-play-control.video-react-playing:before, .video-react .video-react-bezel .video-react-bezel-icon-pause:before {\n  content: \"\\F203\"; }\n\n.video-react-icon-pause-circle-filled:before {\n  content: \"\\F204\"; }\n\n.video-react-icon-pause-circle-outline:before {\n  content: \"\\F205\"; }\n\n.video-react-icon-stop:before {\n  content: \"\\F206\"; }\n\n.video-react-icon-fast-rewind:before, .video-react .video-react-bezel .video-react-bezel-icon-fast-rewind:before {\n  content: \"\\F207\"; }\n\n.video-react-icon-fast-forward:before, .video-react .video-react-bezel .video-react-bezel-icon-fast-forward:before {\n  content: \"\\F208\"; }\n\n.video-react-icon-skip-previous:before {\n  content: \"\\F209\"; }\n\n.video-react-icon-skip-next:before {\n  content: \"\\F20A\"; }\n\n.video-react-icon-replay-5:before, .video-react .video-react-bezel .video-react-bezel-icon-replay-5:before {\n  content: \"\\F20B\"; }\n\n.video-react-icon-replay-10:before, .video-react .video-react-bezel .video-react-bezel-icon-replay-10:before {\n  content: \"\\F20C\"; }\n\n.video-react-icon-replay-30:before, .video-react .video-react-bezel .video-react-bezel-icon-replay-30:before {\n  content: \"\\F20D\"; }\n\n.video-react-icon-forward-5:before, .video-react .video-react-bezel .video-react-bezel-icon-forward-5:before {\n  content: \"\\F20E\"; }\n\n.video-react-icon-forward-10:before, .video-react .video-react-bezel .video-react-bezel-icon-forward-10:before {\n  content: \"\\F20F\"; }\n\n.video-react-icon-forward-30:before, .video-react .video-react-bezel .video-react-bezel-icon-forward-30:before {\n  content: \"\\F210\"; }\n\n.video-react-icon-volume-off:before, .video-react .video-react-mute-control.video-react-vol-muted:before,\n.video-react .video-react-volume-menu-button.video-react-vol-muted:before, .video-react .video-react-bezel .video-react-bezel-icon-volume-off:before {\n  content: \"\\F211\"; }\n\n.video-react-icon-volume-mute:before, .video-react .video-react-mute-control.video-react-vol-0:before,\n.video-react .video-react-volume-menu-button.video-react-vol-0:before {\n  content: \"\\F212\"; }\n\n.video-react-icon-volume-down:before, .video-react .video-react-mute-control.video-react-vol-1:before,\n.video-react .video-react-volume-menu-button.video-react-vol-1:before, .video-react .video-react-mute-control.video-react-vol-2:before,\n.video-react .video-react-volume-menu-button.video-react-vol-2:before, .video-react .video-react-bezel .video-react-bezel-icon-volume-down:before {\n  content: \"\\F213\"; }\n\n.video-react-icon-volume-up:before, .video-react .video-react-mute-control:before,\n.video-react .video-react-volume-menu-button:before, .video-react .video-react-bezel .video-react-bezel-icon-volume-up:before {\n  content: \"\\F214\"; }\n\n.video-react-icon-fullscreen:before {\n  content: \"\\F215\"; }\n\n.video-react-icon-fullscreen-exit:before {\n  content: \"\\F216\"; }\n\n.video-react-icon-closed-caption:before {\n  content: \"\\F217\"; }\n\n.video-react-icon-hd:before {\n  content: \"\\F218\"; }\n\n.video-react-icon-settings:before {\n  content: \"\\F219\"; }\n\n.video-react-icon-share:before {\n  content: \"\\F21A\"; }\n\n.video-react-icon-info:before {\n  content: \"\\F21B\"; }\n\n.video-react-icon-info-outline:before {\n  content: \"\\F21C\"; }\n\n.video-react-icon-close:before {\n  content: \"\\F21D\"; }\n\n.video-react-icon-circle:before, .video-react .video-react-mouse-display:before, .video-react .video-react-play-progress:before, .video-react .video-react-volume-level:before {\n  content: \"\\F21E\"; }\n\n.video-react-icon-circle-outline:before {\n  content: \"\\F21F\"; }\n\n.video-react-icon-circle-inner-circle:before {\n  content: \"\\F220\"; }\n\n.video-react {\n  display: block;\n  vertical-align: top;\n  box-sizing: border-box;\n  color: #fff;\n  background-color: #000;\n  position: relative;\n  font-size: 10px;\n  line-height: 1;\n  font-family: serif, Times, \"Times New Roman\";\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .video-react:-moz-full-screen {\n    position: absolute; }\n  .video-react:-webkit-full-screen {\n    width: 100% !important;\n    height: 100% !important; }\n  .video-react *,\n  .video-react *:before,\n  .video-react *:after {\n    box-sizing: inherit; }\n  .video-react ul {\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n    list-style-position: outside;\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    margin-bottom: 0; }\n  .video-react.video-react-fluid, .video-react.video-react-16-9, .video-react.video-react-4-3 {\n    width: 100%;\n    max-width: 100%;\n    height: 0; }\n  .video-react.video-react-16-9 {\n    padding-top: 56.25%; }\n  .video-react.video-react-4-3 {\n    padding-top: 75%; }\n  .video-react.video-react-fill {\n    width: 100%;\n    height: 100%; }\n  .video-react .video-react-video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n  .video-react.video-react-fullscreen {\n    width: 100% !important;\n    height: 100% !important;\n    padding-top: 0 !important; }\n    .video-react.video-react-fullscreen.video-react-user-inactive {\n      cursor: none; }\n\nbody.video-react-full-window {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  overflow-y: auto; }\n  body.video-react-full-window .video-react-fullscreen {\n    position: fixed;\n    overflow: hidden;\n    z-index: 1000;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0; }\n\n.video-react button {\n  background: none;\n  border: none;\n  color: inherit;\n  display: inline-block;\n  cursor: pointer;\n  overflow: visible;\n  font-size: inherit;\n  line-height: inherit;\n  text-transform: none;\n  text-decoration: none;\n  transition: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.video-react .video-react-loading-spinner {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -25px 0 0 -25px;\n  opacity: 0.85;\n  text-align: left;\n  border: 6px solid rgba(43, 51, 63, 0.7);\n  box-sizing: border-box;\n  background-clip: padding-box;\n  width: 50px;\n  height: 50px;\n  border-radius: 25px; }\n  .video-react .video-react-loading-spinner:before, .video-react .video-react-loading-spinner:after {\n    content: \"\";\n    position: absolute;\n    margin: -6px;\n    box-sizing: inherit;\n    width: inherit;\n    height: inherit;\n    border-radius: inherit;\n    opacity: 1;\n    border: inherit;\n    border-color: transparent;\n    border-top-color: white;\n    -webkit-animation: video-react-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, video-react-spinner-fade 1.1s linear infinite;\n    animation: video-react-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, video-react-spinner-fade 1.1s linear infinite; }\n\n.video-react-seeking .video-react-loading-spinner,\n.video-react-waiting .video-react-loading-spinner {\n  display: block; }\n\n.video-react-seeking .video-react-loading-spinner:before,\n.video-react-waiting .video-react-loading-spinner:before {\n  border-top-color: white; }\n\n.video-react-seeking .video-react-loading-spinner:after,\n.video-react-waiting .video-react-loading-spinner:after {\n  border-top-color: white;\n  -webkit-animation-delay: 0.44s;\n  animation-delay: 0.44s; }\n\n@keyframes video-react-spinner-spin {\n  100% {\n    transform: rotate(360deg); } }\n\n@-webkit-keyframes video-react-spinner-spin {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes video-react-spinner-fade {\n  0% {\n    border-top-color: #73859f; }\n  20% {\n    border-top-color: #73859f; }\n  35% {\n    border-top-color: white; }\n  60% {\n    border-top-color: #73859f; }\n  100% {\n    border-top-color: #73859f; } }\n\n@-webkit-keyframes video-react-spinner-fade {\n  0% {\n    border-top-color: #73859f; }\n  20% {\n    border-top-color: #73859f; }\n  35% {\n    border-top-color: white; }\n  60% {\n    border-top-color: #73859f; }\n  100% {\n    border-top-color: #73859f; } }\n\n.video-react .video-react-big-play-button {\n  font-size: 3em;\n  line-height: 1.5em;\n  height: 1.5em;\n  width: 3em;\n  display: block;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 0;\n  cursor: pointer;\n  opacity: 1;\n  border: 0.06666em solid #fff;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n  -webkit-border-radius: 0.3em;\n  -moz-border-radius: 0.3em;\n  border-radius: 0.3em;\n  -webkit-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  transition: all 0.4s; }\n  .video-react .video-react-big-play-button.video-react-big-play-button-center {\n    top: 50%;\n    left: 50%;\n    margin-top: -0.75em;\n    margin-left: -1.5em; }\n  .video-react .video-react-big-play-button.big-play-button-hide {\n    display: none; }\n\n.video-react:hover .video-react-big-play-button,\n.video-react .video-react-big-play-button:focus {\n  outline: 0;\n  border-color: #fff;\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5);\n  -webkit-transition: all 0s;\n  -moz-transition: all 0s;\n  -o-transition: all 0s;\n  transition: all 0s; }\n\n.video-react-menu-button {\n  cursor: pointer; }\n  .video-react-menu-button.video-react-disabled {\n    cursor: default; }\n\n.video-react-menu .video-react-menu-content {\n  display: block;\n  padding: 0;\n  margin: 0;\n  overflow: auto;\n  font-family: serif, Times, \"Times New Roman\"; }\n\n.video-react-menu li {\n  list-style: none;\n  margin: 0;\n  padding: 0.2em 0;\n  line-height: 1.4em;\n  font-size: 1.2em;\n  text-align: center;\n  text-transform: lowercase; }\n  .video-react-menu li:focus, .video-react-menu li:hover {\n    outline: 0;\n    background-color: #73859f;\n    background-color: rgba(115, 133, 159, 0.5); }\n  .video-react-menu li.video-react-selected, .video-react-menu li.video-react-selected:focus, .video-react-menu li.video-react-selected:hover {\n    background-color: #fff;\n    color: #2B333F; }\n  .video-react-menu li.vjs-menu-title {\n    text-align: center;\n    text-transform: uppercase;\n    font-size: 1em;\n    line-height: 2em;\n    padding: 0;\n    margin: 0 0 0.3em 0;\n    font-weight: bold;\n    cursor: default; }\n\n.video-react-scrubbing .vjs-menu-button:hover .video-react-menu {\n  display: none; }\n\n.video-react .video-react-menu-button-popup .video-react-menu {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  width: 10em;\n  left: -3em;\n  height: 0em;\n  margin-bottom: 1.5em;\n  border-top-color: rgba(43, 51, 63, 0.7); }\n  .video-react .video-react-menu-button-popup .video-react-menu .video-react-menu-content {\n    background-color: #2B333F;\n    background-color: rgba(43, 51, 63, 0.7);\n    position: absolute;\n    width: 100%;\n    bottom: 1.5em;\n    max-height: 15em; }\n\n.video-react-menu-button-popup .video-react-menu.video-react-lock-showing {\n  display: block; }\n\n.video-react .video-react-menu-button-inline {\n  -webkit-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  transition: all 0.4s;\n  overflow: hidden; }\n  .video-react .video-react-menu-button-inline:before {\n    width: 2.222222222em; }\n  .video-react .video-react-menu-button-inline:hover, .video-react .video-react-menu-button-inline:focus, .video-react .video-react-menu-button-inline.video-react-slider-active {\n    width: 12em; }\n    .video-react .video-react-menu-button-inline:hover .video-react-menu, .video-react .video-react-menu-button-inline:focus .video-react-menu, .video-react .video-react-menu-button-inline.video-react-slider-active .video-react-menu {\n      display: block;\n      opacity: 1; }\n  .video-react .video-react-menu-button-inline.video-react-slider-active {\n    -webkit-transition: none;\n    -moz-transition: none;\n    -o-transition: none;\n    transition: none; }\n  .video-react .video-react-menu-button-inline .video-react-menu {\n    opacity: 0;\n    height: 100%;\n    width: auto;\n    position: absolute;\n    left: 4em;\n    top: 0;\n    padding: 0;\n    margin: 0;\n    -webkit-transition: all 0.4s;\n    -moz-transition: all 0.4s;\n    -o-transition: all 0.4s;\n    transition: all 0.4s; }\n  .video-react .video-react-menu-button-inline .video-react-menu-content {\n    width: auto;\n    height: 100%;\n    margin: 0;\n    overflow: hidden; }\n\n.video-react-no-flex .video-react-menu-button-inline .video-react-menu {\n  display: block;\n  opacity: 1;\n  position: relative;\n  width: auto; }\n\n.video-react-no-flex .video-react-menu-button-inline:hover, .video-react-no-flex .video-react-menu-button-inline:focus, .video-react-no-flex .video-react-menu-button-inline.video-react-slider-active {\n  width: auto; }\n\n.video-react .video-react-poster {\n  display: inline-block;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: contain;\n  background-color: #000000;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%; }\n  .video-react .video-react-poster img {\n    display: block;\n    vertical-align: middle;\n    margin: 0 auto;\n    max-height: 100%;\n    padding: 0;\n    width: 100%; }\n\n.video-react .video-react-slider {\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  padding: 0;\n  margin: 0 0.45em 0 0.45em;\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5); }\n  .video-react .video-react-slider:focus {\n    text-shadow: 0em 0em 1em white;\n    -webkit-box-shadow: 0 0 1em #fff;\n    -moz-box-shadow: 0 0 1em #fff;\n    box-shadow: 0 0 1em #fff; }\n\n.video-react .video-react-control {\n  outline: none;\n  position: relative;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 4em;\n  -webkit-box-flex: none;\n  -moz-box-flex: none;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none; }\n  .video-react .video-react-control:before {\n    font-size: 1.8em;\n    line-height: 1.67; }\n  .video-react .video-react-control:focus:before, .video-react .video-react-control:hover:before, .video-react .video-react-control:focus {\n    text-shadow: 0em 0em 1em white; }\n\n.video-react .video-react-control-text {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.video-react-no-flex .video-react-control {\n  display: table-cell;\n  vertical-align: middle; }\n\n.video-react .video-react-control-bar {\n  display: none;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 3.0em;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7); }\n\n.video-react-has-started .video-react-control-bar {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  visibility: visible;\n  opacity: 1;\n  -webkit-transition: visibility 0.1s, opacity 0.1s;\n  -moz-transition: visibility 0.1s, opacity 0.1s;\n  -o-transition: visibility 0.1s, opacity 0.1s;\n  transition: visibility 0.1s, opacity 0.1s; }\n\n.video-react-has-started.video-react-user-inactive.video-react-playing .video-react-control-bar.video-react-control-bar-auto-hide {\n  visibility: visible;\n  opacity: 0;\n  -webkit-transition: visibility 1s, opacity 1s;\n  -moz-transition: visibility 1s, opacity 1s;\n  -o-transition: visibility 1s, opacity 1s;\n  transition: visibility 1s, opacity 1s; }\n\n.video-react-controls-disabled .video-react-control-bar,\n.video-react-using-native-controls .video-react-control-bar,\n.video-react-error .video-react-control-bar {\n  display: none !important; }\n\n.video-react-audio.video-react-has-started.video-react-user-inactive.video-react-playing .video-react-control-bar {\n  opacity: 1;\n  visibility: visible; }\n\n.video-react-has-started.video-react-no-flex .video-react-control-bar {\n  display: table; }\n\n.video-react .video-react-progress-control {\n  -webkit-box-flex: auto;\n  -moz-box-flex: auto;\n  -webkit-flex: auto;\n  -ms-flex: auto;\n  flex: auto;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  min-width: 4em; }\n\n.video-react-live .video-react-progress-control {\n  display: none; }\n\n.video-react .video-react-progress-holder {\n  -webkit-box-flex: auto;\n  -moz-box-flex: auto;\n  -webkit-flex: auto;\n  -ms-flex: auto;\n  flex: auto;\n  -webkit-transition: all 0.2s;\n  -moz-transition: all 0.2s;\n  -o-transition: all 0.2s;\n  transition: all 0.2s;\n  height: 0.3em; }\n\n.video-react .video-react-progress-control:hover .video-react-progress-holder {\n  font-size: 1.666666666666666666em; }\n\n/* If we let the font size grow as much as everything else, the current time tooltip ends up\n ginormous. If you'd like to enable the current time tooltip all the time, this should be disabled\n to avoid a weird hitch when you roll off the hover. */\n.video-react .video-react-progress-control:hover .video-react-time-tooltip,\n.video-react .video-react-progress-control:hover .video-react-mouse-display:after,\n.video-react .video-react-progress-control:hover .video-react-play-progress:after {\n  visibility: visible;\n  font-size: 0.6em; }\n\n.video-react .video-react-progress-holder .video-react-play-progress,\n.video-react .video-react-progress-holder .video-react-load-progress,\n.video-react .video-react-progress-holder .video-react-tooltip-progress-bar,\n.video-react .video-react-progress-holder .video-react-load-progress div {\n  position: absolute;\n  display: block;\n  height: 0.3em;\n  margin: 0;\n  padding: 0;\n  width: 0;\n  left: 0;\n  top: 0; }\n\n.video-react .video-react-mouse-display:before {\n  display: none; }\n\n.video-react .video-react-play-progress {\n  background-color: #fff; }\n  .video-react .video-react-play-progress:before {\n    position: absolute;\n    top: -0.333333333333333em;\n    right: -0.5em;\n    font-size: 0.9em; }\n\n.video-react .video-react-time-tooltip,\n.video-react .video-react-mouse-display:after,\n.video-react .video-react-play-progress:after {\n  visibility: hidden;\n  pointer-events: none;\n  position: absolute;\n  top: -3.4em;\n  right: -1.9em;\n  font-size: 0.9em;\n  color: #000;\n  content: attr(data-current-time);\n  padding: 6px 8px 8px 8px;\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, 0.8);\n  -webkit-border-radius: 0.3em;\n  -moz-border-radius: 0.3em;\n  border-radius: 0.3em; }\n\n.video-react .video-react-time-tooltip,\n.video-react .video-react-play-progress:before,\n.video-react .video-react-play-progress:after {\n  z-index: 1; }\n\n.video-react .video-react-progress-control .video-react-keep-tooltips-inside:after {\n  display: none; }\n\n.video-react .video-react-load-progress {\n  background: #bfc7d3;\n  background: rgba(115, 133, 159, 0.5); }\n\n.video-react .video-react-load-progress div {\n  background: white;\n  background: rgba(115, 133, 159, 0.75); }\n\n.video-react.video-react-no-flex .video-react-progress-control {\n  width: auto; }\n\n.video-react .video-react-time-tooltip {\n  display: inline-block;\n  height: 2.4em;\n  position: relative;\n  float: right;\n  right: -1.9em; }\n\n.video-react .video-react-tooltip-progress-bar {\n  visibility: hidden; }\n\n.video-react .video-react-progress-control .video-react-mouse-display {\n  display: none;\n  position: absolute;\n  width: 1px;\n  height: 100%;\n  background-color: #000;\n  z-index: 1; }\n\n.video-react-no-flex .video-react-progress-control .video-react-mouse-display {\n  z-index: 0; }\n\n.video-react .video-react-progress-control:hover .video-react-mouse-display {\n  display: block; }\n\n.video-react.video-react-user-inactive .video-react-progress-control .video-react-mouse-display,\n.video-react.video-react-user-inactive .video-react-progress-control .video-react-mouse-display:after {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: visibility 1s, opacity 1s;\n  -moz-transition: visibility 1s, opacity 1s;\n  -o-transition: visibility 1s, opacity 1s;\n  transition: visibility 1s, opacity 1s; }\n\n.video-react.video-react-user-inactive.video-react-no-flex .video-react-progress-control .video-react-mouse-display,\n.video-react.video-react-user-inactive.video-react-no-flex .video-react-progress-control .video-react-mouse-display:after {\n  display: none; }\n\n.video-react .video-react-mouse-display .video-react-time-tooltip,\n.video-react .video-react-progress-control .video-react-mouse-display:after {\n  color: #fff;\n  background-color: #000;\n  background-color: rgba(0, 0, 0, 0.8); }\n\n.video-react .video-react-play-control {\n  cursor: pointer;\n  -webkit-box-flex: none;\n  -moz-box-flex: none;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none; }\n\n.video-react .video-react-fullscreen-control {\n  cursor: pointer;\n  -webkit-box-flex: none;\n  -moz-box-flex: none;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none; }\n\n.video-react.video-react-fullscreen {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 9999; }\n\n.video-react .video-react-time-control {\n  -webkit-box-flex: none;\n  -moz-box-flex: none;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  font-size: 1em;\n  line-height: 3em;\n  min-width: 2em;\n  width: auto;\n  padding-left: 1em;\n  padding-right: 1em; }\n\n.video-react .video-react-time-divider {\n  line-height: 3em;\n  min-width: initial;\n  padding: 0; }\n\n.video-react .video-react-mute-control,\n.video-react .video-react-volume-menu-button {\n  cursor: pointer;\n  -webkit-box-flex: none;\n  -moz-box-flex: none;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none; }\n\n.video-react .video-react-volume-control {\n  width: 5em;\n  -webkit-box-flex: none;\n  -moz-box-flex: none;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.video-react .video-react-volume-bar {\n  margin: 1.35em 0.45em; }\n  .video-react .video-react-volume-bar.video-react-slider-horizontal {\n    width: 5em;\n    height: 0.3em; }\n    .video-react .video-react-volume-bar.video-react-slider-horizontal .video-react-volume-level {\n      width: 100%; }\n  .video-react .video-react-volume-bar.video-react-slider-vertical {\n    width: 0.3em;\n    height: 5em;\n    margin: 1.35em auto; }\n    .video-react .video-react-volume-bar.video-react-slider-vertical .video-react-volume-level {\n      height: 100%; }\n\n.video-react .video-react-volume-level {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: #fff; }\n  .video-react .video-react-volume-level:before {\n    position: absolute;\n    font-size: 0.9em; }\n\n.video-react .video-react-slider-vertical .video-react-volume-level {\n  width: 0.3em; }\n  .video-react .video-react-slider-vertical .video-react-volume-level:before {\n    top: -0.5em;\n    left: -0.3em; }\n\n.video-react .video-react-slider-horizontal .video-react-volume-level {\n  height: 0.3em; }\n  .video-react .video-react-slider-horizontal .video-react-volume-level:before {\n    top: -0.3em;\n    right: -0.5em; }\n\n.video-react .video-react-menu-button-popup.video-react-volume-menu-button .video-react-menu {\n  display: block;\n  width: 0;\n  height: 0;\n  border-top-color: transparent; }\n\n.video-react .video-react-menu-button-popup.video-react-volume-menu-button-vertical .video-react-menu {\n  left: 0.5em;\n  height: 8em; }\n\n.video-react .video-react-menu-button-popup.video-react-volume-menu-button-horizontal .video-react-menu {\n  left: -2em; }\n\n.video-react .video-react-menu-button-popup.video-react-volume-menu-button .video-react-menu-content {\n  height: 0;\n  width: 0;\n  overflow-x: hidden;\n  overflow-y: hidden; }\n\n.video-react .video-react-volume-menu-button-vertical:hover .video-react-menu-content,\n.video-react .video-react-volume-menu-button-vertical:focus .video-react-menu-content,\n.video-react .video-react-volume-menu-button-vertical.video-react-slider-active .video-react-menu-content,\n.video-react .video-react-volume-menu-button-vertical .video-react-lock-showing .video-react-menu-content {\n  height: 8em;\n  width: 2.9em; }\n\n.video-react .video-react-volume-menu-button-horizontal:hover .video-react-menu-content,\n.video-react .video-react-volume-menu-button-horizontal:focus .video-react-menu-content,\n.video-react .video-react-volume-menu-button-horizontal .video-react-slider-active .video-react-menu-content,\n.video-react .video-react-volume-menu-button-horizontal .video-react-lock-showing .video-react-menu-content {\n  height: 2.9em;\n  width: 8em; }\n\n.video-react .video-react-volume-menu-button.video-react-menu-button-inline .video-react-menu-content {\n  background-color: transparent !important; }\n\n.video-react .video-react-playback-rate .video-react-playback-rate-value {\n  line-height: 3em;\n  text-align: center; }\n\n.video-react .video-react-playback-rate .video-react-menu {\n  width: 4em;\n  left: 0em; }\n\n.video-react .video-react-bezel {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 52px;\n  height: 52px;\n  z-index: 17;\n  margin-left: -26px;\n  margin-top: -26px;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 26px; }\n  .video-react .video-react-bezel.video-react-bezel-animation {\n    -moz-animation: video-react-bezel-fadeout .5s linear 1 normal forwards;\n    -webkit-animation: video-react-bezel-fadeout .5s linear 1 normal forwards;\n    animation: video-react-bezel-fadeout .5s linear 1 normal forwards;\n    pointer-events: none; }\n  .video-react .video-react-bezel.video-react-bezel-animation-alt {\n    -moz-animation: video-react-bezel-fadeout-alt .5s linear 1 normal forwards;\n    -webkit-animation: video-react-bezel-fadeout-alt .5s linear 1 normal forwards;\n    animation: video-react-bezel-fadeout-alt .5s linear 1 normal forwards;\n    pointer-events: none; }\n  .video-react .video-react-bezel .video-react-bezel-icon {\n    width: 36px;\n    height: 36px;\n    margin: 8px;\n    font-size: 26px;\n    line-height: 36px;\n    text-align: center; }\n\n@keyframes video-react-bezel-fadeout {\n  0% {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    transform: scale(2); } }\n\n@keyframes video-react-bezel-fadeout-alt {\n  0% {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    transform: scale(2); } }\n", ""]);

// exports


/***/ })

});