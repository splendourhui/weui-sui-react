import React, { Component, PropTypes } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      title, backgroundColor, titleColor,
      leftButton = {}, rightButton = {},
      leftButtonWithIcon = {}, rightButtonWithIcon = {},
    } = this.props;

    // 左边的按钮
    let leftButtonContent = '';
    if (leftButton.title) {
      leftButtonContent = (
        <button className={`pull-left button ${leftButton.extraClass}`}>
          {leftButton.title}
        </button>
      );
    }

    // 右边的按钮
    let rightButtonContent = '';
    if (rightButton.title) {
      rightButtonContent = (
        <button className={`pull-right button ${rightButton.extraClass}`}>
          {rightButton.title}
        </button>
      );
    }

    // 左边的带图标按钮
    let leftButtonWithIconContent = '';
    if (leftButtonWithIcon) {
      leftButtonWithIconContent = (
        <a href={`${leftButtonWithIcon.href || '#'}`}>
          <button
            className={`pull-left button button-link button-nav ${leftButtonWithIcon.extraClass || ''}`}
            style={{
              color: leftButtonWithIcon.color,
            }}
          >
            <span className={`icon ${leftButtonWithIcon.icon}`}></span>
            {leftButtonWithIcon.title}
          </button>
        </a>
      );
    }

    // 右边的带图标按钮
    let rightButtonWithIconContent = '';
    if (rightButtonWithIcon) {
      rightButtonWithIconContent = (
        <a href={`${rightButtonWithIcon.href || '#'}`}>
          <button
            className={`pull-right button button-link button-nav ${rightButtonWithIcon.extraClass || ''}`}
            style={{
              color: rightButtonWithIcon.color,
            }}
          >
            {rightButtonWithIcon.title}
            <span className={`icon ${rightButtonWithIcon.icon}`}></span>
          </button>
        </a>
      );
    }

    return (
      <header
        className="bar bar-nav"
        style={{
          backgroundColor: backgroundColor || '#f7f7f8',
        }}
      >
        {leftButtonContent}
        {rightButtonContent}
        {leftButtonWithIconContent}
        {rightButtonWithIconContent}
        <h1
          className="title"
          style={{
            color: titleColor || '#3d4145',
          }}
        >
          {title}
        </h1>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  titleColor: PropTypes.string,
  leftButton: PropTypes.object,
  rightButton: PropTypes.object,
  leftButtonWithIcon: PropTypes.object,
  rightButtonWithIcon: PropTypes.object,
};

export default Header;
