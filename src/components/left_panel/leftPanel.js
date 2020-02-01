import React from 'react';
import './leftPanel.css';

export class LeftPanel extends React.Component {
  menuItems = [
    'Standard',
    'Hardcore',
    'SSF Standard',
    'Metamorph',
    'Metamorph',
  ];

  render () {
    return (
      <div className="leftPanel">
        {this.menuItems.map (item => <MenuButton name={item} />)}
      </div>
    );
  }
}

class MenuButton extends React.Component {
  render () {
    return <button className="menuButton">{this.props.name}</button>;
  }
}
