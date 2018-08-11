import React from 'react';
import {Link} from 'react-router-dom';

const EventIndexItem = (props) => {
  let date = new Date(props.event.date_time);
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let day = days[date.getDay()];
  // let hour = date.getHours();
  let hour = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
  let until = date.setHours((date.getHours() + 2) % 24);
   until = date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
  let dateArr = date.toString().split(" ");
  //need to modify spots left after worked on join events
  return(
  <div className='index-item-wrapper'>

      <div className='date-user-wrapper'>
        <div className='date-wrapper'>
          <div className='category'>{props.event.category_id}</div>
          <div className= 'day'>{day}</div>
          <div className='date'>{`${dateArr[1]} ${dateArr[2]}`}</div>
          <div className='hour'>{`${hour}-${until}`}</div>
        </div>
        <div className= 'user'>{props.user.name}</div>
      </div>
      <div className='address'>{`${props.event.address},  ${props.event.city_id}`}</div>
        <hr></hr>
      <div className='spots'>{`${props.event.num_of_members} spots left`}</div>
      <div className='show-link'><Link to={`/events/${props.event.id}`}> THIS ONE → </Link></div>
  </div>
  );
};

export default EventIndexItem;