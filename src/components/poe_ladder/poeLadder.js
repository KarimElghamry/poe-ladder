import React from 'react';
import {default as axios} from 'axios';
import {LeftPanel} from '../left_panel/leftPanel.js';
import {RightPanel} from '../right_panel/rightPanel.js';
import './poeLadder.css';

const baseUrl = 'http://api.pathofexile.com/ladders/';

export class PoeLadder extends React.Component {
  handleMenuClick = async name => {
    this.setState({loading: true});
    try {
      const response = await axios.get(baseUrl + name);
      const ladder = response.data.entries;
      this.setState({ladder: ladder});
    } catch (error) {
      console.log(error);
    }
    this.setState({loading: false});
  };

  constructor(props) {
    super(props);
    this.state = {
      ladder: [],
      loading: true,
    };
  }

  componentDidMount() {
    document.body.style.backgroundColor = '#0c0c0c';
    this.handleMenuClick('Standard');
  }

  render() {
    return (
      <div className="globalLayout">
        <LeftPanel handleMenuClick={this.handleMenuClick} />
        {this.state.loading ? (
          <div className="container">
            <div className="lds-dual-ring"></div>
          </div>
        ) : (
          <RightPanel ladder={this.state.ladder} />
        )}
      </div>
    );
  }
}
