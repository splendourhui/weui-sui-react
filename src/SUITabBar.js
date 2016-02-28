import React, { Component, PropTypes } from 'react';

import SUITabItem from './SUITabItem';

class SUITabBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;

    let tabItems = [];
    items.forEach(item => {
      tabItems.push(
        <SUITabItem key={`tab-bar-item-${item.title}-${item.icon}`} data={item} />
      );
    });

    return (
      <nav className="bar bar-tab">
        {tabItems}
      </nav>
    );
  }
}

SUITabBar.propTypes = {
  items: PropTypes.array.isRequired,
};

module.exports = SUITabBar;
