import {connect} from 'react-redux';
import Settings from './Settings';
import { changeBase } from '../redux/settingsActions';

const mapDispatchToProps = dispatch => ({
  changeBase: (text, key) => {
    // if(key !== 13) return
    dispatch(changeBase(text))
  }
});

export default connect(null, mapDispatchToProps)(Settings);

