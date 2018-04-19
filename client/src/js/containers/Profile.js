import React from 'react';
import Manager from './Manager'
import ReportTable from './ReportTable'

class Profile extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: ["1"]
    }
  }
  componentDidMount() {
    this.props.fetchData('http://localhost:3000/api/year/2011');
    this.props.fetchUsers('http://localhost:3000/api/users');
  }
  managers() {
    return this.props.users.map((val, idx) => {
      if(this.props.match.params.id === val.id) { // Return proper manager component
        return (
          <div className="profile">
            <Manager data={val} parent="profile" />
            <p className="profile__info">{val.info}</p>
            <p className="profile__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, neque!</p>
          </div>

        )
      }
      return null
    })
  }
  render() {
    console.log(this.props.match.params.id)
    // TODO after changing settings Redux gets update but Reporst table returns error on fetch after updating link
    return this.managers()
  }
}

export default Profile;