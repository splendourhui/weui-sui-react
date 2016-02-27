import React, { Component, PropTypes } from 'react';

class TabItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    let iconContent = '';
    let titleContent = '';
    let badgeContent = '';

    if (data.icon) {
      iconContent = (
        <span className={`icon ${data.icon}`}></span>
      );
      titleContent = (
        <span className={`tab-label`}>{data.title || ''}</span>
      );
      if (data.badge) {
        badgeContent = (
          <span className={`badge`}>{data.badge}</span>
        );
      }
    } else {
      titleContent = (
        <span>{data.title || ''}</span>
      );
    }

    return (
      <a
        className={`tab-item external ${data.active ? 'active' : ''} ${data.extraClass}`}
        href={`${data.href || '#'}`}
      >
        {iconContent}
        {titleContent}
        {badgeContent}
      </a>
    );
  }
}

TabItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TabItem;
