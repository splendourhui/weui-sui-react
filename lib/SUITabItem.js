'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SUITabItem = (function (_Component) {
  _inherits(SUITabItem, _Component);

  function SUITabItem(props) {
    _classCallCheck(this, SUITabItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SUITabItem).call(this, props));
  }

  _createClass(SUITabItem, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;

      var iconContent = '';
      var titleContent = '';
      var badgeContent = '';

      if (data.icon) {
        iconContent = _react2.default.createElement('span', { className: 'icon ' + data.icon });
        titleContent = _react2.default.createElement(
          'span',
          { className: 'tab-label' },
          data.title || ''
        );
        if (data.badge) {
          badgeContent = _react2.default.createElement(
            'span',
            { className: 'badge' },
            data.badge
          );
        }
      } else {
        titleContent = _react2.default.createElement(
          'span',
          null,
          data.title || ''
        );
      }

      return _react2.default.createElement(
        'a',
        {
          className: 'tab-item external ' + (data.active ? 'active' : '') + ' ' + data.extraClass,
          href: '' + (data.href || '#')
        },
        iconContent,
        titleContent,
        badgeContent
      );
    }
  }]);

  return SUITabItem;
})(_react.Component);

SUITabItem.propTypes = {
  data: _react.PropTypes.object.isRequired
};

module.exports = SUITabItem;
