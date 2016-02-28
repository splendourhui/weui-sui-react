import React, { Component, PropTypes } from 'react';

class SUIFooterBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let content = [];
    this.props.items.forEach(item => {
      const itemContent = (
        <a
          href={`${item.href || '#'}`}
          className={`icon ${item.icon} ${item.location} ${item.extraClass || ''}`}
        >
        </a>
      );
      content.push(itemContent);
    });
    return (
      <div className="bar bar-footer">
        {content}
      </div>
    );
  }
}

SUIFooterBar.propTypes = {
  items: PropTypes.array.isRequired,
};

module.exports = SUIFooterBar;
