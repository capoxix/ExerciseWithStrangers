import {connect} from 'react-redux';
import EventShow from './event_show';
import {fetchEvent} from '../../actions/event_actions';

const msp = (state) => ({
  errors: state.errors,
  events: state.entities.events,
  users: state.entities.users,
  cities: Object.values({
    1 : {id: 1, name: 'San Francisco'},
    2 : {id: 2, name: 'Oakland'},
    3 : {id: 3, name: 'Los Angeles'}
  }),
  categories: Object.values({
    2: {id: 2, name: 'Basketball'},
    3: {id: 3, name: 'Soccer'},
    4: {id: 4, name: 'Tennis'}
  }),
});

const mdp = (dispatch) => ({
  fetchEvent: (id) => dispatch(fetchEvent(id))
});

export default connect(msp, mdp)(EventShow);