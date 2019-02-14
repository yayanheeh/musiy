import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EventsView from '../../components/EventsView';
import * as EventsActions from '../../actions/events';

class EventsContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <EventsView events={this.props.events} />
    );
  }
}

function mapStateToProps (state) {
  return {
    events: state.events
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(EventsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);
