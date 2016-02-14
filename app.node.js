module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(23);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _ExecutionEnvironment = __webpack_require__(4);

  var _Location = __webpack_require__(3);

  var _Location2 = _interopRequireDefault(_Location);

  var _Layout = __webpack_require__(5);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * React Static Boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * https://github.com/koistya/react-static-boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

  var routes = {
    '/404': function _() {
      return __webpack_require__(8);
    }, '/500': function _() {
      return __webpack_require__(9);
    }, '/about': function about() {
      return __webpack_require__(10);
    }, '/blog': function blog() {
      return __webpack_require__(11);
    }, '/blog/test-article-one': function blogTestArticleOne() {
      return __webpack_require__(12);
    }, '/blog/test-article-two': function blogTestArticleTwo() {
      return __webpack_require__(13);
    }, '/': function _() {
      return __webpack_require__(14);
    }, '/projects': function projects() {
      return __webpack_require__(15);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(path, callback) {
      var handler, component;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              handler = routes[path] || routes['/404'];
              _context.next = 3;
              return handler();

            case 3:
              component = _context.sent;
              _context.next = 6;
              return callback(_react2.default.createElement(
                _Layout2.default,
                null,
                _react2.default.createElement(component.default)
              ));

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    })),
        _this = undefined;

    return function route(_x, _x2) {
      return ref.apply(_this, arguments);
    };
  }();

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _Location2.default.listen(function (location) {
      route(location.pathname, function () {
        var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(component) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt('return', _reactDom2.default.render(component, container, function () {
                    // Track the page view event via Google Analytics
                    window.ga('send', 'pageview');
                  }));

                case 1:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2);
        })),
            _this = _this2;

        return function (_x3) {
          return ref.apply(_this, arguments);
        };
      }());
    });
  }

  if (_ExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready and page content is loaded
    if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
      run();
    } else {
      document.addEventListener('DOMContentLoaded', run, false);
    }
  }

  exports.default = { route: route, routes: routes };

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _ExecutionEnvironment = __webpack_require__(4);

  var _createBrowserHistory = __webpack_require__(19);

  var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

  var _createMemoryHistory = __webpack_require__(20);

  var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

  var _useQueries = __webpack_require__(21);

  var _useQueries2 = _interopRequireDefault(_useQueries);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  var location = (0, _useQueries2.default)(_ExecutionEnvironment.canUseDOM ? _createBrowserHistory2.default : _createMemoryHistory2.default)();

  exports.default = location;

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(16);

  var _Navigation = __webpack_require__(7);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * React Static Boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * https://github.com/koistya/react-static-boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */

  var Layout = function (_Component) {
    _inherits(Layout, _Component);

    function Layout() {
      _classCallCheck(this, Layout);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Layout).apply(this, arguments));
    }

    _createClass(Layout, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'Layout' },
          _react2.default.createElement(_Navigation2.default, null),
          this.props.children
        );
      }
    }]);

    return Layout;
  }(_react.Component);

  Layout.propTypes = {
    children: _react.PropTypes.element.isRequired
  };
  exports.default = Layout;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(17);

  var _Location = __webpack_require__(3);

  var _Location2 = _interopRequireDefault(_Location);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * React Static Boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * https://github.com/koistya/react-static-boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = function (_Component) {
    _inherits(Link, _Component);

    function Link() {
      _classCallCheck(this, Link);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Link).apply(this, arguments));
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2.default.createElement(
          'a',
          _extends({ href: to }, props, { onClick: Link.handleClick.bind(this) }),
          children
        );
      }
    }], [{
      key: 'handleClick',
      value: function handleClick(event) {
        var allowTransition = true;
        var clickResult = undefined;

        if (this.props && this.props.onClick) {
          clickResult = this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }

        event.preventDefault();

        if (allowTransition) {
          var link = event.currentTarget;
          _Location2.default.pushState(this.props && this.props.state || null, this.props && this.props.to || link.pathname + link.search);
        }
      }
    }]);

    return Link;
  }(_react.Component);

  Link.propTypes = {
    to: _react.PropTypes.string.isRequired,
    children: _react.PropTypes.element.isRequired,
    state: _react.PropTypes.object,
    onClick: _react.PropTypes.func
  };
  exports.default = Link;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(18);

  var _Link = __webpack_require__(6);

  var _Link2 = _interopRequireDefault(_Link);

  var _lodash = __webpack_require__(22);

  var _lodash2 = _interopRequireDefault(_lodash);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * React Static Boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * https://github.com/koistya/react-static-boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */

  var Navigation = function (_Component) {
    _inherits(Navigation, _Component);

    function Navigation() {
      _classCallCheck(this, Navigation);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Navigation).apply(this, arguments));
    }

    _createClass(Navigation, [{
      key: 'render',
      value: function render() {
        var navItems = [{ href: '/', label: 'Home' }, { href: '/about', label: 'About' }, { href: '/projects', label: 'Projects' }];

        return _react2.default.createElement(
          'ul',
          { className: 'Navigation', role: 'menu' },
          _lodash2.default.map(navItems, function (item) {
            return _react2.default.createElement(
              'li',
              { className: 'Navigation-item', key: item.href },
              _react2.default.createElement(
                _Link2.default,
                { to: item.href },
                _react2.default.createElement(
                  'span',
                  null,
                  item.label
                )
              )
            );
          })
        );
      }
    }]);

    return Navigation;
  }(_react.Component);

  exports.default = Navigation;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * React Static Boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * https://github.com/koistya/react-static-boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */

  var _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2.default.createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _class;
  }(_react.Component);

  exports.default = _class;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * React Static Boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * https://github.com/koistya/react-static-boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */

  var _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Error'
          ),
          _react2.default.createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }]);

    return _class;
  }(_react.Component);

  _class.propTypes = {
    error: _react.PropTypes.instanceOf(Error)
  };
  exports.default = _class;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * React Static Boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * https://github.com/koistya/react-static-boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */

  var _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'About Us'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _class;
  }(_react.Component);

  exports.default = _class;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * React Static Boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * https://github.com/koistya/react-static-boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */

  var _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Blog'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _class;
  }(_react.Component);

  exports.default = _class;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * React Static Boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * https://github.com/koistya/react-static-boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */

  var _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Test Article 1'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _class;
  }(_react.Component);

  exports.default = _class;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * React Static Boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * https://github.com/koistya/react-static-boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */

  var _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Test Article 2'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _class;
  }(_react.Component);

  exports.default = _class;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * React Static Boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * https://github.com/koistya/react-static-boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */

  var _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Home Page'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _class;
  }(_react.Component);

  exports.default = _class;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * React Static Boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * https://github.com/koistya/react-static-boilerplate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */

  var Projects = function (_Component) {
    _inherits(Projects, _Component);

    function Projects() {
      _classCallCheck(this, Projects);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Projects).apply(this, arguments));
    }

    _createClass(Projects, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Projects'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Coming soon-ish.'
          )
        );
      }
    }]);

    return Projects;
  }(_react.Component);

  exports.default = Projects;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background-color: #f7f7f7;\n  color: #333;\n  font-family: 'Roboto','Helvetica',sans-serif;\n}\n\n.Layout {\n  margin: 0 auto;\n}\n\n@media (min-width: 768px) {\n  .Layout {\n    width: calc(768px - 18px);\n  }\n}\n\n@media (min-width: 992px) {\n  .Layout {\n    width: calc(992px - 22px);\n  }\n}\n\n@media (min-width: 1200px) {\n  .Layout {\n    width: calc(1200px - 30px);\n  }\n}\n", ""]);

  // exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n.Link {\n\n}\n", ""]);

  // exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.Navigation {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 2em 0 5em 0;\n  list-style: none;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n.Navigation-item {\n  padding: 0 2em;\n}\n\n.Navigation-link {\n  padding: 0.5em 1em;\n  color: #21ce99;\n  text-decoration: none;\n  text-transform: uppercase;\n  cursor: pointer\n}\n\n.Navigation-link:hover {\n  border-bottom: 3px solid #21ce99;\n  color: #333;\n}\n", ""]);

  // exports


/***/ },
/* 19 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 20 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 21 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 22 */
/***/ function(module, exports) {

  module.exports = require("lodash");

/***/ },
/* 23 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ }
/******/ ]);