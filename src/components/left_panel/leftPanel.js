import React from 'react';
import './leftPanel.css';

export class LeftPanel extends React.Component {
  menuItems = ['Standard', 'Hardcore', 'SSF Standard', 'Metamorph'];

  render() {
    return (
      <div className="leftPanel">
        {this.menuItems.map(item => (
          <MenuButton
            key={item}
            name={item}
            handleMenuClick={this.props.handleMenuClick}
          />
        ))}
      </div>
    );
  }
}

class MenuButton extends React.Component {
  render() {
    return (
      <button
        className="menuButton"
        onClick={() => this.props.handleMenuClick(this.props.name)}
      >
        {this.props.name}
      </button>
    );
  }
}
