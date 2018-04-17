import {connect} from 'react-redux';
import Settings from './Settings';
import { changeBase } from '../redux/settingsActions';

const mapDispatchToProps = dispatch => ({
  changeBase: (text, key) => {
    console.log(key)
    // if(key !== 13) return
    console.log('elo')
    dispatch(changeBase(text))
  }
});

export default connect(null, mapDispatchToProps)(Settings);

