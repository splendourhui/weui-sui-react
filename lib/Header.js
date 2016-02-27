'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = (function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var title = _props.title;
      var backgroundColor = _props.backgroundColor;
      var titleColor = _props.titleColor;
      var _props$leftButton = _props.leftButton;
      var leftButton = _props$leftButton === undefined ? {} : _props$leftButton;
      var _props$rightButton = _props.rightButton;
      var rightButton = _props$rightButton === undefined ? {} : _props$rightButton;
      var _props$leftButtonWith = _props.leftButtonWithIcon;
      var leftButtonWithIcon = _props$leftButtonWith === undefined ? {} : _props$leftButtonWith;
      var _props$rightButtonWit = _props.rightButtonWithIcon;
      var rightButtonWithIcon = _props$rightButtonWit === undefined ? {} : _props$rightButtonWit;

      // 左边的按钮

      var leftButtonContent = '';
      if (leftButton.title) {
        leftButtonContent = _react2.default.createElement(
          'button',
          { className: 'pull-left button ' + leftButton.extraClass },
          leftButton.title
        );
      }

      // 右边的按钮
      var rightButtonContent = '';
      if (rightButton.title) {
        rightButtonContent = _react2.default.createElement(
          'button',
          { className: 'pull-right button ' + rightButton.extraClass },
          rightButton.title
        );
      }

      // 左边的带图标按钮
      var leftButtonWithIconContent = '';
      if (leftButtonWithIcon) {
        leftButtonWithIconContent = _react2.default.createElement(
          'a',
          { href: '' + (leftButtonWithIcon.href || '#') },
          _react2.default.createElement(
            'button',
            {
              className: 'pull-left button button-link button-nav ' + (leftButtonWithIcon.extraClass || ''),
              style: {
                color: leftButtonWithIcon.color
              }
            },
            _react2.default.createElement('span', { className: 'icon ' + leftButtonWithIcon.icon }),
            leftButtonWithIcon.title
          )
        );
      }

      // 右边的带图标按钮
      var rightButtonWithIconContent = '';
      if (rightButtonWithIcon) {
        rightButtonWithIconContent = _react2.default.createElement(
          'a',
          { href: '' + (rightButtonWithIcon.href || '#') },
          _react2.default.createElement(
            'button',
            {
              className: 'pull-right button button-link button-nav ' + (rightButtonWithIcon.extraClass || ''),
              style: {
                color: rightButtonWithIcon.color
              }
            },
            rightButtonWithIcon.title,
            _react2.default.createElement('span', { className: 'icon ' + rightButtonWithIcon.icon })
          )
        );
      }

      return _react2.default.createElement(
        'header',
        {
          className: 'bar bar-nav',
          style: {
            backgroundColor: backgroundColor || '#f7f7f8'
          }
        },
        leftButtonContent,
        rightButtonContent,
        leftButtonWithIconContent,
        rightButtonWithIconContent,
        _react2.default.createElement(
          'h1',
          {
            className: 'title',
            style: {
              color: titleColor || '#3d4145'
            }
          },
          title
        )
      );
    }
  }]);

  return Header;
})(_react.Component);

Header.propTypes = {
  title: _react.PropTypes.string.isRequired,
  backgroundColor: _react.PropTypes.string,
  titleColor: _react.PropTypes.string,
  leftButton: _react.PropTypes.object,
  rightButton: _react.PropTypes.object,
  leftButtonWithIcon: _react.PropTypes.object,
  rightButtonWithIcon: _react.PropTypes.object
};

module.exports = Header;
