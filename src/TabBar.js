import React, { Component, PropTypes } from 'react';

import TabItem from './TabItem';

class TabBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;

    let tabItems = [];
    items.forEach(item => {
      tabItems.push(
        <TabItem key={`tab-bar-item-${item.title}-${item.icon}`} data={item} />
      );
    });

    return (
      <nav className="bar bar-tab">
        {tabItems}
      </nav>
    );
  }
}

TabBar.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TabBar;
