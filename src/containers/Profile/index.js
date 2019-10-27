// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Profile from 'src/components/Profile';

// Action Creators
import { getProfile, getPins } from 'src/store/reducer/profile';


const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  pins: state.profile.pins,
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => {
    const action = getProfile();
    dispatch(action);
  },
  getPins: () => {
    const action = getPins();
    dispatch(action);
  },
});

// Container
const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

// == Export
export default ProfileContainer;
