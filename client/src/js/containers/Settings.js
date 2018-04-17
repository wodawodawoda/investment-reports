import React from 'react';

class Settings extends React.Component {
  render() {
    // TODO after changing settings Redux gets update but Reporst table returns error on fetch after updating link
    return (
      <div className="settings">
        <p>Change default database</p>
        <input type="text" onChange={e => this.props.changeBase(e.target.value, e.keyCode)}/>
      </div>
    )
  }
}

export default Settings;