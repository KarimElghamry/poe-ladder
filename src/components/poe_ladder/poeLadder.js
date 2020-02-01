import React from 'react';
import {LeftPanel} from '../left_panel/leftPanel.js';
import {RightPanel} from '../right_panel/rightPanel.js';
import './poeLadder.css';

export class PoeLadder extends React.Component {
  render () {
    return (
      <div className="globalLayout">
        <LeftPanel />
        <RightPanel />
      </div>
    );
  }
}
