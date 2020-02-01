import React from 'react';
import './rightPanel.css';

export class RightPanel extends React.Component {
  render() {
    return (
      <div className="rightPanel">
        {this.props.ladder.map(entry => (
          <CharacterTile key={entry.character.name} entry={entry} />
        ))}
      </div>
    );
  }
}

class CharacterTile extends React.Component {
  render() {
    return (
      <div className="characterTile">
        <img
          src={require(`../../assets/characters/${this.props.entry.character.class}.png`)}
          alt=""
          className="characterImage"
        ></img>
        <div className="characterInfo">
          <div>{`Name: ${this.props.entry.character.name}`}</div>
          <div>{`Level: ${this.props.entry.character.level}`}</div>
          <div>{`Class: ${this.props.entry.character.class}`}</div>
          <div>{`Rank: ${this.props.entry.rank}`}</div>
        </div>
        <div className="playerStatus">
          <div
            className={this.props.entry.online ? 'greenCircle' : 'redCircle'}
          ></div>
          <div>{this.props.entry.online ? 'online' : 'offline'}</div>
        </div>
      </div>
    );
  }
}
