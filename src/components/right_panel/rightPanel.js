import React from 'react';
import './rightPanel.css';

export class RightPanel extends React.Component {
  render() {
    return (
      <div className="rightPanel">
        {this.props.ladder.map(entry => (
          <h1>{entry.rank}</h1>
        ))}
      </div>
    );
  }
}
