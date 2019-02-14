import React from 'react';
import _ from 'lodash';
import Header from '../Header';
let moment = require('moment');
const shell = require('electron').shell;

import styles from './styles.scss';
let latestMonth = -1;
class EventsView extends React.Component {
    constructor(props) {
        super(props);
    }


    renderMonthBlock (date) {
        return (
            <div className={styles.event_container} key={'month-' + date.format('MM-YYYY')}>
                <div className={styles.date_month}>
                    <div>{date.format('MMMM')}</div>
                </div>
                <div className={styles.date_year}>
                    {date.format('YYYY')}
                </div>
            </div>);
    }

    handleEventClick (event) {
        shell.openExternal(event.uri);
    }
    renderEvent (event, index) {
        let radientX = Math.round(Math.random() * 100);
        let radientY = Math.round(Math.random() * 100);
        let eventDate = moment(event.start.date, 'YYYY-MM-DD');
        return (
            <a href='#' onClick={() => this.handleEventClick(event)} key={'event-' + index}>
                <div className={styles.event_container} style={{ backgroundImage: 'radial-gradient(circle at ' + radientX + '% ' + radientY + '%, #ff79c6, #6272a4)' }}>
                    <div className={styles.event_date}>
                        {eventDate.format('DD/MM')}
                    </div>
                    <div className={styles.event_name}>
                        {event.displayName}
                    </div>
                    <div className={styles.event_footer}>
                        {event.location.city}
                    </div>
                </div>
            </a >
        );
    }
    renderMonthsAndEvent (event, index) {
        let eventDate = moment(event.start.date, 'YYYY-MM-DD');
        if (latestMonth !== eventDate.month()) {
            latestMonth = eventDate.month();
            return ([this.renderMonthBlock(eventDate), this.renderEvent(event, index)]
            );
        }
        return this.renderEvent(event, index);
    }

    renderHeader () {
        return (
            <Header key='header'>
                Upcoming events
            </Header>

        );
    }
    render () {
        let renderList = [this.renderHeader()];
        let events = this.props.events.eventsSearchResults.info;
        if (_.get(events, 'length', -1) > 0) {
            renderList.push(<div className={styles.events_container} key='events-container'>
                {events.map((event, index) => this.renderMonthsAndEvent(event, index))}
            </div >);
        } else {
            renderList.push(<div key='no-event'>We haven't found any event for the current Artist !</div>);
        }
        return renderList;
    }
}

export default EventsView;
