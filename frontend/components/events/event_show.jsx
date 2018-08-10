import React from 'react';

class EventShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchEvent(this.props.match.params.eventId);
  }

  render(){
    console.log("IN EVENT SHOW");
    console.log('SHOW PROPS', this.props);
    if (this.props.events === undefined){
      return <div>Loading.....</div>;
    }
    const event = this.props.events[this.props.match.params.eventId];
    const user = this.props.users[event.user_id];
    return(
      <div>
        <ul>
          <li>Event Info</li>
          <li>Sport Category Id: {event.category_id}</li>
          <li>Datetime: {event.date_time}</li>
          <li>Address: {event.address}</li>
          <li>City Id: {event.city_id}</li>
          <li>Country: {event.country}</li>
          <li>Description: {event.description}</li>
        </ul>

        <ul>
          <li>Author Info</li>
          <li>Name: {user.name}</li>
          <li>user_catchphrase: {user.user_catchphrase}</li>
          <li>user_description: {user.user_description}</li>
        </ul>
      </div>
    );
  }
}

export default EventShow;
