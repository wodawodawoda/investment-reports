import {connect} from 'react-redux';
import Reports from './Reports';
import { itemsFetchData } from '../redux/importantValuesActions';

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
    link: state.settings
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Reports);
