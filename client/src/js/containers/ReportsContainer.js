import {connect} from 'react-redux';
import Reports from './Reports';
import { itemsFetchData } from '../redux/importantValuesActions';
import { usersFetchData } from '../redux/usersActions'

const mapStateToProps = (state) => {
  return {
    users: state.users,
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
    link: state.settings
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
    fetchUsers: (url) => dispatch(usersFetchData(url))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Reports);
