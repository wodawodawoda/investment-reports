import {connect} from 'react-redux';
import Profile from './Profile';
import { usersFetchData } from '../redux/usersActions';
import { itemsFetchData } from '../redux/importantValuesActions'

const mapStateToProps = (state) => {
  return {
    items: state.items,
    users: state.users,
    hasErrored: state.usersHasErrored,
    isLoading: state.usersIsLoading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
    fetchUsers: (url) => dispatch(usersFetchData(url))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Profile);

