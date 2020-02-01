import React from 'react';
import './leftPanel.css';
import {default as axios} from 'axios';

export class LeftPanel extends React.Component {
  getMainLeagues = async () => {
    const url = 'http://api.pathofexile.com/leagues?type=main&compact=1 ';
    const response = await axios.get(url);
    const menuItems = response.data.map(league => league.id);
    this.setState({menuItems: menuItems});
  };

  constructor(props) {
    super(props);
    this.state = {
      menuItems: [],
    };
    this.getMainLeagues();
  }

  render() {
    return (
      <div className="leftPanel">
        {this.state.menuItems.map(item => (
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
