'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SUITabItem = require('./SUITabItem');

var _SUITabItem2 = _interopRequireDefault(_SUITabItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SUITabBar = (function (_Component) {
  _inherits(SUITabBar, _Component);

  function SUITabBar(props) {
    _classCallCheck(this, SUITabBar);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SUITabBar).call(this, props));
  }

  _createClass(SUITabBar, [{
    key: 'render',
    value: function render() {
      var items = this.props.items;

      var tabItems = [];
      items.forEach(function (item) {
        tabItems.push(_react2.default.createElement(_SUITabItem2.default, { key: 'tab-bar-item-' + item.title + '-' + item.icon, data: item }));
      });

      return _react2.default.createElement(
        'nav',
        { className: 'bar bar-tab' },
        tabItems
      );
    }
  }]);

  return SUITabBar;
})(_react.Component);

SUITabBar.propTypes = {
  items: _react.PropTypes.array.isRequired
};

module.exports = SUITabBar;
